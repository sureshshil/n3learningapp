import { useState } from "react";

const GROUPS = [
  "Verbs of Change",
  "Thinking & Judgment",
  "Human Relations",
  "Movement & Direction",
  "State & Condition",
  "Degree & Extent",
  "Work & Society",
  "Nature & Time",
];

const VOCAB = [
  // ── GROUP 0: Verbs of Change ────────────────────────────────
  {
    group: 0,
    word: "増える", wordRuby: "<ruby>増<rt>ふ</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Increase",
    meaning: "to increase; to grow in number; to multiply",
    particles: [
      { ruby: "〜が<ruby>増<rt>ふ</rt></ruby>える", meaning: "~ increases" },
      { ruby: "<ruby>増<rt>ふ</rt></ruby>え<ruby>続<rt>つづ</rt></ruby>ける", meaning: "keep increasing" },
      { ruby: "どんどん<ruby>増<rt>ふ</rt></ruby>える", meaning: "increase more and more" },
    ],
    examples: [
      { ruby: "ゴミが<ruby>増<rt>ふ</rt></ruby>えた。", en: "Trash has increased." },
      { ruby: "スマホを<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>がどんどん<ruby>増<rt>ふ</rt></ruby>えている。", en: "The number of people using smartphones is increasing more and more." },
      { ruby: "<ruby>高齢化<rt>こうれいか</rt></ruby>が<ruby>進<rt>すす</rt></ruby>む<ruby>中<rt>なか</rt></ruby>、<ruby>介護<rt>かいご</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は<ruby>今後<rt>こんご</rt></ruby>もさらに<ruby>増<rt>ふ</rt></ruby>えると<ruby>予想<rt>よそう</rt></ruby>される。", en: "As ageing progresses, the number of people requiring care is expected to increase further going forward." },
    ]
  },
  {
    group: 0,
    word: "減る", wordRuby: "<ruby>減<rt>へ</rt></ruby>る",
    pos: "verb (Group 1)", keyword: "Decrease",
    meaning: "to decrease; to diminish; to go down",
    particles: [
      { ruby: "〜が<ruby>減<rt>へ</rt></ruby>る", meaning: "~ decreases" },
      { ruby: "どんどん<ruby>減<rt>へ</rt></ruby>る", meaning: "decrease more and more" },
      { ruby: "<ruby>減<rt>へ</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>ける", meaning: "keep decreasing" },
    ],
    examples: [
      { ruby: "<ruby>体重<rt>たいじゅう</rt></ruby>が<ruby>減<rt>へ</rt></ruby>った。", en: "My weight decreased." },
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>睡眠<rt>すいみん</rt></ruby><ruby>時間<rt>じかん</rt></ruby>が<ruby>減<rt>へ</rt></ruby>っている。", en: "Lately my sleep time has been decreasing." },
      { ruby: "<ruby>人口<rt>じんこう</rt></ruby>が<ruby>減<rt>へ</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けると、<ruby>地域<rt>ちいき</rt></ruby>の<ruby>活力<rt>かつりょく</rt></ruby>が<ruby>失<rt>うしな</rt></ruby>われる<ruby>恐<rt>おそ</rt></ruby>れがある。", en: "If the population keeps decreasing, there is a fear that the vitality of local communities will be lost." },
    ]
  },
  {
    group: 0,
    word: "変わる", wordRuby: "<ruby>変<rt>か</rt></ruby>わる",
    pos: "verb (Group 1)", keyword: "Change",
    meaning: "to change; to be different; to transform",
    particles: [
      { ruby: "〜が<ruby>変<rt>か</rt></ruby>わる", meaning: "~ changes" },
      { ruby: "〜に<ruby>変<rt>か</rt></ruby>わる", meaning: "change to ~; be replaced by ~" },
      { ruby: "<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わる", meaning: "change significantly" },
    ],
    examples: [
      { ruby: "<ruby>天気<rt>てんき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わりやすい。", en: "The weather changes easily." },
      { ruby: "<ruby>生活<rt>せいかつ</rt></ruby>スタイルが<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わった。", en: "My lifestyle changed significantly." },
      { ruby: "テクノロジーの<ruby>進化<rt>しんか</rt></ruby>により、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby>は<ruby>根本<rt>こんぽん</rt></ruby>から<ruby>変<rt>か</rt></ruby>わりつつある。", en: "Due to the evolution of technology, the way we work is fundamentally changing." },
    ]
  },
  {
    group: 0,
    word: "変える", wordRuby: "<ruby>変<rt>か</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Change (trans.)",
    meaning: "to change something; to alter; to transform",
    particles: [
      { ruby: "〜を<ruby>変<rt>か</rt></ruby>える", meaning: "change ~" },
      { ruby: "<ruby>考<rt>かんが</rt></ruby>えを<ruby>変<rt>か</rt></ruby>える", meaning: "change one's thinking" },
      { ruby: "<ruby>方針<rt>ほうしん</rt></ruby>を<ruby>変<rt>か</rt></ruby>える", meaning: "change one's policy/direction" },
    ],
    examples: [
      { ruby: "<ruby>計画<rt>けいかく</rt></ruby>を<ruby>変<rt>か</rt></ruby>えた。", en: "I changed the plan." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>して、<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>を<ruby>変<rt>か</rt></ruby>えた。", en: "After failing, I changed my way of thinking." },
      { ruby: "この<ruby>経験<rt>けいけん</rt></ruby>が、<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>人生<rt>じんせい</rt></ruby>の<ruby>方向<rt>ほうこう</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>えることになった。", en: "This experience ended up greatly changing the direction of her life." },
    ]
  },
  {
    group: 0,
    word: "伝える", wordRuby: "<ruby>伝<rt>つた</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Convey",
    meaning: "to convey; to tell; to pass on; to report",
    particles: [
      { ruby: "〜に〜を<ruby>伝<rt>つた</rt></ruby>える", meaning: "tell ~ to ~; convey ~ to ~" },
      { ruby: "<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>える", meaning: "convey one's feelings" },
      { ruby: "<ruby>言葉<rt>ことば</rt></ruby>で<ruby>伝<rt>つた</rt></ruby>える", meaning: "convey in words" },
    ],
    examples: [
      { ruby: "<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えた。", en: "I conveyed my feeling of gratitude." },
      { ruby: "<ruby>大事<rt>だいじ</rt></ruby>なことは<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>伝<rt>つた</rt></ruby>えた<ruby>方<rt>ほう</rt></ruby>がいい。", en: "It's better to convey important things directly." },
      { ruby: "<ruby>言葉<rt>ことば</rt></ruby>だけでなく、<ruby>態度<rt>たいど</rt></ruby>や<ruby>行動<rt>こうどう</rt></ruby>でも<ruby>相手<rt>あいて</rt></ruby>に<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えることができる。", en: "One can convey feelings to others not only through words but also through attitude and actions." },
    ]
  },
  {
    group: 0,
    word: "気づく", wordRuby: "<ruby>気<rt>き</rt></ruby>づく",
    pos: "verb (Group 1)", keyword: "Notice / Realize",
    meaning: "to notice; to realize; to become aware of",
    particles: [
      { ruby: "〜に<ruby>気<rt>き</rt></ruby>づく", meaning: "notice ~; realize ~" },
      { ruby: "<ruby>気<rt>き</rt></ruby>づかない", meaning: "not notice; fail to realize" },
      { ruby: "ふと<ruby>気<rt>き</rt></ruby>づく", meaning: "suddenly realize; notice by chance" },
    ],
    examples: [
      { ruby: "<ruby>間違<rt>まちが</rt></ruby>いに<ruby>気<rt>き</rt></ruby>づいた。", en: "I noticed the mistake." },
      { ruby: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>に<ruby>気<rt>き</rt></ruby>づかなかった。", en: "I didn't notice the change in him." },
      { ruby: "<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>小<rt>ちい</rt></ruby>さな<ruby>幸<rt>しあわ</rt></ruby>せに<ruby>気<rt>き</rt></ruby>づくことが、<ruby>豊<rt>ゆたか</rt></ruby>な<ruby>人生<rt>じんせい</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る<ruby>鍵<rt>かぎ</rt></ruby>だ。", en: "Noticing the small happiness in daily life is the key to living a rich life." },
    ]
  },
  {
    group: 0,
    word: "慣れる", wordRuby: "<ruby>慣<rt>な</rt></ruby>れる",
    pos: "verb (Group 2)", keyword: "Get Used To",
    meaning: "to get used to; to become accustomed to",
    particles: [
      { ruby: "〜に<ruby>慣<rt>な</rt></ruby>れる", meaning: "get used to ~" },
      { ruby: "〜に<ruby>慣<rt>な</rt></ruby>れてくる", meaning: "gradually get used to ~" },
      { ruby: "<ruby>慣<rt>な</rt></ruby>れない", meaning: "not used to; unaccustomed" },
    ],
    examples: [
      { ruby: "この<ruby>仕事<rt>しごと</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れた。", en: "I got used to this job." },
      { ruby: "日本の<ruby>生活<rt>せいかつ</rt></ruby>にだいぶ<ruby>慣<rt>な</rt></ruby>れてきた。", en: "I've gotten fairly used to life in Japan." },
      { ruby: "どんな<ruby>環境<rt>かんきょう</rt></ruby>でも、<ruby>時間<rt>じかん</rt></ruby>が<ruby>経<rt>た</rt></ruby>てば<ruby>慣<rt>な</rt></ruby>れることができるものだ。", en: "No matter what the environment, one can get used to it if time passes." },
    ]
  },
  {
    group: 0,
    word: "諦める", wordRuby: "<ruby>諦<rt>あきら</rt></ruby>める",
    pos: "verb (Group 2)", keyword: "Give Up",
    meaning: "to give up; to resign oneself to; to abandon",
    particles: [
      { ruby: "〜を<ruby>諦<rt>あきら</rt></ruby>める", meaning: "give up on ~" },
      { ruby: "<ruby>諦<rt>あきら</rt></ruby>めずに", meaning: "without giving up" },
      { ruby: "<ruby>諦<rt>あきら</rt></ruby>めきれない", meaning: "unable to fully give up" },
    ],
    examples: [
      { ruby: "まだ<ruby>諦<rt>あきら</rt></ruby>めない。", en: "I still haven't given up." },
      { ruby: "<ruby>難<rt>むずか</rt></ruby>しくても<ruby>諦<rt>あきら</rt></ruby>めずに<ruby>続<rt>つづ</rt></ruby>けた。", en: "Even though it was difficult, I continued without giving up." },
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦<rt>あきら</rt></ruby>めることなく<ruby>挑戦<rt>ちょうせん</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けた<ruby>結果<rt>けっか</rt></ruby>、ついに<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>した。", en: "As a result of continuing to challenge without giving up on the dream, I finally achieved my goal." },
    ]
  },
  {
    group: 0,
    word: "迷う", wordRuby: "<ruby>迷<rt>まよ</rt></ruby>う",
    pos: "verb (Group 1)", keyword: "Hesitate / Get Lost",
    meaning: "to be lost; to hesitate; to be undecided; to waver",
    particles: [
      { ruby: "〜に<ruby>迷<rt>まよ</rt></ruby>う", meaning: "be undecided about ~; waver over ~" },
      { ruby: "<ruby>迷<rt>まよ</rt></ruby>わず〜する", meaning: "do ~ without hesitation" },
      { ruby: "<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>う", meaning: "get lost on the way" },
    ],
    examples: [
      { ruby: "<ruby>どれにするか迷<rt>どれにするかまよ</rt></ruby>った。", en: "I was indecisive about which to choose." },
      { ruby: "<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>って<ruby>遅<rt>おく</rt></ruby>れた。", en: "I got lost and was late." },
      { ruby: "<ruby>就職<rt>しゅうしょく</rt></ruby>か<ruby>大学院<rt>だいがくいん</rt></ruby>かで<ruby>長<rt>なが</rt></ruby>い<ruby>間<rt>あいだ</rt></ruby><ruby>迷<rt>まよ</rt></ruby>ったが、<ruby>最終的<rt>さいしゅうてき</rt></ruby>には<ruby>就職<rt>しゅうしょく</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだ。", en: "I wavered for a long time between getting a job and graduate school, but ultimately chose employment." },
    ]
  },
  {
    group: 0,
    word: "叶う", wordRuby: "<ruby>叶<rt>かな</rt></ruby>う",
    pos: "verb (Group 1)", keyword: "Come True",
    meaning: "to come true; to be realized; to be granted",
    particles: [
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>叶<rt>かな</rt></ruby>う", meaning: "a dream comes true" },
      { ruby: "<ruby>願<rt>ねが</rt></ruby>いが<ruby>叶<rt>かな</rt></ruby>う", meaning: "a wish is granted" },
      { ruby: "〜が<ruby>叶<rt>かな</rt></ruby>うよう", meaning: "so that ~ comes true" },
    ],
    examples: [
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>叶<rt>かな</rt></ruby>った。", en: "My dream came true." },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>すれば<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>叶<rt>かな</rt></ruby>う。", en: "If you make an effort, your dream will come true." },
      { ruby: "<ruby>長年<rt>ながねん</rt></ruby><ruby>憧<rt>あこが</rt></ruby>れていた海外留学の<ruby>夢<rt>ゆめ</rt></ruby>がようやく<ruby>叶<rt>かな</rt></ruby>い、<ruby>今<rt>いま</rt></ruby>は<ruby>充実<rt>じゅうじつ</rt></ruby>した<ruby>毎日<rt>まいにち</rt></ruby>を<ruby>送<rt>おく</rt></ruby>っている。", en: "My long-held dream of studying abroad has finally come true, and now I lead a fulfilling daily life." },
    ]
  },

  // ── GROUP 1: Thinking & Judgment ───────────────────────────
  {
    group: 1,
    word: "判断", wordRuby: "<ruby>判断<rt>はんだん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Judgment",
    meaning: "judgment; decision; assessment; determination",
    particles: [
      { ruby: "<ruby>判断<rt>はんだん</rt></ruby>する", meaning: "judge; make a judgment" },
      { ruby: "〜と<ruby>判断<rt>はんだん</rt></ruby>する", meaning: "judge that ~; determine that ~" },
      { ruby: "<ruby>判断<rt>はんだん</rt></ruby>を<ruby>誤<rt>あやま</rt></ruby>る", meaning: "make the wrong judgment" },
    ],
    examples: [
      { ruby: "よく<ruby>判断<rt>はんだん</rt></ruby>してから<ruby>決<rt>き</rt></ruby>めよう。", en: "Let's decide after judging well." },
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>て<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>判断<rt>はんだん</rt></ruby>した。", en: "I looked at the situation and judged calmly." },
      { ruby: "<ruby>緊急<rt>きんきゅう</rt></ruby>の<ruby>場面<rt>ばめん</rt></ruby>では、<ruby>素早<rt>すばや</rt></ruby>く<ruby>正確<rt>せいかく</rt></ruby>に<ruby>判断<rt>はんだん</rt></ruby>する<ruby>能力<rt>のうりょく</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる。", en: "In emergency situations, the ability to judge quickly and accurately is required." },
    ]
  },
  {
    group: 1,
    word: "理解", wordRuby: "<ruby>理解<rt>りかい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Understanding",
    meaning: "understanding; comprehension; appreciation",
    particles: [
      { ruby: "〜を<ruby>理解<rt>りかい</rt></ruby>する", meaning: "understand ~" },
      { ruby: "<ruby>理解<rt>りかい</rt></ruby>が<ruby>深<rt>ふか</rt></ruby>まる", meaning: "understanding deepens" },
      { ruby: "<ruby>理解<rt>りかい</rt></ruby>してもらう", meaning: "have someone understand; get understanding" },
    ],
    examples: [
      { ruby: "<ruby>意味<rt>いみ</rt></ruby>が<ruby>理解<rt>りかい</rt></ruby>できた。", en: "I was able to understand the meaning." },
      { ruby: "<ruby>相手<rt>あいて</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>理解<rt>りかい</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "Understanding the other person's feelings is important." },
      { ruby: "<ruby>異文化<rt>いぶんか</rt></ruby>への<ruby>理解<rt>りかい</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>めることが、<ruby>国際社会<rt>こくさいしゃかい</rt></ruby>で<ruby>活躍<rt>かつやく</rt></ruby>するための<ruby>第一歩<rt>だいいっぽ</rt></ruby>だ。", en: "Deepening one's understanding of different cultures is the first step to being active in international society." },
    ]
  },
  {
    group: 1,
    word: "考え方", wordRuby: "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>",
    pos: "noun", keyword: "Way of Thinking",
    meaning: "way of thinking; mindset; perspective; outlook",
    particles: [
      { ruby: "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>う", meaning: "ways of thinking differ" },
      { ruby: "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>を<ruby>変<rt>か</rt></ruby>える", meaning: "change one's mindset" },
      { ruby: "<ruby>柔軟<rt>じゅうなん</rt></ruby>な<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>", meaning: "flexible way of thinking" },
    ],
    examples: [
      { ruby: "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>変<rt>か</rt></ruby>わった。", en: "My way of thinking changed." },
      { ruby: "ポジティブな<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "A positive way of thinking is important." },
      { ruby: "ひとつの<ruby>問題<rt>もんだい</rt></ruby>にも<ruby>様々<rt>さまざま</rt></ruby>な<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>があり、それが<ruby>豊<rt>ゆたか</rt></ruby>な<ruby>議論<rt>ぎろん</rt></ruby>を<ruby>生<rt>う</rt></ruby>む。", en: "There are various ways of thinking about any one problem, and that gives rise to rich discussion." },
    ]
  },
  {
    group: 1,
    word: "意識", wordRuby: "<ruby>意識<rt>いしき</rt></ruby>",
    pos: "noun / する-verb", keyword: "Awareness",
    meaning: "awareness; consciousness; intention; being mindful",
    particles: [
      { ruby: "〜を<ruby>意識<rt>いしき</rt></ruby>する", meaning: "be conscious of ~; be aware of ~" },
      { ruby: "<ruby>意識<rt>いしき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い", meaning: "have high awareness; be conscientious" },
      { ruby: "〜への<ruby>意識<rt>いしき</rt></ruby>", meaning: "awareness of ~; consciousness toward ~" },
    ],
    examples: [
      { ruby: "<ruby>健康<rt>けんこう</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>して<ruby>食事<rt>しょくじ</rt></ruby>している。", en: "I eat with health in mind." },
      { ruby: "もっと<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>した<ruby>生活<rt>せいかつ</rt></ruby>をしたい。", en: "I want to lead a life more mindful of the environment." },
      { ruby: "<ruby>職場<rt>しょくば</rt></ruby>では、<ruby>常<rt>つね</rt></ruby>にチームとしての<ruby>一体感<rt>いったいかん</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>して<ruby>行動<rt>こうどう</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "In the workplace it is important to always act with awareness of a sense of unity as a team." },
    ]
  },
  {
    group: 1,
    word: "注意", wordRuby: "<ruby>注意<rt>ちゅうい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Caution / Warning",
    meaning: "caution; attention; warning; advice",
    particles: [
      { ruby: "〜に<ruby>注意<rt>ちゅうい</rt></ruby>する", meaning: "be careful of ~; pay attention to ~" },
      { ruby: "<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>払<rt>はら</rt></ruby>う", meaning: "pay attention; exercise caution" },
      { ruby: "<ruby>注意<rt>ちゅうい</rt></ruby>をする", meaning: "give a warning; caution someone" },
    ],
    examples: [
      { ruby: "<ruby>足元<rt>あしもと</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>してください。", en: "Please watch your step." },
      { ruby: "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>された。", en: "I was warned by the teacher." },
      { ruby: "この<ruby>薬<rt>くすり</rt></ruby>は<ruby>副作用<rt>ふくさよう</rt></ruby>があるため、<ruby>用量<rt>ようりょう</rt></ruby>には<ruby>十分<rt>じゅうぶん</rt></ruby><ruby>注意<rt>ちゅうい</rt></ruby>して<ruby>使用<rt>しよう</rt></ruby>してください。", en: "Since this medicine has side effects, please use it with sufficient caution regarding dosage." },
    ]
  },
  {
    group: 1,
    word: "反省", wordRuby: "<ruby>反省<rt>はんせい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Reflection",
    meaning: "self-reflection; introspection; regret; reconsidering",
    particles: [
      { ruby: "〜を<ruby>反省<rt>はんせい</rt></ruby>する", meaning: "reflect on ~; feel regret about ~" },
      { ruby: "<ruby>深<rt>ふか</rt></ruby>く<ruby>反省<rt>はんせい</rt></ruby>する", meaning: "deeply reflect; feel deep remorse" },
      { ruby: "<ruby>反省<rt>はんせい</rt></ruby>点", meaning: "points for reflection; areas to improve" },
    ],
    examples: [
      { ruby: "自分の<ruby>行動<rt>こうどう</rt></ruby>を<ruby>反省<rt>はんせい</rt></ruby>した。", en: "I reflected on my own actions." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>反省<rt>はんせい</rt></ruby>して<ruby>次<rt>つぎ</rt></ruby>に<ruby>活<rt>い</rt></ruby>かした。", en: "I reflected on the failure and made use of it next time." },
      { ruby: "<ruby>反省<rt>はんせい</rt></ruby>することは<ruby>大切<rt>たいせつ</rt></ruby>だが、<ruby>過去<rt>かこ</rt></ruby>にとらわれすぎず<ruby>前<rt>まえ</rt></ruby>を<ruby>向<rt>む</rt></ruby>くことも<ruby>同様<rt>どうよう</rt></ruby>に<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "Self-reflection is important, but it is equally important to look forward without being too caught up in the past." },
    ]
  },
  {
    group: 1,
    word: "信じる", wordRuby: "<ruby>信<rt>しん</rt></ruby>じる",
    pos: "verb (Group 2)", keyword: "Believe / Trust",
    meaning: "to believe; to trust; to have faith in",
    particles: [
      { ruby: "〜を<ruby>信<rt>しん</rt></ruby>じる", meaning: "believe ~; trust ~" },
      { ruby: "〜と<ruby>信<rt>しん</rt></ruby>じる", meaning: "believe that ~" },
      { ruby: "〜を<ruby>信<rt>しん</rt></ruby>じて<ruby>疑<rt>うたが</rt></ruby>わない", meaning: "believe ~ without a doubt" },
    ],
    examples: [
      { ruby: "自分を<ruby>信<rt>しん</rt></ruby>じて。", en: "Believe in yourself." },
      { ruby: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じて<ruby>良<rt>よ</rt></ruby>かった。", en: "I'm glad I believed his words." },
      { ruby: "どんなに<ruby>困難<rt>こんなん</rt></ruby>な<ruby>状況<rt>じょうきょう</rt></ruby>でも、<ruby>仲間<rt>なかま</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じて<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えることができた。", en: "No matter how difficult the situation, I was able to overcome it together by trusting my companions." },
    ]
  },
  {
    group: 1,
    word: "想像", wordRuby: "<ruby>想像<rt>そうぞう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Imagination",
    meaning: "imagination; supposition; picturing in one's mind",
    particles: [
      { ruby: "〜を<ruby>想像<rt>そうぞう</rt></ruby>する", meaning: "imagine ~; picture ~" },
      { ruby: "<ruby>想像<rt>そうぞう</rt></ruby>もできない", meaning: "cannot even imagine" },
      { ruby: "<ruby>想像<rt>そうぞう</rt></ruby>以上<rt>いじょう</rt></ruby>に", meaning: "more than imagined; beyond imagination" },
    ],
    examples: [
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>を<ruby>想像<rt>そうぞう</rt></ruby>してワクワクした。", en: "I imagined the future and felt excited." },
      { ruby: "<ruby>想像<rt>そうぞう</rt></ruby>以上に<ruby>難<rt>むずか</rt></ruby>しかった。", en: "It was more difficult than I imagined." },
      { ruby: "<ruby>相手<rt>あいて</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>に<ruby>立<rt>た</rt></ruby>って<ruby>想像<rt>そうぞう</rt></ruby>することで、より<ruby>深<rt>ふか</rt></ruby>い<ruby>理解<rt>りかい</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれる。", en: "By imagining things from the other person's position, deeper understanding is born." },
    ]
  },

  // ── GROUP 2: Human Relations ────────────────────────────────
  {
    group: 2,
    word: "関係", wordRuby: "<ruby>関係<rt>かんけい</rt></ruby>",
    pos: "noun", keyword: "Relationship",
    meaning: "relationship; connection; involvement; relevance",
    particles: [
      { ruby: "〜との<ruby>関係<rt>かんけい</rt></ruby>", meaning: "relationship with ~" },
      { ruby: "<ruby>関係<rt>かんけい</rt></ruby>がある／ない", meaning: "be related / unrelated" },
      { ruby: "<ruby>関係<rt>かんけい</rt></ruby>を<ruby>築<rt>きず</rt></ruby>く", meaning: "build a relationship" },
    ],
    examples: [
      { ruby: "<ruby>二人<rt>ふたり</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>は<ruby>良<rt>よ</rt></ruby>好だ。", en: "The relationship between the two is good." },
      { ruby: "その<ruby>件<rt>けん</rt></ruby>とは<ruby>関係<rt>かんけい</rt></ruby>がない。", en: "That matter is unrelated." },
      { ruby: "<ruby>職場<rt>しょくば</rt></ruby>での<ruby>人間関係<rt>にんげんかんけい</rt></ruby>を<ruby>良<rt>よ</rt></ruby>くするためには、<ruby>日頃<rt>ひごろ</rt></ruby>からコミュニケーションを<ruby>大切<rt>たいせつ</rt></ruby>にすることが<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "To improve relationships at the workplace, it is necessary to cherish communication on a daily basis." },
    ]
  },
  {
    group: 2,
    word: "協力", wordRuby: "<ruby>協力<rt>きょうりょく</rt></ruby>",
    pos: "noun / する-verb", keyword: "Cooperation",
    meaning: "cooperation; collaboration; working together",
    particles: [
      { ruby: "〜に<ruby>協力<rt>きょうりょく</rt></ruby>する", meaning: "cooperate with ~" },
      { ruby: "〜の<ruby>協力<rt>きょうりょく</rt></ruby>を<ruby>得<rt>え</rt></ruby>る", meaning: "gain cooperation from ~" },
      { ruby: "<ruby>協力<rt>きょうりょく</rt></ruby>してもらう", meaning: "have someone cooperate" },
    ],
    examples: [
      { ruby: "みんなで<ruby>協力<rt>きょうりょく</rt></ruby>しよう。", en: "Let's all cooperate." },
      { ruby: "<ruby>チーム全員<rt>ちーむぜんいん</rt></ruby>が<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>させた。", en: "All team members cooperated to complete it." },
      { ruby: "<ruby>地域社会<rt>ちいきしゃかい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>するには、<ruby>住民<rt>じゅうみん</rt></ruby>と<ruby>行政<rt>ぎょうせい</rt></ruby>が<ruby>一体<rt>いったい</rt></ruby>となって<ruby>協力<rt>きょうりょく</rt></ruby>することが<ruby>不可欠<rt>ふかけつ</rt></ruby>だ。", en: "To solve local community problems, it is indispensable for residents and the government to cooperate as one." },
    ]
  },
  {
    group: 2,
    word: "迷惑", wordRuby: "<ruby>迷惑<rt>めいわく</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Nuisance",
    meaning: "nuisance; trouble; inconvenience; bother",
    particles: [
      { ruby: "〜に<ruby>迷惑<rt>めいわく</rt></ruby>をかける", meaning: "cause trouble to ~; bother ~" },
      { ruby: "<ruby>迷惑<rt>めいわく</rt></ruby>になる", meaning: "become a nuisance" },
      { ruby: "<ruby>ご迷惑<rt>ごめいわく</rt></ruby>をおかけして", meaning: "I am sorry to have troubled you (formal)" },
    ],
    examples: [
      { ruby: "<ruby>迷惑<rt>めいわく</rt></ruby>をかけてすみません。", en: "I'm sorry for the trouble I caused." },
      { ruby: "<ruby>周<rt>まわ</rt></ruby>りに<ruby>迷惑<rt>めいわく</rt></ruby>をかけないように<ruby>注意<rt>ちゅうい</rt></ruby>した。", en: "I was careful not to cause trouble to those around me." },
      { ruby: "<ruby>公共<rt>こうきょう</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>では、<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>迷惑<rt>めいわく</rt></ruby>をかけないようなマナーを<ruby>守<rt>まも</rt></ruby>ることが<ruby>求<rt>もと</rt></ruby>められる。", en: "In public places, one is expected to observe manners so as not to cause trouble to others." },
    ]
  },
  {
    group: 2,
    word: "尊敬", wordRuby: "<ruby>尊敬<rt>そんけい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Respect",
    meaning: "respect; admiration; looking up to someone",
    particles: [
      { ruby: "〜を<ruby>尊敬<rt>そんけい</rt></ruby>する", meaning: "respect ~; admire ~" },
      { ruby: "〜に<ruby>尊敬<rt>そんけい</rt></ruby>される", meaning: "be respected by ~" },
      { ruby: "<ruby>尊敬<rt>そんけい</rt></ruby>できる<ruby>人<rt>ひと</rt></ruby>", meaning: "a person one can respect" },
    ],
    examples: [
      { ruby: "<ruby>先生<rt>せんせい</rt></ruby>をとても<ruby>尊敬<rt>そんけい</rt></ruby>している。", en: "I deeply respect my teacher." },
      { ruby: "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>周<rt>まわ</rt></ruby>りから<ruby>尊敬<rt>そんけい</rt></ruby>されている。", en: "She is respected by those around her." },
      { ruby: "<ruby>互<rt>たが</rt></ruby>いを<ruby>尊敬<rt>そんけい</rt></ruby>し<ruby>認<rt>みと</rt></ruby>め<ruby>合<rt>あ</rt></ruby>うことが、<ruby>良<rt>よ</rt></ruby>い<ruby>人間関係<rt>にんげんかんけい</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>だ。", en: "Mutually respecting and acknowledging each other is the basis of good human relationships." },
    ]
  },
  {
    group: 2,
    word: "親切", wordRuby: "<ruby>親切<rt>しんせつ</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Kindness",
    meaning: "kindness; helpfulness; being nice to others",
    particles: [
      { ruby: "〜に<ruby>親切<rt>しんせつ</rt></ruby>にする", meaning: "be kind to ~" },
      { ruby: "<ruby>親切<rt>しんせつ</rt></ruby>にしてもらう", meaning: "receive kindness from someone" },
      { ruby: "<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>", meaning: "a kind person" },
    ],
    examples: [
      { ruby: "とても<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>だ。", en: "They are a very kind person." },
      { ruby: "<ruby>親切<rt>しんせつ</rt></ruby>にしてもらって<ruby>嬉<rt>うれ</rt></ruby>しかった。", en: "I was glad to receive such kindness." },
      { ruby: "<ruby>見知<rt>みし</rt></ruby>らぬ<ruby>人<rt>ひと</rt></ruby>に<ruby>道<rt>みち</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたら、<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えてくれて、日本の<ruby>人<rt>ひと</rt></ruby>の<ruby>親切<rt>しんせつ</rt></ruby>さに<ruby>感動<rt>かんどう</rt></ruby>した。", en: "When I asked a stranger for directions, they kindly told me, and I was moved by the kindness of people in Japan." },
    ]
  },
  {
    group: 2,
    word: "遠慮", wordRuby: "<ruby>遠慮<rt>えんりょ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Restraint / Hesitation",
    meaning: "restraint; hesitation; reserve; holding back (polite refusal)",
    particles: [
      { ruby: "<ruby>遠慮<rt>えんりょ</rt></ruby>なく", meaning: "without hesitation; feel free to" },
      { ruby: "〜を<ruby>遠慮<rt>えんりょ</rt></ruby>する", meaning: "refrain from ~; hold back on ~" },
      { ruby: "<ruby>ご遠慮<rt>ごえんりょ</rt></ruby>ください", meaning: "please refrain from ~ (polite)" },
    ],
    examples: [
      { ruby: "<ruby>遠慮<rt>えんりょ</rt></ruby>しないでね。", en: "Don't hold back." },
      { ruby: "<ruby>遠慮<rt>えんりょ</rt></ruby>なくお<ruby>申<rt>もう</rt></ruby>し<ruby>付<rt>つ</rt></ruby>けください。", en: "Please feel free to let us know." },
      { ruby: "この<ruby>部屋<rt>へや</rt></ruby>では<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>のご<ruby>使用<rt>しよう</rt></ruby>は<ruby>ご遠慮<rt>ごえんりょ</rt></ruby>ください。", en: "Please refrain from using mobile phones in this room." },
    ]
  },

  // ── GROUP 3: Movement & Direction ──────────────────────────
  {
    group: 3,
    word: "向かう", wordRuby: "<ruby>向<rt>む</rt></ruby>かう",
    pos: "verb (Group 1)", keyword: "Head Toward",
    meaning: "to head toward; to face; to proceed to",
    particles: [
      { ruby: "〜に<ruby>向<rt>む</rt></ruby>かう", meaning: "head toward ~; proceed to ~" },
      { ruby: "〜に<ruby>向<rt>む</rt></ruby>かって", meaning: "toward ~; facing ~" },
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>に<ruby>向<rt>む</rt></ruby>かう", meaning: "move toward a goal" },
    ],
    examples: [
      { ruby: "<ruby>空港<rt>くうこう</rt></ruby>に<ruby>向<rt>む</rt></ruby>かった。", en: "I headed to the airport." },
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって<ruby>頑張<rt>がんば</rt></ruby>っている。", en: "I'm working hard toward my dream." },
      { ruby: "<ruby>卒業後<rt>そつぎょうご</rt></ruby>、より<ruby>良<rt>よ</rt></ruby>い<ruby>未来<rt>みらい</rt></ruby>に<ruby>向<rt>む</rt></ruby>かってそれぞれの<ruby>道<rt>みち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めた。", en: "After graduation, everyone started walking their own path toward a better future." },
    ]
  },
  {
    group: 3,
    word: "戻る", wordRuby: "<ruby>戻<rt>もど</rt></ruby>る",
    pos: "verb (Group 1)", keyword: "Return",
    meaning: "to return; to go back; to come back",
    particles: [
      { ruby: "〜に<ruby>戻<rt>もど</rt></ruby>る", meaning: "return to ~; go back to ~" },
      { ruby: "もとに<ruby>戻<rt>もど</rt></ruby>る", meaning: "return to the original state" },
      { ruby: "すぐ<ruby>戻<rt>もど</rt></ruby>る", meaning: "return soon; be right back" },
    ],
    examples: [
      { ruby: "すぐ<ruby>戻<rt>もど</rt></ruby>ります。", en: "I'll be right back." },
      { ruby: "<ruby>家<rt>いえ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ったら<ruby>電話<rt>でんわ</rt></ruby>して。", en: "Call me when you get back home." },
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>は<ruby>成功<rt>せいこう</rt></ruby>し、<ruby>体調<rt>たいちょう</rt></ruby>も<ruby>元<rt>もと</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>りつつある。", en: "The surgery was successful and the physical condition is gradually returning to its original state." },
    ]
  },
  {
    group: 3,
    word: "移動", wordRuby: "<ruby>移動<rt>いどう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Move / Travel",
    meaning: "movement; travel; transfer; getting from A to B",
    particles: [
      { ruby: "〜で<ruby>移動<rt>いどう</rt></ruby>する", meaning: "travel by ~; move using ~" },
      { ruby: "〜に<ruby>移動<rt>いどう</rt></ruby>する", meaning: "move to ~" },
      { ruby: "<ruby>移動<rt>いどう</rt></ruby><ruby>時間<rt>じかん</rt></ruby>", meaning: "travel time; commute time" },
    ],
    examples: [
      { ruby: "バスで<ruby>移動<rt>いどう</rt></ruby>した。", en: "I traveled by bus." },
      { ruby: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>会場<rt>かいじょう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>しよう。", en: "Let's move to the next venue." },
      { ruby: "この<ruby>アプリ<rt>あぷり</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えば、<ruby>最短<rt>さいたん</rt></ruby>ルートで<ruby>目的地<rt>もくてきち</rt></ruby>まで<ruby>移動<rt>いどう</rt></ruby>することができる。", en: "Using this app, you can travel to your destination via the shortest route." },
    ]
  },
  {
    group: 3,
    word: "追いかける", wordRuby: "<ruby>追<rt>お</rt></ruby>いかける",
    pos: "verb (Group 2)", keyword: "Chase After",
    meaning: "to chase; to run after; to pursue",
    particles: [
      { ruby: "〜を<ruby>追<rt>お</rt></ruby>いかける", meaning: "chase ~; pursue ~" },
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>追<rt>お</rt></ruby>いかける", meaning: "chase one's dream; pursue a dream" },
      { ruby: "<ruby>追<rt>お</rt></ruby>いかけ<ruby>続<rt>つづ</rt></ruby>ける", meaning: "keep chasing / pursuing" },
    ],
    examples: [
      { ruby: "<ruby>犬<rt>いぬ</rt></ruby>が<ruby>猫<rt>ねこ</rt></ruby>を<ruby>追<rt>お</rt></ruby>いかけた。", en: "The dog chased the cat." },
      { ruby: "ずっと<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>追<rt>お</rt></ruby>いかけてきた。", en: "I've been chasing my dream all along." },
      { ruby: "バスに<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れたので、<ruby>必死<rt>ひっし</rt></ruby>に<ruby>追<rt>お</rt></ruby>いかけたが、<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わなかった。", en: "I missed the bus so I desperately chased after it, but I didn't make it in time." },
    ]
  },
  {
    group: 3,
    word: "集まる", wordRuby: "<ruby>集<rt>あつ</rt></ruby>まる",
    pos: "verb (Group 1)", keyword: "Gather",
    meaning: "to gather; to assemble; to come together",
    particles: [
      { ruby: "〜に<ruby>集<rt>あつ</rt></ruby>まる", meaning: "gather at ~" },
      { ruby: "〜が<ruby>集<rt>あつ</rt></ruby>まる", meaning: "~ gathers; ~ assembles" },
      { ruby: "<ruby>注目<rt>ちゅうもく</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まる", meaning: "attention gathers; attract attention" },
    ],
    examples: [
      { ruby: "<ruby>みんな<rt>みんな</rt></ruby>が<ruby>広場<rt>ひろば</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まった。", en: "Everyone gathered in the square." },
      { ruby: "<ruby>世界中<rt>せかいじゅう</rt></ruby>から<ruby>観光客<rt>かんこうきゃく</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まる。", en: "Tourists gather from around the world." },
      { ruby: "その<ruby>スタートアップ<rt>すたーとあっぷ</rt></ruby>には、<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>人材<rt>じんざい</rt></ruby>が<ruby>世界<rt>せかい</rt></ruby>から<ruby>集<rt>あつ</rt></ruby>まっている。", en: "Talented people from around the world are gathering at that startup." },
    ]
  },
  {
    group: 3,
    word: "逃げる", wordRuby: "<ruby>逃<rt>に</rt></ruby>げる",
    pos: "verb (Group 2)", keyword: "Run Away",
    meaning: "to run away; to flee; to escape; to avoid",
    particles: [
      { ruby: "〜から<ruby>逃<rt>に</rt></ruby>げる", meaning: "flee from ~; escape from ~" },
      { ruby: "<ruby>逃<rt>に</rt></ruby>げ<ruby>出<rt>だ</rt></ruby>す", meaning: "run away; make a break for it" },
      { ruby: "<ruby>現実<rt>げんじつ</rt></ruby>から<ruby>逃<rt>に</rt></ruby>げる", meaning: "escape from reality" },
    ],
    examples: [
      { ruby: "<ruby>怖<rt>こわ</rt></ruby>くて<ruby>逃<rt>に</rt></ruby>げた。", en: "I ran away because I was scared." },
      { ruby: "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>から<ruby>逃<rt>に</rt></ruby>げた。", en: "I fled from the dangerous place." },
      { ruby: "<ruby>困難<rt>こんなん</rt></ruby>に<ruby>直面<rt>ちょくめん</rt></ruby>したとき、<ruby>逃<rt>に</rt></ruby>げずに<ruby>立<rt>た</rt></ruby>ち<ruby>向<rt>む</rt></ruby>かう<ruby>勇気<rt>ゆうき</rt></ruby>が<ruby>人<rt>ひと</rt></ruby>を<ruby>成長<rt>せいちょう</rt></ruby>させる。", en: "When facing difficulty, the courage to confront it without running away is what makes a person grow." },
    ]
  },

  // ── GROUP 4: State & Condition ──────────────────────────────
  {
    group: 4,
    word: "状況", wordRuby: "<ruby>状況<rt>じょうきょう</rt></ruby>",
    pos: "noun", keyword: "Situation",
    meaning: "situation; circumstances; state of affairs",
    particles: [
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>判断<rt>はんだん</rt></ruby>する", meaning: "assess the situation" },
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて", meaning: "according to the situation" },
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる", meaning: "the situation changes" },
    ],
    examples: [
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>をよく<ruby>見<rt>み</rt></ruby>てから<ruby>行動<rt>こうどう</rt></ruby>した。", en: "I acted after looking carefully at the situation." },
      { ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>対応<rt>たいおう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる。", en: "The response changes depending on the situation." },
      { ruby: "<ruby>刻々<rt>こっこく</rt></ruby>と<ruby>変化<rt>へんか</rt></ruby>する<ruby>状況<rt>じょうきょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、<ruby>柔軟<rt>じゅうなん</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>することが<ruby>求<rt>もと</rt></ruby>められる。", en: "In a situation that changes moment by moment, flexible response is required." },
    ]
  },
  {
    group: 4,
    word: "安全", wordRuby: "<ruby>安全<rt>あんぜん</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Safe",
    meaning: "safety; security; being free from danger",
    particles: [
      { ruby: "<ruby>安全<rt>あんぜん</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する", meaning: "ensure safety" },
      { ruby: "<ruby>安全<rt>あんぜん</rt></ruby>に〜する", meaning: "do ~ safely" },
      { ruby: "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>", meaning: "a safe place" },
    ],
    examples: [
      { ruby: "<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけてください。", en: "Please be careful about safety." },
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>安全<rt>あんぜん</rt></ruby>を<ruby>第一<rt>だいいち</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えた。", en: "I thought of the children's safety first." },
      { ruby: "この<ruby>地域<rt>ちいき</rt></ruby>では<ruby>夜<rt>よる</rt></ruby>でも<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>くことができ、それが<ruby>住<rt>す</rt></ruby>みやすさの<ruby>大<rt>おお</rt></ruby>きな<ruby>魅力<rt>みりょく</rt></ruby>だ。", en: "In this area one can walk safely even at night, and that is a major appeal of living here." },
    ]
  },
  {
    group: 4,
    word: "複雑", wordRuby: "<ruby>複雑<rt>ふくざつ</rt></ruby>",
    pos: "な-adjective", keyword: "Complicated",
    meaning: "complicated; complex; intricate",
    particles: [
      { ruby: "〜が<ruby>複雑<rt>ふくざつ</rt></ruby>だ", meaning: "~ is complicated" },
      { ruby: "<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>", meaning: "a complex problem" },
      { ruby: "<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ち", meaning: "complicated feelings; mixed feelings" },
    ],
    examples: [
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>が<ruby>複雑<rt>ふくざつ</rt></ruby>すぎる。", en: "The problem is too complicated." },
      { ruby: "<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちで<ruby>聞<rt>き</rt></ruby>いた。", en: "I listened with complicated feelings." },
      { ruby: "この<ruby>件<rt>けん</rt></ruby>は<ruby>様々<rt>さまざま</rt></ruby>な<ruby>要因<rt>よういん</rt></ruby>が<ruby>絡<rt>から</rt></ruby>み<ruby>合<rt>あ</rt></ruby>っており、<ruby>単純<rt>たんじゅん</rt></ruby>に<ruby>解決<rt>かいけつ</rt></ruby>できるほど<ruby>複雑<rt>ふくざつ</rt></ruby>ではない。", en: "This matter is not so complex that it cannot be resolved simply, as various factors are intertwined." },
    ]
  },
  {
    group: 4,
    word: "丁寧", wordRuby: "<ruby>丁寧<rt>ていねい</rt></ruby>",
    pos: "な-adjective", keyword: "Polite / Careful",
    meaning: "polite; careful; thorough; meticulous",
    particles: [
      { ruby: "<ruby>丁寧<rt>ていねい</rt></ruby>に〜する", meaning: "do ~ carefully / politely" },
      { ruby: "<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>", meaning: "polite language" },
      { ruby: "<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>対応<rt>たいおう</rt></ruby>", meaning: "courteous / careful handling" },
    ],
    examples: [
      { ruby: "<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してくれた。", en: "They explained carefully." },
      { ruby: "<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>で<ruby>伝<rt>つた</rt></ruby>えた。", en: "I conveyed it in polite language." },
      { ruby: "お<ruby>客様<rt>きゃくさま</rt></ruby>一人ひとりに<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>することが、サービス<ruby>業<rt>ぎょう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>だ。", en: "Responding carefully to each individual customer is the basis of the service industry." },
    ]
  },
  {
    group: 4,
    word: "正直", wordRuby: "<ruby>正直<rt>しょうじき</rt></ruby>",
    pos: "な-adjective / adverb", keyword: "Honest",
    meaning: "honest; frank; truthful; to be frank",
    particles: [
      { ruby: "<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>話<rt>はな</rt></ruby>す", meaning: "speak honestly" },
      { ruby: "<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>言<rt>い</rt></ruby>うと", meaning: "to be honest; frankly speaking" },
      { ruby: "<ruby>正直<rt>しょうじき</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>", meaning: "an honest person" },
    ],
    examples: [
      { ruby: "<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>言<rt>い</rt></ruby>ってください。", en: "Please speak honestly." },
      { ruby: "<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>言<rt>い</rt></ruby>うと、あまり<ruby>好<rt>す</rt></ruby>きじゃない。", en: "To be honest, I don't really like it." },
      { ruby: "<ruby>どんな<rt>どんな</rt></ruby><ruby>状況<rt>じょうきょう</rt></ruby>でも<ruby>正直<rt>しょうじき</rt></ruby>でいることが、<ruby>長期的<rt>ちょうきてき</rt></ruby>に<ruby>信頼<rt>しんらい</rt></ruby>を<ruby>築<rt>きず</rt></ruby>く<ruby>上<rt>うえ</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "Being honest in any situation is most important for building trust in the long term." },
    ]
  },
  {
    group: 4,
    word: "素直", wordRuby: "<ruby>素直<rt>すなお</rt></ruby>",
    pos: "な-adjective", keyword: "Honest / Obedient",
    meaning: "honest; obedient; straightforward; docile; willing to accept",
    particles: [
      { ruby: "<ruby>素直<rt>すなお</rt></ruby>に〜する", meaning: "do ~ honestly / readily" },
      { ruby: "<ruby>素直<rt>すなお</rt></ruby>に<ruby>認<rt>みと</rt></ruby>める", meaning: "honestly acknowledge; admit readily" },
      { ruby: "<ruby>素直<rt>すなお</rt></ruby>な<ruby>子<rt>こ</rt></ruby>", meaning: "an obedient / honest child" },
    ],
    examples: [
      { ruby: "<ruby>素直<rt>すなお</rt></ruby>な<ruby>子<rt>こ</rt></ruby>だ。", en: "They are an honest, obedient child." },
      { ruby: "<ruby>アドバイス<rt>アドバイス</rt></ruby>を<ruby>素直<rt>すなお</rt></ruby>に<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れた。", en: "I honestly took the advice to heart." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>素直<rt>すなお</rt></ruby>に<ruby>認<rt>みと</rt></ruby>めて<ruby>謝<rt>あやま</rt></ruby>ることは、<ruby>人間関係<rt>にんげんかんけい</rt></ruby>を<ruby>修復<rt>しゅうふく</rt></ruby>する<ruby>第一歩<rt>だいいっぽ</rt></ruby>だ。", en: "Honestly admitting failure and apologizing is the first step in repairing a human relationship." },
    ]
  },

  // ── GROUP 5: Degree & Extent ────────────────────────────────
  {
    group: 5,
    word: "かなり", wordRuby: "かなり",
    pos: "adverb", keyword: "Considerably",
    meaning: "considerably; quite; rather; fairly",
    particles: [
      { ruby: "かなり〜だ", meaning: "is quite ~" },
      { ruby: "かなりの〜", meaning: "quite a ~ (modifying noun)" },
      { ruby: "かなり<ruby>前<rt>まえ</rt></ruby>に", meaning: "quite a long time ago" },
    ],
    examples: [
      { ruby: "かなり<ruby>難<rt>むずか</rt></ruby>しい。", en: "It's quite difficult." },
      { ruby: "かなりの<ruby>人<rt>ひと</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>した。", en: "Quite a lot of people participated." },
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>の<ruby>解決<rt>かいけつ</rt></ruby>には、かなりの<ruby>時間<rt>じかん</rt></ruby>と<ruby>費用<rt>ひよう</rt></ruby>がかかると<ruby>予想<rt>よそう</rt></ruby>される。", en: "Solving this problem is expected to require a considerable amount of time and money." },
    ]
  },
  {
    group: 5,
    word: "だいぶ", wordRuby: "だいぶ",
    pos: "adverb", keyword: "Considerably / Much Better",
    meaning: "considerably; greatly; quite; much (often implies improvement or progress)",
    particles: [
      { ruby: "だいぶ〜になった", meaning: "has become much ~" },
      { ruby: "だいぶ〜てきた", meaning: "has considerably ~ed" },
      { ruby: "だいぶ<ruby>良<rt>よ</rt></ruby>くなった", meaning: "has gotten much better" },
    ],
    examples: [
      { ruby: "だいぶ<ruby>上手<rt>じょうず</rt></ruby>になった。", en: "You've gotten quite good." },
      { ruby: "だいぶ<ruby>良<rt>よ</rt></ruby>くなってきた。", en: "It's gotten considerably better." },
      { ruby: "<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>戸惑<rt>とまど</rt></ruby>うことも<ruby>多<rt>おお</rt></ruby>かったが、だいぶ<ruby>職場<rt>しょくば</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れてきた。", en: "At first there were many things I was confused about, but I have gotten considerably used to the workplace environment." },
    ]
  },
  {
    group: 5,
    word: "せっかく", wordRuby: "せっかく",
    pos: "adverb", keyword: "With Much Effort / Since",
    meaning: "with much effort; taking the trouble to; since you've come this far; making the most of",
    particles: [
      { ruby: "せっかく〜のに", meaning: "even though you went to the trouble of ~" },
      { ruby: "せっかく〜から", meaning: "since we've gone to the trouble of ~" },
      { ruby: "せっかくの<ruby>機会<rt>きかい</rt></ruby>", meaning: "a rare/precious opportunity" },
    ],
    examples: [
      { ruby: "せっかくだから<ruby>行<rt>い</rt></ruby>こう。", en: "Since we've come this far, let's go." },
      { ruby: "せっかく<ruby>作<rt>つく</rt></ruby>ったのに<ruby>食<rt>た</rt></ruby>べてくれなかった。", en: "I went to the trouble of making it, but they didn't eat it." },
      { ruby: "せっかく<ruby>海外<rt>かいがい</rt></ruby>に<ruby>来<rt>き</rt></ruby>たのだから、<ruby>現地<rt>げんち</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>食<rt>しょく</rt></ruby>を<ruby>思<rt>おも</rt></ruby>いっきり<ruby>楽<rt>たの</rt></ruby>しもう。", en: "Since we've gone to the trouble of coming overseas, let's thoroughly enjoy the local culture and food." },
    ]
  },
  {
    group: 5,
    word: "わざわざ", wordRuby: "わざわざ",
    pos: "adverb", keyword: "Expressly / Going Out of One's Way",
    meaning: "expressly; going out of one's way; taking the trouble; specially",
    particles: [
      { ruby: "わざわざ〜してくれた", meaning: "went out of the way to do ~ for me" },
      { ruby: "わざわざ〜くる", meaning: "come especially to ~" },
      { ruby: "わざわざ〜しなくていい", meaning: "no need to go out of your way to ~" },
    ],
    examples: [
      { ruby: "わざわざ<ruby>来<rt>き</rt></ruby>てくれてありがとう。", en: "Thank you for coming all the way." },
      { ruby: "わざわざ<ruby>送<rt>おく</rt></ruby>ってもらって<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない。", en: "I'm sorry you went out of your way to bring it." },
      { ruby: "わざわざ<ruby>遠<rt>とお</rt></ruby>くから<ruby>足<rt>あし</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んでいただき、<ruby>誠<rt>まこと</rt></ruby>にありがとうございます。", en: "Thank you very sincerely for going out of your way to come from so far." },
    ]
  },
  {
    group: 5,
    word: "ぜひ", wordRuby: "ぜひ",
    pos: "adverb", keyword: "By All Means",
    meaning: "by all means; certainly; definitely; please do",
    particles: [
      { ruby: "ぜひ〜してください", meaning: "please do ~ by all means" },
      { ruby: "ぜひ〜したい", meaning: "definitely want to ~" },
      { ruby: "ぜひとも", meaning: "absolutely; by all means (stronger)" },
    ],
    examples: [
      { ruby: "ぜひ<ruby>来<rt>き</rt></ruby>てください。", en: "Please do come." },
      { ruby: "ぜひ<ruby>一度<rt>いちど</rt></ruby><ruby>試<rt>ため</rt></ruby>してみてください。", en: "Please try it at least once." },
      { ruby: "この<ruby>展覧会<rt>てんらんかい</rt></ruby>はとても<ruby>素晴<rt>すば</rt></ruby>らしいので、ぜひ<ruby>多<rt>おお</rt></ruby>くの<ruby>方<rt>かた</rt></ruby>に<ruby>足<rt>あし</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んでいただきたい。", en: "This exhibition is truly wonderful, so I would very much like many people to come and see it." },
    ]
  },
  {
    group: 5,
    word: "むしろ", wordRuby: "むしろ",
    pos: "adverb", keyword: "Rather / If Anything",
    meaning: "rather; instead; if anything; on the contrary",
    particles: [
      { ruby: "〜より<ruby>むしろ</ruby>", meaning: "rather than ~; if anything, more than ~" },
      { ruby: "むしろ〜の<ruby>方<rt>ほう</rt></ruby>が", meaning: "rather ~ is better / more ~" },
      { ruby: "むしろ<ruby>良<rt>よ</rt></ruby>かった", meaning: "it was actually better that way" },
    ],
    examples: [
      { ruby: "むしろ<ruby>良<rt>よ</rt></ruby>かったと<ruby>思<rt>おも</rt></ruby>う。", en: "I think it was actually better that way." },
      { ruby: "<ruby>難<rt>むずか</rt></ruby>しいというより、むしろ<ruby>面白<rt>おもしろ</rt></ruby>い。", en: "Rather than difficult, it's actually interesting." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>は<ruby>恥<rt>は</rt></ruby>ずかしいことではなく、むしろ<ruby>成長<rt>せいちょう</rt></ruby>のための<ruby>貴重<rt>きちょう</rt></ruby>な<ruby>機会<rt>きかい</rt></ruby>だと<ruby>考<rt>かんが</rt></ruby>えるべきだ。", en: "Failure is not a shameful thing; rather, we should think of it as a precious opportunity for growth." },
    ]
  },

  // ── GROUP 6: Work & Society ──────────────────────────────────
  {
    group: 6,
    word: "担当", wordRuby: "<ruby>担当<rt>たんとう</rt></ruby>",
    pos: "noun / する-verb", keyword: "In Charge",
    meaning: "being in charge; responsibility; person responsible",
    particles: [
      { ruby: "〜を<ruby>担当<rt>たんとう</rt></ruby>する", meaning: "be in charge of ~" },
      { ruby: "<ruby>担当者<rt>たんとうしゃ</rt></ruby>", meaning: "the person in charge" },
      { ruby: "〜<ruby>担当<rt>たんとう</rt></ruby>", meaning: "~ division; in charge of ~" },
    ],
    examples: [
      { ruby: "この<ruby>案件<rt>あんけん</rt></ruby>の<ruby>担当<rt>たんとう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか？", en: "Who is in charge of this matter?" },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しいプロジェクトを<ruby>担当<rt>たんとう</rt></ruby>することになった。", en: "I've come to be in charge of a new project." },
      { ruby: "ご<ruby>不明<rt>ふめい</rt></ruby>な<ruby>点<rt>てん</rt></ruby>がございましたら、<ruby>担当者<rt>たんとうしゃ</rt></ruby>にお<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせください。", en: "If you have any questions, please inquire with the person in charge." },
    ]
  },
  {
    group: 6,
    word: "提出", wordRuby: "<ruby>提出<rt>ていしゅつ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Submit",
    meaning: "submission; presenting; handing in",
    particles: [
      { ruby: "〜を<ruby>提出<rt>ていしゅつ</rt></ruby>する", meaning: "submit ~; hand in ~" },
      { ruby: "〜に<ruby>提出<rt>ていしゅつ</rt></ruby>する", meaning: "submit ~ to ~" },
      { ruby: "<ruby>提出<rt>ていしゅつ</rt></ruby><ruby>期限<rt>きげん</rt></ruby>", meaning: "submission deadline" },
    ],
    examples: [
      { ruby: "<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>した。", en: "I submitted the homework." },
      { ruby: "<ruby>期限<rt>きげん</rt></ruby>までに<ruby>書類<rt>しょるい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>してください。", en: "Please submit the documents by the deadline." },
      { ruby: "<ruby>申請書<rt>しんせいしょ</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>する<ruby>際<rt>さい</rt></ruby>は、<ruby>必要書類<rt>ひつようしょるい</rt></ruby>がすべて<ruby>揃<rt>そろ</rt></ruby>っているか<ruby>事前<rt>じぜん</rt></ruby>にご<ruby>確認<rt>かくにん</rt></ruby>ください。", en: "When submitting the application form, please confirm in advance that all necessary documents are in order." },
    ]
  },
  {
    group: 6,
    word: "参加", wordRuby: "<ruby>参加<rt>さんか</rt></ruby>",
    pos: "noun / する-verb", keyword: "Participation",
    meaning: "participation; taking part; joining",
    particles: [
      { ruby: "〜に<ruby>参加<rt>さんか</rt></ruby>する", meaning: "participate in ~; take part in ~" },
      { ruby: "<ruby>参加者<rt>さんかしゃ</rt></ruby>", meaning: "participant; attendee" },
      { ruby: "<ruby>参加<rt>さんか</rt></ruby>を<ruby>募<rt>つの</rt></ruby>る", meaning: "recruit participants; solicit attendance" },
    ],
    examples: [
      { ruby: "<ruby>大会<rt>たいかい</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>した。", en: "I participated in the tournament." },
      { ruby: "<ruby>ぜひ参加<rt>ぜひさんか</rt></ruby>してください。", en: "Please do participate." },
      { ruby: "このイベントには<ruby>世界中<rt>せかいじゅう</rt></ruby>から<ruby>約<rt>やく</rt></ruby>500<ruby>名<rt>めい</rt></ruby>の<ruby>参加者<rt>さんかしゃ</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まった。", en: "About 500 participants from around the world gathered for this event." },
    ]
  },
  {
    group: 6,
    word: "申し込む", wordRuby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む",
    pos: "verb (Group 1)", keyword: "Apply / Sign Up",
    meaning: "to apply for; to sign up; to register; to request",
    particles: [
      { ruby: "〜に<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む", meaning: "apply for ~; sign up for ~" },
      { ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>方法<rt>ほうほう</rt></ruby>", meaning: "how to apply; application method" },
      { ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り", meaning: "application deadline" },
    ],
    examples: [
      { ruby: "コースに<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んだ。", en: "I signed up for the course." },
      { ruby: "オンラインで<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>めます。", en: "You can apply online." },
      { ruby: "<ruby>参加<rt>さんか</rt></ruby>ご<ruby>希望<rt>きぼう</rt></ruby>の<ruby>方<rt>かた</rt></ruby>は、<ruby>来週<rt>らいしゅう</rt></ruby><ruby>金曜日<rt>きんようび</rt></ruby>までにお<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みください。", en: "Those who wish to participate please apply by next Friday." },
    ]
  },
  {
    group: 6,
    word: "役に立つ", wordRuby: "<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ",
    pos: "verb (Group 1)", keyword: "Be Useful",
    meaning: "to be useful; to be helpful; to serve a purpose",
    particles: [
      { ruby: "〜の<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ", meaning: "be useful to ~; be helpful for ~" },
      { ruby: "<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>てる", meaning: "can be useful; be able to help" },
      { ruby: "<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>たない", meaning: "useless; not helpful" },
    ],
    examples: [
      { ruby: "この<ruby>本<rt>ほん</rt></ruby>はとても<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>った。", en: "This book was very useful." },
      { ruby: "<ruby>経験<rt>けいけん</rt></ruby>が<ruby>仕事<rt>しごと</rt></ruby>の<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>っている。", en: "My experience is being useful in my work." },
      { ruby: "この<ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>学<rt>まな</rt></ruby>んだことが、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>の<ruby>場面<rt>ばめん</rt></ruby>で<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つことを<ruby>願<rt>ねが</rt></ruby>っている。", en: "I hope that what was learned in this class will prove useful in real work situations." },
    ]
  },
  {
    group: 6,
    word: "給料", wordRuby: "<ruby>給料<rt>きゅうりょう</rt></ruby>",
    pos: "noun", keyword: "Salary / Wages",
    meaning: "salary; wages; pay",
    particles: [
      { ruby: "<ruby>給料<rt>きゅうりょう</rt></ruby>をもらう", meaning: "receive a salary" },
      { ruby: "<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる", meaning: "salary goes up; get a raise" },
      { ruby: "<ruby>給料日<rt>きゅうりょうび</rt></ruby>", meaning: "payday" },
    ],
    examples: [
      { ruby: "<ruby>給料日<rt>きゅうりょうび</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しみだ。", en: "I look forward to payday." },
      { ruby: "<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がって<ruby>嬉<rt>うれ</rt></ruby>しかった。", en: "I was happy that my salary went up." },
      { ruby: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶとき、<ruby>給料<rt>きゅうりょう</rt></ruby>だけでなく、<ruby>仕事<rt>しごと</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>や<ruby>職場<rt>しょくば</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>も<ruby>総合的<rt>そうごうてき</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "When choosing a job, it is important to consider not only the salary but also the nature of the work and the workplace environment comprehensively." },
    ]
  },

  // ── GROUP 7: Nature & Time ───────────────────────────────────
  {
    group: 7,
    word: "季節", wordRuby: "<ruby>季節<rt>きせつ</rt></ruby>",
    pos: "noun", keyword: "Season",
    meaning: "season; time of year",
    particles: [
      { ruby: "〜の<ruby>季節<rt>きせつ</rt></ruby>", meaning: "the season of ~" },
      { ruby: "<ruby>季節<rt>きせつ</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる", meaning: "the season changes" },
      { ruby: "<ruby>季節<rt>きせつ</rt></ruby>によって", meaning: "depending on the season" },
    ],
    examples: [
      { ruby: "<ruby>春<rt>はる</rt></ruby>は<ruby>好<rt>す</rt></ruby>きな<ruby>季節<rt>きせつ</rt></ruby>だ。", en: "Spring is my favorite season." },
      { ruby: "<ruby>季節<rt>きせつ</rt></ruby>によって<ruby>服装<rt>ふくそう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる。", en: "Clothing changes depending on the season." },
      { ruby: "日本には<ruby>四季<rt>しき</rt></ruby>それぞれに<ruby>美<rt>うつく</rt></ruby>しい<ruby>自然<rt>しぜん</rt></ruby>があり、<ruby>季節<rt>きせつ</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しむ<ruby>文化<rt>ぶんか</rt></ruby>が<ruby>根付<rt>ねづ</rt></ruby>いている。", en: "Japan has beautiful nature in each of the four seasons, and a culture of enjoying seasonal changes is deeply rooted." },
    ]
  },
  {
    group: 7,
    word: "自然", wordRuby: "<ruby>自然<rt>しぜん</rt></ruby>",
    pos: "noun / な-adjective / adverb", keyword: "Nature / Natural",
    meaning: "nature; natural; spontaneously; as a matter of course",
    particles: [
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>に〜する", meaning: "do ~ naturally; spontaneously" },
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "protect nature" },
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>と〜", meaning: "naturally ~; of its own accord" },
    ],
    examples: [
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でリフレッシュした。", en: "I refreshed myself in nature." },
      { ruby: "<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けていたら<ruby>自然<rt>しぜん</rt></ruby>と<ruby>上手<rt>じょうず</rt></ruby>になった。", en: "By continuing to practice, I naturally got better." },
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby>への<ruby>意識<rt>いしき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>まる<ruby>中<rt>なか</rt></ruby>、<ruby>自然<rt>しぜん</rt></ruby>と<ruby>共存<rt>きょうぞん</rt></ruby>できる<ruby>社会<rt>しゃかい</rt></ruby>の<ruby>実現<rt>じつげん</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められている。", en: "As environmental awareness grows, the realization of a society that can coexist with nature is being called for." },
    ]
  },
  {
    group: 7,
    word: "期間", wordRuby: "<ruby>期間<rt>きかん</rt></ruby>",
    pos: "noun", keyword: "Period / Duration",
    meaning: "period; duration; length of time; term",
    particles: [
      { ruby: "〜<ruby>期間<rt>きかん</rt></ruby>", meaning: "~ period (e.g. set ~, study ~)" },
      { ruby: "<ruby>期間<rt>きかん</rt></ruby>中<rt>ちゅう</rt></ruby>", meaning: "during the period; throughout the term" },
      { ruby: "<ruby>期間<rt>きかん</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎる", meaning: "the period passes; time expires" },
    ],
    examples: [
      { ruby: "キャンペーンの<ruby>期間<rt>きかん</rt></ruby>はいつですか？", en: "What is the duration of the campaign?" },
      { ruby: "<ruby>期間<rt>きかん</rt></ruby>限定のサービスです。", en: "It's a limited-period service." },
      { ruby: "<ruby>留学<rt>りゅうがく</rt></ruby><ruby>期間<rt>きかん</rt></ruby>中<rt>ちゅう</rt></ruby>は、<ruby>言語<rt>げんご</rt></ruby>だけでなく<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>価値観<rt>かちかん</rt></ruby>についても<ruby>多<rt>おお</rt></ruby>くを<ruby>学<rt>まな</rt></ruby>んだ。", en: "During the study abroad period, I learned a great deal not only about language but also about culture and values." },
    ]
  },
  {
    group: 7,
    word: "途中", wordRuby: "<ruby>途中<rt>とちゅう</rt></ruby>",
    pos: "noun", keyword: "On the Way / Midway",
    meaning: "on the way; midway; partway through; in the middle of",
    particles: [
      { ruby: "〜の<ruby>途中<rt>とちゅう</rt></ruby>で", meaning: "in the middle of ~; partway through ~" },
      { ruby: "<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>やめる</ruby>", meaning: "stop partway; quit midway" },
      { ruby: "<ruby>途中<rt>とちゅう</rt></ruby>まで", meaning: "up to the middle; partway" },
    ],
    examples: [
      { ruby: "<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ってきた。", en: "It started raining on the way." },
      { ruby: "<ruby>本<rt>ほん</rt></ruby>を<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>やめるの</rt></ruby>はもったいない。", en: "It's a waste to stop reading a book midway." },
      { ruby: "<ruby>何事<rt>なにごと</rt></ruby>も<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>諦<rt>あきら</rt></ruby>めず、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>やり遂<rt>やりと</rt></ruby>げる<ruby>姿勢<rt>しせい</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "An attitude of not giving up midway on anything and seeing things through to the end is important." },
    ]
  },
  {
    group: 7,
    word: "直後", wordRuby: "<ruby>直後<rt>ちょくご</rt></ruby>",
    pos: "noun", keyword: "Immediately After",
    meaning: "immediately after; right after",
    particles: [
      { ruby: "〜の<ruby>直後<rt>ちょくご</rt></ruby>に", meaning: "immediately after ~" },
      { ruby: "<ruby>直後<rt>ちょくご</rt></ruby>から", meaning: "from right after; immediately following" },
      { ruby: "〜した<ruby>直後<rt>ちょくご</rt></ruby>", meaning: "right after doing ~" },
    ],
    examples: [
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>直後<rt>ちょくご</rt></ruby>に<ruby>結果<rt>けっか</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かった。", en: "The results were known immediately after the exam." },
      { ruby: "<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>直後<rt>ちょくご</rt></ruby>に<ruby>運動<rt>うんどう</rt></ruby>しないでください。", en: "Please don't exercise immediately after eating." },
      { ruby: "その<ruby>発表<rt>はっぴょう</rt></ruby>の<ruby>直後<rt>ちょくご</rt></ruby>から、<ruby>株価<rt>かぶか</rt></ruby>は<ruby>急激<rt>きゅうげき</rt></ruby>に<ruby>上昇<rt>じょうしょう</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>めた。", en: "Immediately after that announcement, the stock price began to rise sharply." },
    ]
  },
  {
    group: 7,
    word: "以来", wordRuby: "<ruby>以来<rt>いらい</rt></ruby>",
    pos: "noun", keyword: "Since / Ever Since",
    meaning: "since; ever since; from ~ on",
    particles: [
      { ruby: "〜<ruby>以来<rt>いらい</rt></ruby>", meaning: "since ~; ever since ~" },
      { ruby: "〜<ruby>以来<rt>いらい</rt></ruby>ずっと", meaning: "ever since ~; continuously since ~" },
      { ruby: "〜<ruby>以来<rt>いらい</rt></ruby>はじめて", meaning: "for the first time since ~" },
    ],
    examples: [
      { ruby: "<ruby>卒業以来<rt>そつぎょういらい</rt></ruby>、<ruby>会<rt>あ</rt></ruby>っていない。", en: "We haven't met since graduation." },
      { ruby: "その<ruby>事件<rt>じけん</rt></ruby>以来、<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>変<rt>か</rt></ruby>わった。", en: "My way of thinking changed since that incident." },
      { ruby: "日本に<ruby>来<rt>き</rt></ruby>て<ruby>以来<rt>いらい</rt></ruby>、<ruby>毎日<rt>まいにち</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>発見<rt>はっけん</rt></ruby>と<ruby>刺激<rt>しげき</rt></ruby>に<ruby>満<rt>み</rt></ruby>ちている。", en: "Ever since coming to Japan, every day is filled with new discoveries and stimulation." },
    ]
  },
];

const GRADE_CONFIG = [
  { label: "SIMPLE",     color: "#00e5ff", bg: "rgba(0,229,255,0.07)",   border: "rgba(0,229,255,0.3)"  },
  { label: "NATURAL",    color: "#69ff47", bg: "rgba(105,255,71,0.07)",  border: "rgba(105,255,71,0.3)" },
  { label: "EXAM-LEVEL", color: "#ff6d00", bg: "rgba(255,109,0,0.07)",   border: "rgba(255,109,0,0.3)"  },
];

const GROUP_COLORS = ["#ff6b6b","#ffa94d","#69db7c","#4dabf7","#da77f2","#ff8787","#63e6be","#ffd43b"];

export default function N3VocabApp2() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());
  const [hard, setHard] = useState(new Set());
  const [animating, setAnimating] = useState(false);
  const [filterGroup, setFilterGroup] = useState(null);
  const [tab, setTab] = useState("card");

  const filtered = filterGroup === null ? VOCAB : VOCAB.filter(v => v.group === filterGroup);
  const safeIdx  = Math.min(idx, filtered.length - 1);
  const v = filtered[safeIdx];
  const total = filtered.length;
  const knownCount = [...known].filter(i => filtered.includes(VOCAB[i])).length;
  const hardCount  = [...hard ].filter(i => filtered.includes(VOCAB[i])).length;
  const pct = Math.round((knownCount / total) * 100);
  const gi  = VOCAB.indexOf(v);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true); setFlipped(false);
    setTimeout(() => { setIdx(p => (p + dir + total) % total); setAnimating(false); }, 140);
  };
  const markKnown = () => { setKnown(p => new Set([...p, gi])); setHard(p => { const s=new Set(p); s.delete(gi); return s; }); go(1); };
  const markHard  = () => { setHard(p => new Set([...p, gi]));  setKnown(p => { const s=new Set(p); s.delete(gi); return s; }); go(1); };

  // inject furigana rt styles
  const rt = (h) => h.replace(/rt>/g, 'rt style="font-size:0.38em;color:#a5b4fc;line-height:2.2">');
  const rtSm = (h) => h.replace(/rt>/g, 'rt style="font-size:0.42em;color:#a5b4fc;line-height:2.2">');

  const gc  = GROUP_COLORS[v?.group ?? 0];
  const bdr = known.has(gi) ? "#69db7c" : hard.has(gi) ? "#ff6b6b" : "#312e81";
  const glow = known.has(gi) ? "0 0 20px rgba(105,219,124,0.3)" : hard.has(gi) ? "0 0 20px rgba(255,107,107,0.3)" : "0 0 30px rgba(99,102,241,0.15)";
  if (!v) return null;

  return (
    <div style={{minHeight:"100vh", background:"#0a0a1a", color:"#ffffff", fontFamily:"'Hiragino Mincho ProN','Yu Mincho','Georgia',serif", display:"flex", flexDirection:"column", alignItems:"center", padding:"16px 14px 48px", maxWidth:480, margin:"0 auto"}}>

      {/* ── HEADER ── */}
      <div style={{width:"100%", marginBottom:20}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14}}>
          <div>
            <div style={{fontSize:10, letterSpacing:"0.3em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, textTransform:"uppercase"}}>✦ JLPT N3 · 語彙 2 ✦</div>
            <div style={{fontSize:24, fontWeight:800, color:"#ffffff", marginTop:3, letterSpacing:"-0.02em"}}>Vocab Trainer</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:32, fontWeight:800, color:"#69db7c", lineHeight:1}}>{pct}%</div>
            <div style={{fontSize:11, color:"#818cf8", fontFamily:"system-ui", marginTop:2}}>{knownCount}/{total} 覚えた</div>
          </div>
        </div>

        {/* progress bar */}
        <div style={{height:5, background:"#1e1b4b", borderRadius:4, overflow:"hidden", marginBottom:14}}>
          <div style={{height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,#6366f1,#a78bfa,#69db7c)", borderRadius:4, transition:"width 0.4s"}} />
        </div>

        {/* stats row */}
        <div style={{display:"flex", gap:20, marginBottom:14}}>
          <span style={{fontSize:13, color:"#69db7c", fontFamily:"system-ui", fontWeight:700}}>⭐ {knownCount}</span>
          <span style={{fontSize:13, color:"#ff6b6b", fontFamily:"system-ui", fontWeight:700}}>✗ {hardCount}</span>
          <span style={{fontSize:13, color:"#6366f1", fontFamily:"system-ui"}}>◻ {total-knownCount-hardCount}</span>
        </div>

        {/* tabs */}
        <div style={{display:"flex", gap:8, marginBottom:12}}>
          {[["card","カード"],["list","一覧"]].map(([id,lbl])=>(
            <button key={id} onClick={()=>setTab(id)}
              style={{padding:"7px 18px", borderRadius:20, fontSize:12, fontFamily:"system-ui", fontWeight:700, cursor:"pointer", letterSpacing:"0.05em",
                border: tab===id ? "none" : "1px solid #312e81",
                background: tab===id ? "#6366f1" : "transparent",
                color: tab===id ? "#ffffff" : "#818cf8"}}>
              {lbl}
            </button>
          ))}
        </div>

        {/* group filters */}
        <div style={{display:"flex", flexWrap:"wrap", gap:6, marginBottom:6}}>
          <button onClick={()=>{setFilterGroup(null);setIdx(0);setFlipped(false);}}
            style={{padding:"4px 12px", borderRadius:20, fontSize:10, fontFamily:"system-ui", fontWeight:700, cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase",
              border: filterGroup===null ? "1.5px solid #a78bfa" : "1.5px solid #312e81",
              background: filterGroup===null ? "#312e81" : "transparent",
              color: filterGroup===null ? "#a78bfa" : "#6366f1"}}>
            ALL
          </button>
          {GROUPS.map((g,i)=>(
            <button key={i} onClick={()=>{setFilterGroup(i);setIdx(0);setFlipped(false);}}
              style={{padding:"4px 12px", borderRadius:20, fontSize:10, fontFamily:"system-ui", fontWeight:700, cursor:"pointer", letterSpacing:"0.04em",
                border: filterGroup===i ? `1.5px solid ${GROUP_COLORS[i]}` : "1.5px solid #312e81",
                background: filterGroup===i ? GROUP_COLORS[i]+"33" : "transparent",
                color: filterGroup===i ? GROUP_COLORS[i] : "#818cf8"}}>
              {g}
            </button>
          ))}
        </div>
        <div style={{fontSize:10, color:"#4338ca", fontFamily:"system-ui", textAlign:"center", marginTop:6, letterSpacing:"0.1em"}}>
          D1:64 · D2:54 · D3:49 · D4:47 · TOTAL 214
        </div>
      </div>

      {/* ── LIST TAB ── */}
      {tab==="list" && (
        <div style={{width:"100%", display:"flex", flexWrap:"wrap", gap:6}}>
          {filtered.map((w,i)=>{
            const wgi=VOCAB.indexOf(w);
            return (
              <button key={i} onClick={()=>{setIdx(i);setFlipped(false);setTab("card");}}
                style={{minWidth:72, padding:"9px 10px", borderRadius:12, cursor:"pointer", fontFamily:"inherit", textAlign:"center",
                  border:`2px solid ${known.has(wgi)?"#69db7c":hard.has(wgi)?"#ff6b6b":i===safeIdx?"#6366f1":"#1e1b4b"}`,
                  background: i===safeIdx ? "#1e1b4b" : "#0f0e1f",
                  color: known.has(wgi) ? "#69db7c" : hard.has(wgi) ? "#ff6b6b" : "#e2e8f0"}}>
                <span dangerouslySetInnerHTML={{__html:w.wordRuby}} style={{fontSize:16, display:"block", lineHeight:2.2}} />
                <span style={{fontSize:9, color:"#6366f1", fontFamily:"system-ui", fontWeight:700, display:"block", letterSpacing:"0.05em"}}>{w.keyword}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── CARD TAB ── */}
      {tab==="card" && (
        <div style={{width:"100%", opacity:animating?0:1, transform:animating?"translateY(8px)":"translateY(0)", transition:"opacity 0.14s,transform 0.14s"}}>
          <div onClick={()=>setFlipped(f=>!f)}
            style={{width:"100%", background:"#0f0e1f", border:`2px solid ${bdr}`, borderRadius:24, overflow:"hidden", cursor:"pointer", boxShadow:glow, marginBottom:14}}>

            {/* group accent stripe */}
            <div style={{height:6, background:gc, boxShadow:`0 0 12px ${gc}88`}} />

            {/* ── FRONT ── */}
            {!flipped && (
              <div style={{padding:"24px 22px 20px"}}>
                {/* top row */}
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22}}>
                  <span style={{fontSize:11, color:"#4338ca", fontFamily:"system-ui", letterSpacing:"0.1em"}}>{safeIdx+1} / {total}</span>
                  <span style={{fontSize:13, fontWeight:800, padding:"5px 16px", borderRadius:20, background:gc, color:"#0a0a1a", fontFamily:"system-ui", letterSpacing:"0.04em", boxShadow:`0 0 10px ${gc}66`}}>
                    {v.keyword}
                  </span>
                  <span style={{fontSize:20, width:24, textAlign:"right"}}>{known.has(gi)?"⭐":""}</span>
                </div>

                {/* big word */}
                <div style={{textAlign:"center", marginBottom:10}}>
                  <div style={{fontSize:64, lineHeight:1.8, color:"#a78bfa", fontWeight:400}} dangerouslySetInnerHTML={{__html:rt(v.wordRuby)}} />
                </div>

                {/* group label */}
                <div style={{textAlign:"center", marginBottom:6}}>
                  <span style={{fontSize:11, fontWeight:800, color:gc, fontFamily:"system-ui", letterSpacing:"0.22em", textTransform:"uppercase"}}>✦ {GROUPS[v.group]} ✦</span>
                </div>
                {/* pos */}
                <div style={{textAlign:"center", marginBottom:18}}>
                  <span style={{fontSize:12, color:"#818cf8", fontFamily:"system-ui", fontStyle:"italic"}}>{v.pos}</span>
                </div>

                <div style={{textAlign:"center", paddingTop:14, borderTop:"1px solid #1e1b4b", fontSize:12, color:"#4338ca", fontFamily:"system-ui", letterSpacing:"0.05em"}}>
                  タップして詳細を見る ↓
                </div>
              </div>
            )}

            {/* ── BACK ── */}
            {flipped && (
              <div style={{padding:"6px 22px 24px"}}>

                {/* word repeated */}
                <div style={{textAlign:"center", padding:"18px 0 6px"}}>
                  <div style={{fontSize:44, lineHeight:1.9, color:"#a78bfa"}} dangerouslySetInnerHTML={{__html:rtSm(v.wordRuby)}} />
                  <div style={{fontSize:12, color:"#818cf8", fontFamily:"system-ui", fontStyle:"italic"}}>{v.pos}</div>
                </div>

                {/* meaning */}
                <div style={{background:"#1e1b4b", borderRadius:14, padding:"16px 18px", margin:"14px 0", border:"1px solid #312e81"}}>
                  <div style={{fontSize:10, letterSpacing:"0.25em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, marginBottom:8, textTransform:"uppercase"}}>✦ Meaning</div>
                  <div style={{fontSize:20, fontWeight:700, color:"#ffffff", lineHeight:1.5}}>{v.meaning}</div>
                </div>

                {/* patterns */}
                <div style={{marginBottom:14}}>
                  <div style={{fontSize:10, letterSpacing:"0.25em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, marginBottom:10, textTransform:"uppercase"}}>✦ Key Patterns</div>
                  {v.particles.map((p,i)=>(
                    <div key={i} style={{display:"flex", alignItems:"center", gap:10, padding:"9px 14px", borderRadius:12, background:"#0a0a1a", border:"1px solid #1e1b4b", marginBottom:6}}>
                      <span style={{fontSize:15, fontWeight:700, color:"#00e5ff", lineHeight:2.2, flexShrink:0}} dangerouslySetInnerHTML={{__html:rtSm(p.ruby)}} />
                      <span style={{fontSize:12, color:"#c7d2fe", fontFamily:"system-ui", lineHeight:1.4}}>— {p.meaning}</span>
                    </div>
                  ))}
                </div>

                {/* examples */}
                <div>
                  <div style={{fontSize:10, letterSpacing:"0.25em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, marginBottom:10, textTransform:"uppercase"}}>✦ Examples</div>
                  {v.examples.map((ex,i)=>{
                    const g=GRADE_CONFIG[i];
                    return (
                      <div key={i} style={{marginBottom:10, borderRadius:14, overflow:"hidden", border:`1.5px solid ${g.border}`}}>
                        <div style={{display:"flex", alignItems:"center", gap:8, padding:"7px 14px", background:g.bg}}>
                          <div style={{width:8, height:8, borderRadius:"50%", background:g.color, boxShadow:`0 0 6px ${g.color}`, flexShrink:0}} />
                          <span style={{fontSize:10, letterSpacing:"0.18em", color:g.color, fontFamily:"system-ui", fontWeight:800}}>{g.label}</span>
                        </div>
                        <div style={{padding:"12px 16px", background:"#080816"}}>
                          <div style={{fontSize:16, color:"#e2e8f0", lineHeight:2.5}} dangerouslySetInnerHTML={{__html:rtSm(ex.ruby)}} />
                          <div style={{fontSize:12, color:"#818cf8", fontFamily:"system-ui", marginTop:6, lineHeight:1.5}}>{ex.en}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── NAV BUTTONS ── */}
          <div style={{display:"flex", gap:8, marginBottom:12}}>
            <button onClick={()=>go(-1)}
              style={{flex:1, padding:"15px", background:"#0f0e1f", border:"2px solid #1e1b4b", borderRadius:16, fontSize:20, color:"#6366f1", cursor:"pointer", fontWeight:700}}>←</button>
            <button onClick={markHard}
              style={{flex:2, padding:"15px", background:"#ff6b6b", border:"none", borderRadius:16, color:"#ffffff", fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"system-ui", letterSpacing:"0.05em", boxShadow:"0 4px 14px rgba(255,107,107,0.35)"}}>
              難しい ✗
            </button>
            <button onClick={markKnown}
              style={{flex:2, padding:"15px", background:"#69db7c", border:"none", borderRadius:16, color:"#0a0a1a", fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"system-ui", letterSpacing:"0.05em", boxShadow:"0 4px 14px rgba(105,219,124,0.35)"}}>
              覚えた！⭐
            </button>
            <button onClick={()=>go(1)}
              style={{flex:1, padding:"15px", background:"#0f0e1f", border:"2px solid #1e1b4b", borderRadius:16, fontSize:20, color:"#6366f1", cursor:"pointer", fontWeight:700}}>→</button>
          </div>

          <div style={{textAlign:"center", fontSize:11, color:"#4338ca", fontFamily:"system-ui", letterSpacing:"0.1em"}}>
            {GROUPS[v.group]} · {safeIdx+1}/{total}
          </div>
        </div>
      )}
    </div>
  );
}
