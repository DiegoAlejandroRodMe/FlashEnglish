// =============================================
//  MAZO PRECARGADO
//  50 palabras básicas inglés → español
// =============================================
const PRESET_CARDS = [
  { en: 'apple',       es: 'manzana' },
  { en: 'water',       es: 'agua' },
  { en: 'house',       es: 'casa' },
  { en: 'dog',         es: 'perro' },
  { en: 'cat',         es: 'gato' },
  { en: 'book',        es: 'libro' },
  { en: 'friend',      es: 'amigo' },
  { en: 'family',      es: 'familia' },
  { en: 'food',        es: 'comida' },
  { en: 'time',        es: 'tiempo' },
  { en: 'day',         es: 'día' },
  { en: 'night',       es: 'noche' },
  { en: 'school',      es: 'escuela' },
  { en: 'teacher',     es: 'maestro' },
  { en: 'chair',       es: 'silla' },
  { en: 'table',       es: 'mesa' },
  { en: 'window',      es: 'ventana' },
  { en: 'door',        es: 'puerta' },
  { en: 'car',         es: 'carro' },
  { en: 'bus',         es: 'autobús' },
  { en: 'street',      es: 'calle' },
  { en: 'city',        es: 'ciudad' },
  { en: 'country',     es: 'país' },
  { en: 'color',       es: 'color' },
  { en: 'music',       es: 'música' },
  { en: 'phone',       es: 'teléfono' },
  { en: 'money',       es: 'dinero' },
  { en: 'work',        es: 'trabajo' },
  { en: 'game',        es: 'juego' },
  { en: 'sun',         es: 'sol' },
  { en: 'moon',        es: 'luna' },
  { en: 'rain',        es: 'lluvia' },
  { en: 'tree',        es: 'árbol' },
  { en: 'flower',      es: 'flor' },
  { en: 'bird',        es: 'pájaro' },
  { en: 'fish',        es: 'pez' },
  { en: 'bread',       es: 'pan' },
  { en: 'milk',        es: 'leche' },
  { en: 'coffee',      es: 'café' },
  { en: 'tea',         es: 'té' },
  { en: 'shirt',       es: 'camisa' },
  { en: 'shoe',        es: 'zapato' },
  { en: 'hat',         es: 'sombrero' },
  { en: 'eye',         es: 'ojo' },
  { en: 'hand',        es: 'mano' },
  { en: 'heart',       es: 'corazón' },
  { en: 'word',        es: 'palabra' },
  { en: 'letter',      es: 'letra' },
  { en: 'number',      es: 'número' },
  { en: 'dream',       es: 'sueño' },
];

// =============================================
//  ESTADO GLOBAL
// =============================================
let deck        = [];       // mazo activo (mezclado)
let currentIndex = 0;       // índice de la tarjeta actual
let answered    = false;    // si la tarjeta actual ya fue respondida
let sessionCorrect = 0;     // correctas en esta sesión
let sessionWrong   = 0;     // incorrectas en esta sesión

// =============================================
//  PERSISTENCIA (localStorage)
// =============================================
const STORAGE_KEY = 'flashenglish_data';

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      totalCorrect: 0,
      totalWrong:   0,
      hardWords:    {},   // { "palabra": conteo de errores }
      customCards:  [],
    };
  } catch (e) {
    return { totalCorrect: 0, totalWrong: 0, hardWords: {}, customCards: [] };
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// =============================================
//  NAVEGACIÓN ENTRE SECCIONES
// =============================================
function showSection(name) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Mostrar la sección seleccionada
  document.getElementById('section-' + name).classList.add('active');
  document.getElementById('btn-' + name).classList.add('active');

  // Actualizar vistas según la sección
  if (name === 'progress') renderProgress();
  if (name === 'cards')    renderCustomCards();
}

// =============================================
//  CONSTRUCCIÓN DEL MAZO
// =============================================
function buildDeck() {
  const data = loadData();
  // Combina tarjetas precargadas + personalizadas
  const all = [...PRESET_CARDS, ...data.customCards];
  // Mezcla aleatoria (Fisher-Yates)
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

// =============================================
//  MOSTRAR TARJETA
// =============================================
function showCard(index) {
  const card     = deck[index];
  const flashcard = document.getElementById('flashcard');
  const front    = flashcard.querySelector('.card-front');

  // Resetear estado visual
  flashcard.classList.remove('flipped');
  front.classList.remove('correct-state', 'wrong-state');
  document.getElementById('answer-input').classList.remove('correct-input', 'wrong-input');
  document.getElementById('answer-input').value = '';
  document.getElementById('answer-input').disabled = false;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('btn-next').classList.add('hidden');
  document.getElementById('answer-area').style.display = 'flex';

  // Animación de entrada
  flashcard.classList.remove('new-card');
  void flashcard.offsetWidth; // reflow para reiniciar animación
  flashcard.classList.add('new-card');

  // Colocar contenido
  document.getElementById('card-word').textContent = card.en;
  document.getElementById('card-answer-text').textContent = card.es;
  document.getElementById('card-counter').textContent =
    `Tarjeta ${index + 1} de ${deck.length}`;

  // Foco en el input
  setTimeout(() => document.getElementById('answer-input').focus(), 100);

  answered = false;
}

// =============================================
//  VERIFICAR RESPUESTA
// =============================================
function checkAnswer() {
  if (answered) return;

  const input    = document.getElementById('answer-input');
  const userAns  = input.value.trim().toLowerCase();
  const correct  = deck[currentIndex].es.toLowerCase();
  const flashcard = document.getElementById('flashcard');
  const front    = flashcard.querySelector('.card-front');
  const feedback = document.getElementById('feedback');

  if (!userAns) {
    feedback.textContent = 'Escribe tu respuesta primero.';
    feedback.className   = 'feedback';
    return;
  }

  // Normalizar: ignorar tildes y variantes con /
  const normalize = (str) =>
    str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  // Acepta múltiples respuestas separadas por /
  const acceptedAnswers = correct.split('/').map(a => normalize(a.trim()));
  const isCorrect = acceptedAnswers.includes(normalize(userAns));

  // Actualizar datos de progreso
  const data = loadData();
  data.totalCorrect += isCorrect ? 1 : 0;
  data.totalWrong   += isCorrect ? 0 : 1;

  if (!isCorrect) {
    // Registrar como palabra difícil
    const word = deck[currentIndex].en;
    data.hardWords[word] = (data.hardWords[word] || 0) + 1;
  }
  saveData(data);

  // Actualizar stats de sesión
  if (isCorrect) {
    sessionCorrect++;
    document.getElementById('session-correct').textContent = sessionCorrect;
  } else {
    sessionWrong++;
    document.getElementById('session-wrong').textContent = sessionWrong;
  }

  // Feedback visual
  input.disabled = true;

  if (isCorrect) {
    input.classList.add('correct-input');
    front.classList.add('correct-state');
    feedback.textContent = '¡Correcto! 🎉';
    feedback.className   = 'feedback correct';
    // Voltear tarjeta brevemente para mostrar respuesta
    setTimeout(() => flashcard.classList.add('flipped'), 300);
  } else {
    input.classList.add('wrong-input');
    front.classList.add('wrong-state');
    feedback.textContent = `Incorrecto. La respuesta es: "${deck[currentIndex].es}"`;
    feedback.className   = 'feedback wrong';
    setTimeout(() => flashcard.classList.add('flipped'), 400);
  }

  answered = true;
  document.getElementById('btn-next').classList.remove('hidden');
}

// =============================================
//  SIGUIENTE TARJETA
// =============================================
function nextCard() {
  currentIndex++;

  if (currentIndex >= deck.length) {
    // Fin del mazo: reconstruir y empezar de nuevo
    deck = buildDeck();
    currentIndex = 0;

    // Pequeño aviso
    document.getElementById('feedback').textContent = '¡Completaste el mazo! Empezando de nuevo...';
    document.getElementById('feedback').className = 'feedback correct';
    setTimeout(() => showCard(currentIndex), 1200);
    return;
  }

  showCard(currentIndex);
}

// =============================================
//  PROGRESO: RENDERIZAR
// =============================================
function renderProgress() {
  const data = loadData();
  const total = data.totalCorrect + data.totalWrong;
  const pct   = total > 0 ? Math.round((data.totalCorrect / total) * 100) : 0;

  document.getElementById('total-answered').textContent = total;
  document.getElementById('total-correct').textContent  = data.totalCorrect;
  document.getElementById('total-wrong').textContent    = data.totalWrong;
  document.getElementById('accuracy-pct').textContent   = pct + '%';

  // Barra de precisión (animada con pequeño delay)
  setTimeout(() => {
    document.getElementById('accuracy-bar-fill').style.width = pct + '%';
  }, 100);

  // Palabras difíciles (ordenadas por mayor número de errores)
  const hardList = document.getElementById('hard-words-list');
  const hardWords = Object.entries(data.hardWords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8); // máximo 8

  if (hardWords.length === 0) {
    hardList.innerHTML = '<p class="empty-msg">Aún no hay datos suficientes.</p>';
    return;
  }

  hardList.innerHTML = hardWords.map(([word, count]) => `
    <div class="hard-word-item">
      <span class="hard-word-text">${word}</span>
      <span class="hard-word-count">${count} error${count > 1 ? 'es' : ''}</span>
    </div>
  `).join('');
}

// =============================================
//  PROGRESO: RESETEAR
// =============================================
function resetProgress() {
  if (!confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) return;

  const data = loadData();
  data.totalCorrect = 0;
  data.totalWrong   = 0;
  data.hardWords    = {};
  saveData(data);

  sessionCorrect = 0;
  sessionWrong   = 0;
  document.getElementById('session-correct').textContent = '0';
  document.getElementById('session-wrong').textContent   = '0';

  renderProgress();
}

// =============================================
//  TARJETAS PERSONALIZADAS: AGREGAR
// =============================================
function addCard(event) {
  event.preventDefault();

  const enInput = document.getElementById('input-english');
  const esInput = document.getElementById('input-spanish');
  const en = enInput.value.trim();
  const es = esInput.value.trim();

  if (!en || !es) return;

  const data = loadData();

  // Evitar duplicados
  const exists = [...PRESET_CARDS, ...data.customCards]
    .some(c => c.en.toLowerCase() === en.toLowerCase());

  if (exists) {
    alert(`La palabra "${en}" ya existe en el mazo.`);
    return;
  }

  data.customCards.push({ en, es });
  saveData(data);

  // Limpiar formulario
  enInput.value = '';
  esInput.value = '';
  enInput.focus();

  // Reconstruir el mazo para incluir la nueva tarjeta
  deck = buildDeck();

  renderCustomCards();
}

// =============================================
//  TARJETAS PERSONALIZADAS: RENDERIZAR LISTA
// =============================================
function renderCustomCards() {
  const data = loadData();
  const container = document.getElementById('custom-cards-list');

  if (data.customCards.length === 0) {
    container.innerHTML = '<p class="empty-msg">Aún no has agregado tarjetas personalizadas.</p>';
    return;
  }

  container.innerHTML = data.customCards.map((card, index) => `
    <div class="custom-card-item">
      <div class="custom-card-words">
        <span class="custom-card-en">${card.en}</span>
        <span class="custom-card-sep">→</span>
        <span class="custom-card-es">${card.es}</span>
      </div>
      <button class="btn-delete" onclick="deleteCard(${index})" title="Eliminar tarjeta">✕</button>
    </div>
  `).join('');
}

// =============================================
//  TARJETAS PERSONALIZADAS: ELIMINAR
// =============================================
function deleteCard(index) {
  const data = loadData();
  data.customCards.splice(index, 1);
  saveData(data);
  deck = buildDeck();
  renderCustomCards();
}

// =============================================
//  TECLA ENTER PARA VERIFICAR / AVANZAR
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('answer-input').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (!answered) {
      checkAnswer();
    } else {
      nextCard();
    }
  });
});

// =============================================
//  INICIALIZACIÓN
// =============================================
deck = buildDeck();
showCard(currentIndex);
