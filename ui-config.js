window.appData = window.appData || {};
window.appData.uiConfig = {
  taskTypeLabels: {
    sentenceBuilder: "Satzbau",
    sentenceMatch: "Satzhälften",
    vocabHintMatch: "Wortpaare",
    multipleChoice: "Mehrfachauswahl",
    gapFill: "Lückentext",
    formTraining: "Formen",
    errorSearch: "Fehlersuche"
  },
  levelLabels: {
    A2: "Einfach",
    B1: "Mittel",
    B2: "Schwer"
  },
  formTrainingKinds: ["verb", "adjective", "noun"],
  questionCountOptions: [15, 30, 60],
  sentenceMatchColors: ["#e11d48", "#d4a017", "#8b5e3c", "#2563eb"],
  vocabHintMatchColors: ["#d81b60", "#1e88e5", "#43a047", "#f4511e", "#8e24aa", "#00acc1"],
  roundPolicy: {
    taskTypes: ["sentenceBuilder", "sentenceMatch", "vocabHintMatch", "multipleChoice", "gapFill", "formTraining", "errorSearch"],
    sentenceMatchMinRoundCount: 4,
    sentenceMatchPairsPerBoard: 4,
    vocabHintMatchPairsPerBoard: 6,
    recentSentenceMatchHistoryLimit: 8,
    recentFormHistoryLimit: 10,
    mixedDistribution: "even"
  },
  staticText: {
    theory: "Theorie",
    testStart: "Test starten",
    backToTheory: "Zurück zur Theorie",
    inTest: "Im Test",
    ready: "Bereit",
    resultReady: "Ergebnis da",
    continue: "Weiter",
    cancel: "Abbrechen",
    loseProgressTitle: "Fortschritt verlieren?",
    loseProgressText: "Wenn du jetzt zur Theorie gehst, verlierst du deinen aktuellen Testfortschritt.",
    toTheory: "Zur Theorie",
    stayInTest: "Im Test bleiben",
    restartTitle: "Neuen Test starten?",
    restartText: "Wenn du jetzt einen neuen Test startest, verlierst du deinen aktuellen Fortschritt.",
    restartAccept: "Neu starten",
    errorSearchCorrect: "Der Satz ist korrekt.",
    errorSearchPrompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt."
  }
};
