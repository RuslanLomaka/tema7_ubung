const ROUND_LENGTH = 50;
const MIXED_TASKS_PER_TYPE = 10;
const TASK_TYPES = ["sentenceBuilder", "multipleChoice", "gapFill", "formTraining", "errorSearch"];

const sentences = [
  "Meine Mutter hat mich aufgefordert, früher nach Hause zu kommen.",
  "Ich habe versucht, meine Eltern nicht zu enttäuschen.",
  "Mein Vater hat mich gefordert, mehr Verantwortung in der Familie zu übernehmen.",
  "Wir sind ins Geschäft gegangen, um das beschädigte Geschenk umzutauschen.",
  "Mein kleiner Bruder hat das Handy beschädigt, aber er wollte es nicht kaputt machen.",
  "Meine Eltern beschäftigen sich viel damit, die Familie zusammenzuhalten.",
  "Wir sind zum Bahnhof gegangen, um unsere Großeltern zu verabschieden.",
  "Ich bin früh aufgestanden, um meine Gäste zu begrüßen.",
  "Mein Bruder ist ins Ausland gefahren, um später mit mehr Erfahrung wiederzukommen.",
  "Meine Schwester arbeitet im Krankenhaus, um kranke Menschen zu pflegen.",
  "Ich habe versucht, mich an das Familienleben in Deutschland zu gewöhnen.",
  "Meine Tante arbeitet viel, um ältere Menschen zu betreuen.",
  "Meine Eltern haben eine kleine Firma gegründet, um die Familie zu unterstützen.",
  "Ich habe mich entschlossen, öfter Zeit mit meiner Familie zu verbringen.",
  "Meine Großeltern arbeiten noch, um ihr eigenes Haus zu besitzen.",
  "Ich habe mehr gearbeitet, um mir einen Urlaub mit meiner Familie zu leisten.",
  "Wir haben lange gesprochen, um das Problem in der Familie zu lösen.",
  "Meine Schwester forderte mich auf, geduldiger mit unserem Bruder zu sein.",
  "Ich enttäuschte meine Eltern nicht, weil ich ehrlich geblieben bin.",
  "Mein Onkel forderte mehr Ruhe, damit die Kinder schlafen konnten.",
  "Meine Cousine tauschte das Geschenk um, weil es beschädigt war.",
  "Der Regen beschädigte das Dach, und die Familie musste handeln.",
  "Mein Vater beschäftigte sich am Abend mit den Rechnungen der Familie.",
  "Wir verabschiedeten unsere Tante, bevor sie nach Österreich fuhr.",
  "Mein Großvater begrüßte jeden Gast mit einem warmen Lächeln.",
  "Nach zwei Jahren kam mein Bruder wieder zu unserer Familie zurück.",
  "Meine Tante pflegte ihre Mutter viele Jahre lang zu Hause.",
  "Ich gewöhnte mich schnell an die neue Wohnung meiner Familie.",
  "Der Nachbar betreute die Kinder, als meine Eltern arbeiten mussten.",
  "Meine Eltern gründeten den Verein, um anderen Familien zu helfen.",
  "Ich entschloss mich, meine Großmutter öfter zu besuchen.",
  "Meine Eltern besaßen früher ein kleines Haus am Stadtrand.",
  "Der Ausflug lohnte sich, weil die ganze Familie glücklich war.",
  "Mein Bruder löste den Streit, indem er ruhig mit allen sprach.",
  "Meine Mutter fordert mich auf, mehr Zeit mit der Familie zu verbringen.",
  "Ich möchte niemanden enttäuschen, besonders nicht meine Großeltern.",
  "Meine Eltern fordern von uns, respektvoll miteinander zu sprechen.",
  "Wir tauschen die Jacke um, um meiner Schwester eine passende Größe zu besorgen.",
  "Der kleine Unfall beschädigt das Fahrrad meines Bruders.",
  "Meine Schwester beschäftigt sich damit, ein Familienfest zu planen.",
  "Wir verabschieden unseren Cousin, bevor er zum Studium fährt.",
  "Meine Eltern begrüßen die Nachbarn, um ein gutes Verhältnis aufzubauen.",
  "Mein Bruder kommt im Sommer wieder, um die Familie zu sehen.",
  "Wir pflegen den Garten, um unseren Großeltern zu helfen.",
  "Ich gewöhne mich daran, jeden Sonntag mit der Familie zu essen.",
  "Meine Tante betreut die Kinder, um meine Eltern zu entlasten.",
  "Meine Cousine gründet eine Gruppe, um ältere Menschen zu unterstützen.",
  "Ich entschließe mich, den Streit mit meinem Bruder zu lösen.",
  "Meine Familie besitzt ein altes Fotoalbum mit vielen Erinnerungen.",
  "Diese gemeinsame Zeit lohnt sich, weil wir einander besser verstehen."
];

const multipleChoiceWrongOptions = [
  [
    "Meine Mutter mich hat aufgefordert, früher nach Hause zu kommen.",
    "Meine Mutter hat mich aufgefordert, nach Hause früher zu kommen.",
    "Früher nach Hause zu kommen, meine Mutter hat mich aufgefordert."
  ],
  [
    "Ich versucht habe, meine Eltern nicht zu enttäuschen.",
    "Ich habe versucht, nicht meine Eltern zu enttäuschen.",
    "Meine Eltern nicht zu enttäuschen, ich habe versucht."
  ],
  [
    "Mein Vater mich hat gefordert, mehr Verantwortung in der Familie zu übernehmen.",
    "Mein Vater hat mich gefordert, in der Familie mehr Verantwortung zu übernehmen.",
    "Mehr Verantwortung zu übernehmen in der Familie, mein Vater hat mich gefordert."
  ],
  [
    "Wir ins Geschäft sind gegangen, um das beschädigte Geschenk umzutauschen.",
    "Wir sind gegangen ins Geschäft, um das beschädigte Geschenk umzutauschen.",
    "Um das beschädigte Geschenk umzutauschen, wir sind ins Geschäft gegangen."
  ],
  [
    "Mein kleiner Bruder das Handy hat beschädigt, aber er wollte es nicht kaputt machen.",
    "Mein kleiner Bruder hat beschädigt das Handy, aber er wollte es nicht kaputt machen.",
    "Aber er wollte es nicht kaputt machen, mein kleiner Bruder hat das Handy beschädigt."
  ],
  [
    "Meine Eltern sich beschäftigen viel damit, die Familie zusammenzuhalten.",
    "Meine Eltern beschäftigen damit sich viel, die Familie zusammenzuhalten.",
    "Die Familie zusammenzuhalten, meine Eltern beschäftigen sich viel damit."
  ],
  [
    "Wir zum Bahnhof sind gegangen, um unsere Großeltern zu verabschieden.",
    "Wir sind gegangen zum Bahnhof, um unsere Großeltern zu verabschieden.",
    "Um unsere Großeltern zu verabschieden, wir sind zum Bahnhof gegangen."
  ],
  [
    "Ich früh bin aufgestanden, um meine Gäste zu begrüßen.",
    "Ich bin aufgestanden früh, um meine Gäste zu begrüßen.",
    "Um meine Gäste zu begrüßen, ich bin früh aufgestanden."
  ],
  [
    "Mein Bruder ins Ausland ist gefahren, um später mit mehr Erfahrung wiederzukommen.",
    "Mein Bruder ist gefahren ins Ausland, um später mit mehr Erfahrung wiederzukommen.",
    "Um später mit mehr Erfahrung wiederzukommen, mein Bruder ist ins Ausland gefahren."
  ],
  [
    "Meine Schwester im Krankenhaus arbeitet, um kranke Menschen zu pflegen.",
    "Meine Schwester arbeitet, im Krankenhaus um kranke Menschen zu pflegen.",
    "Um kranke Menschen zu pflegen, meine Schwester arbeitet im Krankenhaus."
  ],
  [
    "Ich versucht habe, mich an das Familienleben in Deutschland zu gewöhnen.",
    "Ich habe versucht, an das Familienleben mich in Deutschland zu gewöhnen.",
    "Mich an das Familienleben in Deutschland zu gewöhnen, ich habe versucht."
  ],
  [
    "Meine Tante viel arbeitet, um ältere Menschen zu betreuen.",
    "Meine Tante arbeitet, viel um ältere Menschen zu betreuen.",
    "Um ältere Menschen zu betreuen, meine Tante arbeitet viel."
  ],
  [
    "Meine Eltern eine kleine Firma haben gegründet, um die Familie zu unterstützen.",
    "Meine Eltern haben gegründet eine kleine Firma, um die Familie zu unterstützen.",
    "Um die Familie zu unterstützen, meine Eltern haben eine kleine Firma gegründet."
  ],
  [
    "Ich mich habe entschlossen, öfter Zeit mit meiner Familie zu verbringen.",
    "Ich habe entschlossen mich, öfter Zeit mit meiner Familie zu verbringen.",
    "Öfter Zeit mit meiner Familie zu verbringen, ich habe mich entschlossen."
  ],
  [
    "Meine Großeltern noch arbeiten, um ihr eigenes Haus zu besitzen.",
    "Meine Großeltern arbeiten, noch um ihr eigenes Haus zu besitzen.",
    "Um ihr eigenes Haus zu besitzen, meine Großeltern arbeiten noch."
  ],
  [
    "Ich mehr habe gearbeitet, um mir einen Urlaub mit meiner Familie zu leisten.",
    "Ich habe gearbeitet mehr, um mir einen Urlaub mit meiner Familie zu leisten.",
    "Um mir einen Urlaub mit meiner Familie zu leisten, ich habe mehr gearbeitet."
  ],
  [
    "Wir lange haben gesprochen, um das Problem in der Familie zu lösen.",
    "Wir haben gesprochen lange, um das Problem in der Familie zu lösen.",
    "Um das Problem in der Familie zu lösen, wir haben lange gesprochen."
  ],
  [
    "Meine Schwester mich forderte auf, geduldiger mit unserem Bruder zu sein.",
    "Meine Schwester forderte mich auf, mit unserem Bruder geduldiger zu sein.",
    "Geduldiger mit unserem Bruder zu sein, meine Schwester forderte mich auf."
  ],
  [
    "Ich enttäuschte nicht meine Eltern, weil ich ehrlich geblieben bin.",
    "Ich meine Eltern enttäuschte nicht, weil ich ehrlich geblieben bin.",
    "Weil ich ehrlich geblieben bin, ich enttäuschte meine Eltern nicht."
  ],
  [
    "Mein Onkel mehr Ruhe forderte, damit die Kinder schlafen konnten.",
    "Mein Onkel forderte mehr Ruhe, die Kinder damit schlafen konnten.",
    "Damit die Kinder schlafen konnten, mein Onkel forderte mehr Ruhe."
  ],
  [
    "Meine Cousine das Geschenk tauschte um, weil es beschädigt war.",
    "Meine Cousine tauschte um das Geschenk, weil es beschädigt war.",
    "Weil es beschädigt war, meine Cousine tauschte das Geschenk um."
  ],
  [
    "Der Regen das Dach beschädigte, und die Familie musste handeln.",
    "Der Regen beschädigte das Dach, und musste die Familie handeln.",
    "Und die Familie musste handeln, der Regen beschädigte das Dach."
  ],
  [
    "Mein Vater sich beschäftigte am Abend mit den Rechnungen der Familie.",
    "Mein Vater beschäftigte am Abend sich mit den Rechnungen der Familie.",
    "Mit den Rechnungen der Familie beschäftigte mein Vater sich am Abend."
  ],
  [
    "Wir unsere Tante verabschiedeten, bevor sie nach Österreich fuhr.",
    "Wir verabschiedeten unsere Tante, bevor nach Österreich sie fuhr.",
    "Bevor sie nach Österreich fuhr, wir verabschiedeten unsere Tante."
  ],
  [
    "Mein Großvater jeden Gast begrüßte mit einem warmen Lächeln.",
    "Mein Großvater begrüßte mit einem warmen Lächeln jeden Gast.",
    "Mit einem warmen Lächeln mein Großvater begrüßte jeden Gast."
  ],
  [
    "Nach zwei Jahren mein Bruder kam wieder zu unserer Familie zurück.",
    "Nach zwei Jahren kam wieder mein Bruder zu unserer Familie zurück.",
    "Mein Bruder nach zwei Jahren kam wieder zu unserer Familie zurück."
  ],
  [
    "Meine Tante ihre Mutter pflegte viele Jahre lang zu Hause.",
    "Meine Tante pflegte viele Jahre lang ihre Mutter zu Hause.",
    "Zu Hause meine Tante pflegte ihre Mutter viele Jahre lang."
  ],
  [
    "Ich mich gewöhnte schnell an die neue Wohnung meiner Familie.",
    "Ich gewöhnte schnell mich an die neue Wohnung meiner Familie.",
    "An die neue Wohnung meiner Familie gewöhnte ich mich schnell."
  ],
  [
    "Der Nachbar die Kinder betreute, als meine Eltern arbeiten mussten.",
    "Der Nachbar betreute die Kinder, als arbeiten meine Eltern mussten.",
    "Als meine Eltern arbeiten mussten, der Nachbar betreute die Kinder."
  ],
  [
    "Meine Eltern den Verein gründeten, um anderen Familien zu helfen.",
    "Meine Eltern gründeten den Verein, anderen Familien um zu helfen.",
    "Um anderen Familien zu helfen, meine Eltern gründeten den Verein."
  ],
  [
    "Ich mich entschloss, meine Großmutter öfter zu besuchen.",
    "Ich entschloss mich, öfter meine Großmutter zu besuchen.",
    "Meine Großmutter öfter zu besuchen, ich entschloss mich."
  ],
  [
    "Meine Eltern früher besaßen ein kleines Haus am Stadtrand.",
    "Meine Eltern besaßen ein kleines Haus früher am Stadtrand.",
    "Am Stadtrand meine Eltern besaßen früher ein kleines Haus."
  ],
  [
    "Der Ausflug sich lohnte, weil die ganze Familie glücklich war.",
    "Der Ausflug lohnte sich, weil glücklich die ganze Familie war.",
    "Weil die ganze Familie glücklich war, der Ausflug lohnte sich."
  ],
  [
    "Mein Bruder den Streit löste, indem er ruhig mit allen sprach.",
    "Mein Bruder löste den Streit, indem ruhig er mit allen sprach.",
    "Indem er ruhig mit allen sprach, mein Bruder löste den Streit."
  ],
  [
    "Meine Mutter mich fordert auf, mehr Zeit mit der Familie zu verbringen.",
    "Meine Mutter fordert mich auf, mit der Familie mehr Zeit zu verbringen.",
    "Mehr Zeit mit der Familie zu verbringen, meine Mutter fordert mich auf."
  ],
  [
    "Ich niemanden möchte enttäuschen, besonders nicht meine Großeltern.",
    "Ich möchte enttäuschen niemanden, besonders nicht meine Großeltern.",
    "Besonders nicht meine Großeltern, ich möchte niemanden enttäuschen."
  ],
  [
    "Meine Eltern von uns fordern, respektvoll miteinander zu sprechen.",
    "Meine Eltern fordern von uns, miteinander respektvoll zu sprechen.",
    "Respektvoll miteinander zu sprechen, meine Eltern fordern von uns."
  ],
  [
    "Wir die Jacke tauschen um, um meiner Schwester eine passende Größe zu besorgen.",
    "Wir tauschen um die Jacke, um meiner Schwester eine passende Größe zu besorgen.",
    "Um meiner Schwester eine passende Größe zu besorgen, wir tauschen die Jacke um."
  ],
  [
    "Der kleine Unfall das Fahrrad beschädigt meines Bruders.",
    "Der kleine Unfall beschädigt meines Bruders das Fahrrad.",
    "Das Fahrrad meines Bruders der kleine Unfall beschädigt."
  ],
  [
    "Meine Schwester sich beschäftigt damit, ein Familienfest zu planen.",
    "Meine Schwester beschäftigt damit sich, ein Familienfest zu planen.",
    "Ein Familienfest zu planen, meine Schwester beschäftigt sich damit."
  ],
  [
    "Wir unseren Cousin verabschieden, bevor er zum Studium fährt.",
    "Wir verabschieden unseren Cousin, bevor zum Studium er fährt.",
    "Bevor er zum Studium fährt, wir verabschieden unseren Cousin."
  ],
  [
    "Meine Eltern die Nachbarn begrüßen, um ein gutes Verhältnis aufzubauen.",
    "Meine Eltern begrüßen die Nachbarn, ein gutes Verhältnis um aufzubauen.",
    "Um ein gutes Verhältnis aufzubauen, meine Eltern begrüßen die Nachbarn."
  ],
  [
    "Mein Bruder im Sommer kommt wieder, um die Familie zu sehen.",
    "Mein Bruder kommt wieder im Sommer, um die Familie zu sehen.",
    "Um die Familie zu sehen, mein Bruder kommt im Sommer wieder."
  ],
  [
    "Wir den Garten pflegen, um unseren Großeltern zu helfen.",
    "Wir pflegen den Garten, unseren Großeltern um zu helfen.",
    "Um unseren Großeltern zu helfen, wir pflegen den Garten."
  ],
  [
    "Ich mich gewöhne daran, jeden Sonntag mit der Familie zu essen.",
    "Ich gewöhne daran mich, jeden Sonntag mit der Familie zu essen.",
    "Jeden Sonntag mit der Familie zu essen, ich gewöhne mich daran."
  ],
  [
    "Meine Tante die Kinder betreut, um meine Eltern zu entlasten.",
    "Meine Tante betreut die Kinder, meine Eltern um zu entlasten.",
    "Um meine Eltern zu entlasten, meine Tante betreut die Kinder."
  ],
  [
    "Meine Cousine eine Gruppe gründet, um ältere Menschen zu unterstützen.",
    "Meine Cousine gründet eine Gruppe, ältere Menschen um zu unterstützen.",
    "Um ältere Menschen zu unterstützen, meine Cousine gründet eine Gruppe."
  ],
  [
    "Ich mich entschließe, den Streit mit meinem Bruder zu lösen.",
    "Ich entschließe mich, mit meinem Bruder den Streit zu lösen.",
    "Den Streit mit meinem Bruder zu lösen, ich entschließe mich."
  ],
  [
    "Meine Familie ein altes Fotoalbum besitzt mit vielen Erinnerungen.",
    "Meine Familie besitzt mit vielen Erinnerungen ein altes Fotoalbum.",
    "Mit vielen Erinnerungen meine Familie besitzt ein altes Fotoalbum."
  ],
  [
    "Diese gemeinsame Zeit sich lohnt, weil wir einander besser verstehen.",
    "Diese gemeinsame Zeit lohnt sich, weil besser wir einander verstehen.",
    "Weil wir einander besser verstehen, diese gemeinsame Zeit lohnt sich."
  ]
];

const gapFillItems = [
  { sentence: "Meine Mutter möchte mich ___, früher nach Hause zu kommen.", answer: "auffordern", hint: "Jemand sagt: Bitte mach das." },
  { sentence: "Meine Mutter hat mich ___, früher nach Hause zu kommen.", answer: "aufgefordert", hint: "Jemand hat gesagt: Bitte mach das." },
  { sentence: "Meine Schwester ___ mich ___, ihr zu helfen.", answer: "forderte auf", hint: "Jemand sagte früher: Bitte mach das." },
  { sentence: "Ich will meine Eltern nicht ___.", answer: "enttäuschen", hint: "Jemand ist traurig, weil etwas nicht gut ist." },
  { sentence: "Ich habe meine Eltern nicht ___.", answer: "enttäuscht", hint: "Jemand war nicht traurig, weil alles gut war." },
  { sentence: "Ich ___ meine Eltern nicht, weil ich ehrlich war.", answer: "enttäuschte", hint: "Früher war niemand traurig wegen mir." },
  { sentence: "Mein Vater will mehr Ruhe ___.", answer: "fordern", hint: "Jemand sagt stark: Ich brauche das." },
  { sentence: "Mehr Verantwortung wurde von mir ___.", answer: "gefordert", hint: "Etwas wurde stark verlangt." },
  { sentence: "Mein Vater ___ mehr Verantwortung in der Familie.", answer: "forderte", hint: "Früher sagte jemand stark: Ich brauche das." },
  { sentence: "Wir wollen das Geschenk ___.", answer: "umtauschen", hint: "Etwas geht zurück, und man bekommt etwas anderes." },
  { sentence: "Das Geschenk wurde im Geschäft ___.", answer: "umgetauscht", hint: "Etwas ging zurück, und man bekam etwas anderes." },
  { sentence: "Meine Cousine ___ das Geschenk ___.", answer: "tauschte um", hint: "Früher ging etwas zurück, und man bekam etwas anderes." },
  { sentence: "Der kleine Unfall kann das Fahrrad ___.", answer: "beschädigen", hint: "Etwas wird kaputt oder nicht mehr gut." },
  { sentence: "Das Fahrrad ist durch den Unfall ___.", answer: "beschädigt", hint: "Etwas ist kaputt oder nicht mehr gut." },
  { sentence: "Der Regen ___ das Dach.", answer: "beschädigte", hint: "Früher wurde etwas kaputt oder nicht mehr gut." },
  { sentence: "Meine Eltern wollen sich mit der Familie ___.", answer: "beschäftigen", hint: "Man macht etwas und denkt viel daran." },
  { sentence: "Meine Schwester ist mit dem Fest ___.", answer: "beschäftigt", hint: "Jemand macht gerade etwas und denkt daran." },
  { sentence: "Mein Vater ___ sich mit den Rechnungen.", answer: "beschäftigte", hint: "Früher machte jemand etwas und dachte daran." },
  { sentence: "Wir wollen unsere Großeltern am Bahnhof ___.", answer: "verabschieden", hint: "Man sagt Tschüss." },
  { sentence: "Unsere Tante wurde am Bahnhof ___.", answer: "verabschiedet", hint: "Jemand bekam ein Tschüss." },
  { sentence: "Meine Mutter ___ unsere Tante am Bahnhof.", answer: "verabschiedete", hint: "Früher sagte jemand Tschüss." },
  { sentence: "Ich möchte meine Gäste freundlich ___.", answer: "begrüßen", hint: "Man sagt Hallo." },
  { sentence: "Die Gäste wurden freundlich ___.", answer: "begrüßt", hint: "Jemand bekam ein Hallo." },
  { sentence: "Mein Großvater ___ jeden Gast.", answer: "begrüßte", hint: "Früher sagte jemand Hallo." },
  { sentence: "Mein Bruder möchte im Sommer ___.", answer: "wiederkommen", hint: "Jemand kommt noch einmal zurück." },
  { sentence: "Mein Bruder ist nach zwei Jahren ___.", answer: "wiedergekommen", hint: "Jemand ist zurückgekommen." },
  { sentence: "Mein Bruder ___ nach zwei Jahren ___.", answer: "kam wieder", hint: "Früher kam jemand zurück." },
  { sentence: "Meine Schwester will kranke Menschen ___.", answer: "pflegen", hint: "Man hilft einem kranken Menschen." },
  { sentence: "Die kranke Frau wurde zu Hause ___.", answer: "gepflegt", hint: "Ein kranker Mensch bekam Hilfe." },
  { sentence: "Meine Tante ___ ihre Mutter viele Jahre.", answer: "pflegte", hint: "Früher half jemand einem kranken Menschen." },
  { sentence: "Ich muss mich an das neue Leben ___.", answer: "gewöhnen", hint: "Etwas Neues wird normal." },
  { sentence: "Ich bin an die neue Wohnung ___.", answer: "gewöhnt", hint: "Etwas Neues ist jetzt normal." },
  { sentence: "Ich ___ mich schnell an die neue Wohnung.", answer: "gewöhnte", hint: "Früher wurde etwas Neues normal." },
  { sentence: "Meine Tante will die Kinder ___.", answer: "betreuen", hint: "Man passt auf Menschen auf und hilft ihnen." },
  { sentence: "Die Kinder wurden am Abend ___.", answer: "betreut", hint: "Jemand passte auf Menschen auf." },
  { sentence: "Der Nachbar ___ die Kinder.", answer: "betreute", hint: "Früher passte jemand auf Menschen auf." },
  { sentence: "Meine Eltern wollen eine Firma ___.", answer: "gründen", hint: "Man macht etwas Neues, zum Beispiel eine Firma." },
  { sentence: "Eine kleine Firma wurde von meinen Eltern ___.", answer: "gegründet", hint: "Etwas Neues wurde gemacht." },
  { sentence: "Mein Vater ___ einen Verein.", answer: "gründete", hint: "Früher machte jemand etwas Neues." },
  { sentence: "Ich will mich ___, öfter zu Hause zu bleiben.", answer: "entschließen", hint: "Man macht eine feste Entscheidung." },
  { sentence: "Ich habe mich ___, öfter zu Hause zu bleiben.", answer: "entschlossen", hint: "Jemand hat eine feste Entscheidung gemacht." },
  { sentence: "Ich ___ mich, meine Großmutter zu besuchen.", answer: "entschloss", hint: "Früher machte jemand eine feste Entscheidung." },
  { sentence: "Meine Familie möchte ein eigenes Haus ___.", answer: "besitzen", hint: "Etwas gehört jemandem." },
  { sentence: "Meine Eltern haben früher ein Haus ___.", answer: "besessen", hint: "Etwas hat jemandem gehört." },
  { sentence: "Meine Familie ___ früher ein kleines Haus.", answer: "besaß", hint: "Früher gehörte etwas jemandem." },
  { sentence: "Der Ausflug kann sich wirklich ___.", answer: "lohnen", hint: "Etwas ist gut und die Mühe wert." },
  { sentence: "Der Ausflug hat sich wirklich ___.", answer: "gelohnt", hint: "Etwas war gut und die Mühe wert." },
  { sentence: "Der Ausflug ___ sich für die Familie.", answer: "lohnte", hint: "Früher war etwas gut und die Mühe wert." },
  { sentence: "Wir wollen das Problem in der Familie ___.", answer: "lösen", hint: "Ein Problem geht weg." },
  { sentence: "Das Problem wurde in der Familie ___.", answer: "gelöst", hint: "Ein Problem ist weg." },
  { sentence: "Mein Bruder ___ den Streit.", answer: "löste", hint: "Früher ging ein Problem weg." }
];

const verbForms = [
  { infinitive: "auffordern", participle: "aufgefordert", preterite: "forderte auf" },
  { infinitive: "enttäuschen", participle: "enttäuscht", preterite: "enttäuschte" },
  { infinitive: "fordern", participle: "gefordert", preterite: "forderte" },
  { infinitive: "umtauschen", participle: "umgetauscht", preterite: "tauschte um" },
  { infinitive: "beschädigen", participle: "beschädigt", preterite: "beschädigte" },
  { infinitive: "beschäftigen", participle: "beschäftigt", preterite: "beschäftigte" },
  { infinitive: "verabschieden", participle: "verabschiedet", preterite: "verabschiedete" },
  { infinitive: "begrüßen", participle: "begrüßt", preterite: "begrüßte" },
  { infinitive: "wiederkommen", participle: "wiedergekommen", preterite: "kam wieder" },
  { infinitive: "pflegen", participle: "gepflegt", preterite: "pflegte" },
  { infinitive: "gewöhnen", participle: "gewöhnt", preterite: "gewöhnte" },
  { infinitive: "betreuen", participle: "betreut", preterite: "betreute" },
  { infinitive: "gründen", participle: "gegründet", preterite: "gründete" },
  { infinitive: "entschließen", participle: "entschlossen", preterite: "entschloss" },
  { infinitive: "besitzen", participle: "besessen", preterite: "besaß" },
  { infinitive: "lohnen", participle: "gelohnt", preterite: "lohnte" },
  { infinitive: "lösen", participle: "gelöst", preterite: "löste" }
];

const formLabels = {
  infinitive: "Infinitiv",
  participle: "Partizip II",
  preterite: "Präteritum"
};

const errorSearchItems = [
  { sentence: "Meine Mutter hat mich aufgefordet, früher nach Hause zu kommen.", wrong: "aufgefordet", correct: "aufgefordert" },
  { sentence: "Ich habe versucht, meine Eltern nicht zu entteuschen.", wrong: "entteuschen", correct: "enttäuschen" },
  { sentence: "Mein Vater hat mich gefordert, mehr Verantwortung in der Familie zu übernehmen.", wrong: null, correct: null },
  { sentence: "Wir sind ins Geschäft gegangen, um das beschädigte Geschenk umzutauschen.", wrong: null, correct: null },
  { sentence: "Mein kleiner Bruder hat das Handy beschädigte, aber er wollte es nicht kaputt machen.", wrong: "beschädigte", correct: "beschädigt" },
  { sentence: "Meine Eltern beschäftigen sich viel damit, die Familie zusammenzuhalten.", wrong: null, correct: null },
  { sentence: "Wir sind zum Bahnhof gegangen, um unsere Großeltern zu verabschiden.", wrong: "verabschiden", correct: "verabschieden" },
  { sentence: "Ich bin früh aufgestanden, um meine Gäste zu begrußen.", wrong: "begrußen", correct: "begrüßen" },
  { sentence: "Mein Bruder ist ins Ausland gefahren, um später mit mehr Erfahrung wiederzukomen.", wrong: "wiederzukomen", correct: "wiederzukommen" },
  { sentence: "Meine Schwester arbeitet im Krankenhaus, um kranke Menschen zu pflegen.", wrong: null, correct: null },
  { sentence: "Ich habe versucht, mich an das Familienleben in Deutschland zu gewohnen.", wrong: "gewohnen", correct: "gewöhnen" },
  { sentence: "Meine Tante arbeitet viel, um ältere Menschen zu betreuen.", wrong: null, correct: null },
  { sentence: "Meine Eltern haben eine kleine Firma gegrundet, um die Familie zu unterstützen.", wrong: "gegrundet", correct: "gegründet" },
  { sentence: "Ich habe mich entschlossen, öfter Zeit mit meiner Familie zu verbringen.", wrong: null, correct: null },
  { sentence: "Meine Großeltern arbeiten noch, um ihr eigenes Haus zu besizen.", wrong: "besizen", correct: "besitzen" },
  { sentence: "Ich habe mehr gearbeitet, um mir einen Urlaub mit meiner Familie zu leisten.", wrong: null, correct: null },
  { sentence: "Wir haben lange gesprochen, um das Problem in der Familie zu losen.", wrong: "losen", correct: "lösen" },
  { sentence: "Meine Schwester forderte mich auf, geduldiger mit unserem Bruder zu sein.", wrong: null, correct: null },
  { sentence: "Ich enttauschte meine Eltern nicht, weil ich ehrlich geblieben bin.", wrong: "enttauschte", correct: "enttäuschte" },
  { sentence: "Mein Onkel forderte mehr Ruhe, damit die Kinder schlafen konnten.", wrong: null, correct: null },
  { sentence: "Meine Cousine tauschte das Geschenk um, weil es beschädigt war.", wrong: null, correct: null },
  { sentence: "Der Regen beschadigte das Dach, und die Familie musste handeln.", wrong: "beschadigte", correct: "beschädigte" },
  { sentence: "Mein Vater beschäftigte sich am Abend mit den Rechnungen der Familie.", wrong: null, correct: null },
  { sentence: "Wir verabschiedeten unsere Tante, bevor sie nach Österreich fuhr.", wrong: null, correct: null },
  { sentence: "Mein Großvater begrüste jeden Gast mit einem warmen Lächeln.", wrong: "begrüste", correct: "begrüßte" },
  { sentence: "Nach zwei Jahren kam mein Bruder wieder zu unserer Familie zurück.", wrong: null, correct: null },
  { sentence: "Meine Tante pflegte ihre Mutter viele Jahre lang zu Hause.", wrong: null, correct: null },
  { sentence: "Ich gewohnte mich schnell an die neue Wohnung meiner Familie.", wrong: "gewohnte", correct: "gewöhnte" },
  { sentence: "Der Nachbar betreute die Kinder, als meine Eltern arbeiten mussten.", wrong: null, correct: null },
  { sentence: "Meine Eltern gründeten den Verein, um anderen Familien zu helfen.", wrong: null, correct: null },
  { sentence: "Ich entschlos mich, meine Großmutter öfter zu besuchen.", wrong: "entschlos", correct: "entschloss" },
  { sentence: "Meine Eltern besaßen früher ein kleines Haus am Stadtrand.", wrong: null, correct: null },
  { sentence: "Der Ausflug lohnte sich, weil die ganze Familie glücklich war.", wrong: null, correct: null },
  { sentence: "Mein Bruder löste den Streit, indem er ruhig mit allen sprach.", wrong: null, correct: null },
  { sentence: "Meine Mutter fordert mich auf, mehr Zeit mit der Familie zu verbringen.", wrong: null, correct: null },
  { sentence: "Ich möchte niemanden enttäuschen, besonders nicht meine Großeltern.", wrong: null, correct: null },
  { sentence: "Meine Eltern forden von uns, respektvoll miteinander zu sprechen.", wrong: "forden", correct: "fordern" },
  { sentence: "Wir tauschen die Jacke um, um meiner Schwester eine passende Größe zu besorgen.", wrong: null, correct: null },
  { sentence: "Der kleine Unfall beschädigt das Fahrrad meines Bruders.", wrong: null, correct: null },
  { sentence: "Meine Schwester bescheftigt sich damit, ein Familienfest zu planen.", wrong: "bescheftigt", correct: "beschäftigt" },
  { sentence: "Wir verabschieden unseren Cousin, bevor er zum Studium fährt.", wrong: null, correct: null },
  { sentence: "Meine Eltern begrüßen die Nachbarn, um ein gutes Verhältnis aufzubauen.", wrong: null, correct: null },
  { sentence: "Mein Bruder kommt im Sommer wieder, um die Familie zu sehen.", wrong: null, correct: null },
  { sentence: "Wir pflegen den Garten, um unseren Großeltern zu helfen.", wrong: null, correct: null },
  { sentence: "Ich gewöhne mich daran, jeden Sonntag mit der Familie zu essen.", wrong: null, correct: null },
  { sentence: "Meine Tante betreut die Kinder, um meine Eltern zu entlasten.", wrong: null, correct: null },
  { sentence: "Meine Cousine gründet eine Gruppe, um ältere Menschen zu unterstützen.", wrong: null, correct: null },
  { sentence: "Ich entschließe mich, den Streit mit meinem Bruder zu losen.", wrong: "losen", correct: "lösen" },
  { sentence: "Meine Familie besitzt ein altes Fotoalbum mit vielen Erinnerungen.", wrong: null, correct: null },
  { sentence: "Diese gemeinsame Zeit lohnt sich, weil wir einander besser verstehen.", wrong: null, correct: null }
];

let tasks = [];
let results = [];
let currentIndex = 0;
let score = 0;
let locked = false;
let selectedChoice = null;

const modeCopy = {
  mixedRound: {
    label: "Gemischte Runde",
    title: "50 Aufgaben: 10 von jedem Typ, zufällig gemischt."
  },
  sentenceBuilder: {
    label: "Satzbau",
    title: "Bringe die Wörter in die richtige Reihenfolge."
  },
  multipleChoice: {
    label: "Mehrfachauswahl",
    title: "Wähle den Satz mit der richtigen Wortstellung."
  },
  gapFill: {
    label: "Lückentext",
    title: "Schreibe das fehlende Verb in die Lücke."
  },
  formTraining: {
    label: "Formen",
    title: "Schreibe die fehlende Verbform."
  },
  errorSearch: {
    label: "Fehlersuche",
    title: "Klicke auf den Fehler oder wähle: Der Satz ist korrekt."
  }
};

const answerArea = document.querySelector("#answerArea");
const wordBank = document.querySelector("#wordBank");
const feedback = document.querySelector("#feedback");
const taskType = document.querySelector("#taskType");
const taskTitle = document.querySelector("#taskTitle");
const charToolbar = document.querySelector("#charToolbar");
const roundLabel = document.querySelector("#roundLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const progressFill = document.querySelector("#progressFill");
const checkButton = document.querySelector("#checkButton");
const clearButton = document.querySelector("#clearButton");
const nextButton = document.querySelector("#nextButton");
const finishPanel = document.querySelector("#finishPanel");
const finishText = document.querySelector("#finishText");
const reviewSummary = document.querySelector("#reviewSummary");
const reviewList = document.querySelector("#reviewList");
let gapInput = null;
let formInput = null;
let activeTextInput = null;
let selectedErrorWord = null;
let draggedWordButton = null;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = randomInt(index + 1);
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function randomInt(max) {
  if (globalThis.crypto && globalThis.crypto.getRandomValues) {
    const values = new Uint32Array(1);
    globalThis.crypto.getRandomValues(values);
    return values[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function normalizeSentence(sentence) {
  return sentence
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function tokenize(sentence) {
  return sentence.match(/[A-Za-zÄÖÜäöüß]+|[.,!?;:]/g) || [];
}

function makeMultipleChoiceOptions(sentence) {
  const sentenceIndex = sentences.indexOf(sentence);
  const wrongOptions = multipleChoiceWrongOptions[sentenceIndex] || [];
  return shuffle([sentence, ...wrongOptions]);
}

function normalizeWord(word) {
  return word
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function makeGapSentence(sentence) {
  return sentence.replace("___", '<span class="blank">_____</span>');
}

function rememberTextInput(input) {
  activeTextInput = input;
  input.addEventListener("focus", () => {
    activeTextInput = input;
  });
  input.addEventListener("click", () => {
    activeTextInput = input;
  });
  input.addEventListener("keyup", () => {
    activeTextInput = input;
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
  activeTextInput = input;
}

function createFormItems() {
  return verbForms.flatMap((forms) => {
    return ["infinitive", "participle", "preterite"].map((missingForm) => ({
      forms,
      missingForm,
      answer: forms[missingForm]
    }));
  });
}

function createTasksForMode(mode, count) {
  if (mode === "gapFill") {
    return shuffle(gapFillItems).slice(0, count).map((item) => ({
      mode,
      sentence: item.sentence,
      answer: normalizeSentence(item.sentence.replace("___", item.answer)),
      words: [],
      options: [],
      gapAnswer: item.answer,
      gapSentence: makeGapSentence(item.sentence),
      hint: item.hint
    }));
  }

  if (mode === "formTraining") {
    return shuffle(createFormItems()).slice(0, count).map((item) => ({
      mode,
      sentence: "",
      answer: item.answer,
      words: [],
      options: [],
      forms: item.forms,
      missingForm: item.missingForm
    }));
  }

  if (mode === "errorSearch") {
    return shuffle(errorSearchItems).slice(0, count).map((item) => ({
      mode,
      sentence: item.sentence,
      answer: item.correct,
      words: [],
      options: [],
      wrong: item.wrong,
      correct: item.correct
    }));
  }

  return shuffle(sentences).slice(0, count).map((sentence) => {
    const sentenceIndex = sentences.indexOf(sentence);
    const words = tokenize(sentence);
    const answer = normalizeSentence(sentence);
    let shuffledWords = shuffle(words);

    while (normalizeSentence(shuffledWords.join(" ")) === answer) {
      shuffledWords = shuffle(words);
    }

    return {
      mode,
      sentence,
      answer,
      words: shuffledWords,
      options: mode === "multipleChoice" ? makeMultipleChoiceOptions(sentence) : []
    };
  });
}

function createTasks() {
  const mixedTasks = TASK_TYPES.flatMap((taskType) => createTasksForMode(taskType, MIXED_TASKS_PER_TYPE));
  return shuffle(mixedTasks);
}

function selectedAnswerForTask(taskMode) {
  if (taskMode === "sentenceBuilder") {
    return Array.from(answerArea.querySelectorAll(".word-button"))
      .map((button) => button.textContent)
      .join(" ");
  }

  if (taskMode === "multipleChoice") {
    return selectedChoice;
  }

  if (taskMode === "gapFill") {
    return gapInput.value;
  }

  if (taskMode === "formTraining") {
    return formInput.value;
  }

  if (taskMode === "errorSearch") {
    return selectedErrorWord === "__correct__" ? "Der Satz ist korrekt." : selectedErrorWord;
  }

  return "";
}

function expectedAnswerForTask(task) {
  if (task.mode === "gapFill") return task.gapAnswer;
  if (task.mode === "formTraining") return task.answer;
  if (task.mode === "errorSearch") return task.correct || "Der Satz ist korrekt.";
  return task.sentence;
}

function promptForTask(task) {
  if (task.mode === "gapFill") return task.sentence.replace("___", "_____");
  if (task.mode === "formTraining") {
    return `${formLabels.infinitive}: ${task.missingForm === "infinitive" ? "_____" : task.forms.infinitive} | ${formLabels.participle}: ${task.missingForm === "participle" ? "_____" : task.forms.participle} | ${formLabels.preterite}: ${task.missingForm === "preterite" ? "_____" : task.forms.preterite}`;
  }
  return task.sentence;
}

function makeReviewLine(label, value) {
  const line = document.createElement("p");
  line.className = "review-line";

  const labelElement = document.createElement("strong");
  labelElement.textContent = `${label}: `;

  line.append(labelElement, document.createTextNode(value));
  return line;
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
    const insertBefore = getDragInsertTarget(container, event.clientX);
    container.insertBefore(draggedWordButton, insertBefore);
  }
}

function handleWordDrop(event) {
  if (!draggedWordButton || locked) return;
  event.preventDefault();
  const container = event.currentTarget;

  if (container === answerArea) {
    const insertBefore = getDragInsertTarget(container, event.clientX);
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
  button.textContent = word;
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    if (locked) {
      event.preventDefault();
      return;
    }
    draggedWordButton = button;
    button.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", word);
    showWordDropHints();
  });
  button.addEventListener("dragend", () => {
    button.classList.remove("dragging");
    draggedWordButton = null;
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
  button.textContent = option;
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
  sentence.innerHTML = task.gapSentence;

  const hint = document.createElement("p");
  hint.className = "gap-hint";
  hint.textContent = `Hinweis: ${task.hint}`;

  gapInput = document.createElement("input");
  gapInput.type = "text";
  gapInput.className = "gap-input";
  gapInput.autocomplete = "off";
  gapInput.spellcheck = false;
  gapInput.placeholder = "Fehlendes Verb";
  rememberTextInput(gapInput);
  gapInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  answerArea.append(sentence, hint, gapInput);
  gapInput.focus();
}

function renderFormTraining(task) {
  const grid = document.createElement("div");
  grid.className = "form-grid";

  ["infinitive", "participle", "preterite"].forEach((key) => {
    const card = document.createElement("div");
    card.className = `form-card${key === task.missingForm ? " form-missing" : ""}`;

    const label = document.createElement("span");
    label.className = "form-label";
    label.textContent = formLabels[key];

    const value = document.createElement("strong");
    value.className = "form-value";
    value.textContent = key === task.missingForm ? "_____" : task.forms[key];

    card.append(label, value);
    grid.appendChild(card);
  });

  formInput = document.createElement("input");
  formInput.type = "text";
  formInput.className = "gap-input";
  formInput.autocomplete = "off";
  formInput.spellcheck = false;
  formInput.placeholder = `Fehlende Form: ${formLabels[task.missingForm]}`;
  rememberTextInput(formInput);
  formInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  answerArea.append(grid, formInput);
  formInput.focus();
}

function tokenizeDisplaySentence(sentence) {
  return sentence.match(/[A-Za-zÄÖÜäöüß]+|[.,!?;:]/g) || [];
}

function makeErrorWordButton(token, task) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "error-word";
  button.textContent = token;
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
    sentence.appendChild(makeErrorWordButton(token, task));
  });

  const correctButton = document.createElement("button");
  correctButton.type = "button";
  correctButton.className = "choice-button correct-sentence-button";
  correctButton.textContent = "Der Satz ist korrekt.";
  correctButton.addEventListener("click", () => {
    if (locked) return;
    selectedErrorWord = "__correct__";
    answerArea.querySelectorAll(".error-word").forEach((word) => word.classList.remove("selected"));
    answerArea.querySelectorAll(".correct-sentence-button").forEach((button) => {
      button.classList.remove("selected");
    });
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
  const taskNumber = Math.min(currentIndex + 1, ROUND_LENGTH);
  roundLabel.textContent = `Runde ${taskNumber} / ${ROUND_LENGTH}`;
  scoreLabel.textContent = `${score} richtig`;
  progressFill.style.width = `${(currentIndex / ROUND_LENGTH) * 100}%`;
}

function renderTask() {
  locked = false;
  selectedChoice = null;
  selectedErrorWord = null;
  gapInput = null;
  formInput = null;
  activeTextInput = null;
  answerArea.innerHTML = "";
  wordBank.innerHTML = "";
  hideFeedback();

  const task = tasks[currentIndex];
  const taskMode = task.mode;
  taskType.textContent = modeCopy[taskMode].label;
  taskTitle.textContent = modeCopy[taskMode].title;

  if (taskMode === "multipleChoice") {
    charToolbar.classList.add("hidden");
    answerArea.classList.add("choice-list");
    answerArea.classList.remove("sentence-builder");
    answerArea.classList.remove("gap-fill");
    answerArea.classList.remove("form-training");
    answerArea.classList.remove("error-search");
    wordBank.classList.add("hidden");
    clearButton.classList.add("hidden");
    task.options.forEach((option) => answerArea.appendChild(makeChoiceButton(option)));
  } else if (taskMode === "gapFill") {
    charToolbar.classList.remove("hidden");
    answerArea.classList.remove("choice-list");
    answerArea.classList.remove("sentence-builder");
    answerArea.classList.add("gap-fill");
    answerArea.classList.remove("form-training");
    answerArea.classList.remove("error-search");
    wordBank.classList.add("hidden");
    clearButton.classList.remove("hidden");
    renderGapFill(task);
  } else if (taskMode === "formTraining") {
    charToolbar.classList.remove("hidden");
    answerArea.classList.remove("choice-list");
    answerArea.classList.remove("sentence-builder");
    answerArea.classList.remove("gap-fill");
    answerArea.classList.add("form-training");
    answerArea.classList.remove("error-search");
    wordBank.classList.add("hidden");
    clearButton.classList.remove("hidden");
    renderFormTraining(task);
  } else if (taskMode === "errorSearch") {
    charToolbar.classList.add("hidden");
    answerArea.classList.remove("choice-list");
    answerArea.classList.remove("sentence-builder");
    answerArea.classList.remove("gap-fill");
    answerArea.classList.remove("form-training");
    answerArea.classList.add("error-search");
    wordBank.classList.add("hidden");
    clearButton.classList.add("hidden");
    renderErrorSearch(task);
  } else {
    charToolbar.classList.add("hidden");
    answerArea.classList.add("sentence-builder");
    answerArea.classList.remove("choice-list");
    answerArea.classList.remove("gap-fill");
    answerArea.classList.remove("form-training");
    answerArea.classList.remove("error-search");
    wordBank.classList.remove("hidden");
    clearButton.classList.remove("hidden");
    task.words.forEach((word) => wordBank.appendChild(makeWordButton(word)));
  }

  checkButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  finishPanel.classList.add("hidden");
  updateStats();
}

function userAnswer() {
  return normalizeSentence(
    Array.from(answerArea.querySelectorAll(".word-button"))
      .map((button) => button.textContent)
      .join(" ")
  );
}

function checkAnswer() {
  if (locked) return;
  const task = tasks[currentIndex];
  const taskMode = task.mode;

  if (taskMode === "sentenceBuilder" && !answerArea.children.length) {
    setFeedback("bad", "Wähle zuerst die Wörter in der richtigen Reihenfolge aus.");
    return;
  }

  if (taskMode === "multipleChoice" && !selectedChoice) {
    setFeedback("bad", "Wähle zuerst eine Antwort aus.");
    return;
  }

  if (taskMode === "gapFill" && !normalizeWord(gapInput.value)) {
    setFeedback("bad", "Schreibe zuerst das fehlende Verb in die Lücke.");
    return;
  }

  if (taskMode === "formTraining" && !normalizeWord(formInput.value)) {
    setFeedback("bad", "Schreibe zuerst die fehlende Verbform.");
    return;
  }

  if (taskMode === "errorSearch" && !selectedErrorWord) {
    setFeedback("bad", "Klicke zuerst auf den Fehler oder auf „Der Satz ist korrekt“.");
    return;
  }

  const isCorrect = taskMode === "multipleChoice"
    ? normalizeSentence(selectedChoice) === task.answer
    : taskMode === "gapFill"
      ? normalizeWord(gapInput.value) === normalizeWord(task.gapAnswer)
      : taskMode === "formTraining"
        ? normalizeWord(formInput.value) === normalizeWord(task.answer)
        : taskMode === "errorSearch"
          ? task.wrong ? selectedErrorWord === task.wrong : selectedErrorWord === "__correct__"
          : userAnswer() === task.answer;
  const submittedAnswer = selectedAnswerForTask(taskMode);
  const expectedAnswer = expectedAnswerForTask(task);

  results.push({
    index: currentIndex + 1,
    mode: taskMode,
    label: modeCopy[taskMode].label,
    prompt: promptForTask(task),
    submitted: submittedAnswer,
    expected: expectedAnswer,
    correct: isCorrect
  });
  locked = true;

  if (isCorrect) {
    score += 1;
    const successText = taskMode === "errorSearch" && task.correct
      ? `Sehr gut, das ist richtig. Die richtige Schreibweise ist: ${task.correct}`
      : "Sehr gut, das ist richtig.";
    setFeedback("good", successText);
  } else {
    const correction = taskMode === "gapFill" ? task.gapAnswer : taskMode === "formTraining" ? task.answer : taskMode === "errorSearch" ? (task.correct ? task.correct : "Der Satz ist korrekt.") : task.sentence;
    setFeedback("bad", `Hoppla, das war ein kleiner Fehler. Die richtige Version ist: ${correction}`);
  }

  if (taskMode === "multipleChoice") {
    answerArea.querySelectorAll(".choice-button").forEach((button) => {
      const isRightChoice = normalizeSentence(button.textContent) === task.answer;
      const isSelectedWrong = button.textContent === selectedChoice && !isCorrect;
      button.classList.toggle("correct", isRightChoice);
      button.classList.toggle("incorrect", isSelectedWrong);
    });
  }

  if (taskMode === "gapFill" && gapInput) {
    gapInput.disabled = true;
  }

  if (taskMode === "formTraining" && formInput) {
    formInput.disabled = true;
  }

  if (taskMode === "errorSearch") {
    answerArea.querySelectorAll(".error-word").forEach((button) => {
      button.disabled = true;
      const isCorrectWord = task.wrong && button.textContent === task.wrong;
      const isSelectedWrong = selectedErrorWord === button.textContent && !isCorrect;
      button.classList.toggle("correct", Boolean(isCorrectWord));
      button.classList.toggle("incorrect", Boolean(isSelectedWrong));
    });
    const correctSentenceButton = answerArea.querySelector(".choice-button");
    correctSentenceButton.disabled = true;
    correctSentenceButton.classList.toggle("correct", !task.wrong);
    correctSentenceButton.classList.toggle("incorrect", selectedErrorWord === "__correct__" && !isCorrect);
  }

  checkButton.classList.add("hidden");
  clearButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
  updateStats();
}

function clearAnswer() {
  if (locked) return;
  const taskMode = tasks[currentIndex]?.mode;

  if (taskMode === "gapFill" && gapInput) {
    gapInput.value = "";
    gapInput.focus();
    hideFeedback();
    return;
  }

  if (taskMode === "formTraining" && formInput) {
    formInput.value = "";
    formInput.focus();
    hideFeedback();
    return;
  }
  Array.from(answerArea.children).forEach((button) => wordBank.appendChild(button));
  hideFeedback();
}

function nextTask() {
  currentIndex += 1;
  progressFill.style.width = `${(currentIndex / ROUND_LENGTH) * 100}%`;

  if (currentIndex >= ROUND_LENGTH) {
    showFinish();
    return;
  }

  renderTask();
}

function showFinish() {
  document.querySelector(".workspace").classList.add("hidden");
  finishPanel.classList.remove("hidden");
  roundLabel.textContent = `Runde ${ROUND_LENGTH} / ${ROUND_LENGTH}`;
  scoreLabel.textContent = `${score} richtig`;
  finishText.textContent = `Du hast ${score} von ${ROUND_LENGTH} Aufgaben richtig gelöst.`;
  reviewSummary.textContent = `${results.length} Antworten gespeichert, ${results.filter((result) => !result.correct).length} Fehler.`;
  reviewList.innerHTML = "";

  results.forEach((result) => {
    const item = document.createElement("article");
    item.className = `review-item ${result.correct ? "correct" : "mistake"}`;

    const meta = document.createElement("div");
    meta.className = "review-meta";
    const metaTask = document.createElement("span");
    metaTask.textContent = `${result.index}. ${result.label}`;
    const metaStatus = document.createElement("span");
    metaStatus.textContent = result.correct ? "Richtig" : "Fehler";
    meta.append(metaTask, metaStatus);

    const prompt = makeReviewLine("Aufgabe", result.prompt);
    const submitted = makeReviewLine("Deine Antwort", result.submitted || "-");
    const expected = makeReviewLine("Richtig", result.expected);

    item.append(meta, prompt, submitted, expected);
    reviewList.appendChild(item);
  });
}

function startRound() {
  tasks = createTasks();
  results = [];
  currentIndex = 0;
  score = 0;
  document.querySelector(".workspace").classList.remove("hidden");
  renderTask();
}

checkButton.addEventListener("click", checkAnswer);
clearButton.addEventListener("click", clearAnswer);
nextButton.addEventListener("click", nextTask);
charToolbar.querySelectorAll("button[data-char]").forEach((button) => {
  button.addEventListener("click", () => insertGermanCharacter(button.dataset.char));
});
setupWordDropZone(answerArea);
setupWordDropZone(wordBank);

startRound();
