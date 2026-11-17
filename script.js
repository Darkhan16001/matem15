
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Көрсеткіштік теңсіздіктер және олардың жүйелері",
  goal: "Көрсеткіштік теңсіздіктерді шешу, функцияның өсу және кему қасиеттерін пайдалану, теңсіздік таңбасын дұрыс өзгерту, сан аралықтарын табу және теңсіздіктер жүйелерін шешуді меңгеру."
};

// ======================================
// 5 ТҮСІНДІРМЕ
// ӨЗІНДІК ЖҰМЫС ЖОҚ
// ======================================

const theory = [
  {
    title: "Көрсеткіштік теңсіздік дегеніміз не?",

    definition:
      "Белгісіз айнымалысы дәреже көрсеткішінде орналасқан теңсіздік көрсеткіштік теңсіздік деп аталады. Мұндай теңсіздіктің шешімі — оны қанағаттандыратын барлық нақты сандар жиыны.",

    explain:
      "Көрсеткіштік теңсіздікті түсіну үшін 2 санының дәрежелерін қарастырайық. Екінің екінші дәрежесі 4, үшінші дәрежесі 8, төртінші дәрежесі 16 болады. Демек, көрсеткіш өскен сайын функция мәні артады. Сондықтан екі санының x дәрежесі 8-ден үлкен болуы үшін x саны 3-тен үлкен болуы керек.",

    rule:
      "Көрсеткіштік теңсіздікті шешкенде алдымен негізді анықтап, оның 1-ден үлкен немесе кіші екеніне назар аударамыз. Негіз 1-ден үлкен болса, функция өседі.",

    formula:
      M`a>1:\quad a^u>a^v\iff u>v`,

    steps: [
      M`2^x>8`,
      M`8=2^3`,
      M`2^x>2^3`,
      M`x>3`,
      M`\boxed{x\in(3;+\infty)}`
    ],

    warning:
      "Негізі бірден кіші функцияда бұл ереже өзгереді. Сондықтан теңсіздікті шешер алдында міндетті түрде негізді тексеріңдер."
  },

  {
    title: "Негізі 1-ден үлкен теңсіздіктер",

    definition:
      "Негізі 1-ден үлкен көрсеткіштік функция өспелі болады. Сондықтан көрсеткіштік өрнектердің негіздері бірдей болған жағдайда теңсіздік таңбасы сақталады.",

    explain:
      "Мысалы, 3 санының x плюс 1 дәрежесі 81-ден кіші делік. 81 саны 3-тің төртінші дәрежесі екенін білеміз. Екі жақтың негізін 3 түрінде жазған соң, x плюс 1 және 4 көрсеткіштерін салыстырамыз. Функция өспелі болғандықтан, теңсіздік бағыты өзгермейді.",

    rule:
      "Егер a саны 1-ден үлкен болса, a негізіндегі дәрежелерді салыстырғанда үлкен таңбасы үлкен, кіші таңбасы кіші болып қалады.",

    formula:
      M`a>1:\quad a^u<a^v\iff u<v`,

    steps: [
      M`3^{x+1}<81`,
      M`81=3^4`,
      M`3^{x+1}<3^4`,
      M`x+1<4`,
      M`x<3`,
      M`\boxed{x\in(-\infty;3)}`
    ],

    warning:
      "Бұл мысалда 3 шекара нүктесі жауапқа кірмейді, себебі теңсіздік қатаң түрде берілген."
  },

  {
    title: "Негізі 0 мен 1 арасындағы теңсіздіктер",

    definition:
      "Негізі нөлден үлкен, бірақ бірден кіші көрсеткіштік функция кемімелі болады. Бұл жағдайда көрсеткіш артқан сайын функция мәні азаяды.",

    explain:
      "Бір екінші санының бірінші дәрежесі бір екінші, екінші дәрежесі бір төртінші, үшінші дәрежесі бір сегізінші. Көрсеткіш үлкейген сайын нәтижелер кішірейеді. Сондықтан осындай функцияда үлкен нәтижеге кіші көрсеткіш сәйкес келеді. Сол үшін теңсіздік таңбасын қарама-қарсыға өзгерту керек.",

    rule:
      "Егер 0 мен 1 арасында орналасқан негіз қолданылса, көрсеткіштерді салыстырған кезде үлкен таңбасы кішіге, ал кіші таңбасы үлкенге өзгереді.",

    formula:
      M`0<a<1:\quad a^u>a^v\iff u<v`,

    steps: [
      M`\left(\frac12\right)^x>\frac18`,
      M`\frac18=\left(\frac12\right)^3`,
      M`\left(\frac12\right)^x>\left(\frac12\right)^3`,
      M`x<3`,
      M`\boxed{x\in(-\infty;3)}`
    ],

    warning:
      "Ең маңызды ереже: негіз 0 мен 1 арасында жатса, теңсіздік белгісін керісінше ауыстырамыз."
  },

  {
    title: "Бірдей негізге келтіру әдісі",

    definition:
      "Егер теңсіздіктің екі жағындағы сандар әртүрлі негізбен жазылса, оларды ортақ негіздің дәрежелері түрінде көрсетуге болады. Бұл әдіс теңсіздікті шешуді жеңілдетеді.",

    explain:
      "Мысалы, төрттің x дәрежесі 32-ден үлкен немесе тең болсын. Төрт санын екінің квадраты түрінде, ал 32 санын екінің бесінші дәрежесі түрінде жазамыз. Дәреженің дәрежесі ережесі арқылы екі x көрсеткіші алынады. Одан кейін сызықтық теңсіздік шешіледі.",

    rule:
      "Дәреженің дәрежесін есептеген кезде көрсеткіштер көбейтіледі. Ортақ негіз бірден үлкен болса, теңсіздік бағыты сақталады.",

    formula:
      M`(a^m)^n=a^{mn}`,

    steps: [
      M`4^x\geq32`,
      M`(2^2)^x\geq2^5`,
      M`2^{2x}\geq2^5`,
      M`2x\geq5`,
      M`x\geq\frac52`,
      M`\boxed{x\in\left[\frac52;+\infty\right)}`
    ],

    warning:
      "Дәреженің дәрежесін есептегенде көрсеткіштер қосылмайды, көбейтіледі."
  },

  {
    title: "Көрсеткіштік теңсіздіктер жүйесі",

    definition:
      "Көрсеткіштік теңсіздіктер жүйесі бірнеше теңсіздіктен тұрады. Олардың барлығы бір уақытта орындалуы керек. Сондықтан жауап жеке теңсіздіктер шешімдерінің қиылысуы болады.",

    explain:
      "Мысалы, екі санының x дәрежесі 4-тен кем емес, бірақ 32-ден кіші болуы қажет. Бірінші теңсіздік бойынша x кем дегенде 2-ге тең. Екінші теңсіздік бойынша x 5-тен кіші. Екі шартты қатар қанағаттандыратын мәндер 2 мен 5 арасындағы сандар болады.",

    rule:
      "Әр теңсіздікті жеке шығарып, кейін олардың ортақ аралығын табамыз. Егер ортақ бөлігі жоқ болса, жүйенің шешімі жоқ.",

    formula:
      M`\begin{cases}2^x\geq4\\2^x<32\end{cases}`,

    steps: [
      M`2^x\geq4\Longrightarrow x\geq2`,
      M`2^x<32\Longrightarrow x<5`,
      M`\begin{cases}x\geq2\\x<5\end{cases}`,
      M`\boxed{x\in[2;5)}`
    ],

    warning:
      "Теңсіздіктер жүйесінде аралықтарды біріктірмейміз. Олардың тек қиылысуын аламыз."
  }
];

// ======================================
// 10 КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// ======================================

const notes = [
  {
    title: "Көрсеткіштік теңсіздіктің анықтамасы",

    text:
      "Көрсеткіштік теңсіздікте айнымалы дәреженің көрсеткішінде тұрады. Мұндай теңсіздіктің шешімі оны қанағаттандыратын нақты сандар жиыны болады. Шешімді сан аралығымен жазуға болады.",

    formula: M`a^{f(x)}>a^{g(x)}`,

    example: [
      M`2^x\geq8`,
      M`2^x\geq2^3`,
      M`x\geq3`,
      M`\boxed{[3;+\infty)}`
    ],

    self: [
      {
        q: M`3^x\geq27`,
        steps: [M`3^x\geq3^3`, M`x\geq3`],
        answer: M`\boxed{[3;+\infty)}`
      },
      {
        q: M`5^x>125`,
        steps: [M`5^x>5^3`, M`x>3`],
        answer: M`\boxed{(3;+\infty)}`
      }
    ]
  },

  {
    title: "Өспелі көрсеткіштік функция",

    text:
      "Егер көрсеткіштік функцияның негізі бірден үлкен болса, функция барлық нақты сандар жиынында өседі. Аргумент артқан сайын функция мәні де артады. Сондықтан теңсіздік таңбасы өзгермейді.",

    formula: M`a>1:\quad a^u>a^v\iff u>v`,

    example: [
      M`2^{x+1}>16`,
      M`x+1>4`,
      M`x>3`,
      M`\boxed{(3;+\infty)}`
    ],

    self: [
      {
        q: M`3^{x+2}>81`,
        steps: [M`x+2>4`, M`x>2`],
        answer: M`\boxed{(2;+\infty)}`
      },
      {
        q: M`2^{x-1}\geq8`,
        steps: [M`x-1\geq3`, M`x\geq4`],
        answer: M`\boxed{[4;+\infty)}`
      }
    ]
  },

  {
    title: "Кемімелі көрсеткіштік функция",

    text:
      "Негізі нөл мен бір арасында болса, көрсеткіштік функция кемиді. Аргумент ұлғайған сайын функция мәні азаяды. Сондықтан көрсеткіштерді салыстырғанда теңсіздік таңбасы кері бағытқа өзгереді.",

    formula: M`0<a<1:\quad a^u>a^v\iff u<v`,

    example: [
      M`\left(\frac12\right)^x>\frac14`,
      M`\left(\frac12\right)^x>\left(\frac12\right)^2`,
      M`x<2`,
      M`\boxed{(-\infty;2)}`
    ],

    self: [
      {
        q: M`\left(\frac13\right)^x\geq\frac1{27}`,
        steps: [
          M`\left(\frac13\right)^x\geq\left(\frac13\right)^3`,
          M`x\leq3`
        ],
        answer: M`\boxed{(-\infty;3]}`
      },
      {
        q: M`\left(\frac12\right)^x<\frac1{16}`,
        steps: [
          M`\left(\frac12\right)^x<\left(\frac12\right)^4`,
          M`x>4`
        ],
        answer: M`\boxed{(4;+\infty)}`
      }
    ]
  },

  {
    title: "Қатаң теңсіздіктер",

    text:
      "Қатаң теңсіздіктер үлкен немесе кіші таңбаларымен жазылады. Мұндай теңсіздіктерде шекара нүктесі жауапқа кірмейді. Сондықтан аралық шеті дөңгелек жақшамен белгіленеді.",

    formula: M`x>3\Longrightarrow(3;+\infty)`,

    example: [
      M`2^x<16`,
      M`x<4`,
      M`\boxed{(-\infty;4)}`
    ],

    self: [
      {
        q: M`4^x<64`,
        steps: [M`4^x<4^3`, M`x<3`],
        answer: M`\boxed{(-\infty;3)}`
      },
      {
        q: M`3^x>9`,
        steps: [M`3^x>3^2`, M`x>2`],
        answer: M`\boxed{(2;+\infty)}`
      }
    ]
  },

  {
    title: "Қатаң емес теңсіздіктер",

    text:
      "Қатаң емес теңсіздікте үлкен немесе тең, кіші немесе тең таңбалары қолданылады. Теңдік орындалатын шекара нүктесі шешімге кіреді. Сондықтан квадрат жақша қойылады.",

    formula: M`x\leq4\Longrightarrow(-\infty;4]`,

    example: [
      M`2^x\leq32`,
      M`x\leq5`,
      M`\boxed{(-\infty;5]}`
    ],

    self: [
      {
        q: M`5^x\leq125`,
        steps: [M`5^x\leq5^3`, M`x\leq3`],
        answer: M`\boxed{(-\infty;3]}`
      },
      {
        q: M`2^{x+1}\geq16`,
        steps: [M`x+1\geq4`, M`x\geq3`],
        answer: M`\boxed{[3;+\infty)}`
      }
    ]
  },

  {
    title: "Бірдей негізге келтіру",

    text:
      "Әртүрлі сандарды ортақ негіздің дәрежелері түрінде жазуға болады. Бұл көрсеткіштік теңсіздікті қарапайым сызықтық теңсіздікке айналдырады. Дәреженің дәрежесінде көрсеткіштер көбейтіледі.",

    formula: M`(a^m)^n=a^{mn}`,

    example: [
      M`4^x>8`,
      M`2^{2x}>2^3`,
      M`2x>3`,
      M`\boxed{x>\frac32}`
    ],

    self: [
      {
        q: M`9^x\geq27`,
        steps: [M`3^{2x}\geq3^3`, M`2x\geq3`],
        answer: M`\boxed{\left[\frac32;+\infty\right)}`
      },
      {
        q: M`8^x<16`,
        steps: [M`2^{3x}<2^4`, M`3x<4`],
        answer: M`\boxed{\left(-\infty;\frac43\right)}`
      }
    ]
  },

  {
    title: "Теріс көрсеткішті дәреже",

    text:
      "Оң санның теріс дәрежесі оның оң дәрежесіне кері санды білдіреді. Сондықтан бөлшектерді бірдей негізге келтіруде теріс көрсеткіштерді пайдалана аламыз.",

    formula: M`a^{-n}=\frac1{a^n},\quad a>0`,

    example: [
      M`2^x>\frac18`,
      M`2^x>2^{-3}`,
      M`x>-3`,
      M`\boxed{(-3;+\infty)}`
    ],

    self: [
      {
        q: M`3^x\geq\frac19`,
        steps: [M`3^x\geq3^{-2}`, M`x\geq-2`],
        answer: M`\boxed{[-2;+\infty)}`
      },
      {
        q: M`2^x\leq\frac1{16}`,
        steps: [M`2^x\leq2^{-4}`, M`x\leq-4`],
        answer: M`\boxed{(-\infty;-4]}`
      }
    ]
  },

  {
    title: "Қос теңсіздік",

    text:
      "Қос теңсіздік бір өрнектің екі шекара арасында орналасатынын көрсетеді. Екі шартты жеке шешіп, олардың ортақ бөлігін табу керек. Қатаң және қатаң емес шекараларды дұрыс ажыратамыз.",

    formula: M`4\leq2^x<32`,

    example: [
      M`2^2\leq2^x<2^5`,
      M`2\leq x<5`,
      M`\boxed{[2;5)}`
    ],

    self: [
      {
        q: M`8\leq2^x<64`,
        steps: [M`2^3\leq2^x<2^6`, M`3\leq x<6`],
        answer: M`\boxed{[3;6)}`
      },
      {
        q: M`9<3^x\leq243`,
        steps: [M`3^2<3^x\leq3^5`, M`2<x\leq5`],
        answer: M`\boxed{(2;5]}`
      }
    ]
  },

  {
    title: "Көрсеткіштік теңсіздіктер жүйесі",

    text:
      "Теңсіздіктер жүйесінде әр теңсіздікті жеке шешеміз. Кейін олардың шешім аралықтарының қиылысуын анықтаймыз. Жауап ретінде барлық шарттарға сәйкес келетін сандарды ғана жазамыз.",

    formula: M`\begin{cases}2^x\geq4\\2^x<16\end{cases}`,

    example: [
      M`x\geq2`,
      M`x<4`,
      M`\boxed{[2;4)}`
    ],

    self: [
      {
        q: M`\begin{cases}3^x\geq9\\3^x<243\end{cases}`,
        steps: [M`x\geq2`, M`x<5`],
        answer: M`\boxed{[2;5)}`
      },
      {
        q: M`\begin{cases}2^x>8\\2^x\leq128\end{cases}`,
        steps: [M`x>3`, M`x\leq7`],
        answer: M`\boxed{(3;7]}`
      }
    ]
  },

  {
    title: "Шешім аралығын тексеру",

    text:
      "Шешімді тапқаннан кейін шекара нүктелерін тексеру қажет. Егер теңдік орындалса және бастапқы теңсіздікте теңдік белгісі бар болса, шекара шешімге кіреді. Сонымен қатар жауап аралығынан бір сан алып тексеруге болады.",

    formula: M`2^x\geq16\iff x\geq4`,

    example: [
      M`x=4`,
      M`2^4=16`,
      M`16\geq16`,
      M`\text{Шарт орындалады}`
    ],

    self: [
      {
        q: M`\begin{cases}2^x\geq16\\2^x<64\end{cases}`,
        steps: [M`x\geq4`, M`x<6`],
        answer: M`\boxed{[4;6)}`
      },
      {
        q: M`\begin{cases}3^x>27\\3^x\leq729\end{cases}`,
        steps: [M`x>3`, M`x\leq6`],
        answer: M`\boxed{(3;6]}`
      }
    ]
  }
];

// ======================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// ======================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      {
        q: M`2^x\geq8`,
        value: 3,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`2^x\geq2^3`,
          M`x\geq3`,
          M`\boxed{[3;+\infty)}`
        ]
      },
      {
        q: M`3^x>9`,
        value: 3,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`3^x>3^2`,
          M`x>2`,
          M`\boxed{(2;+\infty)}`
        ]
      },
      {
        q: M`2^x\leq16`,
        value: 4,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`2^x\leq2^4`,
          M`x\leq4`,
          M`\boxed{(-\infty;4]}`
        ]
      },
      {
        q: M`5^x<125`,
        value: 2,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`5^x<5^3`,
          M`x<3`,
          M`\boxed{(-\infty;3)}`
        ]
      },
      {
        q: M`4^x\geq64`,
        value: 3,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`4^x\geq4^3`,
          M`x\geq3`,
          M`\boxed{[3;+\infty)}`
        ]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      {
        q: M`2^{x+1}>32`,
        value: 5,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`x+1>5`,
          M`x>4`,
          M`\boxed{(4;+\infty)}`
        ]
      },
      {
        q: M`3^{2x}\leq81`,
        value: 2,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`3^{2x}\leq3^4`,
          M`2x\leq4`,
          M`x\leq2`,
          M`\boxed{(-\infty;2]}`
        ]
      },
      {
        q: M`\left(\frac12\right)^x<\frac18`,
        value: 4,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`\left(\frac12\right)^x<\left(\frac12\right)^3`,
          M`x>3`,
          M`\boxed{(3;+\infty)}`
        ]
      },
      {
        q: M`\left(\frac13\right)^x\geq\frac1{81}`,
        value: 4,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`\left(\frac13\right)^x\geq\left(\frac13\right)^4`,
          M`x\leq4`,
          M`\boxed{(-\infty;4]}`
        ]
      },
      {
        q: M`9^x<27`,
        value: 1,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`3^{2x}<3^3`,
          M`2x<3`,
          M`x<\frac32`,
          M`\boxed{\left(-\infty;\frac32\right)}`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      {
        q: M`2^{x+2}\geq64`,
        value: 4,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`2^{x+2}\geq2^6`,
          M`x+2\geq6`,
          M`x\geq4`
        ]
      },
      {
        q: M`\left(\frac14\right)^{x-1}<\frac1{64}`,
        value: 5,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`\left(\frac14\right)^{x-1}<\left(\frac14\right)^3`,
          M`x-1>3`,
          M`x>4`
        ]
      },
      {
        q: M`8^x\leq16`,
        value: 1,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`2^{3x}\leq2^4`,
          M`3x\leq4`,
          M`x\leq\frac43`
        ]
      },
      {
        q: M`3^{2x-1}>243`,
        value: 4,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`3^{2x-1}>3^5`,
          M`2x-1>5`,
          M`x>3`
        ]
      },
      {
        q: M`\left(\frac12\right)^{2x+1}\geq\frac1{128}`,
        value: 3,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`\left(\frac12\right)^{2x+1}\geq\left(\frac12\right)^7`,
          M`2x+1\leq7`,
          M`x\leq3`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      {
        q: M`\begin{cases}2^x\geq8\\2^x<64\end{cases}`,
        value: 3,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`x\geq3`,
          M`x<6`,
          M`\boxed{[3;6)}`
        ]
      },
      {
        q: M`\begin{cases}3^x>9\\3^x\leq729\end{cases}`,
        value: 6,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`x>2`,
          M`x\leq6`,
          M`\boxed{(2;6]}`
        ]
      },
      {
        q: M`\begin{cases}\left(\frac12\right)^x\leq\frac14\\2^x<64\end{cases}`,
        value: 2,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`x\geq2`,
          M`x<6`,
          M`\boxed{[2;6)}`
        ]
      },
      {
        q: M`\begin{cases}4^x>16\\2^x\leq128\end{cases}`,
        value: 7,
        prompt: "Ең үлкен бүтін шешімді тап",
        steps: [
          M`x>2`,
          M`x\leq7`,
          M`\boxed{(2;7]}`
        ]
      },
      {
        q: M`\begin{cases}9^x\geq27\\3^{x+1}<243\end{cases}`,
        value: 2,
        prompt: "Ең кіші бүтін шешімді тап",
        steps: [
          M`3^{2x}\geq3^3`,
          M`x\geq\frac32`,
          M`x+1<5`,
          M`x<4`,
          M`\boxed{\left[\frac32;4\right)}`
        ]
      }
    ]
  }
];

// ======================================
// 3 ТОП — 15 СҰРАҚ
// ======================================

const quiz = [
  {
    q: "Негізі 1-ден үлкен болса, теңсіздік таңбасы қалай өзгереді?",
    options: [
      "Кері өзгереді",
      "Сақталады",
      "Жойылады",
      "Теңдікке айналады"
    ],
    correct: 1
  },
  {
    q: "2ˣ > 8 теңсіздігінің шешімі қандай?",
    options: ["x < 3", "x ≥ 3", "x > 3", "x ≤ 3"],
    correct: 2
  },
  {
    q: "Негізі 0 мен 1 арасында болса, теңсіздік таңбасы қалай өзгереді?",
    options: [
      "Кері өзгереді",
      "Сақталады",
      "Жойылады",
      "Өзгермейді"
    ],
    correct: 0
  },
  {
    q: "(1/2)ˣ > (1/2)³ болса, x қандай?",
    options: ["x > 3", "x ≥ 3", "x = 3", "x < 3"],
    correct: 3
  },
  {
    q: "3ˣ ≥ 81 теңсіздігінің шешімі?",
    options: ["x ≤ 4", "x ≥ 4", "x > 4", "x < 4"],
    correct: 1
  },
  {
    q: "2ˣ < 16 теңсіздігінің шешімі?",
    options: ["x > 4", "x ≤ 4", "x < 4", "x ≥ 4"],
    correct: 2
  },
  {
    q: "9ˣ > 27 теңсіздігін бір негізге келтіргендегі түрі?",
    options: [
      "3^(2x) > 3³",
      "3ˣ > 3³",
      "9ˣ > 9³",
      "2ˣ > 3³"
    ],
    correct: 0
  },
  {
    q: "Теңсіздіктер жүйесінің шешімін қалай табамыз?",
    options: [
      "Аралықтарды біріктіреміз",
      "Шектерді қосамыз",
      "Шектерді көбейтеміз",
      "Аралықтарды қиылыстырамыз"
    ],
    correct: 3
  },
  {
    q: "2ˣ ≥ 4 және 2ˣ < 16 болса, шешімі қандай?",
    options: ["[0;4)", "[2;4)", "(2;4]", "[4;+∞)"],
    correct: 1
  },
  {
    q: "(1/3)ˣ ≤ 1/27 теңсіздігінің шешімі?",
    options: ["x ≤ 3", "x < 3", "x ≥ 3", "x = 3"],
    correct: 2
  },
  {
    q: "4ˣ ≥ 16 теңсіздігінің шешімі?",
    options: ["x ≥ 2", "x ≤ 2", "x > 4", "x < 2"],
    correct: 0
  },
  {
    q: "Шекара нүктесі шешімге кірмейтін таңба?",
    options: ["≥", "≤", "=", "<"],
    correct: 3
  },
  {
    q: "2^(x+1) > 32 теңсіздігінің шешімі?",
    options: ["x > 5", "x > 4", "x < 4", "x ≥ 4"],
    correct: 1
  },
  {
    q: "3^(2x) ≤ 81 теңсіздігінің шешімі?",
    options: ["x ≥ 2", "x < 2", "x ≤ 2", "x > 2"],
    correct: 2
  },
  {
    q: "2ˣ ≥ 8 және 2ˣ ≤ 32 болса, шешімі?",
    options: ["[3;5]", "(3;5)", "[2;5]", "[3;6]"],
    correct: 0
  }
];

// ======================================
// ҮЙ ЖҰМЫСЫ
// ======================================

const homework = [
  {
    title: "1. Көрсеткіштік теңсіздіктер",
    text:
      "Теңсіздіктерді бірдей негізге келтіріп шешіңдер. Әр теңсіздіктің шешімін аралық түрінде көрсетіңдер. Шекаралардың жауапқа кіретінін тексеріңдер.",
    formulas: [
      M`2^{3x-1}\geq128`,
      M`\left(\frac13\right)^{2x+1}<\frac1{243}`,
      M`9^{x-1}\leq27`
    ]
  },
  {
    title: "2. Теңсіздіктер жүйелері",
    text:
      "Жүйедегі әр теңсіздікті жеке шығарып, ортақ шешімін табыңдар. Жауаптарды сан осінде бейнелеңдер.",
    formulas: [
      M`\begin{cases}2^{x+1}\geq16\\2^x<128\end{cases}`,
      M`\begin{cases}\left(\frac12\right)^x\leq\frac18\\3^{x-1}<81\end{cases}`
    ]
  },
  {
    title: "3. Теориялық тапсырма",
    text:
      "Неліктен негізі бірден кіші көрсеткіштік функцияда теңсіздік таңбасы өзгереді? Осы тақырыпта 8–10 сөйлемнен тұратын түсіндірме жазыңдар. Екі график салып, айырмашылықтарын көрсетіңдер.",
    formulas: [
      M`y=2^x`,
      M`y=\left(\frac12\right)^x`
    ]
  }
];

// ======================================
// 37 СЛАЙД
// ======================================

const slides = [
  {type: "intro", title: "Кіріспе"}
];

theory.forEach((item, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((item, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((item, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((item, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ, ${i + 1}-сұрақ`
  });
});

slides.push(
  {type: "homework", title: "Үй жұмысы"},
  {type: "finish", title: "Қорытынды"}
);

// ======================================
// САЙТТЫҢ КҮЙІ
// ======================================

let page = 0;

let individualScore = 0;
let teamScores = [0, 0, 0];

const completedTasks = new Set();
const gameAnswers = new Map();

const TOTAL_TIME = 80 * 60;

let secondsLeft = TOTAL_TIME;
let timerInterval = null;
let timerDeadline = 0;

// ======================================
// HTML МӘТІНІН ҚОРҒАУ
// ======================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

// ======================================
// ФОРМУЛАЛАРДЫ ҚАУІПСІЗ САҚТАУ
// ======================================

// < немесе > таңбалары HTML коды
// ретінде өңделмеуі үшін формула
// тікелей HTML мәтініне жазылмайды.

function math(tex) {
  const encoded = encodeURIComponent(String(tex));

  return `
    <div class="math" data-tex="${encoded}"></div>
  `;
}

function hydrateFormulas(root) {
  root.querySelectorAll(".math[data-tex]")
    .forEach(element => {
      const tex = decodeURIComponent(
        element.getAttribute("data-tex")
      );

      element.textContent = "\\[" + tex + "\\]";
      element.removeAttribute("data-tex");
    });
}

// ======================================
// БЛОКТАРДЫ ДАЙЫНДАУ
// ======================================

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${escapeHTML(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(items) {
  return items.map((formula, i) => `
    <div class="step">
      <strong>${i + 1}-қадам</strong>
      ${math(formula)}
    </div>
  `).join("");
}

function selfHTML(items, noteIndex) {
  return items.map((task, i) => {
    const id = `self_${noteIndex}_${i}`;

    return `
      <section class="self-task">

        <h3>✏️ ${i + 1}-өзіндік есеп</h3>

        ${math(task.q)}

        <p>
          Алдымен есепті дәптерге шығарыңдар.
          Содан кейін шешімін тексеріңдер.
        </p>

        <button class="action"
          data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div class="solution" id="${id}" hidden>

          ${stepsHTML(task.steps)}

          <h3>Дұрыс жауап</h3>
          ${math(task.answer)}

        </div>

      </section>
    `;
  }).join("");
}

// ======================================
// КІРІСПЕ
// ======================================

function introHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §14. ${escapeHTML(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${escapeHTML(lesson.goal)}</p>
      `)}

      ${card("gold", "Негізі 1-ден үлкен", `
        <p>Теңсіздік таңбасы сақталады.</p>
        ${math(M`a>1:\quad a^u>a^v\iff u>v`)}
      `)}

      ${card("purple", "Негізі 0 мен 1 арасында", `
        <p>Теңсіздік таңбасы кері өзгереді.</p>
        ${math(M`0<a<1:\quad a^u>a^v\iff u<v`)}
      `)}

      ${card("green", "Сабақтың бөлімдері", `
        <p>5 теориялық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгей бойынша 20 есеп</p>
        <p>3 топқа арналған 15 сұрақ</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("blue", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірмелер — 20 минут</p>
        <p>Конспектілер — 15 минут</p>
        <p>Деңгейлік есептер — 20 минут</p>
        <p>Топтық ойын — 15 минут</p>
        <p>Үй жұмысы және қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// ======================================
// ТЕОРИЯ
// ======================================

function theoryHTML(i) {
  const t = theory[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1} / 5
      </div>

      <h2>${escapeHTML(t.title)}</h2>

      ${card("blue", "Анықтама", `
        <p>${escapeHTML(t.definition)}</p>
      `)}

      ${card("purple", "Түсінікті түсіндірме", `
        <p>${escapeHTML(t.explain)}</p>
      `)}

      ${card("green", "Негізгі ереже", `
        <p>${escapeHTML(t.rule)}</p>
      `)}

      ${card("gold", "Математикалық формула",
        math(t.formula)
      )}

      ${card("green", "Толық шығарылған мысал",
        stepsHTML(t.steps)
      )}

      ${card("red", "Маңызды ескерту", `
        <p>${escapeHTML(t.warning)}</p>
      `)}

    </div>
  `;
}

// ======================================
// КОНСПЕКТ — 2 ӨЗІНДІК ЕСЕП
// ======================================

function noteHTML(i) {
  const n = notes[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${i + 1} / 10
      </div>

      <h2>${escapeHTML(n.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${escapeHTML(n.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(n.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(n.example)
      )}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>Екі есеп</h2>

      ${selfHTML(n.self, i)}

    </div>
  `;
}

// ======================================
// 4 ДЕҢГЕЙ
// ======================================

function levelHTML(i) {
  const level = levels[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР ${i + 1} / 4
      </div>

      <h2>📐 ${escapeHTML(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>Әр дұрыс жауап: +${level.points} ұпай</span>
      </div>

      <p>
        Теңсіздіктің шешім аралығын дәптерге
        жазыңдар. Сайтқа сұралған бүтін санды
        енгізіңдер.
      </p>

      <div class="level-grid">

        ${level.tasks.map((task, j) => {
          const key = `${i}_${j}`;
          const done = completedTasks.has(key);

          return `
            <section class="level-task">

              <h3>${j + 1}-есеп</h3>

              ${math(task.q)}

              <p>
                <strong>${escapeHTML(task.prompt)}</strong>
              </p>

              <div class="answer-row">
                <input
                  id="answer_${key}"
                  type="text"
                  inputmode="numeric"
                  placeholder="Бүтін сан"
                  ${done ? "disabled" : ""}
                >

                <button
                  data-check="${key}"
                  ${done ? "disabled" : ""}>
                  ${done ? "✓ Дұрыс" : "Тексеру"}
                </button>
              </div>

              <p id="feedback_${key}"
                class="feedback ${done ? "correct" : ""}">
                ${done
                  ? `✓ +${level.points} ұпай`
                  : "Жауабыңды енгіз."}
              </p>

              <button class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div class="solution"
                id="solution_${key}" hidden>

                ${stepsHTML(task.steps)}

                <h3>
                  ${escapeHTML(task.prompt)}:
                  ${task.value}
                </h3>

              </div>

            </section>
          `;
        }).join("")}

      </div>
    </div>
  `;
}

// ======================================
// ТОПТЫҚ ОЙЫН
// ======================================

function gameHTML(i) {
  const q = quiz[i];
  const activeTeam = i % 3;
  const chosen = gameAnswers.get(i);

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН ${i + 1} / 15
      </div>

      <h2>
        🏆 ${activeTeam + 1}-топ жауап береді
      </h2>

      <div class="scores">

        ${teamScores.map((points, j) => `
          <div class="team
            ${j === activeTeam ? "current" : ""}">

            ${j + 1}-топ

            <strong>${points}</strong>

          </div>
        `).join("")}

      </div>

      ${card("gold", `${i + 1}-сұрақ`, `

        <p>${escapeHTML(q.q)}</p>

        <div class="answers">

          ${q.options.map((option, j) => {
            let cls = "";

            if (chosen !== undefined) {
              if (j === q.correct) {
                cls = "correct";
              } else if (j === chosen) {
                cls = "wrong";
              }
            }

            return `
              <button
                data-choice="${j}"
                class="${cls}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[j]}. ${escapeHTML(option)}

              </button>
            `;
          }).join("")}

        </div>

        <p>
          ${chosen === undefined
            ? "Төрт жауаптың біреуін таңдаңдар."
            : chosen === q.correct
              ? "✓ Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " +
                escapeHTML(q.options[q.correct])}
        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Топтар 1 → 2 → 3 ретімен ауысады.</p>
        <p>Әр дұрыс жауапқа 10 ұпай қосылады.</p>
        <p>Жауаптан соң «Келесі» батырмасын басыңдар.</p>
      `)}

    </div>
  `;
}

// ======================================
// ҮЙ ЖҰМЫСЫ
// ======================================

function homeworkHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>

      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item, i) => card(
        ["blue", "gold", "green"][i],
        item.title,

        `<p>${escapeHTML(item.text)}</p>` +
        item.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// ======================================
// ҚОРЫТЫНДЫ
// ======================================

function finishHTML() {
  const maxScore = Math.max(...teamScores);

  const winners = teamScores
    .map((score, i) =>
      score === maxScore ? `${i + 1}-топ` : null
    )
    .filter(Boolean);

  const gameCompleted =
    gameAnswers.size === quiz.length;

  return `
    <div class="slide">

      <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">
        ${teamScores.map((score, i) => `
          <div class="team">
            ${i + 1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green", "Командалық ойын", `
        <p>
          Жауап берілген сұрақ:
          ${gameAnswers.size} / 15
        </p>

        <p>
          ${gameCompleted
            ? winners.join(", ") +
              (winners.length === 1
                ? " — жеңімпаз!"
                : " — тең ұпай жинады!")
            : "Ойынның барлық сұрақтары әлі аяқталмаған."}
        </p>
      `)}

      ${card("blue", "Жеке тапсырмалар", `
        <p>
          Дұрыс орындалған есеп:
          ${completedTasks.size} / 20
        </p>
        <p>Жеке ұпай: ${individualScore}</p>
      `)}

      ${card("gold", "Не үйрендік?", `
        <p>Көрсеткіштік теңсіздіктерді шештік.</p>
        <p>Өспелі және кемімелі функцияларды ажыраттық.</p>
        <p>Теңсіздік таңбасын дұрыс өзгерттік.</p>
        <p>Теңсіздіктер жүйелерін шештік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// ======================================
// MATHJAX ФОРМУЛАЛАРЫН ӨҢДЕУ
// ======================================

let mathQueue = Promise.resolve();
let renderVersion = 0;

function drawMath() {
  const version = renderVersion;

  mathQueue = mathQueue.then(async () => {
    if (!window.MathJax) {
      return;
    }

    await MathJax.startup.promise;

    if (version !== renderVersion) {
      return;
    }

    if (typeof MathJax.typesetPromise === "function") {
      await MathJax.typesetPromise([$("content")]);
    }
  }).catch(error => {
    console.warn("MathJax:", error);
  });
}

// ======================================
// БЕТТІ КӨРСЕТУ
// ======================================

function updateScores() {
  const gamePoints = teamScores.reduce(
    (sum, score) => sum + score,
    0
  );

  $("totalScore").textContent =
    individualScore + gamePoints;
}

function render() {
  const slide = slides[page];

  const renderers = {
    intro: () => introHTML(),
    theory: () => theoryHTML(slide.index),
    note: () => noteHTML(slide.index),
    level: () => levelHTML(slide.index),
    game: () => gameHTML(slide.index),
    homework: () => homeworkHTML(),
    finish: () => finishHTML()
  };

  renderVersion++;

  const content = $("content");

  if (typeof window.MathJax?.typesetClear === "function") {
    try {
      MathJax.typesetClear([content]);
    } catch (error) {
      console.warn("MathJax тазалау:", error);
    }
  }

  content.innerHTML = renderers[slide.type]();

  // ФОРМУЛАЛАРДЫ HTML ЕМЕС,
  // ҚАУІПСІЗ МӘТІН ТҮРІНДЕ ҚОЯМЫЗ.
  hydrateFormulas(content);

  content.scrollTop = 0;

  $("pageCounter").textContent =
    `${page + 1} / ${slides.length}`;

  $("pageTitle").textContent =
    slide.title;

  $("pageProgress").style.width =
    `${(page + 1) / slides.length * 100}%`;

  $("prevPage").disabled =
    page === 0;

  $("nextPage").disabled =
    page === slides.length - 1;

  document.querySelectorAll(
    "[data-section]"
  ).forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.section === slide.type
    );
  });

  updateScores();
  drawMath();
}

// ======================================
// НАВИГАЦИЯ
// ======================================

function nextPage() {
  if (page < slides.length - 1) {
    page++;
    render();
  }
}

function previousPage() {
  if (page > 0) {
    page--;
    render();
  }
}

function jumpTo(type) {
  const index = slides.findIndex(
    slide => slide.type === type
  );

  if (index >= 0) {
    page = index;
    render();
  }
}

$("nextPage").addEventListener("click", nextPage);
$("prevPage").addEventListener("click", previousPage);

document.querySelectorAll(
  "[data-section]"
).forEach(button => {
  button.addEventListener("click", () => {
    jumpTo(button.dataset.section);
  });
});

// ======================================
// ЕСЕП, ЖАУАП ЖӘНЕ ОЙЫН БАТЫРМАЛАРЫ
// ======================================

$("content").addEventListener("click", event => {
  const toggle = event.target.closest(
    "[data-toggle]"
  );

  if (toggle) {
    const target = $(toggle.dataset.toggle);

    if (target) {
      target.hidden = !target.hidden;
    }

    return;
  }

  const check = event.target.closest(
    "[data-check]"
  );

  if (check) {
    checkLevel(check.dataset.check);
    return;
  }

  const choice = event.target.closest(
    "[data-choice]"
  );

  if (choice) {
    chooseAnswer(Number(choice.dataset.choice));
  }
});

// ======================================
// ДЕҢГЕЙ ЖАУАПТАРЫН ТЕКСЕРУ
// ======================================

function checkLevel(key) {
  if (completedTasks.has(key)) {
    return;
  }

  const [levelIndex, taskIndex] =
    key.split("_").map(Number);

  const level = levels[levelIndex];
  const task = level.tasks[taskIndex];

  const input = $("answer_" + key);
  const feedback = $("feedback_" + key);

  const raw = input.value.trim();

  if (!/^-?\d+$/.test(raw)) {
    feedback.textContent =
      "Бүтін сан енгізіңдер. Мысалы: 3 немесе -2.";
    return;
  }

  const answer = Number(raw);

  if (answer === task.value) {
    completedTasks.add(key);
    individualScore += level.points;

    input.disabled = true;

    const button = document.querySelector(
      `[data-check="${key}"]`
    );

    if (button) {
      button.disabled = true;
      button.textContent = "✓ Дұрыс";
    }

    feedback.textContent =
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("correct");

    updateScores();
  } else {
    feedback.textContent =
      "Қате жауап. Шекара нүктесін тексеріңдер.";
  }
}

// ======================================
// ТОПТЫҚ ОЙЫН
// ======================================

function chooseAnswer(choice) {
  const slide = slides[page];

  if (slide.type !== "game") {
    return;
  }

  const questionIndex = slide.index;

  if (gameAnswers.has(questionIndex)) {
    return;
  }

  gameAnswers.set(questionIndex, choice);

  if (choice === quiz[questionIndex].correct) {
    const teamIndex = questionIndex % 3;
    teamScores[teamIndex] += 10;
  }

  render();
}

$("resetGame").addEventListener("click", () => {
  gameAnswers.clear();
  teamScores = [0, 0, 0];
  render();
});

// ======================================
// ТОЛЫҚ ЭКРАН
// ======================================

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn(error);
    }
  }
);

// ======================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ======================================

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0");
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(secondsLeft);

  $("elapsed").textContent =
    formatTime(TOTAL_TIME - secondsLeft);

  $("timeProgress").style.width =
    `${(TOTAL_TIME - secondsLeft) / TOTAL_TIME * 100}%`;
}

function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  if (timerInterval !== null || secondsLeft <= 0) {
    return;
  }

  timerDeadline = Date.now() + secondsLeft * 1000;

  timerInterval = setInterval(() => {
    secondsLeft = Math.max(
      0,
      Math.ceil(
        (timerDeadline - Date.now()) / 1000
      )
    );

    updateTimer();

    if (secondsLeft === 0) {
      pauseTimer();
    }
  }, 250);
}

function resetTimer() {
  pauseTimer();
  secondsLeft = TOTAL_TIME;
  updateTimer();
}

$("timerStart").addEventListener("click", startTimer);
$("timerPause").addEventListener("click", pauseTimer);
$("timerReset").addEventListener("click", resetTimer);

// ======================================
// АЛМАТЫНЫҢ НАҚТЫ УАҚЫТЫ
// ======================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

// ======================================
// КАЛЬКУЛЯТОР МӘНДЕРІ
// ======================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tg", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// ======================================
// БАТЫРМАЛАРДЫ ЖАСАУ
// ======================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  calcKeys[type].forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") {
      button.classList.add("clear");
    }

    if (key === "=") {
      button.classList.add("equal");
    }

    if ([
      "sin", "cos", "tg", "ctg", "log", "ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if ([
      "+", "−", "×", "÷", "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalculator(type, key);
    });

    grid.appendChild(button);
  });
}

// ======================================
// КАЛЬКУЛЯТОРҒА ЕНГІЗУ
// ======================================

function pressCalculator(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";
  } else if (key === "⌫") {
    value = value.slice(0, -1);
  } else if (key === "=") {
    try {
      const result = calculate(value);

      value = String(
        Number(result.toPrecision(12))
      );
    } catch (error) {
      value = "Қате";
    }
  } else {
    if (value === "Қате") value = "";

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// ======================================
// ЕСЕПТЕУ ЖҮЙЕСІ
// eval() ҚОЛДАНЫЛМАЙДЫ
// ======================================

// sin, cos, tg, ctg градуспен есептеледі.

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".");

  let pos = 0;

  const rad = x => x * Math.PI / 180;

  const funcs = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw Error("Тангенс анықталмаған");
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw Error("Котангенс анықталмаған");
      }

      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: x => Math.sqrt(x),
    cbrt: x => Math.cbrt(x),
    log: x => Math.log10(x),
    ln: x => Math.log(x)
  };

  function take(symbol) {
    if (source[pos] === symbol) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if (take("(")) {
      const value = expression();

      if (!take(")")) {
        throw Error("Жақша жабылмаған");
      }

      return value;
    }

    const rest = source.slice(pos);

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (number) {
      pos += number[0].length;

      return Number(number[0]);
    }

    for (const name of Object.keys(funcs)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        return funcs[name](argument);
      }
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате өрнек");
  }

  function postfix() {
    let value = atom();

    while (take("%")) {
      value /= 100;
    }

    return value;
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();
      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлуге болмайды");
        }

        value /= divisor;
      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();
      } else if (take("-")) {
        value -= term();
      } else {
        break;
      }
    }

    return value;
  }

  if (!source) {
    throw Error("Бос өрнек");
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12 ? 0 : result;
}

// ======================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ======================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const other = type === "basic"
    ? "science"
    : "basic";

  const opening =
    !element.classList.contains("visible");

  $("calc-" + other).classList.remove(
    "visible"
  );

  element.classList.toggle(
    "visible",
    opening
  );

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener("click", () => {
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click", () => {
  toggleCalculator("science");
});

document.querySelectorAll(
  "[data-close]"
).forEach(button => {
  button.addEventListener("click", () => {
    $("calc-" + button.dataset.close)
      .classList.remove("visible");
  });
});

// ======================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ======================================

function makeDraggable(element) {
  const handle = element.querySelector(
    ".calc-head"
  );

  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag || drag.id !== event.pointerId) {
      return;
    }

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(
        0,
        Math.min(maxX, drag.left + dx)
      ) + "px";

    element.style.top =
      Math.max(
        0,
        Math.min(maxY, drag.top + dy)
      ) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// ======================================
// ҚҰРЫЛЫМДЫ ТЕКСЕРУ
// ======================================

console.assert(
  theory.length === 5,
  "Түсіндірме саны 5 болуы керек"
);

console.assert(
  notes.length === 10,
  "Конспект саны 10 болуы керек"
);

console.assert(
  notes.every(note => note.self.length === 2),
  "Әр конспектте 2 өзіндік есеп болуы керек"
);

console.assert(
  levels.length === 4 &&
  levels.every(level => level.tasks.length === 5),
  "4 деңгейде 20 есеп болуы керек"
);

console.assert(
  quiz.length === 15,
  "Ойын сұрақтары 15 болуы керек"
);

console.assert(
  slides.length === 37,
  "Слайд саны 37 болуы керек"
);

// Формуланың бастапқы мәтіні өзгермеуін тексеру.
const formulaTest =
  M`0<a<1:\quad a^u>a^v\iff u<v`;

console.assert(
  decodeURIComponent(
    encodeURIComponent(formulaTest)
  ) === formulaTest,
  "Формула таңбалары бұзылған"
);

// ======================================
// САЙТТЫ ІСКЕ ҚОСУ
// ======================================

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
