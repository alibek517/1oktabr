// ========================================================
// 1-OKTYABR: HAR BIR FAN UCHUN 100 TADAN ORTIQ MUKAMMAL TILAKLAR BAZASI
// ========================================================

const SUBJECTS_CONFIG = [
  { id: 'math', name: 'Matematika va Aniq fanlar', icon: '📐', desc: 'Mantiq, tenglamalar va cheksiz fazo ilmi', color: 'from-amber-500 to-yellow-600' },
  { id: 'literature', name: 'Ona tili va Adabiyot', icon: '📚', desc: 'So‘z durdonasi, ma’naviyat va she’riyat', color: 'from-emerald-500 to-teal-700' },
  { id: 'physics', name: 'Fizika va Astronomiya', icon: '⚡', desc: 'Koinot qonunlari, yorug‘lik va energiya', color: 'from-blue-600 to-indigo-800' },
  { id: 'chemistry', name: 'Kimyo va Biologiya', icon: '🧪', desc: 'Hayot kashfiyoti, tabiat va moddalar siri', color: 'from-purple-600 to-pink-700' },
  { id: 'languages', name: 'Xorijiy Tillar (Ingliz tili)', icon: '🌍', desc: 'Global dunyo, chet tillari va yangi ufqlar', color: 'from-sky-500 to-blue-700' },
  { id: 'it', name: 'Informatika va IT', icon: '💻', desc: 'Algoritmlar, dasturlash va raqamli kelajak', color: 'from-cyan-500 to-blue-600' },
  { id: 'history', name: 'Tarix va Geografiya', icon: '🗺️', desc: 'Buyuk ajdodlar ibrati, qit’alar va o‘lka tarixi', color: 'from-yellow-600 to-orange-700' },
  { id: 'primary', name: 'Boshlang‘ich Ta’lim', icon: '🧸', desc: 'Ilk qadam, mehr daryosi va ilk saboqlar', color: 'from-rose-500 to-red-600' },
  { id: 'sports', name: 'Jismoniy Tarbiya va Sport', icon: '🏆', desc: 'Iroda, matonat, sog‘lik va yuksak g‘alabalar', color: 'from-orange-500 to-amber-600' },
  { id: 'art', name: 'San’at va Musiqa', icon: '🎨', desc: 'Qalb ohanglari, ranglar jilosi va nafosat', color: 'from-fuchsia-500 to-purple-600' },
  { id: 'general', name: 'Barcha Fan Ustozlari Uchun', icon: '🌟', desc: 'Umumiy, chuqur falsafiy va ehtirom tilaklari', color: 'from-yellow-400 to-amber-500' }
];

// Fanlar bo'yicha maxsus hikmatlar, iboralar va 100+ boy tilaklar generatori
const BASE_WISH_TEMPLATES = {
  math: {
    titles: [
      "Mantiq va Cheksizlik Me’mori!", "Tenglamalar Yechuvchisi, Cheksiz Mehr Manbai!", 
      "Hayotimizning Eng Aniq Koordinatasi!", "Oltin Nisbat va Kamolot Timsoli!", 
      "Differensial Sabr va Integral Mehr Sohibi!", "Qalbi To‘g‘ri Burchakdek Qat’iy Ustoz!",
      "Ilmning Shohi Bo‘lgan Matematika Posboni!", "Yechimi Yo‘qdek Tuyulgan Masalalarning Yechuvchisi!",
      "Fazoviy Fikrlash va Yuksak Aql Chashmasi!", "Har Bir Natijani Isbotlagan Fidoyi Murabbiy!"
    ],
    quotes: [
      { q: "Matematika — fanlar shohi, ammo uning haqiqiy qiroli uni qalbga yetkaza olgan Ustozdir.", a: "K.F. Gauss" },
      { q: "Aqlning go‘zalligi va tartibi — matematikada mujassam.", a: "Rene Dekart" },
      { q: "Har bir murakkab masala orqasida oddiy va go‘zal haqiqat yotadi.", a: "Pifagor" },
      { q: "Matematika insonga to‘g‘ri fikrlashni va shubhalarni haqiqat bilan yengishni o‘rgatadi.", a: "Sharq donishmandligi" }
    ],
    phrases1: [
      "Siz bizga nafaqat murakkab tenglamalar, logarifmlar va integral sirlarini,",
      "Siz o‘rgatgan qat’iy mantiq, aksioma va teoremalar orqali,",
      "Har bir chiziq, vektor va geometrik shaklning mohiyatini tushuntirib,",
      "Hayotdagi eng chigal vaziyatlarning ham doimo to‘g‘ri yechimi borligini isbotlab,"
    ],
    phrases2: [
      "bizning tafakkurimizni kengaytirdingiz va hayotiy qiyinchiliklarga yechim topishga o‘rgatdingiz.",
      "ongimizda aniqlik, sabr-toqat va har bir qadamni chuqur o‘ylab bosish fazilatini shakllantirdingiz.",
      "hayotimiz koordinatalar tizimida faqat yuksak ijobiy natijalar sari intilishimizga yo‘l ochdingiz.",
      "shogirdlaringiz qalbida ilmga, haqiqatga va adolatga bo‘lgan cheksiz muhabbatni uyg‘otdingiz."
    ],
    phrases3: [
      "Sog‘ligingiz kvadratga oshsin, shodliklaringiz faktorial darajada ko‘paysin, qayg‘ularingiz esa doimo nolga tenglashsin!",
      "Hayotingizdagi barcha orzular tenglamasi faqat baxt va muvaffaqiyatga yechilsin! Bayramingiz qutlug‘ bo‘lsin!",
      "Sizga cheksiz sabr, mustahkam salomatlik va yangi ilmiy-pedagogik cho‘qqilarni zabt etishingizni tilaymiz!",
      "Oltin nisbatdek go‘zal, qat’iy teoremadek mustahkam hayotiy baxt doimo siz bilan bo‘lsin!"
    ]
  },

  literature: {
    titles: [
      "So‘z Durdonalarining Mohir Zargari!", "Qalb Satrlarini Bituvchi Muhtarama Ustoz!",
      "Ona Tilimizning Fidoiy Himoyachisi!", "Ma’naviyat Mash’ali va Adabiyot Charog‘i!",
      "Navoiy Saboqlarining Tirik Sadolari!", "Har Bir So‘ziga Jon Bag‘ishlagan Muallim!",
      "Adabiyot Ko‘zgusida Hayotni Anglatgan Zot!", "Qalbimiz Bog‘boni, So‘z Sehri Ustozi!",
      "Inson Ruhining Nozik Muhandisi!", "Qalbimizga Ma’rifat Nuri Sochgan Ustoz!"
    ],
    quotes: [
      { q: "Haq yo‘linda kim senga bir harf o‘rgatmish ranj ila, Aylamak bo‘lmas ado oning haqin yuz ganj ila.", a: "Alisher Navoiy" },
      { q: "Tilga e’tibor — elga e’tibor, so‘z qadrini bilgan — o‘z qadrini bilar.", a: "Alisher Navoiy" },
      { q: "Kitob o‘qigan inson minglab hayotlarni yashab o‘tadi.", a: "Adabiyot hikmati" }
    ],
    phrases1: [
      "Siz bizga ona tilimizning bitmas-tuganmas jozibasini, so‘zning buyuk qudratini,",
      "Alisher Navoiy, Bobur, Cho‘lpon va Abdulla Qodiriy kabi buyuk daho siymolar merosini,",
      "Har bir asar va she’r qa’riga yashiringan chuqur odamiylik, mehr va qadr fazilatlarini,",
      "Qalbimizni tozalovchi, vatanparvarlik va or-nomus tuyg‘usini uyg‘otuvchi adabiyot darslarini"
    ],
    phrases2: [
      "nihoyatda yuksak mahorat, jo‘shqin muhabbat va mehr ila qalbimizga jo qildingiz.",
      "o‘rgatib, bizni kitobni sevishga, inson dardini his qilishga va ma’naviy boy bo‘lishga yetakladingiz.",
      "shunday samimiyat bilan yetkazdingizki, har bir sabog‘ingiz hayotimiz uchun mayoqqa aylandi.",
      "ongimizga singdirib, so‘z qadrini anglash va or-nomus bilan yashash burchimiz ekanini ko‘rsatdingiz."
    ],
    phrases3: [
      "Qalamingiz hamisha o‘tkir, so‘zingiz keskir, qalbingiz esa doimo bahoriy tarovatda bo‘lsin! Bayramingiz muborak!",
      "Sizga dunyodagi eng ezgu tilaklarni, so‘nmas ilhom va xonadoningizga fayzu baraka tilaymiz!",
      "Yuzingizdan tabassum, so‘zlaringizdan mehr, hayotingizdan esa saodat aslo arimasin!",
      "Har bir shogirdingiz siz bilan g‘ururlanadi. Qadringiz doimo yuksak, martabangiz ulug‘ bo‘lsin!"
    ]
  },

  physics: {
    titles: [
      "Koinot Sirlari va Yorug‘lik Qonunining Kashfiyotchisi!", "Tabiatning Buyuk Qonunlarini Anglatgan Murabbiy!",
      "Nurlanuvchi Qalb va Cheksiz Energiya Manbai!", "Tortishish Kuchidan Yuksakroq Mehr Sohibi!",
      "Olamning Nozik Muvozanatini Tushuntirgan Zot!", "Eynshteyn Tafakkuri va Nyuton Sabri Egasi!",
      "Kinetik Quvvat va Yuksak Ilm Mayoqi!", "Galaktikalar Va Atomlar Olami Rahbari!"
    ],
    quotes: [
      { q: "Tabiat kitobi matematika va fizika tilida yozilgandir.", a: "Galileo Galiley" },
      { q: "Tasavvur bilimdan ko‘ra muhimroqdir, chunki bilim cheklangan, tasavvur esa butun dunyoni qamrab oladi.", a: "Albert Eynshteyn" }
    ],
    phrases1: [
      "Siz bizga yorug‘likning tarqalishi, energiyaning saqlanish qonunlari va koinotning cheksiz kengliklarini,",
      "Tabiatdagi har bir kuchning o‘z ta’siri va harakat qonuniyatlari borligini,",
      "Elementar zarralardan tortib butun osmon jismlarining uyg‘unligini,",
      "Qiyinchiliklar qarshisida inertsiya bilan to‘xtab qolmasdan, doim oldinga intilish formulasini"
    ],
    phrases2: [
      "sabr-toqat va chuqur amaliy misollar bilan ko‘rsatib berdingiz.",
      "anglatib, tafakkurimizda ilmiy izlanish va kashfiyotga bo‘lgan buyuk chanqoqlikni uyg‘otdingiz.",
      "o‘rgatish bilan birga, inson irodasining naqadar qudratli ekanini isbotladingiz.",
      "qalbimizga singdirib, hayotda faqat yorug‘lik va yaxshilik taratuvchi inson bo‘lishga undadingiz."
    ],
    phrases3: [
      "Sizning hayotingizdagi potensial energiya doimo eng quvonchli kinetik baxtga aylansin!",
      "Koinotdagi eng porloq yulduzlardan-da yorug‘ bo‘lib, el ardog‘ida doimo sog‘-salomat yuring!",
      "Sizga cheksiz quvvat, so‘nmas shijoat va ilmiy-pedagogik faoliyatingizda zafarlar tilaymiz!",
      "1-oktyabr bayramingiz qutlug‘ bo‘lsin, barcha shogirdlaringiz nomidan ta’zimdamiz!"
    ]
  },

  chemistry: {
    titles: [
      "Hayot Zanjirining Mohir Sintezatori!", "Elementlar Jadvalini Qalbga Joylagan Ustoz!",
      "Mehru Muhabbatning Sof Reaksiyasi Muallifi!", "Tiriklik va Tabiat Sirlarining Zukko Zargari!",
      "DNK Kodlaridan Tortib Katta Hayotgacha Saboq Bergan Zot!", "Organik Mehr va Beg‘ubor Qalb Sohibi!"
    ],
    quotes: [
      { q: "Tabiat — eng buyuk laboratoriyadir, uni tushungan inson esa mo‘jizalar guvohi bo‘ladi.", a: "M.V. Lomonosov" },
      { q: "Har bir tirik hujayra ortida buyuk hayot falsafasi yotadi.", a: "Biologiya hikmati" }
    ],
    phrases1: [
      "Siz bizga kimyoviy elementlar davriy jadvalini, moddalar o‘zgarishini va tirik hujayralar sirlarini,",
      "Tabiatdagi har bir biologik uyg‘unlik va ekologik muvozanatning qadrini,",
      "Murakkab organik sintezlarni va tiriklikning molekulyar asoslarini,",
      "Hayotning o‘zi doimiy yangilanish va ezgu o‘zgarishlardan iborat ekanini"
    ],
    phrases2: [
      "shunday hayratomuz va qiziqarli qilib tushuntirdingizki, har bir saboq mo‘jizaga aylandi.",
      "o‘rgatish orqali tabiatni sevish, har bir tirik jonga mehr ko‘zi bilan qarash tuyg‘usini tarbiyaladingiz.",
      "anglatib, inson qalbida doimo poklik va olijanoblik fazilatlari ustun bo‘lishi lozimligini ko‘rsatdingiz.",
      "ko‘rsatib, bizni izlanish, yaratuvchanlik va qat’iyatli bo‘lishga ilhomlantirdingiz."
    ],
    phrases3: [
      "Sizning sabringiz doimo eng yorqin natijalarga katalizator bo‘lsin, hayotingiz esa musaffo bo‘lsin!",
      "Salomatligingiz eng mustahkam kovalent bog‘lardek mustahkam, quvonchlaringiz esa behad bo‘lsin!",
      "Bayramingiz bilan qutlaymiz! Oilangizga tinchlik, o‘zingizga mustahkam sog‘liq tilaymiz!",
      "Tiriklik nuri sizni aslo tark etmasin, mehnatingiz mevasi doimo ko‘zingizni quvontirsin!"
    ]
  },

  languages: {
    titles: [
      "Dunyoni Bizga Ochgan Global Murabbiy!", "Chegarasiz Olam Eshiklarining Kaliti!",
      "Jahon Madaniyatlari Ko‘prigini Qurguvchi Ustoz!", "Har Bir Til — Yangi Qalb Ekanini Anglatgan Zot!",
      "Global Fikrlovchi Yangi Avlod Ustozi!", "Xorijiy Tillar Ziyosi Bilan Qurollantirgan Fidoyi!"
    ],
    quotes: [
      { q: "To have another language is to possess a second soul.", a: "Charlemagne" },
      { q: "Til bilgan — el bilar, dunyo kezib yo‘l topar.", a: "Xalq maqoli" },
      { q: "Knowledge of languages is the doorway to wisdom.", a: "Roger Bacon" }
    ],
    phrases1: [
      "Siz bizga xorijiy tillarni o‘rgatish orqali xalqaro minbarlar, yangi imkoniyatlar va dunyo madaniyatini,",
      "Har bir grammatik qoida, so‘z boyligi va to‘g‘ri talaffuz sirlarini,",
      "Chet el adabiyotlarini o‘z tilida o‘qish va jahon miqyosida fikrlash ko‘nikmalarini,",
      "Har bir yangi til inson dunyoqarashini o‘n karra kengaytirishini"
    ],
    phrases2: [
      "beminnat va cheksiz sabr bilan o‘rgatib, bizga global qanot baxsh etdingiz.",
      "singdirib, har qanday davlatda o‘zimizni ishonchli his qilishimizga zamin yaratdingiz.",
      "o‘rgatib, dunyo bo‘ylab o‘z so‘zimizni ayta oladigan yetuk inson bo‘lishimizga sababchi bo‘ldingiz.",
      "ko‘rsatib, bizni xalqaro maydonlarda Vatanimiz bayrog‘ini yuksaltirishga ilhomlantirdingiz."
    ],
    phrases3: [
      "Thank you for your endless dedication! May your life be full of happiness, great achievements, and joy!",
      "Dunyodagi barcha tillarda aytiladigan eng samimiy rahmatlarimiz sizga bo‘lsin! Bayramingiz qutlug‘ bo‘lsin!",
      "Sizga mustahkam sog‘liq, cheksiz sayohatlar, yangi yutuqlar va bitmas-tuganmas quvonch tilaymiz!",
      "Happy Teachers' Day! Har bir shogirdingiz erishgan global yutuqlar sizning mehnatingiz mevasidir!"
    ]
  },

  it: {
    titles: [
      "Kelajak Algoritmlarining Buyuk Me’mori!", "Raqamli Dunyo Ziyoratgohi va Kodlash Ustasi!",
      "Tizimli Tafakkur va Yangi Texnologiyalar Mayog‘i!", "Sun’iy Intellekt Asrining Haqiqiy Daho Murabbiysi!",
      "Xatolarni To‘g‘rilashni va Toza Kod Yozishni O‘rgatgan Ustoz!", "Innovatsiyalar Va Mantiqiy Fikrlash Chashmasi!"
    ],
    quotes: [
      { q: "First, solve the problem. Then, write the code.", a: "John Johnson" },
      { q: "Eng buyuk dastur — inson miyasi va qalbidagi ezgu algoritmdir.", a: "Raqamli hikmat" }
    ],
    phrases1: [
      "Siz bizga nollar va birlardan iborat raqamli olamda yuksak loyihalar yaratishni,",
      "Har qanday murakkab masalani bosqichma-bosqich algoritmlarga bo‘lib hal qilishni,",
      "Zamonaviy texnologiyalar, dasturlash tillari va ma’lumotlar bazasi mohiyatini,",
      "Texnologiya orqali insonlar hayotini yengillashtirish va dunyoni yaxshiroq qilishni"
    ],
    phrases2: [
      "shijoat, sabr va eng zamonaviy bilimlar bilan tushuntirib berdingiz.",
      "o‘rgatib, bizda mantiqiy, analitik va ijodiy fikrlash qobiliyatini yuksak darajada shakllantirdingiz.",
      "singdirib, kelajak kasblarini ishonch bilan egallashimizga mustahkam poydevor qo‘ydingiz.",
      "anglatib, har bir satr kod ortida mas’uliyat va fidoyilik yotishini ko‘rsatdingiz."
    ],
    phrases3: [
      "Hayotingizda hech qanday xatolik (bug) uchramasin, barcha maqsadlaringiz 200 OK bilan yakunlansin!",
      "Serverlaringiz ham, sihat-salomatligingiz ham doimo 100% barqaror (uptime) bo‘lsin!",
      "Sizga cheksiz ijodiy quvvat, yirik innovatsion loyihalar va ulkan moddiy-ma’naviy yuksalishlar tilaymiz!",
      "Bayramingiz muborak bo‘lsin, aziz va qadrli IT ustozi!"
    ]
  },

  history: {
    titles: [
      "O‘tmish Ibratidan Kelajak Poydevorini Qurguvchi!", "Tarix Zarvaraqlarini Jonlantirgan Zukko Ustoz!",
      "Buyuk Ajdodlar Jasoratini Qalbga Singdirgan Murabbiy!", "Dunyo Xaritasini va Yurt Sevgisini Anglatgan Zot!",
      "Sivilizatsiyalar Sabog‘i va Milliy G‘urur Me’mori!", "Tarixiy Haqiqat va Vatanparvarlik Chashmasi!"
    ],
    quotes: [
      { q: "O‘z tarixini bilmagan xalqning kelajagi bo‘lmaydi.", a: "Amir Temur hikmatlari" },
      { q: "Geografiya — yer yuzining go‘zalligi, tarix esa insoniyat ruhiyatidir.", a: "Sharq donishmandi" }
    ],
    phrases1: [
      "Siz bizga Amir Temur, Mirzo Ulug‘bek, Jaloliddin Manguberdi kabi ulug‘ zotlar qahramonligini,",
      "Dunyo xaritasidagi har bir qit’a, tog‘, daryo va okeanlarning betakror tabiatini,",
      "Asrlar osha o‘tgan sivilizatsiyalar yuksalishi va inqirozi sabablarini,",
      "Vatan tuprog‘ining har qarichi muqaddas ekanini va uni asrash burchimizligini"
    ],
    phrases2: [
      "jonli, ta’sirli va faxr-iftixor tuyg‘usi ila yetkazib berdingiz.",
      "ko‘rsatib, bizning qalbimizda o‘z yurtimiz va ajdodlarimiz bilan faxrlanish hissiyotini jo‘sh urdirdingiz.",
      "tahlil qilib, o‘tmish xatolaridan to‘g‘ri xulosa chiqarib yashash zarurligini uqtirdingiz.",
      "anglatib, milliy g‘urur va vatanparvarlik tuyg‘usini butun vujudimizga singdirdingiz."
    ],
    phrases3: [
      "Sizning xizmatingiz xalqimiz tarixida zarhal harflar bilan muhrlanishga loyiqdir!",
      "Doimo o‘tmishdek salobatli, kelajakdek porloq va el ardog‘ida bo‘lib yuring!",
      "Mustahkam sog‘liq, cheksiz hurmat va uzoq, sermazmun umr tilaymiz! Bayramingiz qutlug‘ bo‘lsin!",
      "Shogirdlaringiz har doim siz ko‘rsatgan tarixiy va geografik saboqlarni ehtirom bilan yodda saqlaydi!"
    ]
  },

  primary: {
    titles: [
      "Ilk Harfni O‘rgatgan Ikkinchi Onamiz / Otamiz!", "Maktab Ostonasida Qalbimizni Tutgan Mehribon Zot!",
      "Ilm Olami Sari Ilk Qadamlar Rahbari!", "Sabr-Toqati Ummon, Mehri Daryo Ilk Ustozim!",
      "Beg‘ubor Bolalik Qalblarining Muhtaram Tarbiyachisi!", "Ona va Vatan So‘zini Yozdirgan Muqaddas Muallim!"
    ],
    quotes: [
      { q: "Ilk qadamni qo‘ygan qo‘llarimizni mehr bilan tutgan zot — Muallimdir.", a: "Qalb sadosi" },
      { q: "Bolaga mehr bilan berilgan ilk saboq butun umrga nur bag‘ishlaydi.", a: "Hikmat" }
    ],
    phrases1: [
      "Maktab ostonasiga qo‘rquv va hayajon bilan qadam qo‘yganimizda bizni mehr bilan kutib olganingizni,",
      "Daftarimizga ilk qalam tebratishni, harflarni chiroyli yozishni va kitob o‘qishni,",
      "Bir-birimizga do‘st bo‘lishni, kattalarni hurmat qilishni va to‘g‘riso‘zlikni,",
      "Onalarcha / otalarcha sabr bilan har birimizning injiqliklarimizni ko‘targaningizni"
    ],
    phrases2: [
      "butun umr hech qachon unutmaymiz va sizga cheksiz minnatdorchilik bildiramiz.",
      "o‘rgatib, bizga katta hayotning eng pishiq va mustahkam poydevorini qo‘yib berdingiz.",
      "qalbimizga muhrlab, bizni yuksak insoniy fazilatlar bilan qurollantirdingiz.",
      "eslaganimizda ko‘zimizga quvonch va minnatdorchilik yoshlari keladi."
    ],
    phrases3: [
      "Mehribon ustozim, sizga dunyodagi eng toza baxt, mustahkam sog‘liq va uzoq umr tilaymiz!",
      "Siz bergan ilk mehr nuri butun umrimiz yo‘llarini yoritib turadi! Bayramingiz muborak bo‘lsin!",
      "Har bir shogirdingiz yutug‘ida sizning mehnatingiz bor. Doimo sog‘-omon bo‘ling!",
      "Yuzingizdan nur, qalbingizdan xotirjamlik hech qachon arimasin, aziz ilk muallimim!"
    ]
  },

  sports: {
    titles: [
      "Iroda, Matonat va G‘alaba Ruhiyatini Shakllantirgan Murabbiy!", "Yengilmas Shijoat va Kuch-G‘ayrat Timsoli!",
      "Chempionlar Tarbiyachisi va Qat’iyat Mayog‘i!", "Haqiqiy Sportchilik Odobini O‘rgatgan Ustoz!",
      "Mag‘lubiyatda Boshni Tik Tutib, G‘alaba Sari Intiltirgan Murabbiy!", "Sog‘lom Tanda Sog‘lom Aql Me’mori!"
    ],
    quotes: [
      { q: "G‘alaba — faqat jismoniy kuchda emas, eng avvalo qat’iyat va ruhning mustahkamligidadir.", a: "Sport falsafasi" },
      { q: "Chempionlar mashg‘ulot zallarida, fidoiy murabbiy mehnati bilan kamol topadi.", a: "Olimpiya shiori" }
    ],
    phrases1: [
      "Siz bizga nafaqat chaqqonlik, kuch-quvvat va jismoniy chidamlilikni,",
      "Har qanday qiyinchilik oldida taslim bo‘lmaslikni, intizom va temir irodani,",
      "Jamoaviy birdamlik, halol bellashuv va raqibga ehtirom ko‘rsatish qoidalarini,",
      "Mashg‘ulot zallaridagi har bir tomchi ter va mehnat yuksak g‘alabalarga olib kelishini"
    ],
    phrases2: [
      "o‘rgatib, hayot maydonida ham mard va qat’iyatli bo‘lishimizni ta’minladingiz.",
      "tarbiyalab, bizda hech qachon chekinmaydigan chempionlik xarakterini hosil qildingiz.",
      "uqtirib, inson har doim o‘z ustida ishlashi zarurligini shaxsiy ibratingiz bilan ko‘rsatdingiz.",
      "isbotlab, orzularimiz sari dadil va qo‘rqmasdan intilishga o‘rgatdingiz."
    ],
    phrases3: [
      "Sizga po‘latdek baquvvat sog‘lik, bitmas-tuganmas quvvat va yangi chempion shogirdlar tilaymiz!",
      "Shogirdlaringiz jahon shohsupalarida Vatanimiz bayrog‘ini doimo baland ko‘tarishsin! Bayramingiz bilan!",
      "Hayot degan katta musobaqada doimo eng oliy o‘rinlar sizga nasib etsin! Qutlug‘ bo‘lsin!",
      "Murabbiylik sharafingiz doimo yuksak bo‘lsin, barcha shogirdlaringiz nomidan tashakkur!"
    ]
  },

  art: {
    titles: [
      "Go‘zallik va Qalb Ohanglarini Hadyo Etgan Zot!", "Ranglar Jilosi va Nafosat Maktabi Ustozi!",
      "Qalbga Orom Beruvchi Mo‘jizakor San’atkor!", "Oq Qog‘ozga Jon Bag‘ishlagan Ijodkor Murabbiy!",
      "Musiqa Notalarida Ezgulik Kuylagan Zukko Muallim!", "Dunyoning Nozik Go‘zalligini Ko‘rsatgan Ustoz!"
    ],
    quotes: [
      { q: "Musiqa va san’at — so‘z ojiz qolgan joyda qalb tilida so‘zlashadi.", a: "L.V. Betxoven" },
      { q: "Ranglar — qalb tuyg‘ularining ko‘zgusidir.", a: "San’at hikmati" }
    ],
    phrases1: [
      "Siz bizga ranglarning sehrli jilosini, tabiat go‘zalligini oq qog‘ozda jonlantirishni,",
      "Musiqa asboblari ohangida qalb kechinmalarini ifoda etishni va ezgulikni kuylashni,",
      "Har bir chiziq, bo‘yoq va notada yashiringan buyuk falsafani his qilishni,",
      "Inson ruhiga sokinlik, hayrat va quvonch baxsh etuvchi san’at olamini"
    ],
    phrases2: [
      "mo‘’jizakor mahorat bilan o‘rgatib, dunyoni yanada chiroyliroq ko‘rishimizga sababchi bo‘ldingiz.",
      "singdirib, qalbimizni qo‘pollikdan xoli, nozik va samimiy tuyg‘ular bilan to‘ldirdingiz.",
      "anglatib, har bir shogirdingizda o‘ziga xos ijodiy qobiliyatni kashf etdingiz.",
      "ochib berib, hayotimizni rang-barang va ohangdor qilishimizga zamin yaratdingiz."
    ],
    phrases3: [
      "Hayotingiz eng yorqin, iliq ranglar va quvnoq ohanglar bilan to‘lib-toshsin!",
      "Ijodiy parvozingiz aslo to‘xtamasin, ilhomingiz doimo baland bo‘lsin! Bayramingiz qutlug‘ bo‘lsin!",
      "Sizga bitmas-tuganmas ma’naviy xotirjamlik, go‘zal hayot va mustahkam sog‘liq tilaymiz!",
      "Qalbingizdagi musiqiy tarovat va mehr nuri hech qachon so‘nmasin, aziz ustoz!"
    ]
  },

  general: {
    titles: [
      "Qalbimiz Quyoshi, Aziz va Muhtaram Ustozim!", "Ma’rifat Mash’ali va Hayot Mayoqi!",
      "Sizga Ehtirom — Bizning Muqaddas Burchimiz!", "Katta Hayot Maktabining Buyuk Bog‘boni!",
      "Qalbi Daryo, Sabri Ummon Mehribon Murabbiy!", "Mangu Yongan Sham Timsoli Bo‘lgan Fidoyi!",
      "Har Bir Qadami Ibrat, So‘zi Dastur Ustoz!", "Yurtimiz Faxri, Ziyo Taratuvchi Muallim!"
    ],
    quotes: [
      { q: "Haq yo‘linda kim senga bir harf o‘rgatmish ranj ila, Aylamak bo‘lmas ado oning haqin yuz ganj ila.", a: "Alisher Navoiy" },
      { q: "Ustoz mehnati — shamga o‘xshaydi: o‘zi erib, boshqalarga nur taratadi.", a: "Sharq donishmandligi" },
      { q: "Dunyoda eng buyuk boylik — aql va bilim, unga yetaklovchi eng ulug‘ zot esa — Muallimdir.", a: "Abu Ali ibn Sino" },
      { q: "O‘qituvchi — inson ruhining eng nozik muhandisidir.", a: "Hikmatlar durdonasi" }
    ],
    phrases1: [
      "Muhtaram va qadrli ustoz! Siz bizga nafaqat bilim va fan sirlarini, balki insoniylik, sabr, halollik va or-nomus fazilatlarini,",
      "Dunyoda minglab kasblar bor, ammo ularning barchasini yaratuvchisi va kamolotga yetkazuvchisi siz — Ustozsiz! Sizning,",
      "Qanchadan-qancha yoshlarning orzulariga qanot bog‘ladingiz, ularni o‘z kuchiga ishontirdingiz va to‘g‘ri yo‘lga boshladingiz. Sizning,",
      "Siz bergan har bir saboq hayotimiz uchun mayoq, har bir o‘gitingiz kelajagimiz uchun kompas bo‘ldi. Sizning tinimsiz mehnatingiz,"
    ],
    phrases2: [
      "qarshisida butun vujudimiz bilan ta’zim qilamiz va mehnatingizni yuksak qadrlaymiz.",
      "sabringiz, mehringiz va fidoiyligingiz hech qachon unutilmaydi, doimo qalbimiz ardog‘ida yashaydi.",
      "shogirdlar yutug‘idan o‘zingiznikidek quvonganingiz, har bir o‘quvchiga o‘z farzandingizdek qaraganingiz tahsinga loyiqdir.",
      "sharofati bilan bugun jamiyatda o‘z o‘rnimizni topib, yurtimiz ravnaqiga hissa qo‘shmoqdamiz."
    ],
    phrases3: [
      "1-oktyabr — O‘qituvchi va murabbiylar kuni bilan chin dildan muborakbod etamiz! Sizga mustahkam sog‘liq, oilaviy baxt va cheksiz ehtirom tilaymiz!",
      "Yuzingizdan tabassum, qalbingizdan xotirjamlik, xonadoningizdan fayzu baraka aslo arimasin! Umringiz uzoq va fayzli bo‘lsin!",
      "Doimo el ardog‘ida, shogirdlar e’zozida bo‘ling! Bayramingiz qutlug‘ va esda qolarli bo‘lsin!",
      "Sizdek buyuk va fidoiy zotga har qancha ta’zim qilsak oz. Ilohim, doimo sog‘-omon bo‘ling!"
    ]
  }
};

// Har bitta fan uchun dinamik ravishda kamida 100 ta to'liq, takrorlanmas, mukammal tilak generatsiya qiluvchi tizim
const GENERATED_WISHES_BY_SUBJECT = {};

(function generateAllSubjectWishes() {
  SUBJECTS_CONFIG.forEach(subj => {
    const list = [];
    const tpl = BASE_WISH_TEMPLATES[subj.id] || BASE_WISH_TEMPLATES.general;

    let idCounter = 1;
    // Har bir kombinatsiyani tuzamiz: titles x quotes x phrases1 x phrases2 x phrases3
    for (let t = 0; t < tpl.titles.length; t++) {
      for (let p1 = 0; p1 < tpl.phrases1.length; p1++) {
        for (let p2 = 0; p2 < tpl.phrases2.length; p2++) {
          for (let p3 = 0; p3 < tpl.phrases3.length; p3++) {
            if (list.length >= 105) break; // Har bir fan uchun kamida 100+ ta

            const quoteObj = tpl.quotes[(t + p1 + p2 + p3) % tpl.quotes.length];
            const title = tpl.titles[t];
            const text = `${tpl.phrases1[p1]} ${tpl.phrases2[p2]} ${tpl.phrases3[p3]}`;

            list.push({
              id: `${subj.id}_${idCounter++}`,
              subjectId: subj.id,
              subjectName: subj.name,
              icon: subj.icon,
              title: title,
              quote: quoteObj.q,
              author: quoteObj.a,
              text: text,
              signature: "Sizni cheksiz qadrlovchi shogirdingiz nomidan"
            });
          }
          if (list.length >= 105) break;
        }
        if (list.length >= 105) break;
      }
      if (list.length >= 105) break;
    }

    GENERATED_WISHES_BY_SUBJECT[subj.id] = list;
  });
})();

// Boshlang'ich tasodifiy tilak olish uchun yordamchi funksiya
function getRandomWishForSubject(subjectId) {
  const wishes = GENERATED_WISHES_BY_SUBJECT[subjectId] || GENERATED_WISHES_BY_SUBJECT.general;
  const randomIndex = Math.floor(Math.random() * wishes.length);
  return wishes[randomIndex];
}
