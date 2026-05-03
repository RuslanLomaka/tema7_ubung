const fs = require("fs");
const path = require("path");
const vm = require("vm");

const projectRoot = __dirname;
// Mirror the browser loading order closely enough that validation catches
// integration mistakes between split lesson files before the UI does.
const filesToLoad = ["grammar.js", "vocab.js", "sentences.js", "dialogs.js", "data.js", "task-help.js", "ui-config.js", "task-factory.js"];

const sandbox = {
  window: { appData: {} },
  console
};
sandbox.globalThis = sandbox;

for (const file of filesToLoad) {
  const fullPath = path.join(projectRoot, file);
  const source = fs.readFileSync(fullPath, "utf8");
  vm.runInNewContext(source, sandbox, { filename: fullPath });
}

const { grammarConcepts = {}, vocabulary = [], sentenceBankV2 = [], dialogs = [], tasks = [], taskHelpCopy = {} } = sandbox.window.appData;
const taskFactory = sandbox.window.TaskFactory;
const issues = [];
const warnings = [];

function addIssue(file, id, message) {
  issues.push({ file, id, message });
}

function addWarning(file, id, message) {
  warnings.push({ file, id, message });
}

function hasTranslations(translations) {
  return translations && translations.en && translations.uk && translations.ar;
}

const grammarKeys = new Set(Object.keys(grammarConcepts));
const vocabularyByBasicForm = new Map(vocabulary.map((item) => [item.basicForm, item]));
const helpLanguages = ["en", "uk", "ar"];
const helpKeys = [
  "sentenceBuilder",
  "dialogOrder",
  "sentenceMatch",
  "vocabHintMatch",
  "multipleChoice",
  "gapFill",
  "formTraining_verb",
  "formTraining_adjective",
  "formTraining_noun",
  "errorSearch"
];

if (!taskFactory || typeof taskFactory.buildAllTasks !== "function") {
  addIssue("task-factory.js", "TaskFactory", "TaskFactory.buildAllTasks is not available.");
} else {
  const generatedTasks = taskFactory.buildAllTasks(sentenceBankV2, tasks.filter((task) => task.type === "formTraining"), vocabulary, dialogs);
  const generatedTypes = new Set(generatedTasks.map((task) => task.type));
  for (const type of ["sentenceBuilder", "multipleChoice", "gapFill", "formTraining", "errorSearch", "vocabHintMatch", "dialogOrder"]) {
    if (!generatedTypes.has(type)) {
      addIssue("task-factory.js", type, "Generated task bank is missing this task type.");
    }
  }
}
if (!sentenceBankV2.length) {
  addIssue("sentences.js", "sentenceBankV2", "No sentence entries found.");
}
if (!dialogs.length) {
  addIssue("dialogs.js", "dialogs", "No dialog entries found.");
}

for (const [language, pack] of Object.entries(taskHelpCopy)) {
  for (const key of helpKeys) {
    const entry = pack[key];
    if (!entry) {
      addIssue("task-help.js", `${language}.${key}`, "Missing task help entry.");
      continue;
    }
    for (const field of ["title", "body", "decide", "example", "submit"]) {
      if (!entry[field]) {
        addIssue("task-help.js", `${language}.${key}.${field}`, "Missing task help field.");
      }
    }
  }
}

for (const language of helpLanguages) {
  if (!taskHelpCopy[language]) {
    addIssue("task-help.js", language, "Missing language pack.");
  }
}

for (const item of vocabulary) {
  // Vocab entries feed theory rendering, generated gap-fill hints, and some
  // form/distractor logic, so a missing field here tends to break multiple views.
  if (!item.basicForm) addIssue("vocab.js", JSON.stringify(item), "Missing basicForm.");
  if (!item.category) addIssue("vocab.js", item.basicForm || "unknown", "Missing category.");
  if (!item.forms) addIssue("vocab.js", item.basicForm || "unknown", "Missing forms.");
  if (!item.hintDe) addIssue("vocab.js", item.basicForm || "unknown", "Missing German hint.");
  if (!item.meaningEn || !item.meaningUk || !item.meaningAr) {
    addIssue("vocab.js", item.basicForm || "unknown", "Missing one or more translations.");
  }
}

for (const entry of sentenceBankV2) {
  // sentenceBankV2 is the canonical source for sentence-based task generation.
  // If a sentence is malformed here, multiple generated task types can degrade at once.
  if (!entry.id) addIssue("sentences.js", "unknown", "Sentence entry missing id.");
  if (!entry.level) addIssue("sentences.js", entry.id || "unknown", "Sentence entry missing level.");
  if (!entry.sentence) addIssue("sentences.js", entry.id || "unknown", "Sentence entry missing sentence.");
  if (!entry.grammarFocus) addIssue("sentences.js", entry.id || "unknown", "Sentence entry missing grammarFocus.");
  if (entry.grammarFocus && !grammarKeys.has(entry.grammarFocus)) {
    addIssue("sentences.js", entry.id, `Unknown grammarFocus: ${entry.grammarFocus}`);
  }
  if (!hasTranslations(entry.translations)) {
    addIssue("sentences.js", entry.id || "unknown", "Sentence entry missing translations.");
  }

  for (const link of entry.vocabularyLinks || []) {
    if (!vocabularyByBasicForm.has(link)) {
      addWarning("sentences.js", entry.id, `Unknown vocabulary link: ${link}`);
    }
  }

  if (entry.multipleChoice) {
    if (!Array.isArray(entry.multipleChoice.wrongOptions) || entry.multipleChoice.wrongOptions.length !== 3) {
      addIssue("sentences.js", entry.id, "multipleChoice must have exactly 3 wrongOptions.");
    }
  }

  if (entry.errorSearch) {
    const typoOptions = entry.errorSearch.typoOptions || {};
    if (!Object.keys(typoOptions).length) {
      addIssue("sentences.js", entry.id, "errorSearch is missing typoOptions.");
    }
    for (const [correctWord, wrongWords] of Object.entries(typoOptions)) {
      const variants = Array.isArray(wrongWords) ? wrongWords : [];
      for (const wrongWord of variants) {
        if (typeof wrongWord !== "string" || !wrongWord.trim()) {
          addIssue("sentences.js", entry.id, `Invalid typo variant for ${correctWord}.`);
          continue;
        }
        if (/\s/.test(wrongWord)) {
          addIssue("sentences.js", entry.id, `Whitespace typo variant is not allowed: ${correctWord} -> ${wrongWord}`);
        }
      }
    }
  }

  const alternatives = entry.alternativeCorrectAnswers || [];
  if (alternatives.length) {
    const unique = new Set(alternatives.map((value) => value.trim().toLowerCase()));
    if (unique.size !== alternatives.length) {
      addIssue("sentences.js", entry.id, "alternativeCorrectAnswers contains duplicates.");
    }
  }
}

for (const dialog of dialogs) {
  if (!dialog.id) addIssue("dialogs.js", "unknown", "Dialog entry missing id.");
  if (!dialog.title) addIssue("dialogs.js", dialog.id || "unknown", "Dialog entry missing title.");
  if (!dialog.level) addIssue("dialogs.js", dialog.id || "unknown", "Dialog entry missing level.");
  if (dialog.grammarFocus && !grammarKeys.has(dialog.grammarFocus)) {
    addIssue("dialogs.js", dialog.id, `Unknown grammarFocus: ${dialog.grammarFocus}`);
  }
  if (!hasTranslations(dialog.translations)) {
    addIssue("dialogs.js", dialog.id || "unknown", "Dialog entry missing translations.");
  }
  if (!Array.isArray(dialog.lines) || dialog.lines.length < 4) {
    addIssue("dialogs.js", dialog.id || "unknown", "Dialog must contain at least 4 lines.");
    continue;
  }
  if (!dialog.certification) {
    addIssue("dialogs.js", dialog.id || "unknown", "Dialog missing certification metadata.");
  } else {
    if (!["certified", "needs_review"].includes(dialog.certification.status)) {
      addIssue("dialogs.js", dialog.id, "Dialog certification status must be certified or needs_review.");
    }
    if (dialog.certification.status === "certified") {
      for (const field of ["certifiedBy", "certifiedOn", "notes"]) {
        if (!dialog.certification[field]) {
          addIssue("dialogs.js", dialog.id, `Certified dialog missing certification.${field}.`);
        }
      }
    }
  }

  const lineIds = new Set();
  const speakerCounts = {};
  for (const line of dialog.lines) {
    if (!line.id) addIssue("dialogs.js", dialog.id, "Dialog line missing id.");
    if (line.id && lineIds.has(line.id)) addIssue("dialogs.js", dialog.id, `Duplicate dialog line id: ${line.id}`);
    if (line.id) lineIds.add(line.id);
    if (!line.speaker) addIssue("dialogs.js", dialog.id, `Dialog line ${line.id || "unknown"} missing speaker.`);
    if (!line.text) addIssue("dialogs.js", dialog.id, `Dialog line ${line.id || "unknown"} missing text.`);
    if (line.speaker) speakerCounts[line.speaker] = (speakerCounts[line.speaker] || 0) + 1;
  }

  const speakers = Object.keys(speakerCounts);
  if (speakers.length !== 2) {
    addIssue("dialogs.js", dialog.id, "Dialog should use exactly two speakers.");
  }
  if (dialog.lines.length !== 10) {
    addWarning("dialogs.js", dialog.id, "Pilot dialog format expects 10 lines.");
  }
  if (speakers.length === 2 && speakerCounts[speakers[0]] !== speakerCounts[speakers[1]]) {
    addWarning("dialogs.js", dialog.id, "Pilot dialog format expects balanced speaker turns.");
  }

  for (const link of dialog.vocabularyLinks || []) {
    if (!vocabularyByBasicForm.has(link)) {
      addWarning("dialogs.js", dialog.id, `Unknown vocabulary link: ${link}`);
    }
  }
}

for (const task of tasks.filter((task) => task.type === "formTraining")) {
  if (!task.id) addIssue("data.js", "unknown form task", "Missing form task id.");
  if (!task.forms) addIssue("data.js", task.id || "unknown", "Form task missing forms block.");
  if (!hasTranslations(task.translations)) {
    addIssue("data.js", task.id || "unknown", "Form task missing translations.");
  }
}

if (issues.length) {
  console.error("Validation failed:");
  for (const issue of issues) {
    console.error(`- [${issue.file}] ${issue.id}: ${issue.message}`);
  }
  if (warnings.length) {
    console.error("Warnings:");
    for (const warning of warnings) {
      console.error(`- [${warning.file}] ${warning.id}: ${warning.message}`);
    }
  }
  process.exitCode = 1;
} else {
  console.log("Validation passed.");
  console.log(`Grammar concepts: ${Object.keys(grammarConcepts).length}`);
  console.log(`Vocabulary items: ${vocabulary.length}`);
  console.log(`Sentence entries: ${sentenceBankV2.length}`);
  console.log(`Dialog entries: ${dialogs.length}`);
  console.log(`Form training tasks: ${tasks.filter((task) => task.type === "formTraining").length}`);
  if (warnings.length) {
    console.log("Warnings:");
    for (const warning of warnings) {
      console.log(`- [${warning.file}] ${warning.id}: ${warning.message}`);
    }
  }
}
