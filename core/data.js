const MALE = 1;
const FEMALE = 2;

const PLACE_NAME = 0;
const PLACE_POVERTY = 1;
const PLACE_DANGER = 2;

const MAX_FEMALE_NAMES = 17;
const MAX_MALE_NAMES = 13;

const MAX_NEWS = 16;

const MAX_ACTIVITIES = 14;

const PAGE = 1;
const DIALOG = 2;

const MAX_FESTIVALS = 8;
const MAX_MOVIES = 10;

const ACTIVITY_NAME = 0;
const ACTIVITY_ID = 1;
const ACTIVITY_VIEW = 2;
const ACTIVITY_AGE = 3;

const MOTHER = 1;
const FATHER = 2;
const SIBLING = 3;

const VERY_POOR = 1;
const POOR = 2;
const AVERAGE = 3;
const RICH = 4;
const VERY_RICH = 5;

var places = [
  /* [Place name], [Poverty], [Danger] */
  ["București, Dorobanți", 2, 1],
  ["București, Titan", 5, 3],
  ["București, Ferentari", 10, 10],
  ["București, Colentina", 7, 6],
  ["București, Pantelimon", 7, 7],
  ["Cluj-Napoca, jud. Cluj", 4, 4],
  ["Bârlad, jud. Vaslui", 6, 5],
  ["Murgeni, jud. Vaslui", 8, 10],
  ["Siliștea, jud. Vaslui", 10, 6]
];

var movies = [
  /* [Movie], [Category] */
  ["Mamaia Bici", "Comedie"],
  ["5Gay: Un altfel de Paște", "Dramă"],
  ["Once upon a time in Ferentari", "Comedie"],
  ["SOV, The Wolf of Dâmbovița", "Biografic"],
  ["Biruința", "Dramă"],
  ["Lista lui Vadim", "Comedie"],
  ["Moartea domnului Iliescu", "Comedie"],
  ["Mihaela, dragostea mea", "Romantic"],
  ["Singur acas", "Acțiune"],
  ["Vulpița și Viorel la mare și la munte", "Dramă"]
]

var festivals = [
  ["NESPUS", 1000, 1],
  ["#Niciodatămarea", 800, 0.9],
  ["Castelul Electric", 600, 0.8],
  ["xSEGA Festival", 500, 0.8],
  ["Valuri de soare", 450, 0.8],
  ["După dealuri", 250, 0.6],
  ["PENInSula", 80, 0.4],
  ["Festivalul Verii Bârlad", 0, 0.1]
]

var activities = [
  /* [Activity], [ID], [View] [MinAge] */
  ["👨‍⚕️ Consult medical", "MEDICAL_ASSISTANCE", PAGE, 1],
  ["😈 Comite o infracțiune", "COMMIT_CRIME", PAGE, 14],
  ["👯‍♀️ Marchează la vagaboante", "bitches", PAGE, 18],
  ["🎫 Festivale", "festivals", PAGE, 16],
  ["🎬 Cinema Victoria", "movie", DIALOG, 8],
  ["❤️ Găsește-ți dragostea", "FIND_A_DATE", PAGE, 18],
  ["💰 6/49", "PLAY_LOTO", DIALOG, 18],
  ["🏖️ Vacanță", "GO_TO_HOLIDAY", PAGE, 16],
  ["⛪ Biserică", "GO_TO_CHURCH", DIALOG, 7],
  ["✂️ Operații estetice", "PLASTIC_SURGERY", PAGE, 18],
  ["🏳️‍🌈 Orientare", "DECLARE_SEXUALITY", PAGE, 16],
  ["🚗 Școală de șoferi", "GO_TO_DRIVERS_SCHOOL", PAGE, 18],
  ["📚 Bibliotecă", "GO_TO_LIBRARY", PAGE, 12],
  ["🏋️ Sală", "GO_TO_GYM", PAGE, 16]
];

var news = [
  ["Fostul președinte al României, Ion Iliescu, s-a stins din viață la onorabila vârstă de 169 de ani."],
  ["Gigantul IT sentimente.ro a cumpărat Google+."],
  ["Klaus Iohannis a salutat victoria candidatului la Primăria București, Nicușor Dan, din urmă cu 10 ani."],
  ["Din toamnă emisiunea Dan Diaconescu în Direct revine pe Trinitas."],
  ["Elodia a fost găsită! Prinsese aglomerație pe DN1."],
  ["Ciprian Marica a depășit recordul de goluri marcate pentru echipa națională, recordul precedent aparținând lui Ilie Năstase."],
  ["Adrian Minune va fi invitatul special al festivalului Nespus de anul acesta."],
  ["Mickey Mouse și-a anunțat a 10a candidatură la președinția țării."],
  ["O fostă primăriță a capitalei a fost operată după ce i-a fost găsit un fier beton de 10m în intestine."],
  ["Florin Salam a fost declarat noul Rege al României."],
  ["Fostul mare fotbalist Gică Hagi și fosta șefă de la Cotroceni, Viorica Dăncilă, vor deschide o fabrică de perle la Constanța."],
  ["Reforma educației a fost adoptată. De astăzi la orele de Geografie, prima lecție va fi despre melodia lui Marius de la Focșani, Patru puncte cardinale."],
  ["Andrei Ciobanu a primit premiul Nobel pentru literatură pentru opera sa, „Suge-o, Ramona!”."],
  ["Filmul „Miami Bici” a câștigat premiul Oscar pentru cel mai bun film!"],
  ["Filmul „5Gang: Un altfel de Crăciun” a câștigat premiul Zmeura de aur. Felicitări!"],
  ["Marele actor Silviu Gherman este noul președinte al României!"],
  ["Un băiețel pe nume Petru Dimitriu, a doborât recordul pentru cea mai mică pulă din istorie."]
];

var femaleNames = [
  "Andreea", "Antonia", "Adriana", "Alexandra", "Alexia", "Alina",
  "Bianca", "Carmen", "Diana", "Ioana", "Ilinca", "Mihaela", "Magda",
  "Roxana", "Ramona", "Teodora", "Simona"
];

var maleNames = [
  "Andrei", "Antonio", "Adrian", "Alexandru", "Alin", "Ion",
  "Mihai", "Mario", "Tudor", "Victor", "Sorin", "Silviu", "Sergiu"
];
