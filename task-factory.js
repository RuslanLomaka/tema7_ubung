(function () {
  if (!window.appData) {
    throw new Error("data.js wurde nicht geladen.");
  }

  const { vocabulary = [], uiConfig = {} } = window.appData;
  const errorSearchPrompt = uiConfig.staticText?.errorSearchPrompt || "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.";

  function randomInt(max) {
    if (globalThis.crypto && globalThis.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      globalThis.crypto.getRandomValues(values);
      return values[0] % max;
    }

    return Math.floor(Math.random() * max);
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = randomInt(index + 1);
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function canonicalGerman(text) {
    return String(text)
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/Ä/g, "ae")
      .replace(/Ö/g, "oe")
      .replace(/Ü/g, "ue")
      .replace(/ß/g, "ss");
  }

  function normalizeText(text) {
    return canonicalGerman(text)
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function normalizeWord(text) {
    return canonicalGerman(text)
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function tokenize(sentence) {
    return sentence.match(/[A-Za-zÄÖÜäöüß]+|[.,!?;:]/g) || [];
  }

  function formatSentenceFromTokens(tokens) {
    return tokens.join(" ").replace(/\s+([.,!?;:])/g, "$1");
  }

  function getUniqueSentenceAnswers(answers) {
    const seen = new Set();
    return (answers || []).filter((answer) => {
      const normalized = normalizeText(answer);
      if (!normalized || seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
  }

  function stripArticle(text) {
    return String(text).replace(/^(der|die|das)\s+/i, "").trim();
  }

  function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function buildVerbPresentCandidate(basicForm) {
    const infinitive = basicForm.replace(/^sich\s+/, "").trim();

    if (!infinitive.endsWith("en") || infinitive.length < 4) {
      return "";
    }

    const stem = infinitive.slice(0, -2);
    return `${stem}t`;
  }

  function cleanVerbForm(text) {
    return String(text)
      .replace(/^(hat|ist)\s+/i, "")
      .replace(/\bsich\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function buildAdjectiveSurfaceForms(basicForm) {
    const stem = basicForm.trim();
    const endings = ["", "e", "en", "em", "er", "es"];
    return endings.map((ending) => `${stem}${ending}`);
  }

  const vocabularyByBasicForm = new Map(
    vocabulary.map((item) => [normalizeWord(item.basicForm), item])
  );

  const GAP_FILL_CATEGORY_PRIORITY = {
    verb: 0,
    noun: 1,
    adjective: 2,
    grammar: 3
  };

  const GRAMMAR_SURFACE_FORMS = {
    hätte: ["hätte", "hätten"],
    wären: ["wäre", "wären"]
  };

  function buildVocabularySurfaceForms(item) {
    if (!item) return [];

    if (item.category === "grammar") {
      return GRAMMAR_SURFACE_FORMS[item.basicForm] || [item.basicForm];
    }

    if (item.category === "noun") {
      const forms = [stripArticle(item.basicForm)];
      if (item.forms && !/^(kein|nur)\s+Plural$/i.test(item.forms)) {
        forms.push(stripArticle(item.forms));
      }
      return forms;
    }

    if (item.category === "adjective") {
      return buildAdjectiveSurfaceForms(item.basicForm);
    }

    if (item.category === "verb") {
      const forms = [item.basicForm.replace(/^sich\s+/, "").trim()];
      const presentCandidate = buildVerbPresentCandidate(item.basicForm);
      if (presentCandidate) {
        forms.push(presentCandidate);
      }

      const rawForms = String(item.forms || "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);

      rawForms.forEach((value) => {
        const cleaned = cleanVerbForm(value);
        if (cleaned) {
          forms.push(cleaned);
        }
      });

      return forms;
    }

    return [item.basicForm];
  }

  function findSurfaceMatch(sentence, candidates) {
    const uniqueCandidates = [...new Set((candidates || []).filter(Boolean))]
      .sort((left, right) => right.length - left.length);

    for (const candidate of uniqueCandidates) {
      const regex = new RegExp(`(^|[^\\p{L}])(${escapeRegExp(candidate)})(?=$|[^\\p{L}])`, "iu");
      const match = sentence.match(regex);
      if (match) {
        return match[2];
      }
    }

    return "";
  }

  function resolveVocabularyLink(link) {
    return vocabularyByBasicForm.get(normalizeWord(link)) || null;
  }

  function buildGapFillCandidate(entry) {
    const linkedItems = (entry.vocabularyLinks || [])
      .map(resolveVocabularyLink)
      .filter(Boolean);

    const candidates = linkedItems
      .map((item) => {
        const matchedSurface = findSurfaceMatch(entry.sentence, buildVocabularySurfaceForms(item));
        if (!matchedSurface) return null;

        return {
          item,
          answer: matchedSurface,
          hint: item.hintDe,
          categoryPriority: GAP_FILL_CATEGORY_PRIORITY[item.category] ?? 99
        };
      })
      .filter(Boolean)
      .sort((left, right) => (
        left.categoryPriority - right.categoryPriority
        || right.answer.length - left.answer.length
      ));

    const preferred = candidates.filter((candidate) => {
      const answer = normalizeWord(candidate.answer);
      return answer.length >= 4
        && !/^\d+$/.test(answer)
        && !["oder", "und", "aber", "auch", "zu", "um", "an", "in", "mit", "bis"].includes(answer);
    });

    return preferred[0] || candidates[0] || null;
  }

  function replaceSurfaceWithGap(sentence, answer) {
    const regex = new RegExp(`(^|[^\\p{L}])(${escapeRegExp(answer)})(?=$|[^\\p{L}])`, "u");
    return sentence.replace(regex, (_, prefix) => `${prefix}___`);
  }

  function chooseErrorVariant(entry) {
    const typoOptions = entry?.errorSearch?.typoOptions || {};
    const candidates = Object.entries(typoOptions)
      .map(([correctWord, wrongWords]) => ({
        correctWord,
        wrongWords: Array.isArray(wrongWords)
          ? wrongWords.filter((wrongWord) => {
            if (!wrongWord || /\s/.test(wrongWord)) return false;
            return normalizeWord(wrongWord) !== normalizeWord(correctWord);
          })
          : []
      }))
      .filter((item) => item.correctWord && item.wrongWords.length);

    if (!candidates.length) {
      return null;
    }

    const selectedCandidate = candidates[randomInt(candidates.length)];
    const wrongWord = selectedCandidate.wrongWords[randomInt(selectedCandidate.wrongWords.length)];
    const tokens = tokenize(entry.sentence);
    const updatedTokens = [...tokens];
    const replacementIndex = updatedTokens.findIndex((token) => normalizeWord(token) === normalizeWord(selectedCandidate.correctWord));

    if (replacementIndex === -1) {
      return null;
    }

    updatedTokens[replacementIndex] = wrongWord;

    return {
      sentence: formatSentenceFromTokens(updatedTokens),
      wrongWord,
      correctWord: selectedCandidate.correctWord
    };
  }

  function buildSentenceMatchPair(sentence) {
    const tokens = tokenize(sentence);
    if (tokens.length < 4) return null;

    const commaIndex = tokens.indexOf(",");
    if (commaIndex > 0 && commaIndex < tokens.length - 2) {
      return {
        start: formatSentenceFromTokens(tokens.slice(0, commaIndex + 1)),
        end: formatSentenceFromTokens(tokens.slice(commaIndex + 1))
      };
    }

    const wordIndexes = tokens
      .map((token, index) => ({ token, index }))
      .filter(({ token }) => /\p{L}/u.test(token));

    if (wordIndexes.length < 4) return null;

    const splitWordIndex = Math.ceil(wordIndexes.length / 2) - 1;
    const splitTokenIndex = wordIndexes[splitWordIndex]?.index + 1;

    if (!splitTokenIndex || splitTokenIndex >= tokens.length) return null;

    return {
      start: formatSentenceFromTokens(tokens.slice(0, splitTokenIndex)),
      end: formatSentenceFromTokens(tokens.slice(splitTokenIndex))
    };
  }

  function buildSentenceBankTasks(entries) {
    return entries.flatMap((entry) => {
      const uniqueCorrectAnswers = getUniqueSentenceAnswers([
        entry.sentence,
        ...(entry.alternativeCorrectAnswers || [])
      ]);
      const generatedErrorVariant = chooseErrorVariant(entry);
      const generatedGapFill = buildGapFillCandidate(entry);

      const tasksFromSentence = [
        {
          id: `pilot_sb_${entry.id}`,
          type: "sentenceBuilder",
          level: entry.level,
          grammarFocus: entry.grammarFocus,
          prompt: "Bringe die Wörter in die richtige Reihenfolge.",
          correctAnswers: uniqueCorrectAnswers.length ? uniqueCorrectAnswers : [entry.sentence],
          translations: entry.translations,
          sentenceGrammarNotes: entry.sentenceGrammarNotes,
          sourceSentenceId: entry.id
        },
        {
          id: `pilot_mc_${entry.id}`,
          type: "multipleChoice",
          level: entry.level,
          grammarFocus: entry.grammarFocus,
          prompt: "Wähle den richtigen Satz.",
          options: shuffle([entry.sentence, ...(entry.multipleChoice?.wrongOptions || [])]),
          correctAnswers: [entry.sentence],
          translations: entry.translations,
          sentenceGrammarNotes: entry.sentenceGrammarNotes,
          sourceSentenceId: entry.id
        }
      ];

      if (generatedGapFill?.answer) {
        tasksFromSentence.push({
          id: `pilot_gf_${entry.id}`,
          type: "gapFill",
          level: entry.level,
          grammarFocus: entry.grammarFocus,
          prompt: "Schreibe das fehlende Wort.",
          sentence: replaceSurfaceWithGap(entry.sentence, generatedGapFill.answer),
          displaySentence: replaceSurfaceWithGap(entry.sentence, generatedGapFill.answer),
          correctAnswers: [generatedGapFill.answer],
          hint: generatedGapFill.hint,
          translations: entry.translations,
          sentenceGrammarNotes: entry.sentenceGrammarNotes,
          sourceSentenceId: entry.id
        });
      }

      const isCorrectSentence = randomInt(100) < 50;
      const errorSearchTask = {
        id: `pilot_es_${entry.id}`,
        type: "errorSearch",
        level: "B1", // 'find the misspelling always has to be medium'
        grammarFocus: entry.grammarFocus,
        prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
        sentence: (isCorrectSentence || !generatedErrorVariant) ? entry.sentence : generatedErrorVariant.sentence,
        wrongWord: (isCorrectSentence || !generatedErrorVariant) ? null : generatedErrorVariant.wrongWord,
        correctForm: (isCorrectSentence || !generatedErrorVariant) ? null : generatedErrorVariant.correctWord,
        correctSentence: entry.sentence,
        noMistake: isCorrectSentence || !generatedErrorVariant,
        translations: entry.translations,
        sentenceGrammarNotes: entry.sentenceGrammarNotes,
        sourceSentenceId: entry.id
      };

      tasksFromSentence.push(errorSearchTask);

      return tasksFromSentence;
    });
  }

  function buildFormTrainingPool(formTasks) {
    return formTasks.flatMap((task) => {
      // Re-evaluate difficulty for verbs based on the form being asked
      const baseLevel = task.level || "A2";
      let taskLevel = baseLevel;

      if (task.trainingKind === "verb" || task.trainingKind === "adjective") {
        if (task.missingForm === "preterite" || task.missingForm === "participle" || task.missingForm === "comparative" || task.missingForm === "superlative") {
          // If the word itself is already B1/B2, keep it. If it's A2, bump to B1 (Medium).
          if (baseLevel === "A2") taskLevel = "B1";
        }
      }

      if (task.trainingKind !== "noun") {
        return [{
          ...task,
          level: taskLevel
        }];
      }

      const base = {
        ...task,
        level: taskLevel,
        forms: { ...(task.forms || {}) }
      };
      const variants = [
        {
          ...base,
          id: `${task.id}_article`,
          missingForm: "article",
          correctAnswers: [task.forms.article]
        }
      ];

      if (task.forms?.plural) {
        variants.push({
          ...base,
          id: `${task.id}_plural`,
          missingForm: "plural",
          correctAnswers: [task.forms.plural]
        });
      }

      return variants;
    });
  }

  function buildAllTasks(sentenceEntries, formTasks) {
    return [
      ...buildSentenceBankTasks(sentenceEntries),
      ...buildFormTrainingPool(formTasks)
    ];
  }

  window.TaskFactory = {
    buildSentenceBankTasks,
    buildFormTrainingPool,
    buildSentenceMatchPair,
    buildAllTasks
  };
}());
