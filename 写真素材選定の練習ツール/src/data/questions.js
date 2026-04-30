// questions.js — Photo Eye トレーニング問題データ
// 各レベルに5問以上、計25問以上

export const questions = [
  // ─────────────────────────────────────────────
  // Lv.1 — 露出・ピント（技術的品質）2択
  // ─────────────────────────────────────────────
  {
    id: "q001",
    level: 1,
    axis: "exposure",
    axisLabel: "露出・技術品質",
    scenario: "企業のコーポレートサイトのトップ画像として使いたい。最も品質が高い写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "professional office bright modern",
      "dark office underexposed blurry",
    ],
    explanation: {
      summary: "露出が適切で白飛び・黒つぶれのない写真が正解です。",
      correct: "明るく均一な露出で、ディテールが潰れていません。コーポレート用途に最適です。",
      wrong: ["アンダー露出で暗い印象。Webのファーストビューには暗すぎます。"],
      tip: "💡 プロTip: 白飛び（ハイライト飛び）と黒つぶれ（シャドウ潰れ）がないかを最初に確認しましょう。",
    },
  },
  {
    id: "q002",
    level: 1,
    axis: "focus",
    axisLabel: "露出・技術品質",
    scenario: "料理レシピサイトのサムネイルに使う写真を選ぶ。ピントが合っていて食欲をそそる写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "food photography sharp focus delicious",
      "food blurry unfocused bad photo",
    ],
    explanation: {
      summary: "ピントが合ってシャープな写真が正解です。",
      correct: "主役の料理にピントがしっかり合い、ディテールまで鮮明に写っています。",
      wrong: ["ピントがズレていてぼやけており、素材としての品質が不十分です。"],
      tip: "💡 プロTip: 料理写真は食材のテクスチャーが伝わるシャープネスが命です。",
    },
  },
  {
    id: "q003",
    level: 1,
    axis: "exposure",
    axisLabel: "露出・技術品質",
    scenario: "旅行サイトのバナーに使う空の写真。適切な露出で空の色が美しく表現されているのはどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "blue sky clouds travel scenery",
      "bright white blown out sky overexposed",
    ],
    explanation: {
      summary: "オーバー露出で白飛びしていない写真が正解です。",
      correct: "空のグラデーションが豊かに表現され、雲のディテールも残っています。",
      wrong: ["オーバー露出で空が白く飛んでしまい、情報が失われています。"],
      tip: "💡 プロTip: 空を含むシーンは明るい部分に合わせすぎると白飛びします。ヒストグラムを確認する習慣をつけましょう。",
    },
  },
  {
    id: "q004",
    level: 1,
    axis: "focus",
    axisLabel: "露出・技術品質",
    scenario: "ビジネス向け資料で使う「握手」のビジネスシーン。契約・信頼感を伝えるために使える写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "handshake business professional clear sharp",
      "handshake motion blur dark",
    ],
    explanation: {
      summary: "ブレがなくシャープに撮影された写真が正解です。",
      correct: "手の動きが止まって鮮明に写っており、プロフェッショナルな印象を与えます。",
      wrong: ["手ブレがあり、重要なシーンが不鮮明です。信頼感の演出に向きません。"],
      tip: "💡 プロTip: ビジネスシーンはブレのないシャープな写真を選びましょう。動きのある写真は意図的でない限り避けて。",
    },
  },
  {
    id: "q005",
    level: 1,
    axis: "exposure",
    axisLabel: "露出・技術品質",
    scenario: "スポーツブランドのプロモーション素材。明るくエネルギッシュな印象を与える写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "athlete running bright energetic outdoor",
      "athlete dark gloomy underlit indoor",
    ],
    explanation: {
      summary: "明るく露出が適切な屋外写真が正解です。",
      correct: "自然光を活かした明るい露出で、ダイナミックなエネルギーが伝わります。",
      wrong: ["暗く沈んだ露出では、スポーツブランドの活力を表現できません。"],
      tip: "💡 プロTip: ブランドトーンに合わせて明るさのイメージを事前に決めておくと選定が速くなります。",
    },
  },

  // ─────────────────────────────────────────────
  // Lv.2 — 構図・トリミング余地 2択
  // ─────────────────────────────────────────────
  {
    id: "q006",
    level: 2,
    axis: "composition",
    axisLabel: "構図・トリミング余地",
    scenario: "Webバナーにコピーテキストを重ねたい。テキストを置けるスペースがある写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "minimalist landscape empty space copy room",
      "busy cluttered landscape no negative space",
    ],
    explanation: {
      summary: "余白（ネガティブスペース）がある写真が正解です。",
      correct: "画面の一部に空きスペースがあり、テキストを自然に重ねられます。",
      wrong: ["画面全体に情報が詰まっていて、テキストを置く余地がありません。"],
      tip: "💡 プロTip: バナー用素材を選ぶときは、文字を置く「余白の位置」を先にラフで決めてから素材を探しましょう。",
    },
  },
  {
    id: "q007",
    level: 2,
    axis: "composition",
    axisLabel: "構図・トリミング余地",
    scenario: "雑誌の見開き特集ページに使う都市の風景写真。水平線が安定して見える写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "city skyline straight horizon level",
      "city tilted horizon crooked angle",
    ],
    explanation: {
      summary: "水平線が水平に保たれた写真が正解です。",
      correct: "水平線がまっすぐで、安定感と信頼性を感じさせます。",
      wrong: ["水平線が傾いており、不安定な印象を与えます。補正しても元の品質には戻りません。"],
      tip: "💡 プロTip: 意図的な傾きでない限り、水平・垂直線は必ず確認しましょう。",
    },
  },
  {
    id: "q008",
    level: 2,
    axis: "framing",
    axisLabel: "構図・トリミング余地",
    scenario: "ポートレートを正方形のSNSアイコン用にトリミングしたい。最も使いやすい写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "portrait face centered neutral background space",
      "portrait extreme close up cropped head",
    ],
    explanation: {
      summary: "顔の周りに余白がある写真が正解です。",
      correct: "顔を中心にしつつ周囲に余白があり、正方形へのトリミングが自在です。",
      wrong: ["顔が切れるほどアップで、正方形にすると重要な部分が欠けてしまいます。"],
      tip: "💡 プロTip: SNS用ポートレートは「トリミング後」をイメージして選びましょう。",
    },
  },
  {
    id: "q009",
    level: 2,
    axis: "composition",
    axisLabel: "構図・トリミング余地",
    scenario: "Webサイトのヒーローイメージに使いたい横長バナー写真。16:9にトリミングできる写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "wide landscape panoramic horizontal nature",
      "portrait vertical narrow composition tall",
    ],
    explanation: {
      summary: "横長の構図で16:9に適した写真が正解です。",
      correct: "横長の広いショットで、16:9のヒーローイメージに自然にフィットします。",
      wrong: ["縦長構図のため、横長にトリミングすると重要な被写体が切れてしまいます。"],
      tip: "💡 プロTip: 使用箇所のアスペクト比を先に決め、それに合った構図の写真を選びましょう。",
    },
  },
  {
    id: "q010",
    level: 2,
    axis: "composition",
    axisLabel: "構図・トリミング余地",
    scenario: "料理ブランドのロゴを左上に重ねるデザインをする。ロゴを置けるスペースがある写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "restaurant table clean minimal left corner space",
      "food close up full frame detailed busy",
    ],
    explanation: {
      summary: "左上に余白のある写真が正解です。",
      correct: "画面左上がすっきりしており、ロゴを自然にレイアウトできます。",
      wrong: ["フレーム全体に料理が広がっていて、ロゴを置く場所がありません。"],
      tip: "💡 プロTip: デザインに合成する素材は「何をどこに配置するか」を先に決めてから選びましょう。",
    },
  },

  // ─────────────────────────────────────────────
  // Lv.3 — 素材感（リアル vs. ストック臭） 3択
  // ─────────────────────────────────────────────
  {
    id: "q011",
    level: 3,
    axis: "authenticity",
    axisLabel: "素材感・自然さ",
    scenario: "スタートアップのチームページ用写真。自然でリアルな雰囲気の写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "startup team candid natural working together",
      "business people fake smile posed stock",
      "corporate meeting staged formal stiff",
    ],
    explanation: {
      summary: "自然な表情とシーンを持つ写真が正解です。",
      correct: "作業中の自然な表情とインタラクションが、リアルな職場環境を伝えます。",
      wrong: [
        "過剰に演出されたポーズや作り笑いは「ストック感」が出てしまいます。",
        "フォーマルすぎて硬く、スタートアップの文化を表現できていません。",
      ],
      tip: "💡 プロTip: 人物が登場する写真では、目線やポーズが「作られていないか」を確認しましょう。",
    },
  },
  {
    id: "q012",
    level: 3,
    axis: "authenticity",
    axisLabel: "素材感・自然さ",
    scenario: "健康食品ブランドのLP用写真。商品の自然さ・誠実さを伝えられる写真はどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "processed food artificial colorful commercial",
      "organic natural vegetables fresh market authentic",
      "food studio white background isolated product",
    ],
    explanation: {
      summary: "自然光で撮られた素朴な写真が正解です。",
      correct: "市場や家庭のような自然な環境で撮られており、有機・誠実さを感じさせます。",
      wrong: [
        "過剰に加工された色彩で、「自然」のイメージと乖離しています。",
        "白背景の商品写真は商品ページ向け。LPのトップビジュアルには温かみが足りません。",
      ],
      tip: "💡 プロTip: ブランドの「らしさ」と写真のトーンが一致しているかを常に確認しましょう。",
    },
  },
  {
    id: "q013",
    level: 3,
    axis: "authenticity",
    axisLabel: "素材感・自然さ",
    scenario: "地域の中小企業のWebサイト用写真。親しみやすさと信頼感を伝えるのはどれ？",
    correctIndex: 2,
    unsplashQueries: [
      "generic corporate building glass modern",
      "empty office chairs nobody formal",
      "small business owner smiling shop local",
    ],
    explanation: {
      summary: "親しみやすい人物が写った写真が正解です。",
      correct: "地域のお店の雰囲気と笑顔のオーナー像が、中小企業の温かみを伝えます。",
      wrong: [
        "大企業向けのガラス張りビルは中小企業のイメージと合いません。",
        "人がいない空のオフィスは冷たく親しみを感じにくいです。",
      ],
      tip: "💡 プロTip: ターゲット企業の「規模感・雰囲気」に合った素材を選ぶことが重要です。",
    },
  },
  {
    id: "q014",
    level: 3,
    axis: "authenticity",
    axisLabel: "素材感・自然さ",
    scenario: "メンタルヘルスケアサービスのトップイメージ。安心・落ち着きを伝えられる写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "calm peaceful nature soft light serene",
      "bright neon city busy crowded loud",
      "hospital clinical white sterile medical",
    ],
    explanation: {
      summary: "柔らかい自然光と穏やかな雰囲気の写真が正解です。",
      correct: "やわらかいトーンと静かな自然が、安心感と心の余白を演出します。",
      wrong: [
        "ネオン街の喧騒は、メンタルヘルスのイメージと真逆の緊張感を与えます。",
        "無機質な病院の写真は、ケアサービスではなく医療機関の印象になります。",
      ],
      tip: "💡 プロTip: 感情に訴えるサービスは写真の「色温度」と「被写体の表情」が最重要です。",
    },
  },
  {
    id: "q015",
    level: 3,
    axis: "authenticity",
    axisLabel: "素材感・自然さ",
    scenario: "ファッションブランドのルックブック用写真。ブランドの世界観をリアルに伝えるのはどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "fashion catalog white background model catalog",
      "fashion editorial outdoor lifestyle natural model",
      "fashion runway catwalk formal show",
    ],
    explanation: {
      summary: "ライフスタイルを感じさせる屋外のエディトリアル写真が正解です。",
      correct: "日常のシーンに溶け込んだモデルの姿が、ブランドの世界観を生き生きと伝えます。",
      wrong: [
        "カタログ撮影のような白背景は、ルックブックより商品ページ向きです。",
        "ランウェイ写真はハイファッション向けで、普段使いブランドには硬すぎます。",
      ],
      tip: "💡 プロTip: ルックブックはブランドの「生活シーン」を見せるもの。製品より世界観を優先しましょう。",
    },
  },

  // ─────────────────────────────────────────────
  // Lv.4 — 文脈への合致（業種・シーン） 3択
  // ─────────────────────────────────────────────
  {
    id: "q016",
    level: 4,
    axis: "context",
    axisLabel: "文脈への合致",
    scenario: "法律事務所のウェブサイトのトップ画像。信頼・専門性・誠実さを表現する写真はどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "law library books professional serious elegant",
      "fun party casual colorful people",
      "abstract art colorful paint splash",
    ],
    explanation: {
      summary: "法律事務所らしい重厚感と信頼感のある写真が正解です。",
      correct: "法律書や落ち着いた空間が、専門性と誠実さを表現しています。",
      wrong: [
        "カジュアルなパーティーシーンは法律事務所の専門性を損ないます。",
        "抽象的なアート写真は法律という具体的なサービスを伝えられません。",
      ],
      tip: "💡 プロTip: BtoB向けの保守的な業種（法律・金融・医療）は「重厚感」「安定感」を最優先しましょう。",
    },
  },
  {
    id: "q017",
    level: 4,
    axis: "context",
    axisLabel: "文脈への合致",
    scenario: "子供向け学習アプリのトップページ。ターゲットである子供と保護者に響く写真はどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "corporate business meeting adults formal",
      "children learning happy colorful classroom playing",
      "university students serious studying library",
    ],
    explanation: {
      summary: "子供が楽しく学んでいる写真が正解です。",
      correct: "笑顔の子供たちと明るい学習環境が、ターゲットユーザーの共感を引き出します。",
      wrong: [
        "ビジネスミーティングは子供向けアプリのイメージから完全に外れています。",
        "大学生の学習シーンは対象年齢が合いません。子供には別の訴求が必要です。",
      ],
      tip: "💡 プロTip: ターゲットユーザーが「自分のことだ」と感じられる写真を選びましょう。",
    },
  },
  {
    id: "q018",
    level: 4,
    axis: "context",
    axisLabel: "文脈への合致",
    scenario: "高級レストランのウェブサイト用写真。ラグジュアリーな体験を伝えるのはどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "fine dining elegant table setting luxury restaurant",
      "fast food burger casual cheap restaurant",
      "home cooking casual kitchen everyday meal",
    ],
    explanation: {
      summary: "高級感のあるダイニング写真が正解です。",
      correct: "丁寧に盛り付けられた料理と上品なテーブルセッティングが、ラグジュアリーな体験を表現します。",
      wrong: [
        "ファストフードの写真は価格帯・雰囲気とまったく合いません。",
        "家庭料理の日常感は高級レストランの「非日常体験」という価値と矛盾します。",
      ],
      tip: "💡 プロTip: 価格帯と写真のクオリティを一致させることが大切。安い素材感は信頼を下げます。",
    },
  },
  {
    id: "q019",
    level: 4,
    axis: "context",
    axisLabel: "文脈への合致",
    scenario: "フィンテックサービスのランディングページ。スマートで革新的なイメージを伝える写真はどれ？",
    correctIndex: 2,
    unsplashQueries: [
      "piggy bank coins old fashioned saving",
      "bank branch counter teller traditional",
      "smartphone app fintech digital payment modern",
    ],
    explanation: {
      summary: "スマートフォンを使ったデジタル決済の写真が正解です。",
      correct: "スマホアプリとデジタルUXを前面に出した写真が、フィンテックの革新性を表現します。",
      wrong: [
        "貯金箱は伝統的な貯蓄のイメージで、フィンテックの先進性と逆方向です。",
        "従来型の銀行窓口は、フィンテックが打破しようとしているものを象徴しています。",
      ],
      tip: "💡 プロTip: テクノロジー系サービスは「デジタルらしさ」「スマートさ」を視覚で表現しましょう。",
    },
  },
  {
    id: "q020",
    level: 4,
    axis: "context",
    axisLabel: "文脈への合致",
    scenario: "女性向けフィットネスアプリのバナー。ターゲットに共感・憧れを生む写真はどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "bodybuilder extreme muscle male gym intense",
      "woman yoga fitness active lifestyle empowered",
      "sedentary person couch relaxing inactive",
    ],
    explanation: {
      summary: "女性が自分らしく楽しんでいるフィットネス写真が正解です。",
      correct: "生き生きと活動する女性の姿が「なりたい自分」への共感と憧れを呼びます。",
      wrong: [
        "男性ボディビルダーは女性ターゲットの共感を得にくく、ブランドと合いません。",
        "動かない人のイメージはフィットネスアプリの訴求と真逆です。",
      ],
      tip: "💡 プロTip: ターゲットユーザーの「ありたい姿」を写真で見せることがコンバージョンにつながります。",
    },
  },

  // ─────────────────────────────────────────────
  // Lv.5 — ターゲット共感度・総合判断 4択
  // ─────────────────────────────────────────────
  {
    id: "q021",
    level: 5,
    axis: "empathy",
    axisLabel: "共感度・総合判断",
    scenario: "30代共働き夫婦向けマンション販売サイトのメインビジュアル。購入意欲を高める写真はどれ？",
    correctIndex: 2,
    unsplashQueries: [
      "empty apartment room minimal no people",
      "luxury penthouse extreme wealthy expensive",
      "happy couple home living room comfortable cozy",
      "construction site building workers hard hat",
    ],
    explanation: {
      summary: "ターゲット層が「自分の未来」として想像できる写真が正解です。",
      correct: "30代カップルが自宅でくつろぐ温かいシーンは、ターゲット層が自分を重ねやすく購買意欲を高めます。",
      wrong: [
        "人がいない空間は感情移入がしにくく、購買意欲につながりません。",
        "過度なラグジュアリーは30代共働き夫婦のリアルな価格帯感覚と合わない場合があります。",
        "建設現場は完成前の不安を連想させます。",
      ],
      tip: "💡 プロTip: 不動産広告は「住む自分」を想像させる写真が最も効果的。人物が写っている方が共感を呼びます。",
    },
  },
  {
    id: "q022",
    level: 5,
    axis: "empathy",
    axisLabel: "共感度・総合判断",
    scenario: "シニア向けスマホ教室のLPメインビジュアル。受講意欲を高める写真はどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "young millennial smartphone fast tech expert",
      "senior elderly happy smartphone learning smile",
      "complicated technology server room circuit board",
      "frustrated confused person looking at phone",
    ],
    explanation: {
      summary: "シニアが楽しくスマホを使う姿が正解です。",
      correct: "シニアが笑顔でスマホを操作している写真が、「自分にも使えそう」という安心感を与えます。",
      wrong: [
        "若者向けのデジタルネイティブなイメージはシニアに親しみを感じさせません。",
        "複雑な技術のイメージは逆に不安を煽ります。",
        "困惑している表情の写真は、ネガティブな感情を呼び起こします。",
      ],
      tip: "💡 プロTip: シニア向けコンテンツは「同年代が主役」の写真を使うことで親近感と安心感が生まれます。",
    },
  },
  {
    id: "q023",
    level: 5,
    axis: "empathy",
    axisLabel: "共感度・総合判断",
    scenario: "グローバル採用強化中のIT企業の採用ページ。多様性と活気を伝える写真として最適なのはどれ？",
    correctIndex: 0,
    unsplashQueries: [
      "diverse team work together collaboration different backgrounds",
      "homogeneous group same age same background formal",
      "empty office desk no people",
      "CEO executive serious portrait alone",
    ],
    explanation: {
      summary: "多様なバックグラウンドのチームが協力している写真が正解です。",
      correct: "異なる人種・年齢・ジェンダーが協力して働く姿は、ダイバーシティへのコミットを視覚的に示します。",
      wrong: [
        "同質なグループは「多様性」のメッセージと矛盾します。",
        "人がいない空のオフィスは活気を伝えられません。",
        "経営者一人のポートレートは組織文化より権威を印象付けます。",
      ],
      tip: "💡 プロTip: 採用サイトはどんな人が活躍しているかを「実際のチームの姿」で見せることが最も説得力があります。",
    },
  },
  {
    id: "q024",
    level: 5,
    axis: "empathy",
    axisLabel: "共感度・総合判断",
    scenario: "環境に配慮した持続可能なファッションブランドのキャンペーン。ブランド価値を最も体現する写真はどれ？",
    correctIndex: 3,
    unsplashQueries: [
      "fast fashion factory mass production conveyor",
      "shopping mall crowded consumer culture bags",
      "luxury brand logo gold glamour wealth",
      "sustainable fashion nature eco friendly organic cotton",
    ],
    explanation: {
      summary: "自然環境と調和したサステナブルなイメージが正解です。",
      correct: "自然素材と環境への配慮を感じさせるビジュアルが、ブランドのサステナビリティ価値を直接的に表現します。",
      wrong: [
        "ファストファッションの大量生産工場はブランドが否定しているものです。",
        "消費文化を象徴するショッピングモールの写真はSDGsと真逆のメッセージです。",
        "過剰なラグジュアリー感はサステナブルよりもステータスを優先するイメージになります。",
      ],
      tip: "💡 プロTip: サステナブルブランドは写真の「色調」も重要。明度の高い純粋なナチュラルカラーが信頼感を生みます。",
    },
  },
  {
    id: "q025",
    level: 5,
    axis: "empathy",
    axisLabel: "共感度・総合判断",
    scenario: "中学生向けオンライン学習サービス。「勉強が楽しい」という価値を伝える写真として最も効果的なのはどれ？",
    correctIndex: 1,
    unsplashQueries: [
      "textbook boring studying desk lamp serious",
      "teenager learning online engaged laptop smile home",
      "exam test paper stress pressure student",
      "school classroom teacher blackboard traditional",
    ],
    explanation: {
      summary: "自宅でオンライン学習を楽しんでいる中学生の写真が正解です。",
      correct: "ターゲット世代が自然な環境でワクワクしながら学ぶ姿が、サービスへの共感を生みます。",
      wrong: [
        "机に向かう退屈そうなシーンは「楽しい学習」のメッセージと合いません。",
        "試験のプレッシャーシーンは不安を煽り、サービスの印象を損ないます。",
        "従来型の教室写真は「オンライン」という差別化要素を消してしまいます。",
      ],
      tip: "💡 プロTip: EdTechサービスは「従来の学習との違い」を写真で示すことが重要。オンラインならではの自由さを見せましょう。",
    },
  },
  {
    id: "q026",
    level: 5,
    axis: "total",
    axisLabel: "共感度・総合判断",
    scenario: "クラフトビールブランドのInstagram投稿用写真。ブランドの「こだわり・職人気質」を表現するのはどれ？",
    correctIndex: 2,
    unsplashQueries: [
      "beer can commercial mass production industrial factory",
      "cocktail bar trendy nightlife neon crowded",
      "craft beer brewery artisan brewer copper kettle",
      "wine glass fine dining formal restaurant",
    ],
    explanation: {
      summary: "クラフトビールの醸造現場を写した写真が正解です。",
      correct: "醸造家と銅製の釜を写したビハインドシーンが、手作り・こだわりを強く訴求します。",
      wrong: [
        "大量生産工場のイメージはクラフトビールの「少量・こだわり」と真逆です。",
        "トレンディなナイトバーはビールより場所の雰囲気が主役になります。",
        "ワインのイメージはビールブランドのアイデンティティと競合します。",
      ],
      tip: "💡 プロTip: クラフト系ブランドは「作り手の顔・手・道具」を見せることで職人気質のブランド価値が伝わります。",
    },
  },
];

// レベル別に問題を取得するユーティリティ
export const getQuestionsByLevel = (level) =>
  questions.filter((q) => q.level === level);

// ランダムシャッフル（Fisher-Yates）
export const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
