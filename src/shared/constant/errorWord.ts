const forbiddenWords = [
  "педерастический",
  "однодырочники",
  "педерастина",
  "пиндостанцы",
  "говносерка",
  "живоглотка",
  "педерастия",
  "ускоглазый",
  "черножопые",
  "черножопый",
  "чернозадый",
  "черномазый",
  "азуроебам",
  "дегенерат",
  "пидораска",
  "пиндостан",
  "говномес",
  "зигхайль",
  "педераси",
  "педераст",
  "педеруга",
  "пидарасы",
  "пиндосов",
  "черножоп",
  "чернозад",
  "черномаз",
  "азуроеб",
  "говноёб",
  "гомосек",
  "долбаеб",
  "жидовня",
  "опездал",
  "педерас",
  "педиков",
  "педобир",
  "педрила",
  "педрило",
  "пидарас",
  "пидрило",
  "пиндосы",
  "циганин",
  "пидор",
  "волоеб",
  "даунит",
  "жидяра",
  "ниггер",
  "педики",
  "педрил",
  "пидарг",
  "пидары",
  "пидоры",
  "пидрик",
  "пидрил",
  "пиндос",
  "сучара",
  "сучары",
  "уебаны",
  "хачами",
  "гомик",
  "гомос",
  "жидам",
  "жидах",
  "жидов",
  "жидяр",
  "калич",
  "курва",
  "нигга",
  "нигер",
  "нигро",
  "педик",
  "пидер",
  "сукой",
  "уебак",
  "уебищ",
  "уебки",
  "хачам",
  "хачар",
  "хачах",
  "хачей",
  "хачик",
  "хачил",
  "хачом",
  "пидар",
  "eблaн",
  "жида",
  "жиде",
  "жиду",
  "педр",
  "пидр",
  "сука",
  "Cука",
  "суки",
  "хача",
  "хаче",
  "хачи",
  "чурк",
  "pidaras",
  "pidoras",
  "жид",
  "хач",
  "pedik",
  "pidar",
  "pidor",
  "cyka",
  "pido",
  "suka",
  "выблядки",
  "далбаеб",
  "долбаёб",
  "долбоебы",
  "долбоёбы",
  "пидрила",
  "хуеплет",
  "дoлбaёб",
  "ослаеб",
  "уебан",
  "dolbaeb",
  "xyecoc",
  "хуеплеты",
  "чмо",
  "хуй",
  "пизда",
  "Пирадасина",
];

const forbiddenPattern = forbiddenWords.map((word) => `(?:${word})`).join("|");

const patternText = new RegExp(
  `^(?!.*(?:${forbiddenPattern})).*[a-zA-Zа-яА-ЯёЁ\\s]+$`
);

export default patternText;
