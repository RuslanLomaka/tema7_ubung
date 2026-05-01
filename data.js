const appData = {
  settings: {
    topicId: "lektion7_rund_ums_wohnen",
    topicTitle: "Rund ums Wohnen",
    languages: ["en", "uk", "ar"],
    defaultLanguage: "en",
    mixedRound: {
      total: 15,
      byType: {
        sentenceBuilder: 3,
        multipleChoice: 3,
        gapFill: 3,
        formTraining: 3,
        errorSearch: 3
      },
      byLevel: {
        A2: 5,
        B1: 5,
        B2: 5
      }
    }
  },

  grammarConcepts: {
    zweiteilige_konnektoren: {
      title: "Zweiteilige Konnektoren",
      shortRule: "Zweiteilige Konnektoren verbinden zwei Satzteile mit einer festen Struktur, zum Beispiel nicht nur ..., sondern auch ....",
      shortExample: "Die Wohnung ist nicht nur teuer, sondern auch in schlechtem Zustand.",
      fullTheory: "Zweiteilige Konnektoren werden benutzt, um Addition, Alternative, Gegensatz oder doppelte Verneinung auszudrücken. Typische Paare sind nicht nur ..., sondern auch ..., entweder ... oder ..., zwar ..., aber ... und weder ... noch .... Die beiden Teile gehören zusammen und müssen im Satz klar erkennbar sein.",
      commonMistake: "Viele Lernende vergessen den zweiten Teil des Konnektors oder mischen zwei verschiedene Paare.",
      moreExamples: [
        "Weder der Vermieter noch die Hausverwaltung fühlten sich zuständig.",
        "Entweder wir finden einen Kompromiss, oder wir gehen vor Gericht.",
        "Zwar ist die Lage zentral, aber der Lärm ist stark."
      ]
    },

    konjunktiv2_vergangenheit: {
      title: "Konjunktiv II der Vergangenheit",
      shortRule: "Der Konjunktiv II der Vergangenheit beschreibt irreale oder bedauerte Situationen in der Vergangenheit: hätte / wäre + Partizip II.",
      shortExample: "Hätte ich die Hausordnung gelesen, hätte ich den Fehler vermieden.",
      fullTheory: "Mit dem Konjunktiv II der Vergangenheit spricht man über etwas, das nicht passiert ist. Man benutzt hätte oder wäre plus Partizip II. Für Bewegungsverben und Zustandswechsel nimmt man oft wäre, für die meisten anderen Verben hätte.",
      commonMistake: "Hätte und wäre werden oft verwechselt, oder das Partizip II fehlt am Satzende.",
      moreExamples: [
        "Wären wir früher ausgezogen, hätten wir weniger Stress gehabt.",
        "Hätte die Regierung früher reagiert, wäre der Mangel kleiner gewesen.",
        "Hätten die Anwohner protestiert, wäre das Hochhaus vielleicht nicht gebaut worden."
      ]
    },

    pronominaladverbien: {
      title: "Pronominaladverbien mit da- / wo-",
      shortRule: "Für Sachen benutzt man wo- in Fragen und da- in Antworten, zum Beispiel wofür - dafür oder worüber - darüber.",
      shortExample: "Worüber hat sich der Nachbar beschwert? - Darüber hat er sich gestern beschwert.",
      fullTheory: "Pronominaladverbien ersetzen Präposition + Sache. In Fragen benutzt man wo- plus Präposition: wofür, worüber, worauf. In Antworten benutzt man da- plus Präposition: dafür, darüber, darauf. Für Personen benutzt man nicht da-/wo-, sondern Präposition + wen/wem.",
      commonMistake: "Lernende benutzen bei Sachen oft über das statt darüber oder für was statt wofür.",
      moreExamples: [
        "Hast du schon darüber nachgedacht?",
        "Wofür wurde die Gebühr berechnet?",
        "Ich interessiere mich dafür, ob das Grundstück erschlossen ist."
      ]
    },

    trotz_genitiv: {
      title: "trotz + Genitiv",
      shortRule: "Nach trotz steht im Standarddeutsch der Genitiv.",
      shortExample: "Trotz des hohen Preises ist die Nachfrage groß.",
      fullTheory: "Die Präposition trotz drückt einen Gegensatz oder eine Einschränkung aus. Im formellen und standardsprachlichen Deutsch folgt darauf meistens der Genitiv: trotz des Regens, trotz der fehlenden Genehmigung, trotz der zentralen Lage.",
      commonMistake: "Oft wird nach trotz fälschlich der Dativ benutzt oder der Artikel nicht angepasst.",
      moreExamples: [
        "Trotz der fehlenden Baugenehmigung begann der Bau.",
        "Trotz des Lärms konnte sie schlafen.",
        "Trotz der strengen Verbote grillen die Nachbarn."
      ]
    },

    wohnen_wortschatz: {
      title: "Wortschatz rund ums Wohnen",
      shortRule: "Achte auf die genaue Verbform und auf typische Kombinationen aus dem Wohnkontext.",
      shortExample: "Der Mieter hat die Kaution überwiesen.",
      fullTheory: "Viele Aufgaben in dieser Lektion trainieren den Wohnwortschatz: Mietvertrag, Kaution, Nebenkosten, Hausordnung, Mieter, Vermieter und passende Verben wie kündigen, einziehen, ausziehen, überweisen oder sich beschweren. Wichtig sind die richtige Form und die passende Kollokation.",
      commonMistake: "Oft werden ähnliche Verben verwechselt, zum Beispiel kündigen und ausziehen oder beschweren und stören.",
      moreExamples: [
        "Der Vermieter verlangt die Miete bis zum dritten Werktag.",
        "Die Mieter kümmerten sich um den Garten.",
        "Der Umzug war teuer, aber gut organisiert."
      ]
    }
  },

  vocabulary: [
    { category: "noun", basicForm: "der Mietvertrag", forms: "die Mietverträge", meaningEn: "rental contract" },
    { category: "noun", basicForm: "die Kaution", forms: "die Kautionen", meaningEn: "security deposit" },
    { category: "noun", basicForm: "die Nebenkosten", forms: "nur Plural", meaningEn: "utility costs" },
    { category: "noun", basicForm: "das Grundstück", forms: "die Grundstücke", meaningEn: "plot of land" },
    { category: "noun", basicForm: "die Hausordnung", forms: "die Hausordnungen", meaningEn: "house rules" },
    { category: "noun", basicForm: "der Mieter", forms: "die Mieter", meaningEn: "tenant" },
    { category: "noun", basicForm: "der Vermieter", forms: "die Vermieter", meaningEn: "landlord" },
    { category: "noun", basicForm: "die Kündigungsfrist", forms: "die Kündigungsfristen", meaningEn: "notice period" },
    { category: "noun", basicForm: "das Dach", forms: "die Dächer", meaningEn: "roof" },
    { category: "noun", basicForm: "die Mauer", forms: "die Mauern", meaningEn: "wall" },
    { category: "noun", basicForm: "die Treppe", forms: "die Treppen", meaningEn: "stairs" },
    { category: "noun", basicForm: "der Lift", forms: "die Lifte", meaningEn: "elevator" },
    { category: "noun", basicForm: "der Rasen", forms: "kein Plural", meaningEn: "lawn" },
    { category: "noun", basicForm: "die Stufe", forms: "die Stufen", meaningEn: "step" },
    { category: "noun", basicForm: "der Rechtsanwalt", forms: "die Rechtsanwälte", meaningEn: "lawyer" },
    { category: "noun", basicForm: "das Gericht", forms: "die Gerichte", meaningEn: "court" },
    { category: "noun", basicForm: "der Prozess", forms: "die Prozesse", meaningEn: "lawsuit" },
    { category: "noun", basicForm: "der Lärm", forms: "kein Plural", meaningEn: "noise" },
    { category: "noun", basicForm: "der Frieden", forms: "kein Plural", meaningEn: "peace" },
    { category: "noun", basicForm: "die Wirklichkeit", forms: "die Wirklichkeiten", meaningEn: "reality" },
    { category: "noun", basicForm: "das Eigentum", forms: "kein Plural", meaningEn: "property ownership" },
    { category: "noun", basicForm: "die Pflicht", forms: "die Pflichten", meaningEn: "duty" },
    { category: "noun", basicForm: "das Verbot", forms: "die Verbote", meaningEn: "ban" },
    { category: "noun", basicForm: "die Genehmigung", forms: "die Genehmigungen", meaningEn: "approval" },
    { category: "noun", basicForm: "der Umzug", forms: "die Umzüge", meaningEn: "move" },
    { category: "verb", basicForm: "einziehen", forms: "zog ein, ist eingezogen", meaningEn: "to move in" },
    { category: "verb", basicForm: "ausziehen", forms: "zog aus, ist ausgezogen", meaningEn: "to move out" },
    { category: "verb", basicForm: "kündigen", forms: "kündigte, hat gekündigt", meaningEn: "to terminate" },
    { category: "verb", basicForm: "sich beschweren", forms: "beschwerte sich, hat sich beschwert", meaningEn: "to complain" },
    { category: "verb", basicForm: "sich kümmern", forms: "kümmerte sich, hat sich gekümmert", meaningEn: "to take care of" },
    { category: "verb", basicForm: "stören", forms: "störte, hat gestört", meaningEn: "to disturb" },
    { category: "verb", basicForm: "mähen", forms: "mähte, hat gemäht", meaningEn: "to mow" },
    { category: "verb", basicForm: "vereinbaren", forms: "vereinbarte, hat vereinbart", meaningEn: "to arrange" },
    { category: "verb", basicForm: "sich leisten", forms: "leistete sich, hat sich geleistet", meaningEn: "to afford" },
    { category: "verb", basicForm: "reagieren", forms: "reagierte, hat reagiert", meaningEn: "to react" },
    { category: "verb", basicForm: "verlangen", forms: "verlangte, hat verlangt", meaningEn: "to demand" },
    { category: "verb", basicForm: "verstoßen", forms: "verstieß, hat verstoßen", meaningEn: "to violate" },
    { category: "verb", basicForm: "überweisen", forms: "überwies, hat überwiesen", meaningEn: "to transfer money" },
    { category: "verb", basicForm: "entdecken", forms: "entdeckte, hat entdeckt", meaningEn: "to discover" },
    { category: "verb", basicForm: "schreien", forms: "schrie, hat geschrien", meaningEn: "to scream" },
    { category: "verb", basicForm: "vermeiden", forms: "vermied, hat vermieden", meaningEn: "to avoid" },
    { category: "noun", basicForm: "der Schnitt", forms: "die Schnitte", meaningEn: "cut / trim" },
    { category: "adjective", basicForm: "günstig", forms: "günstiger, am günstigsten", meaningEn: "cheap" },
    { category: "adjective", basicForm: "ruhig", forms: "ruhiger, am ruhigsten", meaningEn: "quiet" },
    { category: "adjective", basicForm: "zentral", forms: "zentraler, am zentralsten", meaningEn: "central" },
    { category: "adjective", basicForm: "laut", forms: "lauter, am lautesten", meaningEn: "loud" },
    { category: "adjective", basicForm: "rücksichtslos", forms: "rücksichtsloser, am rücksichtslosesten", meaningEn: "inconsiderate" },
    { category: "adjective", basicForm: "höflich", forms: "höflicher, am höflichsten", meaningEn: "polite" },
    { category: "adjective", basicForm: "winzig", forms: "winziger, am winzigsten", meaningEn: "tiny" },
    { category: "adjective", basicForm: "teuer", forms: "teurer, am teuersten", meaningEn: "expensive" },
    { category: "adjective", basicForm: "großzügig", forms: "großzügiger, am großzügigsten", meaningEn: "generous" },
    { category: "adjective", basicForm: "sauber", forms: "sauberer, am saubersten", meaningEn: "clean" },
    { category: "grammar", basicForm: "darüber", forms: "Pronominaladverb (da + über)", meaningEn: "about it / about that" },
    { category: "grammar", basicForm: "wofür", forms: "Pronominaladverb (wo + für)", meaningEn: "what for / for what" },
    { category: "grammar", basicForm: "trotz", forms: "Präposition + Genitiv", meaningEn: "despite" },
    { category: "grammar", basicForm: "sondern", forms: "Konnektor: nicht nur ..., sondern auch ...", meaningEn: "but rather / but also" },
    { category: "grammar", basicForm: "entweder", forms: "Konnektor: entweder ... oder ...", meaningEn: "either" },
    { category: "grammar", basicForm: "hätte", forms: "Konjunktiv II von haben", meaningEn: "would have / had (subjunctive)" },
    { category: "grammar", basicForm: "wären", forms: "Konjunktiv II von sein", meaningEn: "would be / had been (subjunctive)" }
  ],

  tasks: [
    {
      id: "sb_001",
      type: "sentenceBuilder",
      level: "A2",
      grammarFocus: "trotz_genitiv",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Trotz", "der", "zentralen", "Lage", "ist", "es", "in", "diesem", "Hinterhof", "erstaunlich", "ruhig", "."],
      correctAnswers: [
        "Trotz der zentralen Lage ist es in diesem Hinterhof erstaunlich ruhig.",
        "Es ist trotz der zentralen Lage in diesem Hinterhof erstaunlich ruhig."
      ],
      translations: {
        en: "Despite the central location, it is surprisingly quiet in this backyard.",
        uk: "Попри центральне розташування, у цьому внутрішньому дворі дивно тихо.",
        ar: "على الرغم من الموقع المركزي، فإنه هادئ بشكل مدهش في هذا الفناء الخلفي."
      }
    },
    {
      id: "sb_002",
      type: "sentenceBuilder",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Die", "Wohnung", "ist", "nicht", "nur", "extrem", "teuer", ",", "sondern", "auch", "in", "einem", "sehr", "schlechten", "Zustand", "."],
      correctAnswers: [
        "Die Wohnung ist nicht nur extrem teuer, sondern auch in einem sehr schlechten Zustand."
      ],
      translations: {
        en: "The apartment is not only extremely expensive, but also in very poor condition.",
        uk: "Квартира не лише надзвичайно дорога, але й у дуже поганому стані.",
        ar: "الشقة ليست باهظة الثمن للغاية فحسب، بل هي أيضًا في حالة سيئة جدًا."
      }
    },
    {
      id: "sb_003",
      type: "sentenceBuilder",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Weder", "der", "Vermieter", "noch", "die", "Hausverwaltung", "fühlten", "sich", "für", "den", "kaputten", "Lift", "zuständig", "."],
      correctAnswers: [
        "Weder der Vermieter noch die Hausverwaltung fühlten sich für den kaputten Lift zuständig."
      ],
      translations: {
        en: "Neither the landlord nor the building management felt responsible for the broken elevator.",
        uk: "Ані власник, ані адміністрація будинку не вважали себе відповідальними за зламаний ліфт.",
        ar: "لم يشعر لا المالك ولا إدارة المبنى بالمسؤولية عن المصعد المعطل."
      }
    },
    {
      id: "sb_004",
      type: "sentenceBuilder",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Zwar", "ist", "die", "Lage", "der", "Wohnung", "sehr", "zentral", ",", "aber", "der", "ständige", "Lärm", "stört", "die", "Nachtruhe", "."],
      correctAnswers: [
        "Zwar ist die Lage der Wohnung sehr zentral, aber der ständige Lärm stört die Nachtruhe."
      ],
      translations: {
        en: "It is true that the location of the apartment is very central, but the constant noise disturbs peace and quiet at night.",
        uk: "Хоч і розташування квартири дуже центральне, постійний шум заважає нічному спокою.",
        ar: "صحيح أن موقع الشقة مركزي جدًا، لكن الضوضاء المستمرة تزعج هدوء الليل."
      }
    },
    {
      id: "sb_005",
      type: "sentenceBuilder",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Hätte", "der", "Mieter", "die", "Kaution", "rechtzeitig", "überwiesen", ",", "wäre", "der", "Mietvertrag", "bereits", "gültig", "."],
      correctAnswers: [
        "Hätte der Mieter die Kaution rechtzeitig überwiesen, wäre der Mietvertrag bereits gültig."
      ],
      translations: {
        en: "If the tenant had transferred the deposit on time, the rental contract would already be valid.",
        uk: "Якби орендар вчасно переказав заставу, договір оренди вже був би чинним.",
        ar: "لو كان المستأجر قد حوّل التأمين في الوقت المناسب، لكان عقد الإيجار ساريًا بالفعل."
      }
    },
    {
      id: "sb_006",
      type: "sentenceBuilder",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Haben", "Sie", "sich", "schon", "darüber", "Gedanken", "gemacht", ",", "wer", "sich", "um", "den", "Garten", "kümmert", "?"],
      correctAnswers: [
        "Haben Sie sich schon darüber Gedanken gemacht, wer sich um den Garten kümmert?"
      ],
      translations: {
        en: "Have you already thought about who will take care of the garden?",
        uk: "Ви вже думали про те, хто буде доглядати за садом?",
        ar: "هل فكرت بالفعل في من سيتولى العناية بالحديقة؟"
      }
    },
    {
      id: "sb_007",
      type: "sentenceBuilder",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Entweder", "wir", "finden", "einen", "Kompromiss", ",", "oder", "wir", "müssen", "den", "Fall", "vor", "Gericht", "klären", "."],
      correctAnswers: [
        "Entweder wir finden einen Kompromiss, oder wir müssen den Fall vor Gericht klären."
      ],
      translations: {
        en: "Either we find a compromise, or we must settle the case in court.",
        uk: "Або ми знайдемо компроміс, або мусимо вирішити справу в суді.",
        ar: "إما أن نجد حلاً وسطًا، أو علينا أن نحسم القضية في المحكمة."
      }
    },
    {
      id: "sb_008",
      type: "sentenceBuilder",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Wären", "wir", "doch", "früher", "aus", "dieser", "rücksichtslosen", "Nachbarschaft", "ausgezogen", "!"],
      correctAnswers: [
        "Wären wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!"
      ],
      translations: {
        en: "If only we had moved out of this inconsiderate neighbourhood earlier!",
        uk: "Якби ж ми раніше виїхали з цього безвідповідального сусідства!",
        ar: "ليتنا انتقلنا من هذا الحي غير المراعي في وقت أبكر!"
      }
    },
    {
      id: "sb_009",
      type: "sentenceBuilder",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Trotz", "der", "fehlenden", "Baugenehmigung", "begann", "der", "Eigentümer", "mit", "dem", "Bau", "der", "Mauer", "."],
      correctAnswers: [
        "Trotz der fehlenden Baugenehmigung begann der Eigentümer mit dem Bau der Mauer."
      ],
      translations: {
        en: "Despite the missing building permit, the owner began building the wall.",
        uk: "Попри відсутність дозволу на будівництво, власник почав будівництво муру.",
        ar: "على الرغم من عدم وجود تصريح بناء، بدأ المالك في بناء الجدار."
      }
    },
    {
      id: "sb_010",
      type: "sentenceBuilder",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Bringe die Wörter in die richtige Reihenfolge.",
      wordBank: ["Die", "Kaution", "dient", "dem", "Vermieter", "als", "Sicherheit", ",", "falls", "der", "Mieter", "gegen", "den", "Vertrag", "verstößt", "."],
      correctAnswers: [
        "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag verstößt."
      ],
      translations: {
        en: "The deposit serves as security for the landlord if the tenant violates the contract.",
        uk: "Застава служить гарантією для власника, якщо орендар порушує договір.",
        ar: "يعمل التأمين كضمان للمالك إذا خالف المستأجر العقد."
      }
    },

    {
      id: "mc_001",
      type: "multipleChoice",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Die Wohnung ist nicht nur teuer, sondern auch in einem schlechten Zustand.",
        "Die Wohnung ist nicht nur teuer, aber auch in einem schlechten Zustand.",
        "Die Wohnung ist nicht nur teuer, sondern sie auch in einem schlechten Zustand.",
        "Nicht nur die Wohnung ist teuer, auch sondern in einem schlechten Zustand."
      ],
      correctAnswers: [
        "Die Wohnung ist nicht nur teuer, sondern auch in einem schlechten Zustand."
      ],
      translations: {
        en: "The apartment is not only expensive, but also in poor condition.",
        uk: "Квартира не лише дорога, але і в поганому стані.",
        ar: "الشقة ليست غالية فحسب، بل هي أيضًا في حالة سيئة."
      }
    },
    {
      id: "mc_002",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Weder der Vermieter noch die Hausverwaltung fühlten sich zuständig.",
        "Weder der Vermieter oder die Hausverwaltung fühlten sich zuständig.",
        "Weder der Vermieter noch fühlten sich die Hausverwaltung zuständig.",
        "Noch der Vermieter weder die Hausverwaltung fühlten sich zuständig."
      ],
      correctAnswers: [
        "Weder der Vermieter noch die Hausverwaltung fühlten sich zuständig."
      ],
      translations: {
        en: "Neither the landlord nor the building management felt responsible.",
        uk: "Ані власник, ані адміністрація будинку не вважали себе відповідальними.",
        ar: "لم يشعر لا المالك ولا إدارة المبنى بالمسؤولية."
      }
    },
    {
      id: "mc_003",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Trotz des hohen Preises ist die Nachfrage ungebrochen.",
        "Trotz dem hohen Preis ist die Nachfrage ungebrochen.",
        "Trotz den hohen Preis ist die Nachfrage ungebrochen.",
        "Trotz hohe Preis ist die Nachfrage ungebrochen."
      ],
      correctAnswers: [
        "Trotz des hohen Preises ist die Nachfrage ungebrochen."
      ],
      translations: {
        en: "Despite the high price, demand remains unbroken.",
        uk: "Попри високу ціну, попит залишається стабільним.",
        ar: "على الرغم من السعر المرتفع، لا يزال الطلب مستمرًا."
      }
    },
    {
      id: "mc_004",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Worüber hat sich der Nachbar beim Hausmeister beschwert?",
        "Worüber hat der Nachbar sich beim Hausmeister beschweren?",
        "Worauf hat sich der Nachbar beim Hausmeister beschwert?",
        "Dafür hat sich der Nachbar beim Hausmeister beschwert?"
      ],
      correctAnswers: [
        "Worüber hat sich der Nachbar beim Hausmeister beschwert?"
      ],
      translations: {
        en: "What did the neighbour complain to the caretaker about?",
        uk: "На що сусід скаржився майстрові будинку?",
        ar: "عمَّ اشتكى الجار لمشرف المبنى؟"
      }
    },
    {
      id: "mc_005",
      type: "multipleChoice",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Hätten Sie die Kündigungsfrist beachtet, müssten Sie jetzt keine doppelte Miete zahlen.",
        "Haben Sie die Kündigungsfrist beachtet, müssten Sie jetzt keine doppelte Miete zahlen.",
        "Hätten Sie die Kündigungsfrist beachten, müssten Sie jetzt keine doppelte Miete zahlen.",
        "Wären Sie die Kündigungsfrist beachtet, müssten Sie jetzt keine doppelte Miete zahlen."
      ],
      correctAnswers: [
        "Hätten Sie die Kündigungsfrist beachtet, müssten Sie jetzt keine doppelte Miete zahlen."
      ],
      translations: {
        en: "If you had observed the notice period, you would not have to pay double rent now.",
        uk: "Якби ви дотрималися строку в повідомленні про розірвання, зараз не довелося б платити подвійну оренду.",
        ar: "لو كنت قد راعيت مهلة الإشعار، لما اضطررت الآن إلى دفع إيجار مضاعف."
      }
    },
    {
      id: "mc_006",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Entweder Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung.",
        "Entweder Sie überweisen die Miete bis zum dritten Werktag, sondern Sie erhalten eine Abmahnung.",
        "Entweder überweisen Sie die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung bis.",
        "Sie überweisen entweder die Miete bis zum dritten Werktag, oder Sie eine Abmahnung erhalten."
      ],
      correctAnswers: [
        "Entweder Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung."
      ],
      translations: {
        en: "Either you transfer the rent by the third working day, or you receive a warning.",
        uk: "Або ви переказуєте оренду до третього робочого дня, або отримуєте попередження.",
        ar: "إما أن تحوّل الإيجار بحلول يوم العمل الثالث، أو ستتلقى إنذارًا."
      }
    },
    {
      id: "mc_007",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Ich kann mir diese großzügige Wohnung nicht leisten.",
        "Ich kann mir diese großzügige Wohnung nicht kümmern.",
        "Ich kann diese großzügige Wohnung nicht leisten mir.",
        "Ich leiste mir diese großzügige Wohnung nicht kann."
      ],
      correctAnswers: [
        "Ich kann mir diese großzügige Wohnung nicht leisten."
      ],
      translations: {
        en: "I cannot afford this spacious apartment.",
        uk: "Я не можу собі дозволити цю простору квартиру.",
        ar: "لا أستطيع تحمّل تكلفة هذه الشقة الواسعة."
      }
    },
    {
      id: "mc_008",
      type: "multipleChoice",
      level: "B2",
      grammarFocus: "pronominaladverbien",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Ich interessiere mich dafür, ob das Grundstück bereits erschlossen ist.",
        "Ich interessiere mich für das, ob das Grundstück bereits erschlossen ist.",
        "Ich interessiere mich darüber, ob das Grundstück bereits erschlossen ist.",
        "Ich interessiere mich darauf, ob das Grundstück bereits erschlossen ist."
      ],
      correctAnswers: [
        "Ich interessiere mich dafür, ob das Grundstück bereits erschlossen ist."
      ],
      translations: {
        en: "I am interested in whether the property is already developed.",
        uk: "Мене цікавить, чи вже освоєна ця ділянка.",
        ar: "أنا مهتم بما إذا كانت قطعة الأرض مطوّرة بالفعل."
      }
    },
    {
      id: "mc_009",
      type: "multipleChoice",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Hätte die Regierung früher reagiert, wäre der Mangel kleiner gewesen.",
        "Hätte die Regierung früher reagiert, hätte der Mangel kleiner gewesen.",
        "Wenn die Regierung früher reagiert, wäre der Mangel kleiner gewesen.",
        "Hätte die Regierung früher reagiert, war der Mangel kleiner gewesen."
      ],
      correctAnswers: [
        "Hätte die Regierung früher reagiert, wäre der Mangel kleiner gewesen."
      ],
      translations: {
        en: "If the government had reacted earlier, the shortage would have been smaller.",
        uk: "Якби уряд зреагував раніше, дефіцит був би меншим.",
        ar: "لو أن الحكومة ردّت في وقت أبكر، لكان النقص أقل."
      }
    },
    {
      id: "mc_010",
      type: "multipleChoice",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Wähle den richtigen Satz.",
      options: [
        "Zwar ist die Wohnung winzig, aber sie hat eine schöne Dachterrasse.",
        "Zwar ist die Wohnung winzig, sondern sie hat eine schöne Dachterrasse.",
        "Zwar die Wohnung ist winzig, aber sie hat eine schöne Dachterrasse.",
        "Die Wohnung zwar ist winzig, aber sie hat eine schöne Dachterrasse."
      ],
      correctAnswers: [
        "Zwar ist die Wohnung winzig, aber sie hat eine schöne Dachterrasse."
      ],
      translations: {
        en: "The apartment is tiny, but it has a beautiful roof terrace.",
        uk: "Квартира хоч і дуже мала, але має прекрасну дахову терасу.",
        ar: "الشقة صغيرة جدًا، لكنها تحتوي على شرفة سطح جميلة."
      }
    },

    {
      id: "gf_001",
      type: "gapFill",
      level: "A2",
      grammarFocus: "pronominaladverbien",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "Haben Sie sich schon ___ Gedanken gemacht, wer sich um den Garten kümmert?",
      displaySentence: "Haben Sie sich schon ___ Gedanken gemacht, wer sich um den Garten kümmert?",
      correctAnswers: ["darüber"],
      hint: "Es geht um eine Sache, nicht um eine Person.",
      translations: {
        en: "Have you already thought about who will take care of the garden?",
        uk: "Ви вже думали про те, хто буде доглядати за садом?",
        ar: "هل فكرت بالفعل في من سيتولى العناية بالحديقة؟"
      }
    },
    {
      id: "gf_002",
      type: "gapFill",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "___ des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen.",
      displaySentence: "___ des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen.",
      correctAnswers: ["Trotz"],
      hint: "Die Präposition zeigt einen Gegensatz.",
      translations: {
        en: "Despite the high price, the demand for housing remains strong.",
        uk: "Попри високу ціну, попит на житло залишається високим.",
        ar: "على الرغم من السعر المرتفع، لا يزال الطلب على السكن قويًا."
      }
    },
    {
      id: "gf_003",
      type: "gapFill",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Schreibe die fehlende Form.",
      sentence: "___ wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!",
      displaySentence: "___ wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!",
      correctAnswers: ["Wären"],
      hint: "Du brauchst Konjunktiv II der Vergangenheit mit einem Bewegungsverb.",
      translations: {
        en: "If only we had moved out of this inconsiderate neighbourhood earlier!",
        uk: "Якби ж ми раніше виїхали з цього безвідповідального сусідства!",
        ar: "ليتنا انتقلنا من هذا الحي غير المراعي في وقت أبكر!"
      }
    },
    {
      id: "gf_004",
      type: "gapFill",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "Die Wohnung ist nicht nur teuer, ___ auch in einem schlechten Zustand.",
      displaySentence: "Die Wohnung ist nicht nur teuer, ___ auch in einem schlechten Zustand.",
      correctAnswers: ["sondern"],
      hint: "Nach nicht nur ... kommt der zweite Teil des Konnektors.",
      translations: {
        en: "The apartment is not only expensive, but also in poor condition.",
        uk: "Квартира не лише дорога, але і в поганому стані.",
        ar: "الشقة ليست غالية فحسب، بل هي أيضًا في حالة سيئة."
      }
    },
    {
      id: "gf_005",
      type: "gapFill",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag ___.",
      displaySentence: "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag ___.",
      correctAnswers: ["verstößt"],
      hint: "Das Verb bedeutet: eine Regel oder einen Vertrag nicht beachten.",
      translations: {
        en: "The deposit serves as security for the landlord if the tenant violates the contract.",
        uk: "Застава служить гарантією для власника, якщо орендар порушує договір.",
        ar: "يعمل التأمين كضمان للمالك إذا خالف المستأجر العقد."
      }
    },
    {
      id: "gf_006",
      type: "gapFill",
      level: "B2",
      grammarFocus: "pronominaladverbien",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "___ genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?",
      displaySentence: "___ genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?",
      correctAnswers: ["Wofür"],
      hint: "Frage nach einer Sache mit für.",
      translations: {
        en: "What exactly was this additional charge in the utility costs calculated for?",
        uk: "За що саме було нараховано цю додаткову плату в комунальних витратах?",
        ar: "لأي شيء بالضبط تم احتساب هذه الرسوم الإضافية ضمن التكاليف الجانبية؟"
      }
    },
    {
      id: "gf_007",
      type: "gapFill",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "Nicht nur der Rasen muss gemäht werden, sondern auch die Hecken brauchen einen ___.",
      displaySentence: "Nicht nur der Rasen muss gemäht werden, sondern auch die Hecken brauchen einen ___.",
      correctAnswers: ["Schnitt"],
      hint: "Die Hecke wird nicht gemäht, sondern geschnitten.",
      translations: {
        en: "Not only does the lawn need to be mowed, the hedges also need trimming.",
        uk: "Треба косити не лише газон, але й підрізати живопліт.",
        ar: "لا يحتاج العشب فقط إلى القص، بل تحتاج الأسيجة أيضًا إلى تقليم."
      }
    },
    {
      id: "gf_008",
      type: "gapFill",
      level: "B2",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "___ Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung.",
      displaySentence: "___ Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung.",
      correctAnswers: ["Entweder"],
      hint: "Du brauchst einen zweiteiligen Konnektor für eine Alternative.",
      translations: {
        en: "Either you transfer the rent by the third working day, or you receive a warning.",
        uk: "Або ви переказуєте оренду до третього робочого дня, або отримуєте попередження.",
        ar: "إما أن تحوّل الإيجار بحلول يوم العمل الثالث، أو ستتلقى إنذارًا."
      }
    },
    {
      id: "gf_009",
      type: "gapFill",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Schreibe die fehlende Form.",
      sentence: "___ die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
      displaySentence: "___ die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
      correctAnswers: ["Hätte"],
      hint: "Du brauchst die irrealen Vergangenheit mit haben.",
      translations: {
        en: "If the government had reacted earlier, the shortage of affordable housing would have been smaller.",
        uk: "Якби уряд зреагував раніше, брак доступного житла був би меншим.",
        ar: "لو أن الحكومة ردّت في وقت أبكر، لكان نقص المساكن الميسورة أقل."
      }
    },
    {
      id: "gf_010",
      type: "gapFill",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe das fehlende Wort.",
      sentence: "In Deutschland muss man sich an die Hausordnung halten, um Streit zu ___.",
      displaySentence: "In Deutschland muss man sich an die Hausordnung halten, um Streit zu ___.",
      correctAnswers: ["vermeiden"],
      hint: "Das Verb bedeutet: etwas nicht entstehen lassen.",
      translations: {
        en: "In Germany, you must follow the house rules to avoid conflict.",
        uk: "У Німеччині треба дотримуватися правил будинку, щоб уникнути конфлікту.",
        ar: "في ألمانيا يجب الالتزام بقواعد المنزل لتجنب النزاع."
      }
    },

    {
      id: "ft_001",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "einziehen",
        participle: "eingezogen",
        preterite: "zog ein"
      },
      missingForm: "preterite",
      correctAnswers: ["zog ein"],
      translations: {
        en: "to move in - moved in - has moved in",
        uk: "вселятися - вселився - вселився",
        ar: "ينتقل للسكن - انتقل للسكن - قد انتقل للسكن"
      }
    },
    {
      id: "ft_002",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "ausziehen",
        participle: "ausgezogen",
        preterite: "zog aus"
      },
      missingForm: "participle",
      correctAnswers: ["ausgezogen"],
      translations: {
        en: "to move out - moved out - has moved out",
        uk: "виїхати - виїхав - виїхав",
        ar: "ينتقل من السكن - انتقل من السكن - قد انتقل من السكن"
      }
    },
    {
      id: "ft_003",
      type: "formTraining",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "kündigen",
        participle: "gekündigt",
        preterite: "kündigte"
      },
      missingForm: "infinitive",
      correctAnswers: ["kündigen"],
      translations: {
        en: "to terminate - terminated - has terminated",
        uk: "розірвати - розірвав - розірвав",
        ar: "يُنهي / يفسخ - أنهى / فسخ - قد أنهى / فسخ"
      }
    },
    {
      id: "ft_004",
      type: "formTraining",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "sich beschweren",
        participle: "hat sich beschwert",
        preterite: "beschwerte sich"
      },
      missingForm: "preterite",
      correctAnswers: ["beschwerte sich"],
      translations: {
        en: "to complain - complained - has complained",
        uk: "скаржитися - скаржився - поскаржився",
        ar: "يشتكي - اشتكى - قد اشتكى"
      }
    },
    {
      id: "ft_005",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "sich kümmern",
        participle: "hat sich gekümmert",
        preterite: "kümmerte sich"
      },
      missingForm: "participle",
      correctAnswers: ["hat sich gekümmert"],
      translations: {
        en: "to take care of - took care of - has taken care of",
        uk: "дбати про - дбав про - подбав про",
        ar: "يعتني بـ - اعتنى بـ - قد اعتنى بـ"
      }
    },
    {
      id: "ft_006",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "überweisen",
        participle: "hat überwiesen",
        preterite: "überwies"
      },
      missingForm: "preterite",
      correctAnswers: ["überwies"],
      translations: {
        en: "to transfer money - transferred - has transferred",
        uk: "переказати гроші - переказав - переказав",
        ar: "يحوّل المال - حوّل - قد حوّل"
      }
    },
    {
      id: "ft_007",
      type: "formTraining",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "verlangen",
        participle: "hat verlangt",
        preterite: "verlangte"
      },
      missingForm: "participle",
      correctAnswers: ["hat verlangt"],
      translations: {
        en: "to demand - demanded - has demanded",
        uk: "вимагати - вимагав - вимагав",
        ar: "يطالب - طالب - قد طالب"
      }
    },
    {
      id: "ft_008",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "mähen",
        participle: "hat gemäht",
        preterite: "mähte"
      },
      missingForm: "infinitive",
      correctAnswers: ["mähen"],
      translations: {
        en: "to mow - mowed - has mowed",
        uk: "косити - косив - косив",
        ar: "يقص العشب - قصّ العشب - قد قصّ العشب"
      }
    },
    {
      id: "ft_009",
      type: "formTraining",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "reagieren",
        participle: "hat reagiert",
        preterite: "reagierte"
      },
      missingForm: "participle",
      correctAnswers: ["hat reagiert"],
      translations: {
        en: "to react - reacted - has reacted",
        uk: "реагувати - реагував - зреагував",
        ar: "يتفاعل / يستجيب - تفاعل / استجاب - قد تفاعل / استجاب"
      }
    },
    {
      id: "ft_010",
      type: "formTraining",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Verbform.",
      forms: {
        infinitive: "verstoßen",
        participle: "hat verstoßen",
        preterite: "verstieß"
      },
      missingForm: "preterite",
      correctAnswers: ["verstieß"],
      translations: {
        en: "to violate - violated - has violated",
        uk: "порушувати - порушив - порушив",
        ar: "ينتهك - انتهك - قد انتهك"
      }
    },
    {
      id: "ft_011",
      type: "formTraining",
      trainingKind: "adjective",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "ruhig",
        comparative: "ruhiger",
        superlative: "am ruhigsten"
      },
      missingForm: "comparative",
      correctAnswers: ["ruhiger"],
      translations: {
        en: "quiet - quieter - quietest",
        uk: "тихий - тихіший - найтихіший",
        ar: "هادئ - أكثر هدوءًا - الأهدأ"
      }
    },
    {
      id: "ft_012",
      type: "formTraining",
      trainingKind: "adjective",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "laut",
        comparative: "lauter",
        superlative: "am lautesten"
      },
      missingForm: "superlative",
      correctAnswers: ["am lautesten"],
      translations: {
        en: "loud - louder - loudest",
        uk: "гучний - гучніший - найгучніший",
        ar: "صاخب - أكثر صخبًا - الأشد صخبًا"
      }
    },
    {
      id: "ft_013",
      type: "formTraining",
      trainingKind: "adjective",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "teuer",
        comparative: "teurer",
        superlative: "am teuersten"
      },
      missingForm: "positive",
      correctAnswers: ["teuer"],
      translations: {
        en: "expensive - more expensive - most expensive",
        uk: "дорогий - дорожчий - найдорожчий",
        ar: "غالي - أغلى - الأغلى"
      }
    },
    {
      id: "ft_014",
      type: "formTraining",
      trainingKind: "adjective",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "sauber",
        comparative: "sauberer",
        superlative: "am saubersten"
      },
      missingForm: "superlative",
      correctAnswers: ["am saubersten"],
      translations: {
        en: "clean - cleaner - cleanest",
        uk: "чистий - чистіший - найчистіший",
        ar: "نظيف - أنظف - الأنظف"
      }
    },
    {
      id: "ft_015",
      type: "formTraining",
      trainingKind: "adjective",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "großzügig",
        comparative: "großzügiger",
        superlative: "am großzügigsten"
      },
      missingForm: "comparative",
      correctAnswers: ["großzügiger"],
      translations: {
        en: "generous / spacious - more generous / more spacious - most generous / most spacious",
        uk: "просторий / щедрий - просторіший / щедріший - найпросторіший / найщедріший",
        ar: "واسع / كريم - أكثر اتساعًا / أكثر كرمًا - الأوسع / الأكرم"
      }
    },
    {
      id: "ft_016",
      type: "formTraining",
      trainingKind: "adjective",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        positive: "rücksichtslos",
        comparative: "rücksichtsloser",
        superlative: "am rücksichtslosesten"
      },
      missingForm: "superlative",
      correctAnswers: ["am rücksichtslosesten"],
      translations: {
        en: "inconsiderate - more inconsiderate - most inconsiderate",
        uk: "безвідповідальний / нечемний до інших - ще безвідповідальніший - найбезвідповідальніший",
        ar: "عديم المراعاة - أكثر عدمًا للمراعاة - الأشد عدمًا للمراعاة"
      }
    },
    {
      id: "ft_017",
      type: "formTraining",
      trainingKind: "noun",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "der",
        singular: "Mieter",
        plural: "Mieter"
      },
      missingForm: "article",
      correctAnswers: ["der"],
      translations: {
        en: "tenant - tenants",
        uk: "орендар - орендарі",
        ar: "مستأجر - مستأجرون"
      }
    },
    {
      id: "ft_018",
      type: "formTraining",
      trainingKind: "noun",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "die",
        singular: "Treppe",
        plural: "Treppen"
      },
      missingForm: "plural",
      correctAnswers: ["Treppen"],
      translations: {
        en: "staircase / stairs - staircases / stairs",
        uk: "сходи / сходова клітка - сходи",
        ar: "درج - سلالم"
      }
    },
    {
      id: "ft_019",
      type: "formTraining",
      trainingKind: "noun",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "das",
        singular: "Dach",
        plural: "Dächer"
      },
      missingForm: "plural",
      correctAnswers: ["Dächer"],
      translations: {
        en: "roof - roofs",
        uk: "дах - дахи",
        ar: "سقف - أسقف"
      }
    },
    {
      id: "ft_020",
      type: "formTraining",
      trainingKind: "noun",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "die",
        singular: "Kaution",
        plural: "Kautionen"
      },
      missingForm: "article",
      correctAnswers: ["die"],
      translations: {
        en: "security deposit - security deposits",
        uk: "застава - застави",
        ar: "تأمين / كفالة - تأمينات / كفالات"
      }
    },
    {
      id: "ft_021",
      type: "formTraining",
      trainingKind: "noun",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "der",
        singular: "Rechtsanwalt",
        plural: "Rechtsanwälte"
      },
      missingForm: "plural",
      correctAnswers: ["Rechtsanwälte"],
      translations: {
        en: "lawyer - lawyers",
        uk: "адвокат - адвокати",
        ar: "محامٍ - محامون"
      }
    },
    {
      id: "ft_022",
      type: "formTraining",
      trainingKind: "noun",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Schreibe die fehlende Form.",
      forms: {
        article: "die",
        singular: "Kündigungsfrist",
        plural: "Kündigungsfristen"
      },
      missingForm: "plural",
      correctAnswers: ["Kündigungsfristen"],
      translations: {
        en: "notice period - notice periods",
        uk: "строк попередження про розірвання - строки попередження про розірвання",
        ar: "مهلة الإشعار بإنهاء العقد - مهل الإشعار بإنهاء العقد"
      }
    },

    {
      id: "es_001",
      type: "errorSearch",
      level: "B2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Meine Mutter hat den Mietvertrag bereits geunkundigt.",
      wrongWord: "geunkundigt",
      correctForm: "gekündigt",
      correctAnswers: ["geunkundigt"],
      noMistake: false,
      translations: {
        en: "My mother has already terminated the rental contract.",
        uk: "Моя мама вже розірвала договір оренди.",
        ar: "لقد أنهت أمي عقد الإيجار بالفعل."
      }
    },
    {
      id: "es_002",
      type: "errorSearch",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Trotz dem hohen Preis ist die Wohnung schnell vermietet worden.",
      wrongWord: "dem",
      correctForm: "des",
      correctSentence: "Trotz des hohen Preises ist die Wohnung schnell vermietet worden.",
      correctAnswers: ["dem"],
      noMistake: false,
      translations: {
        en: "Despite the high price, the apartment was rented out quickly.",
        uk: "Попри високу ціну, квартиру швидко здали в оренду.",
        ar: "على الرغم من السعر المرتفع، تم تأجير الشقة بسرعة."
      }
    },
    {
      id: "es_003",
      type: "errorSearch",
      level: "B2",
      grammarFocus: "pronominaladverbien",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Ich interessiere mich darüber, ob das Grundstück erschlossen ist.",
      wrongWord: "darüber",
      correctForm: "dafür",
      correctAnswers: ["darüber"],
      noMistake: false,
      translations: {
        en: "I am interested in whether the property is already developed.",
        uk: "Мене цікавить, чи вже освоєна ця ділянка.",
        ar: "أنا مهتم بما إذا كانت قطعة الأرض مطوّرة بالفعل."
      }
    },
    {
      id: "es_004",
      type: "errorSearch",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Der Mieter hat die Kaution rechtzeitig überwiesen.",
      wrongWord: null,
      correctForm: null,
      correctAnswers: ["__correct__"],
      noMistake: true,
      translations: {
        en: "The tenant transferred the deposit on time.",
        uk: "Орендар вчасно переказав заставу.",
        ar: "قام المستأجر بتحويل التأمين في الوقت المناسب."
      }
    },
    {
      id: "es_005",
      type: "errorSearch",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Weder der Vermieter oder die Hausverwaltung fühlten sich zuständig.",
      wrongWord: "oder",
      correctForm: "noch",
      correctAnswers: ["oder"],
      noMistake: false,
      translations: {
        en: "Neither the landlord nor the building management felt responsible.",
        uk: "Ані власник, ані адміністрація будинку не вважали себе відповідальними.",
        ar: "لم يشعر لا المالك ولا إدارة المبنى بالمسؤولية."
      }
    },
    {
      id: "es_006",
      type: "errorSearch",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Hätte die Regierung früher reagiert, würde der Mangel kleiner gewesen.",
      wrongWord: "würde",
      correctForm: "wäre",
      correctAnswers: ["würde"],
      noMistake: false,
      translations: {
        en: "If the government had reacted earlier, the shortage would have been smaller.",
        uk: "Якби уряд зреагував раніше, дефіцит був би меншим.",
        ar: "لو أن الحكومة ردّت في وقت أبكر، لكان النقص أقل."
      }
    },
    {
      id: "es_007",
      type: "errorSearch",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Meine Tante kümmert sich um den Garten.",
      wrongWord: null,
      correctForm: null,
      correctAnswers: ["__correct__"],
      noMistake: true,
      translations: {
        en: "My aunt takes care of the garden.",
        uk: "Моя тітка доглядає за садом.",
        ar: "تعتني خالتي بالحديقة."
      }
    },
    {
      id: "es_008",
      type: "errorSearch",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Trotz der zentralen Lage ist es in diesem Hinterhof erstaunlich ruhig.",
      wrongWord: null,
      correctForm: null,
      correctAnswers: ["__correct__"],
      noMistake: true,
      translations: {
        en: "Despite the central location, it is surprisingly quiet in this backyard.",
        uk: "Попри центральне розташування, у цьому внутрішньому дворі дивно тихо.",
        ar: "على الرغم من الموقع المركزي، فإنه هادئ بشكل مدهش في هذا الفناء الخلفي."
      }
    },
    {
      id: "es_009",
      type: "errorSearch",
      level: "B2",
      grammarFocus: "pronominaladverbien",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Worauf genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?",
      wrongWord: "Worauf",
      correctForm: "Wofür",
      correctAnswers: ["Worauf"],
      noMistake: false,
      translations: {
        en: "What exactly was this additional charge in the utility costs calculated for?",
        uk: "За що саме було нараховано цю додаткову плату в комунальних витратах?",
        ar: "لأي شيء بالضبط تم احتساب هذه الرسوم الإضافية ضمن التكاليف الجانبية؟"
      }
    },
    {
      id: "es_010",
      type: "errorSearch",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      prompt: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt.",
      sentence: "Die Wohnung ist nicht nur teuer, sondern auch in einem sehr schlechten Zustand.",
      wrongWord: null,
      correctForm: null,
      correctAnswers: ["__correct__"],
      noMistake: true,
      translations: {
        en: "The apartment is not only expensive, but also in very poor condition.",
        uk: "Квартира не лише дорога, але й у дуже поганому стані.",
        ar: "الشقة ليست غالية الثمن فحسب، بل هي أيضًا في حالة سيئة جدًا."
      }
    }
  ]
};

window.appData = appData;

