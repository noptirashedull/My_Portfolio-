/* ══════════════════════════════════════
   NAPTI MD RASEDUL — PORTFOLIO SCRIPTS
   script.js
══════════════════════════════════════ */

/* ────────────────────────────────────
   i18n TRANSLATION DATA
   Keys map to data-i18n attributes in HTML
──────────────────────────────────── */
const T = {

  /* ── JAPANESE ── */
  ja: {
    "nav.about":      "私について",
    "nav.skills":     "スキル",
    "nav.projects":   "プロジェクト",
    "nav.education":  "学歴・資格",
    "nav.experience": "職歴",
    "nav.cv":         "履歴書",
    "nav.contact":    "お問い合わせ",

    "hero.tag":  "IT学生 & デベロッパー",
    "hero.desc": "フォーラム情報アカデミー専門学校<br>情報ソフトウェア科　グローバルITコース　在学中<br><br>Webアプリケーション開発を中心に、<br>多言語対応・チーム開発経験あり。",
    "hero.btn1": "お問い合わせ →",
    "hero.btn2": "履歴書を見る",

    "about.title":   "私について",
    "about.k1":      "氏名",
    "about.k2":      "年齢",
    "about.age":     "25歳",
    "about.k3":      "性別",
    "about.gender":  "男性",
    "about.k4":      "所在地",
    "about.k5":      "学校",
    "about.course":  "情報ソフトウェア科　グローバルITコース",
    "about.k6":      "卒業予定",
    "about.k7":      "電話",
    "about.langkey": "対応言語",
    "about.l1":      "ベンガル語（母語）",
    "about.l2":      "日本語（N3）",
    "about.l3":      "英語",
    "about.l4":      "ウルドゥー語",
    "about.l5":      "ヒンディー語",
    "about.p1":      "私はフォーラム情報アカデミー専門学校にて、HTML・CSS・JavaScript（React.js・Node.js）・Python・データベース（SQL）・AI・機械学習などを学び、Webアプリケーション開発の基礎を習得しました。",
    "about.p2":      "学校のプロジェクトでは、チームでのシステム開発を経験し、役割分担や進捗管理を意識しながら開発に取り組んできました。この経験を通じて、実務の現場で自身のスキルを活かし、さらに成長したいと考えるようになりました。",
    "about.quote":   "課題に直面した際に自ら調べて解決へと導く「自己解決力」と、最後まで粘り強く取り組む「継続力」が私の強みです。",
    "about.p3":      "通訳アルバイトの経験を通じて、日本語での円滑なコミュニケーション力と、相手の立場を考えたサポート力を身につけました。加えて、母国語に加え、英語・ウルドゥー語・ヒンディー語でのコミュニケーションも可能です。",
    "about.p4":      "フロントエンド・バックエンドの両方に挑戦しながらスキルを磨き、フルスタック開発エンジニアとして日本の開発現場に貢献していきたいと考えています。",

    "skills.title": "スキル",
    "sk1.name":     "フロントエンド開発",
    "sk2.name":     "バックエンド開発",
    "sk3.name":     "データベース管理",
    "sk4.name":     "AI・機械学習",
    "sk5.name":     "多言語コミュニケーション",
    "sk6.name":     "チームワーク・成長力",
    "sk6.t1":       "チーム開発",
    "sk6.t2":       "問題解決力",
    "sk6.t3":       "自己学習力",
    "sk6.t4":       "通訳スキル",

    "proj.title":    "プロジェクト",
    "proj1.tag":     "学校プロジェクト · チーム開発",
    "proj1.title":   "Eコマース Webサイト",
    "proj1.desc":    "フォーラム情報アカデミー専門学校の授業プロジェクトとして、チームで開発したEコマースサイトです。商品一覧・カート機能・購入フローを実装し、フロントエンドからバックエンドまで一貫して担当しました。役割分担・進捗管理を通じて、実践的なチーム開発スキルを習得しました。",
    "proj.viewmore": "詳細を見る →",

    "edu.title":    "学歴・資格",
    "edu.sub1":     "学 歴",
    "edu.course":   "情報ソフトウェア科　グローバルITコース",
    "edu.expected": "卒業見込み",
    "edu.enrolled": "情報ソフトウェア科　グローバルITコース　入学",
    "edu.japanese": "日本語科　2025年3月卒業",
    "edu.madrasah": "2021年1月卒業",
    "edu.sub2":     "資 格",
    "cert.n2yr":    "取得予定：2026年7月",
    "cert.plan":    "目標",
    "cert.done":    "取得済み",
    "cert.done2":   "取得済み",
    "cert.done3":   "取得済み",

    "exp.title":   "職歴",
    "exp.present": "現在",
    "exp1.role":   "通訳者",
    "exp1.desc":   "日本語とベンガル語を中心とした通訳業務に従事。ビジネスの場における円滑なコミュニケーション支援を担当し、多言語対応力を活かして業務に貢献している。",

    "cv.title":   "履歴書・職務経歴書",
    "cv.heading": "採用をご検討の方へ<span class='r'>。</span><br>書類はこちらから。",
    "cv.note":    "履歴書・職務経歴書はPDFにてご用意しております。ダウンロードリンクより直接ご覧いただくか、メールにてお送りすることも可能です。ご不明な点はお気軽にお問い合わせください。",
    "cv.info":    " メール送付ご希望の方：<br><a href='mailto:noptirashedull@gmail.com'>noptirashedull@gmail.com</a> までご連絡いただくか、右の「書類請求フォーム」をご利用ください。",
    "cv.jp":      "履歴書（日本語版）",
    "cv.req":     "書類をメールで請求する",
    "cv.reqsub":  "フォームに記入 → メール送信",

    "contact.title":   "お問い合わせ",
    "ct.email": "メールアドレス",
    "ct.phone": "電話番号",
    "ct.loc":   "所在地",
    "ct.str":   "強み・アピールポイント",
    "str1.t":   "自己解決力",
    "str1.d":   "課題に直面した際に自ら調べ、解決へと導く力。",
    "str2.t":   "継続力",
    "str2.d":   "最後まで粘り強く取り組み、目標を達成する力。",
    "str3.t":   "チーム協調性",
    "str3.d":   "周囲と積極的に連携し、責任を持って役割を果たす力。",
    "str4.t":   "多言語コミュニケーション",
    "str4.d":   "日本語・英語・ベンガル語・ウルドゥー語・ヒンディー語に対応。",

    "modal.close": "閉じる",
    "modal.title": "書類請求フォーム",
    "modal.desc":  "以下にご記入いただきますと、メールにて履歴書・職務経歴書をお送りします。お気軽にご連絡ください。",
    "modal.ph1":   "お名前 / お会社名",
    "modal.ph2":   "メールアドレス",
    "modal.ph3":   "ご用件・ご質問など（任意）",
    "modal.send":  "送信する →"
  },

  /* ── ENGLISH ── */
  en: {
    "nav.about":      "About",
    "nav.skills":     "Skills",
    "nav.projects":   "Projects",
    "nav.education":  "Education",
    "nav.experience": "Experience",
    "nav.cv":         "Resume",
    "nav.contact":    "Contact",

    "hero.tag":  "IT Student & Developer",
    "hero.desc": "Forum Information Academy<br>Information Software Dept. — Global IT Course<br><br>Focused on web application development.<br>Multilingual & team development experience.",
    "hero.btn1": "Contact Me →",
    "hero.btn2": "View Resume",

    "about.title":   "About Me",
    "about.k1":      "Name",
    "about.k2":      "Age",
    "about.age":     "25 years old",
    "about.k3":      "Gender",
    "about.gender":  "Male",
    "about.k4":      "Location",
    "about.k5":      "School",
    "about.course":  "Information Software — Global IT Course",
    "about.k6":      "Graduation",
    "about.k7":      "Phone",
    "about.langkey": "Languages",
    "about.l1":      "Bengali (Native)",
    "about.l2":      "Japanese (N3)",
    "about.l3":      "English",
    "about.l4":      "Urdu",
    "about.l5":      "Hindi",
    "about.p1":      "At Forum Information Academy, I have been studying HTML, CSS, JavaScript (React.js, Node.js), Python, SQL databases, AI and machine learning — building a solid foundation in web application development.",
    "about.p2":      "Through school projects I have experienced team-based system development, focusing on role delegation and progress management. This has driven my desire to apply my skills in a real professional environment.",
    "about.quote":   "My strengths are the ability to independently research and resolve challenges (\"self-problem-solving\") and the persistence to see every task through to the end.",
    "about.p3":      "Through my interpreter part-time work, I have developed smooth Japanese communication skills and the ability to support others empathetically. I also communicate in English, Urdu, and Hindi.",
    "about.p4":      "I aim to sharpen my full-stack skills across frontend and backend, and contribute meaningfully to Japan's tech industry as a developer.",

    "skills.title": "Skills",
    "sk1.name":     "Frontend Development",
    "sk2.name":     "Backend Development",
    "sk3.name":     "Database Management",
    "sk4.name":     "AI & Machine Learning",
    "sk5.name":     "Multilingual Communication",
    "sk6.name":     "Teamwork & Growth",
    "sk6.t1":       "Team Dev",
    "sk6.t2":       "Problem Solving",
    "sk6.t3":       "Self-Learning",
    "sk6.t4":       "Interpreting",

    "proj.title":    "Projects",
    "proj1.tag":     "School Project · Team Dev",
    "proj1.title":   "E-Commerce Website",
    "proj1.desc":    "An e-commerce website developed as a team project at Forum Information Academy. Implemented product listings, cart functionality, and checkout flow, handling both frontend and backend. Gained practical team development skills through role delegation and progress management.",
    "proj.viewmore": "View Details →",

    "edu.title":    "Education & Certifications",
    "edu.sub1":     "Academic History",
    "edu.course":   "Information Software — Global IT Course",
    "edu.expected": "Expected Graduation",
    "edu.enrolled": "Information Software — Global IT Course — Enrolled",
    "edu.japanese": "Japanese Language Dept. — Graduated March 2025",
    "edu.madrasah": "Graduated January 2021",
    "edu.sub2":     "Certifications",
    "cert.n2yr":    "Target: July 2026",
    "cert.plan":    "Goal",
    "cert.done":    "Acquired",
    "cert.done2":   "Acquired",
    "cert.done3":   "Acquired",

    "exp.title":   "Experience",
    "exp.present": "Present",
    "exp1.role":   "Interpreter",
    "exp1.desc":   "Providing Japanese–Bengali interpretation services for business operations. Supporting smooth communication across language barriers using multilingual skills.",

    "cv.title":   "Resume / CV",
    "cv.heading": "For Hiring Managers<span class='r'>.</span><br>Documents available here.",
    "cv.note":    "My resume and CV are available as PDFs. You can download them directly via the links, or I can send them by email. Feel free to reach out anytime.",
    "cv.info":    " To receive documents by email:<br><a href='mailto:noptirashedull@gmail.com'>noptirashedull@gmail.com</a> — or use the Document Request Form →",
    "cv.jp":      "履歴書 (Japanese Resume)",
    "cv.req":     "Request Documents by Email",
    "cv.reqsub":  "Fill form → Send via email",

    "contact.title":   "Contact",
    "ct.email": "Email",
    "ct.phone": "Phone",
    "ct.loc":   "Location",
    "ct.str":   "Strengths",
    "str1.t":   "Self-Problem-Solving",
    "str1.d":   "I research and resolve challenges independently.",
    "str2.t":   "Persistence",
    "str2.d":   "I see every task through to the end with full commitment.",
    "str3.t":   "Team Collaboration",
    "str3.d":   "I work actively with teammates and take responsibility for my role.",
    "str4.t":   "Multilingual Communication",
    "str4.d":   "Japanese, English, Bengali, Urdu, and Hindi.",

    "modal.close": "Close",
    "modal.title": "Document Request Form",
    "modal.desc":  "Please fill in your details and I will send my resume/CV by email. Feel free to reach out!",
    "modal.ph1":   "Your Name / Company",
    "modal.ph2":   "Email Address",
    "modal.ph3":   "Message (optional)",
    "modal.send":  "Send Request →"
  },

  /* ── BENGALI ── */
  bn: {
    "nav.about":      "আমার সম্পর্কে",
    "nav.skills":     "দক্ষতা",
    "nav.projects":   "প্রজেক্ট",
    "nav.education":  "শিক্ষা ও সার্টিফিকেট",
    "nav.experience": "কাজের অভিজ্ঞতা",
    "nav.cv":         "সিভি",
    "nav.contact":    "যোগাযোগ",

    "hero.tag":  "আইটি ছাত্র ও ডেভেলপার",
    "hero.desc": "ফোরাম ইনফরমেশন একাডেমি<br>ইনফরমেশন সফটওয়্যার বিভাগ — গ্লোবাল আইটি কোর্স<br><br>ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে আগ্রহী।<br>বহুভাষিক ও টিম ডেভেলপমেন্টের অভিজ্ঞতা আছে।",
    "hero.btn1": "যোগাযোগ করুন →",
    "hero.btn2": "সিভি দেখুন",

    "about.title":   "আমার সম্পর্কে",
    "about.k1":      "নাম",
    "about.k2":      "বয়স",
    "about.age":     "২৫ বছর",
    "about.k3":      "লিঙ্গ",
    "about.gender":  "পুরুষ",
    "about.k4":      "ঠিকানা",
    "about.k5":      "প্রতিষ্ঠান",
    "about.course":  "ইনফরমেশন সফটওয়্যার — গ্লোবাল আইটি কোর্স",
    "about.k6":      "স্নাতক",
    "about.k7":      "ফোন",
    "about.langkey": "ভাষা দক্ষতা",
    "about.l1":      "বাংলা (মাতৃভাষা)",
    "about.l2":      "জাপানি (N3)",
    "about.l3":      "ইংরেজি",
    "about.l4":      "উর্দু",
    "about.l5":      "হিন্দি",
    "about.p1":      "আমি ফোরাম ইনফরমেশন একাডেমিতে HTML, CSS, JavaScript (React.js, Node.js), Python, SQL ডেটাবেস, AI ও মেশিন লার্নিং শিখছি এবং ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টের ভিত্তি গড়ে তুলেছি।",
    "about.p2":      "স্কুলের প্রজেক্টে টিম-ভিত্তিক সিস্টেম ডেভেলপমেন্টের অভিজ্ঞতা অর্জন করেছি — দায়িত্ব ভাগ করে নেওয়া ও প্রগতি পর্যবেক্ষণে মনোযোগ দিয়েছি। এই অভিজ্ঞতা আমাকে বাস্তব কাজের পরিবেশে নিজেকে আরও উন্নত করতে অনুপ্রাণিত করেছে।",
    "about.quote":   "সমস্যার মুখোমুখি হলে নিজে গবেষণা করে সমাধান খোঁজার \"স্বনির্ভর সমস্যা সমাধান\" এবং শেষ পর্যন্ত দৃঢ়ভাবে কাজ চালিয়ে যাওয়ার \"অধ্যবসায়\" আমার প্রধান শক্তি।",
    "about.p3":      "দোভাষী হিসেবে কাজের মাধ্যমে জাপানিতে যোগাযোগের দক্ষতা ও মানুষের সহায়তা করার ক্ষমতা গড়ে তুলেছি। বাংলার পাশাপাশি ইংরেজি, উর্দু ও হিন্দিতেও কথা বলতে পারি।",
    "about.p4":      "ফ্রন্টেন্ড ও ব্যাকেন্ড উভয়ে দক্ষতা অর্জন করে ফুলস্ট্যাক ডেভেলপার হিসেবে জাপানের প্রযুক্তি শিল্পে অবদান রাখতে চাই।",

    "skills.title": "দক্ষতা",
    "sk1.name":     "ফ্রন্টেন্ড ডেভেলপমেন্ট",
    "sk2.name":     "ব্যাকেন্ড ডেভেলপমেন্ট",
    "sk3.name":     "ডেটাবেস ম্যানেজমেন্ট",
    "sk4.name":     "AI ও মেশিন লার্নিং",
    "sk5.name":     "বহুভাষিক যোগাযোগ",
    "sk6.name":     "টিমওয়ার্ক ও বৃদ্ধি",
    "sk6.t1":       "টিম ডেভেলপমেন্ট",
    "sk6.t2":       "সমস্যা সমাধান",
    "sk6.t3":       "স্বশিক্ষা",
    "sk6.t4":       "দোভাষী দক্ষতা",

    "proj.title":    "প্রজেক্ট",
    "proj1.tag":     "স্কুল প্রজেক্ট · টিম ডেভেলপমেন্ট",
    "proj1.title":   "ই-কমার্স ওয়েবসাইট",
    "proj1.desc":    "ফোরাম ইনফরমেশন একাডেমির ক্লাস প্রজেক্ট হিসেবে টিমে তৈরি করা একটি ই-কমার্স সাইট। পণ্য তালিকা, কার্ট ফিচার ও চেকআউট প্রক্রিয়া বাস্তবায়ন করেছি এবং ফ্রন্টেন্ড থেকে ব্যাকেন্ড পর্যন্ত দায়িত্ব নিয়েছি। দায়িত্ব বণ্টন ও অগ্রগতি ব্যবস্থাপনার মাধ্যমে বাস্তব টিম ডেভেলপমেন্ট দক্ষতা অর্জন করেছি।",
    "proj.viewmore": "বিস্তারিত দেখুন →",

    "edu.title":    "শিক্ষা ও সার্টিফিকেট",
    "edu.sub1":     "শিক্ষাগত যোগ্যতা",
    "edu.course":   "ইনফরমেশন সফটওয়্যার — গ্লোবাল আইটি কোর্স",
    "edu.expected": "স্নাতক (প্রত্যাশিত)",
    "edu.enrolled": "ইনফরমেশন সফটওয়্যার — গ্লোবাল আইটি কোর্স — ভর্তি",
    "edu.japanese": "জাপানি ভাষা বিভাগ — মার্চ ২০২৫ স্নাতক",
    "edu.madrasah": "জানুয়ারি ২০২১ স্নাতক",
    "edu.sub2":     "সার্টিফিকেট",
    "cert.n2yr":    "লক্ষ্য: জুলাই ২০২৬",
    "cert.plan":    "লক্ষ্য",
    "cert.done":    "অর্জিত",
    "cert.done2":   "অর্জিত",
    "cert.done3":   "অর্জিত",

    "exp.title":   "কাজের অভিজ্ঞতা",
    "exp.present": "বর্তমান",
    "exp1.role":   "দোভাষী",
    "exp1.desc":   "জাপানি ও বাংলা ভাষায় ব্যবসায়িক দোভাষী সেবা প্রদান। বহুভাষিক দক্ষতা কাজে লাগিয়ে মসৃণ যোগাযোগ নিশ্চিত করছি।",

    "cv.title":   "সিভি / রেজুমে",
    "cv.heading": "নিয়োগকর্তাদের জন্য<span class='r'>।</span><br>নথিপত্র এখানে পাওয়া যাবে।",
    "cv.note":    "আমার সিভি ও রেজুমে PDF আকারে প্রস্তুত আছে। সরাসরি ডাউনলোড করতে পারবেন অথবা ইমেইলে পাঠাতে পারি। যেকোনো প্রশ্নে নির্দ্বিধায় যোগাযোগ করুন।",
    "cv.info":    " ইমেইলে নথি পেতে:<br><a href='mailto:noptirashedull@gmail.com'>noptirashedull@gmail.com</a> — অথবা নিচের ফর্ম ব্যবহার করুন।",
    "cv.jp":      "履歴書 (জাপানি রেজুমে)",
    "cv.req":     "ইমেইলে নথি অনুরোধ করুন",
    "cv.reqsub":  "ফর্ম পূরণ করুন → ইমেইল পাঠান",

    "contact.title":   "যোগাযোগ",
    "ct.email": "ইমেইল",
    "ct.phone": "ফোন",
    "ct.loc":   "অবস্থান",
    "ct.str":   "শক্তিসমূহ",
    "str1.t":   "স্বনির্ভর সমস্যা সমাধান",
    "str1.d":   "সমস্যার মুখোমুখি হলে নিজে গবেষণা করে সমাধান খোঁজার ক্ষমতা।",
    "str2.t":   "অধ্যবসায়",
    "str2.d":   "শেষ পর্যন্ত দৃঢ়ভাবে কাজ চালিয়ে যাওয়া এবং লক্ষ্য অর্জন করার শক্তি।",
    "str3.t":   "টিম সহযোগিতা",
    "str3.d":   "টিমের সাথে সক্রিয়ভাবে কাজ করা এবং দায়িত্বের সাথে নিজের ভূমিকা পালন করা।",
    "str4.t":   "বহুভাষিক যোগাযোগ",
    "str4.d":   "জাপানি, ইংরেজি, বাংলা, উর্দু ও হিন্দি ভাষায় যোগাযোগে সক্ষম।",

    "modal.close": "বন্ধ করুন",
    "modal.title": "নথি অনুরোধ ফর্ম",
    "modal.desc":  "নিচের তথ্য পূরণ করলে আমি ইমেইলে সিভি পাঠিয়ে দেব। নির্দ্বিধায় যোগাযোগ করুন।",
    "modal.ph1":   "আপনার নাম / প্রতিষ্ঠান",
    "modal.ph2":   "ইমেইল ঠিকানা",
    "modal.ph3":   "বার্তা (ঐচ্ছিক)",
    "modal.send":  "পাঠান →"
  }
};

/* ────────────────────────────────────
   LANGUAGE SWITCHER
──────────────────────────────────── */
let currentLang = 'ja';

function setLang(lang) {
  currentLang = lang;

  // Update <html lang="">
  document.documentElement.lang =
    lang === 'ja' ? 'ja' : lang === 'en' ? 'en' : 'bn';

  // Bengali font override
  document.body.style.fontFamily = lang === 'bn'
    ? "'Noto Sans Bengali', 'Noto Sans JP', sans-serif"
    : "'Noto Sans JP', sans-serif";

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key] !== undefined) {
      el.innerHTML = T[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[lang] && T[lang][key]) {
      el.placeholder = T[lang][key];
    }
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const map = { ja: 0, en: 1, bn: 2 };
  document.querySelectorAll('.lang-btn')[map[lang]].classList.add('active');
}

/* ────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────── */
const cDot  = document.getElementById('cDot');
const cRing = document.getElementById('cRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cDot.style.left = mx + 'px';
  cDot.style.top  = my + 'px';
});

(function tick() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  cRing.style.left = rx + 'px';
  cRing.style.top  = ry + 'px';
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a, button, .cv-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cRing.style.width   = '50px';
    cRing.style.height  = '50px';
    cRing.style.opacity = '.8';
  });
  el.addEventListener('mouseleave', () => {
    cRing.style.width   = '32px';
    cRing.style.height  = '32px';
    cRing.style.opacity = '.5';
  });
});

/* ────────────────────────────────────
   NAV SCROLL SHRINK
──────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ────────────────────────────────────
   REVEAL ON SCROLL (IntersectionObserver)
──────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('vis'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ────────────────────────────────────
   CV REQUEST MODAL
──────────────────────────────────── */
const mo = document.getElementById('modalOv');

document.getElementById('reqBtn').addEventListener('click', () => {
  mo.classList.add('open');
});
document.getElementById('modalClose').addEventListener('click', () => {
  mo.classList.remove('open');
});
mo.addEventListener('click', e => {
  if (e.target === mo) mo.classList.remove('open');
});

function sendReq() {
  const name  = document.getElementById('mName').value.trim();
  const email = document.getElementById('mEmail').value.trim();
  const msg   = document.getElementById('mMsg').value;

  const alerts = {
    ja: 'お名前とメールアドレスをご記入ください。',
    en: 'Please enter your name and email.',
    bn: 'আপনার নাম ও ইমেইল দিন।'
  };
  if (!name || !email) {
    alert(alerts[currentLang]);
    return;
  }

  const subjects = {
    ja: '履歴書・職務経歴書のご請求',
    en: 'Document Request — Resume/CV',
    bn: 'সিভি অনুরোধ'
  };

  const s = encodeURIComponent(subjects[currentLang]);
  const b = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:noptirashedull@gmail.com?subject=${s}&body=${b}`;
  mo.classList.remove('open');
}

/* ────────────────────────────────────
   INIT — default language: Japanese
──────────────────────────────────── */
setLang('ja');
