import { useState } from "react";

const GROUPS = [
  "Compound Verbs",
  "Health & Body",
  "Admin & Daily Life",
  "Quantities & Standards",
  "Key Adjectives",
  "Discourse Connectors",
];

const VOCAB = [
  // ── GROUP 0: Compound Verbs ──────────────────────────────────
  {
    group: 0,
    word: "気にする", wordRuby: "<ruby>気<rt>き</rt></ruby>にする",
    pos: "verb phrase", keyword: "Mind / Worry About",
    meaning: "to mind; to worry about; to care about; to be bothered by",
    particles: [
      { ruby: "〜を<ruby>気<rt>き</rt></ruby>にする", meaning: "mind ~; worry about ~" },
      { ruby: "<ruby>気<rt>き</rt></ruby>にしない", meaning: "not mind; don't worry about it" },
      { ruby: "〜が<ruby>気<rt>き</rt></ruby>になる", meaning: "~ bothers me; I'm concerned about ~" },
    ],
    examples: [
      { ruby: "<ruby>気<rt>き</rt></ruby>にしないで。", en: "Don't mind it." },
      { ruby: "<ruby>周<rt>まわ</rt></ruby>りの<ruby>目<rt>め</rt></ruby>を<ruby>気<rt>き</rt></ruby>にしすぎている。", en: "I'm worrying too much about others' opinions." },
      { ruby: "<ruby>他人<rt>たにん</rt></ruby>の<ruby>評価<rt>ひょうか</rt></ruby>を<ruby>気<rt>き</rt></ruby>にしすぎると、<ruby>自分<rt>じぶん</rt></ruby>らしく<ruby>生<rt>い</rt></ruby>きられなくなってしまう。", en: "If you worry too much about others' evaluations, you end up unable to live as yourself." },
    ]
  },
  {
    group: 0,
    word: "心がける", wordRuby: "<ruby>心<rt>こころ</rt></ruby>がける",
    pos: "verb (Group 2)", keyword: "Make a Point Of",
    meaning: "to make a point of; to try to; to bear in mind; to make an effort to",
    particles: [
      { ruby: "〜を<ruby>心<rt>こころ</rt></ruby>がける", meaning: "make a point of ~; be mindful of ~" },
      { ruby: "〜するよう<ruby>心<rt>こころ</rt></ruby>がける", meaning: "try to ~; make an effort to ~" },
      { ruby: "いつも<ruby>心<rt>こころ</rt></ruby>がけている", meaning: "always bear in mind; constantly make a point of" },
    ],
    examples: [
      { ruby: "<ruby>笑顔<rt>えがお</rt></ruby>を<ruby>心<rt>こころ</rt></ruby>がけている。", en: "I make a point of keeping a smile." },
      { ruby: "<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>るよう<ruby>心<rt>こころ</rt></ruby>がけている。", en: "I try to go to bed early." },
      { ruby: "お<ruby>客様<rt>きゃくさま</rt></ruby>に<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>することを<ruby>常<rt>つね</rt></ruby>に<ruby>心<rt>こころ</rt></ruby>がけることが、<ruby>信頼<rt>しんらい</rt></ruby>につながる。", en: "Always making a point of responding politely to customers leads to trust." },
    ]
  },
  {
    group: 0,
    word: "取り組む", wordRuby: "<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む",
    pos: "verb (Group 1)", keyword: "Tackle / Work On",
    meaning: "to tackle; to work on; to take on; to address",
    particles: [
      { ruby: "〜に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む", meaning: "tackle ~; work on ~; address ~" },
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む", meaning: "actively tackle; take an energetic approach" },
      { ruby: "<ruby>真剣<rt>しんけん</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む", meaning: "tackle seriously; approach earnestly" },
    ],
    examples: [
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>んだ。", en: "I tackled the problem." },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>課題<rt>かだい</rt></ruby>に<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>んでいる。", en: "I am actively working on new challenges." },
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むためには、<ruby>社会全体<rt>しゃかいぜんたい</rt></ruby>が<ruby>一体<rt>いったい</rt></ruby>となって<ruby>行動<rt>こうどう</rt></ruby>することが<ruby>求<rt>もと</rt></ruby>められる。", en: "To tackle environmental issues, the entire society is called upon to act as one." },
    ]
  },
  {
    group: 0,
    word: "思い出す", wordRuby: "<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す",
    pos: "verb (Group 1)", keyword: "Recall / Remember",
    meaning: "to recall; to remember; to call to mind",
    particles: [
      { ruby: "〜を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す", meaning: "recall ~; remember ~" },
      { ruby: "ふと<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す", meaning: "suddenly recall; unexpectedly remember" },
      { ruby: "<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>せない", meaning: "can't remember; unable to recall" },
    ],
    examples: [
      { ruby: "ふと<ruby>昔<rt>むかし</rt></ruby>のことを<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>した。", en: "I suddenly recalled something from the past." },
      { ruby: "<ruby>名前<rt>なまえ</rt></ruby>がなかなか<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>せなかった。", en: "I couldn't quite recall the name." },
      { ruby: "その<ruby>曲<rt>きょく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>くたびに、<ruby>学生時代<rt>がくせいじだい</rt></ruby>の<ruby>懐<rt>なつ</rt></ruby>かしい<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>が<ruby>蘇<rt>よみがえ</rt></ruby>る。", en: "Every time I hear that piece, nostalgic memories of my student days come flooding back." },
    ]
  },
  {
    group: 0,
    word: "落ち着く", wordRuby: "<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>く",
    pos: "verb (Group 1)", keyword: "Calm Down / Settle",
    meaning: "to calm down; to settle down; to feel at ease; to be composed",
    particles: [
      { ruby: "<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて〜する", meaning: "calmly do ~; do ~ in a composed manner" },
      { ruby: "〜が<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>く", meaning: "~ settles down; ~ calms down" },
      { ruby: "<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いた<ruby>雰囲気<rt>ふんいき</rt></ruby>", meaning: "calm atmosphere; relaxed ambience" },
    ],
    examples: [
      { ruby: "<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>話<rt>はな</rt></ruby>してください。", en: "Please speak calmly." },
      { ruby: "<ruby>深<rt>ふか</rt></ruby>呼吸して<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いた。", en: "I took a deep breath and calmed down." },
      { ruby: "<ruby>緊急<rt>きんきゅう</rt></ruby><ruby>事態<rt>じたい</rt></ruby>でも<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>判断<rt>はんだん</rt></ruby>できる<ruby>人<rt>ひと</rt></ruby>は、<ruby>周<rt>まわ</rt></ruby>りから<ruby>信頼<rt>しんらい</rt></ruby>される。", en: "A person who can calmly judge the situation even in an emergency is trusted by those around them." },
    ]
  },
  {
    group: 0,
    word: "話し合う", wordRuby: "<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う",
    pos: "verb (Group 1)", keyword: "Discuss Together",
    meaning: "to discuss together; to talk things over; to have a conversation about",
    particles: [
      { ruby: "〜について<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う", meaning: "discuss ~; talk over ~" },
      { ruby: "〜と<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う", meaning: "discuss with ~; talk it over with ~" },
      { ruby: "<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って<ruby>決<rt>き</rt></ruby>める", meaning: "decide by talking it over" },
    ],
    examples: [
      { ruby: "<ruby>二人<rt>ふたり</rt></ruby>でよく<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った。", en: "The two of us talked it over thoroughly." },
      { ruby: "チームで<ruby>問題<rt>もんだい</rt></ruby>について<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った。", en: "The team discussed the problem together." },
      { ruby: "<ruby>対立<rt>たいりつ</rt></ruby>が<ruby>生<rt>う</rt></ruby>じたときこそ、<ruby>感情的<rt>かんじょうてき</rt></ruby>にならず<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>うことが、<ruby>関係<rt>かんけい</rt></ruby>を<ruby>修復<rt>しゅうふく</rt></ruby>する<ruby>鍵<rt>かぎ</rt></ruby>だ。", en: "Precisely when conflict arises, calmly discussing without getting emotional is the key to repairing the relationship." },
    ]
  },
  {
    group: 0,
    word: "間違える", wordRuby: "<ruby>間違<rt>まちが</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Make a Mistake",
    meaning: "to make a mistake; to get wrong; to confuse",
    particles: [
      { ruby: "〜を<ruby>間違<rt>まちが</rt></ruby>える", meaning: "get ~ wrong; make a mistake with ~" },
      { ruby: "<ruby>間違<rt>まちが</rt></ruby>えてしまう", meaning: "end up making a mistake" },
      { ruby: "<ruby>間違<rt>まちが</rt></ruby>えやすい", meaning: "easy to get wrong; mistake-prone" },
    ],
    examples: [
      { ruby: "<ruby>答<rt>こた</rt></ruby>えを<ruby>間違<rt>まちが</rt></ruby>えた。", en: "I got the answer wrong." },
      { ruby: "<ruby>方向<rt>ほうこう</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えて<ruby>迷子<rt>まいご</rt></ruby>になった。", en: "I got the direction wrong and got lost." },
      { ruby: "この<ruby>漢字<rt>かんじ</rt></ruby>は<ruby>似<rt>に</rt></ruby>ているものが<ruby>多<rt>おお</rt></ruby>いので、<ruby>間違<rt>まちが</rt></ruby>えやすい。<ruby>注意<rt>ちゅうい</rt></ruby>して<ruby>覚<rt>おぼ</rt></ruby>えよう。", en: "There are many similar-looking kanji, so it's easy to get them wrong. Let's memorize them carefully." },
    ]
  },
  {
    group: 0,
    word: "申し訳ない", wordRuby: "<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない",
    pos: "い-adjective / expression", keyword: "Very Sorry",
    meaning: "very sorry; I have no excuse; I feel terrible about it",
    particles: [
      { ruby: "〜て<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない", meaning: "I'm very sorry for ~ (doing ~)" },
      { ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません", meaning: "I sincerely apologize (formal)" },
      { ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>なく<ruby>思<rt>おも</rt></ruby>う", meaning: "feel very sorry about; feel terrible" },
    ],
    examples: [
      { ruby: "<ruby>遅<rt>おく</rt></ruby>れて<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない。", en: "I'm very sorry for being late." },
      { ruby: "ご<ruby>迷惑<rt>めいわく</rt></ruby>をおかけして<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません。", en: "I sincerely apologize for the trouble I have caused." },
      { ruby: "<ruby>多大<rt>ただい</rt></ruby>なご<ruby>迷惑<rt>めいわく</rt></ruby>をおかけしてしまい、<ruby>誠<rt>まこと</rt></ruby>に<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ございません。<ruby>今後<rt>こんご</rt></ruby>このようなことがないよう<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>いたします。", en: "We are truly very sorry for causing such great inconvenience. We will take sufficient care to ensure this does not happen again." },
    ]
  },
  {
    group: 0,
    word: "うまくいく", wordRuby: "うまくいく",
    pos: "verb phrase", keyword: "Go Well / Succeed",
    meaning: "to go well; to work out; to succeed; to go smoothly",
    particles: [
      { ruby: "〜がうまくいく", meaning: "~ goes well; ~ works out" },
      { ruby: "うまくいかない", meaning: "not go well; not work out" },
      { ruby: "うまくいくよう", meaning: "so that it goes well" },
    ],
    examples: [
      { ruby: "うまくいった！", en: "It went well!" },
      { ruby: "なかなかうまくいかなくて<ruby>困<rt>こま</rt></ruby>っている。", en: "I'm troubled because things just don't go well." },
      { ruby: "<ruby>計画<rt>けいかく</rt></ruby>が<ruby>全<rt>すべ</rt></ruby>てうまくいくとは<ruby>限<rt>かぎ</rt></ruby>らないが、<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>十分<rt>じゅうぶん</rt></ruby>にしておくことで<ruby>成功<rt>せいこう</rt></ruby>の<ruby>確率<rt>かくりつ</rt></ruby>は<ruby>上<rt>あ</rt></ruby>がる。", en: "Plans don't always go well, but by preparing thoroughly the chances of success increase." },
    ]
  },
  {
    group: 0,
    word: "気になる", wordRuby: "<ruby>気<rt>き</rt></ruby>になる",
    pos: "verb phrase", keyword: "Be on One's Mind",
    meaning: "to be on one's mind; to be curious about; to be concerned about; to catch one's interest",
    particles: [
      { ruby: "〜が<ruby>気<rt>き</rt></ruby>になる", meaning: "be on one's mind; be curious about ~" },
      { ruby: "ずっと<ruby>気<rt>き</rt></ruby>になっていた", meaning: "had been on my mind for a while" },
      { ruby: "<ruby>気<rt>き</rt></ruby>になって<ruby>仕方<rt>しかた</rt></ruby>ない", meaning: "can't stop thinking about it; it's really on my mind" },
    ],
    examples: [
      { ruby: "あの<ruby>店<rt>みせ</rt></ruby>が<ruby>気<rt>き</rt></ruby>になる。", en: "That shop is on my mind." },
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>がずっと<ruby>気<rt>き</rt></ruby>になっている。", en: "The exam result has been on my mind all along." },
      { ruby: "一度<ruby>気<rt>き</rt></ruby>になり<ruby>始<rt>はじ</rt></ruby>めると、<ruby>他<rt>ほか</rt></ruby>のことに<ruby>集中<rt>しゅうちゅう</rt></ruby>できなくなってしまうことがある。", en: "Once something starts to be on your mind, you can sometimes become unable to concentrate on anything else." },
    ]
  },

  // ── GROUP 1: Health & Body ───────────────────────────────────
  {
    group: 1,
    word: "体調", wordRuby: "<ruby>体調<rt>たいちょう</rt></ruby>",
    pos: "noun", keyword: "Physical Condition",
    meaning: "physical condition; health condition; how one's body feels",
    particles: [
      { ruby: "<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>良<rt>よ</rt></ruby>い／<ruby>悪<rt>わる</rt></ruby>い", meaning: "feeling well / unwell" },
      { ruby: "<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>す", meaning: "fall ill; ruin one's health" },
      { ruby: "<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する", meaning: "manage one's physical condition" },
    ],
    examples: [
      { ruby: "今日は<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。", en: "I'm not feeling well today." },
      { ruby: "<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>して<ruby>休<rt>やす</rt></ruby>んだ。", en: "I fell ill and took a day off." },
      { ruby: "<ruby>試合<rt>しあい</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>万全<rt>ばんぜん</rt></ruby>に<ruby>整<rt>ととの</rt></ruby>えることが、<ruby>選手<rt>せんしゅ</rt></ruby>にとって<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>準備<rt>じゅんび</rt></ruby>だ。", en: "Getting one's physical condition into perfect shape for the match is the most important preparation for an athlete." },
    ]
  },
  {
    group: 1,
    word: "具合", wordRuby: "<ruby>具合<rt>ぐあい</rt></ruby>",
    pos: "noun", keyword: "Condition / How It's Going",
    meaning: "condition; state; how things are; the way something is working",
    particles: [
      { ruby: "<ruby>具合<rt>ぐあい</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い", meaning: "feeling unwell; in bad condition" },
      { ruby: "〜の<ruby>具合<rt>ぐあい</rt></ruby>はどうですか", meaning: "how is ~ going? how is the condition of ~?" },
      { ruby: "<ruby>具合<rt>ぐあい</rt></ruby>よく〜できる", meaning: "can ~ conveniently / nicely" },
    ],
    examples: [
      { ruby: "<ruby>具合<rt>ぐあい</rt></ruby>はどうですか？", en: "How are you feeling?" },
      { ruby: "<ruby>機械<rt>きかい</rt></ruby>の<ruby>具合<rt>ぐあい</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。", en: "The machine is in bad condition." },
      { ruby: "お<ruby>体<rt>からだ</rt></ruby>の<ruby>具合<rt>ぐあい</rt></ruby>はいかがですか。<ruby>無理<rt>むり</rt></ruby>をせず、どうかゆっくりお<ruby>休<rt>やす</rt></ruby>みください。", en: "How is your physical condition? Please don't push yourself and do take a good rest." },
    ]
  },
  {
    group: 1,
    word: "症状", wordRuby: "<ruby>症状<rt>しょうじょう</rt></ruby>",
    pos: "noun", keyword: "Symptom",
    meaning: "symptom; sign of illness",
    particles: [
      { ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>る", meaning: "symptoms appear" },
      { ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>改善<rt>かいぜん</rt></ruby>される", meaning: "symptoms improve" },
      { ruby: "〜という<ruby>症状<rt>しょうじょう</rt></ruby>", meaning: "the symptom of ~" },
    ],
    examples: [
      { ruby: "どんな<ruby>症状<rt>しょうじょう</rt></ruby>ですか？", en: "What are the symptoms?" },
      { ruby: "<ruby>熱<rt>ねつ</rt></ruby>と<ruby>咳<rt>せき</rt></ruby>の<ruby>症状<rt>しょうじょう</rt></ruby>がある。", en: "I have symptoms of fever and cough." },
      { ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>軽<rt>かる</rt></ruby>いうちに<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>が、<ruby>早<rt>はや</rt></ruby>期<ruby>発見<rt>はっけん</rt></ruby>・<ruby>早<rt>はや</rt></ruby>期<ruby>治療<rt>ちりょう</rt></ruby>につながる。", en: "Going to the hospital while symptoms are still mild leads to early detection and early treatment." },
    ]
  },
  {
    group: 1,
    word: "治療", wordRuby: "<ruby>治療<rt>ちりょう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Treatment",
    meaning: "medical treatment; therapy; cure",
    particles: [
      { ruby: "<ruby>治療<rt>ちりょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける", meaning: "receive treatment; undergo treatment" },
      { ruby: "<ruby>治療<rt>ちりょう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ", meaning: "treatment is necessary" },
      { ruby: "<ruby>治療<rt>ちりょう</rt></ruby>に<ruby>専念<rt>せんねん</rt></ruby>する", meaning: "devote oneself to treatment" },
    ],
    examples: [
      { ruby: "<ruby>治療<rt>ちりょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けている。", en: "I am receiving treatment." },
      { ruby: "<ruby>早<rt>はや</rt></ruby>めに<ruby>治療<rt>ちりょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めた。", en: "I started treatment early." },
      { ruby: "<ruby>医師<rt>いし</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>に<ruby>従<rt>したが</rt></ruby>って<ruby>治療<rt>ちりょう</rt></ruby>に<ruby>専念<rt>せんねん</rt></ruby>することが、<ruby>回復<rt>かいふく</rt></ruby>への<ruby>近道<rt>ちかみち</rt></ruby>だ。", en: "Devoting oneself to treatment by following the doctor's instructions is a shortcut to recovery." },
    ]
  },
  {
    group: 1,
    word: "入院", wordRuby: "<ruby>入院<rt>にゅういん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Hospitalization",
    meaning: "hospitalization; being admitted to hospital",
    particles: [
      { ruby: "<ruby>入院<rt>にゅういん</rt></ruby>する", meaning: "be hospitalized; be admitted to hospital" },
      { ruby: "<ruby>入院<rt>にゅういん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ", meaning: "hospitalization is necessary" },
      { ruby: "〜<ruby>日間<rt>にちかん</rt></ruby><ruby>入院<rt>にゅういん</rt></ruby>する", meaning: "be hospitalized for ~ days" },
    ],
    examples: [
      { ruby: "1<ruby>週間<rt>しゅうかん</rt></ruby><ruby>入院<rt>にゅういん</rt></ruby>した。", en: "I was hospitalized for one week." },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>入院<rt>にゅういん</rt></ruby>することになった。", en: "I suddenly had to be hospitalized." },
      { ruby: "<ruby>入院<rt>にゅういん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は<ruby>多<rt>おお</rt></ruby>くの<ruby>方<rt>かた</rt></ruby>にお<ruby>見舞<rt>みま</rt></ruby>いに<ruby>来<rt>き</rt></ruby>ていただき、その<ruby>温<rt>あたた</rt></ruby>かさに<ruby>励<rt>はげ</rt></ruby>まされた。", en: "During my hospitalization, many people came to visit me and I was encouraged by their warmth." },
    ]
  },
  {
    group: 1,
    word: "退院", wordRuby: "<ruby>退院<rt>たいいん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Discharge from Hospital",
    meaning: "leaving hospital; being discharged from hospital",
    particles: [
      { ruby: "<ruby>退院<rt>たいいん</rt></ruby>する", meaning: "leave hospital; be discharged" },
      { ruby: "<ruby>退院<rt>たいいん</rt></ruby>後<rt>ご</rt></ruby>に", meaning: "after leaving hospital" },
      { ruby: "<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>退院<rt>たいいん</rt></ruby>する", meaning: "safely leave hospital; be discharged without problems" },
    ],
    examples: [
      { ruby: "ようやく<ruby>退院<rt>たいいん</rt></ruby>できた。", en: "I was finally able to leave the hospital." },
      { ruby: "<ruby>退院<rt>たいいん</rt></ruby>後<rt>ご</rt></ruby>も<ruby>通院<rt>つういん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "Outpatient visits are still necessary after discharge." },
      { ruby: "<ruby>退院<rt>たいいん</rt></ruby>後<rt>ご</rt></ruby>はリハビリに<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みながら、<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>日常生活<rt>にちじょうせいかつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>っていった。", en: "After being discharged, I gradually returned to daily life while working on rehabilitation." },
    ]
  },
  {
    group: 1,
    word: "手術", wordRuby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Surgery",
    meaning: "surgery; operation",
    particles: [
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける", meaning: "have surgery; undergo an operation" },
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>する", meaning: "surgery is successful" },
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ", meaning: "surgery is necessary" },
    ],
    examples: [
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>は<ruby>成功<rt>せいこう</rt></ruby>した。", en: "The surgery was successful." },
      { ruby: "<ruby>明日<rt>あした</rt></ruby><ruby>手術<rt>しゅじゅつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", en: "I'm having surgery tomorrow." },
      { ruby: "<ruby>手術<rt>しゅじゅつ</rt></ruby>の<ruby>リスク<rt>リスク</rt></ruby>について<ruby>医師<rt>いし</rt></ruby>から<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>説明<rt>せつめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>け、<ruby>納得<rt>なっとく</rt></ruby>した<ruby>上<rt>うえ</rt></ruby>で<ruby>同意<rt>どうい</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to receive a sufficient explanation from the doctor about the risks of surgery and then consent with full understanding." },
    ]
  },
  {
    group: 1,
    word: "検査", wordRuby: "<ruby>検査<rt>けんさ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Examination / Inspection",
    meaning: "examination; inspection; check; test",
    particles: [
      { ruby: "<ruby>検査<rt>けんさ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける", meaning: "undergo an examination; have a check-up" },
      { ruby: "<ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>", meaning: "examination results; test results" },
      { ruby: "<ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>検査<rt>けんさ</rt></ruby>する", meaning: "have regular check-ups" },
    ],
    examples: [
      { ruby: "<ruby>血液検査<rt>けつえきけんさ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた。", en: "I had a blood test." },
      { ruby: "<ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>は<ruby>問題<rt>もんだい</rt></ruby>なかった。", en: "The examination results showed no problems." },
      { ruby: "<ruby>自覚症状<rt>じかくしょうじょう</rt></ruby>がなくても、<ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>健康診断<rt>けんこうしんだん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けることで<ruby>病気<rt>びょうき</rt></ruby>の<ruby>早期発見<rt>そうきはっけん</rt></ruby>につながる。", en: "Even if there are no noticeable symptoms, having regular health check-ups leads to early detection of illness." },
    ]
  },

  // ── GROUP 2: Admin & Daily Life ──────────────────────────────
  {
    group: 2,
    word: "手続き", wordRuby: "<ruby>手続<rt>てつづ</rt></ruby>き",
    pos: "noun", keyword: "Procedure",
    meaning: "procedure; formalities; paperwork; process",
    particles: [
      { ruby: "<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>行<rt>おこな</rt></ruby>う", meaning: "carry out a procedure; complete formalities" },
      { ruby: "<ruby>手続<rt>てつづ</rt></ruby>きが<ruby>必要<rt>ひつよう</rt></ruby>だ", meaning: "a procedure is necessary" },
      { ruby: "<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>済<rt>す</rt></ruby>ませる", meaning: "complete the procedures; finish the formalities" },
    ],
    examples: [
      { ruby: "<ruby>手続<rt>てつづ</rt></ruby>きをしてください。", en: "Please complete the procedure." },
      { ruby: "<ruby>入学<rt>にゅうがく</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>済<rt>す</rt></ruby>ませた。", en: "I completed the enrollment procedures." },
      { ruby: "<ruby>海外転勤<rt>かいがいてんきん</rt></ruby>の<ruby>際<rt>さい</rt></ruby>は、ビザの<ruby>申請<rt>しんせい</rt></ruby>や<ruby>住所変更<rt>じゅうしょへんこう</rt></ruby>など<ruby>様々<rt>さまざま</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きが<ruby>必要<rt>ひつよう</rt></ruby>になる。", en: "When transferring overseas, various procedures become necessary such as applying for a visa and changing one's address." },
    ]
  },
  {
    group: 2,
    word: "申請", wordRuby: "<ruby>申請<rt>しんせい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Application",
    meaning: "application; request; formal filing",
    particles: [
      { ruby: "〜を<ruby>申請<rt>しんせい</rt></ruby>する", meaning: "apply for ~; file for ~" },
      { ruby: "<ruby>申請<rt>しんせい</rt></ruby>書<rt>しょ</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>する", meaning: "submit an application form" },
      { ruby: "<ruby>申請<rt>しんせい</rt></ruby>が<ruby>通<rt>とお</rt></ruby>る", meaning: "an application is approved / goes through" },
    ],
    examples: [
      { ruby: "<ruby>許可<rt>きょか</rt></ruby>を<ruby>申請<rt>しんせい</rt></ruby>した。", en: "I applied for permission." },
      { ruby: "<ruby>補助金<rt>ほじょきん</rt></ruby>の<ruby>申請<rt>しんせい</rt></ruby>をした。", en: "I filed for a subsidy." },
      { ruby: "<ruby>申請書<rt>しんせいしょ</rt></ruby>に<ruby>必要事項<rt>ひつようじこう</rt></ruby>を<ruby>記入<rt>きにゅう</rt></ruby>し、<ruby>期限<rt>きげん</rt></ruby>までに<ruby>窓口<rt>まどぐち</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>してください。", en: "Please fill in the required items on the application form and submit it to the counter by the deadline." },
    ]
  },
  {
    group: 2,
    word: "予約", wordRuby: "<ruby>予約<rt>よやく</rt></ruby>",
    pos: "noun / する-verb", keyword: "Reservation",
    meaning: "reservation; booking; advance order",
    particles: [
      { ruby: "〜を<ruby>予約<rt>よやく</rt></ruby>する", meaning: "reserve ~; book ~" },
      { ruby: "<ruby>予約<rt>よやく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れる", meaning: "get a reservation" },
      { ruby: "<ruby>予約<rt>よやく</rt></ruby>を<ruby>キャンセル<rt>キャンセル</rt></ruby>する", meaning: "cancel a reservation" },
    ],
    examples: [
      { ruby: "レストランを<ruby>予約<rt>よやく</rt></ruby>した。", en: "I made a restaurant reservation." },
      { ruby: "<ruby>予約<rt>よやく</rt></ruby>なしでは<ruby>入<rt>はい</rt></ruby>れません。", en: "You cannot enter without a reservation." },
      { ruby: "この<ruby>人気<rt>にんき</rt></ruby>レストランは<ruby>数週間<rt>すうしゅうかん</rt></ruby>先まで<ruby>予約<rt>よやく</rt></ruby>が<ruby>埋<rt>う</rt></ruby>まっており、なかなか<ruby>予約<rt>よやく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れない。", en: "This popular restaurant is fully booked weeks ahead and it's hard to get a reservation." },
    ]
  },
  {
    group: 2,
    word: "締め切り", wordRuby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り",
    pos: "noun", keyword: "Deadline",
    meaning: "deadline; closing date; cut-off time",
    particles: [
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りに<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う", meaning: "meet the deadline; make it by the deadline" },
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りを<ruby>守<rt>まも</rt></ruby>る", meaning: "keep to the deadline; observe the deadline" },
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り<ruby>直前<rt>ちょくぜん</rt></ruby>", meaning: "just before the deadline" },
    ],
    examples: [
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りはいつですか？", en: "When is the deadline?" },
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りに<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わなかった。", en: "I didn't make the deadline." },
      { ruby: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り<ruby>直前<rt>ちょくぜん</rt></ruby>に<ruby>慌<rt>あわ</rt></ruby>てることがないよう、<ruby>計画的<rt>けいかくてき</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to proceed with work in a planned manner so as not to panic right before the deadline." },
    ]
  },
  {
    group: 2,
    word: "期限", wordRuby: "<ruby>期限<rt>きげん</rt></ruby>",
    pos: "noun", keyword: "Time Limit / Expiry",
    meaning: "time limit; deadline; expiry; due date",
    particles: [
      { ruby: "<ruby>期限<rt>きげん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "meet the time limit; observe the due date" },
      { ruby: "<ruby>期限<rt>きげん</rt></ruby>が<ruby>切<rt>き</rt></ruby>れる", meaning: "the time limit expires; pass the expiry date" },
      { ruby: "〜<ruby>期限<rt>きげん</rt></ruby>", meaning: "~ deadline (e.g. application ~)" },
    ],
    examples: [
      { ruby: "<ruby>期限<rt>きげん</rt></ruby>は<ruby>来月<rt>らいげつ</rt></ruby>だ。", en: "The deadline is next month." },
      { ruby: "パスポートの<ruby>期限<rt>きげん</rt></ruby>が<ruby>切<rt>き</rt></ruby>れた。", en: "My passport has expired." },
      { ruby: "<ruby>食品<rt>しょくひん</rt></ruby>の<ruby>消費期限<rt>しょうひきげん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>せずに<ruby>食<rt>た</rt></ruby>べると<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>があるので<ruby>注意<rt>ちゅうい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "There is a risk of food poisoning if you eat food without checking its use-by date, so caution is necessary." },
    ]
  },
  {
    group: 2,
    word: "費用", wordRuby: "<ruby>費用<rt>ひよう</rt></ruby>",
    pos: "noun", keyword: "Cost / Expense",
    meaning: "cost; expense; expenditure",
    particles: [
      { ruby: "<ruby>費用<rt>ひよう</rt></ruby>がかかる", meaning: "cost money; take expense" },
      { ruby: "<ruby>費用<rt>ひよう</rt></ruby>を<ruby>抑<rt>おさ</rt></ruby>える", meaning: "keep costs down; reduce expenses" },
      { ruby: "〜の<ruby>費用<rt>ひよう</rt></ruby>", meaning: "the cost of ~" },
    ],
    examples: [
      { ruby: "<ruby>費用<rt>ひよう</rt></ruby>はいくらですか？", en: "How much does it cost?" },
      { ruby: "<ruby>修理<rt>しゅうり</rt></ruby>の<ruby>費用<rt>ひよう</rt></ruby>が<ruby>思<rt>おも</rt></ruby>ったより<ruby>高<rt>たか</rt></ruby>かった。", en: "The repair cost was higher than I expected." },
      { ruby: "<ruby>留学<rt>りゅうがく</rt></ruby>を<ruby>検討<rt>けんとう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>には、<ruby>学費<rt>がくひ</rt></ruby>だけでなく<ruby>生活費<rt>せいかつひ</rt></ruby>や<ruby>渡航費用<rt>とこうひよう</rt></ruby>なども<ruby>含<rt>ふく</rt></ruby>めた<ruby>総合的<rt>そうごうてき</rt></ruby>な<ruby>費用<rt>ひよう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", en: "When considering studying abroad, it is necessary to calculate the total costs including not just tuition but also living expenses and travel costs." },
    ]
  },
  {
    group: 2,
    word: "料金", wordRuby: "<ruby>料金<rt>りょうきん</rt></ruby>",
    pos: "noun", keyword: "Fee / Charge",
    meaning: "fee; charge; fare; rate",
    particles: [
      { ruby: "<ruby>料金<rt>りょうきん</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>う", meaning: "pay a fee; pay a charge" },
      { ruby: "〜の<ruby>料金<rt>りょうきん</rt></ruby>", meaning: "the fee for ~; the charge for ~" },
      { ruby: "<ruby>料金<rt>りょうきん</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる", meaning: "fees / prices go up" },
    ],
    examples: [
      { ruby: "<ruby>入場料金<rt>にゅうじょうりょうきん</rt></ruby>はいくらですか？", en: "How much is the admission fee?" },
      { ruby: "電気の<ruby>料金<rt>りょうきん</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がった。", en: "The electricity charge went up." },
      { ruby: "このサービスは<ruby>基本<rt>きほん</rt></ruby><ruby>料金<rt>りょうきん</rt></ruby>は<ruby>無料<rt>むりょう</rt></ruby>だが、<ruby>追加<rt>ついか</rt></ruby><ruby>機能<rt>きのう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>には<ruby>別途<rt>べっと</rt></ruby><ruby>料金<rt>りょうきん</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する。", en: "The basic fee for this service is free, but a separate charge arises when using additional features." },
    ]
  },
  {
    group: 2,
    word: "割引", wordRuby: "<ruby>割引<rt>わりびき</rt></ruby>",
    pos: "noun / する-verb", keyword: "Discount",
    meaning: "discount; price reduction",
    particles: [
      { ruby: "<ruby>割引<rt>わりびき</rt></ruby>をする", meaning: "give a discount" },
      { ruby: "〜<ruby>割引<rt>わりびき</rt></ruby>", meaning: "~ percent off" },
      { ruby: "<ruby>割引<rt>わりびき</rt></ruby><ruby>券<rt>けん</rt></ruby>", meaning: "discount voucher / coupon" },
    ],
    examples: [
      { ruby: "学生<ruby>割引<rt>わりびき</rt></ruby>がありますか？", en: "Is there a student discount?" },
      { ruby: "セールで30%<ruby>割引<rt>わりびき</rt></ruby>になっていた。", en: "It was 30% off in the sale." },
      { ruby: "<ruby>会員<rt>かいいん</rt></ruby>になると<ruby>様々<rt>さまざま</rt></ruby>な<ruby>割引<rt>わりびき</rt></ruby>サービスが<ruby>受<rt>う</rt></ruby>けられるので、<ruby>頻繁<rt>ひんぱん</rt></ruby>に<ruby>利用<rt>りよう</rt></ruby>する<ruby>方<rt>かた</rt></ruby>には<ruby>入会<rt>にゅうかい</rt></ruby>をおすすめします。", en: "Since becoming a member allows you to receive various discount services, we recommend joining for those who use it frequently." },
    ]
  },

  // ── GROUP 3: Quantities & Standards ─────────────────────────
  {
    group: 3,
    word: "程度", wordRuby: "<ruby>程度<rt>ていど</rt></ruby>",
    pos: "noun", keyword: "Degree / Level",
    meaning: "degree; level; extent; about; around",
    particles: [
      { ruby: "〜<ruby>程度<rt>ていど</rt></ruby>", meaning: "about ~; around ~; to the degree of ~" },
      { ruby: "ある<ruby>程度<rt>ていど</rt></ruby>", meaning: "to a certain degree; up to a point" },
      { ruby: "<ruby>程度<rt>ていど</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>い", meaning: "of low quality / level" },
    ],
    examples: [
      { ruby: "ある<ruby>程度<rt>ていど</rt></ruby>は<ruby>分<rt>わ</rt></ruby>かる。", en: "I understand it to a certain degree." },
      { ruby: "1<ruby>時間<rt>じかん</rt></ruby><ruby>程度<rt>ていど</rt></ruby>かかる。", en: "It takes about an hour." },
      { ruby: "ストレスはある<ruby>程度<rt>ていど</rt></ruby>あった<ruby>方<rt>ほう</rt></ruby>が<ruby>パフォーマンス<rt>パフォーマンス</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がるという<ruby>研究結果<rt>けんきゅうけっか</rt></ruby>もある。", en: "There are also research findings that performance improves when there is a certain degree of stress." },
    ]
  },
  {
    group: 3,
    word: "限界", wordRuby: "<ruby>限界<rt>げんかい</rt></ruby>",
    pos: "noun", keyword: "Limit / Breaking Point",
    meaning: "limit; limits; boundary; breaking point",
    particles: [
      { ruby: "<ruby>限界<rt>げんかい</rt></ruby>がある", meaning: "there are limits; have a limit" },
      { ruby: "<ruby>限界<rt>げんかい</rt></ruby>に<ruby>達<rt>たっ</rt></ruby>する", meaning: "reach the limit" },
      { ruby: "<ruby>限界<rt>げんかい</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じる", meaning: "feel one has reached a limit" },
    ],
    examples: [
      { ruby: "もう<ruby>限界<rt>げんかい</rt></ruby>だ。", en: "I've reached my limit." },
      { ruby: "体力の<ruby>限界<rt>げんかい</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>った。", en: "I did my best to the limits of my physical strength." },
      { ruby: "どんなに<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>でも一人でできることには<ruby>限界<rt>げんかい</rt></ruby>があるため、<ruby>チームワーク<rt>チームワーク</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>になる。", en: "No matter how excellent a person is, there are limits to what one can do alone, so teamwork becomes important." },
    ]
  },
  {
    group: 3,
    word: "割合", wordRuby: "<ruby>割合<rt>わりあい</rt></ruby>",
    pos: "noun / adverb", keyword: "Ratio / Relatively",
    meaning: "ratio; proportion; percentage; relatively; fairly",
    particles: [
      { ruby: "〜の<ruby>割合<rt>わりあい</rt></ruby>", meaning: "the ratio / proportion of ~" },
      { ruby: "<ruby>割合<rt>わりあい</rt></ruby>に", meaning: "relatively; comparatively; fairly" },
      { ruby: "<ruby>高<rt>たか</rt></ruby>い<ruby>割合<rt>わりあい</rt></ruby>で", meaning: "at a high rate; in a large proportion" },
    ],
    examples: [
      { ruby: "<ruby>割合<rt>わりあい</rt></ruby>に<ruby>簡単<rt>かんたん</rt></ruby>だった。", en: "It was relatively easy." },
      { ruby: "このクラスの<ruby>合格<rt>ごうかく</rt></ruby><ruby>率<rt>りつ</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い。", en: "The pass rate of this class is high." },
      { ruby: "<ruby>近年<rt>きんねん</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>く<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>しており、<ruby>多様性<rt>たようせい</rt></ruby>への<ruby>理解<rt>りかい</rt></ruby>がますます<ruby>求<rt>もと</rt></ruby>められている。", en: "In recent years, the proportion of foreigners working in Japan has been increasing, and understanding of diversity is increasingly being called for." },
    ]
  },
  {
    group: 3,
    word: "目安", wordRuby: "<ruby>目安<rt>めやす</rt></ruby>",
    pos: "noun", keyword: "Rough Guide / Standard",
    meaning: "rough guide; rough estimate; standard; benchmark",
    particles: [
      { ruby: "〜を<ruby>目安<rt>めやす</rt></ruby>にする", meaning: "use ~ as a rough guide; take ~ as a benchmark" },
      { ruby: "〜が<ruby>目安<rt>めやす</rt></ruby>だ", meaning: "~ is the rough guide / standard" },
      { ruby: "<ruby>目安<rt>めやす</rt></ruby>として", meaning: "as a rough guide; as a reference point" },
    ],
    examples: [
      { ruby: "1<ruby>時間<rt>じかん</rt></ruby>を<ruby>目安<rt>めやす</rt></ruby>にしてください。", en: "Please use one hour as a rough guide." },
      { ruby: "<ruby>毎日<rt>まいにち</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>が<ruby>目安<rt>めやす</rt></ruby>だ。", en: "Thirty minutes daily is the rough guide." },
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby><ruby>時間<rt>じかん</rt></ruby>の<ruby>目安<rt>めやす</rt></ruby>は<ruby>個人<rt>こじん</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なるが、<ruby>苦手<rt>にがて</rt></ruby><ruby>分野<rt>ぶんや</rt></ruby>に<ruby>重点<rt>じゅうてん</rt></ruby>を<ruby>置<rt>お</rt></ruby>くことが<ruby>効果的<rt>こうかてき</rt></ruby>だ。", en: "The rough guide for exam study time differs by individual, but placing emphasis on weak areas is effective." },
    ]
  },
  {
    group: 3,
    word: "手段", wordRuby: "<ruby>手段<rt>しゅだん</rt></ruby>",
    pos: "noun", keyword: "Means / Method",
    meaning: "means; method; way; measure",
    particles: [
      { ruby: "〜という<ruby>手段<rt>しゅだん</rt></ruby>", meaning: "the means of ~; ~ as a method" },
      { ruby: "<ruby>手段<rt>しゅだん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ばない", meaning: "use any means; stop at nothing" },
      { ruby: "<ruby>移動<rt>いどう</rt></ruby><ruby>手段<rt>しゅだん</rt></ruby>", meaning: "means of transportation" },
    ],
    examples: [
      { ruby: "どんな<ruby>手段<rt>しゅだん</rt></ruby>がありますか？", en: "What means are available?" },
      { ruby: "一番<ruby>効果的<rt>こうかてき</rt></ruby>な<ruby>手段<rt>しゅだん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだ。", en: "I chose the most effective means." },
      { ruby: "目的を<ruby>達成<rt>たっせい</rt></ruby>するためなら<ruby>手段<rt>しゅだん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ばないという<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>は、<ruby>倫理的<rt>りんりてき</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある。", en: "The way of thinking that any means are acceptable to achieve a goal is ethically problematic." },
    ]
  },
  {
    group: 3,
    word: "根拠", wordRuby: "<ruby>根拠<rt>こんきょ</rt></ruby>",
    pos: "noun", keyword: "Basis / Grounds",
    meaning: "basis; grounds; foundation; evidence for a claim",
    particles: [
      { ruby: "〜の<ruby>根拠<rt>こんきょ</rt></ruby>", meaning: "the basis for ~; the grounds for ~" },
      { ruby: "<ruby>根拠<rt>こんきょ</rt></ruby>がある／ない", meaning: "have / lack grounds; be / not be grounded" },
      { ruby: "<ruby>根拠<rt>こんきょ</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づく", meaning: "be based on grounds; be evidence-based" },
    ],
    examples: [
      { ruby: "その<ruby>根拠<rt>こんきょ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？", en: "What is the basis for that?" },
      { ruby: "<ruby>根拠<rt>こんきょ</rt></ruby>のない<ruby>噂<rt>うわさ</rt></ruby>は<ruby>信<rt>しん</rt></ruby>じないでください。", en: "Please don't believe groundless rumours." },
      { ruby: "<ruby>議論<rt>ぎろん</rt></ruby>をする<ruby>際<rt>さい</rt></ruby>には、<ruby>感情<rt>かんじょう</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>るのではなく、<ruby>根拠<rt>こんきょ</rt></ruby>のある<ruby>事実<rt>じじつ</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づいた<ruby>主張<rt>しゅちょう</rt></ruby>をすることが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "When making arguments, it is important not to rely on emotion but to make claims based on grounded facts." },
    ]
  },

  // ── GROUP 4: Key Adjectives ──────────────────────────────────
  {
    group: 4,
    word: "積極的", wordRuby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>",
    pos: "な-adjective", keyword: "Proactive / Active",
    meaning: "proactive; active; positive; assertive; taking the initiative",
    particles: [
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>に〜する", meaning: "proactively do ~; actively do ~" },
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>な<ruby>姿勢<rt>しせい</rt></ruby>", meaning: "a proactive attitude" },
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>する", meaning: "actively participate" },
    ],
    examples: [
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>発言<rt>はつげん</rt></ruby>した。", en: "I actively spoke up." },
      { ruby: "もっと<ruby>積極的<rt>せっきょくてき</rt></ruby>になるべきだ。", en: "I should be more proactive." },
      { ruby: "<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しいことに<ruby>挑戦<rt>ちょうせん</rt></ruby>する<ruby>姿勢<rt>しせい</rt></ruby>が、<ruby>個人<rt>こじん</rt></ruby>の<ruby>成長<rt>せいちょう</rt></ruby>につながる。", en: "An attitude of actively challenging new things leads to personal growth." },
    ]
  },
  {
    group: 4,
    word: "具体的", wordRuby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>",
    pos: "な-adjective", keyword: "Concrete / Specific",
    meaning: "concrete; specific; tangible; detailed",
    particles: [
      { ruby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>に〜する", meaning: "concretely do ~; specifically ~" },
      { ruby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>例<rt>れい</rt></ruby>", meaning: "a concrete example" },
      { ruby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>言<rt>い</rt></ruby>うと", meaning: "to put it specifically; concretely speaking" },
    ],
    examples: [
      { ruby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してください。", en: "Please explain specifically." },
      { ruby: "<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>例<rt>れい</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げてください。", en: "Please give a concrete example." },
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>は<ruby>具体的<rt>ぐたいてき</rt></ruby>で<ruby>達成可能<rt>たっせいかのう</rt></ruby>なものに<ruby>設定<rt>せってい</rt></ruby>すると、<ruby>モチベーション<rt>モチベーション</rt></ruby>が<ruby>維持<rt>いじ</rt></ruby>しやすい。", en: "When goals are set to be concrete and achievable, motivation is easier to maintain." },
    ]
  },
  {
    group: 4,
    word: "一般的", wordRuby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>",
    pos: "な-adjective", keyword: "General / Common",
    meaning: "general; common; ordinary; typical",
    particles: [
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>に〜だ", meaning: "generally it is ~; typically ~" },
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>", meaning: "a general / common way of thinking" },
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>言<rt>い</rt></ruby>えば", meaning: "generally speaking; in general" },
    ],
    examples: [
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>にはそうだ。", en: "Generally speaking, that's true." },
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>試<rt>ため</rt></ruby>した。", en: "I tried the general method." },
      { ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>認識<rt>にんしき</rt></ruby>とは<ruby>異<rt>こと</rt></ruby>なる<ruby>視点<rt>してん</rt></ruby>から<ruby>物事<rt>ものごと</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えることで、<ruby>新<rt>あたら</rt></ruby>しい<ruby>発見<rt>はっけん</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれることがある。", en: "By thinking about things from a perspective different from common understanding, new discoveries can sometimes emerge." },
    ]
  },
  {
    group: 4,
    word: "特別", wordRuby: "<ruby>特別<rt>とくべつ</rt></ruby>",
    pos: "な-adjective / adverb / noun", keyword: "Special",
    meaning: "special; particular; extraordinary; in particular",
    particles: [
      { ruby: "<ruby>特別<rt>とくべつ</rt></ruby>な〜", meaning: "a special ~; a particular ~" },
      { ruby: "<ruby>特別<rt>とくべつ</rt></ruby>に〜する", meaning: "specially do ~; do ~ as a special exception" },
      { ruby: "<ruby>特別<rt>とくべつ</rt></ruby>に<ruby>好<rt>す</rt></ruby>き", meaning: "particularly like; especially fond of" },
    ],
    examples: [
      { ruby: "今日は<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>日<rt>ひ</rt></ruby>だ。", en: "Today is a special day." },
      { ruby: "<ruby>特別<rt>とくべつ</rt></ruby>に<ruby>許可<rt>きょか</rt></ruby>した。", en: "I gave special permission." },
      { ruby: "あの<ruby>先生<rt>せんせい</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>は、ただ<ruby>知識<rt>ちしき</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えるだけでなく、<ruby>考<rt>かんが</rt></ruby>える<ruby>力<rt>ちから</rt></ruby>を<ruby>育<rt>はぐく</rt></ruby>んでくれる<ruby>特別<rt>とくべつ</rt></ruby>なものだった。", en: "That teacher's class was something special that not only taught knowledge but also nurtured the power to think." },
    ]
  },
  {
    group: 4,
    word: "急", wordRuby: "<ruby>急<rt>きゅう</rt></ruby>",
    pos: "な-adjective / noun", keyword: "Sudden / Urgent",
    meaning: "sudden; urgent; abrupt; steep",
    particles: [
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>な〜", meaning: "a sudden ~; an urgent ~" },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>に〜する", meaning: "suddenly do ~; abruptly ~" },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>な<ruby>坂<rt>さか</rt></ruby>", meaning: "a steep slope" },
    ],
    examples: [
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>な<ruby>用事<rt>ようじ</rt></ruby>ができた。", en: "An urgent matter came up." },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>予定<rt>よてい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わった。", en: "The schedule suddenly changed." },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>な<ruby>連絡<rt>れんらく</rt></ruby>で<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありませんが、<ruby>明日<rt>あした</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>になりましたのでご<ruby>確認<rt>かくにん</rt></ruby>ください。", en: "I'm sorry for the sudden notice, but please be advised that tomorrow's meeting has been cancelled." },
    ]
  },

  // ── GROUP 5: Discourse Connectors ───────────────────────────
  {
    group: 5,
    word: "一方", wordRuby: "<ruby>一方<rt>いっぽう</rt></ruby>",
    pos: "noun / conjunction", keyword: "On the Other Hand",
    meaning: "on the other hand; meanwhile; one side; while",
    particles: [
      { ruby: "〜。<ruby>一方<rt>いっぽう</rt></ruby>、〜", meaning: "~. On the other hand, ~." },
      { ruby: "〜する<ruby>一方<rt>いっぽう</rt></ruby>で", meaning: "while doing ~; on the one hand ~ while on the other ~" },
      { ruby: "<ruby>一方<rt>いっぽう</rt></ruby>で〜、<ruby>他方<rt>たほう</rt></ruby>で〜", meaning: "on one hand ~, and on the other ~" },
    ],
    examples: [
      { ruby: "<ruby>一方<rt>いっぽう</rt></ruby>で<ruby>賛成<rt>さんせい</rt></ruby>、<ruby>一方<rt>いっぽう</rt></ruby>で<ruby>反対<rt>はんたい</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>もいる。", en: "On one hand there are people who agree, while on the other there are those who oppose." },
      { ruby: "この<ruby>薬<rt>くすり</rt></ruby>は<ruby>効果<rt>こうか</rt></ruby>がある。<ruby>一方<rt>いっぽう</rt></ruby>、<ruby>副作用<rt>ふくさよう</rt></ruby>もある。", en: "This medicine is effective. On the other hand, it also has side effects." },
      { ruby: "テクノロジーの<ruby>発展<rt>はってん</rt></ruby>は<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>便利<rt>べんり</rt></ruby>にした<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>人間<rt>にんげん</rt></ruby>関係<rt>かんけい</rt></ruby>の<ruby>希薄化<rt>きはくか</rt></ruby>という<ruby>問題<rt>もんだい</rt></ruby>も<ruby>生<rt>う</rt></ruby>んでいる。", en: "While the development of technology has made life convenient, it has also created the problem of thinning human relationships." },
    ]
  },
  {
    group: 5,
    word: "そのため", wordRuby: "そのため",
    pos: "conjunction", keyword: "Therefore / For That Reason",
    meaning: "therefore; for that reason; because of that; as a result",
    particles: [
      { ruby: "〜。そのため、〜", meaning: "~. Therefore, ~. (cause → result)" },
      { ruby: "そのために〜", meaning: "for that purpose; in order to do that" },
      { ruby: "そのための〜", meaning: "~ for that purpose; ~ to that end" },
    ],
    examples: [
      { ruby: "<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。そのため、<ruby>休<rt>やす</rt></ruby>みます。", en: "I'm not feeling well. Therefore, I'll take the day off." },
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>い。そのため、<ruby>毎日<rt>まいにち</rt></ruby>勉強している。", en: "The exam is approaching. Therefore, I'm studying every day." },
      { ruby: "この<ruby>地域<rt>ちいき</rt></ruby>では<ruby>高齢化<rt>こうれいか</rt></ruby>が<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>進<rt>すす</rt></ruby>んでいる。そのため、<ruby>介護<rt>かいご</rt></ruby><ruby>施設<rt>しせつ</rt></ruby>の<ruby>充実<rt>じゅうじつ</rt></ruby>が<ruby>急務<rt>きゅうむ</rt></ruby>となっている。", en: "Ageing is advancing rapidly in this region. Therefore, the improvement of care facilities has become an urgent task." },
    ]
  },
  {
    group: 5,
    word: "それでも", wordRuby: "それでも",
    pos: "conjunction", keyword: "Even So / Nevertheless",
    meaning: "even so; nevertheless; still; despite that",
    particles: [
      { ruby: "〜。それでも、〜", meaning: "~. Even so, ~. (concession)" },
      { ruby: "それでもやはり", meaning: "even so, after all; still, all things considered" },
      { ruby: "それでも<ruby>諦<rt>あきら</rt></ruby>めない", meaning: "even so, not giving up" },
    ],
    examples: [
      { ruby: "<ruby>難<rt>むずか</rt></ruby>しい。それでも<ruby>頑張<rt>がんば</rt></ruby>る。", en: "It's difficult. Even so, I'll keep trying." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>した。それでも<ruby>諦<rt>あきら</rt></ruby>めなかった。", en: "I failed. Even so, I didn't give up." },
      { ruby: "<ruby>道<rt>みち</rt></ruby>のりは<ruby>長<rt>なが</rt></ruby>く、<ruby>何度<rt>なんど</rt></ruby>もくじけそうになった。それでも、<ruby>仲間<rt>なかま</rt></ruby>の<ruby>支<rt>ささ</rt></ruby>えがあったおかげで<ruby>最後<rt>さいご</rt></ruby>まで<ruby>走<rt>はし</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けることができた。", en: "The road was long and I felt like giving up many times. Even so, thanks to the support of my companions I was able to keep running to the end." },
    ]
  },
  {
    group: 5,
    word: "それぞれ", wordRuby: "それぞれ",
    pos: "pronoun / adverb", keyword: "Each / Respectively",
    meaning: "each; each one; respectively; individually; every one of them",
    particles: [
      { ruby: "それぞれ〜だ", meaning: "each is ~; they are ~ respectively" },
      { ruby: "それぞれの〜", meaning: "each person's ~; respective ~" },
      { ruby: "それぞれに", meaning: "in its own way; each in their own manner" },
    ],
    examples: [
      { ruby: "それぞれ<ruby>違<rt>ちが</rt></ruby>う<ruby>意見<rt>いけん</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", en: "Each person has a different opinion." },
      { ruby: "それぞれが<ruby>自分<rt>じぶん</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>を<ruby>果<rt>は</rt></ruby>たした。", en: "Each person fulfilled their own role." },
      { ruby: "チームのメンバーがそれぞれの<ruby>強<rt>つよ</rt></ruby>みを<ruby>活<rt>い</rt></ruby>かすことで、<ruby>全体<rt>ぜんたい</rt></ruby>としてより<ruby>良<rt>よ</rt></ruby>い<ruby>成果<rt>せいか</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれる。", en: "When team members each make use of their strengths, better results emerge as a whole." },
    ]
  },
  {
    group: 5,
    word: "お互い", wordRuby: "お<ruby>互<rt>たが</rt></ruby>い",
    pos: "noun / adverb", keyword: "Each Other / Mutually",
    meaning: "each other; one another; mutual; both sides",
    particles: [
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いに〜する", meaning: "mutually do ~; each other ~" },
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いの〜", meaning: "each other's ~; mutual ~" },
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いに<ruby>助<rt>たす</rt></ruby>け<ruby>合<rt>あ</rt></ruby>う", meaning: "help each other; support one another" },
    ],
    examples: [
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いに<ruby>頑張<rt>がんば</rt></ruby>ろう。", en: "Let's both do our best." },
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いの<ruby>意見<rt>いけん</rt></ruby>を<ruby>尊重<rt>そんちょう</rt></ruby>した。", en: "We respected each other's opinions." },
      { ruby: "お<ruby>互<rt>たが</rt></ruby>いの<ruby>違<rt>ちが</rt></ruby>いを<ruby>認<rt>みと</rt></ruby>め、<ruby>尊重<rt>そんちょう</rt></ruby>し<ruby>合<rt>あ</rt></ruby>える<ruby>関係<rt>かんけい</rt></ruby>こそが、<ruby>真<rt>しん</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>での<ruby>対等<rt>たいとう</rt></ruby>なパートナーシップだ。", en: "A relationship where we can acknowledge and respect each other's differences is a truly equal partnership in the truest sense." },
    ]
  },
  {
    group: 5,
    word: "なぜなら", wordRuby: "なぜなら",
    pos: "conjunction", keyword: "Because / The Reason Is",
    meaning: "because; the reason is; this is because",
    particles: [
      { ruby: "〜。なぜなら〜からだ", meaning: "~. The reason is because ~." },
      { ruby: "なぜなら〜ためだ", meaning: "because ~ / due to the fact that ~" },
      { ruby: "なぜならば", meaning: "because (slightly more formal)" },
    ],
    examples: [
      { ruby: "やめた。なぜなら、<ruby>危険<rt>きけん</rt></ruby>だからだ。", en: "I stopped. The reason is because it's dangerous." },
      { ruby: "<ruby>賛成<rt>さんせい</rt></ruby>できない。なぜなら、<ruby>根拠<rt>こんきょ</rt></ruby>が<ruby>不十分<rt>ふじゅうぶん</rt></ruby>だからだ。", en: "I can't agree. Because the grounds are insufficient." },
      { ruby: "この<ruby>計画<rt>けいかく</rt></ruby>を<ruby>支持<rt>しじ</rt></ruby>する。なぜなら、<ruby>環境<rt>かんきょう</rt></ruby>への<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>最小限<rt>さいしょうげん</rt></ruby>に<ruby>抑<rt>おさ</rt></ruby>えながら<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>できると<ruby>考<rt>かんが</rt></ruby>えるからだ。", en: "I support this plan. Because I believe it can achieve economic growth while minimizing environmental impact." },
    ]
  },
  {
    group: 5,
    word: "ところが", wordRuby: "ところが",
    pos: "conjunction", keyword: "However / But Then",
    meaning: "however; but then; contrary to expectation; and yet",
    particles: [
      { ruby: "〜と<ruby>思<rt>おも</rt></ruby>った。ところが、〜", meaning: "I thought ~. However (contrary to that), ~." },
      { ruby: "ところが<ruby>実際<rt>じっさい</rt></ruby>には", meaning: "but in reality; however, in actual fact" },
      { ruby: "ところが<ruby>意外<rt>いがい</rt></ruby>にも", meaning: "but surprisingly; however, unexpectedly" },
    ],
    examples: [
      { ruby: "<ruby>簡単<rt>かんたん</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>った。ところが、<ruby>難<rt>むずか</rt></ruby>しかった。", en: "I thought it would be easy. However, it was difficult." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>すると<ruby>思<rt>おも</rt></ruby>っていた。ところが、うまくいった。", en: "I thought it would fail. But then, it went well." },
      { ruby: "<ruby>長年<rt>ながねん</rt></ruby><ruby>夢<rt>ゆめ</rt></ruby>だった<ruby>仕事<rt>しごと</rt></ruby>に<ruby>就<rt>つ</rt></ruby>けた。ところが、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めると<ruby>想像<rt>そうぞう</rt></ruby>と<ruby>違<rt>ちが</rt></ruby>うことも<ruby>多<rt>おお</rt></ruby>かった。", en: "I was able to get the job that had been my dream for years. However, when I actually started working, there were many things that differed from what I had imagined." },
    ]
  },
  {
    group: 5,
    word: "そもそも", wordRuby: "そもそも",
    pos: "adverb / conjunction", keyword: "In the First Place",
    meaning: "in the first place; to begin with; originally; fundamentally",
    particles: [
      { ruby: "そもそも〜とは", meaning: "to begin with, what is ~; fundamentally, ~ is" },
      { ruby: "そもそも〜べきだった", meaning: "in the first place, should have ~" },
      { ruby: "そもそもの<ruby>原因<rt>げんいん</rt></ruby>", meaning: "the fundamental cause; the root cause" },
    ],
    examples: [
      { ruby: "そもそも<ruby>無理<rt>むり</rt></ruby>だった。", en: "It was impossible in the first place." },
      { ruby: "そもそもなぜそう<ruby>思<rt>おも</rt></ruby>ったの？", en: "Why did you think so in the first place?" },
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>するには、そもそもの<ruby>原因<rt>げんいん</rt></ruby>に<ruby>立<rt>た</rt></ruby>ち<ruby>返<rt>かえ</rt></ruby>り、<ruby>根本<rt>こんぽん</rt></ruby>から<ruby>見直<rt>みなお</rt></ruby>すことが<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "To resolve this problem, it is necessary to go back to the fundamental cause and review it from the root." },
    ]
  },
  {
    group: 5,
    word: "ついに", wordRuby: "ついに",
    pos: "adverb", keyword: "Finally / At Last",
    meaning: "finally; at last; in the end; after all (often after a long struggle)",
    particles: [
      { ruby: "ついに〜した", meaning: "finally did ~; at last ~ed" },
      { ruby: "ついに〜が<ruby>実現<rt>じつげん</rt></ruby>した", meaning: "~ was finally realized" },
      { ruby: "ついに〜てしまった", meaning: "finally ended up ~ing (negative outcome)" },
    ],
    examples: [
      { ruby: "ついに<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>叶<rt>かな</rt></ruby>った！", en: "My dream finally came true!" },
      { ruby: "ついに<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した。", en: "I finally passed the exam." },
      { ruby: "10<ruby>年間<rt>ねんかん</rt></ruby><ruby>諦<rt>あきら</rt></ruby>めずに<ruby>努力<rt>どりょく</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けた<ruby>末<rt>すえ</rt></ruby>、ついに<ruby>世界<rt>せかい</rt></ruby>チャンピオンの<ruby>座<rt>ざ</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>い</rt></ruby>れた。", en: "After continuing to work hard for 10 years without giving up, I finally obtained the seat of world champion." },
    ]
  },
  {
    group: 5,
    word: "いつの間にか", wordRuby: "いつの<ruby>間<rt>ま</rt></ruby>にか",
    pos: "adverb", keyword: "Before One Knows It",
    meaning: "before one knows it; unnoticed; without realizing; all of a sudden at some point",
    particles: [
      { ruby: "いつの<ruby>間<rt>ま</rt></ruby>にか〜なった", meaning: "before I knew it, it had become ~" },
      { ruby: "いつの<ruby>間<rt>ま</rt></ruby>にか〜ていた", meaning: "before I knew it, I was ~ing" },
      { ruby: "いつの<ruby>間<rt>ま</rt></ruby>にか<ruby>時間<rt>じかん</rt></ruby>が<ruby>経<rt>た</rt></ruby>っていた", meaning: "time had passed before I knew it" },
    ],
    examples: [
      { ruby: "いつの<ruby>間<rt>ま</rt></ruby>にか<ruby>寝<rt>ね</rt></ruby>ていた。", en: "Before I knew it, I had fallen asleep." },
      { ruby: "いつの<ruby>間<rt>ま</rt></ruby>にか<ruby>上手<rt>じょうず</rt></ruby>になっていた。", en: "Before I knew it, I had gotten good." },
      { ruby: "毎日少しずつ<ruby>続<rt>つづ</rt></ruby>けていたら、いつの<ruby>間<rt>ま</rt></ruby>にか1<ruby>年<rt>ねん</rt></ruby>が<ruby>経<rt>た</rt></ruby>ち、<ruby>気<rt>き</rt></ruby>づいたときには<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>ずいぶん<rt>ずいぶん</rt></ruby><ruby>上達<rt>じょうたつ</rt></ruby>していた。", en: "As I continued a little each day, before I knew it a year had passed, and when I realized it, my Japanese had improved considerably." },
    ]
  },
];

const GRADE_CONFIG = [
  { label: "SIMPLE",     color: "#00e5ff", bg: "rgba(0,229,255,0.07)",   border: "rgba(0,229,255,0.3)"  },
  { label: "NATURAL",    color: "#69ff47", bg: "rgba(105,255,71,0.07)",  border: "rgba(105,255,71,0.3)" },
  { label: "EXAM-LEVEL", color: "#ff6d00", bg: "rgba(255,109,0,0.07)",   border: "rgba(255,109,0,0.3)"  },
];

const GROUP_COLORS = ["#ff6b6b","#ffa94d","#69db7c","#4dabf7","#da77f2","#ff8787","#63e6be","#ffd43b"];

export default function N3VocabApp4() {
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
            <div style={{fontSize:10, letterSpacing:"0.3em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, textTransform:"uppercase"}}>✦ JLPT N3 · 語彙 4 ✦</div>
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
