# 🌟 1-Oktyabr — Ustoz va Murabbiylar Kuni Maxsus Veb-Sayti

Ushbu loyiha **1-Oktyabr — O'qituvchi va murabbiylar kuni** munosabati bilan barcha aziz ustozlarimizni chin yurakdan qutlash uchun yaratilgan, 3D animatsiyali, hashamatli oltin dizayndagi interaktiv veb-platformadir.

---

## ✨ Saytning Asosiy Imkoniyatlari:

1. **3D Fazoviy Animatsiyalar (Three.js):**
   - Oltin zarrachalar galaktikasi (sichqoncha yoki barmoq harakatiga qarab harakatlanadi).
   - Markazda nur taratuvchi 3D Oltin Kitob va kosmik halqalar.
2. **Bayramona Mushaklar va Konfetti (Fireworks FX):**
   - Sayt ochilishi bilan osmonda bayram mushaklari otiladi.
   - Ekranning istalgan joyiga bosganda maxsus yaltiroq mushak hosil bo'ladi.
3. **🎁 "Sehrli Sovg'a Sandig'i" (Random Wish Picker):**
   - Ustoz ushbu tugmani bosganda 3D portlash va kutilmagan, yurakdan chiqqan professional tabrik paydo bo'ladi.
4. **Har Xil Fan Ustozlari Uchun Maxsus Tilaklar (50+ ta professional adabiy tilak):**
   - *Matematika, Ona tili va adabiyot, Fizika, Kimyo/Biologiya, Ingliz tili/Xorijiy tillar, Tarix, IT/Dasturlash, Boshlang'ich sinf, Jismoniy tarbiya, San'at* va umumiy falsafiy tabriklar.
5. **✍️ Shaxsiy Tabriknoma Generatori (Personalized Card Builder):**
   - Ustozning ismini va o'zingizning ismingizni kiritasiz.
   - Jonli ko'rinishda zarhal muhrli, rasmiy va samimiy sertifikat/tabriknoma hosil bo'ladi.
   - **📸 "HD Rasm qilib yuklab olish" tugmasi** — tayyor tabriknomani rasm qilib saqlab, Telegram orqali ustozga jo'natish mumkin!
   - **📋 "Nusxalash" va "Telegramda yuborish"** tugmalari mavjud.
6. **🎵 Nafis Fon Musiqasi:**
   - Web Audio API orqali maxsus lirik pianino akkordlari sintezi (ekranning pastki o'ng burchagidagi tugma orqali yoqiladi/o'chiriladi).
7. **📝 Ustozlar Uchun Ehtirom Doskasi (Live Wish Board):**
   - O'quvchilar va mehmonlar o'z tilaklarini qoldirishi mumkin.

---

## 🚀 VERCELGA JOYLAB OLISH (2 XIL OSON USUL)

### 1-USUL: Terminal orqali 1 daqiqada (Eng osoni)
Terminalda (PowerShell) loyiha papkasida turib ushbu buyruqni bering:
```bash
npx vercel
```
- Ekranda savollar chiqadi:
  - `Set up and deploy?` -> `Y` (Enter bosing)
  - `Which scope?` -> o'z Vercel hisobingizni tanlang (Enter)
  - `Link to existing project?` -> `N` (Enter)
  - `What's your project's name?` -> `ustozlar-kuni` (yoki ixtiyoriy nom, Enter)
  - `In which directory is your code located?` -> `./` (Enter)
- **Bo'ldi!** Vercel sizga darhol bepul `https://ustozlar-kuni.vercel.app` linkini taqdim etadi.

---

### 2-USUL: GitHub orqali Vercel Dashboardda
1. Ushbu papkani GitHub-dagi yangi repository-ga yuklang:
   ```bash
   git init
   git add .
   git commit -m "1-Oktyabr bayramona veb-sayti"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
2. [Vercel.com](https://vercel.com) saytiga kiring -> **"Add New Project"** tugmasini bosing.
3. GitHub reponi tanlang va **"Deploy"** tugmasini bosing!
4. 10 soniyada saytingiz tayyor bo'ladi va linkini do'stlaringiz va ustozlaringizga yuborishingiz mumkin!
