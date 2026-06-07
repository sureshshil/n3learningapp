import { useState } from "react";

const GROUPS = [
  "Key Nouns I",
  "Key Nouns II",
  "Essential Verbs",
  "Adverbs & Connectors",
  "Feelings & Character",
  "Abstract & Social",
];

const VOCAB = [
  // ── GROUP 0: Key Nouns I ─────────────────────────────────────
  {
    group: 0,
    word: "場所", wordRuby: "<ruby>場所<rt>ばしょ</rt></ruby>",
    pos: "noun", keyword: "Place / Location",
    meaning: "place; location; spot; area",
    particles: [
      { ruby: "<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>決<rt>き</rt></ruby>める", meaning: "decide on a place" },
      { ruby: "〜な<ruby>場所<rt>ばしょ</rt></ruby>", meaning: "a ~ place / location" },
      { ruby: "<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する", meaning: "secure a spot / space" },
    ],
    examples: [
      { ruby: "<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせの<ruby>場所<rt>ばしょ</rt></ruby>はどこですか？", en: "Where is the meeting place?" },
      { ruby: "この<ruby>場所<rt>ばしょ</rt></ruby>はとても<ruby>静<rt>しず</rt></ruby>かで<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>った。", en: "I really liked this place — it's very quiet." },
      { ruby: "<ruby>観光地<rt>かんこうち</rt></ruby>として<ruby>有名<rt>ゆうめい</rt></ruby>なこの<ruby>場所<rt>ばしょ</rt></ruby>には、<ruby>毎年<rt>まいとし</rt></ruby><ruby>多<rt>おお</rt></ruby>くの<ruby>観光客<rt>かんこうきゃく</rt></ruby>が<ruby>訪<rt>おとず</rt></ruby>れる。", en: "This place, famous as a tourist spot, is visited by many tourists every year." },
    ]
  },
  {
    group: 0,
    word: "様子", wordRuby: "<ruby>様子<rt>ようす</rt></ruby>",
    pos: "noun", keyword: "Appearance / State",
    meaning: "state; appearance; situation; how things look; signs",
    particles: [
      { ruby: "<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>る", meaning: "see how things go; observe the situation" },
      { ruby: "〜の<ruby>様子<rt>ようす</rt></ruby>", meaning: "the state of ~; how ~ looks" },
      { ruby: "<ruby>様子<rt>ようす</rt></ruby>がおかしい", meaning: "something seems off; something is wrong" },
    ],
    examples: [
      { ruby: "少し<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>よう。", en: "Let's wait and see for a bit." },
      { ruby: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>様子<rt>ようす</rt></ruby>がいつもと<ruby>違<rt>ちが</rt></ruby>う。", en: "His appearance is different from usual." },
      { ruby: "<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>長引<rt>ながび</rt></ruby>いている<ruby>様子<rt>ようす</rt></ruby>だったので、<ruby>外<rt>そと</rt></ruby>でしばらく<ruby>待<rt>ま</rt></ruby>つことにした。", en: "As the meeting seemed to be dragging on, I decided to wait outside for a while." },
    ]
  },
  {
    group: 0,
    word: "場面", wordRuby: "<ruby>場面<rt>ばめん</rt></ruby>",
    pos: "noun", keyword: "Scene / Moment",
    meaning: "scene; moment; setting; situation",
    particles: [
      { ruby: "〜の<ruby>場面<rt>ばめん</rt></ruby>で", meaning: "in the scene of ~; in a situation where ~" },
      { ruby: "<ruby>場面<rt>ばめん</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて", meaning: "according to the situation" },
      { ruby: "<ruby>印象的<rt>いんしょうてき</rt></ruby>な<ruby>場面<rt>ばめん</rt></ruby>", meaning: "an impressive scene / moment" },
    ],
    examples: [
      { ruby: "その<ruby>場面<rt>ばめん</rt></ruby>が<ruby>忘<rt>わす</rt></ruby>れられない。", en: "I can't forget that scene." },
      { ruby: "<ruby>感動的<rt>かんどうてき</rt></ruby>な<ruby>場面<rt>ばめん</rt></ruby>で<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>た。", en: "Tears came out at the moving scene." },
      { ruby: "ビジネスの<ruby>場面<rt>ばめん</rt></ruby>では、<ruby>場面<rt>ばめん</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶことが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "In business situations, it is important to choose appropriate words suited to the occasion." },
    ]
  },
  {
    group: 0,
    word: "変化", wordRuby: "<ruby>変化<rt>へんか</rt></ruby>",
    pos: "noun / する-verb", keyword: "Change",
    meaning: "change; transformation; variation",
    particles: [
      { ruby: "<ruby>変化<rt>へんか</rt></ruby>する", meaning: "change; undergo change" },
      { ruby: "<ruby>変化<rt>へんか</rt></ruby>に<ruby>気<rt>き</rt></ruby>づく", meaning: "notice a change" },
      { ruby: "〜の<ruby>変化<rt>へんか</rt></ruby>", meaning: "change in ~; transformation of ~" },
    ],
    examples: [
      { ruby: "<ruby>大<rt>おお</rt></ruby>きな<ruby>変化<rt>へんか</rt></ruby>があった。", en: "There was a big change." },
      { ruby: "<ruby>季節<rt>きせつ</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>を<ruby>肌<rt>はだ</rt></ruby>で<ruby>感<rt>かん</rt></ruby>じる。", en: "I feel the seasonal change with my own skin." },
      { ruby: "テクノロジーの<ruby>急速<rt>きゅうそく</rt></ruby>な<ruby>変化<rt>へんか</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>するため、<ruby>継続的<rt>けいぞくてき</rt></ruby>な<ruby>学習<rt>がくしゅう</rt></ruby>が<ruby>欠<rt>か</rt></ruby>かせない。", en: "Continuous learning is indispensable in order to respond to the rapid changes in technology." },
    ]
  },
  {
    group: 0,
    word: "印象", wordRuby: "<ruby>印象<rt>いんしょう</rt></ruby>",
    pos: "noun", keyword: "Impression",
    meaning: "impression; image; how something comes across",
    particles: [
      { ruby: "<ruby>印象<rt>いんしょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える", meaning: "give an impression" },
      { ruby: "<ruby>印象<rt>いんしょう</rt></ruby>が<ruby>良<rt>よ</rt></ruby>い／<ruby>悪<rt>わる</rt></ruby>い", meaning: "make a good / bad impression" },
      { ruby: "<ruby>第一印象<rt>だいいちいんしょう</rt></ruby>", meaning: "first impression" },
    ],
    examples: [
      { ruby: "<ruby>第一印象<rt>だいいちいんしょう</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "First impressions are important." },
      { ruby: "<ruby>彼女<rt>かのじょ</rt></ruby>はとても<ruby>良<rt>よ</rt></ruby>い<ruby>印象<rt>いんしょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えた。", en: "She made a very good impression." },
      { ruby: "<ruby>面接<rt>めんせつ</rt></ruby>では、<ruby>話<rt>はな</rt></ruby>す<ruby>内容<rt>ないよう</rt></ruby>だけでなく、<ruby>服装<rt>ふくそう</rt></ruby>や<ruby>態度<rt>たいど</rt></ruby>も<ruby>印象<rt>いんしょう</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きく<ruby>影響<rt>えいきょう</rt></ruby>する。", en: "In interviews, not only the content of what you say but also attire and attitude greatly influence the impression you make." },
    ]
  },
  {
    group: 0,
    word: "態度", wordRuby: "<ruby>態度<rt>たいど</rt></ruby>",
    pos: "noun", keyword: "Attitude",
    meaning: "attitude; manner; behavior; stance",
    particles: [
      { ruby: "<ruby>態度<rt>たいど</rt></ruby>を<ruby>改<rt>あらた</rt></ruby>める", meaning: "reform one's attitude" },
      { ruby: "<ruby>態度<rt>たいど</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい", meaning: "have a haughty / arrogant attitude" },
      { ruby: "<ruby>態度<rt>たいど</rt></ruby>で<ruby>示<rt>しめ</rt></ruby>す", meaning: "show by one's attitude / actions" },
    ],
    examples: [
      { ruby: "<ruby>態度<rt>たいど</rt></ruby>が<ruby>変<rt>か</rt></ruby>わった。", en: "Their attitude changed." },
      { ruby: "<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>はよくない。", en: "A rude attitude is not good." },
      { ruby: "どんな<ruby>状況<rt>じょうきょう</rt></ruby>でも<ruby>誠実<rt>せいじつ</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>で<ruby>人<rt>ひと</rt></ruby>に<ruby>接<rt>せっ</rt></ruby>することが、<ruby>信頼<rt>しんらい</rt></ruby>を<ruby>築<rt>きず</rt></ruby>く<ruby>基本<rt>きほん</rt></ruby>だ。", en: "Engaging with people sincerely in any situation is the foundation for building trust." },
    ]
  },
  {
    group: 0,
    word: "内容", wordRuby: "<ruby>内容<rt>ないよう</rt></ruby>",
    pos: "noun", keyword: "Content / Contents",
    meaning: "content; contents; substance; what is inside",
    particles: [
      { ruby: "<ruby>内容<rt>ないよう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する", meaning: "check the content" },
      { ruby: "〜の<ruby>内容<rt>ないよう</rt></ruby>", meaning: "the content of ~" },
      { ruby: "<ruby>内容<rt>ないよう</rt></ruby>が<ruby>濃<rt>こ</rt></ruby>い", meaning: "content-rich; substantial" },
    ],
    examples: [
      { ruby: "<ruby>内容<rt>ないよう</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からなかった。", en: "I couldn't understand the content." },
      { ruby: "メールの<ruby>内容<rt>ないよう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>した。", en: "I checked the content of the email." },
      { ruby: "<ruby>発表<rt>はっぴょう</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>は<ruby>具体的<rt>ぐたいてき</rt></ruby>で<ruby>分<rt>わ</rt></ruby>かりやすく、<ruby>参加者<rt>さんかしゃ</rt></ruby>から<ruby>好評<rt>こうひょう</rt></ruby>だった。", en: "The content of the presentation was concrete and easy to understand, and it was well received by the participants." },
    ]
  },
  {
    group: 0,
    word: "行動", wordRuby: "<ruby>行動<rt>こうどう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Action / Behavior",
    meaning: "action; behavior; conduct; acting",
    particles: [
      { ruby: "<ruby>行動<rt>こうどう</rt></ruby>する", meaning: "act; take action" },
      { ruby: "<ruby>行動<rt>こうどう</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>す", meaning: "put into action; act on" },
      { ruby: "<ruby>行動<rt>こうどう</rt></ruby>パターン", meaning: "behavior pattern; way of acting" },
    ],
    examples: [
      { ruby: "すぐ<ruby>行動<rt>こうどう</rt></ruby>した。", en: "I took action right away." },
      { ruby: "<ruby>考<rt>かんが</rt></ruby>えるだけでなく<ruby>行動<rt>こうどう</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It's important to not just think but to act." },
      { ruby: "<ruby>地球温暖化<rt>ちきゅうおんだんか</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐためには、<ruby>一人<rt>ひとり</rt></ruby>ひとりが<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>した<ruby>行動<rt>こうどう</rt></ruby>をとることが<ruby>求<rt>もと</rt></ruby>められる。", en: "To prevent global warming, each and every person is expected to take actions with environmental awareness." },
    ]
  },
  {
    group: 0,
    word: "立場", wordRuby: "<ruby>立場<rt>たちば</rt></ruby>",
    pos: "noun", keyword: "Position / Standpoint",
    meaning: "standpoint; position; one's situation; vantage point",
    particles: [
      { ruby: "〜の<ruby>立場<rt>たちば</rt></ruby>から", meaning: "from the standpoint of ~" },
      { ruby: "<ruby>立場<rt>たちば</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ", meaning: "take the position of; put oneself in ~'s shoes" },
      { ruby: "<ruby>立場<rt>たちば</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>う", meaning: "positions differ; come from different standpoints" },
    ],
    examples: [
      { ruby: "<ruby>相手<rt>あいて</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えよう。", en: "Let's think about the other person's position." },
      { ruby: "<ruby>管理職<rt>かんりしょく</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>から<ruby>意見<rt>いけん</rt></ruby>を<ruby>述<rt>の</rt></ruby>べた。", en: "I stated my opinion from the standpoint of management." },
      { ruby: "<ruby>議論<rt>ぎろん</rt></ruby>をするとき、<ruby>相手<rt>あいて</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>に<ruby>立<rt>た</rt></ruby>って<ruby>考<rt>かんが</rt></ruby>えることで、より<ruby>建設的<rt>けんせつてき</rt></ruby>な<ruby>対話<rt>たいわ</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれる。", en: "In discussions, more constructive dialogue is born by thinking from the other person's standpoint." },
    ]
  },
  {
    group: 0,
    word: "特徴", wordRuby: "<ruby>特徴<rt>とくちょう</rt></ruby>",
    pos: "noun", keyword: "Feature / Characteristic",
    meaning: "feature; characteristic; distinctive quality; trait",
    particles: [
      { ruby: "〜の<ruby>特徴<rt>とくちょう</rt></ruby>は〜だ", meaning: "the characteristic of ~ is ~" },
      { ruby: "<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>活<rt>い</rt></ruby>かす", meaning: "make use of characteristics" },
      { ruby: "<ruby>特徴<rt>とくちょう</rt></ruby>的な", meaning: "characteristic; distinctive" },
    ],
    examples: [
      { ruby: "この<ruby>製品<rt>せいひん</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>は<ruby>軽<rt>かる</rt></ruby>さだ。", en: "The characteristic of this product is its lightness." },
      { ruby: "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>についてまとめた。", en: "I summarized the features of the Japanese language." },
      { ruby: "それぞれの<ruby>地域<rt>ちいき</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>活<rt>い</rt></ruby>かした<ruby>観光<rt>かんこう</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みが、<ruby>全国<rt>ぜんこく</rt></ruby>で<ruby>広<rt>ひろ</rt></ruby>まっている。", en: "Tourism initiatives that make use of each region's characteristics are spreading throughout the country." },
    ]
  },

  // ── GROUP 1: Key Nouns II ────────────────────────────────────
  {
    group: 1,
    word: "条件", wordRuby: "<ruby>条件<rt>じょうけん</rt></ruby>",
    pos: "noun", keyword: "Condition / Terms",
    meaning: "condition; requirement; terms; prerequisites",
    particles: [
      { ruby: "〜の<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>満<rt>み</rt></ruby>たす", meaning: "meet the conditions of ~" },
      { ruby: "<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>合<rt>あ</rt></ruby>う", meaning: "conditions match; terms agree" },
      { ruby: "〜という<ruby>条件<rt>じょうけん</rt></ruby>で", meaning: "on the condition that ~" },
    ],
    examples: [
      { ruby: "<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>合<rt>あ</rt></ruby>わなかった。", en: "The conditions didn't match." },
      { ruby: "<ruby>応募<rt>おうぼ</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>した。", en: "I confirmed the conditions for applying." },
      { ruby: "この<ruby>奨学金<rt>しょうがくきん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるためには、いくつかの<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>満<rt>み</rt></ruby>たす<ruby>必要<rt>ひつよう</rt></ruby>がある。", en: "In order to receive this scholarship, it is necessary to meet several conditions." },
    ]
  },
  {
    group: 1,
    word: "関心", wordRuby: "<ruby>関心<rt>かんしん</rt></ruby>",
    pos: "noun", keyword: "Interest / Concern",
    meaning: "interest; concern; attention",
    particles: [
      { ruby: "〜に<ruby>関心<rt>かんしん</rt></ruby>がある", meaning: "have an interest in ~" },
      { ruby: "<ruby>関心<rt>かんしん</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ", meaning: "take an interest; have concern" },
      { ruby: "<ruby>関心<rt>かんしん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>まる", meaning: "interest grows; concern rises" },
    ],
    examples: [
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>に<ruby>関心<rt>かんしん</rt></ruby>がある。", en: "I have an interest in this problem." },
      { ruby: "<ruby>社会問題<rt>しゃかいもんだい</rt></ruby>への<ruby>関心<rt>かんしん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>まった。", en: "Interest in social issues has grown." },
      { ruby: "<ruby>若者<rt>わかもの</rt></ruby>の<ruby>政治<rt>せいじ</rt></ruby>への<ruby>関心<rt>かんしん</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めることが、<ruby>民主主義<rt>みんしゅしゅぎ</rt></ruby>の<ruby>健全<rt>けんぜん</rt></ruby>な<ruby>発展<rt>はってん</rt></ruby>に<ruby>不可欠<rt>ふかけつ</rt></ruby>だ。", en: "Raising young people's interest in politics is indispensable for the healthy development of democracy." },
    ]
  },
  {
    group: 1,
    word: "興味", wordRuby: "<ruby>興味<rt>きょうみ</rt></ruby>",
    pos: "noun", keyword: "Interest (personal)",
    meaning: "interest; curiosity; personal interest in something",
    particles: [
      { ruby: "〜に<ruby>興味<rt>きょうみ</rt></ruby>がある", meaning: "be interested in ~" },
      { ruby: "<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ", meaning: "take an interest; become interested" },
      { ruby: "<ruby>興味<rt>きょうみ</rt></ruby>深<rt>ぶか</rt></ruby>い", meaning: "interesting; fascinating" },
    ],
    examples: [
      { ruby: "日本語に<ruby>興味<rt>きょうみ</rt></ruby>がある。", en: "I'm interested in Japanese." },
      { ruby: "この<ruby>本<rt>ほん</rt></ruby>はとても<ruby>興味深<rt>きょうみぶか</rt></ruby>い。", en: "This book is very interesting." },
      { ruby: "<ruby>子<rt>こ</rt></ruby>どものころから<ruby>宇宙<rt>うちゅう</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>続<rt>つづ</rt></ruby>け、ついに<ruby>宇宙<rt>うちゅう</rt></ruby><ruby>開発<rt>かいはつ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>に<ruby>就<rt>つ</rt></ruby>いた。", en: "Having kept an interest in space since childhood, he finally got a job in space development." },
    ]
  },
  {
    group: 1,
    word: "基本", wordRuby: "<ruby>基本<rt>きほん</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Basics / Foundation",
    meaning: "basics; foundation; fundamental; the basics",
    particles: [
      { ruby: "<ruby>基本<rt>きほん</rt></ruby>を<ruby>身<rt>み</rt></ruby>につける", meaning: "acquire the basics" },
      { ruby: "<ruby>基本<rt>きほん</rt></ruby>的<rt>てき</rt></ruby>な〜", meaning: "basic ~; fundamental ~" },
      { ruby: "<ruby>基本<rt>きほん</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>る", meaning: "return to the basics" },
    ],
    examples: [
      { ruby: "<ruby>基本<rt>きほん</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "The basics are important." },
      { ruby: "まず<ruby>基本<rt>きほん</rt></ruby>をしっかり<ruby>覚<rt>おぼ</rt></ruby>えよう。", en: "First, let's firmly memorize the basics." },
      { ruby: "<ruby>応用<rt>おうよう</rt></ruby>を<ruby>身<rt>み</rt></ruby>につける<ruby>前<rt>まえ</rt></ruby>に、<ruby>基本<rt>きほん</rt></ruby>的<rt>てき</rt></ruby>なスキルを<ruby>徹底的<rt>てっていてき</rt></ruby>に<ruby>練習<rt>れんしゅう</rt></ruby>することが<ruby>上達<rt>じょうたつ</rt></ruby>への<ruby>近道<rt>ちかみち</rt></ruby>だ。", en: "Before acquiring applied skills, thoroughly practicing basic skills is a shortcut to improvement." },
    ]
  },
  {
    group: 1,
    word: "性格", wordRuby: "<ruby>性格<rt>せいかく</rt></ruby>",
    pos: "noun", keyword: "Personality",
    meaning: "personality; character; nature; temperament",
    particles: [
      { ruby: "<ruby>性格<rt>せいかく</rt></ruby>が〜だ", meaning: "has a ~ personality" },
      { ruby: "<ruby>性格<rt>せいかく</rt></ruby>が<ruby>合<rt>あ</rt></ruby>う", meaning: "personalities match; get along" },
      { ruby: "<ruby>性格<rt>せいかく</rt></ruby>を<ruby>活<rt>い</rt></ruby>かす", meaning: "make use of one's personality" },
    ],
    examples: [
      { ruby: "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>明<rt>あか</rt></ruby>るい<ruby>性格<rt>せいかく</rt></ruby>だ。", en: "She has a cheerful personality." },
      { ruby: "<ruby>二人<rt>ふたり</rt></ruby>は<ruby>性格<rt>せいかく</rt></ruby>がよく<ruby>合<rt>あ</rt></ruby>っている。", en: "The two of them have very compatible personalities." },
      { ruby: "チームで<ruby>仕事<rt>しごと</rt></ruby>をするとき、メンバーそれぞれの<ruby>性格<rt>せいかく</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>し、うまく<ruby>活<rt>い</rt></ruby>かすことがリーダーの<ruby>役割<rt>やくわり</rt></ruby>だ。", en: "When working as a team, the leader's role is to understand each member's personality and make good use of it." },
    ]
  },
  {
    group: 1,
    word: "理由", wordRuby: "<ruby>理由<rt>りゆう</rt></ruby>",
    pos: "noun", keyword: "Reason / Cause",
    meaning: "reason; cause; grounds; explanation for why",
    particles: [
      { ruby: "〜の<ruby>理由<rt>りゆう</rt></ruby>は〜だ", meaning: "the reason for ~ is ~" },
      { ruby: "<ruby>理由<rt>りゆう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>する", meaning: "explain the reason" },
      { ruby: "〜という<ruby>理由<rt>りゆう</rt></ruby>で", meaning: "for the reason that ~" },
    ],
    examples: [
      { ruby: "<ruby>理由<rt>りゆう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。", en: "Please tell me the reason." },
      { ruby: "<ruby>欠席<rt>けっせき</rt></ruby>の<ruby>理由<rt>りゆう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えた。", en: "I conveyed the reason for my absence." },
      { ruby: "<ruby>結論<rt>けつろん</rt></ruby>だけを<ruby>述<rt>の</rt></ruby>べるのではなく、その<ruby>理由<rt>りゆう</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>することが、<ruby>説得力<rt>せっとくりょく</rt></ruby>のある<ruby>主張<rt>しゅちょう</rt></ruby>につながる。", en: "Not just stating a conclusion but clearly explaining the reason behind it leads to a persuasive argument." },
    ]
  },
  {
    group: 1,
    word: "経緯", wordRuby: "<ruby>経緯<rt>けいい</rt></ruby>",
    pos: "noun", keyword: "Background / How It Came About",
    meaning: "circumstances; how things came about; background; history of events",
    particles: [
      { ruby: "〜の<ruby>経緯<rt>けいい</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>する", meaning: "explain the background / circumstances of ~" },
      { ruby: "〜に<ruby>至<rt>いた</rt></ruby>った<ruby>経緯<rt>けいい</rt></ruby>", meaning: "the circumstances that led to ~" },
      { ruby: "<ruby>経緯<rt>けいい</rt></ruby>を<ruby>話<rt>はな</rt></ruby>す", meaning: "explain how things came about" },
    ],
    examples: [
      { ruby: "<ruby>経緯<rt>けいい</rt></ruby>を<ruby>話<rt>はな</rt></ruby>してください。", en: "Please explain how things came about." },
      { ruby: "この<ruby>計画<rt>けいかく</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まった<ruby>経緯<rt>けいい</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>した。", en: "I explained the circumstances behind how this plan started." },
      { ruby: "<ruby>事故<rt>じこ</rt></ruby>が<ruby>起<rt>お</rt></ruby>きた<ruby>経緯<rt>けいい</rt></ruby>を<ruby>詳<rt>くわ</rt></ruby>しく<ruby>調査<rt>ちょうさ</rt></ruby>した<ruby>結果<rt>けっか</rt></ruby>、<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>要因<rt>よういん</rt></ruby>が<ruby>重<rt>かさ</rt></ruby>なっていたことが<ruby>分<rt>わ</rt></ruby>かった。", en: "As a result of thoroughly investigating the circumstances of the accident, it was found that multiple factors had overlapped." },
    ]
  },
  {
    group: 1,
    word: "規則", wordRuby: "<ruby>規則<rt>きそく</rt></ruby>",
    pos: "noun", keyword: "Rule / Regulation",
    meaning: "rule; regulation; order; pattern",
    particles: [
      { ruby: "<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "follow / obey rules" },
      { ruby: "<ruby>規則<rt>きそく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>る", meaning: "break a rule" },
      { ruby: "<ruby>規則<rt>きそく</rt></ruby>正<rt>ただ</rt></ruby>しい", meaning: "orderly; regular; well-regulated" },
    ],
    examples: [
      { ruby: "<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to follow rules." },
      { ruby: "この<ruby>学校<rt>がっこう</rt></ruby>には<ruby>厳<rt>きび</rt></ruby>しい<ruby>規則<rt>きそく</rt></ruby>がある。", en: "This school has strict rules." },
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>のルールや<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ることは、<ruby>集団生活<rt>しゅうだんせいかつ</rt></ruby>を<ruby>円滑<rt>えんかつ</rt></ruby>に<ruby>営<rt>いとな</rt></ruby>むための<ruby>基本<rt>きほん</rt></ruby>だ。", en: "Following society's rules and regulations is the foundation for conducting community life smoothly." },
    ]
  },

  // ── GROUP 2: Essential Verbs ─────────────────────────────────
  {
    group: 2,
    word: "起こる", wordRuby: "<ruby>起<rt>お</rt></ruby>こる",
    pos: "verb (Group 1)", keyword: "Happen / Occur",
    meaning: "to happen; to occur; to break out; to take place",
    particles: [
      { ruby: "〜が<ruby>起<rt>お</rt></ruby>こる", meaning: "~ happens; ~ occurs" },
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>が<ruby>起<rt>お</rt></ruby>こる", meaning: "a problem occurs" },
      { ruby: "<ruby>何<rt>なに</rt></ruby>かが<ruby>起<rt>お</rt></ruby>こる", meaning: "something happens" },
    ],
    examples: [
      { ruby: "<ruby>事故<rt>じこ</rt></ruby>が<ruby>起<rt>お</rt></ruby>こった。", en: "An accident occurred." },
      { ruby: "<ruby>大<rt>おお</rt></ruby>きな<ruby>問題<rt>もんだい</rt></ruby>が<ruby>起<rt>お</rt></ruby>こってしまった。", en: "A big problem ended up occurring." },
      { ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>が<ruby>二度<rt>にど</rt></ruby>と<ruby>起<rt>お</rt></ruby>こらないよう、<ruby>再発防止策<rt>さいはつぼうしさく</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", en: "In order that the same failure never occurs again, it is necessary to thoroughly implement recurrence prevention measures." },
    ]
  },
  {
    group: 2,
    word: "生まれる", wordRuby: "<ruby>生<rt>う</rt></ruby>まれる",
    pos: "verb (Group 2)", keyword: "Be Born / Come Into Being",
    meaning: "to be born; to come into existence; to emerge; to arise",
    particles: [
      { ruby: "〜が<ruby>生<rt>う</rt></ruby>まれる", meaning: "~ is born; ~ comes into being" },
      { ruby: "〜に<ruby>生<rt>う</rt></ruby>まれる", meaning: "be born in ~ / to ~" },
      { ruby: "アイデアが<ruby>生<rt>う</rt></ruby>まれる", meaning: "an idea emerges / is born" },
    ],
    examples: [
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>生<rt>う</rt></ruby>まれた。", en: "A child was born." },
      { ruby: "その<ruby>話<rt>はなし</rt></ruby>し<ruby>合<rt>あ</rt></ruby>いから<ruby>新<rt>あたら</rt></ruby>しいアイデアが<ruby>生<rt>う</rt></ruby>まれた。", en: "A new idea was born from that discussion." },
      { ruby: "<ruby>異<rt>こと</rt></ruby>なる<ruby>価値観<rt>かちかん</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>人々<rt>ひとびと</rt></ruby>が<ruby>対話<rt>たいわ</rt></ruby>することで、これまでになかった<ruby>発想<rt>はっそう</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれることがある。", en: "When people with different values engage in dialogue, ideas that didn't exist before can sometimes emerge." },
    ]
  },
  {
    group: 2,
    word: "離れる", wordRuby: "<ruby>離<rt>はな</rt></ruby>れる",
    pos: "verb (Group 2)", keyword: "Separate / Move Away",
    meaning: "to separate; to move away; to leave; to be apart from",
    particles: [
      { ruby: "〜から<ruby>離<rt>はな</rt></ruby>れる", meaning: "move away from ~; separate from ~" },
      { ruby: "〜を<ruby>離<rt>はな</rt></ruby>れる", meaning: "leave ~; depart from ~" },
      { ruby: "<ruby>離<rt>はな</rt></ruby>れて<ruby>暮<rt>く</rt></ruby>らす", meaning: "live apart; live separately" },
    ],
    examples: [
      { ruby: "<ruby>家族<rt>かぞく</rt></ruby>と<ruby>離<rt>はな</rt></ruby>れて<ruby>暮<rt>く</rt></ruby>らしている。", en: "I'm living apart from my family." },
      { ruby: "<ruby>故郷<rt>こきょう</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れて上京した。", en: "I left my hometown and moved to Tokyo." },
      { ruby: "<ruby>長期出張<rt>ちょうきしゅっちょう</rt></ruby>で<ruby>家族<rt>かぞく</rt></ruby>と<ruby>長<rt>なが</rt></ruby>く<ruby>離<rt>はな</rt></ruby>れていたが、<ruby>帰国<rt>きこく</rt></ruby>後<rt>ご</rt></ruby>は<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>過<rt>す</rt></ruby>ごす<ruby>時間<rt>じかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしている。", en: "Having been apart from my family for a long time on a long business trip, after returning home I value the time spent together." },
    ]
  },
  {
    group: 2,
    word: "繰り返す", wordRuby: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す",
    pos: "verb (Group 1)", keyword: "Repeat",
    meaning: "to repeat; to do over and over again; to recur",
    particles: [
      { ruby: "〜を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す", meaning: "repeat ~; do ~ over and over" },
      { ruby: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し<ruby>練習<rt>れんしゅう</rt></ruby>する", meaning: "practice repeatedly" },
      { ruby: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>さないよう<ruby>注意<rt>ちゅうい</rt></ruby>する", meaning: "be careful not to repeat" },
    ],
    examples: [
      { ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>間違<rt>まちが</rt></ruby>いを<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>した。", en: "I repeated the same mistake." },
      { ruby: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し<ruby>練習<rt>れんしゅう</rt></ruby>することで<ruby>上手<rt>じょうず</rt></ruby>になる。", en: "You improve by practicing repeatedly." },
      { ruby: "<ruby>人<rt>ひと</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しがちだが、<ruby>失敗<rt>しっぱい</rt></ruby>から<ruby>学<rt>まな</rt></ruby>ぶことで<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>成長<rt>せいちょう</rt></ruby>できる。", en: "People tend to repeat the same failures, but by learning from failure one can grow little by little." },
    ]
  },
  {
    group: 2,
    word: "守る", wordRuby: "<ruby>守<rt>まも</rt></ruby>る",
    pos: "verb (Group 1)", keyword: "Protect / Follow",
    meaning: "to protect; to defend; to keep; to follow (rules/promises)",
    particles: [
      { ruby: "〜を<ruby>守<rt>まも</rt></ruby>る", meaning: "protect ~; follow ~; keep ~" },
      { ruby: "<ruby>約束<rt>やくそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "keep a promise" },
      { ruby: "<ruby>ルール<rt>ルール</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "follow rules; abide by rules" },
    ],
    examples: [
      { ruby: "<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守<rt>まも</rt></ruby>ります。", en: "I will keep my promise." },
      { ruby: "<ruby>家族<rt>かぞく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るために<ruby>頑張<rt>がんば</rt></ruby>っている。", en: "I'm working hard to protect my family." },
      { ruby: "<ruby>交通<rt>こうつう</rt></ruby>ルールを<ruby>守<rt>まも</rt></ruby>ることは、<ruby>自分<rt>じぶん</rt></ruby>だけでなく<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ることにもつながる。", en: "Following traffic rules also connects to protecting not only one's own life but also the lives of others." },
    ]
  },
  {
    group: 2,
    word: "育つ", wordRuby: "<ruby>育<rt>そだ</rt></ruby>つ",
    pos: "verb (Group 1)", keyword: "Grow Up",
    meaning: "to grow up; to be raised; to develop",
    particles: [
      { ruby: "〜で<ruby>育<rt>そだ</rt></ruby>つ", meaning: "grow up in ~; be raised in ~" },
      { ruby: "<ruby>健<rt>すこ</rt></ruby>やかに<ruby>育<rt>そだ</rt></ruby>つ", meaning: "grow up healthily" },
      { ruby: "〜として<ruby>育<rt>そだ</rt></ruby>つ", meaning: "grow up as ~; develop into ~" },
    ],
    examples: [
      { ruby: "日本で<ruby>育<rt>そだ</rt></ruby>った。", en: "I grew up in Japan." },
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>育<rt>そだ</rt></ruby>つのは<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "Growing up in nature is important." },
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち、<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばせる<ruby>環境<rt>かんきょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>育<rt>そだ</rt></ruby>てることが、<ruby>親<rt>おや</rt></ruby>の<ruby>願<rt>ねが</rt></ruby>いだ。", en: "It is a parent's wish to raise their child in an environment where the child can have dreams and develop their potential." },
    ]
  },
  {
    group: 2,
    word: "乗り越える", wordRuby: "<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Overcome",
    meaning: "to overcome; to get over; to surmount; to rise above",
    particles: [
      { ruby: "〜を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>える", meaning: "overcome ~; get past ~" },
      { ruby: "<ruby>困難<rt>こんなん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>える", meaning: "overcome difficulty" },
      { ruby: "<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えられる", meaning: "can overcome; surmountable" },
    ],
    examples: [
      { ruby: "<ruby>困難<rt>こんなん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えた。", en: "I overcame the difficulty." },
      { ruby: "この<ruby>壁<rt>かべ</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えれば<ruby>成長<rt>せいちょう</rt></ruby>できる。", en: "If I overcome this wall, I can grow." },
      { ruby: "<ruby>仲間<rt>なかま</rt></ruby>と<ruby>力<rt>ちから</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせることで、<ruby>一人<rt>ひとり</rt></ruby>では<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えられない<ruby>壁<rt>かべ</rt></ruby>も<ruby>越<rt>こ</rt></ruby>えることができる。", en: "By combining strength with one's companions, even walls that cannot be overcome alone can be crossed." },
    ]
  },
  {
    group: 2,
    word: "支える", wordRuby: "<ruby>支<rt>ささ</rt></ruby>える",
    pos: "verb (Group 2)", keyword: "Support",
    meaning: "to support; to prop up; to hold up; to sustain",
    particles: [
      { ruby: "〜を<ruby>支<rt>ささ</rt></ruby>える", meaning: "support ~; sustain ~" },
      { ruby: "〜に<ruby>支<rt>ささ</rt></ruby>えられる", meaning: "be supported by ~" },
      { ruby: "<ruby>支<rt>ささ</rt></ruby>え<ruby>合<rt>あ</rt></ruby>う", meaning: "support each other mutually" },
    ],
    examples: [
      { ruby: "<ruby>家族<rt>かぞく</rt></ruby>に<ruby>支<rt>ささ</rt></ruby>えられた。", en: "I was supported by my family." },
      { ruby: "<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>に<ruby>支<rt>ささ</rt></ruby>えてもらっている。", en: "I am being supported by those around me." },
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>は<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>によって<ruby>支<rt>ささ</rt></ruby>えられており、その<ruby>一員<rt>いちいん</rt></ruby>として<ruby>貢献<rt>こうけん</rt></ruby>する<ruby>意識<rt>いしき</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "Society is sustained by the efforts of many people, and it is important to have the awareness to contribute as one of its members." },
    ]
  },
  {
    group: 2,
    word: "触れる", wordRuby: "<ruby>触<rt>ふ</rt></ruby>れる",
    pos: "verb (Group 2)", keyword: "Touch / Come into Contact",
    meaning: "to touch; to come into contact; to come across; to refer to",
    particles: [
      { ruby: "〜に<ruby>触<rt>ふ</rt></ruby>れる", meaning: "touch ~; come into contact with ~" },
      { ruby: "<ruby>文化<rt>ぶんか</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れる", meaning: "come into contact with culture" },
      { ruby: "〜に<ruby>触<rt>ふ</rt></ruby>れずに", meaning: "without touching on ~; without mentioning ~" },
    ],
    examples: [
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れてリフレッシュした。", en: "I refreshed myself by touching nature." },
      { ruby: "はじめて<ruby>外国<rt>がいこく</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れた。", en: "I came into contact with foreign culture for the first time." },
      { ruby: "さまざまな<ruby>人<rt>ひと</rt></ruby>や<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れることで、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>視野<rt>しや</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がっていく。", en: "By coming into contact with various people and ways of thinking, one's horizons gradually broaden." },
    ]
  },

  // ── GROUP 3: Adverbs & Connectors ───────────────────────────
  {
    group: 3,
    word: "もちろん", wordRuby: "もちろん",
    pos: "adverb", keyword: "Of Course",
    meaning: "of course; naturally; needless to say",
    particles: [
      { ruby: "もちろん〜だ", meaning: "of course it is ~" },
      { ruby: "もちろん〜も", meaning: "~ as well, of course" },
      { ruby: "もちろんのこと", meaning: "needless to say; obviously" },
    ],
    examples: [
      { ruby: "もちろん<ruby>行<rt>い</rt></ruby>きます。", en: "Of course I'll go." },
      { ruby: "もちろん、<ruby>助<rt>たす</rt></ruby>けますよ。", en: "Of course I'll help." },
      { ruby: "<ruby>語学<rt>ごがく</rt></ruby>の<ruby>上達<rt>じょうたつ</rt></ruby>には、もちろん<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>学習<rt>がくしゅう</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>だが、それ以上に<ruby>実際<rt>じっさい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>う<ruby>機会<rt>きかい</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすことが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "For improving at a language, grammar study is of course necessary, but increasing opportunities to actually use it is even more important." },
    ]
  },
  {
    group: 3,
    word: "きっと", wordRuby: "きっと",
    pos: "adverb", keyword: "Surely / Certainly",
    meaning: "surely; certainly; I'm sure; for certain",
    particles: [
      { ruby: "きっと〜だろう", meaning: "surely it is ~; I'm sure it's ~" },
      { ruby: "きっと〜できる", meaning: "I'm sure you can ~" },
      { ruby: "きっと〜に<ruby>違<rt>ちが</rt></ruby>いない", meaning: "it must surely be ~" },
    ],
    examples: [
      { ruby: "きっと<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だよ。", en: "I'm sure it'll be fine." },
      { ruby: "きっと<ruby>合格<rt>ごうかく</rt></ruby>できる。", en: "I'm certain you can pass." },
      { ruby: "これだけ<ruby>努力<rt>どりょく</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねてきたのだから、きっと<ruby>良<rt>よ</rt></ruby>い<ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby>るはずだ。", en: "Given all the effort you have put in, surely good results will come out." },
    ]
  },
  {
    group: 3,
    word: "おそらく", wordRuby: "おそらく",
    pos: "adverb", keyword: "Probably",
    meaning: "probably; most likely; I would think",
    particles: [
      { ruby: "おそらく〜だろう", meaning: "it is probably ~; likely ~" },
      { ruby: "おそらく〜と<ruby>思<rt>おも</rt></ruby>う", meaning: "I think it is probably ~" },
      { ruby: "おそらく〜はずだ", meaning: "it should probably be ~" },
    ],
    examples: [
      { ruby: "おそらく<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るだろう。", en: "It will probably rain." },
      { ruby: "おそらく<ruby>彼<rt>かれ</rt></ruby>は<ruby>知<rt>し</rt></ruby>らないと<ruby>思<rt>おも</rt></ruby>う。", en: "He probably doesn't know, I think." },
      { ruby: "このままの<ruby>状態<rt>じょうたい</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>けば、おそらく<ruby>来年<rt>らいねん</rt></ruby>にはさらに<ruby>深刻<rt>しんこく</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>するだろう。", en: "If this state continues, it will probably develop into an even more serious problem by next year." },
    ]
  },
  {
    group: 3,
    word: "確かに", wordRuby: "<ruby>確<rt>たし</rt></ruby>かに",
    pos: "adverb", keyword: "Certainly / Indeed",
    meaning: "certainly; indeed; it's true that; granted",
    particles: [
      { ruby: "<ruby>確<rt>たし</rt></ruby>かに〜だ", meaning: "it is certainly ~; indeed it is ~" },
      { ruby: "<ruby>確<rt>たし</rt></ruby>かに〜が、〜", meaning: "certainly ~, but ~ (concession)" },
      { ruby: "<ruby>確<rt>たし</rt></ruby>かにそうだ", meaning: "that is certainly true; indeed so" },
    ],
    examples: [
      { ruby: "<ruby>確<rt>たし</rt></ruby>かにそうだね。", en: "That is certainly true." },
      { ruby: "<ruby>確<rt>たし</rt></ruby>かに<ruby>難<rt>むずか</rt></ruby>しいが、<ruby>不可能<rt>ふかのう</rt></ruby>ではない。", en: "It's certainly difficult, but not impossible." },
      { ruby: "<ruby>確<rt>たし</rt></ruby>かに<ruby>費用<rt>ひよう</rt></ruby>はかかるが、<ruby>長期的<rt>ちょうきてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>れば<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>投資<rt>とうし</rt></ruby>だといえる。", en: "It certainly costs money, but from a long-term perspective it can be said to be a sufficient investment." },
    ]
  },
  {
    group: 3,
    word: "実は", wordRuby: "<ruby>実<rt>じつ</rt></ruby>は",
    pos: "adverb", keyword: "Actually / To Tell the Truth",
    meaning: "actually; to tell the truth; in fact; as a matter of fact",
    particles: [
      { ruby: "<ruby>実<rt>じつ</rt></ruby>は〜だ", meaning: "actually it is ~; in fact ~" },
      { ruby: "<ruby>実<rt>じつ</rt></ruby>は〜と<ruby>思<rt>おも</rt></ruby>っていた", meaning: "I actually thought ~" },
      { ruby: "<ruby>実<rt>じつ</rt></ruby>はそうではない", meaning: "actually that is not the case" },
    ],
    examples: [
      { ruby: "<ruby>実<rt>じつ</rt></ruby>は<ruby>知<rt>し</rt></ruby>っていた。", en: "I actually knew." },
      { ruby: "<ruby>実<rt>じつ</rt></ruby>は、あまり<ruby>好<rt>す</rt></ruby>きじゃない。", en: "To tell the truth, I don't really like it." },
      { ruby: "<ruby>笑顔<rt>えがお</rt></ruby>でいるように<ruby>見<rt>み</rt></ruby>えたが、<ruby>実<rt>じつ</rt></ruby>はとても<ruby>悩<rt>なや</rt></ruby>んでいたことが、後になってわかった。", en: "It was later understood that, while she appeared to be smiling, she was actually deeply troubled." },
    ]
  },
  {
    group: 3,
    word: "つまり", wordRuby: "つまり",
    pos: "conjunction", keyword: "In Other Words",
    meaning: "in other words; that is to say; in short; so",
    particles: [
      { ruby: "つまり〜ということだ", meaning: "in other words, it means ~" },
      { ruby: "つまり〜だろう", meaning: "so that means ~" },
      { ruby: "つまり<ruby>要<rt>よう</rt></ruby>するに", meaning: "in short; to put it briefly" },
    ],
    examples: [
      { ruby: "つまり、<ruby>無理<rt>むり</rt></ruby>ということ？", en: "In other words, it's impossible?" },
      { ruby: "つまり、<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だということだ。", en: "In other words, what it means is that preparation is necessary." },
      { ruby: "この<ruby>調査<rt>ちょうさ</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>によれば、つまり<ruby>現在<rt>げんざい</rt></ruby>の<ruby>政策<rt>せいさく</rt></ruby>は<ruby>効果<rt>こうか</rt></ruby>が<ruby>不十分<rt>ふじゅうぶん</rt></ruby>であると<ruby>言<rt>い</rt></ruby>えるだろう。", en: "According to the results of this survey, in other words, it can probably be said that the current policies are insufficiently effective." },
    ]
  },
  {
    group: 3,
    word: "たとえば", wordRuby: "たとえば",
    pos: "conjunction / adverb", keyword: "For Example",
    meaning: "for example; for instance; to give an example",
    particles: [
      { ruby: "たとえば〜のような", meaning: "for example, something like ~" },
      { ruby: "たとえば〜の<ruby>場合<rt>ばあい</rt></ruby>", meaning: "for example, in the case of ~" },
      { ruby: "たとえば〜が<ruby>挙<rt>あ</rt></ruby>げられる", meaning: "as examples, ~ can be cited" },
    ],
    examples: [
      { ruby: "たとえば、<ruby>毎日<rt>まいにち</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>だけ<ruby>勉強<rt>べんきょう</rt></ruby>するのはどうだろう。", en: "For example, how about studying just 10 minutes every day?" },
      { ruby: "たとえば日本語能力試験のような<ruby>資格<rt>しかく</rt></ruby>を<ruby>取<rt>と</rt></ruby>ることで<ruby>評価<rt>ひょうか</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる。", en: "By obtaining qualifications such as the JLPT, for example, one's evaluation rises." },
      { ruby: "環境に<ruby>優<rt>やさ</rt></ruby>しい<ruby>行動<rt>こうどう</rt></ruby>として、たとえば<ruby>電気<rt>でんき</rt></ruby>をこまめに<ruby>消<rt>け</rt></ruby>す、マイボトルを<ruby>持参<rt>じさん</rt></ruby>するなど、<ruby>小<rt>ちい</rt></ruby>さなことから<ruby>始<rt>はじ</rt></ruby>められる。", en: "As environment-friendly actions, small things can be started with, for example turning off lights frequently or bringing your own bottle." },
    ]
  },
  {
    group: 3,
    word: "しかし", wordRuby: "しかし",
    pos: "conjunction", keyword: "However / But",
    meaning: "however; but; nevertheless; yet",
    particles: [
      { ruby: "〜。しかし〜", meaning: "~. However, ~. (contrast)" },
      { ruby: "しかしながら", meaning: "however; nonetheless (formal)" },
      { ruby: "しかし〜という<ruby>事実<rt>じじつ</rt></ruby>がある", meaning: "however, there is the fact that ~" },
    ],
    examples: [
      { ruby: "<ruby>難<rt>むずか</rt></ruby>しい。しかし<ruby>諦<rt>あきら</rt></ruby>めない。", en: "It's difficult. However, I won't give up." },
      { ruby: "<ruby>値段<rt>ねだん</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い。しかし<ruby>品質<rt>ひんしつ</rt></ruby>は<ruby>良<rt>よ</rt></ruby>い。", en: "The price is high. However, the quality is good." },
      { ruby: "この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>理想的<rt>りそうてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>える。しかし、<ruby>現実的<rt>げんじつてき</rt></ruby>に<ruby>実行可能<rt>じっこうかのう</rt></ruby>かどうかについては、さらに<ruby>慎重<rt>しんちょう</rt></ruby>な<ruby>検討<rt>けんとう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "This plan looks ideal. However, as for whether it is realistically feasible, further careful consideration is necessary." },
    ]
  },

  // ── GROUP 4: Feelings & Character ───────────────────────────
  {
    group: 4,
    word: "自由", wordRuby: "<ruby>自由<rt>じゆう</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Freedom",
    meaning: "freedom; liberty; free; unrestricted",
    particles: [
      { ruby: "<ruby>自由<rt>じゆう</rt></ruby>に〜する", meaning: "freely do ~" },
      { ruby: "<ruby>自由<rt>じゆう</rt></ruby>が<ruby>ある</ruby>", meaning: "have freedom; be free" },
      { ruby: "<ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>", meaning: "free time" },
    ],
    examples: [
      { ruby: "<ruby>自由<rt>じゆう</rt></ruby>に<ruby>意見<rt>いけん</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。", en: "Please speak your opinion freely." },
      { ruby: "<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>がある。", en: "I have free time on holidays." },
      { ruby: "<ruby>表現<rt>ひょうげん</rt></ruby>の<ruby>自由<rt>じゆう</rt></ruby>は、<ruby>民主主義<rt>みんしゅしゅぎ</rt></ruby>社会において<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>権利<rt>けんり</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つだ。", en: "Freedom of expression is one of the most important rights in a democratic society." },
    ]
  },
  {
    group: 4,
    word: "豊か", wordRuby: "<ruby>豊<rt>ゆたか</rt></ruby>か",
    pos: "な-adjective", keyword: "Rich / Abundant",
    meaning: "rich; abundant; affluent; fertile; varied",
    particles: [
      { ruby: "〜が<ruby>豊<rt>ゆたか</rt></ruby>か", meaning: "rich in ~; abundant in ~" },
      { ruby: "<ruby>豊<rt>ゆたか</rt></ruby>かな<ruby>自然<rt>しぜん</rt></ruby>", meaning: "abundant nature; rich natural environment" },
      { ruby: "<ruby>豊<rt>ゆたか</rt></ruby>かに<ruby>暮<rt>く</rt></ruby>らす", meaning: "live richly / comfortably" },
    ],
    examples: [
      { ruby: "<ruby>自然<rt>しぜん</rt></ruby>が<ruby>豊<rt>ゆたか</rt></ruby>かな<ruby>地域<rt>ちいき</rt></ruby>だ。", en: "It's a region rich in nature." },
      { ruby: "<ruby>経済的<rt>けいざいてき</rt></ruby>に<ruby>豊<rt>ゆたか</rt></ruby>かな<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>りたい。", en: "I want to lead an economically comfortable life." },
      { ruby: "<ruby>物質的<rt>ぶっしつてき</rt></ruby>な<ruby>豊<rt>ゆたか</rt></ruby>さだけでなく、<ruby>精神的<rt>せいしんてき</rt></ruby>に<ruby>豊<rt>ゆたか</rt></ruby>かな<ruby>人生<rt>じんせい</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to lead not only a materially rich life but also a spiritually rich one." },
    ]
  },
  {
    group: 4,
    word: "穏やか", wordRuby: "<ruby>穏<rt>おだ</rt></ruby>やか",
    pos: "な-adjective", keyword: "Calm / Gentle",
    meaning: "calm; gentle; mild; peaceful; serene",
    particles: [
      { ruby: "<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>性格<rt>せいかく</rt></ruby>", meaning: "a calm / gentle personality" },
      { ruby: "<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>気候<rt>きこう</rt></ruby>", meaning: "mild climate" },
      { ruby: "<ruby>穏<rt>おだ</rt></ruby>やかに<ruby>過<rt>す</rt></ruby>ごす", meaning: "spend time peacefully" },
    ],
    examples: [
      { ruby: "<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>天気<rt>てんき</rt></ruby>だ。", en: "It's calm weather." },
      { ruby: "<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>性格<rt>せいかく</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>だ。", en: "They have a calm personality." },
      { ruby: "<ruby>定年後<rt>ていねんご</rt></ruby>は<ruby>自然<rt>しぜん</rt></ruby>に<ruby>囲<rt>かこ</rt></ruby>まれた<ruby>場所<rt>ばしょ</rt></ruby>で、<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>老後<rt>ろうご</rt></ruby>を<ruby>送<rt>おく</rt></ruby>りたいと<ruby>思<rt>おも</rt></ruby>っている。", en: "After retirement, I want to spend a peaceful old age in a place surrounded by nature." },
    ]
  },
  {
    group: 4,
    word: "激しい", wordRuby: "<ruby>激<rt>はげ</rt></ruby>しい",
    pos: "い-adjective", keyword: "Intense / Fierce",
    meaning: "intense; fierce; violent; severe; heavy",
    particles: [
      { ruby: "〜が<ruby>激<rt>はげ</rt></ruby>しい", meaning: "~ is intense / fierce" },
      { ruby: "<ruby>激<rt>はげ</rt></ruby>しい<ruby>競争<rt>きょうそう</rt></ruby>", meaning: "fierce competition" },
      { ruby: "<ruby>激<rt>はげ</rt></ruby>しい<ruby>雨<rt>あめ</rt></ruby>", meaning: "heavy rain; torrential rain" },
    ],
    examples: [
      { ruby: "<ruby>激<rt>はげ</rt></ruby>しい<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>った。", en: "Heavy rain fell." },
      { ruby: "<ruby>激<rt>はげ</rt></ruby>しい<ruby>競争<rt>きょうそう</rt></ruby>を<ruby>勝<rt>か</rt></ruby>ち<ruby>抜<rt>ぬ</rt></ruby>いた。", en: "I fought through fierce competition." },
      { ruby: "この<ruby>業界<rt>ぎょうかい</rt></ruby>では<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>進歩<rt>しんぽ</rt></ruby>が<ruby>激<rt>はげ</rt></ruby>しく、<ruby>常<rt>つね</rt></ruby>に<ruby>最新<rt>さいしん</rt></ruby>の<ruby>知識<rt>ちしき</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけることが<ruby>求<rt>もと</rt></ruby>められる。", en: "In this industry, technological progress is intense and one is always required to acquire the latest knowledge." },
    ]
  },
  {
    group: 4,
    word: "珍しい", wordRuby: "<ruby>珍<rt>めずら</rt></ruby>しい",
    pos: "い-adjective", keyword: "Rare / Unusual",
    meaning: "rare; unusual; uncommon; novel",
    particles: [
      { ruby: "〜が<ruby>珍<rt>めずら</rt></ruby>しい", meaning: "~ is rare / unusual" },
      { ruby: "<ruby>珍<rt>めずら</rt></ruby>しい<ruby>機会<rt>きかい</rt></ruby>", meaning: "a rare opportunity" },
      { ruby: "<ruby>珍<rt>めずら</rt></ruby>しく〜する", meaning: "unusually do ~; for once ~" },
    ],
    examples: [
      { ruby: "<ruby>珍<rt>めずら</rt></ruby>しい<ruby>虫<rt>むし</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけた。", en: "I found a rare insect." },
      { ruby: "<ruby>珍<rt>めずら</rt></ruby>しく<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きた。", en: "I unusually woke up early." },
      { ruby: "この<ruby>植物<rt>しょくぶつ</rt></ruby>はここにしか<ruby>生息<rt>せいそく</rt></ruby>しておらず、<ruby>世界的<rt>せかいてき</rt></ruby>にも<ruby>珍<rt>めずら</rt></ruby>しい<ruby>種<rt>しゅ</rt></ruby>として<ruby>保護<rt>ほご</rt></ruby>されている。", en: "This plant only lives here and is protected as a globally rare species." },
    ]
  },
  {
    group: 4,
    word: "おかしい", wordRuby: "おかしい",
    pos: "い-adjective", keyword: "Strange / Funny",
    meaning: "strange; odd; funny; something is wrong",
    particles: [
      { ruby: "〜が<ruby>おかしい</ruby>", meaning: "~ is odd / strange" },
      { ruby: "<ruby>何<rt>なに</rt></ruby>かおかしい", meaning: "something is off / wrong" },
      { ruby: "<ruby>様子<rt>ようす</rt></ruby>がおかしい", meaning: "something seems strange about the situation" },
    ],
    examples: [
      { ruby: "<ruby>様子<rt>ようす</rt></ruby>がおかしいね。", en: "Something seems off, doesn't it." },
      { ruby: "<ruby>機械<rt>きかい</rt></ruby>の<ruby>動<rt>うご</rt></ruby>きがおかしい。", en: "The machine's movement is strange." },
      { ruby: "その<ruby>日<rt>ひ</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>から<ruby>彼<rt>かれ</rt></ruby>の<ruby>言動<rt>げんどう</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>しおかしいと<ruby>感<rt>かん</rt></ruby>じていたが、<ruby>声<rt>こえ</rt></ruby>をかけることができなかった。", en: "From the morning of that day I had sensed something slightly off about his words and actions, but I wasn't able to speak to him." },
    ]
  },

  // ── GROUP 5: Abstract & Social ───────────────────────────────
  {
    group: 5,
    word: "実現", wordRuby: "<ruby>実現<rt>じつげん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Realization",
    meaning: "realization; fulfillment; making something happen",
    particles: [
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>する", meaning: "realize one's dream" },
      { ruby: "<ruby>実現<rt>じつげん</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて", meaning: "toward realization" },
      { ruby: "<ruby>実現<rt>じつげん</rt></ruby>可能<rt>かのう</rt></ruby>な〜", meaning: "realizable ~; feasible ~" },
    ],
    examples: [
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>したい。", en: "I want to realize my dream." },
      { ruby: "<ruby>計画<rt>けいかく</rt></ruby>の<ruby>実現<rt>じつげん</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて<ruby>動<rt>うご</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めた。", en: "I started to move toward realizing the plan." },
      { ruby: "<ruby>持続可能<rt>じぞくかのう</rt></ruby>な<ruby>社会<rt>しゃかい</rt></ruby>の<ruby>実現<rt>じつげん</rt></ruby>は、<ruby>今<rt>いま</rt></ruby>を<ruby>生<rt>い</rt></ruby>きる<ruby>私<rt>わたし</rt></ruby>たち<ruby>全員<rt>ぜんいん</rt></ruby>の<ruby>責任<rt>せきにん</rt></ruby>だ。", en: "Realizing a sustainable society is the responsibility of all of us living today." },
    ]
  },
  {
    group: 5,
    word: "責任", wordRuby: "<ruby>責任<rt>せきにん</rt></ruby>",
    pos: "noun", keyword: "Responsibility",
    meaning: "responsibility; duty; liability",
    particles: [
      { ruby: "<ruby>責任<rt>せきにん</rt></ruby>を<ruby>取<rt>と</rt></ruby>る", meaning: "take responsibility" },
      { ruby: "<ruby>責任<rt>せきにん</rt></ruby>がある", meaning: "have responsibility; be responsible" },
      { ruby: "<ruby>責任<rt>せきにん</rt></ruby>感", meaning: "sense of responsibility" },
    ],
    examples: [
      { ruby: "<ruby>責任<rt>せきにん</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>仕事<rt>しごと</rt></ruby>をする。", en: "I do my work with a sense of responsibility." },
      { ruby: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>に<ruby>責任<rt>せきにん</rt></ruby>を<ruby>取<rt>と</rt></ruby>った。", en: "I took responsibility for my own actions." },
      { ruby: "<ruby>リーダー<rt>リーダー</rt></ruby>として<ruby>チーム<rt>チーム</rt></ruby>の<ruby>成果<rt>せいか</rt></ruby>に<ruby>責任<rt>せきにん</rt></ruby>を<ruby>持<rt>も</rt></ruby>つことが、<ruby>信頼<rt>しんらい</rt></ruby>を<ruby>得<rt>え</rt></ruby>るための<ruby>第一歩<rt>だいいっぽ</rt></ruby>だ。", en: "As a leader, taking responsibility for the team's results is the first step to gaining trust." },
    ]
  },
  {
    group: 5,
    word: "価値", wordRuby: "<ruby>価値<rt>かち</rt></ruby>",
    pos: "noun", keyword: "Value / Worth",
    meaning: "value; worth; merit",
    particles: [
      { ruby: "<ruby>価値<rt>かち</rt></ruby>がある", meaning: "have value; be worth it" },
      { ruby: "<ruby>価値<rt>かち</rt></ruby>を<ruby>見出<rt>みいだ</rt></ruby>す", meaning: "find value in" },
      { ruby: "〜の<ruby>価値<rt>かち</rt></ruby>を<ruby>認<rt>みと</rt></ruby>める", meaning: "recognize the value of ~" },
    ],
    examples: [
      { ruby: "この<ruby>経験<rt>けいけん</rt></ruby>には<ruby>価値<rt>かち</rt></ruby>がある。", en: "This experience has value." },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>することに<ruby>価値<rt>かち</rt></ruby>があると<ruby>信<rt>しん</rt></ruby>じている。", en: "I believe there is value in making an effort." },
      { ruby: "たとえ<ruby>失敗<rt>しっぱい</rt></ruby>しても、その<ruby>経験<rt>けいけん</rt></ruby>から<ruby>学<rt>まな</rt></ruby>ぶことができれば、それ<ruby>自体<rt>じたい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>価値<rt>かち</rt></ruby>がある。", en: "Even if one fails, if one can learn from that experience, the experience itself has great value." },
    ]
  },
  {
    group: 5,
    word: "現実", wordRuby: "<ruby>現実<rt>げんじつ</rt></ruby>",
    pos: "noun", keyword: "Reality",
    meaning: "reality; the real world; actual facts",
    particles: [
      { ruby: "<ruby>現実<rt>げんじつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れる", meaning: "accept reality" },
      { ruby: "<ruby>現実<rt>げんじつ</rt></ruby>的<rt>てき</rt></ruby>な〜", meaning: "realistic ~; practical ~" },
      { ruby: "<ruby>現実<rt>げんじつ</rt></ruby>から<ruby>逃<rt>に</rt></ruby>げる", meaning: "escape from reality" },
    ],
    examples: [
      { ruby: "<ruby>現実<rt>げんじつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れなければ。", en: "I must accept reality." },
      { ruby: "<ruby>夢<rt>ゆめ</rt></ruby>と<ruby>現実<rt>げんじつ</rt></ruby>のギャップが<ruby>大<rt>おお</rt></ruby>きかった。", en: "The gap between the dream and reality was large." },
      { ruby: "<ruby>理想<rt>りそう</rt></ruby>を<ruby>高<rt>たか</rt></ruby>く<ruby>持<rt>も</rt></ruby>ちながらも、<ruby>現実<rt>げんじつ</rt></ruby>を<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>見<rt>み</rt></ruby>つめ、<ruby>一歩一歩<rt>いっぽいっぽ</rt></ruby><ruby>前進<rt>ぜんしん</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "While holding high ideals, it is important to look at reality calmly and advance step by step." },
    ]
  },
  {
    group: 5,
    word: "危険", wordRuby: "<ruby>危険<rt>きけん</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Danger",
    meaning: "danger; risk; hazard; dangerous",
    particles: [
      { ruby: "<ruby>危険<rt>きけん</rt></ruby>がある", meaning: "there is danger; be at risk" },
      { ruby: "<ruby>危険<rt>きけん</rt></ruby>を<ruby>冒<rt>おか</rt></ruby>す", meaning: "take a risk; brave danger" },
      { ruby: "<ruby>危険<rt>きけん</rt></ruby>な<ruby>状況<rt>じょうきょう</rt></ruby>", meaning: "a dangerous situation" },
    ],
    examples: [
      { ruby: "これは<ruby>危険<rt>きけん</rt></ruby>だ。", en: "This is dangerous." },
      { ruby: "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づかないでください。", en: "Please don't approach the dangerous place." },
      { ruby: "<ruby>自然災害<rt>しぜんさいがい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い<ruby>日本<rt>にほん</rt></ruby>では、<ruby>日頃<rt>ひごろ</rt></ruby>から<ruby>危険<rt>きけん</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて<ruby>準備<rt>じゅんび</rt></ruby>をしておくことが<ruby>不可欠<rt>ふかけつ</rt></ruby>だ。", en: "In Japan, which has many natural disasters, it is indispensable to make preparations for danger on a daily basis." },
    ]
  },
  {
    group: 5,
    word: "可能性", wordRuby: "<ruby>可能性<rt>かのうせい</rt></ruby>",
    pos: "noun", keyword: "Possibility / Potential",
    meaning: "possibility; potential; chance; likelihood",
    particles: [
      { ruby: "〜の<ruby>可能性<rt>かのうせい</rt></ruby>がある", meaning: "there is a possibility of ~" },
      { ruby: "<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げる", meaning: "broaden one's possibilities" },
      { ruby: "<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じる", meaning: "believe in the possibility / potential" },
    ],
    examples: [
      { ruby: "<ruby>可能性<rt>かのうせい</rt></ruby>はゼロじゃない。", en: "The possibility isn't zero." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>する<ruby>可能性<rt>かのうせい</rt></ruby>もある。", en: "There is also the possibility of failure." },
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>無限<rt>むげん</rt></ruby>の<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じ、それを<ruby>伸<rt>の</rt></ruby>ばすための<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>整<rt>ととの</rt></ruby>えることが<ruby>教育<rt>きょういく</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>だ。", en: "Believing in children's infinite possibilities and preparing an environment to develop them is the role of education." },
    ]
  },
  {
    group: 5,
    word: "役割", wordRuby: "<ruby>役割<rt>やくわり</rt></ruby>",
    pos: "noun", keyword: "Role",
    meaning: "role; function; part to play",
    particles: [
      { ruby: "〜の<ruby>役割<rt>やくわり</rt></ruby>を<ruby>果<rt>は</rt></ruby>たす", meaning: "fulfill the role of ~" },
      { ruby: "<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担<rt>にな</rt></ruby>う", meaning: "take on a role; bear responsibility" },
      { ruby: "<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>", meaning: "an important role" },
    ],
    examples: [
      { ruby: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>を<ruby>果<rt>は</rt></ruby>たした。", en: "I fulfilled my role." },
      { ruby: "チームの中で<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担<rt>にな</rt></ruby>っている。", en: "I take on an important role within the team." },
      { ruby: "AIが<ruby>社会<rt>しゃかい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でどのような<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担<rt>にな</rt></ruby>うべきかについて、<ruby>今<rt>いま</rt></ruby>まさに<ruby>議論<rt>ぎろん</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われている。", en: "Discussion is taking place right now about what role AI should play in society." },
    ]
  },
  {
    group: 5,
    word: "課題", wordRuby: "<ruby>課題<rt>かだい</rt></ruby>",
    pos: "noun", keyword: "Issue / Assignment",
    meaning: "issue; problem; task; assignment; challenge",
    particles: [
      { ruby: "<ruby>課題<rt>かだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>する", meaning: "solve an issue / tackle a challenge" },
      { ruby: "<ruby>課題<rt>かだい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む", meaning: "work on an issue / assignment" },
      { ruby: "〜という<ruby>課題<rt>かだい</rt></ruby>がある", meaning: "there is the issue of ~" },
    ],
    examples: [
      { ruby: "<ruby>課題<rt>かだい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>した。", en: "I submitted the assignment." },
      { ruby: "<ruby>多<rt>おお</rt></ruby>くの<ruby>課題<rt>かだい</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>っている。", en: "Many issues remain." },
      { ruby: "この<ruby>社会的<rt>しゃかいてき</rt></ruby><ruby>課題<rt>かだい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むには、<ruby>政府<rt>せいふ</rt></ruby>・<ruby>企業<rt>きぎょう</rt></ruby>・<ruby>個人<rt>こじん</rt></ruby>が<ruby>一体<rt>いったい</rt></ruby>となって<ruby>協力<rt>きょうりょく</rt></ruby>することが<ruby>不可欠<rt>ふかけつ</rt></ruby>だ。", en: "To tackle this social issue, it is indispensable for the government, businesses, and individuals to cooperate as one." },
    ]
  },
];

const GRADE_CONFIG = [
  { label: "SIMPLE",     color: "#00e5ff", bg: "rgba(0,229,255,0.07)",   border: "rgba(0,229,255,0.3)"  },
  { label: "NATURAL",    color: "#69ff47", bg: "rgba(105,255,71,0.07)",  border: "rgba(105,255,71,0.3)" },
  { label: "EXAM-LEVEL", color: "#ff6d00", bg: "rgba(255,109,0,0.07)",   border: "rgba(255,109,0,0.3)"  },
];

const GROUP_COLORS = ["#ff6b6b","#ffa94d","#69db7c","#4dabf7","#da77f2","#ff8787","#63e6be","#ffd43b"];

export default function N3VocabApp3() {
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
            <div style={{fontSize:10, letterSpacing:"0.3em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, textTransform:"uppercase"}}>✦ JLPT N3 · 語彙 3 ✦</div>
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
