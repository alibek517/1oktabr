/* ========================================================
   1-OKTYABR USTOZ VA MURABBIYLAR KUNI - YUKSAK DARAJA (app.js)
   ======================================================== */

// --- 1. FANLAR RO'YXATI ---
const SUBJECTS_CONFIG = [
  { id: 'math', name: 'Matematika va Aniq fanlar', icon: '📐' },
  { id: 'literature', name: 'Ona tili va Adabiyot', icon: '📚' },
  { id: 'physics', name: 'Fizika va Astronomiya', icon: '⚡' },
  { id: 'chemistry', name: 'Kimyo va Biologiya', icon: '🧪' },
  { id: 'languages', name: 'Xorijiy Tillar (Ingliz tili)', icon: '🌍' },
  { id: 'it', name: 'Informatika va IT', icon: '💻' },
  { id: 'history', name: 'Tarix va Geografiya', icon: '🗺️' },
  { id: 'primary', name: 'Boshlang‘ich Ta’lim', icon: '🧸' },
  { id: 'sports', name: 'Jismoniy Tarbiya va Sport', icon: '🏆' },
  { id: 'art', name: 'San’at va Musiqa', icon: '🎨' }
];

// --- 2. HAR BIR FAN UCHUN 100+ MUKAMMAL VA SAMIMIY TILAKLAR SHABLONLARI ---
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
  const allSubjKeys = [...SUBJECTS_CONFIG.map(s => s.id), 'general'];
  allSubjKeys.forEach(key => {
    const list = [];
    const tpl = BASE_TEMPLATES[key] || BASE_TEMPLATES.general;
    const subjObj = SUBJECTS_CONFIG.find(s => s.id === key) || { name: 'Barcha Ustozlar Uchun', icon: '🌟' };

    let id = 1;
    for (let t = 0; t < tpl.titles.length; t++) {
      for (let p1 = 0; p1 < tpl.p1.length; p1++) {
        for (let p2 = 0; p2 < tpl.p2.length; p2++) {
          for (let p3 = 0; p3 < tpl.p3.length; p3++) {
            if (list.length >= 105) break;

            const q = tpl.quotes[(t + p1 + p2 + p3) % tpl.quotes.length];
            list.push({
              id: `${key}_${id++}`,
              subjectId: key,
              subjectName: subjObj.name,
              icon: subjObj.icon,
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

    ALL_WISHES[key] = list;
  });
})();

// Tanlangan fan(lar) bo'yicha tilak olish
function getSelectedSubjectsWish() {
  if (selectedSubjects.size === 0) {
    const generalArr = ALL_WISHES['general'];
    return generalArr[Math.floor(Math.random() * generalArr.length)];
  }

  // Tanlangan fanlardan bittasini tasodifiy tanlaymiz
  const chosenArray = Array.from(selectedSubjects);
  const randomSubjId = chosenArray[Math.floor(Math.random() * chosenArray.length)];
  const arr = ALL_WISHES[randomSubjId] || ALL_WISHES['general'];
  return arr[Math.floor(Math.random() * arr.length)];
}

/// --- 3. GLOBAL STATE & INITIALIZATION ---
const selectedSubjects = new Set(); // Multi-select to'plami
let isAudioPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  initClickFireworks();
  
  // Qo'shiqni darhol boshlashga harakat qilish
  startBackgroundMusic();

  // Dastlabki bayram mushagi
  setTimeout(() => {
    launchGrandFireworks();
  }, 600);

  // Foydalanuvchi sahifaning istalgan joyiga bossa yoki teginsa, darhol qo'shiqni boshlash
  const handleFirstInteraction = () => {
    ensureAudioPlaying();
    const audio = getAudioElement();
    if (audio && !audio.paused) {
      ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    }
  };

  ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
    window.addEventListener(evt, handleFirstInteraction, { passive: true });
  });
});

// --- 4. MODAL: "USTIGA BOSING" (2 BOSQICHLI OQIM: FANLAR -> KEYINGISI/SKIP -> TABRIK) ---
function openWishModalWithSubjects() {
  // Foydalanuvchi "Ustiga bosing"ni bosgan payti darhol qo'shiqni boshlash
  ensureAudioPlaying();

  const modal = document.getElementById('wish-modal');
  if (modal) {
    modal.classList.add('active');
  }
  document.documentElement.classList.add('modal-locked');
  document.body.classList.add('modal-locked');

  // 1-bosqich: Fanlarni tanlash ekranini ko'rsatamiz
  showSubjectSelectionStep();
}

// 1-BOSQICH: Fan tanlash ekrani
function showSubjectSelectionStep() {
  const content = document.getElementById('modal-wish-content');
  if (!content) return;

  content.innerHTML = `
    <div class="certificate-frame relative">
      <!-- ULTRA-VISIBLE 'X' CLOSE BUTTON INSIDE MODAL -->
      <button onclick="closeWishModal()" class="modal-close-btn" aria-label="Yopish">
        ✕
      </button>

      <div class="corner-ornament corner-tl"></div>
      <div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div>
      <div class="corner-ornament corner-br"></div>

      <!-- Header -->
      <div class="text-center mb-6 pt-2">
        <div class="inline-block px-4 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-2">
          🎓 1-Qadam: Darslikni tanlang
        </div>
        <h2 class="text-2xl sm:text-3xl font-black font-serif gold-text">
          Qaysi fandan dars berasiz?
        </h2>
        <p class="text-xs text-gray-300 mt-1 font-light">
          O'zingiz saboq beradigan fanni belgilang (Bir nechta fanni tanlashingiz yoki to'g'ridan-to'g'ri o'tkazib yuborishingiz mumkin):
        </p>
      </div>

      <!-- Fanlar ro'yxati (Har birida aniq bo'sh kvadrat, bosganda ptichka tushadi) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 max-h-[48vh] overflow-y-auto pr-1">
        ${SUBJECTS_CONFIG.map(subj => {
          const isChecked = selectedSubjects.has(subj.id);
          return `
            <button type="button" onclick="toggleSubjectSelection('${subj.id}')" id="subj-btn-${subj.id}" class="subject-select-btn ${isChecked ? 'is-selected' : ''}">
              <span class="flex items-center gap-2.5">
                <span class="text-xl">${subj.icon}</span>
                <span>${subj.name}</span>
              </span>
              <span class="checkbox-indicator" id="check-icon-${subj.id}">${isChecked ? '✓' : ''}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Pastki tugmalar: Keyingisi va Skip -->
      <div class="mt-6 pt-4 border-t border-yellow-500/30 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button onclick="proceedToWishStep()" class="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-black font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-btn cursor-pointer">
          <span>Keyingisi</span>
          <span>➔</span>
        </button>
        <button onclick="skipToWishStep()" class="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all cursor-pointer">
          <span>O'tkazib yuborish (Skip) &rarr;</span>
        </button>
      </div>
    </div>
  `;
}

// Fanni tanlash / olib tashlash (Klik qilsa bo'ladigan, aniq ptichka qo'yish/o'chirish)
function toggleSubjectSelection(subjectId) {
  const btn = document.getElementById(`subj-btn-${subjectId}`);
  const icon = document.getElementById(`check-icon-${subjectId}`);

  if (selectedSubjects.has(subjectId)) {
    selectedSubjects.delete(subjectId);
    if (btn) btn.classList.remove('is-selected');
    if (icon) icon.innerText = '';
  } else {
    selectedSubjects.add(subjectId);
    if (btn) btn.classList.add('is-selected');
    if (icon) icon.innerText = '✓';
  }
}

// "Keyingisi" bosilganda tabrikka o'tish
function proceedToWishStep() {
  launchGrandFireworks();
  showWishDisplayStep();
}

// "O'tkazib yuborish (Skip)" bosilganda tabrikka o'tish (hech narsa tanlanmasa ham bo'ladi)
function skipToWishStep() {
  launchGrandFireworks();
  showWishDisplayStep();
}

// 2-BOSQICH: Tabrikni ko'rsatish ekrani
function showWishDisplayStep() {
  const content = document.getElementById('modal-wish-content');
  if (!content) return;

  const wish = getSelectedSubjectsWish();
  if (!wish) return;

  let selectedNamesLabel = wish.subjectName;
  if (selectedSubjects.size > 1) {
    const names = Array.from(selectedSubjects).map(id => SUBJECTS_CONFIG.find(s => s.id === id)?.name).filter(Boolean);
    selectedNamesLabel = names.join(" & ");
  } else if (selectedSubjects.size === 0) {
    selectedNamesLabel = "Barcha Qadrli Ustozlarimiz Uchun";
  }

  content.innerHTML = `
    <div class="certificate-frame relative">
      <!-- ULTRA-VISIBLE 'X' CLOSE BUTTON INSIDE MODAL -->
      <button onclick="closeWishModal()" class="modal-close-btn" aria-label="Yopish">
        ✕
      </button>

      <div class="corner-ornament corner-tl"></div>
      <div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div>
      <div class="corner-ornament corner-br"></div>

      <!-- Icon & Fan nomi -->
      <div class="text-center mb-5 pt-2">
        <div class="text-5xl mb-2 animate-bounce">${wish.icon}</div>
        <div class="inline-block px-4 py-1 rounded-full text-xs font-bold text-yellow-300 bg-yellow-500/20 border border-yellow-500/50 mb-2 tracking-wide uppercase">
          ${selectedNamesLabel}
        </div>
        <h2 class="text-2xl sm:text-3xl font-black font-serif gold-text px-2">
          ${wish.title}
        </h2>
      </div>

      <!-- Hikmatli iqtibos -->
      <div class="bg-black/40 p-3 sm:p-4 rounded-xl border border-yellow-500/30 my-4 text-center">
        <p class="text-yellow-200 italic font-garamond text-base sm:text-lg">
          "${wish.quote}"
        </p>
        <p class="text-xs text-gray-400 mt-1">— ${wish.author}</p>
      </div>

      <!-- Chuqur va samimiy professional tabrik matni -->
      <p class="text-gray-200 text-sm sm:text-base leading-relaxed text-justify indent-6 my-6 font-light">
        ${wish.text}
      </p>

      <!-- Muhr va imzo -->
      <div class="flex items-center justify-between pt-4 border-t border-yellow-500/30">
        <div class="text-left">
          <p class="text-xs text-yellow-400 font-bold uppercase tracking-wider">Shogirdlik Ehtiromi</p>
          <p class="text-xs sm:text-sm text-gray-300 italic">${wish.signature}</p>
        </div>
        <div class="gold-seal text-xs font-black text-black text-center uppercase tracking-tighter shrink-0">
          1-OKT<br>BAYRAM
        </div>
      </div>

      <!-- Tugmalar: Yana bitta tilak o'qish va Fanlarni qayta tanlash -->
      <div class="mt-8 flex flex-col gap-3 justify-center items-center">
        <button onclick="refreshWishDisplay()" class="glow-btn w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full gold-gradient-bg text-black font-extrabold text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <span class="text-lg">✨</span>
          <span>Yana bitta tilak o'qish (Ustiga bosing)</span>
          <span class="text-lg">✨</span>
        </button>
        <button onclick="showSubjectSelectionStep()" class="text-xs text-yellow-300 hover:text-yellow-200 underline transition-colors cursor-pointer py-1">
          🔄 Qaysi fan ekanligini qayta tanlash
        </button>
      </div>

    </div>
  `;
}

// "Yana bitta tilak o'qish" bosilganda yangi tilak chiqarish
function refreshWishDisplay() {
  launchGrandFireworks();
  showWishDisplayStep();
}

function closeWishModal() {
  const modal = document.getElementById('wish-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.documentElement.classList.remove('modal-locked');
  document.body.classList.remove('modal-locked');
}

// ESC tugmasi bilan yopish
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWishModal();
    closePaymentModal();
  }
});

// --- 5. AUDIO & QO'SHIQ BOSHQARUVI (2 TA QO'SHIQ PLEIYLISTI, BIR ZUMDA BOSHLANADI) ---
const PLAYLIST = ['music.mp3', 'music2.mp3'];
let currentTrackIdx = 0;

function getAudioElement() {
  let audio = document.getElementById('bg-audio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'bg-audio';
    audio.preload = 'auto';
    audio.src = PLAYLIST[0];
    document.body.appendChild(audio);
  }
  return audio;
}

function ensureAudioPlaying() {
  const audio = getAudioElement();
  if (audio && audio.paused) {
    playTrack(currentTrackIdx);
  }
}

function playTrack(idx) {
  const audio = getAudioElement();
  if (!audio) return;

  if (idx !== undefined) {
    currentTrackIdx = idx % PLAYLIST.length;
  }
  const targetSrc = PLAYLIST[currentTrackIdx];
  if (!audio.src || !audio.src.includes(targetSrc)) {
    audio.src = targetSrc;
  }

  // 1-qo'shiq tugagach avtomatik 2-qo'shiqqa, 2-tugagach yana 1-qo'shiqqa o'tadi
  if (!audio.dataset.hasEndedListener) {
    audio.dataset.hasEndedListener = 'true';
    audio.addEventListener('ended', () => {
      currentTrackIdx = (currentTrackIdx + 1) % PLAYLIST.length;
      playTrack(currentTrackIdx);
    });
  }

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isAudioPlaying = true;
      updateMusicButtonUi();
    }).catch((err) => {
      // Brauzer autoplay qoidasi bo'yicha foydalanuvchi bosishini kutadi
      isAudioPlaying = false;
      updateMusicButtonUi();
    });
  }
}

function startBackgroundMusic() {
  playTrack(currentTrackIdx);
}

function toggleAudioPlayback() {
  const audio = getAudioElement();
  if (!audio) return;

  if (!audio.paused) {
    audio.pause();
    isAudioPlaying = false;
  } else {
    playTrack(currentTrackIdx);
  }
  updateMusicButtonUi();
}

function updateMusicButtonUi() {
  const btn = document.getElementById('music-single-btn');
  const icon = document.getElementById('music-btn-icon');
  const audio = getAudioElement();
  if (!btn || !icon) return;

  if (audio && !audio.paused) {
    icon.innerText = '⏸';
    btn.classList.add('playing');
  } else {
    icon.innerText = '▶';
    btn.classList.remove('playing');
  }
}

// --- 6. VISA PAYMENT & SCREENSHOT UPLOAD ($29.99) ---
function openPaymentModal() {
  ensureAudioPlaying();
  const modal = document.getElementById('payment-modal');
  const form = document.getElementById('visa-payment-form');
  const successBox = document.getElementById('payment-success-box');

  if (form) form.classList.remove('hidden');
  if (successBox) successBox.classList.add('hidden');

  if (modal) {
    modal.classList.add('active');
  }
  document.documentElement.classList.add('modal-locked');
  document.body.classList.add('modal-locked');

  initCreditCardLiveInput();
}

function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.documentElement.classList.remove('modal-locked');
  document.body.classList.remove('modal-locked');
}

function initCreditCardLiveInput() {
  const numInput = document.getElementById('pay-card-number');
  const expInput = document.getElementById('pay-card-expiry');
  const holderInput = document.getElementById('pay-card-holder');

  const prevNum = document.getElementById('card-preview-number');
  const prevExp = document.getElementById('card-preview-expiry');
  const prevHolder = document.getElementById('card-preview-holder');

  if (!numInput || numInput.dataset.listenerAdded) return;
  numInput.dataset.listenerAdded = 'true';

  numInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;
    if (prevNum) prevNum.innerText = formatted || '•••• •••• •••• ••••';
  });

  expInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    e.target.value = val;
    if (prevExp) prevExp.innerText = val || 'MM/YY';
  });

  holderInput.addEventListener('input', (e) => {
    let val = e.target.value.toUpperCase();
    e.target.value = val;
    if (prevHolder) prevHolder.innerText = val || 'ISMI SHARIFI';
  });
}

function handleScreenshotUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const previewImg = document.getElementById('screenshot-preview-img');
    const previewContainer = document.getElementById('screenshot-preview-container');
    const uploadPrompt = document.getElementById('screenshot-upload-prompt');
    const fileName = document.getElementById('screenshot-filename');

    if (previewImg && previewContainer) {
      previewImg.src = e.target.result;
      if (fileName) fileName.innerText = `${file.name} (${Math.round(file.size / 1024)} KB)`;
      previewContainer.classList.remove('hidden');
      if (uploadPrompt) uploadPrompt.classList.add('hidden');
    }
  };
  reader.readAsDataURL(file);
}

function submitVisaPayment(event) {
  event.preventDefault();

  const btn = document.getElementById('btn-submit-payment');
  const originalText = btn.innerHTML;

  btn.innerHTML = `<span>⏳</span><span>To'lov Tasdiqlanmoqda...</span>`;
  btn.disabled = true;

  setTimeout(() => {
    const form = document.getElementById('visa-payment-form');
    const successBox = document.getElementById('payment-success-box');
    const orderIdSpan = document.getElementById('success-order-id');

    if (orderIdSpan) {
      orderIdSpan.innerText = `VIP-${Math.floor(Math.random() * 90000 + 10000)}`;
    }

    if (form) form.classList.add('hidden');
    if (successBox) successBox.classList.remove('hidden');

    launchGrandFireworks();
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1200);
}

// --- 7. FIREWORKS & CONFETTI ---
function initClickFireworks() {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('button, a, .modal-close-btn, iframe, input')) {
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

// --- 8. THREE.JS 3D PARTICLE GALAXY & SCENE ---
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
