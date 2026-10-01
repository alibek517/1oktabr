/* ========================================================
   1-OKTYABR USTOZ VA MURABBIYLAR KUNI - INTERACTIVE LOGIC
   ======================================================== */

// --- 1. GLOBAL STATE & INIT ---
let currentCategory = 'all';
let currentWishIndex = 0;
let isAudioPlaying = false;
let audioContext = null;
let audioInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  initFireworks();
  renderWishes();
  initEventListeners();
  initCardGenerator();
  loadUserWishes();

  // Dastlabki bayramona mushak
  setTimeout(() => {
    launchGrandFireworks();
  }, 800);
});

// --- 2. THREE.JS 3D PARTICLE GALAXY & SCENE ---
let scene, camera, renderer, particles, bookMesh;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initThreeJS() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
  camera.position.z = 1000;

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Zarrachalar (Gold & Diamond Stardust)
  const particleCount = 1800;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);

  const goldColor = new THREE.Color('#ffd700');
  const lightGold = new THREE.Color('#fff7cc');
  const amberColor = new THREE.Color('#d4af37');

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2400;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

    const chosenColor = Math.random() > 0.6 ? goldColor : (Math.random() > 0.3 ? lightGold : amberColor);
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;

    scales[i] = Math.random() * 4 + 1;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const material = new THREE.PointsMaterial({
    size: 4,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // 2. Markaziy 3D Oltin Geometriya (3D Kitob / Yulduzli Kristall)
  const bookGroup = new THREE.Group();
  
  // Kitob qovurg'asi va muqovasi
  const coverGeo = new THREE.BoxGeometry(160, 220, 14);
  const coverMat = new THREE.MeshStandardMaterial({
    color: 0xb8860b,
    metalness: 0.85,
    roughness: 0.2,
    wireframe: false
  });
  const coverMesh = new THREE.Mesh(coverGeo, coverMat);
  bookGroup.add(coverMesh);

  // Sahifalar (Oltin yorqinligi)
  const pagesGeo = new THREE.BoxGeometry(150, 210, 18);
  const pagesMat = new THREE.MeshStandardMaterial({
    color: 0xfff4c2,
    metalness: 0.3,
    roughness: 0.5
  });
  const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
  pagesMesh.position.x = 2;
  bookGroup.add(pagesMesh);

  // Oltin lenta / Zarracha halqasi
  const torusGeo = new THREE.TorusGeometry(180, 2, 16, 100);
  const torusMat = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.6 });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.rotation.x = Math.PI / 2.5;
  bookGroup.add(torus);

  // Yana bitta nurli halqa
  const torusGeo2 = new THREE.TorusGeometry(210, 1.5, 16, 100);
  const torusMat2 = new THREE.MeshBasicMaterial({ color: 0xffea79, transparent: true, opacity: 0.4 });
  const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
  torus2.rotation.y = Math.PI / 3;
  bookGroup.add(torus2);

  bookMesh = bookGroup;
  bookMesh.position.y = 80;
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

  // Listeners
  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onTouchMove, { passive: true });

  animate();
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.4;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.4;
}

function onTouchMove(event) {
  if (event.touches.length > 0) {
    mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.4;
    mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.4;
  }
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

// --- 3. FIREWORKS & CONFETTI SYSTEM ---
function initFireworks() {
  window.addEventListener('click', (e) => {
    // Agar tugma yoki input bo'lmasa, ekranda mini mushak hosil qilamiz
    if (!e.target.closest('button, input, select, textarea, a, .clickable')) {
      triggerClickFirework(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    }
  });
}

function triggerClickFirework(x, y) {
  if (typeof confetti === 'undefined') return;
  confetti({
    particleCount: 25,
    spread: 60,
    origin: { x: x, y: y },
    colors: ['#ffd700', '#ffea79', '#ffffff', '#e67e22', '#3498db']
  });
}

function launchGrandFireworks() {
  if (typeof confetti === 'undefined') return;

  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 120 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
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

// --- 4. WISHES RENDERING & CATEGORY FILTERING ---
function renderWishes() {
  const container = document.getElementById('wishes-grid');
  if (!container) return;

  const filtered = currentCategory === 'all'
    ? WISHES_DATABASE
    : WISHES_DATABASE.filter(w => w.category === currentCategory);

  container.innerHTML = '';

  filtered.forEach((wish, idx) => {
    const card = document.createElement('div');
    card.className = 'glass-panel p-6 wish-card flex flex-col justify-between relative overflow-hidden group border border-yellow-500/20';
    card.style.animationDelay = `${idx * 0.05}s`;

    card.innerHTML = `
      <div class="absolute -top-10 -right-10 w-28 h-28 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/25 transition-all"></div>
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl">${wish.icon}</span>
          <span class="text-xs px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-300 shimmer-badge font-medium">
            ${wish.categoryName}
          </span>
        </div>
        <h3 class="text-xl font-bold font-serif text-white mb-2 group-hover:text-yellow-300 transition-colors">
          ${wish.title}
        </h3>
        <p class="text-xs text-yellow-400/90 italic font-garamond mb-3 border-l-2 border-yellow-400 pl-2">
          "${wish.quote}" — <span class="text-gray-300">${wish.author}</span>
        </p>
        <p class="text-gray-300 text-sm leading-relaxed line-clamp-4">
          ${wish.text}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span class="text-xs text-gray-400 italic">${wish.signature}</span>
        <button onclick="openWishModal(${wish.id})" class="text-xs bg-yellow-500/20 hover:bg-yellow-500 text-yellow-300 hover:text-black font-semibold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1">
          <span>To'liq o'qish</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterCategory(category, buttonElement) {
  currentCategory = category;
  
  // Update button active states
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  renderWishes();
}

// --- 5. MODAL SYSTEM ---
function openWishModal(wishId) {
  const wish = WISHES_DATABASE.find(w => w.id === wishId);
  if (!wish) return;

  const modal = document.getElementById('wish-modal');
  const content = document.getElementById('modal-wish-content');

  content.innerHTML = `
    <div class="certificate-frame">
      <div class="corner-ornament corner-tl"></div>
      <div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div>
      <div class="corner-ornament corner-br"></div>

      <div class="text-center mb-6">
        <div class="text-5xl mb-2 animate-bounce">${wish.icon}</div>
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold text-yellow-300 bg-yellow-500/20 border border-yellow-500/40 mb-2">
          ${wish.categoryName}
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold font-serif gold-text">
          ${wish.title}
        </h2>
      </div>

      <div class="bg-black/30 p-4 rounded-xl border border-yellow-500/20 my-4 text-center">
        <p class="text-yellow-200 italic font-garamond text-lg">
          "${wish.quote}"
        </p>
        <p class="text-xs text-gray-400 mt-1">— ${wish.author}</p>
      </div>

      <p class="text-gray-200 text-base sm:text-lg leading-relaxed text-justify indent-6 my-6 font-light">
        ${wish.text}
      </p>

      <div class="flex items-center justify-between pt-4 border-t border-yellow-500/30">
        <div class="text-left">
          <p class="text-xs text-yellow-400 font-semibold uppercase tracking-wider">Shogirdlik Ehtiromi</p>
          <p class="text-sm text-gray-300 italic">${wish.signature}</p>
        </div>
        <div class="gold-seal text-xs font-bold text-black text-center uppercase tracking-tighter">
          1-OKT<br>BAYRAM
        </div>
      </div>

      <div class="mt-8 flex flex-wrap gap-3 justify-center">
        <button onclick="copyWishText(\`${escapeQuotes(wish.title)}\\n\\n${escapeQuotes(wish.text)}\\n\\n— ${escapeQuotes(wish.signature)}\`)" class="px-5 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-95">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          Nusxalash (Telegram)
        </button>
        <button onclick="shareViaTelegram(\`${escapeQuotes(wish.title)}\\n\\n${escapeQuotes(wish.text)}\`)" class="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-95">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
          Telegramda Yuborish
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
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

function escapeQuotes(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, '\\n');
}

// --- 6. RANDOM WISH BOX (SEHRLI SOVG'A SANDIG'I) ---
function openMagicGift() {
  const randomIndex = Math.floor(Math.random() * WISHES_DATABASE.length);
  const wish = WISHES_DATABASE[randomIndex];

  // Ovoz va mushaklar
  playSparkleSound();
  launchGrandFireworks();

  // Modalni ochamiz
  openWishModal(wish.id);
}

// --- 7. SHAXSIY TABRIKNOMA GENERATORI (CUSTOM CARD BUILDER) ---
function initCardGenerator() {
  const teacherInput = document.getElementById('gen-teacher-name');
  const studentInput = document.getElementById('gen-student-name');
  const categorySelect = document.getElementById('gen-subject');
  const customMessageInput = document.getElementById('gen-custom-msg');

  if (!teacherInput) return;

  function updatePreview() {
    const teacherName = teacherInput.value.trim() || "Hurmatli va Mehribon Ustozim!";
    const studentName = studentInput.value.trim() || "Sizni cheksiz qadrlovchi shogirdingiz";
    const selectedCategory = categorySelect.value;
    const customMsg = customMessageInput.value.trim();

    document.getElementById('card-preview-teacher').innerText = teacherName;
    document.getElementById('card-preview-student').innerText = studentName;

    if (customMsg) {
      document.getElementById('card-preview-text').innerText = customMsg;
    } else {
      // Fan bo'yicha mos tilakni topamiz
      const matched = WISHES_DATABASE.find(w => w.category === selectedCategory) || WISHES_DATABASE[0];
      document.getElementById('card-preview-text').innerText = matched.text;
      document.getElementById('card-preview-quote').innerText = `"${matched.quote}" — ${matched.author}`;
    }
  }

  teacherInput.addEventListener('input', updatePreview);
  studentInput.addEventListener('input', updatePreview);
  categorySelect.addEventListener('change', updatePreview);
  customMessageInput.addEventListener('input', updatePreview);

  // Dastlabki yangilash
  updatePreview();
}

// Tabriknomani HD Rasm qilib yuklab olish (HTML2CANVAS)
function downloadCardAsImage() {
  const cardElement = document.getElementById('custom-card-render');
  if (!cardElement || typeof html2canvas === 'undefined') {
    alert("Kutubxona yuklanmoqda, iltimos bir necha soniya kuting...");
    return;
  }

  const btn = document.getElementById('btn-download-card');
  const originalText = btn.innerHTML;
  btn.innerHTML = `<span class="animate-spin">⏳</span> Tayyorlanmoqda...`;
  btn.disabled = true;

  html2canvas(cardElement, {
    scale: 2.5,
    useCORS: true,
    backgroundColor: '#070b19'
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `1-Oktyabr-Tabriknoma-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    btn.innerHTML = originalText;
    btn.disabled = false;
    launchGrandFireworks();
  }).catch(err => {
    console.error(err);
    alert("Rasmni saqlashda xatolik yuz berdi. Qayta urinib ko'ring.");
    btn.innerHTML = originalText;
    btn.disabled = false;
  });
}

// Telegramga tayyor tabrik matnini nusxalash
function copyGeneratedCardText() {
  const teacher = document.getElementById('card-preview-teacher').innerText;
  const text = document.getElementById('card-preview-text').innerText;
  const quote = document.getElementById('card-preview-quote').innerText;
  const student = document.getElementById('card-preview-student').innerText;

  const fullText = `🌟 1-OKTYABR — USTOZ VA MURABBIYLAR KUNI MUBORAK BO'LSIN! 🌟\n\nQadrli: ${teacher}\n\n${quote}\n\n${text}\n\nEhtirom va minnatdorchilik bilan: ${student}\n\n✨ Ushbu tabriknoma orqali chin qalbimdan qutlayman!`;

  copyWishText(fullText);
}

// Telegram orqali ulashish
function shareGeneratedCardTelegram() {
  const teacher = document.getElementById('card-preview-teacher').innerText;
  const text = document.getElementById('card-preview-text').innerText;
  const student = document.getElementById('card-preview-student').innerText;

  const message = `🌟 1-OKTYABR — USTOZ VA MURABBIYLAR KUNI! 🌟\n\nQadrli: ${teacher}\n\n${text}\n\nHurmat bilan: ${student}`;
  shareViaTelegram(message);
}

// --- 8. AUDIO & SOUND EFFECTS (WEB AUDIO API SYNTHESIZER) ---
function toggleAudio() {
  const btn = document.getElementById('music-toggle-btn');

  if (isAudioPlaying) {
    stopAmbientMusic();
    btn.classList.add('music-muted');
  } else {
    startAmbientMusic();
    btn.classList.remove('music-muted');
  }
}

function startAmbientMusic() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioContext) audioContext = new AudioCtx();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    isAudioPlaying = true;

    // Musiqiy akkordlar va pianino ohangi (C, G, Am, F lirik garmoniya)
    const melody = [
      261.63, 329.63, 392.00, 523.25, // C chord
      196.00, 246.94, 293.66, 392.00, // G chord
      220.00, 261.63, 329.63, 440.00, // Am chord
      174.61, 220.00, 261.63, 349.23  // F chord
    ];
    let noteIdx = 0;

    audioInterval = setInterval(() => {
      if (!isAudioPlaying) return;
      playSoftNote(melody[noteIdx % melody.length], 1.2);
      if (noteIdx % 4 === 0) {
        // Chuqur bas
        playSoftNote(melody[noteIdx % melody.length] / 2, 2.0, 'sine', 0.15);
      }
      noteIdx++;
    }, 700);

  } catch (e) {
    console.warn("Audio Context init error", e);
  }
}

function stopAmbientMusic() {
  isAudioPlaying = false;
  if (audioInterval) clearInterval(audioInterval);
}

function playSoftNote(freq, duration = 1.0, type = 'sine', volume = 0.12) {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioContext.currentTime);

  gain.gain.setValueAtTime(volume, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start();
  osc.stop(audioContext.currentTime + duration);
}

function playSparkleSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioContext) audioContext = new AudioCtx();
    if (audioContext.state === 'suspended') audioContext.resume();

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((f, i) => {
      setTimeout(() => {
        playSoftNote(f, 0.4, 'triangle', 0.15);
      }, i * 70);
    });
  } catch(e) {}
}

// --- 9. TILAKLAR DOSKASI (INTERACTIVE WISH WALL) ---
function submitUserWish(event) {
  event.preventDefault();
  const nameInput = document.getElementById('wall-author-name');
  const textInput = document.getElementById('wall-wish-text');

  const author = nameInput.value.trim() || "Anonim Shogird";
  const text = textInput.value.trim();

  if (!text) return;

  const newWish = {
    id: Date.now(),
    author,
    text,
    date: new Date().toLocaleDateString('uz-UZ')
  };

  const stored = JSON.parse(localStorage.getItem('teacher_wishes') || '[]');
  stored.unshift(newWish);
  localStorage.setItem('teacher_wishes', JSON.stringify(stored));

  nameInput.value = '';
  textInput.value = '';

  loadUserWishes();
  launchGrandFireworks();
  alert("Tilagingiz qabul qilindi va ehtirom doskasiga joylandi! Rahmat!");
}

function loadUserWishes() {
  const container = document.getElementById('user-wishes-container');
  if (!container) return;

  const initialSamples = [
    { author: "Azizbek R.", text: "Bizga saboq bergan barcha muallimlarga ta'zimdamiz! Bayramingiz qutlug' bo'lsin!", date: "01.10.2026" },
    { author: "Nilufar Qosimova", text: "Aziza opa, siz dunyodagi eng mehribon ustozsiz! Doim yuzingizdan tabassum arimasin!", date: "01.10.2026" },
    { author: "11-B sinf bitiruvchilari", text: "Maktabimiz faxri bo'lgan barcha ustozlarimizga sihat-salomatlik va cheksiz baxt tilaymiz!", date: "01.10.2026" }
  ];

  const stored = JSON.parse(localStorage.getItem('teacher_wishes') || '[]');
  const allWishes = [...stored, ...initialSamples];

  container.innerHTML = allWishes.map(item => `
    <div class="glass-panel p-5 border border-yellow-500/20 relative">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-yellow-300 text-sm flex items-center gap-1.5">
          <span>✨</span> ${item.author}
        </span>
        <span class="text-xs text-gray-400">${item.date}</span>
      </div>
      <p class="text-gray-200 text-sm leading-relaxed">${item.text}</p>
    </div>
  `).join('');
}

// --- 10. UTILITY FUNCTIONS ---
function copyWishText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Tabrik matni nusxalandi! Endi Telegram yoki WhatsApp orqali ustozingizga yuborishingiz mumkin.");
  }).catch(() => {
    alert("Nusxalash imkoni bo'lmadi. Matnni belgilab nusxalang.");
  });
}

function shareViaTelegram(text) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function initEventListeners() {
  // ESC tugmasi bilan modalni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeWishModal();
  });
}
