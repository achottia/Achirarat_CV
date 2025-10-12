// ---------- Navbar titles
const jpNavbarData = {
  title: "アチララット・チョッティアンチャイワット",
  Home: "ホーム",
  publications: "出版物",
  Education: "学歴",
  Research: "研究",
  Project: "プロジェクト",
  Jobs: "職務経歴",
  Hobby: "趣味",
  Contact: "コンタクト",
};

// ---------- Home page data
const jpHomePageData = {
  name: "アチララット\nチョッティアンチャイワット",
  jobTitle: "組込みソフトウェアエンジニア",
  home_title: "私について",
  home_content: `
  <div>
    <p> 情報通信工学の修士号と、工業電気工学（次席卒業）の学士号を持つ電気・ソフトウェアエンジニアで、自動車および鉄道信号システムにおける実務経験があります。<br>
    現在は、<b>「 情報理論 」</b>や<b>「 MIMO通信 」</b>などの通信システム、
    および<b>「 分子通信 」</b>や<b>「 バイオインフォメーション 」</b>を専門とする医療アプリケーションへの移行を進め、
    革新的なヘルスケアソリューションの開発を目指しています。技術的な専門知識には、組込みシステム、信号処理、凸最適化、
    およびMATLAB、C、Pythonでのプログラミングが含まれ、多様な産業において理論的な概念を実践的なエンジニアリングアプリケーション
    に変換する確かな能力を持っています。
    </p>
    
  <h2 class='title'>学歴</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>ダルムシュタット工科大学</b>, ダルムシュタット、ヘッセン州、ドイツ<br> 
          <i>情報通信工学修士</i>
        </div>
        <div style="text-align: right;">
          <i>2021年10月 - 2025年3月</i>
        </div>
      </div>
    </li>
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>タマサート大学</b>, パトゥムタニ、タイ<br>
          <i>工業電気工学学士</i>
        </div>
        <div style="text-align: right;">
          <i>2013年5月 - 2017年5月</i>
        </div>
      </div>
    </li>
  </ul>

  <h2 class='title'>人間言語 (ほぼ流暢、時々混乱)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>タイ語 (母国語)</li>
    <li>英語 (流暢)</li>
    <li>ドイツ語 (中級)</li>
    <li>日本語 (中級)</li>
  </ul>
  <h2 class='title'>プログラミング言語 (自信を持ってコピー＆ペースト)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>MATLAB/ SIMULINK</li>
    <li>C/ C++</li>
    <li>Python</li>
    <li>SQL</li>
    <li>R</li>
    <li> <u>学習中</u>: この履歴書サイト作成を通じてNode.Js, HTML</li>
  </ul>

  </div>
  `,
};

// ---------- Publications page data
const jpPublicationsPageData = {
  type_one_title: "学術論文",

  type_one_items: [
    {
      title: `気候変動の鼓動に合わせて踊る：米国の政治家における左右の分断を通じてTikTokの視覚的フレームを研究する（...と共著）。`,
      abstract: `政治家は、若い有権者にアピールするため、オリジナル動画を制作してTikTokに参入しています。この新しいトレンドは、TikTokを政治的コミュニケーションの新たな分極化の場へと変え、気候変動などの問題に関する党派間の溝を深めています。しかし...`,
      date: "",
      link: "http://link.com",
      github: "",
      download: "",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
    {
      title: `「今、私の言語を話している」欧州連合理事会における言語固有の透明性と立法交渉（...と共著）。`,
      abstract: `政治家は、若い有権者にアピールするため、オリジナル動画を制作してTikTokに参入しています。この新しいトレンドは、TikTokを政治的コミュニケーションの新たな分極化の場へと変え、気候変動などの問題に関する党派間の溝を深めています。しかし...`,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", ""],
    },
  ],

  type_two_title: "審査中",
  type_two_items: [
    {
      title: `Elena Reinaga. 2016. もし生まれ変わっても、私はまだセックスワーカーになるだろう。P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "1996",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `「今、私の言語を話している」欧州連合理事会における言語固有の透明性と立法交渉（...と共著）。`,
      abstract: `私たちはエリートに焦点を当てたアプローチを採用し、左右の傾向を持つアメリカの政治エリートが、気候変動の視覚的・感情的フレーミングにおいてどのように異なるかを探ります。全体として、この研究は、政党間の政治家が、新しいオンラインコミュニケーションチャネルに適応することで、気候変動のような重要で分極化する政治問題についてどのようにコミュニケーションをとっているかについて、新たな洞察を提供します。`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],

  type_three_title: "書籍章",
  type_three_items: [
    {
      title: `Elena Reinaga. 2016. もし生まれ変わっても、私はまだセックスワーカーになるだろう。P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `「今、私の言語を話している」欧州連合理事会における言語固有の透明性と立法交渉（...と共著）。`,
      abstract: `私たちはエリートに焦点を当てたアプローチを採用し、左右の傾向を持つアメリカの政治エリートが、気候変動の視覚的・感情的フレーミングにおいてどのように異なるかを探ります。全体として、この研究は、政党間の政治家が、新しいオンラインコミュニケーションチャネルに適応することで、気候変動のような重要で分極化する政治問題についてどのようにコミュニケーションをとっているかについて、新たな洞察を提供します。`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],

  type_four_title: "",
  type_four_items: [
    {
      title: `Elena Reinaga. 2016. もし生まれ変わっても、私はまだセックスワーカーになるだろう。P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `「今、私の言語を話している」欧州連合理事会における言語固有の透明性と立法交渉（...と共著）。`,
      abstract: `私たちはエリートに焦点を当てたアプローチを採用し、左右の傾向を持つアメリカの政治エリートが、気候変動の視覚的・感情的フレーミングにおいてどのように異なるかを探ります。全体として、この研究は、政党間の政治家が、新しいオンラインコミュニケーションチャネルに適応することで、気候変動のような重要で分極化する政治問題についてどのようにコミュニケーションをとっているかについて、新たな洞察を提供します。`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
};


// ---------- Research page data
const jpResearchPageData = {
  title: "研究",
  content: `
    <div class='research_content'>
        <p> 私の研究は、拡散ベースのチャネルにおけるビット誤り率（BER）を厳密に分析することで、分子通信（MC）システムの効率を向上させることに焦点を当てています。分子拡散の本質的に確率的な性質は、特にシステムの性能を分析し最適化する上で、信頼性の高い通信に大きな課題をもたらします。私の主要な目的は、これらの確率的プロセスを正確に特徴付ける包括的な拡散モデルを開発し、より効率的なMCシステムの設計を可能にすることです。具体的には、この研究は、従来の電磁気アプローチが非現実的なナノスケール環境での通信信頼性を定量化し、改善するための理論的枠組みを確立します。</p>


        <h2 class='title'> 修士論文 </h2>
        <b>分子通信における分子混合物と交差反応性センシングアレイの最適化</b>
        , <i>指導教員</i> バスティアン・ハインライン, 修士、ヴァヒド・ジャマリ教授, 工学博士 <br>
        <br>

        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
          <img src="research_pic/SER_vahmat_numpnts_10_75.png" alt="SER" width="330">
          <img src="research_pic/ra_mm_pri_nml_2d.png" alt="prio" width="330">
          <img src="research_pic/min_dist_l2_dis.png" alt="min dist" width="330">
        </div>  
        
        <b>概要</b> : 分子通信（MC）は、分子を情報キャリアとして使用する成長分野であり、ヘルスケア、環境モニタリング、バイオテクノロジーに応用されています。有望な方向性として、生物学的嗅覚を模倣した嗅覚に着想を得たMC（OMC）があり、受容体の数を超える分子タイプを使用する交差反応性センサーを使用します。これにより、分子混合物を使用した効率的な伝送が可能になりますが、適切な混合物アルファベットの選択などの課題も生じます。これまでの研究は複雑な非類似度メトリクスを使用していましたが、本論文ではより単純なユークリッド距離ベースの方法を提案します。2つの定式化が探求されます。混合物の分離可能性を最大化するMax-Minアプローチと、自然な粒子間相互作用に触発された反発ベースの方法です。また、エラー率を低く抑える必要がある重要なデータのために優先メッセージも導入されます。センサーの選択については、高速二分探索と条件数最小化が評価され、精度とコスト効率の両方でランダム選択を上回ることが示されました。これらの知見は、堅牢なバイオ通信システムの将来の開発を支援するものであり、現在進行中の研究は、スケーラブルな最適化と受容体設計に焦点を当てています。

        <h2 class='title'> 学士論文 </h2>
        <b>車両データロガー</b>, <i>指導教員</i> スパチャイ・ヴォラポピスティ准教授, 博士<br>
        <br>
        
        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
          <img src="research_pic/be_over.png" alt="overall" width="330">
          <img src="research_pic/be_over2.png" alt="overall2" width="330">
          <img src="research_pic/simu.png" alt="simulink" width="330">
        </div>
        
        <b>概要</b> : 車は最も人気があり、定期的なチェックが必要です。エンジンの性能を確認する方法はいくつかあり、最も便利なのは自動車サービスセンターのスタッフに依頼することです。しかし、車内のコンピュータシステムからデータを読み取るだけのツールを使用する場合でも、そこに行くのは不便で費用もかさみます。そこで私たちは、OBD-IIからリアルタイムでデータを読み取る車両データロガーを研究・開発しました。このデバイスは、データを収集してSDカードに保存し、コンピュータに送信することができます。これにより、事前にエンジンの性能を推定し、問題を診断することができます。さらに、私たちはチューニングカー業界にも関心があり、大手サービスショップと小規模サービスショップのウェブボードやソーシャルネットワークチャネルにおけるデジタルマーケティングモデルの違いを研究しました。
    </div>
  `,

};

// ---------- Jobs page data
const jpJobsPageData = {
  title: "職務経歴",
  items: [
    {
      title: `研究学生アシスタント`,
      company: "レジリエント通信システム, ダルムシュタット工科大学",
      startData: "2024年10月",
      endDate: "2025年4月",
      location: "ダルムシュタット、ドイツ",
      abstract: "",
      achievements: ["PythonとPyQt5を使用して分子通信用のオフラインおよびリアルタイムデコーダーを実装",
         "有色インク（メッセージ）とオイルの流れ（チャネル）を使用したデュアルチャネル通信システムを設計",
        "信号エンコーディング用のカラー変調と、デコーディング用の光学センサーを実装"],
    },
    {
      title: `研究開発ソフトウェアデベロッパー (インターン)`,
      company: "キサイト・テクノロジーズ・ドイチュラント GmbH",
      startData: "2024年10月",
      endDate: "2023年3月",
      location: "ベーブリンゲン、ドイツ",
      abstract: "",
      achievements: ["GSG‑8からUS‑CV2XスタックへのRTCM/ RTKメッセージの統合", 
        "GSG‑8システムのGNSSトラッカーのテスト",
        "GSG‑8ラボテスト環境のサポート"],
    },
    {
      title: `ソフトウェアエンジニア`,
      company: "アルストム・トランスポーテーション・タイランド",
      startData: "2020年9月",
      endDate: "2021年10月",
      location: "バンコク、タイ",
      abstract: "",
      achievements: ["Cプログラミング言語を使用して、CITYFLO650モデル（タイ、バンコクのゴールドラインAPMおよびピンク/イエローモノレールプロジェクト）の信号におけるソフトウェア設計、実装、サブシステム統合",
        "ゴールドラインAPMスカイトレインの現場問題のサポート",
        "列車の推進力とブレーキのテストおよび調整"],
    },
    {
      title: `ソフトウェアエンジニア`,
      company: "トヨタ通商デンソーエレクトロニクス タイランド (TDET)",
      startData: "2017年7月",
      endDate: "2020年8月",
      location: "バンコク、タイ",
      abstract: "",
      achievements: ["MATLAB＆SIMULINKを使用して車両機能要件を分析し、ソフトウェアを実装",
        "dSPACE制御ユニットを使用してMIL（Model in the loop）およびHIL（Hardware in the loop）で自動車ソフトウェアをテスト",
        "Vector CANoeを使用してCANおよびLIN通信システムを実装およびテスト",
        "ソフトウェア開発プロセス、ソフトウェアおよびドキュメントのバージョンを追跡する構成管理者として活動",
        "新卒メンバー向けのソフトウェア開発、MATLABライブラリの利用方法、ソフトウェア開発プロセスに関するインストラクターを担当"],
    },
  ],
};

// ---------- Hobby data
const jpHobbyPageData = {
  title: "自由時間は何をしている？",
  content: `
  <div class='hobby_content'>

  ドイツでの滞在中、私はこの国の美しい風景と豊かな文化を探求することに情熱を傾けてきました。ハイデルベルク、マールブルク、マインツのような都市や町を訪れることで、現地の歴史と建築に没頭することができました。
  特にオーデンヴァルト山地でのハイキングを楽しんでおり、この地域の自然の美しさを堪能しています。
  <br>
  <br>
  これまでにドイツで訪れた場所を見てみましょう。(城/その他の訪問国にも変更可能)
    <div class="map-container">
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1VBmZiomJYBizWITalLoaPgEg9kwB7T4&ehbc=2E312F"
      width="100%"
      height="600"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="私の旅行地図"
    ></iframe>
  </div>


<div class="gallery">
  <h2 class='title'>ギャラリー</h2>
    自由時間には、山でのハイキング、風光明媚なルートでのサイクリング、あるいは単に公園を散歩するなど、身の回りの世界を探検して楽しんでいます。
    私はこれらの瞬間を写真に収めるのが大好きで、お気に入りの写真を以下にいくつか掲載しています。

<div class="full-gallery">
  <div class="img-gallery">
    <img src="./files/images/IMG_1.webp">
    <img src="./files/images/IMG_2.webp">
    <img src="./files/images/IMG_3.webp">
    <img src="./files/images/IMG_4.webp">
    <img src="./files/images/IMG_5.webp">
    <img src="./files/images/IMG_6.webp">
    <img src="./files/images/IMG_7.webp">
    <img src="./files/images/IMG_8.webp">
    <img src="./files/images/IMG_9.webp">
    <img src="./files/images/IMG_10.webp">
    <img src="./files/images/IMG_11.webp">
    <img src="./files/images/IMG_12.webp">
    <img src="./files/images/IMG_13.webp">
    <img src="./files/images/IMG_14.webp">
    <img src="./files/images/IMG_15.webp">
    <img src="./files/images/IMG_16.webp">
    <img src="./files/images/IMG_17.webp">
    <img src="./files/images/IMG_18.webp">
    <img src="./files/images/IMG_19.webp">
    <img src="./files/images/IMG_20.webp">
    <img src="./files/images/IMG_21.webp">
    <img src="./files/images/IMG_22.webp">
    <img src="./files/images/IMG_23.webp">
    <img src="./files/images/IMG_24.webp">
    <img src="./files/images/IMG_25.webp">
    <img src="./files/images/IMG_26.webp">
    <img src="./files/images/IMG_27.webp">
    <img src="./files/images/IMG_28.webp">
    <img src="./files/images/IMG_29.webp">
    <img src="./files/images/IMG_30.webp">
    <img src="./files/images/IMG_31.webp">
    <img src="./files/images/IMG_32.webp">
    <img src="./files/images/IMG_33.webp">
    <img src="./files/images/IMG_34.webp">
    <img src="./files/images/IMG_35.webp">
    <img src="./files/images/IMG_36.webp">
    <img src="./files/images/IMG_37.webp">
    <img src="./files/images/IMG_38.webp">
    <img src="./files/images/IMG_39.webp">
    <img src="./files/images/IMG_40.webp">
    <img src="./files/images/IMG_41.webp">
    <img src="./files/images/IMG_42.webp">
    <img src="./files/images/IMG_43.webp">
    <img src="./files/images/IMG_44.webp">
    <img src="./files/images/IMG_45.webp">
    <img src="./files/images/IMG_46.webp">
    <img src="./files/images/IMG_47.webp">
    <img src="./files/images/IMG_48.webp">
    <img src="./files/images/IMG_49.webp">
    <img src="./files/images/IMG_50.webp">
    <img src="./files/images/IMG_51.webp">
    <img src="./files/images/IMG_52.webp">
    <img src="./files/images/IMG_53.webp">
    <img src="./files/images/IMG_54.webp">
    <img src="./files/images/IMG_55.webp">
    <img src="./files/images/IMG_56.webp">
    <img src="./files/images/IMG_57.webp">
    <img src="./files/images/IMG_58.webp">
    <img src="./files/images/IMG_59.webp">
    <img src="./files/images/IMG_60.webp">

    <img src="./files/images/IMG_61.webp">
    <img src="./files/images/IMG_62.webp">
    <img src="./files/images/IMG_63.webp">
    <img src="./files/images/IMG_64.webp">
    <img src="./files/images/IMG_65.webp">
    <img src="./files/images/IMG_66.webp">
    <img src="./files/images/IMG_67.webp">
    <img src="./files/images/IMG_68.webp">
    <img src="./files/images/IMG_69.webp">
    <img src="./files/images/IMG_70.webp">
    <img src="./files/images/IMG_71.webp">
    <img src="./files/images/IMG_72.webp">
    <img src="./files/images/IMG_73.webp">
    <img src="./files/images/IMG_74.webp">
    <img src="./files/images/IMG_75.webp">
    <img src="./files/images/IMG_76.webp">
    <img src="./files/images/IMG_77.webp">
    <img src="./files/images/IMG_78.webp">
    <img src="./files/images/IMG_79.webp">
    <img src="./files/images/IMG_80.webp">
    <img src="./files/images/IMG_81.webp">
    <img src="./files/images/IMG_82.webp">
    <img src="./files/images/IMG_83.webp">
    <img src="./files/images/IMG_84.webp">
    <img src="./files/images/IMG_85.webp">
    <img src="./files/images/IMG_86.webp">
    <img src="./files/images/IMG_87.webp">
    <img src="./files/images/IMG_88.webp">
    <img src="./files/images/IMG_89.webp">
    
    <img src="./files/images/IMG_90.webp">
    <img src="./files/images/IMG_91.webp">
    <img src="./files/images/IMG_92.webp">
    <img src="./files/images/IMG_93.webp">
    <img src="./files/images/IMG_94.webp">
    <img src="./files/images/IMG_95.webp">
    <img src="./files/images/IMG_96.webp">
    <img src="./files/images/IMG_97.webp">
    <img src="./files/images/IMG_98.webp">
    <img src="./files/images/IMG_99.webp">
    <img src="./files/images/IMG_100.webp">
  </div>
</div>

<style>
  .img-gallery {
    column-count: 6;
    column-gap: 10px;
    padding: 10px;
  }
  
  .img-gallery img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
    break-inside: avoid;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .img-gallery img:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  @media (max-width: 1200px) {
    .img-gallery {
      column-count: 3;
    }
  }
  
  @media (max-width: 768px) {
    .img-gallery {
      column-count: 2;
    }
  }
  
  @media (max-width: 480px) {
    .img-gallery {
      column-count: 1;
    }
  }
</style>
</div>
  `,
};

// ---------- Project data
const jpProjectPageData = {
  title: "プロジェクト",
  content: `
    <h1 class='title' align="center"> "現在構築中" </h1>

    <div class = "Projects">
      <h2 class='title'> プロジェクトセミナー 信号検出とパラメータ推定 </h2>
      論文「OFDMレーダーの最尤速度および距離推定」に基づき、推定器の尤度をMATLABで実装・解析

      <h2 class='title'> プロジェクトセミナー MIMO通信ネットワークにおける新興トピックス </h2>
      論文「5G New Radioに基づく共同センシングおよび通信のシステムレベル分析」に基づき、ターゲット検出とパラメータ推定をMATLABで実装

      <h2 class='title'> 凸最適化 </h2>
      論文「凸最適化を用いたユニオンバウンド最小化に基づく受信アンテナ選択」に基づき、BERを改善するために最適な送受信アンテナを決定するMATLABおよびCVXライブラリを実装

      <h2 class='title'> 強化学習 </h2>
      Pythonで強化学習を用いた自動スネークゲームを作成

    </div>

  `,

};