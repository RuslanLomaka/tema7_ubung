window.appData = window.appData || {};

/*
  Dialog data contract for dialogOrder tasks.

  Purpose:
  - Each entry describes one complete mini-dialog that can be shuffled in the UI.
  - The learner sees the speaker label on every card and must restore the line order.
  - This task is about discourse order: greeting, question, answer, next question,
    decision, and closing. It is not a speaker-guessing task yet.

  Hard authoring rules for future agents:
  - Draft every new dialog first as one solid, readable block of German text in
    this comment section or in a nearby review note before converting it to data.
    The draft should look like a real exchange, line by line, with speaker names.
    This forces the authoring agent to focus on linguistic meaningfulness,
    natural dialog flow, and grammatical correctness before thinking about JSON
    structure. Only after that prose dialog is clear and unambiguous should it be
    represented as a structured data entry in window.appData.dialogs.
  - Keep every dialog strongly unambiguous. If two neighboring lines can be swapped
    without changing the meaning, rewrite the dialog before adding it.
  - Give the first line an obvious opening signal, for example a greeting or a
    clear first request. Do not begin with a vague answer such as "Ja, gern."
  - Make every answer depend on the immediately previous question or statement.
    Avoid filler lines that could fit almost anywhere.
  - Keep exactly two speakers in the pilot format. Keep speaker names stable inside
    the whole dialog.
  - Prefer 10 total lines: 5 lines from each speaker. The current UI can render
    other counts, but 10 lines is the intended exercise size.
  - Reuse vocabulary and situations already present in vocab.js, sentences.js, or
    grammar.js. Do not introduce a new topic just because it makes a nice story.
  - Use plain, realistic German. These are learning tasks, not theatrical scenes.
  - Avoid pronoun ambiguity. If "er", "sie", "das", or "dort" could refer to more
    than one thing after shuffling, use the noun again.
  - Avoid duplicate starts. Two lines should not both begin with the same vague
    phrase if the order depends on subtle style rather than meaning.
  - Do not rely on translations to disambiguate the order. The German line itself
    must carry the ordering logic.
  - Before adding more dialogs, manually test the shuffled cards: a careful learner
    should be able to explain why each line comes next.

  Data ownership:
  - dialogs.js owns complete dialog flow and ordering.
  - vocab.js owns vocabulary facts and hints.
  - sentences.js owns standalone sentence examples.
  - task-factory.js may transform this data into tasks, but should not invent new
    dialog lines at runtime. Runtime generation may shuffle existing lines only.

  Pilot dialog draft mirrored as data below:
  Mieter: Guten Tag, ich interessiere mich für die Wohnung.
  Vermieter: Guten Tag. Die Wohnung ist noch frei.
  Mieter: Dann möchte ich die Wohnung gern besichtigen.
  Vermieter: Eine Besichtigung ist am Donnerstag um 17 Uhr möglich.
  Mieter: Danke, der Termin passt. Vorher habe ich eine Frage zu den Nebenkosten.
  Vermieter: Die Nebenkosten stehen im Mietvertrag genau aufgelistet.
  Mieter: Gut. Und wie hoch ist die Kaution?
  Vermieter: Die Kaution beträgt zwei Monatsmieten.
  Mieter: Dann komme ich am Donnerstag zur Besichtigung.
  Vermieter: Sehr gut, ich bringe den Mietvertrag zur Besichtigung mit.
*/
window.appData.dialogs = [
  {
    id: "dlg_besichtigung_kaution_01",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Besichtigung und Kaution",
    vocabularyLinks: [
      "der Mieter",
      "der Vermieter",
      "die Kaution",
      "die Nebenkosten",
      "der Mietvertrag"
    ],
    speakers: ["Mieter", "Vermieter"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, ich interessiere mich für die Wohnung."
      },
      {
        id: "02",
        speaker: "Vermieter",
        text: "Guten Tag. Die Wohnung ist noch frei."
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Dann möchte ich die Wohnung gern besichtigen."
      },
      {
        id: "04",
        speaker: "Vermieter",
        text: "Eine Besichtigung ist am Donnerstag um 17 Uhr möglich."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Danke, der Termin passt. Vorher habe ich eine Frage zu den Nebenkosten."
      },
      {
        id: "06",
        speaker: "Vermieter",
        text: "Die Nebenkosten stehen im Mietvertrag genau aufgelistet."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Gut. Und wie hoch ist die Kaution?"
      },
      {
        id: "08",
        speaker: "Vermieter",
        text: "Die Kaution beträgt zwei Monatsmieten."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Danke, dann komme ich am Donnerstag zur Besichtigung."
      },
      {
        id: "10",
        speaker: "Vermieter",
        text: "Sehr gut, ich bringe den Mietvertrag zur Besichtigung mit."
      }
    ],
    translations: {
      en: "A tenant asks a landlord about utility costs, the deposit, and a viewing appointment.",
      uk: "Орендар запитує орендодавця про комунальні витрати, заставу та огляд квартири.",
      ar: "يسأل المستأجر المالك عن التكاليف الجانبية والتأمين وموعد مشاهدة الشقة."
    }
  }
];
