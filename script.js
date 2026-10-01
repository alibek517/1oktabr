/* ========================================================
   1-OKTYABR USTOZ VA MURABBIYLAR KUNI - INTERACTIVE LOGIC
   ======================================================== */

let currentActiveSubjectId = 'general';
let isAudioPlaying = false;
let audioContext = null;
let audioInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  renderSubjectCards();
  initFireworks();
  loadUserWishes();

  // Dastlabki bayramona mushak
  setTimeout(() => {
    launchGrandFireworks();
  }, 600);
});

// --- 1. RENDER SUBJECT SELECTION CARDS ---
function renderSubjectCards() {
  const container = document.getElementById('subject-cards-container');
  if (!container) return;

  container.innerHTML = '';

  SUBJECTS_CONFIG.forEach((subj) => {
    const card = document.createElement('div');
    card.className = 'glass-panel p-6 subject-card flex flex-col justify-between border border-yellow-500/25 group';
    card.onclick = () => selectSubject(subj.id);

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-4xl group-hover:scale-125 transition-transform duration-300">${subj.icon}</span>
          <span class="text-[11px] px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-300 shimmer-badge font-semibold uppercase">
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
        <span class="text-xs text-yellow-400 font-semibold group-hover:underline">Ustiga bosing &rarr;</span>
        <span class="text-xs bg-yellow-500/20 group-hover:bg-yellow-500 text-yellow-300 group-hover:text-black font-bold px-3 py-1.5 rounded-full transition-all">
          Ochish
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- 2. SELECT SUBJECT & SHOW WISH MODAL ---
function selectSubject(subjectId) {
  currentActiveSubjectId = subjectId;
  showNextWishForCurrentSubject();
}

function showNextWishForCurrentSubject() {
  const wish = getRandomWishForSubject(currentActiveSubjectId);
  if (!wish) return;

  playSparkleSound();
  launchGrandFireworks();

  const modal = document.getElementById('wish-modal');
  const content = document.getElementById('modal-wish-content');

  content.innerHTML = `
    <div class="certificate-frame">
      <div class="corner-ornament corner-tl"></div>
      <div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div>
      <div class="corner-ornament corner-br"></div>

      <!-- Icon & Subject Header -->
      <div class="text-center mb-6">
        <div class="text-5xl mb-2 animate-bounce">${wish.icon}</div>
        <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-yellow-300 bg-yellow-500/20 border border-yellow-500/50 mb-2 tracking-wide uppercase">
          ${wish.subjectName}
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold font-serif gold-text px-2">
          ${wish.title}
        </h2>
      </div>

      <!-- Quote Box -->
      <div class="bg-black/40 p-4 rounded-xl border border-yellow-500/30 my-4 text-center">
        <p class="text-yellow-200 italic font-garamond text-base sm:text-lg">
          "${wish.quote}"
        </p>
        <p class="text-xs text-gray-400 mt-1">— ${wish.author}</p>
      </div>

      <!-- Main Deep Wish Text -->
      <p class="text-gray-200 text-base sm:text-lg leading-relaxed text-justify indent-6 my-6 font-light">
        ${wish.text}
      </p>

      <!-- Signature & Seal -->
      <div class="flex items-center justify-between pt-4 border-t border-yellow-500/30">
        <div class="text-left">
          <p class="text-xs text-yellow-400 font-bold uppercase tracking-wider">Shogirdlik Ehtiromi</p>
          <p class="text-xs sm:text-sm text-gray-300 italic">${wish.signature}</p>
        </div>
        <div class="gold-seal text-xs font-black text-black text-center uppercase tracking-tighter">
          1-OKT<br>BAYRAM
        </div>
      </div>

      <!-- Action Buttons: "Yana bitta tilak o'qish" & "Boshqa fan" -->
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button onclick="showNextWishForCurrentSubject()" class="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-extrabold text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-btn">
          <span>✨ Yana bitta tilak o'qish (Ustiga bosing) ✨</span>
        </button>
        <button onclick="closeWishModal()" class="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-yellow-300 border border-yellow-500/40 font-semibold text-sm transition-all hover:scale-105 active:scale-95">
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

// Bosh sahifadagi markaziy sovg'a qutisi uchun
function openGeneralMagicWish() {
  currentActiveSubjectId = 'general';
  showNextWishForCurrentSubject();
}

// --- 3. THREE.JS 3D PARTICLE GALAXY & SCENE ---
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

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffd700, 2.5, 1200);
  pointLight.position.set(200, 300, 500);
  scene.add(pointLight);

  const pointLight2 = new THREE.PointLight(0x70a1ff, 1.8, 1200);
  pointLight2.position.set(-300, -200, 300);
  scene.add(pointLight2);

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onTouchMove, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeWishModal();
  });

  animate();
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.35;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.35;
}

function onTouchMove(event) {
  if (event.touches.length > 0) {
    mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.35;
    mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.35;
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

// --- 4. FIREWORKS & CONFETTI SYSTEM ---
function initFireworks() {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('button, input, textarea, a, .modal-close-btn')) {
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

// --- 5. AUDIO & SOUND EFFECTS (WEB AUDIO API) ---
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
    if (audioContext.state === 'suspended') audioContext.resume();

    isAudioPlaying = true;
    const melody = [261.63, 329.63, 392.00, 523.25, 196.00, 246.94, 293.66, 392.00, 220.00, 261.63, 329.63, 440.00, 174.61, 220.00, 261.63, 349.23];
    let noteIdx = 0;

    audioInterval = setInterval(() => {
      if (!isAudioPlaying) return;
      playSoftNote(melody[noteIdx % melody.length], 1.2);
      if (noteIdx % 4 === 0) {
        playSoftNote(melody[noteIdx % melody.length] / 2, 2.0, 'sine', 0.15);
      }
      noteIdx++;
    }, 700);
  } catch (e) {
    console.warn("Audio Context error", e);
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

// --- 6. TILAKLAR DOSKASI (WISH WALL) ---
function submitUserWish(event) {
  event.preventDefault();
  const nameInput = document.getElementById('wall-author-name');
  const textInput = document.getElementById('wall-wish-text');

  const author = nameInput.value.trim() || "Shogird";
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
