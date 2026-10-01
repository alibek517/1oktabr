// 1-Oktyabr - Ustoz va murabbiylar kuni uchun maxsus mukammal tilaklar to'plami
const WISHES_DATABASE = [
  // --- BARCHA USTOZLAR UCHUN UMUMIY VA CHUQUR TILAKLAR ---
  {
    id: 1,
    category: "general",
    categoryName: "Barcha Ustozlar Uchun",
    icon: "🌟",
    title: "Qalbimiz Quyoshi, Aziz Ustozim!",
    quote: "Haq yo'linda kim senga bir harf o'rgatmish ranj ila, Aylamak bo'lmas ado oning haqin yuz ganj ila.",
    author: "Alisher Navoiy",
    text: "Muhtaram va qadrli ustoz! Siz bizga nafaqat bilim va fan sirlarini, balki insoniylik, sabr, halollik va or-nomus fazilatlarini o'rgatdingiz. Har bir darsingiz hayotimiz uchun mayoq, har bir so'zingiz kelajagimizga qanot bo'ldi. Sizning tinimsiz mehnatingiz, qalb qo'ringiz va cheksiz sabringiz qarshisida ta'zimdamiz. 1-oktyabr — O'qituvchi va murabbiylar kuni bilan chin yurakdan muborakbod etamiz! Oilangizga tinchlik, taningizga sovg'a etilmas sog'lik va yuksak ehtirom tilaymiz!",
    signature: "Cheksiz minnatdorchilik bilan shogirdingiz"
  },
  {
    id: 2,
    category: "general",
    categoryName: "Barcha Ustozlar Uchun",
    icon: "✨",
    title: "Ma'rifat Mash'ali va Hayot Mayoqi",
    quote: "Ustoz mehnati — shamga o'xshaydi: o'zi erib, boshqalarga nur taratadi.",
    author: "Sharq donishmandligi",
    text: "Aziz ustozim! Dunyoda minglab kasblar bor, ammo ularning barchasini yaratuvchisi va kamolotga yetkazuvchisi siz — Ustozsiz! Sizning har bir o'quvchiga bo'lgan samimiy nigohingiz, tunlari uxlamay daftarlarni tekshirganingiz, har bir shogirdingiz yutug'idan o'zingiznikidek quvonganingiz hech qachon unutilmaydi. Sizga dunyodagi eng ezgu tilaklarni, mustahkam sog'liq, cheksiz baxt va bitmas-tuganmas ilhom tilaymiz!",
    signature: "Hurmat va ehtirom ila"
  },
  {
    id: 3,
    category: "general",
    categoryName: "Barcha Ustozlar Uchun",
    icon: "👑",
    title: "Sizga Ehtirom — Bizning Muqaddas Burchimiz",
    quote: "Dunyoda eng buyuk boylik — aql va bilim, unga yetaklovchi eng ulug' zot esa — Muallimdir.",
    author: "Ibn Sino",
    text: "Qadrli muallim! Siz bizning qalbimizga yaxshilik urug'ini qadadingiz. Hayot yo'llarida adashmay, mustaqil fikrlaydigan, Vataniga va xalqiga naf keltiradigan inson bo'lib voyaga yetishimizda beqiyos hissangiz bor. Bayramingiz qutlug' bo'lsin! Yuzingizdan tabassum, qalbingizdan xotirjamlik, xonadoningizdan fayzu baraka aslo arimasin!",
    signature: "Chin dildan shogirdlaringiz nomidan"
  },
  {
    id: 4,
    category: "general",
    categoryName: "Barcha Ustozlar Uchun",
    icon: "🌿",
    title: "Katta Hayot Maktabining Buyuk Bo'g'boni",
    quote: "O'qituvchi — inson ruhining eng nozik muhandisidir.",
    author: "Hikmatlar xazinasidan",
    text: "Hurmatli murabbiy! Har bir niholning sarvqad daraxt bo'lib meva berishida mohir bog'bonning o'rni qanchalik muhim bo'lsa, har bir insonning shaxs bo'lib shakllanishida sizning o'rningiz shunchalik tengsizdir. Bizga bergan mehrli saboqlaringiz, oqilona o'gitlaringiz umr bo'yi qalbimizda yashaydi. Kasb bayramingiz muborak bo'lsin, doimo el ardog'ida bo'ling!",
    signature: "Yuksak ehtirom bilan"
  },
  {
    id: 5,
    category: "general",
    categoryName: "Barcha Ustozlar Uchun",
    icon: "💎",
    title: "Qalbi Daryo, Sabri Ummon Mehribon Ustoz",
    quote: "Ilm nuri bilan ko'ngillarni yoritgan insonlarning xotirasi mangu qoladi.",
    author: "Sharqona hikmat",
    text: "Sizning sabr-toqatingiz, har bir o'quvchining ichki qobiliyatini payqay olish san'atingiz tahsinga loyiq. Qanchadan-qancha yoshlarning orzulariga qanot bog'ladingiz, ularni o'z kuchiga ishontirdingiz. Sizdek buyuk qalb egasiga har qancha ta'zim qilsak oz. Bayramingiz muborak bo'lsin, umringiz uzoq va fayzli bo'lsin!",
    signature: "Minnatdor shogirdingiz"
  },

  // --- MATEMATIKA VA ANIQ FANLAR ---
  {
    id: 6,
    category: "math",
    categoryName: "Matematika va Mantiq",
    icon: "📐",
    title: "Tenglamalar Yechuvchisi, Cheksiz Mehr Manbai",
    quote: "Matematika — fanlar shohi, ammo uning haqiqiy qiroli uni qalbga yetkaza olgan Ustozdir.",
    author: "K.F. Gauss",
    text: "Muhtaram matematika ustozi! Siz bizga nafaqat murakkab tenglamalar, integrallar va teoremalarni, balki hayotiy qiyinchiliklarning ham doimo to'g'ri yechimi borligini isbotlab berdingiz. Siz o'rgatgan mantiqiy tafakkur bugun bizga to'g'ri yo'lni topishda doimo kompas bo'lmoqda. Sizning hayotingizdagi barcha orzular formulasi ijobiy natijalarga, quvonchingiz esa cheksizlikka intilsin! Bayramingiz qutlug' bo'lsin!",
    signature: "Mantiq va saboq uchun rahmat aytuvchi shogirdingiz"
  },
  {
    id: 7,
    category: "math",
    categoryName: "Matematika va Geometriya",
    icon: "♾️",
    title: "Hayotimizning Eng Aniq va Mustahkam Koordinatasi",
    quote: "Aqlning go'zalligi va tartibi — matematikada mujassam.",
    author: "Rene Dekart",
    text: "Qadrli ustoz! Siz bizga fazoviy shakllarni chizishni, har bir burchak va chiziqning o'z o'rni borligini o'rgatdingiz. Hayotimiz koordinatalar tizimida siz ko'rsatgan nuqta doimo eng baland cho'qqilarni egallashimizga sabab bo'lmoqda. Sog'ligingiz kvadratga oshsin, qayg'ularingiz nolga tenglashsin, baxtingiz esa faktorial darajada ko'paysin!",
    signature: "Ehtirom ila shogirdingiz"
  },

  // --- ONA TILI VA ADABIYOT ---
  {
    id: 8,
    category: "literature",
    categoryName: "Ona Tili va Adabiyot",
    icon: "📚",
    title: "So'z Durdonalarining Mohir Zargari",
    quote: "Tilga e'tibor — elga e'tibor, so'z qadrini bilgan — o'z qadrini bilar.",
    author: "Alisher Navoiy",
    text: "Muhtarama adabiyot va ona tili ustozi! Siz bizga ona tilimizning bitmas-tuganmas jozibasini, so'zning qudratini, Alisher Navoiy, Bobur, Cho'lpon va Abdulla Qodiriy asarlarining sehrli olamini ochib berdingiz. Har bir darsingiz ma'naviyat bulog'i, qalbimizni tozalovchi tarbiya sabog'i bo'ldi. So'zingiz hamisha keskir, qalamingiz o'tkir, qadringiz doimo baland bo'lsin! Bayramingiz muborak bo'lsin!",
    signature: "So'z sehri bilan qurollangan shogirdingiz"
  },
  {
    id: 9,
    category: "literature",
    categoryName: "Ona Tili va Adabiyot",
    icon: "🖋️",
    title: "Qalb Satrlarini Bituvchi Muhtarama Ustoz",
    quote: "Kitob o'qigan inson minglab hayotlarni yashab o'tadi.",
    author: "Adabiyot xazinasidan",
    text: "Siz bizga kitobni sevishni, qahramonlarning kechinmalariga sherik bo'lishni va hayotni adabiyot ko'zgusida teran anglashni o'rgatdingiz. Siz tufayli qalbimizda ezgulikka, go'zallikka bo'lgan muhabbat uyg'ondi. Bayramingiz bilan tabriklaymiz, sizga uzoq umr, cheksiz ijodiy parvozlar va mustahkam sog'liq tilaymiz!",
    signature: "Sizni yuksak qadrlaydigan shogirdingiz"
  },

  // --- FIZIKA VA ASTRONOMIYA ---
  {
    id: 10,
    category: "physics",
    categoryName: "Fizika va Astronomiya",
    icon: "⚡",
    title: "Koinot Sirlari va Yorug'lik Qonuni",
    quote: "Tabiat kitobi matematika va fizika tilida yozilgandir.",
    author: "Galileo Galiley",
    text: "Hurmatli fizika ustozi! Siz bizga olam qonunlarini, tortishish kuchini, energiyaning saqlanish qonunini va yorug'likning tabiatini tushuntirdingiz. Eng muhimi, hayotdagi qiyinchiliklar qarshisida inertsiya bo'yicha to'xtab qolmaslikni, doimo oldinga intilish kuchini berdingiz. Sizning nurli qalbingiz koinotdagi eng yorqin yulduzlardan-da yorug'roqdir. Bayramingiz qutlug' bo'lsin!",
    signature: "Kosmik quvvat va minnatdorchilik bilan shogirdingiz"
  },
  {
    id: 11,
    category: "physics",
    categoryName: "Fizika va Koinot",
    icon: "🔭",
    title: "Katta Olamning Mo''jizaviy Kashfiyotchisi",
    quote: "Tasavvur bilimdan ko'ra muhimroqdir, chunki bilim cheklangan, tasavvur esa butun dunyoni qamrab oladi.",
    author: "Albert Eynshteyn",
    text: "Koinotning cheksiz kengliklarini, atomlarning nozik harakatini bizga ko'rsatgan aziz ustozimiz! Siz darslaringiz orqali bizda izlanish, sinash va kashf qilish shijoatini uyg'otdingiz. Hayotingizdagi potensial energiya doimo quvonchli kinetik harakatlarga aylansin! 1-oktyabr bayramingiz muborak bo'lsin!",
    signature: "Hurmat bilan shogirdingiz"
  },

  // --- KIMYO VA BIOLOGIYA ---
  {
    id: 12,
    category: "chemistry",
    categoryName: "Kimyo va Biologiya",
    icon: "🧪",
    title: "Hayot Zanjiri va Mehru Muhabbat Reaksiyasi",
    quote: "Tabiat — eng buyuk laboratoriyadir, uni tushungan inson esa mo''jizalar guvohi bo'ladi.",
    author: "M.V. Lomonosov",
    text: "Qadrli kimyo va biologiya ustozi! Siz bizga tiriklikning molekulyar asosi, DNK sirlari, elementlar davriy jadvali va tabiatning uyg'unligini o'rgatdingiz. Ammo eng muhimi — siz bizga do'stlik, mehr va insoniylik qorishmasidan iborat eng sof 'reaksiya'ni ko'rsatdingiz. Sizning sabringiz katalizator, o'gitlaringiz esa biz uchun hayotiy vitamin bo'ldi. Bayramingiz muborak, hayotingiz doimo musaffo bo'lsin!",
    signature: "Tiriklik sirlariga oshno bo'lgan shogirdingiz"
  },

  // --- CHET TILLARI (INGLIZ TILI VA BOSHQALAR) ---
  {
    id: 13,
    category: "languages",
    categoryName: "Xorijiy Tillar (Ingliz tili)",
    icon: "🌍",
    title: "Dunyoni Bizga Oflagan Global Murabbiy",
    quote: "To have another language is to possess a second soul.",
    author: "Charlemagne",
    text: "Dear Teacher! Siz bizga xorijiy tillarni o'rgatish bilan birga, dunyo madaniyati eshiklarini, global imkoniyatlar ufqini ochib berdingiz. Har bir yangi so'z, har bir grammatik saboq bizni jahon miqyosidagi yuksak marralarga yaqinlashtirdi. Thank you for your dedication, endless patience, and inspiration! May your life be full of happiness, great achievements, and joy! Happy Teachers' Day!",
    signature: "With deepest respect and gratitude, your student"
  },
  {
    id: 14,
    category: "languages",
    categoryName: "Xorijiy Tillar",
    icon: "✈️",
    title: "Chegarasiz Dunyo Qanotlarini Bergan Ustoz",
    quote: "Til bilgan — el bilar, dunyo kezib yo'l topar.",
    author: "Xalq maqoli",
    text: "Har bir xalqning tili — uning ruhiyatidir. Siz bizga dunyo xalqlari bilan erkin muloqot qilish, chet el adabiyotlarini aslida o'qish va jahon minbarlarida so'zlay olish ishonchini berdingiz. Bayramingiz qutlug' bo'lsin! Omon bo'ling, mehnatingiz mevasi doimo sizni quvontirsin!",
    signature: "Shogirdingizdan ehtirom bilan"
  },

  // --- TARIX VA GEOGRAFIYA ---
  {
    id: 15,
    category: "history",
    categoryName: "Tarix va Geografiya",
    icon: "🗺️",
    title: "O'tmish Ibratidan Kelajak Poydevorini Qurguvchi",
    quote: "O'z tarixini bilmagan xalqning kelajagi bo'lmaydi.",
    author: "Amir Temur hikmatlari",
    text: "Muhtaram tarix va geografiya ustozi! Siz bizga buyuk ajdodlarimiz — Amir Temur, Mirzo Ulug'bek, Jaloliddin Manguberdi jasoratlarini, jahon sivilizatsiyalarining ko'tarilishi va yuksalish sabablarini tushuntirdingiz. Yer yuzining har bir qit'asi va meridianida qanday go'zalliklar borligini xaritada jonlantirdingiz. Siz tufayli vatanparvarlik va tariximiz bilan faxrlanish tuyg'usi qonimizga singdi. Bayramingiz qutlug' bo'lsin!",
    signature: "Faxr va g'urur bilan shogirdingiz"
  },

  // --- INFORMATIKA VA AXBOROT TEXNOLOGIYALARI ---
  {
    id: 16,
    category: "it",
    categoryName: "IT va Informatika",
    icon: "💻",
    title: "Kelajak Algoritmlarining Me'mori",
    quote: "Eng qudratli kod — bu inson qalbida qoldirilgan mehr va ilhom kodidir.",
    author: "Raqamli asr hikmati",
    text: "Qadrli IT va dasturlash ustozi! Siz bizga 0 va 1 lardan iborat raqamli olamda qanday qilib yuksak mo''jizalar yaratishni, algoritmlarning mukammalligini va muammolarni tizimli hal qilishni o'rgatdingiz. Hayotingizda hech qanday 'bug' (xato) uchramasin, 'exception'lar faqat quvonchli bo'lsin, barcha orzularingiz muvaffaqiyat bilan 'compile' bo'lib, eng yuqori darajada ishga tushsin! Bayramingiz muborak bo'lsin!",
    signature: "Raqamli olamga yo'l ochgan shogirdingiz"
  },

  // --- BOSHLANG'ICH SINF USTOZLARI ---
  {
    id: 17,
    category: "primary",
    categoryName: "Boshlang'ich Sinf Ustozi",
    icon: "🧸",
    title: "Ilk Harfni O'rgatgan, Ikkinchi Onamiz / Otamiz",
    quote: "Ilk qadamni qo'ygan qo'llarimizni mehr bilan tutgan zot — Muallimdir.",
    author: "Qalb sadosi",
    text: "Mehribon boshlang'ich sinf ustozim! Maktab ostonasiga ilk bor qadam qo'yganimizda, qalam tutishni, 'Ona', 'Vatan' so'zlarini yozishni, kitob o'qishni aynan siz o'rgatgansiz. Sizning beqiyos sabringiz, onalarcha/otalarcha mehringiz bizni katta hayotga tayyorladi. Siz bergan ilk poydevor butun umrimiz davomida bizni yuksaklikka chorlaydi. 1-oktyabr bayramingiz qutlug' bo'lsin, sog'-salomat bo'ling, aziz ustoz!",
    signature: "Kichik qo'llar bilan ilk harfni yozgan shogirdingiz"
  },

  // --- JISMONIY TARBIYA VA SPORT ---
  {
    id: 18,
    category: "sports",
    categoryName: "Jismoniy Tarbiya va Sport",
    icon: "🏆",
    title: "Iroda, Kuch va G'alaba Ruhiyatini Shakllantirgan Murabbiy",
    quote: "G'alaba — faqat jismoniy kuchda emas, eng avvalo qat'iyat va ruhning mustahkamligidadir.",
    author: "Sport falsafasi",
    text: "Muhtaram murabbiy! Siz bizda faqat chaqqonlik va jismoniy baquvvatlikni emas, balki yengilmas iroda, halol kurash, jamoaviy birdamlik va mag'lubiyatlarda ham boshni baland tutib qayta yuksalish xarakterini tarbiyaladingiz. Sizning chaqirig'ingiz, har bir mashg'ulotdagi daldangiz bizni yangi zafarlarga chorladi. Sizga mustahkam sog'liq, cheksiz quvvat va shogirdlaringizning xalqaro shohsupalardagi cheksiz g'alabalari nasib etishini tilaymiz!",
    signature: "G'alaba sari undagan murabbiyiga shogirdidan"
  },

  // --- TASVIRIY SAN'AT VA MUSIQA ---
  {
    id: 19,
    category: "art",
    categoryName: "Tasviriy San'at va Musiqa",
    icon: "🎨",
    title: "Go'zallik va Qalb Ohanglarini Hadyo Etgan Zot",
    quote: "Musiqa va san'at — so'z ojiz qolgan joyda qalb tilida so'zlashadi.",
    author: "L.V. Betxoven",
    text: "Qadrli ustoz! Siz bizga ranglarning sehrini, ohanglarning qalbga orom beruvchi qudratini o'rgatdingiz. Oq qog'ozga hayot nafasini chizishni, musiqada dard va quvonchni ifodalashni ko'rsatdingiz. Siz dunyoni yanada go'zalroq, rang-barangroq va mehrliroq qilib ko'rishimizga sababchisiz. Hayotingiz eng yorqin ranglar va quvnoq notalar bilan to'lib-toshsin! Bayramingiz bilan!",
    signature: "Go'zallikni his qilishni o'rgangan shogirdingiz"
  },

  // --- SHE'RIY VA MUKAMMAL DIL SO'ZLARI ---
  {
    id: 20,
    category: "general",
    categoryName: "She'riy Qutlov",
    icon: "🌸",
    title: "Ustozga Ehtirom va Madh",
    quote: "Ustozlar poyiga sochilsa gullar, / Ta'zimda turadi hatto bulbullar. / Siz sabab charog'on bo'ldi ko'ngillar, / Bayramingiz muborak, aziz ustozlar!",
    author: "Xalq ehtiromi",
    text: "Har tong mehr bilan ostonangizni ochib, sinf xonasini ilm nuri bilan yoritgan, har birimizning xarakterimizga sabr bilan yondashgan muhtarama ustoz! Sizning poyingizga eng go'zal gullar, eng ezgu kalomlar sochilsa ham kam. Siz sababli orzularimiz haqiqatga aylanmoqda. Yuzingizdan mehrli tabassum, qalbingizdan bahoriy tarovat arimasin!",
    signature: "Qalb to'ridan samimiy tilaklar ila"
  },

  {
    id: 21,
    category: "general",
    categoryName: "Chuqur Falsafiy Tilak",
    icon: "🕯️",
    title: "Mangu Yongan Sham Timsoli",
    quote: "Ustoz — o'zini fido qilib, o'zgalar yo'lini yoritgan eng olijanob qalb sohibidir.",
    author: "Sharq hikmati",
    text: "Muhtaram ustoz! O'tib borayotgan yillar inson yuziga ajin solishi mumkin, lekin sizning qalb qo'ringiz va bergan ilmingiz asrlar osha shogirdlaringiz yutug'ida, ularning ezgu amallarida barhayot yashaydi. Sizdek fidoiy insonlar oldida butun jamiyatimiz bosh egadi. Tanimiz salomat, umringiz ziyoda bo'lsin!",
    signature: "Doimiy duoda bo'lgan shogirdingiz"
  },

  {
    id: 22,
    category: "math",
    categoryName: "Matematika va Geometriya",
    icon: "📐",
    title: "Cheksiz Imkoniyatlar va Yuksak Ko'rsatkichlar",
    quote: "Har bir murakkab masala orqasida oddiy va go'zal haqiqat yotadi.",
    author: "Pifagor",
    text: "Qadrli ustoz! Siz bizga Pifagor teoremasidan tortib differensial tenglamalargacha o'rgatganingizda, sabr bilan qiyin narsalarni oddiy va tushunarli qilish mumkinligini isbotladingiz. Qalbingizdagi saxovat cheksiz, umringiz esa eng yorqin, oltin nisbat qoidasiga mos go'zal bo'lsin!",
    signature: "Matematik ehtirom ila"
  },

  {
    id: 23,
    category: "languages",
    categoryName: "Xorijiy Tillar",
    icon: "🌐",
    title: "Global Fikrlovchi Yangi Avlod Murabbiyi",
    quote: "Knowledge of languages is the doorway to wisdom.",
    author: "Roger Bacon",
    text: "Dunyo tillarining boyligini qalbimizga jo qilgan, xalqaro maydonda o'z o'rnimizni topishimizga ishonch bergan sevimli ustozimiz! Har bir darsingiz sayohat, har bir yangi mavzu yangi bir kashfiyot edi. Sizga barcha tillarda aytiladigan eng ezgu: 'Rahmat, Thank you, Merci, Danke!' so'zlarini yo'llaymiz. Bayramingiz muborak bo'lsin!",
    signature: "Dunyo bo'ylab sizni eslovchi shogirdlaringiz"
  },

  {
    id: 24,
    category: "it",
    categoryName: "Dasturlash va IT",
    icon: "⚡",
    title: "Yuqori Samara va Toza Kod Ustasi",
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    text: "Zamonaviy dunyoda eng talabgir ko'nikmalarni, mantiqiy fikrlashni, ma'lumotlar bazasi va sun'iy intellekt davrida to'g'ri fikrlashni o'rgatgan aziz ustoz! Siz bizga nafaqat texnologiyani, balki doimiy yangilanish va o'rganish madaniyatini singdirdingiz. Har kuningiz 'Success 200 OK' bilan o'tsin, serverlaringiz hech qachon qulamasin, baxtingiz cheksiz bo'lsin!",
    signature: "IT sohasidagi shogirdingiz"
  }
];

// O'qituvchilar uchun tasodifiy aforizmlar va qisqa dil so'zlari
const QUICK_QUOTES = [
  "Ustoz otangdek ulug', unga ehtirom ko'rsatish burchingdir.",
  "Ilm istasang, ustoz xizmatini g'animat bil.",
  "Ustoz mehnati — xalq kelajagining poydevoridir.",
  "Har bir muvaffaqiyatli inson ortida bir buyuk Ustoz turadi.",
  "Bir kun saboq bergan ustozga ming kun ta'zim qilsang arziydi.",
  "Ustoz nuri — qorong'u yo'llarda adashtirmas yo'ldoshdir.",
  "Siz bergan bilim — o'g'irlanmas boylik, yo'qolmas xazinadir."
];
