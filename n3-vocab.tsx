import { useState } from "react";

const GROUPS = [
  "Time & Frequency",
  "Emotion & State",
  "Cause & Result",
  "Social & Communication",
  "Daily Actions",
  "Quantity & Degree",
  "Work & Study",
  "Society & Abstract",
];

const VOCAB = [
  // ── GROUP 0: Time & Frequency ──────────────────────────────
  {
    group: 0,
    word: "最近", wordRuby: "<ruby>最近<rt>さいきん</rt></ruby>",
    pos: "noun / adverb", keyword: "Recently",
    meaning: "recently; lately; these days",
    particles: [
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>では", meaning: "in recent times" },
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>になって", meaning: "only recently; just lately" },
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>の〜", meaning: "recent ~ (modifying noun)" },
    ],
    examples: [
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>忙<rt>いそが</rt></ruby>しい。", en: "I've been busy lately." },
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>するようにしている。", en: "These days I try to exercise every day." },
      { ruby: "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>若者<rt>わかもの</rt></ruby>は<ruby>スマホ<rt>スマホ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>める<ruby>傾向<rt>けいこう</rt></ruby>がある。", en: "There is a tendency for young people these days to gather information using smartphones." },
    ]
  },
  {
    group: 0,
    word: "以前", wordRuby: "<ruby>以前<rt>いぜん</rt></ruby>",
    pos: "noun / adverb", keyword: "Before / Previously",
    meaning: "before; previously; in the past; formerly",
    particles: [
      { ruby: "〜<ruby>以前<rt>いぜん</rt></ruby>に", meaning: "before ~" },
      { ruby: "<ruby>以前<rt>いぜん</rt></ruby>は", meaning: "in the past; used to" },
      { ruby: "<ruby>以前<rt>いぜん</rt></ruby>から", meaning: "for a long time; since before" },
    ],
    examples: [
      { ruby: "<ruby>以前<rt>いぜん</rt></ruby>はここに<ruby>公園<rt>こうえん</rt></ruby>があった。", en: "There used to be a park here." },
      { ruby: "<ruby>以前<rt>いぜん</rt></ruby>より<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になった。", en: "My Japanese has improved compared to before." },
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>は<ruby>以前<rt>いぜん</rt></ruby>から<ruby>指摘<rt>してき</rt></ruby>されていたが、<ruby>今<rt>いま</rt></ruby>も<ruby>解決<rt>かいけつ</rt></ruby>されていない。", en: "This problem has been pointed out for a long time, but it still has not been resolved." },
    ]
  },
  {
    group: 0,
    word: "現在", wordRuby: "<ruby>現在<rt>げんざい</rt></ruby>",
    pos: "noun / adverb", keyword: "Currently",
    meaning: "now; currently; at present; the present",
    particles: [
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>は", meaning: "currently; at present" },
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>のところ", meaning: "as things stand now" },
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>まで", meaning: "up to the present" },
    ],
    examples: [
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>、<ruby>調査中<rt>ちょうさちゅう</rt></ruby>です。", en: "We are currently investigating." },
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>は<ruby>会社員<rt>かいしゃいん</rt></ruby>として<ruby>働<rt>はたら</rt></ruby>いている。", en: "At present I'm working as a company employee." },
      { ruby: "<ruby>現在<rt>げんざい</rt></ruby>のところ、この<ruby>薬<rt>くすり</rt></ruby>の<ruby>副作用<rt>ふくさよう</rt></ruby>は<ruby>報告<rt>ほうこく</rt></ruby>されていない。", en: "As things stand now, no side effects from this medicine have been reported." },
    ]
  },
  {
    group: 0,
    word: "将来", wordRuby: "<ruby>将来<rt>しょうらい</rt></ruby>",
    pos: "noun / adverb", keyword: "Future",
    meaning: "the future; one's future; what lies ahead",
    particles: [
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>は", meaning: "in the future; someday" },
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>", meaning: "future dream; ambition" },
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて", meaning: "looking toward the future" },
    ],
    examples: [
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>は<ruby>医者<rt>いしゃ</rt></ruby>になりたい。", en: "In the future I want to become a doctor." },
      { ruby: "<ruby>将来<rt>しょうらい</rt></ruby>のために<ruby>貯金<rt>ちょきん</rt></ruby>をしている。", en: "I'm saving money for the future." },
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもたちが<ruby>将来<rt>しょうらい</rt></ruby>に<ruby>希望<rt>きぼう</rt></ruby>を<ruby>持<rt>も</rt></ruby>てる<ruby>社会<rt>しゃかい</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to create a society where children can hold hope for the future." },
    ]
  },
  {
    group: 0,
    word: "突然", wordRuby: "<ruby>突然<rt>とつぜん</rt></ruby>",
    pos: "adverb / な-adjective", keyword: "Suddenly",
    meaning: "suddenly; all of a sudden; unexpectedly",
    particles: [
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby>〜する", meaning: "suddenly do ~" },
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby>のこと", meaning: "a sudden thing / unexpected event" },
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby>で<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない", meaning: "sorry for the sudden ~" },
    ],
    examples: [
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ってきた。", en: "Rain suddenly started falling." },
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>って<ruby>びっくりした</rt></ruby>。", en: "I was startled when the phone suddenly rang." },
      { ruby: "<ruby>突然<rt>とつぜん</rt></ruby>の<ruby>訃報<rt>ふほう</rt></ruby>に、<ruby>誰<rt>だれ</rt></ruby>もが<ruby>言葉<rt>ことば</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>った。", en: "At the sudden news of the death, everyone was left speechless." },
    ]
  },
  {
    group: 0,
    word: "なかなか", wordRuby: "なかなか",
    pos: "adverb", keyword: "Not Easily / Quite",
    meaning: "① (with negative) not easily; not readily  ② (positive) quite; fairly; rather",
    particles: [
      { ruby: "なかなか〜ない", meaning: "cannot easily ~; ~doesn't happen easily" },
      { ruby: "なかなか〜だ", meaning: "quite / fairly ~ (positive)" },
      { ruby: "なかなか<ruby>上手<rt>じょうず</rt></ruby>だ", meaning: "quite skilled" },
    ],
    examples: [
      { ruby: "<ruby>眠<rt>ねむ</rt></ruby>れなくてなかなか<ruby>寝<rt>ね</rt></ruby>られなかった。", en: "I couldn't sleep and couldn't get to sleep easily." },
      { ruby: "なかなかいいレストランだね。", en: "This is a pretty good restaurant, isn't it." },
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>はなかなか<ruby>解決<rt>かいけつ</rt></ruby>しないが、あきらめずに<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むことが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "This problem doesn't resolve easily, but it's important to keep working on it without giving up." },
    ]
  },
  {
    group: 0,
    word: "ようやく", wordRuby: "ようやく",
    pos: "adverb", keyword: "Finally / At Last",
    meaning: "finally; at last; after a long time; barely",
    particles: [
      { ruby: "ようやく〜た", meaning: "finally managed to ~" },
      { ruby: "ようやく〜になった", meaning: "at last it became ~" },
      { ruby: "ようやく〜できた", meaning: "finally was able to ~" },
    ],
    examples: [
      { ruby: "ようやく<ruby>宿題<rt>しゅくだい</rt></ruby>が<ruby>終<rt>お</rt></ruby>わった。", en: "I finally finished my homework." },
      { ruby: "３<ruby>時間<rt>じかん</rt></ruby><ruby>待<rt>ま</rt></ruby>って、ようやく<ruby>番号<rt>ばんごう</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ばれた。", en: "After waiting 3 hours, my number was finally called." },
      { ruby: "<ruby>長年<rt>ながねん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>が<ruby>実<rt>み</rt></ruby>を<ruby>結<rt>むす</rt></ruby>び、ようやくプロジェクトが<ruby>完成<rt>かんせい</rt></ruby>した。", en: "Years of effort bore fruit and the project was finally completed." },
    ]
  },
  {
    group: 0,
    word: "やっと", wordRuby: "やっと",
    pos: "adverb", keyword: "At Last / Barely",
    meaning: "at last; finally; just barely; with great difficulty",
    particles: [
      { ruby: "やっと〜た", meaning: "just barely managed to ~" },
      { ruby: "やっと〜になった", meaning: "it's finally become ~" },
      { ruby: "やっと〜できる", meaning: "can finally ~" },
    ],
    examples: [
      { ruby: "やっと<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いた。", en: "I finally got home." },
      { ruby: "やっと<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>できた。", en: "I finally managed to pass the exam." },
      { ruby: "<ruby>何度<rt>なんど</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ね、やっとこの<ruby>曲<rt>きょく</rt></ruby>が<ruby>弾<rt>ひ</rt></ruby>けるようになった。", en: "After repeated practice, I've finally become able to play this piece." },
    ]
  },
  {
    group: 0,
    word: "すぐ", wordRuby: "すぐ",
    pos: "adverb", keyword: "Right Away",
    meaning: "immediately; right away; soon; nearby",
    particles: [
      { ruby: "すぐ〜する", meaning: "do ~ right away" },
      { ruby: "すぐに", meaning: "immediately; at once" },
      { ruby: "すぐそこ", meaning: "right over there; very close" },
    ],
    examples: [
      { ruby: "すぐ<ruby>戻<rt>もど</rt></ruby>ります。", en: "I'll be right back." },
      { ruby: "<ruby>病院<rt>びょういん</rt></ruby>はすぐそこです。", en: "The hospital is right over there." },
      { ruby: "<ruby>緊急<rt>きんきゅう</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>には、すぐに<ruby>担当者<rt>たんとうしゃ</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>してください。", en: "In case of emergency, please contact the person in charge immediately." },
    ]
  },
  {
    group: 0,
    word: "もうすぐ", wordRuby: "もうすぐ",
    pos: "adverb", keyword: "Very Soon",
    meaning: "very soon; before long; almost; nearly",
    particles: [
      { ruby: "もうすぐ〜だ", meaning: "it's almost ~" },
      { ruby: "もうすぐ〜になる", meaning: "will soon become ~" },
      { ruby: "もうすぐ〜する", meaning: "will do ~ soon" },
    ],
    examples: [
      { ruby: "もうすぐ<ruby>春<rt>はる</rt></ruby>だ。", en: "Spring is almost here." },
      { ruby: "バスはもうすぐ<ruby>来<rt>く</rt></ruby>る。", en: "The bus will come very soon." },
      { ruby: "もうすぐ<ruby>卒業<rt>そつぎょう</rt></ruby>なので、<ruby>就職活動<rt>しゅうしょくかつどう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めなければならない。", en: "Since graduation is almost here, I must start my job-hunting activities." },
    ]
  },

  // ── GROUP 1: Emotion & Mental State ────────────────────────
  {
    group: 1,
    word: "不安", wordRuby: "<ruby>不安<rt>ふあん</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Anxiety",
    meaning: "anxiety; unease; worry; insecurity",
    particles: [
      { ruby: "<ruby>不安<rt>ふあん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じる", meaning: "feel anxious" },
      { ruby: "<ruby>不安<rt>ふあん</rt></ruby>になる", meaning: "become worried" },
      { ruby: "<ruby>不安<rt>ふあん</rt></ruby>を<ruby>解消<rt>かいしょう</rt></ruby>する", meaning: "relieve one's anxiety" },
    ],
    examples: [
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>は<ruby>不安<rt>ふあん</rt></ruby>だ。", en: "I'm anxious before exams." },
      { ruby: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>海外<rt>かいがい</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのが<ruby>不安<rt>ふあん</rt></ruby>だった。", en: "I was anxious about going abroad alone." },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>環境<rt>かんきょう</rt></ruby>への<ruby>不安<rt>ふあん</rt></ruby>はあるが、それ以上に<ruby>楽<rt>たの</rt></ruby>しみも<ruby>大<rt>おお</rt></ruby>きい。", en: "There is anxiety about the new environment, but the excitement is even greater." },
    ]
  },
  {
    group: 1,
    word: "心配", wordRuby: "<ruby>心配<rt>しんぱい</rt></ruby>",
    pos: "noun / する-verb / な-adjective", keyword: "Worry",
    meaning: "worry; concern; anxiety; care",
    particles: [
      { ruby: "〜を<ruby>心配<rt>しんぱい</rt></ruby>する", meaning: "worry about ~" },
      { ruby: "<ruby>心配<rt>しんぱい</rt></ruby>をかける", meaning: "cause worry (to someone)" },
      { ruby: "<ruby>心配<rt>しんぱい</rt></ruby>いらない", meaning: "no need to worry" },
    ],
    examples: [
      { ruby: "<ruby>心配<rt>しんぱい</rt></ruby>しないでください。", en: "Please don't worry." },
      { ruby: "<ruby>親<rt>おや</rt></ruby>に<ruby>心配<rt>しんぱい</rt></ruby>をかけてしまった。", en: "I caused my parents to worry." },
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>が<ruby>心配<rt>しんぱい</rt></ruby>で、<ruby>なかなか眠<rt>なかなかねむ</rt></ruby>れなかった。", en: "Worried about the exam results, I couldn't easily get to sleep." },
    ]
  },
  {
    group: 1,
    word: "安心", wordRuby: "<ruby>安心<rt>あんしん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Relief",
    meaning: "relief; peace of mind; feeling at ease",
    particles: [
      { ruby: "<ruby>安心<rt>あんしん</rt></ruby>する", meaning: "feel relieved" },
      { ruby: "<ruby>安心<rt>あんしん</rt></ruby>させる", meaning: "put someone's mind at ease" },
      { ruby: "<ruby>安心<rt>あんしん</rt></ruby>して〜できる", meaning: "can ~ with peace of mind" },
    ],
    examples: [
      { ruby: "<ruby>合格<rt>ごうかく</rt></ruby>して<ruby>安心<rt>あんしん</rt></ruby>した。", en: "I felt relieved after passing." },
      { ruby: "<ruby>家族<rt>かぞく</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて<ruby>安心<rt>あんしん</rt></ruby>した。", en: "I felt at ease hearing my family's voice." },
      { ruby: "この<ruby>地域<rt>ちいき</rt></ruby>は<ruby>治安<rt>ちあん</rt></ruby>がいいので、<ruby>安心<rt>あんしん</rt></ruby>して<ruby>暮<rt>く</rt></ruby>らせる。", en: "Since this area has good public safety, one can live with peace of mind." },
    ]
  },
  {
    group: 1,
    word: "満足", wordRuby: "<ruby>満足<rt>まんぞく</rt></ruby>",
    pos: "noun / する-verb / な-adjective", keyword: "Satisfaction",
    meaning: "satisfaction; contentment; being pleased",
    particles: [
      { ruby: "〜に<ruby>満足<rt>まんぞく</rt></ruby>する", meaning: "be satisfied with ~" },
      { ruby: "<ruby>満足<rt>まんぞく</rt></ruby>のいく", meaning: "satisfying; up to one's satisfaction" },
      { ruby: "<ruby>満足<rt>まんぞく</rt></ruby>できない", meaning: "cannot be satisfied; unsatisfied" },
    ],
    examples: [
      { ruby: "<ruby>結果<rt>けっか</rt></ruby>に<ruby>満足<rt>まんぞく</rt></ruby>している。", en: "I'm satisfied with the result." },
      { ruby: "この<ruby>仕事<rt>しごと</rt></ruby>に<ruby>満足<rt>まんぞく</rt></ruby>している。", en: "I'm satisfied with this job." },
      { ruby: "<ruby>顧客<rt>こきゃく</rt></ruby>に<ruby>満足<rt>まんぞく</rt></ruby>してもらえるサービスを<ruby>提供<rt>ていきょう</rt></ruby>することが、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>目標<rt>もくひょう</rt></ruby>だ。", en: "Our goal is to provide services that satisfy our customers." },
    ]
  },
  {
    group: 1,
    word: "残念", wordRuby: "<ruby>残念<rt>ざんねん</rt></ruby>",
    pos: "noun / な-adjective", keyword: "Disappointing",
    meaning: "disappointing; regrettable; unfortunate; what a shame",
    particles: [
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>に<ruby>思<rt>おも</rt></ruby>う", meaning: "feel disappointed" },
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>ながら", meaning: "unfortunately; regrettably" },
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>なことに", meaning: "unfortunately; to one's regret" },
    ],
    examples: [
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>、<ruby>負<rt>ま</rt></ruby>けてしまった。", en: "What a shame, we lost." },
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>ながら、<ruby>参加<rt>さんか</rt></ruby>できません。", en: "Unfortunately, I cannot participate." },
      { ruby: "<ruby>残念<rt>ざんねん</rt></ruby>なことに、<ruby>長年<rt>ながねん</rt></ruby><ruby>親<rt>した</rt></ruby>しんできた<ruby>店<rt>みせ</rt></ruby>が<ruby>閉店<rt>へいてん</rt></ruby>してしまった。", en: "Unfortunately, the shop I had frequented for many years has closed." },
    ]
  },
  {
    group: 1,
    word: "驚く", wordRuby: "<ruby>驚<rt>おどろ</rt></ruby>く",
    pos: "verb (Group 1)", keyword: "Be Surprised",
    meaning: "to be surprised; to be astonished; to be amazed",
    particles: [
      { ruby: "〜に<ruby>驚<rt>おどろ</rt></ruby>く", meaning: "be surprised at / by ~" },
      { ruby: "〜て<ruby>驚<rt>おどろ</rt></ruby>く", meaning: "be surprised and ~" },
      { ruby: "<ruby>驚<rt>おどろ</rt></ruby>いたことに", meaning: "surprisingly; to one's surprise" },
    ],
    examples: [
      { ruby: "<ruby>値段<rt>ねだん</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さに<ruby>驚<rt>おどろ</rt></ruby>いた。", en: "I was surprised at how expensive it was." },
      { ruby: "その<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いて<ruby>驚<rt>おどろ</rt></ruby>いた。", en: "I was surprised to hear that news." },
      { ruby: "<ruby>驚<rt>おどろ</rt></ruby>いたことに、<ruby>彼<rt>かれ</rt></ruby>は<ruby>一度<rt>いちど</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>せずに<ruby>試合<rt>しあい</rt></ruby>に<ruby>勝<rt>か</rt></ruby>ってしまった。", en: "Surprisingly, he won the match without practicing even once." },
    ]
  },
  {
    group: 1,
    word: "恥ずかしい", wordRuby: "<ruby>恥<rt>は</rt></ruby>ずかしい",
    pos: "い-adjective", keyword: "Embarrassed",
    meaning: "embarrassing; shy; ashamed; humiliating",
    particles: [
      { ruby: "〜が<ruby>恥<rt>は</rt></ruby>ずかしい", meaning: "feel embarrassed about ~" },
      { ruby: "<ruby>恥<rt>は</rt></ruby>ずかしくなる", meaning: "become embarrassed" },
      { ruby: "<ruby>恥<rt>は</rt></ruby>ずかしくて〜できない", meaning: "too embarrassed to ~" },
    ],
    examples: [
      { ruby: "<ruby>人前<rt>ひとまえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>すのは<ruby>恥<rt>は</rt></ruby>ずかしい。", en: "Speaking in front of people is embarrassing." },
      { ruby: "<ruby>間違<rt>まちが</rt></ruby>えて<ruby>恥<rt>は</rt></ruby>ずかしかった。", en: "I made a mistake and felt embarrassed." },
      { ruby: "<ruby>恥<rt>は</rt></ruby>ずかしくて<ruby>言<rt>い</rt></ruby>えなかったが、<ruby>勇気<rt>ゆうき</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>話<rt>はな</rt></ruby>すことにした。", en: "I was too embarrassed to say it, but I decided to summon my courage and speak honestly." },
    ]
  },
  {
    group: 1,
    word: "寂しい", wordRuby: "<ruby>寂<rt>さび</rt></ruby>しい",
    pos: "い-adjective", keyword: "Lonely",
    meaning: "lonely; lonesome; desolate; feeling of absence",
    particles: [
      { ruby: "〜が<ruby>寂<rt>さび</rt></ruby>しい", meaning: "feel lonely without ~" },
      { ruby: "<ruby>寂<rt>さび</rt></ruby>しくなる", meaning: "become lonely" },
      { ruby: "<ruby>寂<rt>さび</rt></ruby>しい<ruby>思<rt>おも</rt></ruby>いをする", meaning: "experience loneliness" },
    ],
    examples: [
      { ruby: "<ruby>友達<rt>ともだち</rt></ruby>がいなくて<ruby>寂<rt>さび</rt></ruby>しい。", en: "I'm lonely because I have no friends." },
      { ruby: "<ruby>家族<rt>かぞく</rt></ruby>と<ruby>離<rt>はな</rt></ruby>れて<ruby>寂<rt>さび</rt></ruby>しかった。", en: "I felt lonely being apart from my family." },
      { ruby: "<ruby>長年<rt>ながねん</rt></ruby><ruby>住<rt>す</rt></ruby>んだ<ruby>街<rt>まち</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れるのは<ruby>寂<rt>さび</rt></ruby>しいが、<ruby>新<rt>あたら</rt></ruby>しい<ruby>出会<rt>であ</rt></ruby>いを<ruby>楽<rt>たの</rt></ruby>しみにしている。", en: "Leaving the town I lived in for many years is lonely, but I look forward to new encounters." },
    ]
  },
  {
    group: 1,
    word: "羨ましい", wordRuby: "<ruby>羨<rt>うらや</rt></ruby>ましい",
    pos: "い-adjective", keyword: "Envious",
    meaning: "envious; jealous; I wish I had that",
    particles: [
      { ruby: "〜が<ruby>羨<rt>うらや</rt></ruby>ましい", meaning: "be envious of ~" },
      { ruby: "<ruby>羨<rt>うらや</rt></ruby>ましく<ruby>思<rt>おも</rt></ruby>う", meaning: "feel envious; think how lucky" },
      { ruby: "<ruby>羨<rt>うらや</rt></ruby>ましいな", meaning: "how lucky; I'm jealous (casual)" },
    ],
    examples: [
      { ruby: "<ruby>旅行<rt>りょこう</rt></ruby>できて<ruby>羨<rt>うらや</rt></ruby>ましいな。", en: "How lucky to be able to travel." },
      { ruby: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>語学力<rt>ごがくりょく</rt></ruby>が<ruby>羨<rt>うらや</rt></ruby>ましい。", en: "I envy his language ability." },
      { ruby: "<ruby>自分<rt>じぶん</rt></ruby>のやりたいことをやっている<ruby>人<rt>ひと</rt></ruby>を<ruby>見<rt>み</rt></ruby>ると、<ruby>羨<rt>うらや</rt></ruby>ましいと<ruby>感<rt>かん</rt></ruby>じることがある。", en: "When I see people doing what they want to do, I sometimes feel envious." },
    ]
  },
  {
    group: 1,
    word: "悔しい", wordRuby: "<ruby>悔<rt>くや</rt></ruby>しい",
    pos: "い-adjective", keyword: "Frustrated / Vexed",
    meaning: "frustrated; vexed; bitter; chagrin at losing or failing",
    particles: [
      { ruby: "〜が<ruby>悔<rt>くや</rt></ruby>しい", meaning: "feel bitter about ~" },
      { ruby: "<ruby>悔<rt>くや</rt></ruby>しい<ruby>思<rt>おも</rt></ruby>いをする", meaning: "experience frustration" },
      { ruby: "<ruby>悔<rt>くや</rt></ruby>しくて<ruby>泣<rt>な</rt></ruby>く", meaning: "cry out of frustration" },
    ],
    examples: [
      { ruby: "<ruby>負<rt>ま</rt></ruby>けて<ruby>悔<rt>くや</rt></ruby>しかった。", en: "I was frustrated at losing." },
      { ruby: "あと<ruby>少<rt>すこ</rt></ruby>しで<ruby>合格<rt>ごうかく</rt></ruby>できたのに<ruby>悔<rt>くや</rt></ruby>しい。", en: "It's frustrating that I was so close to passing." },
      { ruby: "この<ruby>悔<rt>くや</rt></ruby>しい<ruby>思<rt>おも</rt></ruby>いを<ruby>忘<rt>わす</rt></ruby>れず、<ruby>次<rt>つぎ</rt></ruby>こそは<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>成功<rt>せいこう</rt></ruby>させると<ruby>誓<rt>ちか</rt></ruby>った。", en: "I vowed not to forget this frustration and to definitely succeed next time." },
    ]
  },

  // ── GROUP 2: Cause & Result ─────────────────────────────────
  {
    group: 2,
    word: "原因", wordRuby: "<ruby>原因<rt>げんいん</rt></ruby>",
    pos: "noun", keyword: "Cause",
    meaning: "cause; origin; root of a problem",
    particles: [
      { ruby: "〜が<ruby>原因<rt>げんいん</rt></ruby>だ", meaning: "~ is the cause" },
      { ruby: "<ruby>原因<rt>げんいん</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べる", meaning: "investigate the cause" },
      { ruby: "<ruby>原因<rt>げんいん</rt></ruby>で〜する", meaning: "do ~ due to the cause" },
    ],
    examples: [
      { ruby: "<ruby>原因<rt>げんいん</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からない。", en: "I don't know the cause." },
      { ruby: "ストレスが<ruby>病気<rt>びょうき</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>になることがある。", en: "Stress can become the cause of illness." },
      { ruby: "<ruby>事故<rt>じこ</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>を<ruby>徹底的<rt>てっていてき</rt></ruby>に<ruby>調査<rt>ちょうさ</rt></ruby>して、<ruby>再発<rt>さいはつ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐことが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "Thoroughly investigating the cause of the accident and preventing recurrence is important." },
    ]
  },
  {
    group: 2,
    word: "結果", wordRuby: "<ruby>結果<rt>けっか</rt></ruby>",
    pos: "noun", keyword: "Result",
    meaning: "result; outcome; consequence",
    particles: [
      { ruby: "〜の<ruby>結果<rt>けっか</rt></ruby>", meaning: "as a result of ~" },
      { ruby: "<ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby>る", meaning: "results come out" },
      { ruby: "<ruby>結果<rt>けっか</rt></ruby>として", meaning: "as a result; consequently" },
    ],
    examples: [
      { ruby: "<ruby>結果<rt>けっか</rt></ruby>はどうでしたか？", en: "How were the results?" },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>した<ruby>結果<rt>けっか</rt></ruby>、<ruby>合格<rt>ごうかく</rt></ruby>できた。", en: "As a result of my efforts, I was able to pass." },
      { ruby: "<ruby>調査<rt>ちょうさ</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>、<ruby>問題<rt>もんだい</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>は<ruby>設計<rt>せっけい</rt></ruby>ミスにあることが<ruby>判明<rt>はんめい</rt></ruby>した。", en: "As a result of the investigation, it became clear that the cause of the problem lay in a design error." },
    ]
  },
  {
    group: 2,
    word: "影響", wordRuby: "<ruby>影響<rt>えいきょう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Influence",
    meaning: "influence; effect; impact",
    particles: [
      { ruby: "〜に<ruby>影響<rt>えいきょう</rt></ruby>する", meaning: "have an influence on ~" },
      { ruby: "〜の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける", meaning: "be influenced by ~" },
      { ruby: "〜に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える", meaning: "give an influence to ~" },
    ],
    examples: [
      { ruby: "<ruby>天気<rt>てんき</rt></ruby>が<ruby>気分<rt>きぶん</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>する。", en: "Weather influences one's mood." },
      { ruby: "<ruby>親<rt>おや</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて、<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きになった。", en: "Influenced by my parents, I came to love music." },
      { ruby: "インターネットの<ruby>普及<rt>ふきゅう</rt></ruby>は、<ruby>人々<rt>ひとびと</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>や<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えた。", en: "The spread of the internet had a huge influence on people's lives and ways of working." },
    ]
  },
  {
    group: 2,
    word: "目的", wordRuby: "<ruby>目的<rt>もくてき</rt></ruby>",
    pos: "noun", keyword: "Purpose",
    meaning: "purpose; objective; goal; aim",
    particles: [
      { ruby: "〜を<ruby>目的<rt>もくてき</rt></ruby>として", meaning: "for the purpose of ~" },
      { ruby: "<ruby>目的<rt>もくてき</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>する", meaning: "achieve one's objective" },
      { ruby: "<ruby>目的<rt>もくてき</rt></ruby>は〜だ", meaning: "the purpose is ~" },
    ],
    examples: [
      { ruby: "<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は<ruby>観光<rt>かんこう</rt></ruby>だ。", en: "The purpose of the trip is sightseeing." },
      { ruby: "<ruby>目的<rt>もくてき</rt></ruby>を<ruby>決<rt>き</rt></ruby>めてから<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めた。", en: "I started studying after deciding on my objective." },
      { ruby: "この<ruby>調査<rt>ちょうさ</rt></ruby>は、<ruby>地域<rt>ちいき</rt></ruby>の<ruby>住民<rt>じゅうみん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>レベルを<ruby>把握<rt>はあく</rt></ruby>することを<ruby>目的<rt>もくてき</rt></ruby>として<ruby>行<rt>おこな</rt></ruby>われた。", en: "This survey was conducted for the purpose of understanding the living standards of local residents." },
    ]
  },
  {
    group: 2,
    word: "効果", wordRuby: "<ruby>効果<rt>こうか</rt></ruby>",
    pos: "noun", keyword: "Effect",
    meaning: "effect; result; effectiveness",
    particles: [
      { ruby: "〜に<ruby>効果<rt>こうか</rt></ruby>がある", meaning: "be effective against ~" },
      { ruby: "<ruby>効果<rt>こうか</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げる", meaning: "raise effectiveness; achieve good results" },
      { ruby: "〜の<ruby>効果<rt>こうか</rt></ruby>", meaning: "the effect of ~" },
    ],
    examples: [
      { ruby: "この<ruby>薬<rt>くすり</rt></ruby>は<ruby>効果<rt>こうか</rt></ruby>がある。", en: "This medicine is effective." },
      { ruby: "<ruby>運動<rt>うんどう</rt></ruby>にはストレスを<ruby>減<rt>へ</rt></ruby>らす<ruby>効果<rt>こうか</rt></ruby>がある。", en: "Exercise has the effect of reducing stress." },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>学習<rt>がくしゅう</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>入<rt>い</rt></ruby>れたことで、<ruby>授業<rt>じゅぎょう</rt></ruby>の<ruby>効果<rt>こうか</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きく<ruby>上<rt>あ</rt></ruby>がった。", en: "By incorporating new learning methods, the effectiveness of the lessons improved greatly." },
    ]
  },
  {
    group: 2,
    word: "解決", wordRuby: "<ruby>解決<rt>かいけつ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Resolution",
    meaning: "resolution; solution; settling a problem",
    particles: [
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>する", meaning: "solve a problem" },
      { ruby: "<ruby>解決<rt>かいけつ</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて", meaning: "toward a resolution" },
      { ruby: "<ruby>解決<rt>かいけつ</rt></ruby>策<rt>さく</rt></ruby>", meaning: "solution; measure to resolve" },
    ],
    examples: [
      { ruby: "この<ruby>問題<rt>もんだい</rt></ruby>はすぐに<ruby>解決<rt>かいけつ</rt></ruby>できる。", en: "This problem can be resolved right away." },
      { ruby: "<ruby>二人<rt>ふたり</rt></ruby>で<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って<ruby>解決<rt>かいけつ</rt></ruby>した。", en: "We resolved it by talking it out together." },
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>の<ruby>根本<rt>こんぽん</rt></ruby>から<ruby>解決<rt>かいけつ</rt></ruby>しなければ、<ruby>同<rt>おな</rt></ruby>じことがくり<ruby>返<rt>かえ</rt></ruby>されるだろう。", en: "Unless we resolve the problem from its root, the same thing will probably recur." },
    ]
  },
  {
    group: 2,
    word: "重要", wordRuby: "<ruby>重要<rt>じゅうよう</rt></ruby>",
    pos: "な-adjective / noun", keyword: "Important",
    meaning: "important; significant; crucial",
    particles: [
      { ruby: "〜が<ruby>重要<rt>じゅうよう</rt></ruby>だ", meaning: "~ is important" },
      { ruby: "<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>", meaning: "an important role" },
      { ruby: "<ruby>重要<rt>じゅうよう</rt></ruby>視<rt>し</rt></ruby>する", meaning: "regard as important; place importance on" },
    ],
    examples: [
      { ruby: "<ruby>健康<rt>けんこう</rt></ruby>は<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "Health is important." },
      { ruby: "<ruby>会議<rt>かいぎ</rt></ruby>で<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>決定<rt>けってい</rt></ruby>があった。", en: "There was an important decision at the meeting." },
      { ruby: "コミュニケーション<ruby>能力<rt>のうりょく</rt></ruby>は、<ruby>現代<rt>げんだい</rt></ruby>の<ruby>社会<rt>しゃかい</rt></ruby>で<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>スキル<rt>スキル</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つだ。", en: "Communication ability is one of the important skills in modern society." },
    ]
  },
  {
    group: 2,
    word: "必要", wordRuby: "<ruby>必要<rt>ひつよう</rt></ruby>",
    pos: "な-adjective / noun", keyword: "Necessary",
    meaning: "necessary; needed; essential; requirement",
    particles: [
      { ruby: "〜が<ruby>必要<rt>ひつよう</rt></ruby>だ", meaning: "~ is necessary" },
      { ruby: "〜する<ruby>必要<rt>ひつよう</rt></ruby>がある", meaning: "there is a need to ~; must ~" },
      { ruby: "<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて", meaning: "as needed; depending on the need" },
    ],
    examples: [
      { ruby: "<ruby>パスポート<rt>パスポート</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "A passport is necessary." },
      { ruby: "<ruby>休<rt>やす</rt></ruby>む<ruby>必要<rt>ひつよう</rt></ruby>がある。", en: "There is a need to rest." },
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>するためには、<ruby>個人<rt>こじん</rt></ruby>だけでなく<ruby>社会<rt>しゃかい</rt></ruby>全体の<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みが<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "To solve environmental problems, efforts are needed not just from individuals but from society as a whole." },
    ]
  },

  // ── GROUP 3: Social & Communication ────────────────────────
  {
    group: 3,
    word: "意見", wordRuby: "<ruby>意見<rt>いけん</rt></ruby>",
    pos: "noun", keyword: "Opinion",
    meaning: "opinion; view; one's thoughts on a matter",
    particles: [
      { ruby: "<ruby>意見<rt>いけん</rt></ruby>を<ruby>述<rt>の</rt></ruby>べる", meaning: "state one's opinion" },
      { ruby: "<ruby>意見<rt>いけん</rt></ruby>が<ruby>合<rt>あ</rt></ruby>う／<ruby>合<rt>あ</rt></ruby>わない", meaning: "opinions match / don't match" },
      { ruby: "<ruby>意見<rt>いけん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く", meaning: "hear / ask for opinions" },
    ],
    examples: [
      { ruby: "<ruby>意見<rt>いけん</rt></ruby>がありますか？", en: "Do you have any opinions?" },
      { ruby: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>をはっきり<ruby>言<rt>い</rt></ruby>えた。", en: "I was able to state my opinion clearly." },
      { ruby: "<ruby>会議<rt>かいぎ</rt></ruby>では<ruby>様々<rt>さまざま</rt></ruby>な<ruby>意見<rt>いけん</rt></ruby>が<ruby>出<rt>で</rt></ruby>たが、<ruby>最終的<rt>さいしゅうてき</rt></ruby>には<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>同意<rt>どうい</rt></ruby>した。", en: "Various opinions were raised in the meeting, but in the end everyone agreed." },
    ]
  },
  {
    group: 3,
    word: "連絡", wordRuby: "<ruby>連絡<rt>れんらく</rt></ruby>",
    pos: "noun / する-verb", keyword: "Contact",
    meaning: "contact; communication; getting in touch",
    particles: [
      { ruby: "〜に<ruby>連絡<rt>れんらく</rt></ruby>する", meaning: "contact ~" },
      { ruby: "<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>取<rt>と</rt></ruby>る", meaning: "get in touch; keep in contact" },
      { ruby: "<ruby>連絡<rt>れんらく</rt></ruby>が<ruby>来<rt>く</rt></ruby>る", meaning: "receive word; be contacted" },
    ],
    examples: [
      { ruby: "あとで<ruby>連絡<rt>れんらく</rt></ruby>します。", en: "I'll contact you later." },
      { ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>休<rt>やす</rt></ruby>む<ruby>場合<rt>ばあい</rt></ruby>は<ruby>連絡<rt>れんらく</rt></ruby>してください。", en: "Please contact us if you need to be absent suddenly." },
      { ruby: "<ruby>転職後<rt>てんしょくご</rt></ruby>も<ruby>以前<rt>いぜん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けるようにしている。", en: "Even after changing jobs, I try to keep in touch with my former colleagues." },
    ]
  },
  {
    group: 3,
    word: "相談", wordRuby: "<ruby>相談<rt>そうだん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Consultation",
    meaning: "consultation; discussion; asking for advice",
    particles: [
      { ruby: "〜に<ruby>相談<rt>そうだん</rt></ruby>する", meaning: "consult with ~; ask ~ for advice" },
      { ruby: "<ruby>相談<rt>そうだん</rt></ruby>にのる", meaning: "listen to someone's problem; advise" },
      { ruby: "<ruby>相談<rt>そうだん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける", meaning: "receive a consultation; be consulted" },
    ],
    examples: [
      { ruby: "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>した。", en: "I consulted my teacher." },
      { ruby: "<ruby>悩<rt>なや</rt></ruby>んでいるなら、<ruby>誰<rt>だれ</rt></ruby>かに<ruby>相談<rt>そうだん</rt></ruby>してみて。", en: "If you're troubled, try consulting someone." },
      { ruby: "キャリアについて<ruby>悩<rt>なや</rt></ruby>んでいたので、<ruby>信頼<rt>しんらい</rt></ruby>できる<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>することにした。", en: "Since I was troubled about my career, I decided to consult a senior colleague I trust." },
    ]
  },
  {
    group: 3,
    word: "説明", wordRuby: "<ruby>説明<rt>せつめい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Explanation",
    meaning: "explanation; description; account",
    particles: [
      { ruby: "〜を<ruby>説明<rt>せつめい</rt></ruby>する", meaning: "explain ~" },
      { ruby: "〜に<ruby>説明<rt>せつめい</rt></ruby>する", meaning: "explain to ~" },
      { ruby: "<ruby>説明<rt>せつめい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める", meaning: "demand an explanation" },
    ],
    examples: [
      { ruby: "<ruby>先生<rt>せんせい</rt></ruby>が<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>した。", en: "The teacher explained carefully." },
      { ruby: "もう<ruby>一度<rt>いちど</rt></ruby><ruby>説明<rt>せつめい</rt></ruby>してもらえますか？", en: "Could you explain that once more?" },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しいシステムの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>分<rt>わ</rt></ruby>かりやすく<ruby>説明<rt>せつめい</rt></ruby>する<ruby>動画<rt>どうが</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>した。", en: "We created a video that explains how to use the new system in an easy-to-understand way." },
    ]
  },
  {
    group: 3,
    word: "紹介", wordRuby: "<ruby>紹介<rt>しょうかい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Introduction",
    meaning: "introduction; referral; presenting someone or something",
    particles: [
      { ruby: "〜を<ruby>紹介<rt>しょうかい</rt></ruby>する", meaning: "introduce ~" },
      { ruby: "〜に<ruby>紹介<rt>しょうかい</rt></ruby>する", meaning: "introduce ~ to (someone)" },
      { ruby: "<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をする", meaning: "give a self-introduction" },
    ],
    examples: [
      { ruby: "<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしてください。", en: "Please introduce yourself." },
      { ruby: "<ruby>友達<rt>ともだち</rt></ruby>を<ruby>家族<rt>かぞく</rt></ruby>に<ruby>紹介<rt>しょうかい</rt></ruby>した。", en: "I introduced my friend to my family." },
      { ruby: "<ruby>面接<rt>めんせつ</rt></ruby>では、まず<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>自己紹介<rt>じこしょうかい</rt></ruby>と、<ruby>志望<rt>しぼう</rt></ruby><ruby>動機<rt>どうき</rt></ruby>を<ruby>述<rt>の</rt></ruby>べるよう<ruby>求<rt>もと</rt></ruby>められた。", en: "In the interview, I was asked to first give a brief self-introduction and then state my reasons for applying." },
    ]
  },
  {
    group: 3,
    word: "断る", wordRuby: "<ruby>断<rt>ことわ</rt></ruby>る",
    pos: "verb (Group 1)", keyword: "Refuse / Decline",
    meaning: "to refuse; to decline; to say no; to turn down",
    particles: [
      { ruby: "〜を<ruby>断<rt>ことわ</rt></ruby>る", meaning: "refuse ~; turn down ~" },
      { ruby: "<ruby>断<rt>ことわ</rt></ruby>られる", meaning: "be refused / turned down" },
      { ruby: "<ruby>断<rt>ことわ</rt></ruby>りにくい", meaning: "hard to refuse; difficult to say no" },
    ],
    examples: [
      { ruby: "<ruby>誘<rt>さそ</rt></ruby>いを<ruby>断<rt>ことわ</rt></ruby>った。", en: "I turned down the invitation." },
      { ruby: "<ruby>無理<rt>むり</rt></ruby>なお<ruby>願<rt>ねが</rt></ruby>いはきっぱり<ruby>断<rt>ことわ</rt></ruby>った。", en: "I firmly refused the unreasonable request." },
      { ruby: "<ruby>親切<rt>しんせつ</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>ってくれたのに<ruby>断<rt>ことわ</rt></ruby>るのは<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>なかったが、<ruby>先約<rt>せんやく</rt></ruby>があったので<ruby>仕方<rt>しかた</rt></ruby>なかった。", en: "It was sorry to decline despite the kind invitation, but I had a prior engagement so it couldn't be helped." },
    ]
  },
  {
    group: 3,
    word: "確認", wordRuby: "<ruby>確認<rt>かくにん</rt></ruby>",
    pos: "noun / する-verb", keyword: "Confirmation",
    meaning: "confirmation; checking; verifying",
    particles: [
      { ruby: "〜を<ruby>確認<rt>かくにん</rt></ruby>する", meaning: "confirm ~; check ~" },
      { ruby: "<ruby>確認<rt>かくにん</rt></ruby>が<ruby>取<rt>と</rt></ruby>れた", meaning: "confirmation was obtained" },
      { ruby: "<ruby>確認<rt>かくにん</rt></ruby>してから", meaning: "after confirming" },
    ],
    examples: [
      { ruby: "<ruby>予約<rt>よやく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>した。", en: "I confirmed the reservation." },
      { ruby: "<ruby>メール<rt>めーる</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>してください。", en: "Please confirm the content of the email one more time." },
      { ruby: "<ruby>書類<rt>しょるい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>記載<rt>きさい</rt></ruby>内容に<ruby>間違<rt>まちが</rt></ruby>いがないか<ruby>必<rt>かなら</rt></ruby>ず<ruby>確認<rt>かくにん</rt></ruby>するようにしてください。", en: "Before submitting the documents, please be sure to verify that there are no errors in the written content." },
    ]
  },
  {
    group: 3,
    word: "頼む", wordRuby: "<ruby>頼<rt>たの</rt></ruby>む",
    pos: "verb (Group 1)", keyword: "Request / Ask",
    meaning: "to ask; to request; to depend on; to order (food)",
    particles: [
      { ruby: "〜に〜を<ruby>頼<rt>たの</rt></ruby>む", meaning: "ask ~ to do ~; request ~ of ~" },
      { ruby: "〜を<ruby>頼<rt>たの</rt></ruby>む", meaning: "order ~; ask for ~" },
      { ruby: "<ruby>頼<rt>たの</rt></ruby>みやすい", meaning: "easy to ask; approachable" },
    ],
    examples: [
      { ruby: "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>手伝<rt>てつだ</rt></ruby>いを<ruby>頼<rt>たの</rt></ruby>んだ。", en: "I asked my friend for help." },
      { ruby: "コーヒーを<ruby>頼<rt>たの</rt></ruby>んだ。", en: "I ordered a coffee." },
      { ruby: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>え<ruby>込<rt>こ</rt></ruby>まずに、<ruby>困<rt>こま</rt></ruby>ったときは<ruby>周<rt>まわ</rt></ruby>りに<ruby>頼<rt>たの</rt></ruby>むことが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important not to hold everything in by yourself, but to ask those around you when you're in trouble." },
    ]
  },

  // ── GROUP 4: Daily Actions ──────────────────────────────────
  {
    group: 4,
    word: "準備", wordRuby: "<ruby>準備<rt>じゅんび</rt></ruby>",
    pos: "noun / する-verb", keyword: "Preparation",
    meaning: "preparation; getting ready; arrangements",
    particles: [
      { ruby: "〜の<ruby>準備<rt>じゅんび</rt></ruby>をする", meaning: "prepare for ~" },
      { ruby: "<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>整<rt>ととの</rt></ruby>う", meaning: "preparations are complete" },
      { ruby: "<ruby>準備<rt>じゅんび</rt></ruby>ができる", meaning: "be ready; be prepared" },
    ],
    examples: [
      { ruby: "<ruby>準備<rt>じゅんび</rt></ruby>はできた？", en: "Are you ready?" },
      { ruby: "<ruby>発表<rt>はっぴょう</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>に<ruby>時間<rt>じかん</rt></ruby>がかかった。", en: "Preparation for the presentation took time." },
      { ruby: "<ruby>大事<rt>だいじ</rt></ruby>な<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて、<ruby>資料<rt>しりょう</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>前日<rt>ぜんじつ</rt></ruby>のうちに<ruby>済<rt>す</rt></ruby>ませておいた。", en: "In preparation for the important meeting, I finished preparing the materials the day before." },
    ]
  },
  {
    group: 4,
    word: "片付ける", wordRuby: "<ruby>片付<rt>かたづ</rt></ruby>ける",
    pos: "verb (Group 2)", keyword: "Tidy Up",
    meaning: "to tidy up; to put away; to clear up; to deal with",
    particles: [
      { ruby: "〜を<ruby>片付<rt>かたづ</rt></ruby>ける", meaning: "tidy up ~; put ~ away" },
      { ruby: "<ruby>部屋<rt>へや</rt></ruby>を<ruby>片付<rt>かたづ</rt></ruby>ける", meaning: "tidy one's room" },
      { ruby: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>片付<rt>かたづ</rt></ruby>ける", meaning: "deal with / finish work" },
    ],
    examples: [
      { ruby: "<ruby>部屋<rt>へや</rt></ruby>を<ruby>片付<rt>かたづ</rt></ruby>けた。", en: "I tidied up the room." },
      { ruby: "<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>は<ruby>食器<rt>しょっき</rt></ruby>を<ruby>片付<rt>かたづ</rt></ruby>けた。", en: "After the meal I put away the dishes." },
      { ruby: "<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しの<ruby>前<rt>まえ</rt></ruby>に、<ruby>長年<rt>ながねん</rt></ruby><ruby>溜<rt>た</rt></ruby>め<ruby>込<rt>こ</rt></ruby>んだものを<ruby>片付<rt>かたづ</rt></ruby>けるのがとても<ruby>大変<rt>たいへん</rt></ruby>だった。", en: "Before the move, tidying up the things I had accumulated over many years was incredibly hard." },
    ]
  },
  {
    group: 4,
    word: "集める", wordRuby: "<ruby>集<rt>あつ</rt></ruby>める",
    pos: "verb (Group 2)", keyword: "Collect",
    meaning: "to collect; to gather; to accumulate",
    particles: [
      { ruby: "〜を<ruby>集<rt>あつ</rt></ruby>める", meaning: "collect ~; gather ~" },
      { ruby: "<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>める", meaning: "gather information" },
      { ruby: "<ruby>注目<rt>ちゅうもく</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>める", meaning: "attract attention" },
    ],
    examples: [
      { ruby: "<ruby>切手<rt>きって</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めている。", en: "I collect stamps." },
      { ruby: "<ruby>試験<rt>しけん</rt></ruby>のために<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めた。", en: "I gathered information for the exam." },
      { ruby: "その<ruby>新製品<rt>しんせいひん</rt></ruby>は<ruby>発売<rt>はつばい</rt></ruby>と<ruby>同時<rt>どうじ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>注目<rt>ちゅうもく</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めた。", en: "The new product attracted a great deal of attention at the same time as its release." },
    ]
  },
  {
    group: 4,
    word: "選ぶ", wordRuby: "<ruby>選<rt>えら</rt></ruby>ぶ",
    pos: "verb (Group 1)", keyword: "Choose",
    meaning: "to choose; to select; to pick",
    particles: [
      { ruby: "〜を<ruby>選<rt>えら</rt></ruby>ぶ", meaning: "choose ~; select ~" },
      { ruby: "〜から<ruby>選<rt>えら</rt></ruby>ぶ", meaning: "choose from ~" },
      { ruby: "<ruby>選<rt>えら</rt></ruby>びにくい", meaning: "hard to choose; difficult to pick" },
    ],
    examples: [
      { ruby: "この<ruby>中<rt>なか</rt></ruby>から<ruby>選<rt>えら</rt></ruby>んでください。", en: "Please choose from these." },
      { ruby: "どれにするか<ruby>選<rt>えら</rt></ruby>ぶのが<ruby>難<rt>むずか</rt></ruby>しかった。", en: "It was difficult to choose which one to go with." },
      { ruby: "<ruby>言葉<rt>ことば</rt></ruby>を<ruby>慎重<rt>しんちょう</rt></ruby>に<ruby>選<rt>えら</rt></ruby>んで<ruby>話<rt>はな</rt></ruby>すことで、<ruby>相手<rt>あいて</rt></ruby>に<ruby>誤解<rt>ごかい</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えずに<ruby>済<rt>す</rt></ruby>む。", en: "By carefully choosing one's words when speaking, one can avoid giving the other person a misunderstanding." },
    ]
  },
  {
    group: 4,
    word: "比べる", wordRuby: "<ruby>比<rt>くら</rt></ruby>べる",
    pos: "verb (Group 2)", keyword: "Compare",
    meaning: "to compare; to contrast",
    particles: [
      { ruby: "〜と〜を<ruby>比<rt>くら</rt></ruby>べる", meaning: "compare ~ with ~" },
      { ruby: "〜に<ruby>比<rt>くら</rt></ruby>べて", meaning: "compared to ~" },
      { ruby: "<ruby>比<rt>くら</rt></ruby>べてみる", meaning: "try comparing" },
    ],
    examples: [
      { ruby: "A と B を<ruby>比<rt>くら</rt></ruby>べた。", en: "I compared A and B." },
      { ruby: "<ruby>去年<rt>きょねん</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>成績<rt>せいせき</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がった。", en: "My grades have improved compared to last year." },
      { ruby: "いくつかの<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>価格<rt>かかく</rt></ruby>と<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>両面<rt>りょうめん</rt></ruby>から<ruby>比<rt>くら</rt></ruby>べた<ruby>上<rt>うえ</rt></ruby>で、<ruby>最<rt>もっと</rt></ruby>も<ruby>コスパ<rt>コスパ</rt></ruby>のいい<ruby>物<rt>もの</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだ。", en: "After comparing several products from both the price and quality perspectives, I chose the one with the best value." },
    ]
  },
  {
    group: 4,
    word: "調べる", wordRuby: "<ruby>調<rt>しら</rt></ruby>べる",
    pos: "verb (Group 2)", keyword: "Investigate",
    meaning: "to investigate; to look up; to research; to check",
    particles: [
      { ruby: "〜を<ruby>調<rt>しら</rt></ruby>べる", meaning: "look up ~; investigate ~" },
      { ruby: "インターネットで<ruby>調<rt>しら</rt></ruby>べる", meaning: "look it up on the internet" },
      { ruby: "<ruby>辞書<rt>じしょ</rt></ruby>で<ruby>調<rt>しら</rt></ruby>べる", meaning: "look up in a dictionary" },
    ],
    examples: [
      { ruby: "<ruby>言葉<rt>ことば</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べた。", en: "I looked up the meaning of the word." },
      { ruby: "<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べておいた。", en: "I looked up the location before going." },
      { ruby: "<ruby>論文<rt>ろんぶん</rt></ruby>を<ruby>書<rt>か</rt></ruby>くために、<ruby>様々<rt>さまざま</rt></ruby>な<ruby>文献<rt>ぶんけん</rt></ruby>を<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>調<rt>しら</rt></ruby>べる<ruby>必要<rt>ひつよう</rt></ruby>があった。", en: "In order to write the thesis, it was necessary to carefully research various documents." },
    ]
  },
  {
    group: 4,
    word: "間に合う", wordRuby: "<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う",
    pos: "verb (Group 1)", keyword: "Make It In Time",
    meaning: "to be in time for; to make it; to be sufficient",
    particles: [
      { ruby: "〜に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う", meaning: "make it in time for ~" },
      { ruby: "<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない", meaning: "not make it in time; be too late" },
      { ruby: "ギリギリ<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う", meaning: "barely make it in time" },
    ],
    examples: [
      { ruby: "<ruby>授業<rt>じゅぎょう</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った。", en: "I made it to class in time." },
      { ruby: "このままでは<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りに<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。", en: "At this rate I won't make the deadline in time." },
      { ruby: "<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れたが、タクシーに<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えたおかげで<ruby>会議<rt>かいぎ</rt></ruby>にギリギリ<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った。", en: "The train was delayed, but thanks to switching to a taxi I barely made it to the meeting in time." },
    ]
  },
  {
    group: 4,
    word: "受け取る", wordRuby: "<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る",
    pos: "verb (Group 1)", keyword: "Receive",
    meaning: "to receive; to accept; to pick up; to take",
    particles: [
      { ruby: "〜を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る", meaning: "receive ~; accept ~" },
      { ruby: "〜から〜を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る", meaning: "receive ~ from ~" },
      { ruby: "<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>り<ruby>拒否<rt>きょひ</rt></ruby>する", meaning: "refuse to receive" },
    ],
    examples: [
      { ruby: "プレゼントを<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>った。", en: "I received a gift." },
      { ruby: "メールを<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りましたか？", en: "Did you receive the email?" },
      { ruby: "<ruby>宅配便<rt>たくはいびん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>るために、<ruby>一日中<rt>いちにちじゅう</rt></ruby><ruby>家<rt>いえ</rt></ruby>で<ruby>待<rt>ま</rt></ruby>っていなければならなかった。", en: "In order to receive the delivery, I had to wait at home all day long." },
    ]
  },

  // ── GROUP 5: Quantity & Degree ──────────────────────────────
  {
    group: 5,
    word: "十分", wordRuby: "<ruby>十分<rt>じゅうぶん</rt></ruby>",
    pos: "な-adjective / adverb", keyword: "Sufficient",
    meaning: "sufficient; enough; fully; adequately",
    particles: [
      { ruby: "<ruby>十分<rt>じゅうぶん</rt></ruby>に〜する", meaning: "do ~ sufficiently / thoroughly" },
      { ruby: "<ruby>十分<rt>じゅうぶん</rt></ruby>な〜", meaning: "sufficient ~; enough ~" },
      { ruby: "<ruby>十分<rt>じゅうぶん</rt></ruby>ではない", meaning: "not sufficient; insufficient" },
    ],
    examples: [
      { ruby: "<ruby>時間<rt>じかん</rt></ruby>は<ruby>十分<rt>じゅうぶん</rt></ruby>ある。", en: "There is enough time." },
      { ruby: "<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>準備<rt>じゅんび</rt></ruby>してから<ruby>試験<rt>しけん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた。", en: "I took the exam after preparing thoroughly." },
      { ruby: "<ruby>睡眠<rt>すいみん</rt></ruby>を<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>取<rt>と</rt></ruby>ることが、<ruby>健康<rt>けんこう</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つ<ruby>上<rt>うえ</rt></ruby>でとても<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "Getting sufficient sleep is very important for maintaining one's health." },
    ]
  },
  {
    group: 5,
    word: "以上", wordRuby: "<ruby>以上<rt>いじょう</rt></ruby>",
    pos: "noun / expression", keyword: "More Than / Above",
    meaning: "more than; above; over; that is all (ending)",
    particles: [
      { ruby: "〜<ruby>以上<rt>いじょう</rt></ruby>", meaning: "~ or more; ~ and above" },
      { ruby: "〜<ruby>以上<rt>いじょう</rt></ruby>に", meaning: "more than ~; beyond ~" },
      { ruby: "<ruby>以上<rt>いじょう</rt></ruby>です", meaning: "that is all (formal closing)" },
    ],
    examples: [
      { ruby: "18<ruby>歳<rt>さい</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>でないと<ruby>入<rt>はい</rt></ruby>れない。", en: "You cannot enter unless you are 18 or older." },
      { ruby: "<ruby>予想<rt>よそう</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>に<ruby>難<rt>むずか</rt></ruby>しかった。", en: "It was more difficult than expected." },
      { ruby: "<ruby>規定<rt>きてい</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>働<rt>はたら</rt></ruby>いた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>残業手当<rt>ざんぎょうてあて</rt></ruby>が<ruby>支払<rt>しはら</rt></ruby>われます。", en: "If you work beyond the specified hours, overtime allowance will be paid." },
    ]
  },
  {
    group: 5,
    word: "以下", wordRuby: "<ruby>以下<rt>いか</rt></ruby>",
    pos: "noun / expression", keyword: "Less Than / Below",
    meaning: "less than; under; below; the following",
    particles: [
      { ruby: "〜<ruby>以下<rt>いか</rt></ruby>", meaning: "~ or less; ~ and under" },
      { ruby: "〜<ruby>以下<rt>いか</rt></ruby>の", meaning: "the following ~ (listing)" },
      { ruby: "〜に<ruby>以下<rt>いか</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す", meaning: "show the following below" },
    ],
    examples: [
      { ruby: "15<ruby>歳<rt>さい</rt></ruby><ruby>以下<rt>いか</rt></ruby>は<ruby>無料<rt>むりょう</rt></ruby>です。", en: "It's free for those 15 and under." },
      { ruby: "<ruby>気温<rt>きおん</rt></ruby>が0<ruby>度<rt>ど</rt></ruby><ruby>以下<rt>いか</rt></ruby>に<ruby>下<rt>さ</rt></ruby>がった。", en: "The temperature dropped to below 0 degrees." },
      { ruby: "この<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>一定<rt>いってい</rt></ruby><ruby>基準<rt>きじゅん</rt></ruby><ruby>以下<rt>いか</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>のものは<ruby>販売<rt>はんばい</rt></ruby>しないことにしている。", en: "We have decided not to sell this product if its quality falls below a certain standard." },
    ]
  },
  {
    group: 5,
    word: "約", wordRuby: "<ruby>約<rt>やく</rt></ruby>",
    pos: "prefix / noun", keyword: "Approximately",
    meaning: "approximately; about; roughly; a promise",
    particles: [
      { ruby: "<ruby>約<rt>やく</rt></ruby>〜", meaning: "about ~; approximately ~" },
      { ruby: "<ruby>約<rt>やく</rt></ruby>〜<ruby>分<rt>ぷん</rt></ruby>かかる", meaning: "takes about ~ minutes" },
      { ruby: "<ruby>約<rt>やく</rt></ruby>〜<ruby>人<rt>にん</rt></ruby>", meaning: "about ~ people" },
    ],
    examples: [
      { ruby: "<ruby>約<rt>やく</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>かかります。", en: "It takes about 30 minutes." },
      { ruby: "<ruby>約<rt>やく</rt></ruby>100<ruby>人<rt>にん</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>した。", en: "About 100 people participated." },
      { ruby: "このプロジェクトには<ruby>約<rt>やく</rt></ruby>1<ruby>年<rt>ねん</rt></ruby>の<ruby>期間<rt>きかん</rt></ruby>と、<ruby>約<rt>やく</rt></ruby>500<ruby>万円<rt>まんえん</rt></ruby>の<ruby>予算<rt>よさん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>見込<rt>みこ</rt></ruby>まれている。", en: "This project is expected to require approximately one year and a budget of approximately 5 million yen." },
    ]
  },
  {
    group: 5,
    word: "全体", wordRuby: "<ruby>全体<rt>ぜんたい</rt></ruby>",
    pos: "noun", keyword: "The Whole",
    meaning: "the whole; overall; entirely; as a whole",
    particles: [
      { ruby: "〜<ruby>全体<rt>ぜんたい</rt></ruby>で", meaning: "as a whole; altogether across ~" },
      { ruby: "<ruby>全体的<rt>ぜんたいてき</rt></ruby>に", meaning: "overall; on the whole" },
      { ruby: "〜<ruby>全体<rt>ぜんたい</rt></ruby>に<ruby>わたる</rt></ruby>", meaning: "spanning the whole of ~" },
    ],
    examples: [
      { ruby: "<ruby>全体<rt>ぜんたい</rt></ruby>を<ruby>見<rt>み</rt></ruby>てから<ruby>決<rt>き</rt></ruby>めよう。", en: "Let's decide after looking at the whole picture." },
      { ruby: "<ruby>全体的<rt>ぜんたいてき</rt></ruby>にはよかったと<ruby>思<rt>おも</rt></ruby>う。", en: "I think it was good overall." },
      { ruby: "<ruby>部分<rt>ぶぶん</rt></ruby>だけでなく、<ruby>物事<rt>ものごと</rt></ruby>の<ruby>全体<rt>ぜんたい</rt></ruby>を<ruby>俯瞰<rt>ふかん</rt></ruby>する<ruby>視点<rt>してん</rt></ruby>を<ruby>持<rt>も</rt></ruby>つことが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to have a perspective that looks at the whole of things, not just the parts." },
    ]
  },

  // ── GROUP 6: Work & Study ───────────────────────────────────
  {
    group: 6,
    word: "能力", wordRuby: "<ruby>能力<rt>のうりょく</rt></ruby>",
    pos: "noun", keyword: "Ability",
    meaning: "ability; capability; capacity; competence",
    particles: [
      { ruby: "<ruby>能力<rt>のうりょく</rt></ruby>がある", meaning: "have ability; be capable" },
      { ruby: "<ruby>能力<rt>のうりょく</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばす", meaning: "develop one's abilities" },
      { ruby: "<ruby>能力<rt>のうりょく</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて", meaning: "according to one's ability" },
    ],
    examples: [
      { ruby: "<ruby>語学<rt>ごがく</rt></ruby><ruby>能力<rt>のうりょく</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めたい。", en: "I want to improve my language ability." },
      { ruby: "その<ruby>仕事<rt>しごと</rt></ruby>には<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>能力<rt>のうりょく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "That job requires special ability." },
      { ruby: "チームのメンバーそれぞれの<ruby>能力<rt>のうりょく</rt></ruby>を<ruby>最大限<rt>さいだいげん</rt></ruby>に<ruby>活<rt>い</rt></ruby>かすことが、<ruby>良<rt>よ</rt></ruby>いリーダーの<ruby>役割<rt>やくわり</rt></ruby>だ。", en: "Making the most of each team member's abilities is the role of a good leader." },
    ]
  },
  {
    group: 6,
    word: "努力", wordRuby: "<ruby>努力<rt>どりょく</rt></ruby>",
    pos: "noun / する-verb", keyword: "Effort",
    meaning: "effort; hard work; endeavor",
    particles: [
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>する", meaning: "make an effort; work hard" },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>ける", meaning: "continue making efforts" },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>が<ruby>実<rt>み</rt></ruby>る", meaning: "efforts bear fruit; pay off" },
    ],
    examples: [
      { ruby: "もっと<ruby>努力<rt>どりょく</rt></ruby>しなければ。", en: "I need to make more effort." },
      { ruby: "<ruby>努力<rt>どりょく</rt></ruby>すれば<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>叶<rt>かな</rt></ruby>う。", en: "If you make an effort, your dreams will come true." },
      { ruby: "どんなに<ruby>才能<rt>さいのう</rt></ruby>があっても、<ruby>努力<rt>どりょく</rt></ruby>なしには<ruby>成功<rt>せいこう</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>い</rt></ruby>れることはできない。", en: "No matter how much talent one has, success cannot be obtained without effort." },
    ]
  },
  {
    group: 6,
    word: "成功", wordRuby: "<ruby>成功<rt>せいこう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Success",
    meaning: "success; achievement; making it",
    particles: [
      { ruby: "<ruby>成功<rt>せいこう</rt></ruby>する", meaning: "succeed; be successful" },
      { ruby: "〜に<ruby>成功<rt>せいこう</rt></ruby>する", meaning: "succeed in ~" },
      { ruby: "<ruby>成功<rt>せいこう</rt></ruby>のカギ", meaning: "the key to success" },
    ],
    examples: [
      { ruby: "<ruby>実験<rt>じっけん</rt></ruby>に<ruby>成功<rt>せいこう</rt></ruby>した。", en: "The experiment succeeded." },
      { ruby: "<ruby>長年<rt>ながねん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>させることに<ruby>成功<rt>せいこう</rt></ruby>した。", en: "I succeeded in realizing my long-held dream." },
      { ruby: "<ruby>成功<rt>せいこう</rt></ruby>のカギは、<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>恐<rt>おそ</rt></ruby>れず<ruby>挑戦<rt>ちょうせん</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けることだ。", en: "The key to success is to keep challenging oneself without fearing failure." },
    ]
  },
  {
    group: 6,
    word: "失敗", wordRuby: "<ruby>失敗<rt>しっぱい</rt></ruby>",
    pos: "noun / する-verb", keyword: "Failure",
    meaning: "failure; mistake; blunder",
    particles: [
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>する", meaning: "fail; make a mistake" },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>恐<rt>おそ</rt></ruby>れる", meaning: "fear failure" },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>から<ruby>学<rt>まな</rt></ruby>ぶ", meaning: "learn from failure" },
    ],
    examples: [
      { ruby: "<ruby>料理<rt>りょうり</rt></ruby>に<ruby>失敗<rt>しっぱい</rt></ruby>した。", en: "I failed at cooking." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>してもあきらめなかった。", en: "Even after failing, I didn't give up." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>恐<rt>おそ</rt></ruby>れて<ruby>何<rt>なに</rt></ruby>もしないより、<ruby>挑戦<rt>ちょうせん</rt></ruby>して<ruby>失敗<rt>しっぱい</rt></ruby>する<ruby>方<rt>ほう</rt></ruby>が<ruby>成長<rt>せいちょう</rt></ruby>につながる。", en: "Challenging and failing leads to growth more than doing nothing out of fear of failure." },
    ]
  },
  {
    group: 6,
    word: "目標", wordRuby: "<ruby>目標<rt>もくひょう</rt></ruby>",
    pos: "noun", keyword: "Goal / Target",
    meaning: "goal; target; objective; aim",
    particles: [
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる", meaning: "set a goal" },
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって", meaning: "toward one's goal" },
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>する", meaning: "achieve one's goal" },
    ],
    examples: [
      { ruby: "<ruby>目標<rt>もくひょう</rt></ruby>はN3<ruby>合格<rt>ごうかく</rt></ruby>だ。", en: "My goal is to pass N3." },
      { ruby: "<ruby>今年<rt>ことし</rt></ruby>の<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>書<rt>か</rt></ruby>き<ruby>出<rt>だ</rt></ruby>した。", en: "I wrote out my goals for this year." },
      { ruby: "<ruby>高<rt>たか</rt></ruby>い<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち、それに<ruby>向<rt>む</rt></ruby>かって<ruby>日々<rt>ひび</rt></ruby><ruby>努力<rt>どりょく</rt></ruby>することが、<ruby>自分<rt>じぶん</rt></ruby>を<ruby>成長<rt>せいちょう</rt></ruby>させる。", en: "Having a high goal and making daily efforts toward it causes you to grow." },
    ]
  },
  {
    group: 6,
    word: "成長", wordRuby: "<ruby>成長<rt>せいちょう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Growth",
    meaning: "growth; development; growing up",
    particles: [
      { ruby: "<ruby>成長<rt>せいちょう</rt></ruby>する", meaning: "grow; develop" },
      { ruby: "<ruby>成長<rt>せいちょう</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じる", meaning: "sense / feel growth" },
      { ruby: "〜の<ruby>成長<rt>せいちょう</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>える", meaning: "support the growth of ~" },
    ],
    examples: [
      { ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>成長<rt>せいちょう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>い。", en: "Children grow quickly." },
      { ruby: "この<ruby>一年<rt>いちねん</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きく<ruby>成長<rt>せいちょう</rt></ruby>できた。", en: "I was able to grow a great deal over this past year." },
      { ruby: "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しながらも<ruby>前<rt>まえ</rt></ruby>に<ruby>進<rt>すす</rt></ruby>むことが、<ruby>人間<rt>にんげん</rt></ruby>としての<ruby>成長<rt>せいちょう</rt></ruby>につながる。", en: "Continuing to move forward while repeating failures leads to growth as a human being." },
    ]
  },
  {
    group: 6,
    word: "練習", wordRuby: "<ruby>練習<rt>れんしゅう</rt></ruby>",
    pos: "noun / する-verb", keyword: "Practice",
    meaning: "practice; training; drill",
    particles: [
      { ruby: "〜の<ruby>練習<rt>れんしゅう</rt></ruby>をする", meaning: "practice ~" },
      { ruby: "<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>積<rt>つ</rt></ruby>む", meaning: "accumulate practice; build up skill through practice" },
      { ruby: "<ruby>練習<rt>れんしゅう</rt></ruby>になる", meaning: "become practice; be good practice" },
    ],
    examples: [
      { ruby: "毎日<ruby>練習<rt>れんしゅう</rt></ruby>している。", en: "I practice every day." },
      { ruby: "<ruby>試合<rt>しあい</rt></ruby>のために<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねた。", en: "I built up practice for the match." },
      { ruby: "いくら<ruby>才能<rt>さいのう</rt></ruby>があっても、<ruby>継続的<rt>けいぞくてき</rt></ruby>な<ruby>練習<rt>れんしゅう</rt></ruby>なしには<ruby>技術<rt>ぎじゅつ</rt></ruby>は<ruby>身<rt>み</rt></ruby>につかない。", en: "No matter how talented you are, skills cannot be acquired without continuous practice." },
    ]
  },

  // ── GROUP 7: Society & Abstract ─────────────────────────────
  {
    group: 7,
    word: "社会", wordRuby: "<ruby>社会<rt>しゃかい</rt></ruby>",
    pos: "noun", keyword: "Society",
    meaning: "society; community; the world; social",
    particles: [
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>に<ruby>貢献<rt>こうけん</rt></ruby>する", meaning: "contribute to society" },
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>る", meaning: "enter society; go out into the world" },
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>全体<rt>ぜんたい</rt></ruby>", meaning: "society as a whole" },
    ],
    examples: [
      { ruby: "<ruby>社会<rt>しゃかい</rt></ruby>のルールを<ruby>守<rt>まも</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to follow society's rules." },
      { ruby: "いつか<ruby>社会<rt>しゃかい</rt></ruby>に<ruby>役立<rt>やくだ</rt></ruby>つ<ruby>仕事<rt>しごと</rt></ruby>をしたい。", en: "Someday I want to do work that is useful to society." },
      { ruby: "少子高齢化は<ruby>日本社会<rt>にほんしゃかい</rt></ruby>が<ruby>抱<rt>かか</rt></ruby>える<ruby>最<rt>もっと</rt></ruby>も<ruby>深刻<rt>しんこく</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つだ。", en: "Declining birth rate and an ageing population is one of the most serious problems facing Japanese society." },
    ]
  },
  {
    group: 7,
    word: "文化", wordRuby: "<ruby>文化<rt>ぶんか</rt></ruby>",
    pos: "noun", keyword: "Culture",
    meaning: "culture; civilization; cultural practices",
    particles: [
      { ruby: "<ruby>文化<rt>ぶんか</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>する", meaning: "understand a culture" },
      { ruby: "<ruby>異文化<rt>いぶんか</rt></ruby>", meaning: "different cultures; cross-cultural" },
      { ruby: "<ruby>文化<rt>ぶんか</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>う", meaning: "cultures differ" },
    ],
    examples: [
      { ruby: "日本の<ruby>文化<rt>ぶんか</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>がある。", en: "I'm interested in Japanese culture." },
      { ruby: "<ruby>異<rt>こと</rt></ruby>なる<ruby>文化<rt>ぶんか</rt></ruby>を<ruby>尊重<rt>そんちょう</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to respect different cultures." },
      { ruby: "グローバル化が<ruby>進<rt>すす</rt></ruby>む<ruby>中<rt>なか</rt></ruby>で、<ruby>異文化<rt>いぶんか</rt></ruby>コミュニケーション<ruby>能力<rt>のうりょく</rt></ruby>の<ruby>重要性<rt>じゅうようせい</rt></ruby>がますます<ruby>高<rt>たか</rt></ruby>まっている。", en: "As globalization advances, the importance of cross-cultural communication ability is increasingly growing." },
    ]
  },
  {
    group: 7,
    word: "環境", wordRuby: "<ruby>環境<rt>かんきょう</rt></ruby>",
    pos: "noun", keyword: "Environment",
    meaning: "environment; surroundings; circumstances",
    particles: [
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る", meaning: "protect the environment" },
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby>に<ruby>優<rt>やさ</rt></ruby>しい", meaning: "environmentally friendly" },
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる", meaning: "the environment changes" },
    ],
    examples: [
      { ruby: "<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしよう。", en: "Let's take care of the environment." },
      { ruby: "<ruby>勉強<rt>べんきょう</rt></ruby>しやすい<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>った。", en: "I created an environment that's easy to study in." },
      { ruby: "地球<ruby>温暖化<rt>おんだんか</rt></ruby>をはじめとする<ruby>環境<rt>かんきょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>は、<ruby>次<rt>つぎ</rt></ruby>の<ruby>世代<rt>せだい</rt></ruby>に<ruby>負<rt>お</rt></ruby>の<ruby>遺産<rt>いさん</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>さないためにも、<ruby>今<rt>いま</rt></ruby>すぐ<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む<ruby>必要<rt>ひつよう</rt></ruby>がある。", en: "Environmental issues including global warming need to be addressed immediately so as not to leave a negative legacy for the next generation." },
    ]
  },
  {
    group: 7,
    word: "生活", wordRuby: "<ruby>生活<rt>せいかつ</rt></ruby>",
    pos: "noun / する-verb", keyword: "Daily Life",
    meaning: "daily life; living; lifestyle; livelihood",
    particles: [
      { ruby: "<ruby>生活<rt>せいかつ</rt></ruby>する", meaning: "live; make a living" },
      { ruby: "<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る", meaning: "lead a life; live (a certain kind of life)" },
      { ruby: "<ruby>生活<rt>せいかつ</rt></ruby><ruby>習慣<rt>しゅうかん</rt></ruby>", meaning: "lifestyle habits" },
    ],
    examples: [
      { ruby: "日本での<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れた。", en: "I got used to life in Japan." },
      { ruby: "<ruby>規則正<rt>きそくただ</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>心<rt>こころ</rt></ruby>がけている。", en: "I try to lead a well-regulated life." },
      { ruby: "<ruby>食事<rt>しょくじ</rt></ruby>・<ruby>睡眠<rt>すいみん</rt></ruby>・<ruby>運動<rt>うんどう</rt></ruby>の<ruby>バランス<rt>バランス</rt></ruby>が<ruby>取<rt>と</rt></ruby>れた<ruby>生活<rt>せいかつ</rt></ruby><ruby>習慣<rt>しゅうかん</rt></ruby>が、<ruby>健康<rt>けんこう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>だ。", en: "Lifestyle habits with a balance of diet, sleep, and exercise are the basis of good health." },
    ]
  },
  {
    group: 7,
    word: "習慣", wordRuby: "<ruby>習慣<rt>しゅうかん</rt></ruby>",
    pos: "noun", keyword: "Habit / Custom",
    meaning: "habit; custom; practice; routine",
    particles: [
      { ruby: "<ruby>習慣<rt>しゅうかん</rt></ruby>になる", meaning: "become a habit" },
      { ruby: "<ruby>習慣<rt>しゅうかん</rt></ruby>をつける", meaning: "form a habit" },
      { ruby: "<ruby>悪<rt>わる</rt></ruby>い<ruby>習慣<rt>しゅうかん</rt></ruby>", meaning: "a bad habit" },
    ],
    examples: [
      { ruby: "毎日<ruby>運動<rt>うんどう</rt></ruby>する<ruby>習慣<rt>しゅうかん</rt></ruby>をつけた。", en: "I formed the habit of exercising every day." },
      { ruby: "<ruby>朝<rt>あさ</rt></ruby>ニュースを<ruby>見<rt>み</rt></ruby>るのが<ruby>習慣<rt>しゅうかん</rt></ruby>だ。", en: "Watching the news in the morning is my habit." },
      { ruby: "<ruby>良<rt>よ</rt></ruby>い<ruby>習慣<rt>しゅうかん</rt></ruby>は<ruby>一朝一夕<rt>いっちょういっせき</rt></ruby>には<ruby>身<rt>み</rt></ruby>につかないが、<ruby>毎日<rt>まいにち</rt></ruby>少しずつ<ruby>続<rt>つづ</rt></ruby>けることで<ruby>自然<rt>しぜん</rt></ruby>と<ruby>定着<rt>ていちゃく</rt></ruby>していく。", en: "Good habits cannot be acquired overnight, but by continuing a little each day they gradually become established naturally." },
    ]
  },
  {
    group: 7,
    word: "方法", wordRuby: "<ruby>方法<rt>ほうほう</rt></ruby>",
    pos: "noun", keyword: "Method / Way",
    meaning: "method; way; means; approach",
    particles: [
      { ruby: "〜する<ruby>方法<rt>ほうほう</rt></ruby>", meaning: "a way of doing ~; how to ~" },
      { ruby: "<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>える", meaning: "think of a method" },
      { ruby: "いい<ruby>方法<rt>ほうほう</rt></ruby>がある", meaning: "there is a good way" },
    ],
    examples: [
      { ruby: "いい<ruby>方法<rt>ほうほう</rt></ruby>がある。", en: "I have a good method." },
      { ruby: "もっと<ruby>効率<rt>こうりつ</rt></ruby>的な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>している。", en: "I'm looking for a more efficient method." },
      { ruby: "<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>するための<ruby>方法<rt>ほうほう</rt></ruby>は<ruby>一<rt>ひと</rt></ruby>つではなく、<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>最適<rt>さいてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶことが<ruby>重要<rt>じゅうよう</rt></ruby>だ。", en: "There is not just one method for solving a problem; it is important to select the most suitable method according to the situation." },
    ]
  },
  {
    group: 7,
    word: "情報", wordRuby: "<ruby>情報<rt>じょうほう</rt></ruby>",
    pos: "noun", keyword: "Information",
    meaning: "information; data; news; intelligence",
    particles: [
      { ruby: "<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>める", meaning: "gather information" },
      { ruby: "<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>する", meaning: "share information" },
      { ruby: "<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>正確<rt>せいかく</rt></ruby>だ", meaning: "information is accurate" },
    ],
    examples: [
      { ruby: "<ruby>正確<rt>せいかく</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。", en: "Accurate information is necessary." },
      { ruby: "インターネットで<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めた。", en: "I gathered information on the internet." },
      { ruby: "SNSには<ruby>偽<rt>にせ</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>も<ruby>多<rt>おお</rt></ruby>いので、<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>をしっかり<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "Since there is also a lot of false information on SNS, it is important to thoroughly verify the reliability of information." },
    ]
  },
  {
    group: 7,
    word: "技術", wordRuby: "<ruby>技術<rt>ぎじゅつ</rt></ruby>",
    pos: "noun", keyword: "Technology / Skill",
    meaning: "technology; technique; technical skill; craft",
    particles: [
      { ruby: "<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>く", meaning: "hone one's skills / technique" },
      { ruby: "<ruby>最新<rt>さいしん</rt></ruby><ruby>技術<rt>ぎじゅつ</rt></ruby>", meaning: "the latest technology" },
      { ruby: "<ruby>技術<rt>ぎじゅつ</rt></ruby>が<ruby>進歩<rt>しんぽ</rt></ruby>する", meaning: "technology advances" },
    ],
    examples: [
      { ruby: "日本の<ruby>技術<rt>ぎじゅつ</rt></ruby>は<ruby>世界<rt>せかい</rt></ruby><ruby>一流<rt>いちりゅう</rt></ruby>だ。", en: "Japan's technology is world-class." },
      { ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>学<rt>まな</rt></ruby>び<ruby>続<rt>つづ</rt></ruby>けることが<ruby>大切<rt>たいせつ</rt></ruby>だ。", en: "It is important to keep learning new technologies." },
      { ruby: "AIを<ruby>始<rt>はじ</rt></ruby>めとする<ruby>最新<rt>さいしん</rt></ruby><ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>急速<rt>きゅうそく</rt></ruby>な<ruby>発展<rt>はってん</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>えつつある。", en: "The rapid development of the latest technologies including AI is greatly changing the way we work." },
    ]
  },
];

const GRADE_CONFIG = [
  { label: "SIMPLE",     color: "#00e5ff", bg: "rgba(0,229,255,0.07)",   border: "rgba(0,229,255,0.3)"  },
  { label: "NATURAL",    color: "#69ff47", bg: "rgba(105,255,71,0.07)",  border: "rgba(105,255,71,0.3)" },
  { label: "EXAM-LEVEL", color: "#ff6d00", bg: "rgba(255,109,0,0.07)",   border: "rgba(255,109,0,0.3)"  },
];

const GROUP_COLORS = ["#ff6b6b","#ffa94d","#69db7c","#4dabf7","#da77f2","#ff8787","#63e6be","#ffd43b"];

export default function N3VocabApp() {
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
            <div style={{fontSize:10, letterSpacing:"0.3em", color:"#6366f1", fontFamily:"system-ui", fontWeight:700, textTransform:"uppercase"}}>✦ JLPT N3 · 語彙 1 ✦</div>
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
