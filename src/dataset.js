const defaultDataset = {
  init: {
    answers: [
      { content: "どんな人なのか知りたい", nextId: "personal" },
      { content: "今後どんなエンジニアになりたいか知りたい", nextId: "vision" },
      { content: "学習内容について知りたい", nextId: "study" },
      { content: "SNSやGitHubを見てみたい", nextId: "sns" },
    ],
    question: "はじめまして。質問をして私のことをもっと知ってください！",
  },

  // どんな人なのか知りたい
  personal: {
    answers: [
      { content: "好きな食べ物、嫌いな食べ物を教えて！", nextId: "food" },
      { content: "出身地はどこ？", nextId: "place" },
      { content: "短所と長所を教えて！", nextId: "feature" },
      { content: "趣味は？", nextId: "hobby" },
    ],
    question: "何について知りたいか選んでください！",
  },
  food: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "personal" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "好きな食べ物は納豆です。年間400パックは食べています！\n嫌いな食べ物は特にありません。親の教育に感謝しています！",
  },
  place: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "personal" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "広島県東広島市です。お酒が有名で、年に一度酒まつりが開催されています！",
  },
  feature: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "personal" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "【長所】興味のあることや好きなことについて追求し、時間を忘れて取り組み、上達することが出来ることです！今までサッカーなどいろいろなことに夢中になり上達してきました。現在はプログラミングに夢中です。\n【短所】長所の裏返しになりますが、夢中になり時間を忘れてしまうことがあります・・・。最近はその対策として、事前にやることの計画を立て、リスト化して取り組むようにしています。",
  },
  hobby: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "personal" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "趣味は野球観戦、映画観賞、プログラミングです。",
  },

  // 今後どんなエンジニアになりたいか知りたい
  vision: {
    answers: [
      { content: "長期的には？", nextId: "longterm" },
      { content: "中期的には？", nextId: "middleterm" },
      { content: "短期的には？", nextId: "shortterm" },
      { content: "そもそもなんでエンジニアになりたい？", nextId: "why" },
    ],
    question: "何について知りたいか選んでください！",
  },
  longterm: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "vision" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "カスタマーの問題をヒアリングし、解決や改善を一緒に行えるエンジニアになりたいです！\n顧客折衝など上流工程から関わりたいと考えています。",
  },
  middleterm: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "vision" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "フルスタックエンジニアになりたいです！\n上流工程から関った上で顧客の問題を解決するためには、フロントエンド、サーバーサイド、インフラなどの幅広い知見と経験が必要だと考えるからです。",
  },
  shortterm: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "vision" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "コードをたくさん書き、社内で戦力になりたいです！\n\nまずはひとつの分野（フロントエンド）のスペシャリストになることを目指して、日々学習に取り組んでいます。",
  },
  why: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "vision" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "プログラミングに関心を持ったきっかけは、父親が飲食店を始めると知り自分に何かできることはないかと思ったのがきっかけでした。そして実際にプログラミングを学習し始めて、まずはITパスポートの資格の勉強を始めたのがスタートでした。自分の知らなかった知識や、実際に何かを創ってみるというのが楽しく感じていました。簡単なホームページでしたが、実際に創ってみて喜んで頂けたことが、エンジニアを目指すきっかけです。",
  },

  // これまでの学習内容、現在の学習内容を知りたい
  study: {
    answers: [
      { content: "独学で何を学習したの？", nextId: "school" },
      { content: "今はどんなことを勉強してる？", nextId: "now" },
      { content: "今後チャレンジしてみたいことは？", nextId: "future" },
    ],
    question: "何について知りたいか選んでください！",
  },
  school: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "study" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "HTML,CSS,JavaScript,React,TypeScript,Gitなど学習していました。",
  },
  now: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "study" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "以前から興味のあったReact,Next.jsについて学習をしています。このチャットボットもReactを用いて作成しました！また、基本情報技術者と応用情報技術者も取得に向け学習中です。",
  },
  future: {
    answers: [
      { content: "ひとつ前の質問に戻る", nextId: "study" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "React関係の技術（Redux,Hooks,Next.js）や、TypeScript、Firebase、AWSなどに興味があります。まずはネットワークの基礎について学習したいです。",
  },

  sns: {
    answers: [
      { content: "GitHubはこちら", nextId: "https://github.com/ryuya416" },
      { content: "Twitterはこちら", nextId: "https://twitter.com" },
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "下から選んでください！（別タブで開きます）",
  },
};

export default defaultDataset;
