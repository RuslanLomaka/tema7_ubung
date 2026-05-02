window.appData = window.appData || {};
window.appData.uiConfig = {
  taskTypeLabels: {
    sentenceBuilder: "Satzbau",
    sentenceMatch: "Satzhälften",
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
  roundPolicy: {
    taskTypes: ["sentenceBuilder", "sentenceMatch", "multipleChoice", "gapFill", "formTraining", "errorSearch"],
    sentenceMatchMinRoundCount: 4,
    sentenceMatchPairsPerBoard: 4,
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
