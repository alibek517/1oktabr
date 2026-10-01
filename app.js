/* ========================================================
   1-OKTYABR USTOZ VA MURABBIYLAR KUNI - ASOSIY ILOVA (app.js)
   ======================================================== */

// --- 1. FANLAR RO'YXATI ---
const SUBJECTS_CONFIG = [
  { id: 'math', name: 'Matematika va Aniq fanlar', icon: '📐', desc: 'Mantiq, tenglamalar va cheksiz fazo ilmi' },
  { id: 'literature', name: 'Ona tili va Adabiyot', icon: '📚', desc: 'So‘z durdonasi, ma’naviyat va she’riyat' },
  { id: 'physics', name: 'Fizika va Astronomiya', icon: '⚡', desc: 'Koinot qonunlari, yorug‘lik va energiya' },
  { id: 'chemistry', name: 'Kimyo va Biologiya', icon: '🧪', desc: 'Hayot kashfiyoti, tabiat va moddalar siri' },
  { id: 'languages', name: 'Xorijiy Tillar (Ingliz tili)', icon: '🌍', desc: 'Global dunyo, chet tillari va yangi ufqlar' },
  { id: 'it', name: 'Informatika va IT', icon: '💻', desc: 'Algoritmlar, dasturlash va raqamli kelajak' },
  { id: 'history', name: 'Tarix va Geografiya', icon: '🗺️', desc: 'Buyuk ajdodlar ibrati, qit’alar va o‘lka tarixi' },
  { id: 'primary', name: 'Boshlang‘ich Ta’lim', icon: '🧸', desc: 'Ilk qadam, mehr daryosi va ilk saboqlar' },
  { id: 'sports', name: 'Jismoniy Tarbiya va Sport', icon: '🏆', desc: 'Iroda, matonat, sog‘lik va yuksak g‘alabalar' },
  { id: 'art', name: 'San’at va Musiqa', icon: '🎨', desc: 'Qalb ohanglari, ranglar jilosi va nafosat' },
  { id: 'general', name: 'Barcha Fan Ustozlari Uchun', icon: '🌟', desc: 'Umumiy, chuqur falsafiy va ehtirom tilaklari' }
];

// --- 2. HAR BIR FAN UCHUN 100+ MUKAMMAL TILAKLAR SHABLONLARI ---
const BASE_TEMPLATES = {
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
      { q: "Har bir murakkab masala orqasida oddiy va go‘zal haqiqat yotadi.", a: "Pifagor" }
    ],
    p1: [
      "Siz bizga nafaqat murakkab tenglamalar, logarifmlar va integral sirlarini,",
      "Siz o‘rgatgan qat’iy mantiq, aksioma va teoremalar orqali,",
      "Har bir chiziq, vektor va geometrik shaklning mohiyatini tushuntirib,",
      "Hayotdagi eng chigal vaziyatlarning ham doimo to‘g‘ri yechimi borligini isbotlab,"
    ],
    p2: [
      "bizning tafakkurimizni kengaytirdingiz va hayotiy qiyinchiliklarga to‘g‘ri yechim topishga o‘rgatdingiz.",
      "ongimizda aniqlik, sabr-toqat va har bir qadamni chuqur o‘ylab bosish fazilatini shakllantirdingiz.",
      "hayotimiz koordinatalar tizimida faqat yuksak ijobiy natijalar sari intilishimizga yo‘l ochdingiz.",
      "shogirdlaringiz qalbida ilmga, haqiqatga va adolatga bo‘lgan cheksiz muhabbatni uyg‘otdingiz."
    ],
    p3: [
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
      "Adabiyot Ko‘zgusida Hayotni Anglatgan Zot!", "Qalbimiz Bog‘boni, So‘z Sehri Ustozi!"
    ],
    quotes: [
      { q: "Haq yo‘linda kim senga bir harf o‘rgatmish ranj ila, Aylamak bo‘lmas ado oning haqin yuz ganj ila.", a: "Alisher Navoiy" },
      { q: "Tilga e’tibor — elga e’tibor, so‘z qadrini bilgan — o‘z qadrini bilar.", a: "Alisher Navoiy" }
    ],
    p1: [
      "Siz bizga ona tilimizning bitmas-tuganmas jozibasini, so‘zning buyuk qudratini,",
      "Alisher Navoiy, Bobur, Cho‘lpon va Abdulla Qodiriy kabi buyuk daho siymolar merosini,",
      "Har bir asar va she’r qa’riga yashiringan chuqur odamiylik, mehr va qadr fazilatlarini,",
      "Qalbimizni tozalovchi, vatanparvarlik va or-nomus tuyg‘usini uyg‘otuvchi adabiyot darslarini"
    ],
    p2: [
      "nihoyatda yuksak mahorat, jo‘shqin muhabbat va mehr ila qalbimizga jo qildingiz.",
      "o‘rgatib, bizni kitobni sevishga, inson dardini his qilishga va ma’naviy boy bo‘lishga yetakladingiz.",
      "shunday samimiyat bilan yetkazdingizki, har bir sabog‘ingiz hayotimiz uchun mayoqqa aylandi.",
      "ongimizga singdirib, so‘z qadrini anglash va or-nomus bilan yashash burchimiz ekanini ko‘rsatdingiz."
    ],
    p3: [
      "Qalamingiz hamisha o‘tkir, so‘zingiz keskir, qalbingiz esa doimo bahoriy tarovatda bo‘lsin! Bayramingiz muborak!",
      "Sizga dunyodagi eng ezgu tilaklarni, so‘nmas ilhom va xonadoningizga fayzu baraka tilaymiz!",
      "Yuzingizdan tabassum, so‘zlaringizdan mehr, hayotingizdan esa saodat aslo arimasin!",
      "Har bir shogirdingiz siz bilan faxrlanadi. Qadringiz doimo yuksak, martabangiz ulug‘ bo‘lsin!"
    ]
  },
  physics: {
    titles: [
      "Koinot Sirlari va Yorug‘lik Qonunining Kashfiyotchisi!", "Tabiatning Buyuk Qonunlarini Anglatgan Murabbiy!",
      "Nurlanuvchi Qalb va Cheksiz Energiya Manbai!", "Tortishish Kuchidan Yuksakroq Mehr Sohibi!",
      "Olamning Nozik Muvozanatini Tushuntirgan Zot!", "Eynshteyn Tafakkuri va Nyuton Sabri Egasi!"
    ],
    quotes: [
      { q: "Tabiat kitobi matematika va fizika tilida yozilgandir.", a: "Galileo Galiley" },
      { q: "Tasavvur bilimdan ko‘ra muhimroqdir.", a: "Albert Eynshteyn" }
    ],
    p1: [
      "Siz bizga yorug‘likning tarqalishi, energiyaning saqlanish qonunlari va koinotning cheksiz kengliklarini,",
      "Tabiatdagi har bir kuchning o‘z ta’siri va harakat qonuniyatlari borligini,",
      "Elementar zarralardan tortib butun osmon jismlarining uyg‘unligini,",
      "Qiyinchiliklar qarshisida inertsiya bilan to‘xtab qolmasdan, doim oldinga intilish formulasini"
    ],
    p2: [
      "sabr-toqat va chuqur amaliy misollar bilan ko‘rsatib berdingiz.",
      "anglatib, tafakkurimizda ilmiy izlanish va kashfiyotga bo‘lgan buyuk chanqoqlikni uyg‘otdingiz.",
      "o‘rgatish bilan birga, inson irodasining naqadar qudratli ekanini isbotladingiz.",
      "qalbimizga singdirib, hayotda faqat yorug‘lik va yaxshilik taratuvchi inson bo‘lishga undadingiz."
    ],
    p3: [
      "Sizning hayotingizdagi potensial energiya doimo eng quvonchli kinetik baxtga aylansin!",
      "Koinotdagi eng porloq yulduzlardan-da yorug‘ bo‘lib, el ardog‘ida doimo sog‘-salomat yuring!",
      "Sizga cheksiz quvvat, so‘nmas shijoat va ilmiy-pedagogik faoliyatingizda zafarlar tilaymiz!",
      "1-oktyabr bayramingiz qutlug‘ bo‘lsin, barcha shogirdlaringiz nomidan ta’zimdamiz!"
    ]
  },
  chemistry: {
    titles: [
      "Hayot Zanjirining Mohir Sintezatori!", "Elementlar Jadvalini Qalbga Joylagan Ustoz!",
      "Mehru Muhabbatning Sof Reaksiyasi Muallifi!", "Tiriklik va Tabiat Sirlarining Zukko Zargari!"
    ],
    quotes: [
      { q: "Tabiat — eng buyuk laboratoriyadir, uni tushungan inson esa mo‘jizalar guvohi bo‘ladi.", a: "M.V. Lomonosov" }
    ],
    p1: [
      "Siz bizga kimyoviy elementlar davriy jadvalini, moddalar o‘zgarishini va tirik hujayralar sirlarini,",
      "Tabiatdagi har bir biologik uyg‘unlik va ekologik muvozanatning qadrini,",
      "Murakkab organik sintezlarni va tiriklikning molekulyar asoslarini,"
    ],
    p2: [
      "shunday hayratomuz va qiziqarli qilib tushuntirdingizki, har bir saboq mo‘jizaga aylandi.",
      "o‘rgatish orqali tabiatni sevish, har bir tirik jonga mehr ko‘zi bilan qarash tuyg‘usini tarbiyaladingiz.",
      "anglatib, inson qalbida doimo poklik va olijanoblik fazilatlari ustun bo‘lishi lozimligini ko‘rsatdingiz."
    ],
    p3: [
      "Sizning sabringiz doimo eng yorqin natijalarga katalizator bo‘lsin, hayotingiz esa musaffo bo‘lsin!",
      "Salomatligingiz eng mustahkam kovalent bog‘lardek mustahkam, quvonchlaringiz esa behad bo‘lsin!",
      "Bayramingiz bilan qutlaymiz! Oilangizga tinchlik, o‘zingizga mustahkam sog‘liq tilaymiz!"
    ]
  },
  languages: {
    titles: [
      "Dunyoni Bizga Ochgan Global Murabbiy!", "Chegarasiz Olam Eshiklarining Kaliti!",
      "Jahon Madaniyatlari Ko‘prigini Qurguvchi Ustoz!", "Har Bir Til — Yangi Qalb Ekanini Anglatgan Zot!"
    ],
    quotes: [
      { q: "To have another language is to possess a second soul.", a: "Charlemagne" },
      { q: "Til bilgan — el bilar, dunyo kezib yo‘l topar.", a: "Xalq maqoli" }
    ],
    p1: [
      "Siz bizga xorijiy tillarni o‘rgatish orqali xalqaro minbarlar, yangi imkoniyatlar va dunyo madaniyatini,",
      "Har bir grammatik qoida, so‘z boyligi va to‘g‘ri talaffuz sirlarini,",
      "Chet el adabiyotlarini o‘z tilida o‘qish va jahon miqyosida fikrlash ko‘nikmalarini,"
    ],
    p2: [
      "beminnat va cheksiz sabr bilan o‘rgatib, bizga global qanot baxsh etdingiz.",
      "singdirib, har qanday davlatda o‘zimizni ishonchli his qilishimizga zamin yaratdingiz.",
      "o‘rgatib, dunyo bo‘ylab o‘z so‘zimizni ayta oladigan yetuk inson bo‘lishimizga sababchi bo‘ldingiz."
    ],
    p3: [
      "Thank you for your endless dedication! May your life be full of happiness, great achievements, and joy!",
      "Dunyodagi barcha tillarda aytiladigan eng samimiy rahmatlarimiz sizga bo‘lsin! Bayramingiz qutlug‘ bo‘lsin!",
      "Sizga mustahkam sog‘liq, cheksiz sayohatlar, yangi yutuqlar va bitmas-tuganmas quvonch tilaymiz!"
    ]
  },
  it: {
    titles: [
      "Kelajak Algoritmlarining Buyuk Me’mori!", "Raqamli Dunyo Ziyoratgohi va Kodlash Ustasi!",
      "Tizimli Tafakkur va Yangi Texnologiyalar Mayog‘i!", "Sun’iy Intellekt Asrining Haqiqiy Daho Murabbiysi!"
    ],
    quotes: [
      { q: "First, solve the problem. Then, write the code.", a: "John Johnson" }
    ],
    p1: [
      "Siz bizga nollar va birlardan iborat raqamli olamda yuksak loyihalar yaratishni,",
      "Har qanday murakkab masalani bosqichma-bosqich algoritmlarga bo‘lib hal qilishni,",
      "Zamonaviy texnologiyalar, dasturlash tillari va ma’lumotlar bazasi mohiyatini,"
    ],
    p2: [
      "shijoat, sabr va eng zamonaviy bilimlar bilan tushuntirib berdingiz.",
      "o‘rgatib, bizda mantiqiy, analitik va ijodiy fikrlash qobiliyatini yuksak darajada shakllantirdingiz.",
      "singdirib, kelajak kasblarini ishonch bilan egallashimizga mustahkam poydevor qo‘ydingiz."
    ],
    p3: [
      "Hayotingizda hech qanday xatolik (bug) uchramasin, barcha maqsadlaringiz 200 OK bilan yakunlansin!",
      "Serverlaringiz ham, sihat-salomatligingiz ham doimo 100% barqaror (uptime) bo‘lsin!",
      "Sizga cheksiz ijodiy quvvat, yirik innovatsion loyihalar va ulkan moddiy-ma’naviy yuksalishlar tilaymiz!"
    ]
  },
  history: {
    titles: [
      "O‘tmish Ibratidan Kelajak Poydevorini Qurguvchi!", "Tarix Zarvaraqlarini Jonlantirgan Zukko Ustoz!",
      "Buyuk Ajdodlar Jasoratini Qalbga Singdirgan Murabbiy!", "Dunyo Xaritasini va Yurt Sevgisini Anglatgan Zot!"
    ],
    quotes: [
      { q: "O‘z tarixini bilmagan xalqning kelajagi bo‘lmaydi.", a: "Amir Temur hikmatlari" }
    ],
    p1: [
      "Siz bizga Amir Temur, Mirzo Ulug‘bek, Jaloliddin Manguberdi kabi ulug‘ zotlar qahramonligini,",
      "Dunyo xaritasidagi har bir qit’a, tog‘, daryo va okeanlarning betakror tabiatini,",
      "Asrlar osha o‘tgan sivilizatsiyalar yuksalishi va inqirozi sabablarini,"
    ],
    p2: [
      "jonli, ta’sirli va faxr-iftixor tuyg‘usi ila yetkazib berdingiz.",
      "ko‘rsatib, bizning qalbimizda o‘z yurtimiz va ajdodlarimiz bilan faxrlanish hissiyotini jo‘sh urdirdingiz.",
      "tahlil qilib, o‘tmish xatolaridan to‘g‘ri xulosa chiqarib yashash zarurligini uqtirdingiz."
    ],
    p3: [
      "Sizning xizmatingiz xalqimiz tarixida zarhal harflar bilan muhrlanishga loyiqdir!",
      "Doimo o‘tmishdek salobatli, kelajakdek porloq va el ardog‘ida bo‘lib yuring!",
      "Mustahkam sog‘liq, cheksiz hurmat va uzoq, sermazmun umr tilaymiz! Bayramingiz qutlug‘ bo‘lsin!"
    ]
  },
  primary: {
    titles: [
      "Ilk Harfni O‘rgatgan Ikkinchi Onamiz / Otamiz!", "Maktab Ostonasida Qalbimizni Tutgan Mehribon Zot!",
      "Ilm Olami Sari Ilk Qadamlar Rahbari!", "Sabr-Toqati Ummon, Mehri Daryo Ilk Ustozim!"
    ],
    quotes: [
      { q: "Ilk qadamni qo‘ygan qo‘llarimizni mehr bilan tutgan zot — Muallimdir.", a: "Qalb sadosi" }
    ],
    p1: [
      "Maktab ostonasiga qo‘rquv va hayajon bilan qadam qo‘yganimizda bizni mehr bilan kutib olganingizni,",
      "Daftarimizga ilk qalam tebratishni, harflarni chiroyli yozishni va kitob o‘qishni,",
      "Bir-birimizga do‘st bo‘lishni, kattalarni hurmat qilishni va to‘g‘riso‘zlikni,"
    ],
    p2: [
      "butun umr hech qachon unutmaymiz va sizga cheksiz minnatdorchilik bildiramiz.",
      "o‘rgatib, bizga katta hayotning eng pishiq va mustahkam poydevorini qo‘yib berdingiz.",
      "qalbimizga muhrlab, bizni yuksak insoniy fazilatlar bilan qurollantirdingiz."
    ],
    p3: [
      "Mehribon ustozim, sizga dunyodagi eng toza baxt, mustahkam sog‘liq va uzoq umr tilaymiz!",
      "Siz bergan ilk mehr nuri butun umrimiz yo‘llarini yoritib turadi! Bayramingiz muborak bo‘lsin!",
      "Har bir shogirdingiz yutug‘ida sizning mehnatingiz bor. Doimo sog‘-omon bo‘ling!"
    ]
  },
  sports: {
    titles: [
      "Iroda, Matonat va G‘alaba Ruhiyatini Shakllantirgan Murabbiy!", "Yengilmas Shijoat va Kuch-G‘ayrat Timsoli!",
      "Chempionlar Tarbiyachisi va Qat’iyat Mayog‘i!", "Haqiqiy Sportchilik Odobini O‘rgatgan Ustoz!"
    ],
    quotes: [
      { q: "G‘alaba — faqat jismoniy kuchda emas, eng avvalo qat’iyat va ruhning mustahkamligidadir.", a: "Sport falsafasi" }
    ],
    p1: [
      "Siz bizga nafaqat chaqqonlik, kuch-quvvat va jismoniy chidamlilikni,",
      "Har qanday qiyinchilik oldida taslim bo‘lmaslikni, intizom va temir irodani,",
      "Jamoaviy birdamlik, halol bellashuv va raqibga ehtirom ko‘rsatish qoidalarini,"
    ],
    p2: [
      "o‘rgatib, hayot maydonida ham mard va qat’iyatli bo‘lishimizni ta’minladingiz.",
      "tarbiyalab, bizda hech qachon chekinmaydigan chempionlik xarakterini hosil qildingiz.",
      "uqtirib, inson har doim o‘z ustida ishlashi zarurligini shaxsiy ibratingiz bilan ko‘rsatdingiz."
    ],
    p3: [
      "Sizga po‘latdek baquvvat sog‘lik, bitmas-tuganmas quvvat va yangi chempion shogirdlar tilaymiz!",
      "Shogirdlaringiz jahon shohsupalarida Vatanimiz bayrog‘ini doimo baland ko‘tarishsin! Bayramingiz bilan!",
      "Hayot degan katta musobaqada doimo eng oliy o‘rinlar sizga nasib etsin! Qutlug‘ bo‘lsin!"
    ]
  },
  art: {
    titles: [
      "Go‘zallik va Qalb Ohanglarini Hadyo Etgan Zot!", "Ranglar Jilosi va Nafosat Maktabi Ustozi!",
      "Qalbga Orom Beruvchi Mo‘jizakor San’atkor!", "Oq Qog‘ozga Jon Bag‘ishlagan Ijodkor Murabbiy!"
    ],
    quotes: [
      { q: "Musiqa va san’at — so‘z ojiz qolgan joyda qalb tilida so‘zlashadi.", a: "L.V. Betxoven" }
    ],
    p1: [
      "Siz bizga ranglarning sehrli jilosini, tabiat go‘zalligini oq qog‘ozda jonlantirishni,",
      "Musiqa asboblari ohangida qalb kechinmalarini ifoda etishni va ezgulikni kuylashni,",
      "Har bir chiziq, bo‘yoq va notada yashiringan buyuk falsafani his qilishni,"
    ],
    p2: [
      "mo‘’jizakor mahorat bilan o‘rgatib, dunyoni yanada chiroyliroq ko‘rishimizga sababchi bo‘ldingiz.",
      "singdirib, qalbimizni qo‘pollikdan xoli, nozik va samimiy tuyg‘ular bilan to‘ldirdingiz.",
      "anglatib, har bir shogirdingizda o‘ziga xos ijodiy qobiliyatni kashf etdingiz."
    ],
    p3: [
      "Hayotingiz eng yorqin, iliq ranglar va quvnoq ohanglar bilan to‘lib-toshsin!",
      "Ijodiy parvozingiz aslo to‘xtamasin, ilhomingiz doimo baland bo‘lsin! Bayramingiz qutlug‘ bo‘lsin!",
      "Sizga bitmas-tuganmas ma’naviy xotirjamlik, go‘zal hayot va mustahkam sog‘liq tilaymiz!"
    ]
  },
  general: {
    titles: [
      "Qalbimiz Quyoshi, Aziz va Muhtaram Ustozim!", "Ma’rifat Mash’ali va Hayot Mayoqi!",
      "Sizga Ehtirom — Bizning Muqaddas Burchimiz!", "Katta Hayot Maktabining Buyuk Bog‘boni!",
      "Qalbi Daryo, Sabri Ummon Mehribon Murabbiy!", "Mangu Yongan Sham Timsoli Bo‘lgan Fidoyi!"
    ],
    quotes: [
      { q: "Haq yo‘linda kim senga bir harf o‘rgatmish ranj ila, Aylamak bo‘lmas ado oning haqin yuz ganj ila.", a: "Alisher Navoiy" },
      { q: "Ustoz mehnati — shamga o‘xshaydi: o‘zi erib, boshqalarga nur taratadi.", a: "Sharq donishmandligi" },
      { q: "Dunyoda eng buyuk boylik — aql va bilim, unga yetaklovchi eng ulug‘ zot esa — Muallimdir.", a: "Abu Ali ibn Sino" }
    ],
    p1: [
      "Muhtaram va qadrli ustoz! Siz bizga nafaqat bilim va fan sirlarini, balki insoniylik, sabr, halollik va or-nomus fazilatlarini,",
      "Dunyoda minglab kasblar bor, ammo ularning barchasini yaratuvchisi va kamolotga yetkazuvchisi siz — Ustozsiz! Sizning,",
      "Qanchadan-qancha yoshlarning orzulariga qanot bog‘ladingiz, ularni o‘z kuchiga ishontirdingiz va to‘g‘ri yo‘lga boshladingiz. Sizning,",
      "Siz bergan har bir saboq hayotimiz uchun mayoq, har bir o‘gitingiz kelajagimiz uchun kompas bo‘ldi. Sizning tinimsiz mehnatingiz,"
    ],
    p2: [
      "qarshisida butun vujudimiz bilan ta’zim qilamiz va mehnatingizni yuksak qadrlaymiz.",
      "sabringiz, mehringiz va fidoiyligingiz hech qachon unutilmaydi, doimo qalbimiz ardog‘ida yashaydi.",
      "shogirdlar yutug‘idan o‘zingiznikidek quvonganingiz, har bir o‘quvchiga o‘z farzandingizdek qaraganingiz tahsinga loyiqdir.",
      "sharofati bilan bugun jamiyatda o‘z o‘rnimizni topib, yurtimiz ravnaqiga hissa qo‘shmoqdamiz."
    ],
    p3: [
      "1-oktyabr — O‘qituvchi va murabbiylar kuni bilan chin dildan muborakbod etamiz! Sizga mustahkam sog‘liq, oilaviy baxt va cheksiz ehtirom tilaymiz!",
      "Yuzingizdan tabassum, qalbingizdan xotirjamlik, xonadoningizdan fayzu baraka aslo arimasin! Umringiz uzoq va fayzli bo‘lsin!",
      "Doimo el ardog‘ida, shogirdlar e’zozida bo‘ling! Bayramingiz qutlug‘ va esda qolarli bo‘lsin!",
      "Sizdek buyuk va fidoiy zotga har qancha ta’zim qilsak oz. Ilohim, doimo sog‘-omon bo‘ling!"
    ]
  }
};

// Har bir fan uchun 100+ tilaklarni xotirada generatsiya qilish
const ALL_WISHES = {};

(function buildAllWishes() {
  SUBJECTS_CONFIG.forEach(subj => {
    const list = [];
    const tpl = BASE_TEMPLATES[subj.id] || BASE_TEMPLATES.general;

    let id = 1;
    for (let t = 0; t < tpl.titles.length; t++) {
      for (let p1 = 0; p1 < tpl.p1.length; p1++) {
        for (let p2 = 0; p2 < tpl.p2.length; p2++) {
          for (let p3 = 0; p3 < tpl.p3.length; p3++) {
            if (list.length >= 105) break;

            const q = tpl.quotes[(t + p1 + p2 + p3) % tpl.quotes.length];
            list.push({
              id: `${subj.id}_${id++}`,
              subjectId: subj.id,
              subjectName: subj.name,
              icon: subj.icon,
              title: tpl.titles[t],
              quote: q.q,
              author: q.a,
              text: `${tpl.p1[p1]} ${tpl.p2[p2]} ${tpl.p3[p3]}`,
              signature: "Sizni cheksiz qadrlovchi shogirdingiz nomidan"
            });
          }
          if (list.length >= 105) break;
        }
        if (list.length >= 105) break;
      }
      if (list.length >= 105) break;
    }

    ALL_WISHES[subj.id] = list;
  });
})();

function getSubjectWish(subjectId) {
  const arr = ALL_WISHES[subjectId] || ALL_WISHES.general;
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- 3. GLOBAL STATE & EVENT HANDLING ---
let currentSubject = 'general';
let isMusicPlaying = true;
let isPlayerMinimized = false;

document.addEventListener('DOMContentLoaded', () => {
  renderSubjectGrid();
  initThreeJS();
  initClickFireworks();

  // Sahifa ochilganda bayram mushagi
  setTimeout(() => {
    launchGrandFireworks();
  }, 500);

  // Foydalanuvchi ekranga teginishi bilan YouTube musiqani ishga tushirish (Autoplay unlock)
  const unlockMusic = () => {
    try {
      const iframe = document.getElementById('yt-iframe');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    } catch(e) {}
    document.removeEventListener('click', unlockMusic);
    document.removeEventListener('touchstart', unlockMusic);
  };
  document.addEventListener('click', unlockMusic);
  document.addEventListener('touchstart', unlockMusic);
});

// Fanlar kartochkalarini chiqarish
function renderSubjectGrid() {
  const container = document.getElementById('subject-cards-container');
  if (!container) return;

  container.innerHTML = '';

  SUBJECTS_CONFIG.forEach(subj => {
    const card = document.createElement('div');
    card.className = 'glass-panel p-6 subject-card flex flex-col justify-between border border-yellow-500/30 group cursor-pointer';
    card.onclick = () => selectSubject(subj.id);

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-4xl group-hover:scale-125 transition-transform duration-300">${subj.icon}</span>
          <span class="text-[11px] px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-300 shimmer-badge font-bold uppercase">
            100+ Tilak
          </span>
        </div>
        <h3 class="text-xl font-bold font-serif text-white mb-2 group-hover:text-yellow-300 transition-colors">
          ${subj.name}
        </h3>
        <p class="text-xs text-gray-300 leading-relaxed font-light">
          ${subj.desc}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span class="text-xs text-yellow-400 font-bold group-hover:underline">Ustiga bosing &rarr;</span>
        <span class="text-xs bg-yellow-500/20 group-hover:bg-yellow-500 text-yellow-300 group-hover:text-black font-extrabold px-3 py-1.5 rounded-full transition-all">
          Ochish ✨
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Bosh sahifadagi "Ustiga bosing" tugmasi
function handleGeneralClick() {
  selectSubject('general');
}

// Fanni tanlash va tilakni ochish
function selectSubject(subjectId) {
  currentSubject = subjectId;
  showWishModal();
}

// Modal oynada tilakni ko'rsatish
function showWishModal() {
  const wish = getSubjectWish(currentSubject);
  if (!wish) return;

  launchGrandFireworks();

  const modal = document.getElementById('wish-modal');
  const content = document.getElementById('modal-wish-content');

  content.innerHTML = `
    <div class="certificate-frame">
      <div class="corner-ornament corner-tl"></div>
      <div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div>
      <div class="corner-ornament corner-br"></div>

      <!-- Sarlavha & Fan belgisi -->
      <div class="text-center mb-6">
        <div class="text-5xl mb-2 animate-bounce">${wish.icon}</div>
        <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-yellow-300 bg-yellow-500/20 border border-yellow-500/50 mb-2 tracking-wide uppercase">
          ${wish.subjectName}
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold font-serif gold-text px-2">
          ${wish.title}
        </h2>
      </div>

      <!-- Hikmatli iqtibos -->
      <div class="bg-black/40 p-4 rounded-xl border border-yellow-500/30 my-4 text-center">
        <p class="text-yellow-200 italic font-garamond text-base sm:text-lg">
          "${wish.quote}"
        </p>
        <p class="text-xs text-gray-400 mt-1">— ${wish.author}</p>
      </div>

      <!-- Chuqur professional tabrik matni -->
      <p class="text-gray-200 text-base sm:text-lg leading-relaxed text-justify indent-6 my-6 font-light">
        ${wish.text}
      </p>

      <!-- Muhr va imzo -->
      <div class="flex items-center justify-between pt-4 border-t border-yellow-500/30">
        <div class="text-left">
          <p class="text-xs text-yellow-400 font-bold uppercase tracking-wider">Shogirdlik Ehtiromi</p>
          <p class="text-xs sm:text-sm text-gray-300 italic">${wish.signature}</p>
        </div>
        <div class="gold-seal text-xs font-black text-black text-center uppercase tracking-tighter">
          1-OKT<br>BAYRAM
        </div>
      </div>

      <!-- Tugmalar: "Yana bitta tilak o'qish" va "Boshqa fanni tanlash" -->
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button onclick="showWishModal()" class="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-extrabold text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-btn cursor-pointer">
          <span>✨ Yana bitta tilak o'qish (Ustiga bosing) ✨</span>
        </button>
        <button onclick="closeWishModal()" class="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-yellow-300 border border-yellow-500/40 font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer">
          🔄 Boshqa fanni tanlash
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeWishModal() {
  const modal = document.getElementById('wish-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  document.body.style.overflow = 'auto';
}

// ESC tugmasi bilan yopish
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeWishModal();
});

// --- 4. YOUTUBE MUSIC CONTROLS ---
function toggleYouTubeMusic() {
  const iframe = document.getElementById('yt-iframe');
  const btnText = document.getElementById('music-btn-text');
  const btnIcon = document.getElementById('music-btn-icon');

  if (!iframe || !iframe.contentWindow) return;

  if (isMusicPlaying) {
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    isMusicPlaying = false;
    btnText.innerText = "Qo'shiqni Yoqish";
    btnIcon.innerText = "▶️";
  } else {
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    isMusicPlaying = true;
    btnText.innerText = "To'xtatish";
    btnIcon.innerText = "⏸️";
  }
}

function togglePlayerMinimize() {
  const wrapper = document.getElementById('player-wrapper');
  const icon = document.getElementById('player-min-icon');

  if (!wrapper) return;

  if (isPlayerMinimized) {
    wrapper.style.display = 'block';
    icon.innerText = '➖';
    isPlayerMinimized = false;
  } else {
    wrapper.style.display = 'none';
    icon.innerText = '➕';
    isPlayerMinimized = true;
  }
}

// --- 5. FIREWORKS & CONFETTI ---
function initClickFireworks() {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('button, a, .modal-close-btn, iframe')) {
      if (typeof confetti !== 'undefined') {
        confetti({
          particleCount: 25,
          spread: 60,
          origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
          colors: ['#ffd700', '#ffea79', '#ffffff', '#e67e22', '#3498db']
        });
      }
    }
  });
}

function launchGrandFireworks() {
  if (typeof confetti === 'undefined') return;

  const duration = 2.8 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = 45 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
      colors: ['#ffd700', '#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0']
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      colors: ['#ffd700', '#ffffff', '#feca57', '#ff9ff3', '#54a0ff']
    }));
  }, 250);
}

// --- 6. THREE.JS 3D PARTICLE GALAXY & SCENE ---
let scene, camera, renderer, particles, bookMesh;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initThreeJS() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Zarrachalar
  const particleCount = 1800;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const goldColor = new THREE.Color('#ffd700');
  const lightGold = new THREE.Color('#fff7cc');
  const amberColor = new THREE.Color('#d4af37');

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2400;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

    const chosen = Math.random() > 0.6 ? goldColor : (Math.random() > 0.3 ? lightGold : amberColor);
    colors[i * 3] = chosen.r;
    colors[i * 3 + 1] = chosen.g;
    colors[i * 3 + 2] = chosen.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 4,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // 3D Markaziy Oltin Kitob
  const bookGroup = new THREE.Group();
  const coverGeo = new THREE.BoxGeometry(160, 220, 14);
  const coverMat = new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.85, roughness: 0.2 });
  const coverMesh = new THREE.Mesh(coverGeo, coverMat);
  bookGroup.add(coverMesh);

  const pagesGeo = new THREE.BoxGeometry(150, 210, 18);
  const pagesMat = new THREE.MeshStandardMaterial({ color: 0xfff4c2, metalness: 0.3, roughness: 0.5 });
  const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
  pagesMesh.position.x = 2;
  bookGroup.add(pagesMesh);

  const torusGeo = new THREE.TorusGeometry(180, 2.5, 16, 100);
  const torusMat = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.6 });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.rotation.x = Math.PI / 2.5;
  bookGroup.add(torus);

  bookMesh = bookGroup;
  bookMesh.position.y = 70;
  bookMesh.position.z = 200;
  scene.add(bookMesh);

  // Chiroqlar
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffd700, 2.5, 1200);
  pointLight.position.set(200, 300, 500);
  scene.add(pointLight);

  const pointLight2 = new THREE.PointLight(0x70a1ff, 1.8, 1200);
  pointLight2.position.set(-300, -200, 300);
  scene.add(pointLight2);

  window.addEventListener('resize', () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.35;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.35;
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;

  if (particles) {
    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0003;
  }

  if (bookMesh) {
    bookMesh.rotation.y += 0.007;
    bookMesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.15 + (targetY * 0.0005);
    bookMesh.rotation.z = Math.cos(Date.now() * 0.001) * 0.08 + (targetX * 0.0005);
  }

  camera.position.x += (targetX - camera.position.x) * 0.03;
  camera.position.y += (-targetY - camera.position.y) * 0.03;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
