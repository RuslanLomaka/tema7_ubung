if (!window.appData) {
  throw new Error("data.js wurde nicht geladen.");
}

const {
  settings,
  grammarConcepts,
  tasks: mainTasks,
  vocabulary,
  sentenceBankV2 = [],
  taskHelpCopy = {},
  dialogs = [],
  uiConfig = {}
} = window.appData;

const LEVELS = ["A2", "B1", "B2"];
const ROUND_POLICY_CONFIG = uiConfig.roundPolicy || {};
const TASK_TYPES = ROUND_POLICY_CONFIG.taskTypes || ["sentenceBuilder", "sentenceMatch", "vocabHintMatch", "multipleChoice", "gapFill", "formTraining", "errorSearch"];
const TASK_TYPE_LABELS = uiConfig.taskTypeLabels || {};
const LEVEL_LABELS = uiConfig.levelLabels || {};
const FORM_TRAINING_KINDS = uiConfig.formTrainingKinds || ["verb", "adjective", "noun"];
const QUESTION_COUNT_OPTIONS = uiConfig.questionCountOptions || [15, 30, 60];
const SENTENCE_MATCH_COLORS = uiConfig.sentenceMatchColors || ["#e11d48", "#d4a017", "#8b5e3c", "#2563eb"];
const VOCAB_HINT_MATCH_COLORS = uiConfig.vocabHintMatchColors || ["#d81b60", "#1e88e5", "#43a047", "#f4511e", "#8e24aa", "#00acc1"];
const UI_TEXT = uiConfig.staticText || {};
const TEXT = {
  theory: UI_TEXT.theory || "Theorie",
  testStart: UI_TEXT.testStart || "Test starten",
  backToTheory: UI_TEXT.backToTheory || "Zurück zur Theorie",
  inTest: UI_TEXT.inTest || "Im Test",
  ready: UI_TEXT.ready || "Bereit",
  resultReady: UI_TEXT.resultReady || "Ergebnis da",
  continue: UI_TEXT.continue || "Weiter",
  cancel: UI_TEXT.cancel || "Abbrechen",
  loseProgressTitle: UI_TEXT.loseProgressTitle || "Fortschritt verlieren?",
  loseProgressText:
    UI_TEXT.loseProgressText || "Wenn du jetzt zur Theorie gehst, verlierst du deinen aktuellen Testfortschritt.",
  toTheory: UI_TEXT.toTheory || "Zur Theorie",
  stayInTest: UI_TEXT.stayInTest || "Im Test bleiben",
  restartTitle: UI_TEXT.restartTitle || "Neuen Test starten?",
  restartText:
    UI_TEXT.restartText || "Wenn du jetzt einen neuen Test startest, verlierst du deinen aktuellen Fortschritt.",
  restartAccept: UI_TEXT.restartAccept || "Neu starten",
  errorSearchCorrect: UI_TEXT.errorSearchCorrect || "Der Satz ist korrekt.",
  errorSearchPrompt:
    UI_TEXT.errorSearchPrompt || "Klicke auf den Fehler oder wähle: Der Satz ist korrekt."
};
const legacyFormTasks = mainTasks.filter((task) => task.type === "formTraining");
const RECENT_SENTENCE_MATCH_HISTORY_LIMIT = ROUND_POLICY_CONFIG.recentSentenceMatchHistoryLimit || 8;
const RECENT_FORM_HISTORY_LIMIT = ROUND_POLICY_CONFIG.recentFormHistoryLimit || 10;
const SENTENCE_MATCH_MIN_ROUND_COUNT = ROUND_POLICY_CONFIG.sentenceMatchMinRoundCount || 4;
const SENTENCE_MATCH_PAIRS_PER_BOARD = ROUND_POLICY_CONFIG.sentenceMatchPairsPerBoard || 4;
const TASK_HELP_COPY = taskHelpCopy;
const taskFactory = window.TaskFactory;
if (!taskFactory) {
  throw new Error("task-factory.js wurde nicht geladen.");
}

let tasks = [];
let results = [];
let currentIndex = 0;
let score = 0;
let locked = false;
let testActive = false;
let testFinished = false;
let currentView = "theory";
let selectedChoice = null;
let selectedErrorWord = null;
let gapInput = null;
let formInput = null;
let activeTextInput = null;
let draggedWordButton = null;
let selectedFormChoice = null;
let formChoiceButtons = [];
let selectedMatchStart = null;
let sentenceMatchConnections = {};
let sentenceMatchConnectionColors = {};
let selectedLanguage = settings.defaultLanguage;
let selectedQuestionCount = 15;
let selectedDifficultyMode = "mixed";
let selectedQuestionPreset = "15";
let allTasks = [];
let recentSentenceMatchIdsByLevel = {
  A2: [],
  B1: [],
  B2: []
};
let recentFormKeys = [];

const topicTitle = document.querySelector("#topicTitle");
const theoryView = document.querySelector("#theoryView");
const testView = document.querySelector("#testView");
const theoryNavButton = document.querySelector("#theoryNavButton");
const testNavButton = document.querySelector("#testNavButton");
const startTestFromTheoryButton = document.querySelector("#startTestFromTheoryButton");
const languageSelect = document.querySelector("#languageSelect");
const roundLabel = document.querySelector("#roundLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const progressFill = document.querySelector("#progressFill");
const taskType = document.querySelector("#taskType");
const taskTitle = document.querySelector("#taskTitle");
const levelBadge = document.querySelector("#levelBadge");
const taskHelpToggle = document.querySelector("#taskHelpToggle");
const taskHelpPanel = document.querySelector("#taskHelpPanel");
const taskHelpTitle = document.querySelector("#taskHelpTitle");
const taskHelpBody = document.querySelector("#taskHelpBody");
const taskHelpDecide = document.querySelector("#taskHelpDecide");
const taskHelpExample = document.querySelector("#taskHelpExample");
const taskHelpSubmit = document.querySelector("#taskHelpSubmit");
const answerArea = document.querySelector("#answerArea");
const wordBank = document.querySelector("#wordBank");
const feedback = document.querySelector("#feedback");
const postSubmitPanel = document.querySelector("#postSubmitPanel");
const translationPanel = document.querySelector("#translationPanel");
const alternatePanel = document.querySelector("#alternatePanel");
const rulePanel = document.querySelector("#rulePanel");
const ruleTitle = document.querySelector("#ruleTitle");
const ruleShort = document.querySelector("#ruleShort");
const ruleExample = document.querySelector("#ruleExample");
const sentenceGrammarBox = document.querySelector("#sentenceGrammarBox");
const sentenceGrammarLabel = document.querySelector("#sentenceGrammarLabel");
const sentenceGrammarList = document.querySelector("#sentenceGrammarList");
const whyButton = document.querySelector("#whyButton");
const moreRuleButton = document.querySelector("#moreRuleButton");
const lessRuleButton = document.querySelector("#lessRuleButton");
const ruleMore = document.querySelector("#ruleMore");
const ruleTheory = document.querySelector("#ruleTheory");
const ruleMistake = document.querySelector("#ruleMistake");
const sentenceGrammarMore = document.querySelector("#sentenceGrammarMore");
const ruleExamples = document.querySelector("#ruleExamples");
const charToolbar = document.querySelector("#charToolbar");
const clearButton = document.querySelector("#clearButton");
const checkButton = document.querySelector("#checkButton");
const nextButton = document.querySelector("#nextButton");
const finishPanel = document.querySelector("#finishPanel");
const finishText = document.querySelector("#finishText");
const overallResultValue = document.querySelector("#overallResultValue");
const overallResultDetail = document.querySelector("#overallResultDetail");
const levelStats = document.querySelector("#levelStats");
const insightBox = document.querySelector("#insightBox");
const reviewSummary = document.querySelector("#reviewSummary");
const reviewList = document.querySelector("#reviewList");
const retryTestButton = document.querySelector("#retryTestButton");
const goTheoryAfterFinishButton = document.querySelector("#goTheoryAfterFinishButton");
const grammarTheoryList = document.querySelector("#grammarTheoryList");
const vocabularySearch = document.querySelector("#vocabularySearch");
const vocabularyCategory = document.querySelector("#vocabularyCategory");
const vocabularyList = document.querySelector("#vocabularyList");
const sentenceLevelFilter = document.querySelector("#sentenceLevelFilter");
const sentenceBank = document.querySelector("#sentenceBank");
const questionCountPreset = document.querySelector("#questionCountPreset");
const difficultyModeSelect = document.querySelector("#difficultyModeSelect");
const confirmModal = document.querySelector("#confirmModal");
const confirmModalTitle = document.querySelector("#confirmModalTitle");
const confirmModalText = document.querySelector("#confirmModalText");
const confirmModalCancel = document.querySelector("#confirmModalCancel");
const confirmModalAccept = document.querySelector("#confirmModalAccept");

let modalResolver = null;
let taskHelpOpen = false;

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

function rebuildTaskBank() {
  // Runtime task generation is owned by task-factory.js. script.js keeps only
  // the currently selected task bank used by round selection and rendering.
  allTasks = taskFactory.buildAllTasks(sentenceBankV2, legacyFormTasks, vocabulary, dialogs);
}

function getLevelTaskCounts() {
  return LEVELS.reduce((accumulator, level) => {
    accumulator[level] = allTasks.filter((task) => task.level === level).length;
    return accumulator;
  }, {});
}

function getMaxMixedTaskCount() {
  const levelCounts = getLevelTaskCounts();
  const total = Object.values(levelCounts).reduce((sum, count) => sum + count, 0);
  let maxPossible = 0;

  for (let totalTasks = 1; totalTasks <= total; totalTasks += 1) {
    const distribution = ROUND_POLICY.distributeEvenly(totalTasks, LEVELS);
    const possible = LEVELS.every((level) => distribution[level] <= levelCounts[level]);
    if (possible) {
      maxPossible = totalTasks;
    }
  }

  return maxPossible;
}

function getMaxAvailableTaskCount(mode = selectedDifficultyMode) {
  if (mode === "mixed") return getMaxMixedTaskCount();
  return allTasks.filter((task) => task.level === mode).length;
}

function clampSelectedQuestionCount() {
  const maxAvailable = getMaxAvailableTaskCount(selectedDifficultyMode);
  selectedQuestionCount = Math.max(1, Math.min(selectedQuestionCount, maxAvailable || 1));
}

function renderTestSettings() {
  const maxAvailable = getMaxAvailableTaskCount(selectedDifficultyMode);
  clampSelectedQuestionCount();

  if (difficultyModeSelect) {
    difficultyModeSelect.value = selectedDifficultyMode;
  }

  if (questionCountPreset) {
    Array.from(questionCountPreset.querySelectorAll('option[data-dynamic="true"]')).forEach((option) => option.remove());
    Array.from(questionCountPreset.options).forEach((option) => {
      if (!QUESTION_COUNT_OPTIONS.includes(Number(option.value))) return;
      option.disabled = Number(option.value) > maxAvailable;
    });
    const hasPresetForCurrentCount = QUESTION_COUNT_OPTIONS.includes(selectedQuestionCount);
    if (hasPresetForCurrentCount && Number(selectedQuestionPreset) <= maxAvailable) {
      questionCountPreset.value = selectedQuestionPreset;
    } else {
      const fallback = [...QUESTION_COUNT_OPTIONS].reverse().find((value) => value <= maxAvailable);
      if (fallback) {
        selectedQuestionPreset = String(fallback);
        selectedQuestionCount = fallback;
        questionCountPreset.value = selectedQuestionPreset;
      } else {
        selectedQuestionPreset = String(selectedQuestionCount);
        const dynamicOption = document.createElement("option");
        dynamicOption.value = selectedQuestionPreset;
        dynamicOption.textContent = `${selectedQuestionCount} (aktuell)`;
        dynamicOption.dataset.dynamic = "true";
        questionCountPreset.appendChild(dynamicOption);
        questionCountPreset.value = selectedQuestionPreset;
      }
    }
  }
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

function displayGerman(text) {
  return String(text);
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

function getUniqueSentenceAnswers(answers) {
  const seen = new Set();
  return (answers || []).filter((answer) => {
    const normalized = normalizeText(answer);
    if (!normalized || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

const sentenceGrammarNotesBySentence = new Map(
  sentenceBankV2.map((entry) => [normalizeText(entry.sentence), entry.sentenceGrammarNotes || []])
);

function tokenize(sentence) {
  return sentence.match(/[A-Za-zÄÖÜäöüß]+|[.,!?;:]/g) || [];
}

function formatSentenceFromTokens(tokens) {
  return tokens.join(" ").replace(/\s+([.,!?;:])/g, "$1");
}

function formatPercent(correct, total) {
  if (!total) return "0%";
  return `${Math.round((correct / total) * 100)}%`;
}

function getLevelLabel(level) {
  return LEVEL_LABELS[level] || level;
}

function renderLevelBadge(level) {
  const options = LEVELS.map((item) => {
    const activeClass = item === level ? ` is-active level-${item}` : "";
    return `<span class="level-option${activeClass}">${getLevelLabel(item)}</span>`;
  }).join("");

  levelBadge.innerHTML = `
    <span class="level-badge-label">Schwierigkeit:</span>
    <span class="level-scale" aria-hidden="true">${options}</span>
  `;
}

function updateNavState(activeView) {
  theoryNavButton.classList.toggle("is-active", activeView === "theory");
  testNavButton.classList.toggle("is-active", activeView === "test");
  theoryNavButton.textContent = activeView === "theory" ? TEXT.theory : TEXT.backToTheory;
  testNavButton.textContent = activeView === "theory" ? TEXT.testStart : TEXT.inTest;
}

function getTaskById(taskId) {
  return allTasks.find((task) => task.id === taskId);
}

function getTranslation(task) {
  return task?.translations?.[selectedLanguage] || task?.translations?.en || "";
}

function getFormTrainingKind(task) {
  return task?.trainingKind || "verb";
}

function getFormTrainingPrompt(task) {
  const kind = getFormTrainingKind(task);
  if (kind === "adjective") return "Schreibe die fehlende Adjektivform.";
  if (kind === "noun") return "Schreibe die fehlende Nomenform.";
  return "Schreibe die fehlende Verbform.";
}

function isNounTraining(task) {
  return getFormTrainingKind(task) === "noun";
}

function isArticlePrompt(task) {
  return task?.type === "formTraining" && isNounTraining(task) && task.missingForm === "article";
}

function getVocabularyTranslation(item) {
  if (selectedLanguage === "uk") return item.meaningUk || item.meaningEn;
  if (selectedLanguage === "ar") return item.meaningAr || item.meaningEn;
  return item.meaningEn;
}

function getDefaultFormOrder(task) {
  if (task?.trainingKind === "adjective") {
    return ["positive", "comparative", "superlative"];
  }
  if (task?.trainingKind === "noun") {
    return ["singular", "plural"];
  }
  return ["infinitive", "participle", "preterite"];
}

function getFormOrder(task) {
  return task?.formOrder || getDefaultFormOrder(task);
}

function getFormLabels(task) {
  if (task?.formLabels) return task.formLabels;
  if (task?.trainingKind === "adjective") {
    return {
      positive: "Positiv",
      comparative: "Komparativ",
      superlative: "Superlativ"
    };
  }
  if (task?.trainingKind === "noun") {
    return {
      singular: "Singular",
      plural: "Plural"
    };
  }
  return {
    infinitive: "Infinitiv",
    participle: "Partizip II",
    preterite: "Präteritum"
  };
}

function getPerfectFormParts(task) {
  const rawForm = String(task?.forms?.participle || "").trim();
  const match = rawForm.match(/^(hat|ist)\s+(.+)$/i);
  if (match) {
    return {
      auxiliary: match[1].toLowerCase(),
      participle: match[2]
    };
  }

  const infinitive = canonicalGerman(task?.forms?.infinitive || "").toLowerCase();
  const auxiliary = ["einziehen", "ausziehen"].includes(infinitive) ? "ist" : "hat";
  return {
    auxiliary,
    participle: rawForm
  };
}

function getDisplayPerfectForm(task) {
  const { auxiliary, participle } = getPerfectFormParts(task);
  return `${auxiliary} ${participle}`.trim();
}

function getDisplayNounSingular(task, withBlankArticle = false) {
  const article = withBlankArticle ? "_____" : task?.forms?.article || "";
  return `${article} ${task?.forms?.singular || ""}`.trim();
}

function getDisplayNounPlural(task, withBlankPlural = false) {
  const plural = withBlankPlural ? "_____" : task?.forms?.plural || "";
  return `die ${plural}`.trim();
}

function isParticiplePrompt(task) {
  return task?.type === "formTraining" && task?.trainingKind !== "adjective" && task?.trainingKind !== "noun" && task.missingForm === "participle";
}

function getFormDisplayValue(task, key) {
  if (isNounTraining(task) && key === "singular") {
    if (isArticlePrompt(task)) return task?.forms?.singular || "";
    return getDisplayNounSingular(task);
  }
  if (isNounTraining(task) && key === "plural") return getDisplayNounPlural(task);
  if (key === "participle") return getDisplayPerfectForm(task);
  return task?.forms?.[key] || "";
}

function getMissingFormPlaceholder(task) {
  if (isArticlePrompt(task)) return "_____";
  if (isNounTraining(task) && task.missingForm === "plural") return "die _____";
  if (isParticiplePrompt(task)) return "hat / ist + _____";
  return "_____";
}

function getFormAnswerPlaceholder(task) {
  if (isArticlePrompt(task)) return "";
  if (isNounTraining(task) && task.missingForm === "plural") return "Pluralform ohne die";
  if (isParticiplePrompt(task)) return "Partizip II ohne hat / ist";
  const labels = getFormLabels(task);
  return `Fehlende Form: ${labels[task.missingForm] || task.missingForm}`;
}

function getFormSummary(task) {
  if (isNounTraining(task)) {
    const singular = task.missingForm === "article"
      ? getDisplayNounSingular(task, true)
      : getDisplayNounSingular(task);
    const plural = task.missingForm === "plural"
      ? getDisplayNounPlural(task, true)
      : getDisplayNounPlural(task);
    return `Singular: ${singular} | Plural: ${plural}`;
  }
  const labels = getFormLabels(task);
  return getFormOrder(task).map((key) => {
    const value = task.missingForm === key ? "_____" : getFormDisplayValue(task, key);
    return `${labels[key]}: ${value}`;
  }).join(" | ");
}

function expectedFormAnswer(task) {
  if (isArticlePrompt(task)) return task?.forms?.article || task.correctAnswers[0];
  if (isParticiplePrompt(task)) return getDisplayPerfectForm(task);
  return task.correctAnswers[0];
}

function getGapFillFullSentence(task) {
  const answer = task.correctAnswers[0] || "";
  const template = task.sentence || task.displaySentence || "";
  return template.replace("___", answer);
}

function getCorrectSentence(task) {
  if (Array.isArray(task.pairs)) {
    return getSentenceMatchExpectedSummary(task);
  }
  if (task.type === "gapFill") return getGapFillFullSentence(task);
  if (task.type === "formTraining") {
    return getFormOrder(task).map((key) => getFormDisplayValue(task, key)).join(" | ");
  }
  if (task.type === "errorSearch") {
    if (task.noMistake) return task.sentence;
    return task.correctSentence || task.sentence.replace(task.wrongWord, task.correctForm);
  }
  return task.correctAnswers[0];
}

function collectTheorySentences() {
  const sentenceMap = new Map();

  sentenceBankV2.forEach((entry) => {
    const text = entry.sentence;
    if (!text || sentenceMap.has(text)) return;

    sentenceMap.set(text, {
      text,
      level: entry.level,
      grammarFocus: entry.grammarFocus,
      translation: entry.translations?.[selectedLanguage] || entry.translations?.en || ""
    });
  });

  return Array.from(sentenceMap.values());
}

function renderGrammarTheory() {
  grammarTheoryList.innerHTML = "";

  const fragment = document.createDocumentFragment();
  Object.values(grammarConcepts).forEach((concept) => {
    const card = document.createElement("article");
    card.className = "theory-card collapsible";

    card.innerHTML = `
      <div class="theory-card-header">
        <h3>${displayGerman(concept.title)}</h3>
        <p class="short-rule"><strong>Kurzregel:</strong> ${displayGerman(concept.shortRule)}</p>
      </div>
      <div class="theory-card-content hidden">
        <div class="example-box"><strong>Beispiel:</strong> ${displayGerman(concept.shortExample)}</div>
        <div class="theory-text">${displayGerman(concept.fullTheory)}</div>
        <div class="mistake-box"><strong>Häufiger Fehler:</strong> ${displayGerman(concept.commonMistake)}</div>
        <ul class="example-list">
          ${(concept.moreExamples || []).map((ex) => `<li>${displayGerman(ex)}</li>`).join("")}
        </ul>
      </div>
      <button class="secondary-button toggle-details" type="button">Details anzeigen</button>
    `;

    card.querySelector(".toggle-details").addEventListener("click", (e) => {
      const content = card.querySelector(".theory-card-content");
      const isHidden = content.classList.toggle("hidden");
      e.target.textContent = isHidden ? "Details anzeigen" : "Weniger anzeigen";
      card.classList.toggle("is-expanded", !isHidden);
    });

    fragment.appendChild(card);
  });
  grammarTheoryList.appendChild(fragment);
}

function renderVocabularyTheory() {
  const query = normalizeWord(vocabularySearch.value);
  const category = vocabularyCategory.value;

  const filtered = vocabulary.filter((item) => {
    const categoryMatches = category === "all" || item.category === category;
    const textMatches = !query
      || normalizeWord(item.basicForm).includes(query)
      || normalizeWord(item.forms).includes(query)
      || normalizeWord(getVocabularyTranslation(item)).includes(query)
      || normalizeWord(item.meaningEn).includes(query);

    return categoryMatches && textMatches;
  });

  vocabularyList.innerHTML = "";
  if (!filtered.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "table-empty";
    emptyState.textContent = "Keine Wörter passen zu deinem Filter.";
    vocabularyList.appendChild(emptyState);
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "table-shell";

  const table = document.createElement("table");
  table.className = "vocab-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["Wort", "Kategorie", "Formen", "Bedeutung"].forEach((label) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = label;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = document.createElement("tbody");

  filtered.forEach((item) => {
    const row = document.createElement("tr");

    const wordCell = document.createElement("td");
    wordCell.className = "vocab-word-cell";
    wordCell.textContent = displayGerman(item.basicForm);

    const categoryCell = document.createElement("td");
    categoryCell.className = "vocab-category-cell";
    categoryCell.textContent = item.category === "noun"
      ? "Nomen"
      : item.category === "verb"
        ? "Verb"
        : item.category === "adjective"
          ? "Adjektiv"
          : "Grammatik";

    const formsCell = document.createElement("td");
    formsCell.textContent = displayGerman(item.forms);

    const translationCell = document.createElement("td");
    translationCell.textContent = getVocabularyTranslation(item);

    row.append(wordCell, categoryCell, formsCell, translationCell);
    tbody.appendChild(row);
  });

  table.append(thead, tbody);
  wrapper.appendChild(table);
  vocabularyList.appendChild(wrapper);
}

function renderSentenceTheory() {
  const levelFilter = sentenceLevelFilter.value;
  const sentences = collectTheorySentences().filter((item) => levelFilter === "all" || item.level === levelFilter);

  sentenceBank.innerHTML = "";

  sentences.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "sentence-item";

    const head = document.createElement("div");
    head.className = "sentence-head";
    const level = document.createElement("span");
    level.className = "sentence-level";
    level.textContent = `${getLevelLabel(entry.level)} · ${grammarConcepts[entry.grammarFocus]?.title || ""}`;
    head.appendChild(level);

    const sentence = document.createElement("p");
    sentence.className = "sentence-de";
    sentence.innerHTML = displayGerman(entry.text);

    const translation = document.createElement("p");
    translation.className = "sentence-translation";
    translation.innerHTML = `<strong>Übersetzung:</strong> ${entry.translation}`;

    card.append(head, sentence, translation);
    sentenceBank.appendChild(card);
  });
}

function renderTheoryView() {
  // Theory panels should render directly from the lesson data files, not from the
  // generated task bank. Otherwise grouped/generated task shapes can leak into the
  // study view as awkward combined cards.
  topicTitle.textContent = settings.topicTitle;
  roundLabel.textContent = TEXT.theory;
  scoreLabel.textContent = testFinished ? TEXT.resultReady : TEXT.ready;
  renderTestSettings();
  renderGrammarTheory();
  renderVocabularyTheory();
  renderSentenceTheory();
}

function hasOngoingProgress() {
  return testActive && !testFinished && (currentIndex > 0 || results.length > 0 || locked);
}

function showConfirmModal({ title, text, acceptLabel = TEXT.continue, cancelLabel = TEXT.cancel }) {
  confirmModalTitle.textContent = title;
  confirmModalText.textContent = text;
  confirmModalAccept.textContent = acceptLabel;
  confirmModalCancel.textContent = cancelLabel;
  confirmModal.classList.remove("hidden");
  confirmModal.setAttribute("aria-hidden", "false");
  confirmModalAccept.focus();

  return new Promise((resolve) => {
    modalResolver = resolve;
  });
}

function closeConfirmModal(accepted) {
  confirmModal.classList.add("hidden");
  confirmModal.setAttribute("aria-hidden", "true");

  if (modalResolver) {
    const resolve = modalResolver;
    modalResolver = null;
    resolve(accepted);
  }
}

async function goToTheory(force = false) {
  if (!force && hasOngoingProgress()) {
    const confirmed = await showConfirmModal({
      title: TEXT.loseProgressTitle,
      text: TEXT.loseProgressText,
      acceptLabel: TEXT.toTheory,
      cancelLabel: TEXT.stayInTest
    });
    if (!confirmed) return;
    resetTestState();
  }

  currentView = "theory";
  theoryView.classList.remove("hidden");
  testView.classList.add("hidden");
  updateNavState("theory");
  renderTheoryView();
}

function goToTestView() {
  currentView = "test";
  theoryView.classList.add("hidden");
  testView.classList.remove("hidden");
  updateNavState("test");
}

const ROUND_POLICY = {
  selectRoundTasks() {
    const dialogTask = this.pickGuaranteedDialogTask();
    const remainingCount = Math.max(0, selectedQuestionCount - (dialogTask ? 1 : 0));
    const fillerTasks = selectedDifficultyMode === "mixed"
      ? this.selectMixedRoundTasks(remainingCount)
      : this.selectSingleLevelRoundTasks(selectedDifficultyMode, remainingCount);

    return dialogTask ? [dialogTask, ...fillerTasks].slice(0, selectedQuestionCount) : fillerTasks;
  },

  distributeEvenly(total, buckets) {
    const counts = Object.fromEntries(buckets.map((bucket) => [bucket, 0]));
    const shuffledBuckets = shuffle(buckets);
    const base = Math.floor(total / buckets.length);
    let remainder = total % buckets.length;

    buckets.forEach((bucket) => {
      counts[bucket] = base;
    });

    shuffledBuckets.forEach((bucket) => {
      if (remainder <= 0) return;
      counts[bucket] += 1;
      remainder -= 1;
    });

    return counts;
  },

  getFormVariantKey(task) {
    if (task?.type !== "formTraining") return "";
    const kind = getFormTrainingKind(task);
    if (kind === "noun") return `noun_${task.missingForm || "other"}`;
    if (kind === "verb" && isParticiplePrompt(task)) return "verb_participle";
    return `${kind}_${task.missingForm || "other"}`;
  },

  getFormRecencyKey(task) {
    const kind = getFormTrainingKind(task);
    if (kind === "noun") return `noun:${task.forms?.singular || task.id}`;
    if (kind === "adjective") return `adjective:${task.forms?.positive || task.id}`;
    return `verb:${task.forms?.infinitive || task.id}`;
  },

  rememberRecentFormTask(task) {
    const key = this.getFormRecencyKey(task);
    recentFormKeys = [key, ...recentFormKeys.filter((item) => item !== key)].slice(0, RECENT_FORM_HISTORY_LIMIT);
  },

  rememberRecentSentenceMatch(level, entryIds) {
    const current = recentSentenceMatchIdsByLevel[level] || [];
    recentSentenceMatchIdsByLevel[level] = [...entryIds, ...current.filter((id) => !entryIds.includes(id))]
      .slice(0, RECENT_SENTENCE_MATCH_HISTORY_LIMIT);
  },

  pickGuaranteedDialogTask() {
    const dialogTasks = allTasks.filter((task) => {
      return task.type === "dialogOrder" && (selectedDifficultyMode === "mixed" || task.level === selectedDifficultyMode);
    });
    const fallbackTasks = allTasks.filter((task) => task.type === "dialogOrder");
    return shuffle(dialogTasks.length ? dialogTasks : fallbackTasks)[0] || null;
  },

  pickTaskFromPool(pool, usedIds, usedFormKinds, usedFormVariants) {
    const available = pool.filter((task) => !usedIds.has(task.id));
    if (!available.length) return null;

    if (available[0]?.type === "formTraining") {
      const freshByRecency = available.filter((task) => !recentFormKeys.includes(this.getFormRecencyKey(task)));
      let preferred = freshByRecency.filter((task) => !usedFormKinds.has(getFormTrainingKind(task)));
      if (!preferred.length) {
        preferred = available.filter((task) => !usedFormKinds.has(getFormTrainingKind(task)));
      }
      if (!preferred.length) {
        preferred = freshByRecency.filter((task) => !usedFormVariants.has(this.getFormVariantKey(task)));
      }
      if (!preferred.length) {
        preferred = available.filter((task) => !usedFormVariants.has(this.getFormVariantKey(task)));
      }
      if (!preferred.length) {
        preferred = freshByRecency;
      }
      if (!preferred.length) {
        preferred = available;
      }
      const choice = shuffle(preferred)[0];
      usedFormKinds.add(getFormTrainingKind(choice));
      usedFormVariants.add(this.getFormVariantKey(choice));
      usedIds.add(choice.id);
      this.rememberRecentFormTask(choice);
      return choice;
    }

    const choice = shuffle(available)[0];
    usedIds.add(choice.id);
    return choice;
  },

  buildSentenceMatchTask(level) {
    const matchingEntries = sentenceBankV2
      .filter((entry) => entry.level === level)
      .map((entry) => ({
        entry,
        pair: taskFactory.buildSentenceMatchPair(entry.sentence)
      }))
      .filter((item) => item.pair?.start && item.pair?.end);

    if (matchingEntries.length < SENTENCE_MATCH_PAIRS_PER_BOARD) return null;

    const recentIds = new Set(recentSentenceMatchIdsByLevel[level] || []);
    let freshEntries = shuffle(matchingEntries.filter(({ entry }) => !recentIds.has(entry.id)));
    const selectedEntries = [];

    while (selectedEntries.length < SENTENCE_MATCH_PAIRS_PER_BOARD && freshEntries.length) {
      selectedEntries.push(freshEntries.pop());
    }

    if (selectedEntries.length < SENTENCE_MATCH_PAIRS_PER_BOARD) {
      const fallback = shuffle(
        matchingEntries.filter(({ entry }) => !selectedEntries.some((selected) => selected.entry.id === entry.id))
      );
      while (selectedEntries.length < SENTENCE_MATCH_PAIRS_PER_BOARD && fallback.length) {
        selectedEntries.push(fallback.pop());
      }
    }

    if (selectedEntries.length < SENTENCE_MATCH_PAIRS_PER_BOARD) return null;

    this.rememberRecentSentenceMatch(level, selectedEntries.map(({ entry }) => entry.id));

    return {
      id: `sm_dynamic_${level.toLowerCase()}_${selectedEntries.map(({ entry }) => entry.id).join("_")}`,
      type: "sentenceMatch",
      level,
      grammarFocus: null,
      prompt: "Verbinde jeden Satzanfang mit dem passenden Satzende.",
      pairs: selectedEntries.map(({ pair }) => ({
        start: pair.start,
        end: pair.end
      })),
      translations: {
        en: selectedEntries.map(({ entry }, index) => `${index + 1}. ${entry.translations.en}`).join("\n"),
        uk: selectedEntries.map(({ entry }, index) => `${index + 1}. ${entry.translations.uk}`).join("\n"),
        ar: selectedEntries.map(({ entry }, index) => `${index + 1}. ${entry.translations.ar}`).join("\n")
      },
      sentenceGrammarNotes: selectedEntries.flatMap(({ entry }) => entry.sentenceGrammarNotes || []),
      sourceSentenceId: selectedEntries.map(({ entry }) => entry.id).join(",")
    };
  },

  pickTasksForLevel(level, count, usedIds) {
    const selected = [];
    const byType = Object.fromEntries(TASK_TYPES.map((type) => [type, allTasks.filter((task) => task.level === level && task.type === type)]));
    const typeOrder = shuffle(TASK_TYPES);
    const usedFormKinds = new Set();
    const usedFormVariants = new Set();
    let guard = 0;

    if (count >= SENTENCE_MATCH_MIN_ROUND_COUNT) {
      const sentenceMatchTask = this.buildSentenceMatchTask(level);
      if (sentenceMatchTask) {
        selected.push(sentenceMatchTask);
      }
    }

    while (selected.length < count && guard < 200) {
      const type = typeOrder[guard % typeOrder.length];
      const task = this.pickTaskFromPool(byType[type], usedIds, usedFormKinds, usedFormVariants);
      if (task) {
        selected.push(task);
      }
      guard += 1;

      const remainingAvailable = typeOrder.some((taskType) => byType[taskType].some((taskItem) => !usedIds.has(taskItem.id)));
      if (!remainingAvailable) break;
    }

    return selected;
  },

  selectMixedRoundTasks(total) {
    const usedIds = new Set();
    const levelCounts = this.distributeEvenly(total, LEVELS);
    const selected = [];

    LEVELS.forEach((level) => {
      selected.push(...this.pickTasksForLevel(level, levelCounts[level], usedIds));
    });

    return shuffle(selected).slice(0, total);
  },

  selectSingleLevelRoundTasks(level, total) {
    const usedIds = new Set();
    return shuffle(this.pickTasksForLevel(level, total, usedIds)).slice(0, total);
  }
};

function createPairMatchController(options) {
  return {
    selectedAnswer(task) {
      return getSentenceMatchSubmittedSummary(task);
    },
    expectedAnswer(task) {
      return getSentenceMatchExpectedSummary(task);
    },
    prompt() {
      return options.prompt;
    },
    render(task) {
      answerArea.classList.add("sentence-match");
      clearButton.classList.add("hidden");
      renderSentenceMatch(task);
    },
    validateBeforeSubmit(task) {
      if (Object.keys(sentenceMatchConnections).length >= getSentenceMatchPairs(task).length) return true;
      setFeedback("bad", options.incompleteFeedback);
      return false;
    },
    isCorrect(task) {
      return getSentenceMatchCorrectCount(task) === getSentenceMatchPairs(task).length;
    },
    lockUi(task) {
      const stage = answerArea.querySelector(".sentence-match-stage");
      if (stage) {
        updateSentenceMatchUi(stage, task);
        stage.querySelectorAll(".match-button").forEach((button) => {
          button.disabled = true;
        });
      }
    },
    clear(task) {
      selectedMatchStart = null;
      sentenceMatchConnections = {};
      sentenceMatchConnectionColors = {};
      const stage = answerArea.querySelector(".sentence-match-stage");
      if (stage) updateSentenceMatchUi(stage, task);
      hideFeedback();
    }
  };
}

const TASK_CONTROLLERS = {
  // Each task type owns its own render/validate/lock/clear behavior here.
  // Future agents should prefer extending this table over adding more branching
  // back into the generic task pipeline below.
  sentenceBuilder: {
    selectedAnswer() {
      return formatSentenceFromTokens(Array.from(answerArea.querySelectorAll(".word-button")).map((button) => button.textContent));
    },
    expectedAnswer(task) {
      return task.correctAnswers[0];
    },
    prompt(task) {
      return task.sentence || task.correctAnswers[0];
    },
    render(task) {
      answerArea.classList.add("sentence-builder");
      wordBank.classList.remove("hidden");
      shuffleSentenceParts(getSentenceBuilderParts(task), task.correctAnswers).forEach((part) => {
        wordBank.appendChild(makeWordButton(part));
      });
    },
    validateBeforeSubmit() {
      if (answerArea.children.length) return true;
      setFeedback("bad", "Wähle zuerst die Blöcke in der richtigen Reihenfolge aus.");
      return false;
    },
    isCorrect(task) {
      const candidate = this.selectedAnswer(task);
      return task.correctAnswers.some((answer) => normalizeText(answer) === normalizeText(candidate));
    },
    lockUi() {
      answerArea.querySelectorAll(".word-button").forEach((button) => {
        button.draggable = false;
        button.disabled = true;
      });
      wordBank.querySelectorAll(".word-button").forEach((button) => {
        button.draggable = false;
        button.disabled = true;
      });
    },
    clear() {
      Array.from(answerArea.children).forEach((button) => wordBank.appendChild(button));
      hideFeedback();
    }
  },
  dialogOrder: {
    selectedAnswer() {
      return getDialogSubmittedSummary();
    },
    expectedAnswer(task) {
      return getDialogExpectedSummary(task);
    },
    prompt(task) {
      return task.prompt;
    },
    render(task) {
      answerArea.classList.add("dialog-order");
      wordBank.classList.add("dialog-bank");
      wordBank.classList.remove("hidden");
      shuffle(task.lines).forEach((line) => {
        wordBank.appendChild(makeDialogLineButton(line));
      });
      answerArea.parentElement.parentElement.insertBefore(wordBank, answerArea.parentElement);
    },
    validateBeforeSubmit(task) {
      if (getDialogSubmittedLineIds().length === task.correctOrder.length) return true;
      setFeedback("bad", "Lege zuerst alle Dialogzeilen in die richtige Reihenfolge.");
      return false;
    },
    isCorrect(task) {
      const submitted = getDialogSubmittedLineIds();
      return task.correctOrder.every((lineId, index) => submitted[index] === lineId);
    },
    lockUi() {
      answerArea.querySelectorAll(".dialog-line-button").forEach((button) => {
        button.draggable = false;
        button.disabled = true;
      });
      wordBank.querySelectorAll(".dialog-line-button").forEach((button) => {
        button.draggable = false;
        button.disabled = true;
      });
    },
    clear() {
      Array.from(answerArea.children).forEach((button) => wordBank.appendChild(button));
      hideFeedback();
    }
  },
  sentenceMatch: createPairMatchController({
    prompt: "Verbinde die passenden Satzhälften.",
    incompleteFeedback: "Verbinde zuerst alle Satzanfänge mit einem Satzende."
  }),
  vocabHintMatch: createPairMatchController({
    prompt: "Verbinde Wort und Erklärung.",
    incompleteFeedback: "Verbinde zuerst alle Wörter mit einer Erklärung."
  }),

  multipleChoice: {
    selectedAnswer() {
      return selectedChoice || "";
    },
    expectedAnswer(task) {
      return task.correctAnswers[0];
    },
    prompt(task) {
      return task.correctAnswers[0];
    },
    render(task) {
      answerArea.classList.add("choice-list");
      clearButton.classList.add("hidden");
      shuffle(task.options).forEach((option) => answerArea.appendChild(makeChoiceButton(option)));
    },
    validateBeforeSubmit() {
      if (selectedChoice) return true;
      setFeedback("bad", "Wähle zuerst eine Antwort aus.");
      return false;
    },
    isCorrect(task) {
      return task.correctAnswers.some((answer) => normalizeText(answer) === normalizeText(selectedChoice));
    },
    lockUi(task, isCorrect) {
      answerArea.querySelectorAll(".choice-button").forEach((button) => {
        const rawOption = button.dataset.raw || button.textContent;
        const isRightChoice = task.correctAnswers.some((answer) => normalizeText(answer) === normalizeText(rawOption));
        const isSelectedWrong = rawOption === selectedChoice && !isCorrect;
        button.classList.toggle("correct", isRightChoice);
        button.classList.toggle("incorrect", isSelectedWrong);
        button.disabled = true;
      });
    },
    clear() {}
  },
  gapFill: {
    selectedAnswer() {
      return gapInput ? gapInput.value : "";
    },
    expectedAnswer(task) {
      return task.correctAnswers[0];
    },
    prompt(task) {
      return task.displaySentence || task.sentence;
    },
    render(task) {
      answerArea.classList.add("gap-fill");
      charToolbar.classList.remove("hidden");
      renderGapFill(task);
    },
    validateBeforeSubmit() {
      if (gapInput && normalizeWord(gapInput.value)) return true;
      setFeedback("bad", "Schreibe zuerst das fehlende Wort in die Lücke.");
      return false;
    },
    isCorrect(task) {
      return task.correctAnswers.some((answer) => normalizeWord(answer) === normalizeWord(gapInput.value));
    },
    lockUi() {
      if (gapInput) gapInput.disabled = true;
    },
    clear() {
      if (!gapInput) return;
      gapInput.value = "";
      gapInput.focus();
      hideFeedback();
    }
  },
  formTraining: {
    selectedAnswer(task) {
      if (isArticlePrompt(task)) return selectedFormChoice || "";
      if (!formInput) return "";
      if (!isParticiplePrompt(task)) return formInput.value;
      return `${selectedFormChoice || ""} ${formInput.value}`.trim();
    },
    expectedAnswer(task) {
      return expectedFormAnswer(task);
    },
    prompt(task) {
      return getFormSummary(task);
    },
    render(task) {
      answerArea.classList.add("form-training");
      charToolbar.classList.remove("hidden");
      renderFormTraining(task);
    },
    validateBeforeSubmit(task) {
      if ((isParticiplePrompt(task) || isArticlePrompt(task)) && !selectedFormChoice) {
        setFeedback("bad", isArticlePrompt(task)
          ? "Wähle zuerst den richtigen Artikel aus."
          : "Wähle zuerst hat oder ist aus.");
        return false;
      }

      if (isArticlePrompt(task)) return true;

      if (formInput && normalizeWord(formInput.value)) return true;

      setFeedback("bad", isParticiplePrompt(task)
        ? "Schreibe zuerst das Partizip II."
        : "Schreibe zuerst die fehlende Form.");
      return false;
    },
    isCorrect(task) {
      const candidate = this.selectedAnswer(task);
      return normalizeWord(expectedFormAnswer(task)) === normalizeWord(candidate);
    },
    lockUi(task, isCorrect) {
      if (formInput) {
        formInput.disabled = true;
      }
      formChoiceButtons.forEach((button) => {
        const rawChoice = button.dataset.choice;
        const expectedChoice = isArticlePrompt(task) ? task.forms.article : getPerfectFormParts(task).auxiliary;
        const isExpected = rawChoice === expectedChoice;
        const isSelectedWrong = rawChoice === selectedFormChoice && !isCorrect;
        button.classList.toggle("correct", (isParticiplePrompt(task) || isArticlePrompt(task)) && isExpected);
        button.classList.toggle("incorrect", (isParticiplePrompt(task) || isArticlePrompt(task)) && isSelectedWrong);
        button.disabled = true;
      });
    },
    clear() {
      if (formInput) {
        formInput.value = "";
        formInput.focus();
      }
      selectedFormChoice = null;
      formChoiceButtons.forEach((button) => button.classList.remove("is-active"));
      hideFeedback();
    }
  },
  errorSearch: {
    selectedAnswer() {
      return selectedErrorWord === "__correct__" ? TEXT.errorSearchCorrect : selectedErrorWord || "";
    },
    expectedAnswer(task) {
      return task.correctForm || TEXT.errorSearchCorrect;
    },
    prompt(task) {
      return task.sentence || task.correctAnswers[0];
    },
    render(task) {
      answerArea.classList.add("error-search");
      clearButton.classList.add("hidden");
      renderErrorSearch(task);
    },
    validateBeforeSubmit() {
      if (selectedErrorWord) return true;
      setFeedback("bad", "Klicke zuerst auf den Fehler oder auf „Der Satz ist korrekt“.");
      return false;
    },
    isCorrect(task) {
      if (task.noMistake) return selectedErrorWord === "__correct__";
      return selectedErrorWord === task.wrongWord;
    },
    lockUi(task, isCorrect) {
      answerArea.querySelectorAll(".error-word").forEach((button) => {
        const rawWord = button.dataset.raw || button.textContent;
        const isCorrectWord = !task.noMistake && normalizeWord(rawWord) === normalizeWord(task.wrongWord);
        const isSelectedWrong = normalizeWord(selectedErrorWord) === normalizeWord(rawWord) && !isCorrect;
        button.classList.toggle("correct", isCorrectWord);
        button.classList.toggle("incorrect", isSelectedWrong);
        button.disabled = true;
      });

      const correctSentenceButton = answerArea.querySelector(".correct-sentence-button");
      if (correctSentenceButton) {
        correctSentenceButton.classList.toggle("correct", task.noMistake);
        correctSentenceButton.classList.toggle("incorrect", selectedErrorWord === "__correct__" && !isCorrect);
        correctSentenceButton.disabled = true;
      }
    },
    clear() {}
  }
};

function selectedAnswerForTask(taskMode, task = tasks[currentIndex]) {
  const controller = TASK_CONTROLLERS[taskMode];
  if (controller?.selectedAnswer) return controller.selectedAnswer(task);

  return "";
}

function expectedAnswerForTask(task) {
  const controller = TASK_CONTROLLERS[task.type];
  if (controller?.expectedAnswer) return controller.expectedAnswer(task);

  if (task.type === "errorSearch") return task.correctForm || TEXT.errorSearchCorrect;
  return task.correctAnswers[0];
}

function promptForTask(task) {
  const controller = TASK_CONTROLLERS[task.type];
  if (controller?.prompt) return controller.prompt(task);

  return task.sentence || task.correctAnswers[0];
}

function getTaskHelpKey(task) {
  if (task.type !== "formTraining") return task.type;
  return `formTraining_${getFormTrainingKind(task)}`;
}

function getTaskHelpContent(task) {
  const languagePack = TASK_HELP_COPY[selectedLanguage] || TASK_HELP_COPY.en;
  const englishPack = TASK_HELP_COPY.en;
  const key = getTaskHelpKey(task);
  return languagePack[key] || englishPack[key] || englishPack.sentenceBuilder;
}

function renderTaskHelp(task) {
  const help = getTaskHelpContent(task);
  taskHelpTitle.textContent = help.title;
  taskHelpBody.textContent = help.body;
  taskHelpDecide.textContent = help.decide;
  taskHelpExample.textContent = help.example;
  taskHelpSubmit.textContent = help.submit;
}

function setTaskHelpOpen(isOpen) {
  taskHelpOpen = isOpen;
  taskHelpToggle.setAttribute("aria-expanded", String(isOpen));
  taskHelpPanel.classList.toggle("hidden", !isOpen);
}

function makeReviewLine(label, value) {
  const line = document.createElement("p");
  line.className = "review-line";
  const strong = document.createElement("strong");
  strong.textContent = `${label}: `;
  line.append(strong, document.createTextNode(value));
  return line;
}

function rememberTextInput(input) {
  activeTextInput = input;
  ["focus", "click", "keyup"].forEach((eventName) => {
    input.addEventListener(eventName, () => {
      activeTextInput = input;
    });
  });
}

function insertGermanCharacter(character) {
  const input = activeTextInput && !activeTextInput.disabled ? activeTextInput : gapInput || formInput;
  if (!input || input.disabled) return;

  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${character}${input.value.slice(end)}`;
  input.focus();
  input.setSelectionRange(start + character.length, start + character.length);
}

function resetRulePanel() {
  rulePanel.classList.add("hidden");
  whyButton.classList.add("hidden");
  moreRuleButton.classList.add("hidden");
  ruleMore.classList.add("hidden");
  sentenceGrammarBox.classList.add("hidden");
  sentenceGrammarList.innerHTML = "";
  sentenceGrammarMore.classList.add("hidden");
  sentenceGrammarMore.innerHTML = "";
  ruleExamples.innerHTML = "";
}

function hidePostSubmitPanels() {
  postSubmitPanel.classList.add("hidden");
  translationPanel.classList.add("hidden");
  translationPanel.textContent = "";
  alternatePanel.classList.add("hidden");
  alternatePanel.innerHTML = "";
  resetRulePanel();
}

function showTranslation(task) {
  const translation = getTranslation(task);
  if (!translation) return;
  translationPanel.classList.remove("hidden");
  translationPanel.textContent = translation;
  postSubmitPanel.classList.remove("hidden");
}

function showAlternateAnswers(task, submittedAnswer) {
  const answers = getUniqueSentenceAnswers(task.correctAnswers);
  if (task.type !== "sentenceBuilder" || answers.length < 2) return;

  const title = document.createElement("p");
  title.className = "alternate-title";
  title.textContent = "Pass auf: Auch möglich:";

  const list = document.createElement("ul");
  list.className = "alternate-list";

  answers.forEach((answer) => {
    const item = document.createElement("li");
    item.innerHTML = displayGerman(answer);
    list.appendChild(item);
  });

  alternatePanel.classList.remove("hidden");
  alternatePanel.classList.add("alternate-panel");
  alternatePanel.replaceChildren(title, list);
  postSubmitPanel.classList.remove("hidden");
}

function showSentenceMatchSolutions(task) {
  if (!Array.isArray(task.pairs)) return;

  const title = document.createElement("p");
  title.className = "alternate-title";
  title.textContent = task.solutionTitle || "Die richtigen Sätze:";

  const list = document.createElement("ul");
  list.className = "alternate-list";

  getSentenceMatchPairs(task).forEach((pair) => {
    const item = document.createElement("li");
    item.textContent = formatMatchPair(task, pair);
    list.appendChild(item);
  });

  alternatePanel.classList.remove("hidden");
  alternatePanel.classList.add("alternate-panel");
  alternatePanel.replaceChildren(title, list);
  postSubmitPanel.classList.remove("hidden");
}

function showDialogOrderSolution(task) {
  if (task.type !== "dialogOrder") return;

  const title = document.createElement("p");
  title.className = "alternate-title";
  title.textContent = "Der richtige Dialog:";

  const list = document.createElement("ol");
  list.className = "alternate-list";

  getDialogOrderedLines(task).forEach((line) => {
    const item = document.createElement("li");
    item.textContent = formatDialogLine(line);
    list.appendChild(item);
  });

  alternatePanel.classList.remove("hidden");
  alternatePanel.classList.add("alternate-panel");
  alternatePanel.replaceChildren(title, list);
  postSubmitPanel.classList.remove("hidden");
}

function getSentenceGrammarNotes(task) {
  if (Array.isArray(task.sentenceGrammarNotes) && task.sentenceGrammarNotes.length) return task.sentenceGrammarNotes;
  if (task.sentenceGrammarNote) return [task.sentenceGrammarNote];

  if (task.type === "sentenceMatch" && Array.isArray(task.pairs)) {
    const aggregated = task.pairs.flatMap((pair) => {
      const fullSentence = `${pair.start} ${pair.end}`;
      return sentenceGrammarNotesBySentence.get(normalizeText(fullSentence)) || [];
    });
    if (aggregated.length) return aggregated;
  }

  const canonicalSentence = getCorrectSentence(task);
  if (canonicalSentence) {
    const fallbackNotes = sentenceGrammarNotesBySentence.get(normalizeText(canonicalSentence));
    if (fallbackNotes?.length) return fallbackNotes;
  }
  return [];
}

function makeSentenceGrammarItem(note, showDetails = false) {
  const wrapper = document.createElement("article");

  const title = document.createElement("p");
  title.className = "sentence-grammar-item-title";
  title.innerHTML = displayGerman(note.title || "Besonderheit");
  wrapper.appendChild(title);

  if (note.summary) {
    const summary = document.createElement("p");
    summary.className = "sentence-grammar-item-text";
    summary.innerHTML = displayGerman(note.summary);
    wrapper.appendChild(summary);
  }

  if (showDetails && note.details) {
    const details = document.createElement("p");
    details.className = "sentence-grammar-item-text";
    details.innerHTML = displayGerman(note.details);
    wrapper.appendChild(details);
  }

  if (showDetails && note.example) {
    const example = document.createElement("p");
    example.className = "sentence-grammar-item-example";
    example.innerHTML = `Beispiel im Satz: ${displayGerman(note.example)}`;
    wrapper.appendChild(example);
  }

  return wrapper;
}

function renderSentenceGrammarNotes(task, expandFullTheory = false) {
  const notes = getSentenceGrammarNotes(task);
  sentenceGrammarList.innerHTML = "";
  sentenceGrammarMore.innerHTML = "";

  if (!notes.length) {
    sentenceGrammarBox.classList.add("hidden");
    sentenceGrammarMore.classList.add("hidden");
    return;
  }

  sentenceGrammarLabel.textContent = notes.length === 1
    ? "Besonderheit in diesem Satz"
    : "Besonderheiten in diesen Sätzen";

  notes.forEach((note) => {
    sentenceGrammarList.appendChild(makeSentenceGrammarItem(note, false));
    if (expandFullTheory && (note.details || note.example)) {
      sentenceGrammarMore.appendChild(makeSentenceGrammarItem(note, true));
    }
  });

  sentenceGrammarBox.classList.remove("hidden");
  sentenceGrammarMore.classList.toggle("hidden", !expandFullTheory || !sentenceGrammarMore.children.length);
}

function fillRulePanel(task, expandFullTheory = false) {
  const concept = grammarConcepts[task.grammarFocus];
  if (!concept) return;

  ruleTitle.innerHTML = displayGerman(concept.title);
  ruleShort.innerHTML = displayGerman(concept.shortRule);
  ruleExample.innerHTML = `Beispiel: ${displayGerman(concept.shortExample)}`;
  ruleTheory.innerHTML = displayGerman(concept.fullTheory);
  ruleMistake.innerHTML = `Häufiger Fehler: ${displayGerman(concept.commonMistake)}`;
  ruleExamples.innerHTML = "";
  renderSentenceGrammarNotes(task, expandFullTheory);

  (concept.moreExamples || []).forEach((example) => {
    const item = document.createElement("div");
    item.className = "rule-example-item";
    item.innerHTML = displayGerman(example);
    ruleExamples.appendChild(item);
  });

  rulePanel.classList.remove("hidden");
  postSubmitPanel.classList.remove("hidden");
  whyButton.classList.add("hidden");
  moreRuleButton.classList.remove("hidden");
  ruleMore.classList.toggle("hidden", !expandFullTheory);
  moreRuleButton.classList.toggle("hidden", expandFullTheory);
}

function setupPostSubmitState(task, isCorrect, submittedAnswer) {
  showTranslation(task);
  if (Array.isArray(task.pairs)) {
    showSentenceMatchSolutions(task);
  } else if (task.type === "dialogOrder") {
    showDialogOrderSolution(task);
  } else if (isCorrect) {
    showAlternateAnswers(task, submittedAnswer);
  }

  const concept = grammarConcepts[task.grammarFocus];
  if (!concept) return;

  if (isCorrect) {
    rulePanel.classList.remove("hidden");
    ruleTitle.textContent = concept.title;
    ruleShort.textContent = "";
    ruleExample.textContent = "";
    renderSentenceGrammarNotes(task, false);
    whyButton.classList.remove("hidden");
    moreRuleButton.classList.add("hidden");
    ruleMore.classList.add("hidden");
  } else {
    fillRulePanel(task, false);
  }
}

function getDragInsertTarget(container, xPosition) {
  const draggableButtons = Array.from(container.querySelectorAll(".word-button:not(.dragging)"));

  return draggableButtons.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = xPosition - box.left - box.width / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

function getVerticalDragInsertTarget(container, yPosition) {
  const draggableButtons = Array.from(container.querySelectorAll(".word-button:not(.dragging)"));

  return draggableButtons.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = yPosition - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

function showWordDropHints() {
  answerArea.classList.add("drop-ready");
  wordBank.classList.add("drop-ready");
}

function hideWordDropHints() {
  answerArea.classList.remove("drop-ready", "drop-over");
  wordBank.classList.remove("drop-ready", "drop-over");
}

function handleWordDragOver(event) {
  if (!draggedWordButton || locked) return;
  event.preventDefault();
  const container = event.currentTarget;
  container.classList.add("drop-over");
  if (container === answerArea) {
    const insertBefore = container.classList.contains("dialog-order")
      ? getVerticalDragInsertTarget(container, event.clientY)
      : getDragInsertTarget(container, event.clientX);
    container.insertBefore(draggedWordButton, insertBefore);
  }
}

function handleWordDrop(event) {
  if (!draggedWordButton || locked) return;
  event.preventDefault();
  const container = event.currentTarget;
  if (container === answerArea) {
    const insertBefore = container.classList.contains("dialog-order")
      ? getVerticalDragInsertTarget(container, event.clientY)
      : getDragInsertTarget(container, event.clientX);
    container.insertBefore(draggedWordButton, insertBefore);
  } else {
    container.appendChild(draggedWordButton);
  }
  hideWordDropHints();
}

function setupWordDropZone(container) {
  container.addEventListener("dragover", handleWordDragOver);
  container.addEventListener("drop", handleWordDrop);
  container.addEventListener("dragleave", (event) => {
    if (!container.contains(event.relatedTarget)) {
      container.classList.remove("drop-over");
    }
  });
}

function makeWordButton(word) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "word-button";
  button.textContent = displayGerman(word);
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    if (locked) {
      event.preventDefault();
      return;
    }
    draggedWordButton = button;
    button.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    showWordDropHints();
  });
  button.addEventListener("dragend", () => {
    draggedWordButton = null;
    button.classList.remove("dragging");
    hideWordDropHints();
  });
  button.addEventListener("click", () => {
    if (locked) return;
    const destination = button.parentElement === wordBank ? answerArea : wordBank;
    destination.appendChild(button);
  });
  return button;
}

function makeChoiceButton(option) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-button";
  button.dataset.raw = option;
  button.innerHTML = displayGerman(option);
  button.addEventListener("click", () => {
    if (locked) return;
    selectedChoice = option;
    answerArea.querySelectorAll(".choice-button").forEach((choice) => {
      choice.classList.toggle("selected", choice === button);
    });
  });
  return button;
}

function renderGapFill(task) {
  const sentence = document.createElement("p");
  sentence.className = "gap-sentence";
  sentence.innerHTML = displayGerman(task.displaySentence || task.sentence);

  const hint = document.createElement("p");
  hint.className = "gap-hint";
  hint.textContent = `Hinweis: ${displayGerman(task.hint)}`;

  gapInput = document.createElement("input");
  gapInput.type = "text";
  gapInput.className = "gap-input";
  gapInput.autocomplete = "off";
  gapInput.spellcheck = false;
  gapInput.placeholder = "Fehlendes Wort";
  rememberTextInput(gapInput);
  gapInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });

  answerArea.append(sentence, hint, gapInput);
  gapInput.focus();
}

function renderFormTraining(task) {
  const grid = document.createElement("div");
  grid.className = "form-grid";
  const perfectForm = getPerfectFormParts(task);
  selectedFormChoice = null;
  formChoiceButtons = [];
  const labels = getFormLabels(task);

  getFormOrder(task).forEach((key) => {
    const card = document.createElement("div");
    card.className = `form-card${key === task.missingForm ? " form-missing" : ""}`;
    const label = document.createElement("span");
    label.className = "form-label";
    label.textContent = labels[key];
    const value = document.createElement("strong");
    value.className = "form-value";
    if (key === task.missingForm) {
      if (isNounTraining(task) && key === "singular" && task.missingForm === "article") {
        value.textContent = getDisplayNounSingular(task, true);
      } else if (isNounTraining(task) && key === "plural" && task.missingForm === "plural") {
        value.textContent = getDisplayNounPlural(task, true);
      } else {
        value.textContent = getMissingFormPlaceholder(task);
      }
    } else {
      value.innerHTML = displayGerman(getFormDisplayValue(task, key));
    }
    card.append(label, value);
    grid.appendChild(card);
  });

  const inputWrap = document.createElement("div");
  inputWrap.className = "form-answer-stack";

  if (isParticiplePrompt(task) || isArticlePrompt(task)) {
    const pickerLabel = document.createElement("p");
    pickerLabel.className = "form-picker-label";
    pickerLabel.textContent = isArticlePrompt(task)
      ? "Wähle den richtigen Artikel:"
      : "Wähle zuerst hat oder ist:";

    const auxPicker = document.createElement("div");
    auxPicker.className = "form-aux-picker";
    const choices = isArticlePrompt(task) ? ["der", "die", "das"] : ["hat", "ist"];

    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "secondary-button aux-button";
      button.textContent = choice;
      button.dataset.choice = choice;
      button.addEventListener("click", () => {
        if (locked) return;
        selectedFormChoice = choice;
        formChoiceButtons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        formInput?.focus();
        hideFeedback();
      });
      const expectedChoice = isArticlePrompt(task) ? task.forms.article : perfectForm.auxiliary;
      if (choice === expectedChoice) {
        button.dataset.expected = "true";
      }
      formChoiceButtons.push(button);
      auxPicker.appendChild(button);
    });

    inputWrap.append(pickerLabel, auxPicker);
  }

  formInput = null;
  if (!isArticlePrompt(task)) {
    formInput = document.createElement("input");
    formInput.type = "text";
    formInput.className = "gap-input";
    formInput.autocomplete = "off";
    formInput.spellcheck = false;
    formInput.placeholder = getFormAnswerPlaceholder(task);
    rememberTextInput(formInput);
    formInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkAnswer();
    });

    inputWrap.appendChild(formInput);
  }
  answerArea.append(grid, inputWrap);
  formInput?.focus();
}

function tokenizeDisplaySentence(sentence) {
  return sentence.match(/[A-Za-zÄÖÜäöüß]+|[.,!?;:]/g) || [];
}

function makeErrorWordButton(token) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "error-word";
  button.dataset.raw = token;
  button.textContent = displayGerman(token);
  button.disabled = /^[.,!?;:]$/.test(token);
  button.addEventListener("click", () => {
    if (locked || button.disabled) return;
    selectedErrorWord = token;
    answerArea.querySelectorAll(".error-word").forEach((word) => {
      word.classList.toggle("selected", word === button);
    });
    answerArea.querySelector(".correct-sentence-button")?.classList.remove("selected");
  });
  return button;
}

function renderErrorSearch(task) {
  const sentence = document.createElement("p");
  sentence.className = "error-sentence";
  tokenizeDisplaySentence(task.sentence).forEach((token) => {
    sentence.appendChild(makeErrorWordButton(token));
  });

  const correctButton = document.createElement("button");
  correctButton.type = "button";
  correctButton.className = "choice-button correct-sentence-button";
  correctButton.textContent = TEXT.errorSearchCorrect;
  correctButton.addEventListener("click", () => {
    if (locked) return;
    selectedErrorWord = "__correct__";
    answerArea.querySelectorAll(".error-word").forEach((word) => word.classList.remove("selected"));
    correctButton.classList.add("selected");
  });

  answerArea.append(sentence, correctButton);
}

function setFeedback(type, text) {
  feedback.className = `feedback ${type}`;
  feedback.textContent = text;
}

function hideFeedback() {
  feedback.className = "feedback hidden";
  feedback.textContent = "";
}

function updateStats() {
  if (!testActive) {
    roundLabel.textContent = TEXT.theory;
    scoreLabel.textContent = TEXT.ready;
    return;
  }

  const total = tasks.length || settings.mixedRound.total;
  const taskNumber = Math.min(currentIndex + 1, total);
  roundLabel.textContent = `Runde ${taskNumber} / ${total}`;
  scoreLabel.textContent = `${score} richtig`;
  progressFill.style.width = `${(currentIndex / total) * 100}%`;
}

function buildChunksFromTokens(tokens, chunkSize) {
  const chunks = [];
  let current = [];

  tokens.forEach((token) => {
    if (/^[.,!?;:]$/.test(token)) {
      if (current.length) {
        current[current.length - 1] = `${current[current.length - 1]}${token}`;
      } else if (chunks.length) {
        chunks[chunks.length - 1] = `${chunks[chunks.length - 1]}${token}`;
      }
      return;
    }

    current.push(token);
    if (current.length >= chunkSize) {
      chunks.push(current.join(" "));
      current = [];
    }
  });

  if (current.length) {
    chunks.push(current.join(" "));
  }

  return chunks;
}

function getSentenceBuilderParts(task) {
  const uniqueAnswers = getUniqueSentenceAnswers(task.correctAnswers);
  const tokens = [...(task.wordBank || tokenize(uniqueAnswers[0]))];
  if (task.level === "B2") return tokens;
  if (task.level === "B1") return buildChunksFromTokens(tokens, 2);
  return buildChunksFromTokens(tokens, 3);
}

function shuffleSentenceParts(parts, correctAnswers) {
  const answerSet = new Set((correctAnswers || []).map((answer) => normalizeText(answer)));
  let shuffledParts = shuffle(parts);
  let guard = 0;

  while (answerSet.has(normalizeText(formatSentenceFromTokens(shuffledParts))) && guard < 20) {
    shuffledParts = shuffle(parts);
    guard += 1;
  }

  return shuffledParts;
}

function getSentenceMatchPairs(task) {
  return task.pairs || [];
}

function getDialogSubmittedLineIds() {
  return Array.from(answerArea.querySelectorAll(".dialog-line-button")).map((button) => button.dataset.lineId);
}

function formatDialogLine(line) {
  return `${line.speaker}: ${line.text}`;
}

function getDialogOrderedLines(task) {
  const linesById = new Map(task.lines.map((line) => [line.id, line]));
  return task.correctOrder.map((lineId) => linesById.get(lineId)).filter(Boolean);
}

function getDialogSubmittedSummary() {
  return Array.from(answerArea.querySelectorAll(".dialog-line-button"))
    .map((button) => `${button.dataset.speaker}: ${button.dataset.text}`)
    .join(" | ");
}

function getDialogExpectedSummary(task) {
  return getDialogOrderedLines(task).map(formatDialogLine).join(" | ");
}

function makeDialogLineButton(line) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "word-button dialog-line-button";
  button.dataset.lineId = line.id;
  button.dataset.speaker = line.speaker;
  button.dataset.text = line.text;
  button.draggable = true;

  const speaker = document.createElement("span");
  speaker.className = "dialog-line-speaker";
  speaker.textContent = line.speaker;

  const text = document.createElement("span");
  text.className = "dialog-line-text";
  text.textContent = displayGerman(line.text);

  button.append(speaker, text);

  button.addEventListener("dragstart", (event) => {
    if (locked) {
      event.preventDefault();
      return;
    }
    draggedWordButton = button;
    button.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    showWordDropHints();
  });
  button.addEventListener("dragend", () => {
    draggedWordButton = null;
    button.classList.remove("dragging");
    hideWordDropHints();
  });
  button.addEventListener("click", () => {
    if (locked) return;
    const destination = button.parentElement === wordBank ? answerArea : wordBank;
    destination.appendChild(button);
  });

  return button;
}

function formatMatchPair(task, pair) {
  return `${pair.start}${task.matchSummarySeparator || " "}${pair.end}`;
}

function getSentenceMatchCorrectCount(task) {
  return getSentenceMatchPairs(task).reduce((count, pair, index) => {
    return count + (Number(sentenceMatchConnections[index]) === index ? 1 : 0);
  }, 0);
}

function getSentenceMatchSubmittedSummary(task) {
  return getSentenceMatchPairs(task).map((pair, index) => {
    const connectedIndex = sentenceMatchConnections[index];
    const ending = Number.isInteger(connectedIndex) ? task.pairs[connectedIndex]?.end || "—" : "—";
    return formatMatchPair(task, { start: pair.start, end: ending });
  }).join(" | ");
}

function getSentenceMatchExpectedSummary(task) {
  return getSentenceMatchPairs(task).map((pair) => formatMatchPair(task, pair)).join(" | ");
}

function getSentenceMatchConnectedLeftIndex(rightIndex) {
  for (const leftIndexRaw of Object.keys(sentenceMatchConnections)) {
    if (Number(sentenceMatchConnections[leftIndexRaw]) === Number(rightIndex)) {
      return Number(leftIndexRaw);
    }
  }
  return null;
}

function getMatchColorPalette(task = tasks[currentIndex]) {
  return task?.type === "vocabHintMatch" ? VOCAB_HINT_MATCH_COLORS : SENTENCE_MATCH_COLORS;
}

function pickSentenceMatchColor(task) {
  const colors = getMatchColorPalette(task);
  const usedColors = new Set(Object.values(sentenceMatchConnectionColors));
  const availableColors = colors.filter((color) => !usedColors.has(color));
  const palette = availableColors.length ? availableColors : colors;
  return palette[randomInt(palette.length)];
}

function assignSentenceMatchColor(leftIndex, task) {
  sentenceMatchConnectionColors[leftIndex] = pickSentenceMatchColor(task);
}

function updateSentenceMatchLines(stage, task = tasks[currentIndex]) {
  const svg = stage.querySelector(".sentence-match-lines");
  if (!svg) return;

  const stageRect = stage.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${Math.max(stageRect.width, 1)} ${Math.max(stageRect.height, 1)}`);
  svg.innerHTML = "";

  getSentenceMatchPairs(task).forEach((_, leftIndex) => {
    const rightIndex = sentenceMatchConnections[leftIndex];
    if (!Number.isInteger(rightIndex)) return;

    const leftButton = stage.querySelector(`.match-button--left[data-pair-index="${leftIndex}"]`);
    const rightButton = stage.querySelector(`.match-button--right[data-pair-index="${rightIndex}"]`);
    if (!leftButton || !rightButton) return;

    const leftDot = leftButton.querySelector(".match-dot");
    const rightDot = rightButton.querySelector(".match-dot");
    if (!leftDot || !rightDot) return;

    const leftRect = leftDot.getBoundingClientRect();
    const rightRect = rightDot.getBoundingClientRect();
    const x1 = leftRect.left + leftRect.width / 2 - stageRect.left;
    const y1 = leftRect.top + leftRect.height / 2 - stageRect.top;
    const x2 = rightRect.left + rightRect.width / 2 - stageRect.left;
    const y2 = rightRect.top + rightRect.height / 2 - stageRect.top;

    const isCorrect = leftIndex === Number(rightIndex);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", `match-line${locked ? (isCorrect ? " is-correct" : " is-incorrect") : ""}`);
    line.style.setProperty("--match-color", sentenceMatchConnectionColors[leftIndex] || getMatchColorPalette(task)[0]);
    svg.appendChild(line);

    if (locked && !isCorrect) {
      const expectedRightButton = stage.querySelector(`.match-button--right[data-pair-index="${leftIndex}"]`);
      const expectedRightDot = expectedRightButton?.querySelector(".match-dot");
      if (expectedRightButton && expectedRightDot) {
        const expectedRect = expectedRightDot.getBoundingClientRect();
        const expectedLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        expectedLine.setAttribute("x1", x1);
        expectedLine.setAttribute("y1", y1);
        expectedLine.setAttribute("x2", expectedRect.left + expectedRect.width / 2 - stageRect.left);
        expectedLine.setAttribute("y2", expectedRect.top + expectedRect.height / 2 - stageRect.top);
        expectedLine.setAttribute("class", "match-line is-expected");
        svg.appendChild(expectedLine);
      }
    }
  });
}

function updateSentenceMatchUi(stage, task = tasks[currentIndex]) {
  const connectedTargets = new Set(Object.values(sentenceMatchConnections).map(Number));
  const wrongLeftIndices = locked
    ? Object.entries(sentenceMatchConnections)
      .filter(([leftIndex, rightIndex]) => Number(leftIndex) !== Number(rightIndex))
      .map(([leftIndex]) => Number(leftIndex))
    : [];
  const expectedRightTargets = new Set(wrongLeftIndices);

  stage.querySelectorAll(".match-button--left").forEach((button) => {
    const pairIndex = Number(button.dataset.pairIndex);
    const isConnected = Number.isInteger(sentenceMatchConnections[pairIndex]);
    const isCorrect = sentenceMatchConnections[pairIndex] === pairIndex;
    const color = sentenceMatchConnectionColors[pairIndex] || "";
    button.classList.toggle("is-selected", selectedMatchStart === pairIndex);
    button.classList.toggle("is-connected", isConnected);
    button.classList.toggle("is-correct", locked && isConnected && isCorrect);
    button.classList.toggle("is-incorrect", locked && isConnected && !isCorrect);
    button.classList.toggle("is-expected", locked && expectedRightTargets.has(pairIndex) && !isCorrect);
    button.style.setProperty("--match-color", color);
  });

  stage.querySelectorAll(".match-button--right").forEach((button) => {
    const pairIndex = Number(button.dataset.pairIndex);
    const isConnected = connectedTargets.has(pairIndex);
    const leftIndex = getSentenceMatchConnectedLeftIndex(pairIndex);
    const isCorrect = leftIndex === pairIndex;
    const color = leftIndex !== null ? sentenceMatchConnectionColors[leftIndex] || "" : "";
    button.classList.toggle("is-connected", isConnected);
    button.classList.toggle("is-correct", locked && isConnected && isCorrect);
    button.classList.toggle("is-incorrect", locked && isConnected && !isCorrect);
    button.classList.toggle("is-expected", locked && expectedRightTargets.has(pairIndex) && (!isConnected || !isCorrect));
    button.style.setProperty("--match-color", color);
  });

  requestAnimationFrame(() => updateSentenceMatchLines(stage, task));
}

function makeMatchButton(item, side, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `match-button match-button--${side}`;
  button.dataset.pairIndex = String(item.pairIndex);

  const dot = document.createElement("span");
  dot.className = "match-dot";
  dot.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "match-text";
  text.textContent = displayGerman(item.text);

  if (side === "left") {
    button.append(text, dot);
  } else {
    button.append(dot, text);
  }

  button.addEventListener("click", onClick);
  return button;
}

function renderSentenceMatch(task) {
  const stage = document.createElement("div");
  stage.className = "sentence-match-stage";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "sentence-match-lines");
  svg.setAttribute("aria-hidden", "true");
  stage.appendChild(svg);

  const board = document.createElement("div");
  board.className = "sentence-match-board";
  stage.appendChild(board);

  const leftColumn = document.createElement("div");
  leftColumn.className = "match-column match-column--left";
  const rightColumn = document.createElement("div");
  rightColumn.className = "match-column match-column--right";

  const shuffledLeft = shuffle(getSentenceMatchPairs(task).map((pair, pairIndex) => ({ pairIndex, text: pair.start })));
  const shuffledRight = shuffle(getSentenceMatchPairs(task).map((pair, pairIndex) => ({ pairIndex, text: pair.end })));

  shuffledLeft.forEach((item) => {
    const button = makeMatchButton(item, "left", () => {
      if (locked) return;
      selectedMatchStart = selectedMatchStart === item.pairIndex ? null : item.pairIndex;
      updateSentenceMatchUi(stage, task);
    });
    leftColumn.appendChild(button);
  });

  shuffledRight.forEach((item) => {
    const button = makeMatchButton(item, "right", () => {
      if (locked) return;

      const existingLeftIndex = getSentenceMatchConnectedLeftIndex(item.pairIndex);

      if (selectedMatchStart === null) {
        if (existingLeftIndex !== null) {
          delete sentenceMatchConnections[existingLeftIndex];
          delete sentenceMatchConnectionColors[existingLeftIndex];
          updateSentenceMatchUi(stage, task);
        }
        return;
      }

      delete sentenceMatchConnections[selectedMatchStart];
      delete sentenceMatchConnectionColors[selectedMatchStart];
      if (existingLeftIndex !== null) {
        delete sentenceMatchConnections[existingLeftIndex];
        delete sentenceMatchConnectionColors[existingLeftIndex];
      }

      sentenceMatchConnections[selectedMatchStart] = item.pairIndex;
      assignSentenceMatchColor(selectedMatchStart, task);
      selectedMatchStart = null;
      updateSentenceMatchUi(stage, task);
    });
    rightColumn.appendChild(button);
  });

  board.append(leftColumn, rightColumn);
  answerArea.appendChild(stage);
  updateSentenceMatchUi(stage, task);
}

function renderTask() {
  locked = false;
  selectedChoice = null;
  selectedErrorWord = null;
  gapInput = null;
  formInput = null;
  activeTextInput = null;
  selectedMatchStart = null;
  sentenceMatchConnections = {};
  sentenceMatchConnectionColors = {};
  setTaskHelpOpen(false);
  answerArea.innerHTML = "";
  wordBank.innerHTML = "";
  charToolbar.after(wordBank);
  hideFeedback();
  hidePostSubmitPanels();

  const task = tasks[currentIndex];
  taskType.textContent = TASK_TYPE_LABELS[task.type];
  taskTitle.innerHTML = displayGerman(task.type === "formTraining" ? getFormTrainingPrompt(task) : task.prompt);
  levelBadge.classList.add("hidden");
  renderLevelBadge(task.level);
  renderTaskHelp(task);

  answerArea.classList.remove("choice-list", "gap-fill", "form-training", "error-search", "sentence-builder", "sentence-match", "dialog-order");
  wordBank.classList.remove("dialog-bank");
  wordBank.classList.add("hidden");
  charToolbar.classList.add("hidden");
  clearButton.classList.remove("hidden");

  const controller = TASK_CONTROLLERS[task.type];

  if (controller?.render) {
    controller.render(task);
  }

  checkButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  finishPanel.classList.add("hidden");
  document.querySelector(".workspace").classList.remove("hidden");
  updateStats();
}

function validateBeforeSubmit(task) {
  const controller = TASK_CONTROLLERS[task.type];
  if (controller?.validateBeforeSubmit) return controller.validateBeforeSubmit(task);

  return true;
}

function isTaskCorrect(task) {
  const controller = TASK_CONTROLLERS[task.type];
  if (controller?.isCorrect) return controller.isCorrect(task);

  return false;
}

function lockTaskUi(task, isCorrect) {
  const controller = TASK_CONTROLLERS[task.type];
  controller?.lockUi?.(task, isCorrect);
}

function checkAnswer() {
  let sentenceMatchStep = "before-try";
  try {
    if (locked) return;
    sentenceMatchStep = "start";
    const task = tasks[currentIndex];
    if (!task) {
      setFeedback("bad", "Die Aufgabe konnte nicht geladen werden.");
      return;
    }

    if (!validateBeforeSubmit(task)) return;

    const isCorrect = isTaskCorrect(task);
    const submitted = selectedAnswerForTask(task.type, task);
    const expected = expectedAnswerForTask(task);

    results.push({
      index: currentIndex + 1,
      taskId: task.id,
      type: task.type,
      label: TASK_TYPE_LABELS[task.type],
      level: task.level,
      grammarFocus: task.grammarFocus,
      prompt: promptForTask(task),
      submitted,
      expected,
      correct: isCorrect
    });

    locked = true;

    if (isCorrect) {
      score += 1;
      const successText = Array.isArray(task.pairs)
        ? `Sehr gut, alle ${getSentenceMatchPairs(task).length} Verbindungen sind richtig.`
        : task.type === "errorSearch" && task.correctForm
        ? `Sehr gut, das ist richtig. Die richtige Schreibweise ist: ${displayGerman(task.correctForm)}`
        : "Sehr gut, das ist richtig.";
      setFeedback("good", successText);
    } else {
      if (Array.isArray(task.pairs)) {
        setFeedback("bad", `Hoppla, ${getSentenceMatchCorrectCount(task)} von ${getSentenceMatchPairs(task).length} Verbindungen waren richtig.`);
      } else {
        setFeedback("bad", `Hoppla, das war ein kleiner Fehler. Die richtige Version ist: ${displayGerman(expected)}`);
      }
    }

    sentenceMatchStep = "postSubmitState";
    setupPostSubmitState(task, isCorrect, submitted);
    sentenceMatchStep = "lockTaskUi";
    lockTaskUi(task, isCorrect);
    sentenceMatchStep = "finalUi";
    checkButton.classList.add("hidden");
    clearButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
    updateStats();
  } catch (error) {
    console.error(error);
    console.error("SentenceMatch step:", typeof sentenceMatchStep !== "undefined" ? sentenceMatchStep : "unknown");
    const extra = error?.message ? ` (${error.message})` : "";
    const step = typeof sentenceMatchStep !== "undefined" ? ` [${sentenceMatchStep}]` : "";
    setFeedback("bad", `Beim Prüfen ist ein Fehler passiert${extra}${step}. Bitte Seite neu laden.`);
  }
}

function clearAnswer() {
  if (locked) return;
  const task = tasks[currentIndex];
  const controller = TASK_CONTROLLERS[task.type];

  if (controller?.clear) {
    controller.clear(task);
    return;
  }

  hideFeedback();
}

function getLearnerFocusLabel(result) {
  const task = getTaskById(result.taskId);

  if (result.type === "formTraining") {
    const kind = getFormTrainingKind(task);
    if (kind === "adjective") return "Adjektivformen";
    if (kind === "noun") return "Nomenformen";
    return "Verbformen";
  }

  return grammarConcepts[result.grammarFocus]?.title || TASK_TYPE_LABELS[result.type] || "diesem Bereich";
}

function buildInsight(levelSummary) {
  const wrongCount = results.filter((item) => !item.correct).length;
  if (!wrongCount) {
    return {
      title: "Sehr stark",
      text: "Du hast in diesem Durchgang keine Fehler gemacht. Du kannst direkt mit neuen Aufgaben weitermachen oder die Theorie zur Wiederholung nutzen."
    };
  }

  const focusMistakes = results.reduce((accumulator, result) => {
    if (result.correct) return accumulator;
    const label = getLearnerFocusLabel(result);
    accumulator[label] = (accumulator[label] || 0) + 1;
    return accumulator;
  }, {});

  const topFocus = Object.entries(focusMistakes).sort((left, right) => right[1] - left[1])[0];
  const focusLabel = topFocus ? topFocus[0] : "ein paar Themen";

  return {
    title: "Nächster Schritt",
    text: `Wiederhole kurz ${focusLabel} in der Theorie. Danach starte einen neuen Durchgang.`
  };
}

function renderFinish() {
  const total = tasks.length;
  const overallPercent = formatPercent(score, total);
  finishText.textContent = `Du hast ${score} von ${total} Aufgaben richtig gelöst.`;
  overallResultValue.textContent = overallPercent;
  overallResultDetail.textContent = `${score} richtig · ${total - score} Fehler`;

  const levelSummary = results.reduce((accumulator, result) => {
    if (!accumulator[result.level]) accumulator[result.level] = { correct: 0, total: 0 };
    accumulator[result.level].total += 1;
    if (result.correct) accumulator[result.level].correct += 1;
    return accumulator;
  }, {});

  levelStats.innerHTML = "";
  LEVELS.forEach((level) => {
    const stat = levelSummary[level] || { correct: 0, total: 0 };
    const card = document.createElement("article");
    card.className = "level-stat-card";

    const label = document.createElement("span");
    label.textContent = getLevelLabel(level);
    const value = document.createElement("strong");
    value.textContent = formatPercent(stat.correct, stat.total);
    const detail = document.createElement("p");
    detail.className = "result-card";
    detail.textContent = `${stat.correct} von ${stat.total} richtig`;
    const bar = document.createElement("div");
    bar.className = "stat-bar";
    const fill = document.createElement("span");
    fill.style.width = `${stat.total ? (stat.correct / stat.total) * 100 : 0}%`;
    bar.appendChild(fill);

    card.append(label, value, detail, bar);
    levelStats.appendChild(card);
  });

  const insight = buildInsight(levelSummary);
  insightBox.innerHTML = `<h3>${insight.title}</h3><p>${insight.text}</p>`;

  reviewSummary.textContent = LEVELS.map((level) => {
    const stat = levelSummary[level] || { correct: 0, total: 0 };
    return `${getLevelLabel(level)}: ${formatPercent(stat.correct, stat.total)}`;
  }).join(" | ");

  reviewList.innerHTML = "";
  results.forEach((result) => {
    const task = getTaskById(result.taskId);
    const item = document.createElement("article");
    item.className = `review-item ${result.correct ? "correct" : "mistake"}`;

    const meta = document.createElement("div");
    meta.className = "review-meta";
    const metaTask = document.createElement("span");
    metaTask.textContent = `${result.index}. ${result.label} · ${getLevelLabel(result.level)}`;
    const metaStatus = document.createElement("span");
    metaStatus.textContent = result.correct ? "Richtig" : "Fehler";
    meta.append(metaTask, metaStatus);

    item.append(
      meta,
      makeReviewLine("Grammatik", displayGerman(grammarConcepts[result.grammarFocus]?.title || "-")),
      makeReviewLine("Aufgabe", displayGerman(result.prompt)),
      makeReviewLine("Deine Antwort", displayGerman(result.submitted || "-")),
      makeReviewLine("Richtig", displayGerman(result.expected)),
      makeReviewLine("Übersetzung", getTranslation(task) || "-")
    );

    reviewList.appendChild(item);
  });
}

function showFinish() {
  testFinished = true;
  progressFill.style.width = "100%";
  roundLabel.textContent = `Runde ${tasks.length} / ${tasks.length}`;
  scoreLabel.textContent = `${score} richtig`;
  document.querySelector(".workspace").classList.add("hidden");
  finishPanel.classList.remove("hidden");
  renderFinish();
}

function nextTask() {
  currentIndex += 1;
  progressFill.style.width = `${(currentIndex / tasks.length) * 100}%`;
  if (currentIndex >= tasks.length) {
    showFinish();
    return;
  }
  renderTask();
}

function resetTestState() {
  tasks = [];
  results = [];
  currentIndex = 0;
  score = 0;
  locked = false;
  testActive = false;
  testFinished = false;
  selectedChoice = null;
  selectedErrorWord = null;
  progressFill.style.width = "0%";
  sentenceMatchConnectionColors = {};
  hideFeedback();
  hidePostSubmitPanels();
}

function startRound() {
  try {
    // Always rebuild before starting so generated tasks reflect the latest
    // sentence/vocabulary state and the current test settings.
    rebuildTaskBank();
    clampSelectedQuestionCount();
    resetTestState();
    tasks = ROUND_POLICY.selectRoundTasks();
    if (!tasks.length) {
      throw new Error("Keine Aufgaben für diese Auswahl verfügbar.");
    }
    testActive = true;
    goToTestView();
    renderTask();
  } catch (error) {
    console.error(error);
    setFeedback("bad", "Die Runde konnte nicht gestartet werden.");
  }
}

function updatePostSubmitLanguage() {
  const task = tasks[currentIndex];
  if (!task || postSubmitPanel.classList.contains("hidden")) return;
  showTranslation(task);
}

function refreshAfterLanguageChange() {
  renderTheoryView();
  if (testActive && tasks[currentIndex]) {
    renderTaskHelp(tasks[currentIndex]);
  }
  if (currentView === "test" && locked) {
    updatePostSubmitLanguage();
  }
  if (testFinished) {
    renderFinish();
  }
}

languageSelect.value = selectedLanguage;
languageSelect.addEventListener("change", (event) => {
  selectedLanguage = event.target.value;
  refreshAfterLanguageChange();
});

questionCountPreset?.addEventListener("change", (event) => {
  const value = event.target.value;
  selectedQuestionPreset = value;
  selectedQuestionCount = Number(value) || 15;
  renderTestSettings();
});

difficultyModeSelect?.addEventListener("change", (event) => {
  selectedDifficultyMode = event.target.value || "mixed";
  clampSelectedQuestionCount();
  renderTestSettings();
});

window.addEventListener("resize", () => {
  const task = tasks[currentIndex];
  if (currentView !== "test" || !task || !Array.isArray(task.pairs)) return;
  const stage = answerArea.querySelector(".sentence-match-stage");
  if (stage) updateSentenceMatchUi(stage, task);
});

taskHelpToggle.addEventListener("click", () => {
  setTaskHelpOpen(!taskHelpOpen);
});

theoryNavButton.addEventListener("click", () => {
  goToTheory(false);
});
testNavButton.addEventListener("click", async () => {
  if (hasOngoingProgress()) {
    const confirmed = await showConfirmModal({
      title: TEXT.restartTitle,
      text: TEXT.restartText,
      acceptLabel: TEXT.restartAccept,
      cancelLabel: TEXT.cancel
    });
    if (!confirmed) return;
  }
  startRound();
});

startTestFromTheoryButton.addEventListener("click", startRound);
retryTestButton.addEventListener("click", startRound);
goTheoryAfterFinishButton.addEventListener("click", () => goToTheory(true));
confirmModalCancel.addEventListener("click", () => closeConfirmModal(false));
confirmModalAccept.addEventListener("click", () => closeConfirmModal(true));
confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) {
    closeConfirmModal(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (confirmModal.classList.contains("hidden")) return;
  if (event.key === "Escape") closeConfirmModal(false);
});

whyButton.addEventListener("click", () => {
  const task = tasks[currentIndex];
  fillRulePanel(task, false);
});

moreRuleButton.addEventListener("click", () => {
  ruleMore.classList.remove("hidden");
  moreRuleButton.classList.add("hidden");
});

lessRuleButton.addEventListener("click", () => {
  ruleMore.classList.add("hidden");
  moreRuleButton.classList.remove("hidden");
});

checkButton.addEventListener("click", checkAnswer);
clearButton.addEventListener("click", clearAnswer);
nextButton.addEventListener("click", nextTask);

charToolbar.querySelectorAll("button[data-char]").forEach((button) => {
  button.addEventListener("click", () => insertGermanCharacter(button.dataset.char));
});

vocabularySearch.addEventListener("input", renderVocabularyTheory);
vocabularyCategory.addEventListener("change", renderVocabularyTheory);
sentenceLevelFilter.addEventListener("change", renderSentenceTheory);

setupWordDropZone(answerArea);
setupWordDropZone(wordBank);

rebuildTaskBank();
goToTheory(true);
