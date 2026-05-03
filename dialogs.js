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

  Dialog draft 02 mirrored as data below:
  Mieter: Guten Abend, der Lärm im Treppenhaus stört mich seit Tagen.
  Nachbar: Das tut mir leid. Wann ist der Lärm besonders laut?
  Mieter: Vor allem nach 22 Uhr, obwohl die Hausordnung Ruhe verlangt.
  Nachbar: Dann war meine Musik gestern zu laut.
  Mieter: Können Sie die Musik abends bitte leiser machen?
  Nachbar: Ja, ich reagiere darauf und mache die Musik früher aus.
  Mieter: Danke, dann muss ich mich nicht bei der Hausverwaltung beschweren.
  Nachbar: Das möchte ich vermeiden.
  Mieter: Gut, mir ist Frieden im Haus wichtig.
  Nachbar: Mir auch, ab heute bin ich rücksichtsvoller.

  Dialog draft 03 mirrored as data below:
  Mieter: Guten Tag, der Lift ist seit gestern kaputt.
  Hausverwaltung: Danke für die Meldung. Funktioniert die Treppe noch sicher?
  Mieter: Ja, aber für ältere Mieter ist die Treppe sehr anstrengend.
  Hausverwaltung: Wir kümmern uns heute um den Lift.
  Mieter: Wann kommt die Firma zur Reparatur?
  Hausverwaltung: Die Firma kommt morgen früh um acht Uhr.
  Mieter: Soll ich die anderen Mieter darüber informieren?
  Hausverwaltung: Ja, bitte hängen Sie eine kurze Nachricht aus.
  Mieter: Dann schreibe ich: Der Lift wird morgen repariert.
  Hausverwaltung: Genau, danke für Ihre Hilfe.

  Dialog draft 04 mirrored as data below:
  Mieter: Guten Tag, ich möchte den Mietvertrag kündigen.
  Vermieter: Guten Tag. Haben Sie die Kündigungsfrist geprüft?
  Mieter: Ja, im Mietvertrag steht eine Frist von drei Monaten.
  Vermieter: Dann muss die Kündigung bis zum dritten Werktag ankommen.
  Mieter: Ich schicke die Kündigung heute per Post.
  Vermieter: Bitte senden Sie mir zusätzlich eine Kopie per E-Mail.
  Mieter: Mache ich. Wann soll ich die Wohnung übergeben?
  Vermieter: Wir vereinbaren den Termin nach dem Auszug.
  Mieter: Gut, ich ziehe Ende Juni aus.
  Vermieter: Dann planen wir die Übergabe für die letzte Juniwoche.

  Dialog draft 05 mirrored as data below:
  Mieter: Guten Tag, ich ziehe am Samstag in die neue Wohnung ein.
  Nachbar: Willkommen im Haus. Um wie viel Uhr kommt der Umzugswagen?
  Mieter: Der Umzugswagen kommt gegen zehn Uhr.
  Nachbar: Dann ist der Hof am Vormittag kurz voll.
  Mieter: Ja, ich achte darauf, dass der Eingang frei bleibt.
  Nachbar: Das ist wichtig, weil alle Bewohner den Eingang benutzen.
  Mieter: Gibt es eine Regel aus der Hausordnung für den Umzug?
  Nachbar: Nach 20 Uhr sollte kein lauter Lärm mehr entstehen.
  Mieter: Verstanden, der Umzug ist vorher fertig.
  Nachbar: Sehr gut, dann gibt es keine Probleme im Haus.

  Dialog draft 06 mirrored as data below:
  Mieter: Guten Morgen, der Rasen im Hof ist sehr hoch.
  Vermieter: Guten Morgen. Ich weiß, der Rasen braucht einen Schnitt.
  Mieter: Wer muss den Rasen laut Mietvertrag mähen?
  Vermieter: Im Mietvertrag steht, dass ich mich um den Garten kümmere.
  Mieter: Können Sie den Rasen diese Woche mähen?
  Vermieter: Ja, ich mähe den Rasen am Samstag.
  Mieter: Danke. Die Kinder spielen oft im Hof.
  Vermieter: Dann soll der Hof am Wochenende sauber aussehen.
  Mieter: Das hilft den Mietern sehr.
  Vermieter: Gut, ich bringe am Samstag auch die Hecke in Ordnung.

  Dialog draft 07 mirrored as data below:
  Mieter: Guten Tag, ich habe einen Riss in der Mauer entdeckt.
  Vermieter: Danke für die Information. Ist der Riss in Ihrer Wohnung?
  Mieter: Ja, der Riss ist neben dem Fenster im Wohnzimmer.
  Vermieter: Dann muss ich mir die Mauer ansehen.
  Mieter: Können Sie morgen vorbeikommen?
  Vermieter: Ja, morgen um 15 Uhr passt es.
  Mieter: Soll ich bis dahin Fotos vom Riss schicken?
  Vermieter: Bitte schicken Sie Fotos, damit ich die Reparatur planen kann.
  Mieter: Gut, ich sende die Fotos heute Abend.
  Vermieter: Danke, danach vereinbare ich einen Termin mit der Firma.

  Dialog draft 08 mirrored as data below:
  Mieter: Guten Tag, ich brauche Hilfe wegen eines Streits mit dem Vermieter.
  Rechtsanwalt: Guten Tag. Worum geht es in dem Streit?
  Mieter: Der Vermieter verlangt Geld für eine Reparatur.
  Rechtsanwalt: Steht diese Pflicht im Mietvertrag?
  Mieter: Im Mietvertrag finde ich dazu nichts.
  Rechtsanwalt: Dann prüfen wir zuerst den Mietvertrag genau.
  Mieter: Kann daraus ein Prozess vor Gericht werden?
  Rechtsanwalt: Vielleicht, aber zuerst schreiben wir einen höflichen Brief.
  Mieter: Gut, ich möchte den Prozess vermeiden.
  Rechtsanwalt: Das ist sinnvoll, Frieden ist oft besser als ein Gerichtstermin.

  Dialog draft 09 mirrored as data below:
  Vermieter: Guten Tag, haben Sie den Mietvertrag schon gelesen?
  Mieter: Ja, ich habe den Mietvertrag gestern gelesen.
  Vermieter: Sind alle Punkte im Vertrag klar?
  Mieter: Fast alles ist klar, nur die Kaution möchte ich noch besprechen.
  Vermieter: Die Kaution muss vor dem Einzug überwiesen werden.
  Mieter: Auf welches Konto soll ich die Kaution überweisen?
  Vermieter: Die Kontodaten stehen auf der letzten Seite.
  Mieter: Gut, dann überweise ich die Kaution morgen.
  Vermieter: Danach können wir den Mietvertrag unterschreiben.
  Mieter: Einverstanden, ich bringe morgen meinen Ausweis mit.

  Dialog draft 10 mirrored as data below:
  Mieter: Die Wohnung gefällt mir, aber sie ist ziemlich teuer.
  Freund: Ist die Lage wenigstens zentral?
  Mieter: Ja, die Lage ist sehr zentral und die Wohnung ist ruhig.
  Freund: Dann erklär mir zuerst die Nebenkosten.
  Mieter: Die Nebenkosten sind hoch, aber die Heizung ist schon enthalten.
  Freund: Kannst du dir die Wohnung trotzdem leisten?
  Mieter: Ja, wenn ich auf andere Ausgaben achte.
  Freund: Dann solltest du auch die Kaution einplanen.
  Mieter: Stimmt, die Kaution zahle ich vor dem Einzug.
  Freund: Dann ist die Wohnung teuer, aber vielleicht trotzdem passend.

  Dialog draft 11 mirrored as data below:
  Mieter: Guten Tag, darf ich im Hof Fahrräder abstellen?
  Hausverwaltung: Guten Tag. In der Hausordnung gibt es dazu ein Verbot.
  Mieter: Gilt das Verbot für den ganzen Hof?
  Hausverwaltung: Ja, Fahrräder dürfen nur im Keller stehen.
  Mieter: Brauche ich für eine Ausnahme eine Genehmigung?
  Hausverwaltung: Ja, ohne Genehmigung ist das Abstellen nicht erlaubt.
  Mieter: Wie kann ich die Genehmigung beantragen?
  Hausverwaltung: Schreiben Sie bitte eine kurze E-Mail an die Hausverwaltung.
  Mieter: Gut, dann stelle ich das Fahrrad heute in den Keller.
  Hausverwaltung: Danke, so bleibt der Hof sauber und frei.
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
  },
  {
    id: "dlg_hausordnung_laerm_02",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Hausordnung und Lärm",
    vocabularyLinks: [
      "der Lärm",
      "die Hausordnung",
      "sich beschweren",
      "reagieren",
      "vermeiden",
      "der Frieden",
      "rücksichtslos"
    ],
    speakers: ["Mieter", "Nachbar"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Abend, der Lärm im Treppenhaus stört mich seit Tagen."
      },
      {
        id: "02",
        speaker: "Nachbar",
        text: "Das tut mir leid. Wann ist der Lärm besonders laut?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Vor allem nach 22 Uhr, obwohl die Hausordnung Ruhe verlangt."
      },
      {
        id: "04",
        speaker: "Nachbar",
        text: "Dann war meine Musik gestern zu laut."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Können Sie die Musik abends bitte leiser machen?"
      },
      {
        id: "06",
        speaker: "Nachbar",
        text: "Ja, ich reagiere darauf und mache die Musik früher aus."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Danke, dann muss ich mich nicht bei der Hausverwaltung beschweren."
      },
      {
        id: "08",
        speaker: "Nachbar",
        text: "Das möchte ich vermeiden."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Gut, mir ist Frieden im Haus wichtig."
      },
      {
        id: "10",
        speaker: "Nachbar",
        text: "Mir auch, ab heute bin ich rücksichtsvoller."
      }
    ],
    translations: {
      en: "A tenant talks to a neighbor about noise, house rules, and keeping peace in the building.",
      uk: "Орендар говорить із сусідом про шум, правила будинку та спокій у домі.",
      ar: "يتحدث المستأجر مع الجار عن الضجيج وقواعد المنزل والحفاظ على الهدوء في المبنى."
    }
  },
  {
    id: "dlg_lift_reparatur_03",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Kaputter Lift",
    vocabularyLinks: [
      "der Lift",
      "die Treppe",
      "sich kümmern",
      "darüber"
    ],
    speakers: ["Mieter", "Hausverwaltung"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, der Lift ist seit gestern kaputt."
      },
      {
        id: "02",
        speaker: "Hausverwaltung",
        text: "Danke für die Meldung. Funktioniert die Treppe noch sicher?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Ja, aber für ältere Mieter ist die Treppe sehr anstrengend."
      },
      {
        id: "04",
        speaker: "Hausverwaltung",
        text: "Wir kümmern uns heute um den Lift."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Wann kommt die Firma zur Reparatur?"
      },
      {
        id: "06",
        speaker: "Hausverwaltung",
        text: "Die Firma kommt morgen früh um acht Uhr."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Soll ich die anderen Mieter darüber informieren?"
      },
      {
        id: "08",
        speaker: "Hausverwaltung",
        text: "Ja, bitte hängen Sie eine kurze Nachricht aus."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Dann schreibe ich: Der Lift wird morgen repariert."
      },
      {
        id: "10",
        speaker: "Hausverwaltung",
        text: "Genau, danke für Ihre Hilfe."
      }
    ],
    translations: {
      en: "A tenant reports a broken elevator and agrees how to inform the other tenants.",
      uk: "Орендар повідомляє про зламаний ліфт і домовляється, як повідомити інших мешканців.",
      ar: "يبلغ المستأجر عن تعطل المصعد ويتفق على كيفية إبلاغ بقية السكان."
    }
  },
  {
    id: "dlg_kuendigungsfrist_auszug_04",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Kündigung und Auszug",
    vocabularyLinks: [
      "der Mietvertrag",
      "die Kündigungsfrist",
      "kündigen",
      "ausziehen",
      "vereinbaren"
    ],
    speakers: ["Mieter", "Vermieter"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, ich möchte den Mietvertrag kündigen."
      },
      {
        id: "02",
        speaker: "Vermieter",
        text: "Guten Tag. Haben Sie die Kündigungsfrist geprüft?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Ja, im Mietvertrag steht eine Frist von drei Monaten."
      },
      {
        id: "04",
        speaker: "Vermieter",
        text: "Dann muss die Kündigung bis zum dritten Werktag ankommen."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Ich schicke die Kündigung heute per Post."
      },
      {
        id: "06",
        speaker: "Vermieter",
        text: "Bitte senden Sie mir zusätzlich eine Kopie per E-Mail."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Mache ich. Wann soll ich die Wohnung übergeben?"
      },
      {
        id: "08",
        speaker: "Vermieter",
        text: "Wir vereinbaren den Termin nach dem Auszug."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Gut, ich ziehe Ende Juni aus."
      },
      {
        id: "10",
        speaker: "Vermieter",
        text: "Dann planen wir die Übergabe für die letzte Juniwoche."
      }
    ],
    translations: {
      en: "A tenant cancels the rental contract and discusses the notice period and handover.",
      uk: "Орендар розриває договір оренди та обговорює строк попередження і передачу квартири.",
      ar: "يلغي المستأجر عقد الإيجار ويناقش مهلة الإشعار وتسليم الشقة."
    }
  },
  {
    id: "dlg_umzug_einzug_05",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Einzug und Hausordnung",
    vocabularyLinks: [
      "der Umzug",
      "einziehen",
      "die Hausordnung",
      "der Lärm"
    ],
    speakers: ["Mieter", "Nachbar"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, ich ziehe am Samstag in die neue Wohnung ein."
      },
      {
        id: "02",
        speaker: "Nachbar",
        text: "Willkommen im Haus. Um wie viel Uhr kommt der Umzugswagen?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Der Umzugswagen kommt gegen zehn Uhr."
      },
      {
        id: "04",
        speaker: "Nachbar",
        text: "Dann ist der Hof am Vormittag kurz voll."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Ja, ich achte darauf, dass der Eingang frei bleibt."
      },
      {
        id: "06",
        speaker: "Nachbar",
        text: "Das ist wichtig, weil alle Bewohner den Eingang benutzen."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Gibt es eine Regel aus der Hausordnung für den Umzug?"
      },
      {
        id: "08",
        speaker: "Nachbar",
        text: "Nach 20 Uhr sollte kein lauter Lärm mehr entstehen."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Verstanden, der Umzug ist vorher fertig."
      },
      {
        id: "10",
        speaker: "Nachbar",
        text: "Sehr gut, dann gibt es keine Probleme im Haus."
      }
    ],
    translations: {
      en: "A new tenant tells a neighbor about the move-in and asks about house rules.",
      uk: "Новий орендар розповідає сусіду про вселення та питає про правила будинку.",
      ar: "يخبر المستأجر الجديد الجار عن الانتقال ويسأل عن قواعد المنزل."
    }
  },
  {
    id: "dlg_rasen_garten_06",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Rasen und Garten",
    vocabularyLinks: [
      "der Rasen",
      "der Schnitt",
      "der Mietvertrag",
      "sich kümmern",
      "mähen",
      "sauber"
    ],
    speakers: ["Mieter", "Vermieter"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Morgen, der Rasen im Hof ist sehr hoch."
      },
      {
        id: "02",
        speaker: "Vermieter",
        text: "Guten Morgen. Ich weiß, der Rasen braucht einen Schnitt."
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Wer muss den Rasen laut Mietvertrag mähen?"
      },
      {
        id: "04",
        speaker: "Vermieter",
        text: "Im Mietvertrag steht, dass ich mich um den Garten kümmere."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Können Sie den Rasen diese Woche mähen?"
      },
      {
        id: "06",
        speaker: "Vermieter",
        text: "Ja, ich mähe den Rasen am Samstag."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Danke. Die Kinder spielen oft im Hof."
      },
      {
        id: "08",
        speaker: "Vermieter",
        text: "Dann soll der Hof am Wochenende sauber aussehen."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Das hilft den Mietern sehr."
      },
      {
        id: "10",
        speaker: "Vermieter",
        text: "Gut, ich bringe am Samstag auch die Hecke in Ordnung."
      }
    ],
    translations: {
      en: "A tenant asks the landlord who is responsible for mowing the lawn.",
      uk: "Орендар питає орендодавця, хто відповідає за косіння газону.",
      ar: "يسأل المستأجر المالك من المسؤول عن قص العشب."
    }
  },
  {
    id: "dlg_mauer_reparatur_07",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Riss in der Mauer",
    vocabularyLinks: [
      "die Mauer",
      "entdecken",
      "vereinbaren"
    ],
    speakers: ["Mieter", "Vermieter"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, ich habe einen Riss in der Mauer entdeckt."
      },
      {
        id: "02",
        speaker: "Vermieter",
        text: "Danke für die Information. Ist der Riss in Ihrer Wohnung?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Ja, der Riss ist neben dem Fenster im Wohnzimmer."
      },
      {
        id: "04",
        speaker: "Vermieter",
        text: "Dann muss ich mir die Mauer ansehen."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Können Sie morgen vorbeikommen?"
      },
      {
        id: "06",
        speaker: "Vermieter",
        text: "Ja, morgen um 15 Uhr passt es."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Soll ich bis dahin Fotos vom Riss schicken?"
      },
      {
        id: "08",
        speaker: "Vermieter",
        text: "Bitte schicken Sie Fotos, damit ich die Reparatur planen kann."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Gut, ich sende die Fotos heute Abend."
      },
      {
        id: "10",
        speaker: "Vermieter",
        text: "Danke, danach vereinbare ich einen Termin mit der Firma."
      }
    ],
    translations: {
      en: "A tenant reports a crack in the wall and arranges the next repair steps.",
      uk: "Орендар повідомляє про тріщину в стіні та домовляється про подальший ремонт.",
      ar: "يبلغ المستأجر عن شق في الجدار ويتفق على خطوات الإصلاح التالية."
    }
  },
  {
    id: "dlg_rechtsanwalt_prozess_08",
    level: "B1",
    grammarFocus: "wohnen_wortschatz",
    title: "Streit mit dem Vermieter",
    vocabularyLinks: [
      "der Vermieter",
      "der Rechtsanwalt",
      "der Prozess",
      "das Gericht",
      "die Pflicht",
      "der Mietvertrag",
      "verlangen",
      "höflich",
      "vermeiden",
      "der Frieden"
    ],
    speakers: ["Mieter", "Rechtsanwalt"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, ich brauche Hilfe wegen eines Streits mit dem Vermieter."
      },
      {
        id: "02",
        speaker: "Rechtsanwalt",
        text: "Guten Tag. Worum geht es in dem Streit?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Der Vermieter verlangt Geld für eine Reparatur."
      },
      {
        id: "04",
        speaker: "Rechtsanwalt",
        text: "Steht diese Pflicht im Mietvertrag?"
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Im Mietvertrag finde ich dazu nichts."
      },
      {
        id: "06",
        speaker: "Rechtsanwalt",
        text: "Dann prüfen wir zuerst den Mietvertrag genau."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Kann daraus ein Prozess vor Gericht werden?"
      },
      {
        id: "08",
        speaker: "Rechtsanwalt",
        text: "Vielleicht, aber zuerst schreiben wir einen höflichen Brief."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Gut, ich möchte den Prozess vermeiden."
      },
      {
        id: "10",
        speaker: "Rechtsanwalt",
        text: "Das ist sinnvoll, Frieden ist oft besser als ein Gerichtstermin."
      }
    ],
    translations: {
      en: "A tenant asks a lawyer about a dispute with the landlord and possible court action.",
      uk: "Орендар питає адвоката про суперечку з орендодавцем і можливий судовий процес.",
      ar: "يسأل المستأجر المحامي عن نزاع مع المالك واحتمال الوصول إلى المحكمة."
    }
  },
  {
    id: "dlg_mietvertrag_kaution_09",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Mietvertrag unterschreiben",
    vocabularyLinks: [
      "der Mietvertrag",
      "die Kaution",
      "einziehen",
      "überweisen"
    ],
    speakers: ["Vermieter", "Mieter"],
    lines: [
      {
        id: "01",
        speaker: "Vermieter",
        text: "Guten Tag, haben Sie den Mietvertrag schon gelesen?"
      },
      {
        id: "02",
        speaker: "Mieter",
        text: "Ja, ich habe den Mietvertrag gestern gelesen."
      },
      {
        id: "03",
        speaker: "Vermieter",
        text: "Sind alle Punkte im Vertrag klar?"
      },
      {
        id: "04",
        speaker: "Mieter",
        text: "Fast alles ist klar, nur die Kaution möchte ich noch besprechen."
      },
      {
        id: "05",
        speaker: "Vermieter",
        text: "Die Kaution muss vor dem Einzug überwiesen werden."
      },
      {
        id: "06",
        speaker: "Mieter",
        text: "Auf welches Konto soll ich die Kaution überweisen?"
      },
      {
        id: "07",
        speaker: "Vermieter",
        text: "Die Kontodaten stehen auf der letzten Seite."
      },
      {
        id: "08",
        speaker: "Mieter",
        text: "Gut, dann überweise ich die Kaution morgen."
      },
      {
        id: "09",
        speaker: "Vermieter",
        text: "Danach können wir den Mietvertrag unterschreiben."
      },
      {
        id: "10",
        speaker: "Mieter",
        text: "Einverstanden, ich bringe morgen meinen Ausweis mit."
      }
    ],
    translations: {
      en: "A landlord and tenant clarify the contract and deposit before signing.",
      uk: "Орендодавець і орендар уточнюють договір та заставу перед підписанням.",
      ar: "يوضح المالك والمستأجر العقد والتأمين قبل التوقيع."
    }
  },
  {
    id: "dlg_teuer_zentral_10",
    level: "A2",
    grammarFocus: "wohnen_wortschatz",
    title: "Teure zentrale Wohnung",
    vocabularyLinks: [
      "die Nebenkosten",
      "die Kaution",
      "einziehen",
      "sich leisten",
      "ruhig",
      "zentral",
      "teuer"
    ],
    speakers: ["Mieter", "Freund"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Die Wohnung gefällt mir, aber sie ist ziemlich teuer."
      },
      {
        id: "02",
        speaker: "Freund",
        text: "Ist die Lage wenigstens zentral?"
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Ja, die Lage ist sehr zentral und die Wohnung ist ruhig."
      },
      {
        id: "04",
        speaker: "Freund",
        text: "Dann erklär mir zuerst die Nebenkosten."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Die Nebenkosten sind hoch, aber die Heizung ist schon enthalten."
      },
      {
        id: "06",
        speaker: "Freund",
        text: "Kannst du dir die Wohnung trotzdem leisten?"
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Ja, wenn ich auf andere Ausgaben achte."
      },
      {
        id: "08",
        speaker: "Freund",
        text: "Dann solltest du auch die Kaution einplanen."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Stimmt, die Kaution zahle ich vor dem Einzug."
      },
      {
        id: "10",
        speaker: "Freund",
        text: "Dann ist die Wohnung teuer, aber vielleicht trotzdem passend."
      }
    ],
    translations: {
      en: "A tenant discusses whether an expensive but central apartment is affordable.",
      uk: "Орендар обговорює, чи може дозволити собі дорогу, але центральну квартиру.",
      ar: "يناقش المستأجر ما إذا كانت الشقة الغالية والمركزية مناسبة ماديًا."
    }
  },
  {
    id: "dlg_verbot_genehmigung_11",
    level: "B1",
    grammarFocus: "wohnen_wortschatz",
    title: "Verbot und Genehmigung",
    vocabularyLinks: [
      "die Hausordnung",
      "das Verbot",
      "die Genehmigung",
      "sauber"
    ],
    speakers: ["Mieter", "Hausverwaltung"],
    lines: [
      {
        id: "01",
        speaker: "Mieter",
        text: "Guten Tag, darf ich im Hof Fahrräder abstellen?"
      },
      {
        id: "02",
        speaker: "Hausverwaltung",
        text: "Guten Tag. In der Hausordnung gibt es dazu ein Verbot."
      },
      {
        id: "03",
        speaker: "Mieter",
        text: "Gilt das Verbot für den ganzen Hof?"
      },
      {
        id: "04",
        speaker: "Hausverwaltung",
        text: "Ja, Fahrräder dürfen nur im Keller stehen."
      },
      {
        id: "05",
        speaker: "Mieter",
        text: "Brauche ich für eine Ausnahme eine Genehmigung?"
      },
      {
        id: "06",
        speaker: "Hausverwaltung",
        text: "Ja, ohne Genehmigung ist das Abstellen nicht erlaubt."
      },
      {
        id: "07",
        speaker: "Mieter",
        text: "Wie kann ich die Genehmigung beantragen?"
      },
      {
        id: "08",
        speaker: "Hausverwaltung",
        text: "Schreiben Sie bitte eine kurze E-Mail an die Hausverwaltung."
      },
      {
        id: "09",
        speaker: "Mieter",
        text: "Gut, dann stelle ich das Fahrrad heute in den Keller."
      },
      {
        id: "10",
        speaker: "Hausverwaltung",
        text: "Danke, so bleibt der Hof sauber und frei."
      }
    ],
    translations: {
      en: "A tenant asks the property management about a ban and possible permission for bicycles in the courtyard.",
      uk: "Орендар питає управління будинку про заборону та можливий дозвіл на велосипеди у дворі.",
      ar: "يسأل المستأجر إدارة المبنى عن الحظر وإمكانية الحصول على إذن لوضع الدراجات في الفناء."
    }
  }
];
