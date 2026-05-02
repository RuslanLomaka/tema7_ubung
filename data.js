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

  pilotSentenceBank: [
    {
      id: "ps_001",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "In Deutschland muss man sich an die Hausordnung halten, um Streit zu vermeiden.",
      translations: {
        en: "In Germany, you have to follow the house rules in order to avoid conflict.",
        uk: "У Німеччині треба дотримуватися правил будинку, щоб уникати конфліктів.",
        ar: "في ألمانيا يجب الالتزام بقواعد المنزل لتجنب الخلاف."
      },
      sentenceGrammarNotes: [
        {
          title: "sich an etwas halten",
          summary: "Das reflexive Verb heißen: Regeln beachten oder befolgen.",
          details: "Im Satz steht das Verb mit dem Reflexivpronomen und der Präposition an: sich an die Hausordnung halten.",
          example: "man sich an die Hausordnung halten"
        },
        {
          title: "um ... zu + Infinitiv",
          summary: "Diese Struktur zeigt ein Ziel oder einen Zweck.",
          details: "Nach um ... zu folgt der Infinitiv am Ende. Hier erklärt die Struktur, warum man die Hausordnung befolgen soll.",
          example: "um Streit zu vermeiden"
        }
      ],
      chunks: {
        easy: ["In Deutschland", "muss man sich", "an die Hausordnung halten,", "um Streit zu vermeiden."],
        medium: ["In Deutschland", "muss man sich", "an die Hausordnung", "halten, um", "Streit zu vermeiden."],
        hard: ["In", "Deutschland", "muss", "man", "sich", "an", "die", "Hausordnung", "halten,", "um", "Streit", "zu", "vermeiden."]
      },
      alternativeCorrectAnswers: [
        "In Deutschland muss man sich an die Hausordnung halten, um Streit zu vermeiden."
      ],
      matching: {
        start: "In Deutschland muss man sich an die Hausordnung halten,",
        end: "um Streit zu vermeiden."
      },
      gapFill: {
        answer: "vermeiden",
        hint: "Das Verb bedeutet: etwas nicht entstehen lassen."
      },
      multipleChoice: {
        wrongOptions: [
          "In Deutschland muss man an die Hausordnung sich halten, um Streit zu vermeiden.",
          "In Deutschland muss man sich an die Hausordnung halten, Streit zu um vermeiden.",
          "In Deutschland muss man sich die Hausordnung an halten, um Streit zu vermeiden."
        ]
      },
      errorSearch: {
        typoOptions: {
          vermeiden: [
            "vermeidet",
            "vermeidn",
            "vermeden"
          ]
        }
      }
    },
    {
      id: "ps_002",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen.",
      translations: {
        en: "Despite the high price, the demand for housing remains strong.",
        uk: "Попри високу ціну, попит на житло залишається стабільно високим.",
        ar: "رغم السعر المرتفع، يبقى الطلب على السكن مرتفعًا."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Nach trotz steht hier der Genitiv: des hohen Preises.",
          details: "Die Kombination trotz + Genitiv klingt im Standarddeutsch korrekt und formell. Gerade hier ist der Artikel wichtig.",
          example: "Trotz des hohen Preises"
        }
      ],
      chunks: {
        easy: ["Trotz des hohen Preises", "ist die Nachfrage", "nach Wohnraum ungebrochen."],
        medium: ["Trotz des hohen Preises", "ist die Nachfrage", "nach Wohnraum", "ungebrochen."],
        hard: ["Trotz", "des", "hohen", "Preises", "ist", "die", "Nachfrage", "nach", "Wohnraum", "ungebrochen."]
      },
      alternativeCorrectAnswers: [
        "Trotz des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen."
      ],
      matching: {
        start: "Trotz des hohen Preises",
        end: "ist die Nachfrage nach Wohnraum ungebrochen."
      },
      gapFill: {
        answer: "Trotz",
        hint: "Gesucht ist eine Präposition mit Genitiv für einen Gegensatz."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz dem hohen Preis ist die Nachfrage nach Wohnraum ungebrochen.",
          "Trotz den hohen Preis ist die Nachfrage nach Wohnraum ungebrochen.",
          "Trotz hoher Preis ist die Nachfrage nach Wohnraum ungebrochen."
        ]
      },
      errorSearch: {
        typoOptions: {
          des: [
            "dem",
            "den"
          ],
          Preises: [
            "Preis",
            "Preißes"
          ]
        }
      }
    },
    {
      id: "ps_003",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Haben Sie sich schon darüber Gedanken gemacht, wer sich um den Garten kümmert?",
      translations: {
        en: "Have you already thought about who takes care of the garden?",
        uk: "Ви вже думали про те, хто доглядатиме за садом?",
        ar: "هل فكرت بالفعل فيمن سيهتم بالحديقة؟"
      },
      sentenceGrammarNotes: [
        {
          title: "über etwas nachdenken / sich Gedanken machen über",
          summary: "Man denkt in diesem Muster über eine Sache nach: darüber Gedanken machen.",
          details: "Das Verbmuster verlangt über + Akkusativ. Wenn die Sache schon bekannt ist, wird daraus das Pronominaladverb darüber.",
          example: "sich schon darüber Gedanken gemacht"
        },
        {
          title: "sich kümmern um",
          summary: "Das reflexive Verb stehen mit um + Akkusativ.",
          details: "Im Nebensatz sieht man die feste Verbindung sehr klar: sich um den Garten kümmern.",
          example: "wer sich um den Garten kümmert"
        }
      ],
      chunks: {
        easy: ["Haben Sie sich schon", "darüber Gedanken gemacht,", "wer sich um den Garten kümmert?"],
        medium: ["Haben Sie sich", "schon darüber", "Gedanken gemacht,", "wer sich", "um den Garten kümmert?"],
        hard: ["Haben", "Sie", "sich", "schon", "darüber", "Gedanken", "gemacht,", "wer", "sich", "um", "den", "Garten", "kümmert?"]
      },
      alternativeCorrectAnswers: [
        "Haben Sie sich schon darüber Gedanken gemacht, wer sich um den Garten kümmert?"
      ],
      matching: {
        start: "Haben Sie sich schon darüber Gedanken gemacht,",
        end: "wer sich um den Garten kümmert?"
      },
      gapFill: {
        answer: "darüber",
        hint: "Es geht um eine Sache, nicht um eine Person."
      },
      multipleChoice: {
        wrongOptions: [
          "Haben Sie sich schon dafür Gedanken gemacht, wer sich um den Garten kümmert?",
          "Haben Sie schon sich darüber Gedanken gemacht, wer sich um den Garten kümmert?",
          "Haben Sie sich schon darüber Gedanken gemacht, wer um den Garten sich kümmert?"
        ]
      },
      errorSearch: {
        typoOptions: {
          darüber: [
            "dafür",
            "daruber",
            "drüber"
          ],
          kümmert: [
            "kummert",
            "kümmertt"
          ]
        }
      }
    },
    {
      id: "ps_004",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätte die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
      translations: {
        en: "If the government had reacted earlier, the shortage of affordable housing would have been smaller.",
        uk: "Якби уряд відреагував раніше, нестача доступного житла була б меншою.",
        ar: "لو أن الحكومة تصرفت في وقت أبكر، لكان النقص في المساكن الميسورة أقل."
      },
      sentenceGrammarNotes: [
        {
          title: "hätte ... reagiert / wäre ... gewesen",
          summary: "Der Satz benutzt Konjunktiv II der Vergangenheit mit hätte und wäre.",
          details: "Im ersten Teil steht hätte + Partizip II, im zweiten Teil wäre + Partizip II. So beschreibt der Satz eine irreale Vergangenheit.",
          example: "Hätte die Regierung früher reagiert, wäre der Mangel ... kleiner gewesen."
        }
      ],
      chunks: {
        easy: ["Hätte die Regierung früher reagiert,", "wäre der Mangel", "an bezahlbaren Wohnungen", "kleiner gewesen."],
        medium: ["Hätte die Regierung", "früher reagiert,", "wäre der Mangel", "an bezahlbaren Wohnungen", "kleiner gewesen."],
        hard: ["Hätte", "die", "Regierung", "früher", "reagiert,", "wäre", "der", "Mangel", "an", "bezahlbaren", "Wohnungen", "kleiner", "gewesen."]
      },
      alternativeCorrectAnswers: [
        "Hätte die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
      ],
      matching: {
        start: "Hätte die Regierung früher reagiert,",
        end: "wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
      },
      gapFill: {
        answer: "wäre",
        hint: "Gesucht ist die richtige Form von sein im Konjunktiv II der Vergangenheit."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätte die Regierung früher reagiert, hätte der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
          "Die Regierung hätte früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
          "Hätte die Regierung reagiert früher, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
        ]
      },
      errorSearch: {
        typoOptions: {
          wäre: [
            "hätte",
            "ware"
          ],
          früher: [
            "fruher",
            "frühr"
          ]
        }
      }
    }
  ],

  sentenceBankV2: [
    {
      id: "rs_001",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "In Deutschland muss man sich an die Hausordnung halten, um Streit zu vermeiden.",
      translations: {
        en: "In Germany, you have to follow the house rules in order to avoid conflict.",
        uk: "У Німеччині треба дотримуватися правил будинку, щоб уникнути конфлікту.",
        ar: "في ألمانيا يجب الالتزام بقواعد المنزل لتجنّب النزاع."
      },
      sentenceGrammarNotes: [
        {
          title: "sich an etwas halten",
          summary: "Das reflexive Verb bedeutet: Regeln beachten oder befolgen.",
          details: "Im Satz steht die feste Verbindung sich an + Akkusativ: sich an die Hausordnung halten.",
          example: "man sich an die Hausordnung halten"
        },
        {
          title: "um ... zu + Infinitiv",
          summary: "Diese Struktur zeigt einen Zweck oder ein Ziel.",
          details: "Nach um ... zu steht der Infinitiv am Ende. Hier erklärt die Struktur, warum man die Hausordnung befolgen soll.",
          example: "um Streit zu vermeiden"
        }
      ],
      vocabularyLinks: ["die Hausordnung", "vermeiden"],
      chunks: {
        easy: ["In Deutschland", "muss man sich", "an die Hausordnung halten,", "um Streit zu vermeiden."],
        medium: ["In Deutschland", "muss man sich", "an die Hausordnung", "halten, um", "Streit zu vermeiden."],
        hard: ["In", "Deutschland", "muss", "man", "sich", "an", "die", "Hausordnung", "halten,", "um", "Streit", "zu", "vermeiden."]
      },
      alternativeCorrectAnswers: [
        "In Deutschland muss man sich an die Hausordnung halten, um Streit zu vermeiden."
      ],
      matching: {
        start: "In Deutschland muss man sich an die Hausordnung halten,",
        end: "um Streit zu vermeiden."
      },
      gapFill: {
        answer: "vermeiden",
        hint: "Das Verb bedeutet: etwas nicht entstehen lassen."
      },
      multipleChoice: {
        wrongOptions: [
          "In Deutschland muss man an die Hausordnung sich halten, um Streit zu vermeiden.",
          "In Deutschland muss man sich an die Hausordnung halten, Streit zu um vermeiden.",
          "In Deutschland muss man sich die Hausordnung an halten, um Streit zu vermeiden."
        ]
      },
      errorSearch: {
        typoOptions: {
          vermeiden: ["vermeidet", "vermeidn", "vermeden"]
        }
      }
    },
    {
      id: "rs_002",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der Mieter hat die Kaution rechtzeitig überwiesen, damit der Mietvertrag gültig wird.",
      translations: {
        en: "The tenant transferred the deposit on time so that the rental contract becomes valid.",
        uk: "Орендар вчасно переказав заставу, щоб договір оренди набув чинності.",
        ar: "حوّل المستأجر مبلغ التأمين في الوقت المناسب لكي يصبح عقد الإيجار ساريًا."
      },
      sentenceGrammarNotes: [
        {
          title: "damit-Satz",
          summary: "Damit zeigt hier ein Ziel oder einen Zweck.",
          details: "Der Nebensatz mit damit erklärt, warum die Kaution überwiesen wurde.",
          example: "damit der Mietvertrag gültig wird"
        }
      ],
      vocabularyLinks: ["der Mieter", "die Kaution", "der Mietvertrag", "überweisen"],
      chunks: {
        easy: ["Der Mieter hat", "die Kaution rechtzeitig", "überwiesen,", "damit der Mietvertrag gültig wird."],
        medium: ["Der Mieter", "hat die Kaution", "rechtzeitig überwiesen,", "damit der Mietvertrag", "gültig wird."],
        hard: ["Der", "Mieter", "hat", "die", "Kaution", "rechtzeitig", "überwiesen,", "damit", "der", "Mietvertrag", "gültig", "wird."]
      },
      alternativeCorrectAnswers: [
        "Der Mieter hat die Kaution rechtzeitig überwiesen, damit der Mietvertrag gültig wird."
      ],
      matching: {
        start: "Der Mieter hat die Kaution rechtzeitig überwiesen,",
        end: "damit der Mietvertrag gültig wird."
      },
      gapFill: {
        answer: "überwiesen",
        hint: "Gesucht ist das Partizip II von überweisen."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Mieter hat die Kaution rechtzeitig überwiesen, damit wird der Mietvertrag gültig.",
          "Der Mieter hat rechtzeitig die Kaution überwiesen, der Mietvertrag damit gültig wird.",
          "Der Mieter hat die Kaution überwiesen rechtzeitig, damit der Mietvertrag wird gültig."
        ]
      },
      errorSearch: {
        typoOptions: {
          überwiesen: ["uberwiesen", "überwiessen", "überwisen"]
        }
      }
    },
    {
      id: "rs_003",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Die Wohnung ist nicht nur teuer, sondern auch in einem schlechten Zustand.",
      translations: {
        en: "The apartment is not only expensive, but also in poor condition.",
        uk: "Квартира не лише дорога, а й у поганому стані.",
        ar: "الشقة ليست غالية فحسب، بل هي أيضًا في حالة سيئة."
      },
      sentenceGrammarNotes: [
        {
          title: "nicht nur ..., sondern auch ...",
          summary: "Der Satz ergänzt eine Information mit einem zweiteiligen Konnektor.",
          details: "Nach nicht nur folgt der erste Teil, nach sondern auch kommt die zusätzliche Information.",
          example: "nicht nur teuer, sondern auch in einem schlechten Zustand"
        }
      ],
      vocabularyLinks: ["die Wohnung", "teuer"],
      chunks: {
        easy: ["Die Wohnung ist", "nicht nur teuer,", "sondern auch", "in einem schlechten Zustand."],
        medium: ["Die Wohnung", "ist nicht nur", "teuer,", "sondern auch", "in einem schlechten Zustand."],
        hard: ["Die", "Wohnung", "ist", "nicht", "nur", "teuer,", "sondern", "auch", "in", "einem", "schlechten", "Zustand."]
      },
      alternativeCorrectAnswers: [
        "Die Wohnung ist nicht nur teuer, sondern auch in einem schlechten Zustand."
      ],
      matching: {
        start: "Die Wohnung ist nicht nur teuer,",
        end: "sondern auch in einem schlechten Zustand."
      },
      gapFill: {
        answer: "sondern",
        hint: "Gesucht ist der zweite Teil von nicht nur ... ."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Wohnung ist nicht nur teuer, auch sondern in einem schlechten Zustand.",
          "Die Wohnung ist nicht teuer nur, sondern auch in einem schlechten Zustand.",
          "Die Wohnung ist nicht nur teuer, sondern in einem schlechten Zustand auch."
        ]
      },
      errorSearch: {
        typoOptions: {
          sondern: ["sonder", "sonndern", "sodern"]
        }
      }
    },
    {
      id: "rs_004",
      level: "A2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Nicht nur der Rasen muss gemäht werden, sondern auch die Hecken brauchen einen Schnitt.",
      translations: {
        en: "Not only the lawn must be mowed, but the hedges also need trimming.",
        uk: "Треба косити не лише газон, а й живопліт потребує підрізання.",
        ar: "لا بد من جزّ العشب، كما أن الشجيرات تحتاج أيضًا إلى تقليم."
      },
      sentenceGrammarNotes: [
        {
          title: "nicht nur ..., sondern auch ...",
          summary: "Der Konnektor verbindet zwei Pflichten oder Aufgaben.",
          details: "Mit sondern auch wird gezeigt, dass noch etwas zusätzlich gemacht werden muss.",
          example: "Nicht nur der Rasen ..., sondern auch die Hecken ..."
        }
      ],
      vocabularyLinks: ["der Rasen", "mähen", "der Schnitt"],
      chunks: {
        easy: ["Nicht nur der Rasen", "muss gemäht werden,", "sondern auch", "die Hecken brauchen einen Schnitt."],
        medium: ["Nicht nur", "der Rasen muss", "gemäht werden,", "sondern auch", "die Hecken brauchen", "einen Schnitt."],
        hard: ["Nicht", "nur", "der", "Rasen", "muss", "gemäht", "werden,", "sondern", "auch", "die", "Hecken", "brauchen", "einen", "Schnitt."]
      },
      alternativeCorrectAnswers: [
        "Nicht nur der Rasen muss gemäht werden, sondern auch die Hecken brauchen einen Schnitt."
      ],
      matching: {
        start: "Nicht nur der Rasen muss gemäht werden,",
        end: "sondern auch die Hecken brauchen einen Schnitt."
      },
      gapFill: {
        answer: "Schnitt",
        hint: "Gesucht ist das Nomen für das Kürzen der Hecken."
      },
      multipleChoice: {
        wrongOptions: [
          "Nicht nur der Rasen muss gemäht werden, auch sondern die Hecken brauchen einen Schnitt.",
          "Nicht nur der Rasen muss werden gemäht, sondern auch die Hecken brauchen einen Schnitt.",
          "Nicht nur der Rasen muss gemäht werden, sondern die Hecken auch brauchen einen Schnitt."
        ]
      },
      errorSearch: {
        typoOptions: {
          Schnitt: ["Schnit", "Schnnitt", "Schnittt"]
        }
      }
    },
    {
      id: "rs_005",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der Vermieter verlangt die Miete bis zum dritten Werktag.",
      translations: {
        en: "The landlord demands the rent by the third working day.",
        uk: "Орендодавець вимагає оплатити оренду до третього робочого дня.",
        ar: "يطلب المالك دفع الإيجار بحلول يوم العمل الثالث."
      },
      sentenceGrammarNotes: [
        {
          title: "bis + Zeitpunkt",
          summary: "Mit bis gibt man hier eine Frist an.",
          details: "Die Wortgruppe bis zum dritten Werktag zeigt, wann die Miete bezahlt sein soll.",
          example: "bis zum dritten Werktag"
        }
      ],
      vocabularyLinks: ["der Vermieter", "die Miete", "verlangen"],
      chunks: {
        easy: ["Der Vermieter verlangt", "die Miete", "bis zum dritten Werktag."],
        medium: ["Der Vermieter", "verlangt die Miete", "bis zum", "dritten Werktag."],
        hard: ["Der", "Vermieter", "verlangt", "die", "Miete", "bis", "zum", "dritten", "Werktag."]
      },
      alternativeCorrectAnswers: [
        "Der Vermieter verlangt die Miete bis zum dritten Werktag."
      ],
      matching: {
        start: "Der Vermieter verlangt die Miete",
        end: "bis zum dritten Werktag."
      },
      gapFill: {
        answer: "Werktag",
        hint: "Gesucht ist das Wort für einen Arbeitstag."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Vermieter verlangt bis zum dritten Werktag die Miete.",
          "Der Vermieter verlangt die Miete zum bis dritten Werktag.",
          "Der Vermieter die Miete verlangt bis zum dritten Werktag."
        ]
      },
      errorSearch: {
        typoOptions: {
          Werktag: ["Werktagg", "Werktog", "Wercktag"]
        }
      }
    },
    {
      id: "rs_006",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Treppe wurde gereinigt, damit der Eingangsbereich sauber bleibt.",
      translations: {
        en: "The stairs were cleaned so that the entrance area stays clean.",
        uk: "Сходи прибрали, щоб зона входу залишалася чистою.",
        ar: "تم تنظيف الدرج لكي تبقى منطقة المدخل نظيفة."
      },
      sentenceGrammarNotes: [
        {
          title: "damit-Satz",
          summary: "Der Nebensatz beschreibt hier den Zweck der Reinigung.",
          details: "Mit damit erklärt man, was durch die Handlung erreicht werden soll.",
          example: "damit der Eingangsbereich sauber bleibt"
        }
      ],
      vocabularyLinks: ["die Treppe", "sauber"],
      chunks: {
        easy: ["Die Treppe", "wurde gereinigt,", "damit der Eingangsbereich", "sauber bleibt."],
        medium: ["Die Treppe", "wurde gereinigt,", "damit der", "Eingangsbereich sauber", "bleibt."],
        hard: ["Die", "Treppe", "wurde", "gereinigt,", "damit", "der", "Eingangsbereich", "sauber", "bleibt."]
      },
      alternativeCorrectAnswers: [
        "Die Treppe wurde gereinigt, damit der Eingangsbereich sauber bleibt."
      ],
      matching: {
        start: "Die Treppe wurde gereinigt,",
        end: "damit der Eingangsbereich sauber bleibt."
      },
      gapFill: {
        answer: "sauber",
        hint: "Gesucht ist das Adjektiv für nicht schmutzig."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Treppe wurde gereinigt, damit bleibt der Eingangsbereich sauber.",
          "Die Treppe wurde gereinigt, der Eingangsbereich damit sauber bleibt.",
          "Die Treppe wurde gereinigt damit, der Eingangsbereich sauber bleibt."
        ]
      },
      errorSearch: {
        typoOptions: {
          sauber: ["saüer", "sauberr", "sau ber"]
        }
      }
    },
    {
      id: "rs_007",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der Umzug war teuer, aber gut organisiert.",
      translations: {
        en: "The move was expensive but well organized.",
        uk: "Переїзд був дорогим, але добре організованим.",
        ar: "كان الانتقال مكلفًا، لكنه كان منظمًا جيدًا."
      },
      sentenceGrammarNotes: [
        {
          title: "aber",
          summary: "Mit aber wird ein einfacher Gegensatz verbunden.",
          details: "Hier steht teuer im Gegensatz zu gut organisiert.",
          example: "teuer, aber gut organisiert"
        }
      ],
      vocabularyLinks: ["der Umzug", "teuer"],
      chunks: {
        easy: ["Der Umzug", "war teuer,", "aber gut organisiert."],
        medium: ["Der Umzug", "war teuer,", "aber", "gut organisiert."],
        hard: ["Der", "Umzug", "war", "teuer,", "aber", "gut", "organisiert."]
      },
      alternativeCorrectAnswers: [
        "Der Umzug war teuer, aber gut organisiert."
      ],
      matching: {
        start: "Der Umzug war teuer,",
        end: "aber gut organisiert."
      },
      gapFill: {
        answer: "teuer",
        hint: "Gesucht ist das Gegenteil von günstig."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Umzug war teuer, gut aber organisiert.",
          "Der Umzug war teuer aber, gut organisiert.",
          "Der Umzug teuer war, aber gut organisiert."
        ]
      },
      errorSearch: {
        typoOptions: {
          teuer: ["teür", "teuerer", "teuerh"]
        }
      }
    },
    {
      id: "rs_008",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der Mieter zieht nächste Woche in die neue Wohnung ein.",
      translations: {
        en: "The tenant is moving into the new apartment next week.",
        uk: "Орендар заселяється в нову квартиру наступного тижня.",
        ar: "سينتقل المستأجر إلى الشقة الجديدة الأسبوع المقبل."
      },
      sentenceGrammarNotes: [
        {
          title: "trennbares Verb: einziehen",
          summary: "Im Präsens steht die Vorsilbe ein am Satzende.",
          details: "Bei trennbaren Verben wird die Vorsilbe im Hauptsatz abgetrennt und ans Ende gesetzt.",
          example: "zieht ... ein"
        }
      ],
      vocabularyLinks: ["der Mieter", "einziehen", "die Wohnung"],
      chunks: {
        easy: ["Der Mieter", "zieht nächste Woche", "in die neue Wohnung", "ein."],
        medium: ["Der Mieter", "zieht", "nächste Woche", "in die neue Wohnung", "ein."],
        hard: ["Der", "Mieter", "zieht", "nächste", "Woche", "in", "die", "neue", "Wohnung", "ein."]
      },
      alternativeCorrectAnswers: [
        "Der Mieter zieht nächste Woche in die neue Wohnung ein."
      ],
      matching: {
        start: "Der Mieter zieht nächste Woche",
        end: "in die neue Wohnung ein."
      },
      gapFill: {
        answer: "ein",
        hint: "Gesucht ist die Vorsilbe eines trennbaren Verbs."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Mieter zieht in die neue Wohnung nächste Woche ein.",
          "Der Mieter zieht nächste Woche ein in die neue Wohnung.",
          "Der Mieter nächste Woche zieht in die neue Wohnung ein."
        ]
      },
      errorSearch: {
        typoOptions: {
          ein: ["einh", "iin", "ean"]
        }
      }
    },
    {
      id: "rs_009",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen.",
      translations: {
        en: "Despite the high price, demand for housing remains strong.",
        uk: "Попри високу ціну, попит на житло залишається високим.",
        ar: "رغم السعر المرتفع، يظل الطلب على السكن مرتفعًا."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Nach trotz steht hier der Genitiv: des hohen Preises.",
          details: "Im Standarddeutsch ist der Genitiv nach trotz die passende Form.",
          example: "Trotz des hohen Preises"
        }
      ],
      vocabularyLinks: ["trotz", "teuer"],
      chunks: {
        easy: ["Trotz des hohen Preises", "ist die Nachfrage", "nach Wohnraum ungebrochen."],
        medium: ["Trotz des hohen Preises", "ist die Nachfrage", "nach Wohnraum", "ungebrochen."],
        hard: ["Trotz", "des", "hohen", "Preises", "ist", "die", "Nachfrage", "nach", "Wohnraum", "ungebrochen."]
      },
      alternativeCorrectAnswers: [
        "Trotz des hohen Preises ist die Nachfrage nach Wohnraum ungebrochen."
      ],
      matching: {
        start: "Trotz des hohen Preises",
        end: "ist die Nachfrage nach Wohnraum ungebrochen."
      },
      gapFill: {
        answer: "Trotz",
        hint: "Gesucht ist eine Präposition mit Genitiv für einen Gegensatz."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz dem hohen Preis ist die Nachfrage nach Wohnraum ungebrochen.",
          "Trotz den hohen Preis ist die Nachfrage nach Wohnraum ungebrochen.",
          "Trotz hoher Preis ist die Nachfrage nach Wohnraum ungebrochen."
        ]
      },
      errorSearch: {
        typoOptions: {
          des: ["dem", "den"],
          Preises: ["Preis", "Preißes"]
        }
      }
    },
    {
      id: "rs_010",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Haben Sie sich schon darüber Gedanken gemacht, wer sich um den Garten kümmert?",
      translations: {
        en: "Have you already thought about who takes care of the garden?",
        uk: "Чи ви вже думали про те, хто доглядатиме за садом?",
        ar: "هل فكّرتم بالفعل فيمن سيعتني بالحديقة؟"
      },
      sentenceGrammarNotes: [
        {
          title: "über etwas nachdenken / sich Gedanken machen über",
          summary: "Hier wird über eine Sache nachgedacht: darüber.",
          details: "Für Sachen benutzt man in diesem Muster das Pronominaladverb darüber.",
          example: "sich schon darüber Gedanken gemacht"
        },
        {
          title: "sich kümmern um",
          summary: "Das reflexive Verb verbindet sich mit um + Akkusativ.",
          details: "Im Nebensatz steht die feste Verbindung: sich um den Garten kümmern.",
          example: "wer sich um den Garten kümmert"
        }
      ],
      vocabularyLinks: ["darüber", "sich kümmern"],
      chunks: {
        easy: ["Haben Sie sich schon", "darüber Gedanken gemacht,", "wer sich um den Garten kümmert?"],
        medium: ["Haben Sie sich", "schon darüber", "Gedanken gemacht,", "wer sich", "um den Garten kümmert?"],
        hard: ["Haben", "Sie", "sich", "schon", "darüber", "Gedanken", "gemacht,", "wer", "sich", "um", "den", "Garten", "kümmert?"]
      },
      alternativeCorrectAnswers: [
        "Haben Sie sich schon darüber Gedanken gemacht, wer sich um den Garten kümmert?"
      ],
      matching: {
        start: "Haben Sie sich schon darüber Gedanken gemacht,",
        end: "wer sich um den Garten kümmert?"
      },
      gapFill: {
        answer: "darüber",
        hint: "Es geht um eine Sache, nicht um eine Person."
      },
      multipleChoice: {
        wrongOptions: [
          "Haben Sie sich schon dafür Gedanken gemacht, wer sich um den Garten kümmert?",
          "Haben Sie schon sich darüber Gedanken gemacht, wer sich um den Garten kümmert?",
          "Haben Sie sich schon darüber Gedanken gemacht, wer um den Garten sich kümmert?"
        ]
      },
      errorSearch: {
        typoOptions: {
          darüber: ["dafür", "daruber", "drüber"],
          kümmert: ["kummert", "kümmertt"]
        }
      }
    },
    {
      id: "rs_011",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Wofür genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?",
      translations: {
        en: "What exactly was this extra fee charged for in the utility costs?",
        uk: "За що саме було нараховано цю додаткову плату в комунальних витратах?",
        ar: "مقابل ماذا بالضبط تم احتساب هذه الرسوم الإضافية ضمن التكاليف الجانبية؟"
      },
      sentenceGrammarNotes: [
        {
          title: "wofür",
          summary: "Bei einer Frage nach einer Sache mit für benutzt man wofür.",
          details: "Die Frage bezieht sich auf eine Sache, darum steht nicht für was, sondern wofür.",
          example: "Wofür genau wurde ..."
        }
      ],
      vocabularyLinks: ["wofür", "die Gebühr", "die Nebenkosten"],
      chunks: {
        easy: ["Wofür genau", "wurde diese zusätzliche Gebühr", "in den Nebenkosten berechnet?"],
        medium: ["Wofür genau", "wurde diese", "zusätzliche Gebühr", "in den Nebenkosten", "berechnet?"],
        hard: ["Wofür", "genau", "wurde", "diese", "zusätzliche", "Gebühr", "in", "den", "Nebenkosten", "berechnet?"]
      },
      alternativeCorrectAnswers: [
        "Wofür genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?"
      ],
      matching: {
        start: "Wofür genau wurde diese zusätzliche Gebühr",
        end: "in den Nebenkosten berechnet?"
      },
      gapFill: {
        answer: "Wofür",
        hint: "Gesucht ist eine Frageform mit wo- und für."
      },
      multipleChoice: {
        wrongOptions: [
          "Für was genau wurde diese zusätzliche Gebühr in den Nebenkosten berechnet?",
          "Wofür wurde genau diese zusätzliche Gebühr in den Nebenkosten berechnet?",
          "Wofür genau wurde diese zusätzliche Gebühr berechnet in den Nebenkosten?"
        ]
      },
      errorSearch: {
        typoOptions: {
          Wofür: ["Worfür", "Wofur", "Wofürr"],
          Gebühr: ["Gebur", "Gebührh", "Gebuhr"]
        }
      }
    },
    {
      id: "rs_012",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Worüber hat sich der Nachbar gestern beim Hausmeister beschwert?",
      translations: {
        en: "What did the neighbor complain to the caretaker about yesterday?",
        uk: "На що саме сусід учора скаржився двірнику?",
        ar: "عمّ اشتكى الجار بالأمس عند بواب المبنى؟"
      },
      sentenceGrammarNotes: [
        {
          title: "worüber",
          summary: "Bei einer Frage nach einer Sache mit über benutzt man worüber.",
          details: "Die Frage richtet sich auf eine Sache. Deshalb steht worüber und nicht über wen oder über was.",
          example: "Worüber hat sich der Nachbar ... beschwert?"
        },
        {
          title: "sich beschweren bei / über",
          summary: "Man kann sich bei jemandem über etwas beschweren.",
          details: "Im Satz sieht man beide Ergänzungen: beim Hausmeister und worüber.",
          example: "beim Hausmeister beschwert"
        }
      ],
      vocabularyLinks: ["worüber", "sich beschweren"],
      chunks: {
        easy: ["Worüber hat sich", "der Nachbar gestern", "beim Hausmeister beschwert?"],
        medium: ["Worüber", "hat sich der Nachbar", "gestern beim Hausmeister", "beschwert?"],
        hard: ["Worüber", "hat", "sich", "der", "Nachbar", "gestern", "beim", "Hausmeister", "beschwert?"]
      },
      alternativeCorrectAnswers: [
        "Worüber hat sich der Nachbar gestern beim Hausmeister beschwert?"
      ],
      matching: {
        start: "Worüber hat sich der Nachbar gestern",
        end: "beim Hausmeister beschwert?"
      },
      gapFill: {
        answer: "Worüber",
        hint: "Gesucht ist die Frageform zu über + Sache."
      },
      multipleChoice: {
        wrongOptions: [
          "Worüber hat der Nachbar sich gestern beim Hausmeister beschwert?",
          "Über was hat sich der Nachbar gestern beim Hausmeister beschwert?",
          "Worüber hat sich der Nachbar gestern beschwert beim Hausmeister?"
        ]
      },
      errorSearch: {
        typoOptions: {
          Worüber: ["Woruber", "Woruberr", "Worüberr"],
          beschwert: ["beschwärt", "beschwertt", "beschward"]
        }
      }
    },
    {
      id: "rs_013",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Weder der Vermieter noch die Hausverwaltung fühlten sich für den kaputten Lift zuständig.",
      translations: {
        en: "Neither the landlord nor the building management felt responsible for the broken elevator.",
        uk: "Ні орендодавець, ні адміністрація будинку не вважали себе відповідальними за зламаний ліфт.",
        ar: "لم يشعر لا المالك ولا إدارة المبنى بالمسؤولية عن المصعد المعطل."
      },
      sentenceGrammarNotes: [
        {
          title: "weder ... noch ...",
          summary: "Dieser Konnektor verbindet zwei verneinte Elemente.",
          details: "Mit weder ... noch ... sagt man, dass beide Möglichkeiten nicht gelten.",
          example: "Weder der Vermieter noch die Hausverwaltung"
        }
      ],
      vocabularyLinks: ["der Vermieter", "die Hausverwaltung", "der Lift"],
      chunks: {
        easy: ["Weder der Vermieter", "noch die Hausverwaltung", "fühlten sich", "für den kaputten Lift zuständig."],
        medium: ["Weder", "der Vermieter", "noch die Hausverwaltung", "fühlten sich", "für den kaputten Lift", "zuständig."],
        hard: ["Weder", "der", "Vermieter", "noch", "die", "Hausverwaltung", "fühlten", "sich", "für", "den", "kaputten", "Lift", "zuständig."]
      },
      alternativeCorrectAnswers: [
        "Weder der Vermieter noch die Hausverwaltung fühlten sich für den kaputten Lift zuständig."
      ],
      matching: {
        start: "Weder der Vermieter noch die Hausverwaltung",
        end: "fühlten sich für den kaputten Lift zuständig."
      },
      gapFill: {
        answer: "noch",
        hint: "Gesucht ist der zweite Teil von weder ... ."
      },
      multipleChoice: {
        wrongOptions: [
          "Weder der Vermieter oder die Hausverwaltung fühlten sich für den kaputten Lift zuständig.",
          "Weder der Vermieter noch fühlten sich die Hausverwaltung für den kaputten Lift zuständig.",
          "Der Vermieter weder noch die Hausverwaltung fühlten sich für den kaputten Lift zuständig."
        ]
      },
      errorSearch: {
        typoOptions: {
          noch: ["oder", "nock", "nochh"]
        }
      }
    },
    {
      id: "rs_014",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Zwar ist die Lage sehr zentral, aber der ständige Lärm stört die Nachtruhe.",
      translations: {
        en: "The location is very central, but the constant noise disturbs the night's peace.",
        uk: "Розташування дуже центральне, але постійний шум порушує нічний спокій.",
        ar: "الموقع مركزي جدًا، لكن الضوضاء المستمرة تزعج هدوء الليل."
      },
      sentenceGrammarNotes: [
        {
          title: "zwar ..., aber ...",
          summary: "Mit zwar nennt man einen positiven Punkt, mit aber folgt der Gegensatz.",
          details: "Die Struktur hilft, zwei Seiten derselben Sache gegeneinander abzuwägen.",
          example: "Zwar ist die Lage sehr zentral, aber ..."
        }
      ],
      vocabularyLinks: ["zentral", "der Lärm"],
      chunks: {
        easy: ["Zwar ist die Lage", "sehr zentral,", "aber der ständige Lärm", "stört die Nachtruhe."],
        medium: ["Zwar", "ist die Lage", "sehr zentral,", "aber der ständige Lärm", "stört die Nachtruhe."],
        hard: ["Zwar", "ist", "die", "Lage", "sehr", "zentral,", "aber", "der", "ständige", "Lärm", "stört", "die", "Nachtruhe."]
      },
      alternativeCorrectAnswers: [
        "Zwar ist die Lage sehr zentral, aber der ständige Lärm stört die Nachtruhe."
      ],
      matching: {
        start: "Zwar ist die Lage sehr zentral,",
        end: "aber der ständige Lärm stört die Nachtruhe."
      },
      gapFill: {
        answer: "aber",
        hint: "Gesucht ist der zweite Teil von zwar ... ."
      },
      multipleChoice: {
        wrongOptions: [
          "Zwar ist die Lage sehr zentral, der ständige Lärm aber stört die Nachtruhe.",
          "Zwar die Lage ist sehr zentral, aber der ständige Lärm stört die Nachtruhe.",
          "Zwar ist die Lage sehr zentral, aber stört der ständige Lärm die Nachtruhe."
        ]
      },
      errorSearch: {
        typoOptions: {
          zentral: ["zentrall", "central", "zentralt"]
        }
      }
    },
    {
      id: "rs_015",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Ich interessiere mich dafür, ob das Grundstück bereits erschlossen ist.",
      translations: {
        en: "I am interested in whether the plot of land is already developed.",
        uk: "Мене цікавить, чи ця ділянка вже підготовлена до забудови.",
        ar: "أنا مهتم بما إذا كانت قطعة الأرض مجهزة بالفعل."
      },
      sentenceGrammarNotes: [
        {
          title: "sich interessieren für",
          summary: "Das reflexive Verb steht mit für + Akkusativ.",
          details: "Wenn man auf eine Sache zurückverweist, ersetzt man für + Sache durch dafür.",
          example: "Ich interessiere mich dafür"
        }
      ],
      vocabularyLinks: ["dafür", "das Grundstück"],
      chunks: {
        easy: ["Ich interessiere mich dafür,", "ob das Grundstück", "bereits erschlossen ist."],
        medium: ["Ich interessiere mich", "dafür,", "ob das Grundstück", "bereits erschlossen ist."],
        hard: ["Ich", "interessiere", "mich", "dafür,", "ob", "das", "Grundstück", "bereits", "erschlossen", "ist."]
      },
      alternativeCorrectAnswers: [
        "Ich interessiere mich dafür, ob das Grundstück bereits erschlossen ist."
      ],
      matching: {
        start: "Ich interessiere mich dafür,",
        end: "ob das Grundstück bereits erschlossen ist."
      },
      gapFill: {
        answer: "dafür",
        hint: "Gesucht ist die Antwortform zu für + Sache."
      },
      multipleChoice: {
        wrongOptions: [
          "Ich interessiere mich darauf, ob das Grundstück bereits erschlossen ist.",
          "Ich interessiere dafür mich, ob das Grundstück bereits erschlossen ist.",
          "Ich interessiere mich dafür, das Grundstück ob bereits erschlossen ist."
        ]
      },
      errorSearch: {
        typoOptions: {
          dafür: ["darauf", "dafur", "dafürr"]
        }
      }
    },
    {
      id: "rs_016",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag verstößt.",
      translations: {
        en: "The deposit serves the landlord as security in case the tenant violates the contract.",
        uk: "Застава слугує орендодавцеві гарантією, якщо орендар порушує договір.",
        ar: "يعمل مبلغ التأمين كضمان للمالك إذا خالف المستأجر العقد."
      },
      sentenceGrammarNotes: [
        {
          title: "gegen einen Vertrag verstoßen",
          summary: "Das Verb verstoßen verbindet sich hier mit gegen + Akkusativ.",
          details: "Im Wohnkontext spricht man oft davon, gegen den Vertrag oder gegen die Hausordnung zu verstoßen.",
          example: "gegen den Vertrag verstößt"
        }
      ],
      vocabularyLinks: ["die Kaution", "verstoßen", "der Vertrag"],
      chunks: {
        easy: ["Die Kaution dient", "dem Vermieter als Sicherheit,", "falls der Mieter", "gegen den Vertrag verstößt."],
        medium: ["Die Kaution", "dient dem Vermieter", "als Sicherheit,", "falls der Mieter", "gegen den Vertrag verstößt."],
        hard: ["Die", "Kaution", "dient", "dem", "Vermieter", "als", "Sicherheit,", "falls", "der", "Mieter", "gegen", "den", "Vertrag", "verstößt."]
      },
      alternativeCorrectAnswers: [
        "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag verstößt."
      ],
      matching: {
        start: "Die Kaution dient dem Vermieter als Sicherheit,",
        end: "falls der Mieter gegen den Vertrag verstößt."
      },
      gapFill: {
        answer: "verstößt",
        hint: "Gesucht ist das Verb für: Regeln oder Vertrag verletzen."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter gegen den Vertrag verstoßt.",
          "Die Kaution dient dem Vermieter als Sicherheit, falls der Mieter verstößt gegen den Vertrag.",
          "Die Kaution dient als Sicherheit dem Vermieter, falls der Mieter gegen den Vertrag verstößt."
        ]
      },
      errorSearch: {
        typoOptions: {
          verstößt: ["verstoßt", "verstösst", "verstöst"]
        }
      }
    },
    {
      id: "rs_017",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz der strengen Verbote grillen die Nachbarn fast jeden Abend auf ihrem Balkon.",
      translations: {
        en: "Despite the strict bans, the neighbors grill on their balcony almost every evening.",
        uk: "Попри суворі заборони, сусіди майже щовечора смажать на своєму балконі.",
        ar: "رغم القوانين الصارمة، يشوي الجيران على شرفتهم تقريبًا كل مساء."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Auch hier folgt auf trotz der Genitiv: der strengen Verbote.",
          details: "Die Form zeigt einen Gegensatz zwischen Regel und Wirklichkeit.",
          example: "Trotz der strengen Verbote"
        }
      ],
      vocabularyLinks: ["trotz", "das Verbot"],
      chunks: {
        easy: ["Trotz der strengen Verbote", "grillen die Nachbarn", "fast jeden Abend", "auf ihrem Balkon."],
        medium: ["Trotz der strengen Verbote", "grillen die Nachbarn", "fast jeden Abend", "auf ihrem", "Balkon."],
        hard: ["Trotz", "der", "strengen", "Verbote", "grillen", "die", "Nachbarn", "fast", "jeden", "Abend", "auf", "ihrem", "Balkon."]
      },
      alternativeCorrectAnswers: [
        "Trotz der strengen Verbote grillen die Nachbarn fast jeden Abend auf ihrem Balkon."
      ],
      matching: {
        start: "Trotz der strengen Verbote",
        end: "grillen die Nachbarn fast jeden Abend auf ihrem Balkon."
      },
      gapFill: {
        answer: "Verbote",
        hint: "Gesucht ist der Plural von Verbot."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz den strengen Verboten grillen die Nachbarn fast jeden Abend auf ihrem Balkon.",
          "Trotz der strengen Verbote die Nachbarn grillen fast jeden Abend auf ihrem Balkon.",
          "Trotz der strengen Verbote grillen fast jeden Abend die Nachbarn auf ihrem Balkon."
        ]
      },
      errorSearch: {
        typoOptions: {
          Verbote: ["Verbotte", "Verboten", "Verbotee"]
        }
      }
    },
    {
      id: "rs_018",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätte die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
      translations: {
        en: "If the government had reacted earlier, the shortage of affordable housing would have been smaller.",
        uk: "Якби уряд відреагував раніше, нестача доступного житла була б меншою.",
        ar: "لو أن الحكومة تفاعلت في وقت أبكر، لكان النقص في المساكن الميسورة أقل."
      },
      sentenceGrammarNotes: [
        {
          title: "hätte ... / wäre ... gewesen",
          summary: "Der Satz benutzt Konjunktiv II der Vergangenheit in beiden Teilen.",
          details: "Im ersten Teil steht hätte + Partizip II, im zweiten wäre + Adjektiv + gewesen.",
          example: "Hätte die Regierung früher reagiert, wäre der Mangel ... kleiner gewesen."
        }
      ],
      vocabularyLinks: ["reagieren", "wären"],
      chunks: {
        easy: ["Hätte die Regierung", "früher reagiert,", "wäre der Mangel", "an bezahlbaren Wohnungen", "kleiner gewesen."],
        medium: ["Hätte die Regierung", "früher reagiert,", "wäre der Mangel", "an bezahlbaren Wohnungen", "kleiner", "gewesen."],
        hard: ["Hätte", "die", "Regierung", "früher", "reagiert,", "wäre", "der", "Mangel", "an", "bezahlbaren", "Wohnungen", "kleiner", "gewesen."]
      },
      alternativeCorrectAnswers: [
        "Hätte die Regierung früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
      ],
      matching: {
        start: "Hätte die Regierung früher reagiert,",
        end: "wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
      },
      gapFill: {
        answer: "wäre",
        hint: "Gesucht ist die Form von sein im Konjunktiv II."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätte die Regierung früher reagiert, hätte der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
          "Die Regierung hätte früher reagiert, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen.",
          "Hätte die Regierung reagiert früher, wäre der Mangel an bezahlbaren Wohnungen kleiner gewesen."
        ]
      },
      errorSearch: {
        typoOptions: {
          wäre: ["hätte", "ware"],
          gewesen: ["gewessen", "gewesn"]
        }
      }
    },
    {
      id: "rs_019",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätte ich bloß die Hausordnung gelesen, hätte ich den Fehler vielleicht vermieden.",
      translations: {
        en: "If only I had read the house rules, I might have avoided the mistake.",
        uk: "Якби ж я прочитав правила будинку, я, можливо, уникнув би помилки.",
        ar: "ليتني قرأت قواعد المنزل، فربما كنت سأتجنب الخطأ."
      },
      sentenceGrammarNotes: [
        {
          title: "hätte ... gelesen",
          summary: "Mit hätte + Partizip II spricht man hier über eine nicht reale Vergangenheit.",
          details: "bloß verstärkt den Wunsch oder das Bedauern.",
          example: "Hätte ich bloß die Hausordnung gelesen"
        }
      ],
      vocabularyLinks: ["die Hausordnung", "vermeiden"],
      chunks: {
        easy: ["Hätte ich bloß", "die Hausordnung gelesen,", "hätte ich", "den Fehler vielleicht vermieden."],
        medium: ["Hätte ich bloß", "die Hausordnung", "gelesen,", "hätte ich", "den Fehler vielleicht", "vermieden."],
        hard: ["Hätte", "ich", "bloß", "die", "Hausordnung", "gelesen,", "hätte", "ich", "den", "Fehler", "vielleicht", "vermieden."]
      },
      alternativeCorrectAnswers: [
        "Hätte ich bloß die Hausordnung gelesen, hätte ich den Fehler vielleicht vermieden."
      ],
      matching: {
        start: "Hätte ich bloß die Hausordnung gelesen,",
        end: "hätte ich den Fehler vielleicht vermieden."
      },
      gapFill: {
        answer: "vermieden",
        hint: "Gesucht ist das Partizip II von vermeiden."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätte ich bloß die Hausordnung gelesen, wäre ich den Fehler vielleicht vermieden.",
          "Hätte ich die Hausordnung bloß gelesen, ich hätte den Fehler vielleicht vermieden.",
          "Hätte ich bloß gelesen die Hausordnung, hätte ich den Fehler vielleicht vermieden."
        ]
      },
      errorSearch: {
        typoOptions: {
          vermieden: ["vermiden", "vermiedenn", "vermyden"]
        }
      }
    },
    {
      id: "rs_020",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Wären wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!",
      translations: {
        en: "If only we had moved out of this inconsiderate neighborhood earlier!",
        uk: "Якби ж ми раніше виїхали з цього безвідповідального сусідства!",
        ar: "ليتنا انتقلنا من هذا الحي غير المراعي في وقت أبكر!"
      },
      sentenceGrammarNotes: [
        {
          title: "wären ... ausgezogen",
          summary: "Bei einem Bewegungsverb steht im Konjunktiv II der Vergangenheit wäre.",
          details: "doch gibt dem Satz einen besonders starken Wunsch- oder Bedauerton.",
          example: "Wären wir doch früher ... ausgezogen"
        }
      ],
      vocabularyLinks: ["ausziehen", "rücksichtslos"],
      chunks: {
        easy: ["Wären wir doch", "früher aus dieser", "rücksichtslosen Nachbarschaft", "ausgezogen!"],
        medium: ["Wären wir doch", "früher", "aus dieser rücksichtslosen", "Nachbarschaft", "ausgezogen!"],
        hard: ["Wären", "wir", "doch", "früher", "aus", "dieser", "rücksichtslosen", "Nachbarschaft", "ausgezogen!"]
      },
      alternativeCorrectAnswers: [
        "Wären wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!"
      ],
      matching: {
        start: "Wären wir doch früher aus dieser rücksichtslosen Nachbarschaft",
        end: "ausgezogen!"
      },
      gapFill: {
        answer: "Wären",
        hint: "Gesucht ist die Konjunktiv-II-Form von sein."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätten wir doch früher aus dieser rücksichtslosen Nachbarschaft ausgezogen!",
          "Wären wir früher doch aus dieser rücksichtslosen Nachbarschaft ausgezogen!",
          "Wären wir doch aus dieser rücksichtslosen Nachbarschaft früher ausgezogen!"
        ]
      },
      errorSearch: {
        typoOptions: {
          Wären: ["Waren", "Währen", "Wärren"]
        }
      }
    },
    {
      id: "rs_021",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz der fehlenden Genehmigung begann der Eigentümer mit dem Bau der Mauer.",
      translations: {
        en: "Despite the missing permit, the owner began building the wall.",
        uk: "Попри відсутність дозволу, власник почав будувати мур.",
        ar: "رغم غياب التصريح، بدأ المالك ببناء الجدار."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Auch hier folgt auf trotz der Genitiv: der fehlenden Genehmigung.",
          details: "Die Wortgruppe zeigt einen formellen Gegensatz zwischen Vorschrift und Handlung.",
          example: "Trotz der fehlenden Genehmigung"
        }
      ],
      vocabularyLinks: ["die Genehmigung", "das Eigentum", "die Mauer"],
      chunks: {
        easy: ["Trotz der fehlenden Genehmigung", "begann der Eigentümer", "mit dem Bau der Mauer."],
        medium: ["Trotz der fehlenden Genehmigung", "begann der Eigentümer", "mit dem Bau", "der Mauer."],
        hard: ["Trotz", "der", "fehlenden", "Genehmigung", "begann", "der", "Eigentümer", "mit", "dem", "Bau", "der", "Mauer."]
      },
      alternativeCorrectAnswers: [
        "Trotz der fehlenden Genehmigung begann der Eigentümer mit dem Bau der Mauer."
      ],
      matching: {
        start: "Trotz der fehlenden Genehmigung",
        end: "begann der Eigentümer mit dem Bau der Mauer."
      },
      gapFill: {
        answer: "Genehmigung",
        hint: "Gesucht ist das Nomen für die offizielle Erlaubnis."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz der fehlenden Genehmigung der Eigentümer begann mit dem Bau der Mauer.",
          "Trotz fehlenden Genehmigung begann der Eigentümer mit dem Bau der Mauer.",
          "Trotz der fehlenden Genehmigung begann mit dem Bau der Mauer der Eigentümer."
        ]
      },
      errorSearch: {
        typoOptions: {
          Genehmigung: ["Genehmigug", "Genehmigun", "Genehmigüng"]
        }
      }
    },
    {
      id: "rs_022",
      level: "B2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Entweder Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung.",
      translations: {
        en: "Either you transfer the rent by the third working day, or you receive a warning.",
        uk: "Або ви переказуєте орендну плату до третього робочого дня, або отримуєте попередження.",
        ar: "إما أن تحول الإيجار بحلول يوم العمل الثالث، أو تتلقى إنذارًا."
      },
      sentenceGrammarNotes: [
        {
          title: "entweder ... oder ...",
          summary: "Der Konnektor zeigt zwei Alternativen.",
          details: "Im Satz stehen beide Möglichkeiten klar nebeneinander: rechtzeitig zahlen oder eine Abmahnung bekommen.",
          example: "Entweder Sie ..., oder Sie ..."
        }
      ],
      vocabularyLinks: ["die Miete", "überweisen"],
      chunks: {
        easy: ["Entweder Sie überweisen", "die Miete bis zum dritten Werktag,", "oder Sie erhalten", "eine Abmahnung."],
        medium: ["Entweder Sie", "überweisen die Miete", "bis zum dritten Werktag,", "oder Sie erhalten", "eine Abmahnung."],
        hard: ["Entweder", "Sie", "überweisen", "die", "Miete", "bis", "zum", "dritten", "Werktag,", "oder", "Sie", "erhalten", "eine", "Abmahnung."]
      },
      alternativeCorrectAnswers: [
        "Entweder Sie überweisen die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung."
      ],
      matching: {
        start: "Entweder Sie überweisen die Miete bis zum dritten Werktag,",
        end: "oder Sie erhalten eine Abmahnung."
      },
      gapFill: {
        answer: "oder",
        hint: "Gesucht ist der zweite Teil von entweder ... ."
      },
      multipleChoice: {
        wrongOptions: [
          "Entweder Sie überweisen die Miete bis zum dritten Werktag, oder erhalten Sie eine Abmahnung.",
          "Entweder überweisen Sie die Miete bis zum dritten Werktag, oder Sie erhalten eine Abmahnung.",
          "Entweder Sie überweisen die Miete, oder bis zum dritten Werktag Sie erhalten eine Abmahnung."
        ]
      },
      errorSearch: {
        typoOptions: {
          Abmahnung: ["Abmanung", "Abmahung", "Abmahnnug"]
        }
      }
    },
    {
      id: "rs_023",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Wäre das Fenster besser isoliert, hätten wir im Winter deutlich weniger Heizkosten.",
      translations: {
        en: "If the window were better insulated, we would have much lower heating costs in winter.",
        uk: "Якби вікно було краще ізольоване, взимку ми мали б значно менші витрати на опалення.",
        ar: "لو كانت النافذة معزولة بشكل أفضل، لكانت تكاليف التدفئة لدينا أقل بكثير في الشتاء."
      },
      sentenceGrammarNotes: [
        {
          title: "Konjunktiv II in Bedingungssätzen",
          summary: "Der Satz beschreibt eine irreale Bedingung und ihre Folge.",
          details: "wäre zeigt die gedachte Bedingung, hätten beschreibt die mögliche Folge.",
          example: "Wäre das Fenster besser isoliert, hätten wir ..."
        }
      ],
      vocabularyLinks: ["günstig", "die Wirklichkeit"],
      chunks: {
        easy: ["Wäre das Fenster", "besser isoliert,", "hätten wir im Winter", "deutlich weniger Heizkosten."],
        medium: ["Wäre das Fenster", "besser isoliert,", "hätten wir", "im Winter", "deutlich weniger Heizkosten."],
        hard: ["Wäre", "das", "Fenster", "besser", "isoliert,", "hätten", "wir", "im", "Winter", "deutlich", "weniger", "Heizkosten."]
      },
      alternativeCorrectAnswers: [
        "Wäre das Fenster besser isoliert, hätten wir im Winter deutlich weniger Heizkosten."
      ],
      matching: {
        start: "Wäre das Fenster besser isoliert,",
        end: "hätten wir im Winter deutlich weniger Heizkosten."
      },
      gapFill: {
        answer: "hätten",
        hint: "Gesucht ist die Konjunktiv-II-Form von haben."
      },
      multipleChoice: {
        wrongOptions: [
          "Wäre das Fenster besser isoliert, wären wir im Winter deutlich weniger Heizkosten.",
          "Das Fenster wäre besser isoliert, hätten wir im Winter deutlich weniger Heizkosten.",
          "Wäre das Fenster isoliert besser, hätten wir im Winter deutlich weniger Heizkosten."
        ]
      },
      errorSearch: {
        typoOptions: {
          hätten: ["haten", "hättenn", "hättene"]
        }
      }
    },
    {
      id: "rs_024",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätten die Anwohner früher protestiert, wäre das Hochhaus vermutlich nicht gebaut worden.",
      translations: {
        en: "If the residents had protested earlier, the high-rise would probably not have been built.",
        uk: "Якби мешканці раніше протестували, висотку, ймовірно, не збудували б.",
        ar: "لو أن السكان احتجوا في وقت أبكر، فربما لم يكن البرج الشاهق قد بُني."
      },
      sentenceGrammarNotes: [
        {
          title: "Passiv im Konjunktiv II der Vergangenheit",
          summary: "Im zweiten Teil steht ein passiver Konjunktiv: wäre ... gebaut worden.",
          details: "Die Form beschreibt, dass etwas in der Vergangenheit wahrscheinlich nicht passiert wäre.",
          example: "wäre das Hochhaus vermutlich nicht gebaut worden"
        }
      ],
      vocabularyLinks: ["protestieren", "das Hochhaus"],
      chunks: {
        easy: ["Hätten die Anwohner", "früher protestiert,", "wäre das Hochhaus", "vermutlich nicht gebaut worden."],
        medium: ["Hätten die Anwohner", "früher protestiert,", "wäre das Hochhaus", "vermutlich nicht", "gebaut worden."],
        hard: ["Hätten", "die", "Anwohner", "früher", "protestiert,", "wäre", "das", "Hochhaus", "vermutlich", "nicht", "gebaut", "worden."]
      },
      alternativeCorrectAnswers: [
        "Hätten die Anwohner früher protestiert, wäre das Hochhaus vermutlich nicht gebaut worden."
      ],
      matching: {
        start: "Hätten die Anwohner früher protestiert,",
        end: "wäre das Hochhaus vermutlich nicht gebaut worden."
      },
      gapFill: {
        answer: "worden",
        hint: "Gesucht ist der letzte Teil der Passivform."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätten die Anwohner früher protestiert, hätte das Hochhaus vermutlich nicht gebaut worden.",
          "Hätten die Anwohner protestiert früher, wäre das Hochhaus vermutlich nicht gebaut worden.",
          "Die Anwohner hätten früher protestiert, wäre das Hochhaus vermutlich nicht gebaut worden."
        ]
      },
      errorSearch: {
        typoOptions: {
          worden: ["geworden", "wordenn", "wörden"]
        }
      }
    },
    {
      id: "rs_025",
      level: "B2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Nicht nur das Dach ist undicht, sondern es gibt auch Probleme mit der Statik der Mauer.",
      translations: {
        en: "Not only is the roof leaking, but there are also problems with the wall's structural stability.",
        uk: "Не лише дах протікає, а й є проблеми зі статикою муру.",
        ar: "ليس السقف وحده يتسرّب، بل توجد أيضًا مشكلات في ثبات الجدار الإنشائي."
      },
      sentenceGrammarNotes: [
        {
          title: "nicht nur ..., sondern auch ...",
          summary: "Der Satz nennt erst ein Problem und fügt dann ein zweites hinzu.",
          details: "Nach sondern steht hier kein auch direkt vor dem Verb, sondern später im Satzteil: es gibt auch Probleme ...",
          example: "Nicht nur das Dach ist undicht, sondern es gibt auch Probleme ..."
        }
      ],
      vocabularyLinks: ["das Dach", "die Mauer"],
      chunks: {
        easy: ["Nicht nur das Dach", "ist undicht,", "sondern es gibt auch", "Probleme mit der Statik der Mauer."],
        medium: ["Nicht nur das Dach", "ist undicht,", "sondern es gibt", "auch Probleme", "mit der Statik der Mauer."],
        hard: ["Nicht", "nur", "das", "Dach", "ist", "undicht,", "sondern", "es", "gibt", "auch", "Probleme", "mit", "der", "Statik", "der", "Mauer."]
      },
      alternativeCorrectAnswers: [
        "Nicht nur das Dach ist undicht, sondern es gibt auch Probleme mit der Statik der Mauer."
      ],
      matching: {
        start: "Nicht nur das Dach ist undicht,",
        end: "sondern es gibt auch Probleme mit der Statik der Mauer."
      },
      gapFill: {
        answer: "Statik",
        hint: "Gesucht ist das Nomen für die bauliche Stabilität."
      },
      multipleChoice: {
        wrongOptions: [
          "Nicht nur das Dach ist undicht, sondern auch es gibt Probleme mit der Statik der Mauer.",
          "Nicht nur das Dach undicht ist, sondern es gibt auch Probleme mit der Statik der Mauer.",
          "Nicht nur das Dach ist undicht, es gibt sondern auch Probleme mit der Statik der Mauer."
        ]
      },
      errorSearch: {
        typoOptions: {
          Mauer: ["Maür", "Mauerr", "Mauern"]
        }
      }
    },
    {
      id: "rs_026",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der Lift ist kaputt, deshalb nehmen wir heute die Treppe.",
      translations: {
        en: "The elevator is broken, so we are taking the stairs today.",
        uk: "Ліфт зламаний, тому сьогодні ми користуємося сходами.",
        ar: "المصعد معطل، لذلك نستخدم الدرج اليوم."
      },
      sentenceGrammarNotes: [
        {
          title: "deshalb",
          summary: "Deshalb zeigt hier eine Folge.",
          details: "Zuerst nennt der Satz das Problem, danach die Reaktion darauf.",
          example: "Der Lift ist kaputt, deshalb nehmen wir die Treppe."
        }
      ],
      vocabularyLinks: ["der Lift", "die Treppe"],
      chunks: {
        easy: ["Der Lift ist kaputt,", "deshalb nehmen wir", "heute die Treppe."],
        medium: ["Der Lift", "ist kaputt,", "deshalb nehmen wir", "heute", "die Treppe."],
        hard: ["Der", "Lift", "ist", "kaputt,", "deshalb", "nehmen", "wir", "heute", "die", "Treppe."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Der Lift ist kaputt,",
        end: "deshalb nehmen wir heute die Treppe."
      },
      gapFill: {
        answer: "Treppe",
        hint: "Gesucht ist das Nomen für stairs."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Lift ist kaputt, deshalb wir heute die Treppe nehmen.",
          "Der Lift kaputt ist, deshalb nehmen wir heute die Treppe.",
          "Der Lift ist kaputt, wir nehmen deshalb heute die Treppe."
        ]
      },
      errorSearch: {
        typoOptions: {
          Treppe: ["Treppee", "Trepe", "Treppee"]
        }
      }
    },
    {
      id: "rs_027",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Vor dem Umzug liest der Mieter den Mietvertrag noch einmal.",
      translations: {
        en: "Before the move, the tenant reads the rental contract once again.",
        uk: "Перед переїздом орендар ще раз читає договір оренди.",
        ar: "قبل الانتقال يقرأ المستأجر عقد الإيجار مرة أخرى."
      },
      sentenceGrammarNotes: [
        {
          title: "Temporalangabe am Satzanfang",
          summary: "Vor dem Umzug steht als Zeitangabe am Anfang des Satzes.",
          details: "Danach kommt direkt das Verb liest.",
          example: "Vor dem Umzug liest ..."
        }
      ],
      vocabularyLinks: ["der Umzug", "der Mieter", "der Mietvertrag"],
      chunks: {
        easy: ["Vor dem Umzug", "liest der Mieter", "den Mietvertrag", "noch einmal."],
        medium: ["Vor dem Umzug", "liest", "der Mieter", "den Mietvertrag", "noch einmal."],
        hard: ["Vor", "dem", "Umzug", "liest", "der", "Mieter", "den", "Mietvertrag", "noch", "einmal."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Vor dem Umzug liest der Mieter",
        end: "den Mietvertrag noch einmal."
      },
      gapFill: {
        answer: "Mietvertrag",
        hint: "Gesucht ist das Wort für rental contract."
      },
      multipleChoice: {
        wrongOptions: [
          "Vor dem Umzug der Mieter liest den Mietvertrag noch einmal.",
          "Vor dem Umzug liest der Mieter noch einmal den Mietvertrag.",
          "Vor dem Umzug liest den Mietvertrag der Mieter noch einmal."
        ]
      },
      errorSearch: {
        typoOptions: {
          Mietvertrag: ["Mietvertraag", "Mietvertag", "Mietvertragg"]
        }
      }
    },
    {
      id: "rs_028",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Im Sommer mäht der Vermieter den Rasen am Samstag.",
      translations: {
        en: "In summer, the landlord mows the lawn on Saturday.",
        uk: "Влітку орендодавець косить газон у суботу.",
        ar: "في الصيف يجزّ المؤجر العشب يوم السبت."
      },
      sentenceGrammarNotes: [
        {
          title: "Zeitangaben kombinieren",
          summary: "Der Satz verbindet zwei Zeitangaben: im Sommer und am Samstag.",
          details: "Beide Angaben zeigen, wann etwas passiert.",
          example: "Im Sommer ... am Samstag."
        }
      ],
      vocabularyLinks: ["mähen", "der Vermieter", "der Rasen"],
      chunks: {
        easy: ["Im Sommer", "mäht der Vermieter", "den Rasen", "am Samstag."],
        medium: ["Im Sommer", "mäht", "der Vermieter", "den Rasen", "am Samstag."],
        hard: ["Im", "Sommer", "mäht", "der", "Vermieter", "den", "Rasen", "am", "Samstag."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Im Sommer mäht der Vermieter",
        end: "den Rasen am Samstag."
      },
      gapFill: {
        answer: "mäht",
        hint: "Gesucht ist das Verb für to mow in der er/sie-Form."
      },
      multipleChoice: {
        wrongOptions: [
          "Im Sommer der Vermieter mäht den Rasen am Samstag.",
          "Im Sommer mäht den Rasen der Vermieter am Samstag.",
          "Im Sommer mäht der Vermieter am Samstag den Rasen."
        ]
      },
      errorSearch: {
        typoOptions: {
          mäht: ["maht", "mäth", "mät"]
        }
      }
    },
    {
      id: "rs_029",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Nachbarn sind höflich, deshalb gibt es im Haus meistens Frieden.",
      translations: {
        en: "The neighbors are polite, so there is usually peace in the building.",
        uk: "Сусіди ввічливі, тому в будинку зазвичай панує мир.",
        ar: "الجيران مؤدبون، لذلك يسود الهدوء في المبنى غالبًا."
      },
      sentenceGrammarNotes: [
        {
          title: "es gibt",
          summary: "Mit es gibt sagt man, dass etwas vorhanden ist.",
          details: "Hier bedeutet es: Im Haus gibt es Frieden.",
          example: "es gibt im Haus meistens Frieden"
        }
      ],
      vocabularyLinks: ["höflich", "der Frieden"],
      chunks: {
        easy: ["Die Nachbarn sind höflich,", "deshalb gibt es", "im Haus", "meistens Frieden."],
        medium: ["Die Nachbarn", "sind höflich,", "deshalb gibt es", "im Haus", "meistens Frieden."],
        hard: ["Die", "Nachbarn", "sind", "höflich,", "deshalb", "gibt", "es", "im", "Haus", "meistens", "Frieden."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Die Nachbarn sind höflich,",
        end: "deshalb gibt es im Haus meistens Frieden."
      },
      gapFill: {
        answer: "Frieden",
        hint: "Gesucht ist das Nomen für peace."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Nachbarn sind höflich, deshalb es gibt im Haus meistens Frieden.",
          "Die Nachbarn höflich sind, deshalb gibt es im Haus meistens Frieden.",
          "Die Nachbarn sind höflich, gibt es deshalb im Haus meistens Frieden."
        ]
      },
      errorSearch: {
        typoOptions: {
          höflich: ["hoflich", "höflcih", "höflih"]
        }
      }
    },
    {
      id: "rs_030",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Wohnung ist klein, aber die Lage ist sehr zentral.",
      translations: {
        en: "The apartment is small, but the location is very central.",
        uk: "Квартира маленька, але розташування дуже центральне.",
        ar: "الشقة صغيرة، لكن موقعها مركزي جدًا."
      },
      sentenceGrammarNotes: [
        {
          title: "aber",
          summary: "Aber verbindet hier einen Nachteil mit einem Vorteil.",
          details: "Der erste Teil beschreibt die kleine Wohnung, der zweite Teil die gute Lage.",
          example: "klein, aber ... sehr zentral"
        }
      ],
      vocabularyLinks: ["die Wohnung", "zentral"],
      chunks: {
        easy: ["Die Wohnung ist klein,", "aber die Lage", "ist sehr zentral."],
        medium: ["Die Wohnung", "ist klein,", "aber die Lage", "ist sehr zentral."],
        hard: ["Die", "Wohnung", "ist", "klein,", "aber", "die", "Lage", "ist", "sehr", "zentral."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Die Wohnung ist klein,",
        end: "aber die Lage ist sehr zentral."
      },
      gapFill: {
        answer: "zentral",
        hint: "Gesucht ist das Adjektiv für central."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Wohnung ist klein, aber ist die Lage sehr zentral.",
          "Die Wohnung klein ist, aber die Lage ist sehr zentral.",
          "Die Wohnung ist klein, die Lage aber ist sehr zentral."
        ]
      },
      errorSearch: {
        typoOptions: {
          zentral: ["zentrall", "zentralle", "zental"]
        }
      }
    },
    {
      id: "rs_031",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Treppe ist sauber, weil der Hausmeister sie jeden Morgen reinigt.",
      translations: {
        en: "The staircase is clean because the caretaker cleans it every morning.",
        uk: "Сходи чисті, бо двірник щодня вранці їх прибирає.",
        ar: "الدرج نظيف لأن عامل المبنى ينظفه كل صباح."
      },
      sentenceGrammarNotes: [
        {
          title: "weil-Satz",
          summary: "Weil gibt einen Grund an.",
          details: "Im Nebensatz mit weil steht das Verb am Ende: reinigt.",
          example: "weil der Hausmeister sie jeden Morgen reinigt"
        }
      ],
      vocabularyLinks: ["die Treppe", "sauber"],
      chunks: {
        easy: ["Die Treppe ist sauber,", "weil der Hausmeister sie", "jeden Morgen reinigt."],
        medium: ["Die Treppe", "ist sauber,", "weil der Hausmeister sie", "jeden Morgen", "reinigt."],
        hard: ["Die", "Treppe", "ist", "sauber,", "weil", "der", "Hausmeister", "sie", "jeden", "Morgen", "reinigt."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Die Treppe ist sauber,",
        end: "weil der Hausmeister sie jeden Morgen reinigt."
      },
      gapFill: {
        answer: "reinigt",
        hint: "Gesucht ist das Verb für cleans."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Treppe ist sauber, weil der Hausmeister reinigt sie jeden Morgen.",
          "Die Treppe sauber ist, weil der Hausmeister sie jeden Morgen reinigt.",
          "Die Treppe ist sauber, weil jeden Morgen der Hausmeister sie reinigt."
        ]
      },
      errorSearch: {
        typoOptions: {
          sauber: ["saüber", "saubr", "saubber"]
        }
      }
    },
    {
      id: "rs_032",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Mieter warten vor dem Haus, bis der Vermieter kommt.",
      translations: {
        en: "The tenants are waiting in front of the building until the landlord comes.",
        uk: "Орендарі чекають перед будинком, поки прийде орендодавець.",
        ar: "ينتظر المستأجرون أمام المنزل حتى يأتي المؤجر."
      },
      sentenceGrammarNotes: [
        {
          title: "bis-Satz",
          summary: "Bis zeigt, wann etwas endet oder wann man wartet.",
          details: "Im Nebensatz mit bis steht das Verb am Ende: kommt.",
          example: "bis der Vermieter kommt"
        }
      ],
      vocabularyLinks: ["der Mieter", "der Vermieter"],
      chunks: {
        easy: ["Die Mieter warten", "vor dem Haus,", "bis der Vermieter kommt."],
        medium: ["Die Mieter", "warten", "vor dem Haus,", "bis der Vermieter", "kommt."],
        hard: ["Die", "Mieter", "warten", "vor", "dem", "Haus,", "bis", "der", "Vermieter", "kommt."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Die Mieter warten vor dem Haus,",
        end: "bis der Vermieter kommt."
      },
      gapFill: {
        answer: "kommt",
        hint: "Gesucht ist die er/sie-Form von kommen."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Mieter warten vor dem Haus, bis kommt der Vermieter.",
          "Die Mieter vor dem Haus warten, bis der Vermieter kommt.",
          "Die Mieter warten, vor dem Haus bis der Vermieter kommt."
        ]
      },
      errorSearch: {
        typoOptions: {
          Vermieter: ["Vermiter", "Vermiieter", "Vermieterer"]
        }
      }
    },
    {
      id: "rs_033",
      level: "A2",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Der neue Lift fährt leise, deshalb stört er niemanden im Haus.",
      translations: {
        en: "The new elevator runs quietly, so it does not bother anyone in the building.",
        uk: "Новий ліфт їздить тихо, тому він нікому не заважає в будинку.",
        ar: "المصعد الجديد يعمل بهدوء، لذلك لا يزعج أحدًا في المبنى."
      },
      sentenceGrammarNotes: [
        {
          title: "niemanden",
          summary: "Niemanden ist hier das Akkusativobjekt.",
          details: "Das Verb stören braucht ein Objekt: Wen stört er? Niemanden.",
          example: "stört er niemanden"
        }
      ],
      vocabularyLinks: ["der Lift", "stören"],
      chunks: {
        easy: ["Der neue Lift fährt leise,", "deshalb stört er", "niemanden im Haus."],
        medium: ["Der neue Lift", "fährt leise,", "deshalb stört er", "niemanden", "im Haus."],
        hard: ["Der", "neue", "Lift", "fährt", "leise,", "deshalb", "stört", "er", "niemanden", "im", "Haus."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Der neue Lift fährt leise,",
        end: "deshalb stört er niemanden im Haus."
      },
      gapFill: {
        answer: "stört",
        hint: "Gesucht ist das Verb für bothers."
      },
      multipleChoice: {
        wrongOptions: [
          "Der neue Lift fährt leise, deshalb er stört niemanden im Haus.",
          "Der neue Lift leise fährt, deshalb stört er niemanden im Haus.",
          "Der neue Lift fährt leise, stört deshalb er niemanden im Haus."
        ]
      },
      errorSearch: {
        typoOptions: {
          leise: ["leiße", "liese", "leis"]
        }
      }
    },
    {
      id: "rs_034",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Worüber sprechen die Mieter nach der Versammlung noch lange im Hof?",
      translations: {
        en: "What are the tenants still talking about for a long time in the courtyard after the meeting?",
        uk: "Про що орендарі ще довго говорять у дворі після зборів?",
        ar: "عمّ يتحدث المستأجرون طويلاً في الفناء بعد الاجتماع؟"
      },
      sentenceGrammarNotes: [
        {
          title: "worüber",
          summary: "Für Sachen benutzt man in Fragen wo- plus Präposition.",
          details: "Sprechen über etwas wird in der Frage zu worüber sprechen.",
          example: "Worüber sprechen die Mieter?"
        }
      ],
      vocabularyLinks: ["worüber", "der Mieter"],
      chunks: {
        easy: ["Worüber sprechen die Mieter", "nach der Versammlung", "noch lange im Hof?"],
        medium: ["Worüber sprechen", "die Mieter", "nach der Versammlung", "noch lange", "im Hof?"],
        hard: ["Worüber", "sprechen", "die", "Mieter", "nach", "der", "Versammlung", "noch", "lange", "im", "Hof?"]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Worüber sprechen die Mieter",
        end: "nach der Versammlung noch lange im Hof?"
      },
      gapFill: {
        answer: "Worüber",
        hint: "Gesucht ist die Frageform zu über etwas sprechen."
      },
      multipleChoice: {
        wrongOptions: [
          "Worüber die Mieter sprechen nach der Versammlung noch lange im Hof?",
          "Über was sprechen die Mieter nach der Versammlung noch lange im Hof?",
          "Worüber sprechen nach der Versammlung die Mieter noch lange im Hof?"
        ]
      },
      errorSearch: {
        typoOptions: {
          Worüber: ["Woruber", "Worüberr", "Woüber"]
        }
      }
    },
    {
      id: "rs_035",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Dafür braucht der Eigentümer zuerst eine Genehmigung vom Gericht.",
      translations: {
        en: "For that, the owner first needs approval from the court.",
        uk: "Для цього власнику спочатку потрібен дозвіл від суду.",
        ar: "لهذا يحتاج المالك أولاً إلى موافقة من المحكمة."
      },
      sentenceGrammarNotes: [
        {
          title: "dafür",
          summary: "Dafür verweist auf eine Sache oder einen Plan, der schon bekannt ist.",
          details: "In Antworten oder Verweisen ersetzt dafür die Verbindung für etwas.",
          example: "Dafür braucht der Eigentümer ..."
        }
      ],
      vocabularyLinks: ["dafür", "der Eigentümer", "die Genehmigung", "das Gericht"],
      chunks: {
        easy: ["Dafür braucht der Eigentümer", "zuerst eine Genehmigung", "vom Gericht."],
        medium: ["Dafür braucht", "der Eigentümer", "zuerst", "eine Genehmigung", "vom Gericht."],
        hard: ["Dafür", "braucht", "der", "Eigentümer", "zuerst", "eine", "Genehmigung", "vom", "Gericht."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Dafür braucht der Eigentümer",
        end: "zuerst eine Genehmigung vom Gericht."
      },
      gapFill: {
        answer: "Dafür",
        hint: "Gesucht ist die Antwortform zu für etwas."
      },
      multipleChoice: {
        wrongOptions: [
          "Dafür der Eigentümer braucht zuerst eine Genehmigung vom Gericht.",
          "Dafür braucht zuerst der Eigentümer eine Genehmigung vom Gericht.",
          "Für das braucht der Eigentümer zuerst eine Genehmigung vom Gericht."
        ]
      },
      errorSearch: {
        typoOptions: {
          Genehmigung: ["Genehmigug", "Genehmigungg", "Genehmigun"]
        }
      }
    },
    {
      id: "rs_036",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Entweder der Lift wird repariert, oder die Mieter nehmen weiter die Treppe.",
      translations: {
        en: "Either the elevator gets repaired, or the tenants keep taking the stairs.",
        uk: "Або ліфт відремонтують, або орендарі й далі користуватимуться сходами.",
        ar: "إما أن يتم إصلاح المصعد، أو يواصل المستأجرون استخدام الدرج."
      },
      sentenceGrammarNotes: [
        {
          title: "entweder ... oder ...",
          summary: "Der Konnektor zeigt zwei mögliche Alternativen.",
          details: "Beide Satzteile sind gleich wichtig, aber nur eine Lösung kann eintreten.",
          example: "Entweder der Lift wird repariert, oder ..."
        }
      ],
      vocabularyLinks: ["entweder", "der Lift", "der Mieter", "die Treppe"],
      chunks: {
        easy: ["Entweder der Lift", "wird repariert,", "oder die Mieter", "nehmen weiter die Treppe."],
        medium: ["Entweder", "der Lift wird repariert,", "oder die Mieter", "nehmen weiter", "die Treppe."],
        hard: ["Entweder", "der", "Lift", "wird", "repariert,", "oder", "die", "Mieter", "nehmen", "weiter", "die", "Treppe."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Entweder der Lift wird repariert,",
        end: "oder die Mieter nehmen weiter die Treppe."
      },
      gapFill: {
        answer: "oder",
        hint: "Gesucht ist der zweite Teil von entweder ... oder ..."
      },
      multipleChoice: {
        wrongOptions: [
          "Entweder der Lift repariert wird, oder die Mieter nehmen weiter die Treppe.",
          "Entweder der Lift wird repariert, die Mieter oder nehmen weiter die Treppe.",
          "Der Lift wird entweder repariert, oder die Mieter weiter die Treppe nehmen."
        ]
      },
      errorSearch: {
        typoOptions: {
          repariert: ["reperiert", "repariertt", "reparriert"]
        }
      }
    },
    {
      id: "rs_037",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Weder im Hof noch im Treppenhaus darf man laut schreien.",
      translations: {
        en: "You may not scream loudly either in the courtyard or in the stairwell.",
        uk: "Ні у дворі, ні на сходовій клітці не можна голосно кричати.",
        ar: "لا يجوز الصراخ بصوت عالٍ لا في الفناء ولا في بيت الدرج."
      },
      sentenceGrammarNotes: [
        {
          title: "weder ... noch ...",
          summary: "Mit weder ... noch ... verneint man zwei Möglichkeiten gleichzeitig.",
          details: "Nach weder und noch stehen hier Ortsangaben.",
          example: "Weder im Hof noch im Treppenhaus ..."
        }
      ],
      vocabularyLinks: ["schreien"],
      chunks: {
        easy: ["Weder im Hof", "noch im Treppenhaus", "darf man laut schreien."],
        medium: ["Weder im Hof", "noch im Treppenhaus", "darf man", "laut schreien."],
        hard: ["Weder", "im", "Hof", "noch", "im", "Treppenhaus", "darf", "man", "laut", "schreien."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Weder im Hof noch im Treppenhaus",
        end: "darf man laut schreien."
      },
      gapFill: {
        answer: "noch",
        hint: "Gesucht ist der zweite Teil von weder ... noch ..."
      },
      multipleChoice: {
        wrongOptions: [
          "Weder im Hof oder im Treppenhaus darf man laut schreien.",
          "Weder im Hof noch im Treppenhaus man darf laut schreien.",
          "Im Hof weder noch im Treppenhaus darf man laut schreien."
        ]
      },
      errorSearch: {
        typoOptions: {
          schreien: ["schreihen", "schrien", "schreienn"]
        }
      }
    },
    {
      id: "rs_038",
      level: "B1",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz der hohen Nebenkosten wollen viele Leute weiterhin zentral wohnen.",
      translations: {
        en: "Despite the high utility costs, many people still want to live centrally.",
        uk: "Попри високі комунальні витрати, багато людей і далі хочуть жити в центрі.",
        ar: "رغم ارتفاع التكاليف الإضافية، ما زال كثير من الناس يريدون السكن في موقع مركزي."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Nach trotz steht hier der Genitiv: der hohen Nebenkosten.",
          details: "Der Satz zeigt einen Gegensatz zwischen hohen Kosten und dem Wunsch, dort zu wohnen.",
          example: "Trotz der hohen Nebenkosten ..."
        }
      ],
      vocabularyLinks: ["trotz", "die Nebenkosten", "zentral"],
      chunks: {
        easy: ["Trotz der hohen Nebenkosten", "wollen viele Leute", "weiterhin zentral wohnen."],
        medium: ["Trotz der hohen Nebenkosten", "wollen viele Leute", "weiterhin", "zentral wohnen."],
        hard: ["Trotz", "der", "hohen", "Nebenkosten", "wollen", "viele", "Leute", "weiterhin", "zentral", "wohnen."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Trotz der hohen Nebenkosten",
        end: "wollen viele Leute weiterhin zentral wohnen."
      },
      gapFill: {
        answer: "Nebenkosten",
        hint: "Gesucht ist das Nomen für utility costs."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz den hohen Nebenkosten wollen viele Leute weiterhin zentral wohnen.",
          "Trotz der hohen Nebenkosten viele Leute wollen weiterhin zentral wohnen.",
          "Trotz hohen Nebenkosten wollen viele Leute weiterhin zentral wohnen."
        ]
      },
      errorSearch: {
        typoOptions: {
          Nebenkosten: ["Nebenkostn", "Nebenkossen", "Nebbkosten"]
        }
      }
    },
    {
      id: "rs_039",
      level: "B1",
      grammarFocus: "pronominaladverbien",
      sentence: "Der Mieter beschwert sich darüber, dass der Lärm auch nachts nicht aufhört.",
      translations: {
        en: "The tenant complains that the noise does not stop even at night.",
        uk: "Орендар скаржиться на те, що шум не припиняється навіть уночі.",
        ar: "يشتكي المستأجر من أن الضجيج لا يتوقف حتى في الليل."
      },
      sentenceGrammarNotes: [
        {
          title: "sich über etwas beschweren",
          summary: "Das Verb beschweren sich steht oft mit über + Sache.",
          details: "Im Satz wird daraus das Pronominaladverb darüber.",
          example: "sich darüber beschweren"
        }
      ],
      vocabularyLinks: ["darüber", "sich beschweren", "der Lärm"],
      chunks: {
        easy: ["Der Mieter beschwert sich darüber,", "dass der Lärm", "auch nachts nicht aufhört."],
        medium: ["Der Mieter", "beschwert sich darüber,", "dass der Lärm", "auch nachts", "nicht aufhört."],
        hard: ["Der", "Mieter", "beschwert", "sich", "darüber,", "dass", "der", "Lärm", "auch", "nachts", "nicht", "aufhört."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Der Mieter beschwert sich darüber,",
        end: "dass der Lärm auch nachts nicht aufhört."
      },
      gapFill: {
        answer: "darüber",
        hint: "Gesucht ist die Form zu über etwas."
      },
      multipleChoice: {
        wrongOptions: [
          "Der Mieter beschwert sich dafür, dass der Lärm auch nachts nicht aufhört.",
          "Der Mieter sich beschwert darüber, dass der Lärm auch nachts nicht aufhört.",
          "Der Mieter beschwert sich darüber, der Lärm auch nachts dass nicht aufhört."
        ]
      },
      errorSearch: {
        typoOptions: {
          aufhört: ["aufhort", "aufhörrt", "aufhörtet"]
        }
      }
    },
    {
      id: "rs_040",
      level: "B1",
      grammarFocus: "wohnen_wortschatz",
      sentence: "Die Vermieterin kümmert sich um den Garten, damit der Hof sauber aussieht.",
      translations: {
        en: "The landlady takes care of the garden so that the courtyard looks clean.",
        uk: "Орендодавиця доглядає за садом, щоб подвір’я виглядало чистим.",
        ar: "تهتم المالكة بالحديقة لكي يبدو الفناء نظيفًا."
      },
      sentenceGrammarNotes: [
        {
          title: "sich kümmern um",
          summary: "Das reflexive Verb braucht hier die Präposition um.",
          details: "Man sagt: sich um den Garten kümmern.",
          example: "kümmert sich um den Garten"
        },
        {
          title: "damit-Satz",
          summary: "Der zweite Teil beschreibt den Zweck.",
          details: "Die Gartenarbeit hat das Ziel, dass der Hof sauber aussieht.",
          example: "damit der Hof sauber aussieht"
        }
      ],
      vocabularyLinks: ["sich kümmern", "der Rasen", "sauber"],
      chunks: {
        easy: ["Die Vermieterin kümmert sich", "um den Garten,", "damit der Hof", "sauber aussieht."],
        medium: ["Die Vermieterin", "kümmert sich", "um den Garten,", "damit der Hof", "sauber aussieht."],
        hard: ["Die", "Vermieterin", "kümmert", "sich", "um", "den", "Garten,", "damit", "der", "Hof", "sauber", "aussieht."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Die Vermieterin kümmert sich um den Garten,",
        end: "damit der Hof sauber aussieht."
      },
      gapFill: {
        answer: "um",
        hint: "Gesucht ist die Präposition nach sich kümmern."
      },
      multipleChoice: {
        wrongOptions: [
          "Die Vermieterin kümmert sich an den Garten, damit der Hof sauber aussieht.",
          "Die Vermieterin kümmert sich um den Garten, damit sieht der Hof sauber aus.",
          "Die Vermieterin um den Garten kümmert sich, damit der Hof sauber aussieht."
        ]
      },
      errorSearch: {
        typoOptions: {
          kümmert: ["kümmertt", "kummert", "kümmret"]
        }
      }
    },
    {
      id: "rs_041",
      level: "B1",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Nicht nur der Lift ist alt, sondern auch die Treppe ist beschädigt.",
      translations: {
        en: "Not only the elevator is old, but the staircase is damaged as well.",
        uk: "Не лише ліфт старий, а й сходи пошкоджені.",
        ar: "ليس المصعد قديمًا فحسب، بل إن الدرج متضرر أيضًا."
      },
      sentenceGrammarNotes: [
        {
          title: "nicht nur ..., sondern auch ...",
          summary: "Der Satz fügt eine zweite Information mit derselben Richtung hinzu.",
          details: "Beide Teile beschreiben Probleme im Haus.",
          example: "Nicht nur der Lift ..., sondern auch die Treppe ..."
        }
      ],
      vocabularyLinks: ["der Lift", "die Treppe"],
      chunks: {
        easy: ["Nicht nur der Lift", "ist alt,", "sondern auch die Treppe", "ist beschädigt."],
        medium: ["Nicht nur der Lift", "ist alt,", "sondern auch", "die Treppe", "ist beschädigt."],
        hard: ["Nicht", "nur", "der", "Lift", "ist", "alt,", "sondern", "auch", "die", "Treppe", "ist", "beschädigt."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Nicht nur der Lift ist alt,",
        end: "sondern auch die Treppe ist beschädigt."
      },
      gapFill: {
        answer: "sondern",
        hint: "Gesucht ist der zweite Teil von nicht nur ... sondern auch ..."
      },
      multipleChoice: {
        wrongOptions: [
          "Nicht nur der Lift ist alt, auch sondern die Treppe ist beschädigt.",
          "Nicht nur der Lift alt ist, sondern auch die Treppe ist beschädigt.",
          "Nicht nur der Lift ist alt, sondern die Treppe auch ist beschädigt."
        ]
      },
      errorSearch: {
        typoOptions: {
          beschädigt: ["beschadigt", "beschädiggt", "beschädit"]
        }
      }
    },
    {
      id: "rs_042",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätte der Rechtsanwalt früher reagiert, wäre der Prozess wahrscheinlich kürzer gewesen.",
      translations: {
        en: "If the lawyer had reacted earlier, the trial would probably have been shorter.",
        uk: "Якби адвокат відреагував раніше, процес, імовірно, був би коротшим.",
        ar: "لو أن المحامي تصرف في وقت أبكر، لكان مسار القضية أقصر على الأرجح."
      },
      sentenceGrammarNotes: [
        {
          title: "Konjunktiv II der Vergangenheit",
          summary: "Der Satz beschreibt eine irreale Möglichkeit in der Vergangenheit.",
          details: "Hätte nennt die nicht erfüllte Bedingung, wäre ... gewesen die gedachte Folge.",
          example: "Hätte der Rechtsanwalt früher reagiert, wäre der Prozess kürzer gewesen."
        }
      ],
      vocabularyLinks: ["der Rechtsanwalt", "reagieren", "der Prozess"],
      chunks: {
        easy: ["Hätte der Rechtsanwalt früher reagiert,", "wäre der Prozess", "wahrscheinlich kürzer gewesen."],
        medium: ["Hätte der Rechtsanwalt", "früher reagiert,", "wäre der Prozess", "wahrscheinlich", "kürzer gewesen."],
        hard: ["Hätte", "der", "Rechtsanwalt", "früher", "reagiert,", "wäre", "der", "Prozess", "wahrscheinlich", "kürzer", "gewesen."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Hätte der Rechtsanwalt früher reagiert,",
        end: "wäre der Prozess wahrscheinlich kürzer gewesen."
      },
      gapFill: {
        answer: "gewesen",
        hint: "Gesucht ist der letzte Teil der Konjunktiv-II-Form."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätte der Rechtsanwalt früher reagiert, hätte der Prozess wahrscheinlich kürzer gewesen.",
          "Der Rechtsanwalt hätte früher reagiert, wäre der Prozess wahrscheinlich kürzer gewesen.",
          "Hätte der Rechtsanwalt reagiert früher, wäre der Prozess wahrscheinlich kürzer gewesen."
        ]
      },
      errorSearch: {
        typoOptions: {
          Rechtsanwalt: ["Rechtsanvalt", "Rechtsanwlt", "Rechtsanwaalt"]
        }
      }
    },
    {
      id: "rs_043",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Wäre die Kündigungsfrist klarer erklärt worden, hätten weniger Mieter Fehler gemacht.",
      translations: {
        en: "If the notice period had been explained more clearly, fewer tenants would have made mistakes.",
        uk: "Якби строк розірвання був пояснений чіткіше, менше орендарів припустилися б помилок.",
        ar: "لو تم شرح مهلة الإنهاء بشكل أوضح، لارتكب عدد أقل من المستأجرين أخطاء."
      },
      sentenceGrammarNotes: [
        {
          title: "Passiv + Konjunktiv II",
          summary: "Im ersten Teil steht eine passive irreale Bedingung.",
          details: "Wäre ... erklärt worden zeigt, dass die Erklärung nicht so klar war, wie sie hätte sein sollen.",
          example: "Wäre die Kündigungsfrist klarer erklärt worden ..."
        }
      ],
      vocabularyLinks: ["die Kündigungsfrist", "der Mieter"],
      chunks: {
        easy: ["Wäre die Kündigungsfrist", "klarer erklärt worden,", "hätten weniger Mieter", "Fehler gemacht."],
        medium: ["Wäre die Kündigungsfrist", "klarer erklärt worden,", "hätten weniger Mieter", "Fehler", "gemacht."],
        hard: ["Wäre", "die", "Kündigungsfrist", "klarer", "erklärt", "worden,", "hätten", "weniger", "Mieter", "Fehler", "gemacht."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Wäre die Kündigungsfrist klarer erklärt worden,",
        end: "hätten weniger Mieter Fehler gemacht."
      },
      gapFill: {
        answer: "Kündigungsfrist",
        hint: "Gesucht ist das Nomen für notice period."
      },
      multipleChoice: {
        wrongOptions: [
          "Wäre die Kündigungsfrist klarer erklärt worden, wären weniger Mieter Fehler gemacht.",
          "Die Kündigungsfrist wäre klarer erklärt worden, hätten weniger Mieter Fehler gemacht.",
          "Wäre die Kündigungsfrist erklärt klarer worden, hätten weniger Mieter Fehler gemacht."
        ]
      },
      errorSearch: {
        typoOptions: {
          Kündigungsfrist: ["Kundigungsfrist", "Kündigungsfrisst", "Kündigungsfrit"]
        }
      }
    },
    {
      id: "rs_044",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz des Streits mit den Nachbarn bemühte sich der Vermieter um Frieden im Haus.",
      translations: {
        en: "Despite the dispute with the neighbors, the landlord tried to maintain peace in the building.",
        uk: "Попри суперечку з сусідами, орендодавець намагався зберегти мир у будинку.",
        ar: "رغم الخلاف مع الجيران، سعى المؤجر إلى الحفاظ على الهدوء في المبنى."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Nach trotz steht der Genitiv: des Streits.",
          details: "Der Satz zeigt einen Gegensatz zwischen dem Konflikt und dem Versuch, Frieden zu schaffen.",
          example: "Trotz des Streits ..."
        },
        {
          title: "sich um etwas bemühen",
          summary: "Die feste Verbindung bedeutet: sich aktiv für etwas einsetzen.",
          details: "Hier bemüht sich der Vermieter um Frieden.",
          example: "bemühte sich ... um Frieden"
        }
      ],
      vocabularyLinks: ["trotz", "der Frieden", "der Vermieter"],
      chunks: {
        easy: ["Trotz des Streits mit den Nachbarn", "bemühte sich der Vermieter", "um Frieden im Haus."],
        medium: ["Trotz des Streits", "mit den Nachbarn", "bemühte sich der Vermieter", "um Frieden im Haus."],
        hard: ["Trotz", "des", "Streits", "mit", "den", "Nachbarn", "bemühte", "sich", "der", "Vermieter", "um", "Frieden", "im", "Haus."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Trotz des Streits mit den Nachbarn",
        end: "bemühte sich der Vermieter um Frieden im Haus."
      },
      gapFill: {
        answer: "Frieden",
        hint: "Gesucht ist das Nomen für peace."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz dem Streit mit den Nachbarn bemühte sich der Vermieter um Frieden im Haus.",
          "Trotz des Streits mit den Nachbarn der Vermieter bemühte sich um Frieden im Haus.",
          "Trotz des Streits mit den Nachbarn bemühte der Vermieter sich im Haus um Frieden."
        ]
      },
      errorSearch: {
        typoOptions: {
          Frieden: ["Friedenn", "Friden", "Friehden"]
        }
      }
    },
    {
      id: "rs_045",
      level: "B2",
      grammarFocus: "pronominaladverbien",
      sentence: "Worüber der Vermieter im Prozess genau gesprochen hat, blieb für viele Mieter unklar.",
      translations: {
        en: "What exactly the landlord talked about during the trial remained unclear to many tenants.",
        uk: "Про що саме орендодавець говорив у процесі, для багатьох орендарів залишилося незрозумілим.",
        ar: "ما الذي تحدث عنه المؤجر بالضبط أثناء المحاكمة ظل غير واضح لكثير من المستأجرين."
      },
      sentenceGrammarNotes: [
        {
          title: "Indirekter Fragesatz",
          summary: "Der Satz beginnt mit einer eingebetteten Frage.",
          details: "Worüber leitet die Frage ein, aber das Verb hat steht am Ende des Nebensatzes.",
          example: "Worüber ... gesprochen hat"
        }
      ],
      vocabularyLinks: ["worüber", "der Vermieter", "der Prozess"],
      chunks: {
        easy: ["Worüber der Vermieter", "im Prozess genau gesprochen hat,", "blieb für viele Mieter", "unklar."],
        medium: ["Worüber", "der Vermieter", "im Prozess genau", "gesprochen hat,", "blieb für viele Mieter unklar."],
        hard: ["Worüber", "der", "Vermieter", "im", "Prozess", "genau", "gesprochen", "hat,", "blieb", "für", "viele", "Mieter", "unklar."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Worüber der Vermieter im Prozess genau gesprochen hat,",
        end: "blieb für viele Mieter unklar."
      },
      gapFill: {
        answer: "Worüber",
        hint: "Gesucht ist die Frageform zu über etwas sprechen."
      },
      multipleChoice: {
        wrongOptions: [
          "Worüber hat der Vermieter im Prozess genau gesprochen, blieb für viele Mieter unklar.",
          "Worüber der Vermieter genau im Prozess gesprochen hat blieb, für viele Mieter unklar.",
          "Der Vermieter worüber im Prozess genau gesprochen hat, blieb für viele Mieter unklar."
        ]
      },
      errorSearch: {
        typoOptions: {
          unklar: ["unklaar", "unklarr", "uncl ar"]
        }
      }
    },
    {
      id: "rs_046",
      level: "B2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Nicht nur das Grundstück ist teuer, sondern auch die Genehmigung kostet Zeit und Geld.",
      translations: {
        en: "Not only the property is expensive, but the permit also costs time and money.",
        uk: "Не лише ділянка дорога, а й дозвіл коштує часу та грошей.",
        ar: "ليست الأرض وحدها باهظة، بل إن الحصول على التصريح يكلّف وقتًا ومالًا أيضًا."
      },
      sentenceGrammarNotes: [
        {
          title: "nicht nur ..., sondern auch ...",
          summary: "Der Konnektor verbindet zwei Belastungen im selben Thema.",
          details: "Zuerst geht es um den Preis des Grundstücks, dann um den Aufwand für die Genehmigung.",
          example: "Nicht nur das Grundstück ist teuer, sondern auch ..."
        }
      ],
      vocabularyLinks: ["das Grundstück", "die Genehmigung"],
      chunks: {
        easy: ["Nicht nur das Grundstück", "ist teuer,", "sondern auch die Genehmigung", "kostet Zeit und Geld."],
        medium: ["Nicht nur das Grundstück", "ist teuer,", "sondern auch", "die Genehmigung", "kostet Zeit und Geld."],
        hard: ["Nicht", "nur", "das", "Grundstück", "ist", "teuer,", "sondern", "auch", "die", "Genehmigung", "kostet", "Zeit", "und", "Geld."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Nicht nur das Grundstück ist teuer,",
        end: "sondern auch die Genehmigung kostet Zeit und Geld."
      },
      gapFill: {
        answer: "Genehmigung",
        hint: "Gesucht ist das Nomen für permit."
      },
      multipleChoice: {
        wrongOptions: [
          "Nicht nur das Grundstück ist teuer, auch sondern die Genehmigung kostet Zeit und Geld.",
          "Nicht nur das Grundstück teuer ist, sondern auch die Genehmigung kostet Zeit und Geld.",
          "Nicht nur das Grundstück ist teuer, sondern die Genehmigung auch kostet Zeit und Geld."
        ]
      },
      errorSearch: {
        typoOptions: {
          Grundstück: ["Grundstuck", "Grundstük", "Grundstuckk"]
        }
      }
    },
    {
      id: "rs_047",
      level: "B2",
      grammarFocus: "zweiteilige_konnektoren",
      sentence: "Entweder der Eigentümer senkt die Nebenkosten, oder mehrere Mieter kündigen den Vertrag.",
      translations: {
        en: "Either the owner reduces the utility costs, or several tenants cancel the contract.",
        uk: "Або власник знизить комунальні витрати, або кілька орендарів розірвуть договір.",
        ar: "إما أن يخفض المالك التكاليف الإضافية، أو يلغي عدة مستأجرين العقد."
      },
      sentenceGrammarNotes: [
        {
          title: "entweder ... oder ...",
          summary: "Die Konstruktion stellt zwei mögliche Entwicklungen gegenüber.",
          details: "Im zweiten Teil steht ein vollwertiger Hauptsatz mit eigenem Verb.",
          example: "Entweder ... oder mehrere Mieter kündigen den Vertrag."
        }
      ],
      vocabularyLinks: ["entweder", "das Eigentum", "die Nebenkosten", "kündigen"],
      chunks: {
        easy: ["Entweder der Eigentümer", "senkt die Nebenkosten,", "oder mehrere Mieter", "kündigen den Vertrag."],
        medium: ["Entweder der Eigentümer", "senkt die Nebenkosten,", "oder", "mehrere Mieter", "kündigen den Vertrag."],
        hard: ["Entweder", "der", "Eigentümer", "senkt", "die", "Nebenkosten,", "oder", "mehrere", "Mieter", "kündigen", "den", "Vertrag."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Entweder der Eigentümer senkt die Nebenkosten,",
        end: "oder mehrere Mieter kündigen den Vertrag."
      },
      gapFill: {
        answer: "kündigen",
        hint: "Gesucht ist das Verb für terminate/cancel."
      },
      multipleChoice: {
        wrongOptions: [
          "Entweder der Eigentümer senkt die Nebenkosten, oder kündigen mehrere Mieter den Vertrag.",
          "Entweder senkt der Eigentümer die Nebenkosten, oder mehrere Mieter den Vertrag kündigen.",
          "Der Eigentümer senkt entweder die Nebenkosten, oder mehrere Mieter kündigen den Vertrag."
        ]
      },
      errorSearch: {
        typoOptions: {
          Nebenkosten: ["Nebenkostten", "Nebenkostn", "Nekenkosten"]
        }
      }
    },
    {
      id: "rs_048",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Wären die Mauern besser isoliert gewesen, hätte man im Winter deutlich weniger Lärm von draußen gehört.",
      translations: {
        en: "If the walls had been better insulated, people would have heard much less noise from outside in winter.",
        uk: "Якби стіни були краще ізольовані, взимку було б чути значно менше шуму ззовні.",
        ar: "لو كانت الجدران معزولة بشكل أفضل، لسمع الناس ضجيجًا أقل بكثير من الخارج في الشتاء."
      },
      sentenceGrammarNotes: [
        {
          title: "Konjunktiv II mit Zustand",
          summary: "Die gedachte Bedingung betrifft den Zustand der Mauern in der Vergangenheit.",
          details: "Wären ... gewesen beschreibt die irreale Bedingung, hätte man gehört die gedachte Folge.",
          example: "Wären die Mauern besser isoliert gewesen, hätte man ..."
        }
      ],
      vocabularyLinks: ["die Mauer", "der Lärm"],
      chunks: {
        easy: ["Wären die Mauern", "besser isoliert gewesen,", "hätte man im Winter", "deutlich weniger Lärm von draußen gehört."],
        medium: ["Wären die Mauern", "besser isoliert gewesen,", "hätte man", "im Winter", "deutlich weniger Lärm von draußen gehört."],
        hard: ["Wären", "die", "Mauern", "besser", "isoliert", "gewesen,", "hätte", "man", "im", "Winter", "deutlich", "weniger", "Lärm", "von", "draußen", "gehört."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Wären die Mauern besser isoliert gewesen,",
        end: "hätte man im Winter deutlich weniger Lärm von draußen gehört."
      },
      gapFill: {
        answer: "Lärm",
        hint: "Gesucht ist das Nomen für noise."
      },
      multipleChoice: {
        wrongOptions: [
          "Wären die Mauern besser isoliert gewesen, wären man im Winter deutlich weniger Lärm von draußen gehört.",
          "Die Mauern wären besser isoliert gewesen, hätte man im Winter deutlich weniger Lärm von draußen gehört.",
          "Wären die Mauern isoliert besser gewesen, hätte man im Winter deutlich weniger Lärm von draußen gehört."
        ]
      },
      errorSearch: {
        typoOptions: {
          draußen: ["drausen", "draussen", "draußenn"]
        }
      }
    },
    {
      id: "rs_049",
      level: "B2",
      grammarFocus: "trotz_genitiv",
      sentence: "Trotz der Entscheidung des Gerichts verstoßen einige Nachbarn weiter gegen die Hausordnung.",
      translations: {
        en: "Despite the court's decision, some neighbors continue to violate the house rules.",
        uk: "Попри рішення суду, деякі сусіди й далі порушують правила будинку.",
        ar: "رغم قرار المحكمة، يواصل بعض الجيران مخالفة قواعد المنزل."
      },
      sentenceGrammarNotes: [
        {
          title: "trotz + Genitiv",
          summary: "Nach trotz steht hier der Genitiv: der Entscheidung des Gerichts.",
          details: "Der Satz zeigt, dass die Nachbarn sogar nach einer offiziellen Entscheidung weitermachen.",
          example: "Trotz der Entscheidung des Gerichts ..."
        },
        {
          title: "gegen etwas verstoßen",
          summary: "Die feste Verbindung bedeutet: eine Regel brechen.",
          details: "Hier verstoßen die Nachbarn gegen die Hausordnung.",
          example: "gegen die Hausordnung verstoßen"
        }
      ],
      vocabularyLinks: ["trotz", "das Gericht", "verstoßen", "die Hausordnung"],
      chunks: {
        easy: ["Trotz der Entscheidung des Gerichts", "verstoßen einige Nachbarn", "weiter gegen die Hausordnung."],
        medium: ["Trotz der Entscheidung des Gerichts", "verstoßen einige Nachbarn", "weiter", "gegen die Hausordnung."],
        hard: ["Trotz", "der", "Entscheidung", "des", "Gerichts", "verstoßen", "einige", "Nachbarn", "weiter", "gegen", "die", "Hausordnung."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Trotz der Entscheidung des Gerichts",
        end: "verstoßen einige Nachbarn weiter gegen die Hausordnung."
      },
      gapFill: {
        answer: "verstoßen",
        hint: "Gesucht ist das Verb in der Grundform zu violate."
      },
      multipleChoice: {
        wrongOptions: [
          "Trotz der Entscheidung vom Gericht verstoßen einige Nachbarn weiter gegen die Hausordnung.",
          "Trotz der Entscheidung des Gerichts einige Nachbarn verstoßen weiter gegen die Hausordnung.",
          "Trotz der Entscheidung des Gerichts verstoßen gegen die Hausordnung einige Nachbarn weiter."
        ]
      },
      errorSearch: {
        typoOptions: {
          verstoßen: ["verstossen", "verstoßenn", "verstösen"]
        }
      }
    },
    {
      id: "rs_050",
      level: "B2",
      grammarFocus: "konjunktiv2_vergangenheit",
      sentence: "Hätte der Eigentümer früher entdeckt, wie laut die Lage wirklich ist, hätte er das Grundstück nicht gekauft.",
      translations: {
        en: "If the owner had discovered earlier how noisy the location really is, he would not have bought the property.",
        uk: "Якби власник раніше зрозумів, наскільки насправді гучне це місце, він би не купив цю ділянку.",
        ar: "لو أن المالك اكتشف في وقت أبكر مدى ضجيج الموقع في الحقيقة، لما اشترى العقار."
      },
      sentenceGrammarNotes: [
        {
          title: "Eingebetteter Nebensatz",
          summary: "Im ersten Teil steckt noch ein Nebensatz mit wie.",
          details: "Der Satz kombiniert also eine irreale Bedingung mit einem inhaltlichen Nebensatz.",
          example: "entdeckt, wie laut die Lage wirklich ist"
        },
        {
          title: "Konjunktiv II der Vergangenheit",
          summary: "Der Satz beschreibt eine Entscheidung, die man im Nachhinein bereut.",
          details: "Hätte entdeckt nennt die verpasste Erkenntnis, hätte gekauft die nicht geschehene Folge.",
          example: "Hätte der Eigentümer früher entdeckt ..., hätte er ... nicht gekauft."
        }
      ],
      vocabularyLinks: ["der Eigentümer", "entdecken", "laut", "das Grundstück"],
      chunks: {
        easy: ["Hätte der Eigentümer früher entdeckt,", "wie laut die Lage wirklich ist,", "hätte er das Grundstück", "nicht gekauft."],
        medium: ["Hätte der Eigentümer", "früher entdeckt,", "wie laut die Lage wirklich ist,", "hätte er", "das Grundstück nicht gekauft."],
        hard: ["Hätte", "der", "Eigentümer", "früher", "entdeckt,", "wie", "laut", "die", "Lage", "wirklich", "ist,", "hätte", "er", "das", "Grundstück", "nicht", "gekauft."]
      },
      alternativeCorrectAnswers: [],
      matching: {
        start: "Hätte der Eigentümer früher entdeckt, wie laut die Lage wirklich ist,",
        end: "hätte er das Grundstück nicht gekauft."
      },
      gapFill: {
        answer: "gekauft",
        hint: "Gesucht ist das Partizip II von kaufen."
      },
      multipleChoice: {
        wrongOptions: [
          "Hätte der Eigentümer früher entdeckt, wie laut die Lage wirklich ist, wäre er das Grundstück nicht gekauft.",
          "Hätte der Eigentümer entdeckt früher, wie laut die Lage wirklich ist, hätte er das Grundstück nicht gekauft.",
          "Der Eigentümer hätte früher entdeckt, wie laut die Lage wirklich ist, hätte er das Grundstück nicht gekauft."
        ]
      },
      errorSearch: {
        typoOptions: {
          Grundstück: ["Grundstuck", "Grundstük", "Grundstucke"]
        }
      }
    }
  ],

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
    { category: "grammar", basicForm: "darüber", forms: "Pronominaladverb (da + über) · Antwort auf Sachen · Beispiel: Wir sprechen darüber.", meaningEn: "about it / about that" },
    { category: "grammar", basicForm: "dafür", forms: "Pronominaladverb (da + für) · Antwort auf Sachen · Beispiel: Ich interessiere mich dafür.", meaningEn: "for it / for that" },
    { category: "grammar", basicForm: "wofür", forms: "Pronominaladverb (wo + für) · Frage nach Sachen · Beispiel: Wofür ist die Gebühr?", meaningEn: "what for / for what" },
    { category: "grammar", basicForm: "worüber", forms: "Pronominaladverb (wo + über) · Frage nach Sachen · Beispiel: Worüber hat sich der Nachbar beschwert?", meaningEn: "about what" },
    { category: "grammar", basicForm: "trotz", forms: "Präposition + Genitiv · Beispiel: trotz des Preises / trotz der Lage", meaningEn: "despite" },
    { category: "grammar", basicForm: "sondern", forms: "Konnektor · nicht nur ..., sondern auch ... · zweiter Teil einer Ergänzung", meaningEn: "but rather / but also" },
    { category: "grammar", basicForm: "entweder", forms: "Konnektor · entweder ... oder ... · zeigt eine Alternative", meaningEn: "either" },
    { category: "grammar", basicForm: "hätte", forms: "Konjunktiv II von haben · mit Partizip II für irreale Vergangenheit", meaningEn: "would have / had (subjunctive)" },
    { category: "grammar", basicForm: "wären", forms: "Konjunktiv II von sein · mit Partizip II bei Bewegung / Zustandswechsel", meaningEn: "would be / had been (subjunctive)" }
  ],

  tasks: [
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
    }
  ]
};

window.appData = appData;

