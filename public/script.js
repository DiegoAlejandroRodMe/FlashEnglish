// =============================================
//  MAZO POR NIVELES DE DIFICULTAD
//  500 palabras divididas en 5 niveles (100 c/u)
// =============================================

const WORDS_BY_LEVEL = {
  1: [
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
    { en: 'bed',         es: 'cama' },
    { en: 'room',        es: 'habitación' },
    { en: 'kitchen',     es: 'cocina' },
    { en: 'bathroom',    es: 'baño' },
    { en: 'garden',      es: 'jardín' },
    { en: 'park',        es: 'parque' },
    { en: 'store',       es: 'tienda' },
    { en: 'market',      es: 'mercado' },
    { en: 'bank',        es: 'banco' },
    { en: 'hospital',    es: 'hospital' },
    { en: 'doctor',      es: 'médico' },
    { en: 'child',       es: 'niño' },
    { en: 'baby',        es: 'bebé' },
    { en: 'man',         es: 'hombre' },
    { en: 'woman',       es: 'mujer' },
    { en: 'boy',         es: 'chico' },
    { en: 'girl',        es: 'chica' },
    { en: 'mother',      es: 'madre' },
    { en: 'father',      es: 'padre' },
    { en: 'brother',     es: 'hermano' },
    { en: 'sister',      es: 'hermana' },
    { en: 'name',        es: 'nombre' },
    { en: 'year',        es: 'año' },
    { en: 'week',        es: 'semana' },
    { en: 'month',       es: 'mes' },
    { en: 'hour',        es: 'hora' },
    { en: 'minute',      es: 'minuto' },
    { en: 'morning',     es: 'mañana' },
    { en: 'afternoon',   es: 'tarde' },
    { en: 'evening',     es: 'noche / tarde' },
    { en: 'today',       es: 'hoy' },
    { en: 'tomorrow',    es: 'mañana' },
    { en: 'yesterday',   es: 'ayer' },
    { en: 'hot',         es: 'caliente' },
    { en: 'cold',        es: 'frío' },
    { en: 'big',         es: 'grande' },
    { en: 'small',       es: 'pequeño' },
    { en: 'good',        es: 'bueno' },
    { en: 'bad',         es: 'malo' },
    { en: 'new',         es: 'nuevo' },
    { en: 'old',         es: 'viejo' },
    { en: 'happy',       es: 'feliz' },
    { en: 'sad',         es: 'triste' },
    { en: 'fast',        es: 'rápido' },
    { en: 'slow',        es: 'lento' },
    { en: 'open',        es: 'abierto' },
    { en: 'closed',      es: 'cerrado' },
    { en: 'yes',         es: 'sí' },
    { en: 'no',          es: 'no' },
  ],

  2: [
    { en: 'airport',     es: 'aeropuerto' },
    { en: 'ticket',      es: 'boleto' },
    { en: 'travel',      es: 'viaje' },
    { en: 'hotel',       es: 'hotel' },
    { en: 'beach',       es: 'playa' },
    { en: 'mountain',    es: 'montaña' },
    { en: 'river',       es: 'río' },
    { en: 'forest',      es: 'bosque' },
    { en: 'island',      es: 'isla' },
    { en: 'village',     es: 'pueblo' },
    { en: 'bridge',      es: 'puente' },
    { en: 'map',         es: 'mapa' },
    { en: 'language',    es: 'idioma' },
    { en: 'class',       es: 'clase' },
    { en: 'homework',    es: 'tarea' },
    { en: 'exam',        es: 'examen' },
    { en: 'grade',       es: 'calificación' },
    { en: 'university',  es: 'universidad' },
    { en: 'library',     es: 'biblioteca' },
    { en: 'office',      es: 'oficina' },
    { en: 'meeting',     es: 'reunión' },
    { en: 'salary',      es: 'salario' },
    { en: 'computer',    es: 'computadora' },
    { en: 'keyboard',    es: 'teclado' },
    { en: 'screen',      es: 'pantalla' },
    { en: 'email',       es: 'correo electrónico' },
    { en: 'password',    es: 'contraseña' },
    { en: 'website',     es: 'sitio web' },
    { en: 'internet',    es: 'internet' },
    { en: 'camera',      es: 'cámara' },
    { en: 'picture',     es: 'foto / imagen' },
    { en: 'movie',       es: 'película' },
    { en: 'song',        es: 'canción' },
    { en: 'concert',     es: 'concierto' },
    { en: 'sport',       es: 'deporte' },
    { en: 'team',        es: 'equipo' },
    { en: 'player',      es: 'jugador' },
    { en: 'match',       es: 'partido' },
    { en: 'winner',      es: 'ganador' },
    { en: 'prize',       es: 'premio' },
    { en: 'party',       es: 'fiesta' },
    { en: 'birthday',    es: 'cumpleaños' },
    { en: 'gift',        es: 'regalo' },
    { en: 'cake',        es: 'pastel' },
    { en: 'dinner',      es: 'cena' },
    { en: 'lunch',       es: 'almuerzo' },
    { en: 'breakfast',   es: 'desayuno' },
    { en: 'restaurant',  es: 'restaurante' },
    { en: 'menu',        es: 'menú' },
    { en: 'waiter',      es: 'mesero' },
    { en: 'bill',        es: 'cuenta' },
    { en: 'medicine',    es: 'medicina' },
    { en: 'headache',    es: 'dolor de cabeza' },
    { en: 'fever',       es: 'fiebre' },
    { en: 'pharmacy',    es: 'farmacia' },
    { en: 'exercise',    es: 'ejercicio' },
    { en: 'health',      es: 'salud' },
    { en: 'habit',       es: 'hábito' },
    { en: 'weather',     es: 'clima' },
    { en: 'cloud',       es: 'nube' },
    { en: 'wind',        es: 'viento' },
    { en: 'storm',       es: 'tormenta' },
    { en: 'snow',        es: 'nieve' },
    { en: 'season',      es: 'estación' },
    { en: 'summer',      es: 'verano' },
    { en: 'winter',      es: 'invierno' },
    { en: 'spring',      es: 'primavera' },
    { en: 'autumn',      es: 'otoño' },
    { en: 'animal',      es: 'animal' },
    { en: 'horse',       es: 'caballo' },
    { en: 'cow',         es: 'vaca' },
    { en: 'pig',         es: 'cerdo' },
    { en: 'chicken',     es: 'pollo' },
    { en: 'rabbit',      es: 'conejo' },
    { en: 'lion',        es: 'león' },
    { en: 'tiger',       es: 'tigre' },
    { en: 'elephant',    es: 'elefante' },
    { en: 'monkey',      es: 'mono' },
    { en: 'snake',       es: 'serpiente' },
    { en: 'red',         es: 'rojo' },
    { en: 'blue',        es: 'azul' },
    { en: 'green',       es: 'verde' },
    { en: 'yellow',      es: 'amarillo' },
    { en: 'black',       es: 'negro' },
    { en: 'white',       es: 'blanco' },
    { en: 'orange',      es: 'naranja' },
    { en: 'purple',      es: 'morado' },
    { en: 'pink',        es: 'rosa' },
    { en: 'brown',       es: 'marrón' },
    { en: 'tall',        es: 'alto' },
    { en: 'short',       es: 'bajo / corto' },
    { en: 'heavy',       es: 'pesado' },
    { en: 'light',       es: 'ligero / luz' },
    { en: 'clean',       es: 'limpio' },
    { en: 'dirty',       es: 'sucio' },
    { en: 'quiet',       es: 'tranquilo' },
    { en: 'loud',        es: 'ruidoso' },
    { en: 'busy',        es: 'ocupado' },
    { en: 'free',        es: 'libre' },
  ],

  3: [
    { en: 'ambition',    es: 'ambición' },
    { en: 'achieve',     es: 'lograr' },
    { en: 'adventure',   es: 'aventura' },
    { en: 'opportunity', es: 'oportunidad' },
    { en: 'challenge',   es: 'desafío' },
    { en: 'solution',    es: 'solución' },
    { en: 'strategy',    es: 'estrategia' },
    { en: 'decision',    es: 'decisión' },
    { en: 'result',      es: 'resultado' },
    { en: 'success',     es: 'éxito' },
    { en: 'failure',     es: 'fracaso' },
    { en: 'experience',  es: 'experiencia' },
    { en: 'knowledge',   es: 'conocimiento' },
    { en: 'skill',       es: 'habilidad' },
    { en: 'talent',      es: 'talento' },
    { en: 'creativity',  es: 'creatividad' },
    { en: 'imagination', es: 'imaginación' },
    { en: 'memory',      es: 'memoria' },
    { en: 'attention',   es: 'atención' },
    { en: 'patience',    es: 'paciencia' },
    { en: 'confidence',  es: 'confianza' },
    { en: 'courage',     es: 'valentía' },
    { en: 'respect',     es: 'respeto' },
    { en: 'trust',       es: 'confianza / trust' },
    { en: 'loyalty',     es: 'lealtad' },
    { en: 'honesty',     es: 'honestidad' },
    { en: 'freedom',     es: 'libertad' },
    { en: 'justice',     es: 'justicia' },
    { en: 'equality',    es: 'igualdad' },
    { en: 'peace',       es: 'paz' },
    { en: 'war',         es: 'guerra' },
    { en: 'government',  es: 'gobierno' },
    { en: 'election',    es: 'elección' },
    { en: 'vote',        es: 'voto' },
    { en: 'law',         es: 'ley' },
    { en: 'crime',       es: 'crimen' },
    { en: 'evidence',    es: 'evidencia' },
    { en: 'trial',       es: 'juicio' },
    { en: 'judge',       es: 'juez' },
    { en: 'lawyer',      es: 'abogado' },
    { en: 'company',     es: 'empresa' },
    { en: 'industry',    es: 'industria' },
    { en: 'economy',     es: 'economía' },
    { en: 'investment',  es: 'inversión' },
    { en: 'profit',      es: 'ganancia' },
    { en: 'loss',        es: 'pérdida' },
    { en: 'debt',        es: 'deuda' },
    { en: 'budget',      es: 'presupuesto' },
    { en: 'contract',    es: 'contrato' },
    { en: 'agreement',   es: 'acuerdo' },
    { en: 'proposal',    es: 'propuesta' },
    { en: 'project',     es: 'proyecto' },
    { en: 'deadline',    es: 'fecha límite' },
    { en: 'report',      es: 'informe' },
    { en: 'research',    es: 'investigación' },
    { en: 'survey',      es: 'encuesta' },
    { en: 'data',        es: 'datos' },
    { en: 'analysis',    es: 'análisis' },
    { en: 'conclusion',  es: 'conclusión' },
    { en: 'technology',  es: 'tecnología' },
    { en: 'software',    es: 'software' },
    { en: 'hardware',    es: 'hardware' },
    { en: 'network',     es: 'red' },
    { en: 'database',    es: 'base de datos' },
    { en: 'algorithm',   es: 'algoritmo' },
    { en: 'interface',   es: 'interfaz' },
    { en: 'design',      es: 'diseño' },
    { en: 'process',     es: 'proceso' },
    { en: 'system',      es: 'sistema' },
    { en: 'culture',     es: 'cultura' },
    { en: 'tradition',   es: 'tradición' },
    { en: 'ceremony',    es: 'ceremonia' },
    { en: 'religion',    es: 'religión' },
    { en: 'belief',      es: 'creencia' },
    { en: 'society',     es: 'sociedad' },
    { en: 'community',   es: 'comunidad' },
    { en: 'neighborhood',es: 'vecindario' },
    { en: 'population',  es: 'población' },
    { en: 'generation',  es: 'generación' },
    { en: 'environment', es: 'medio ambiente' },
    { en: 'pollution',   es: 'contaminación' },
    { en: 'climate',     es: 'clima' },
    { en: 'energy',      es: 'energía' },
    { en: 'resource',    es: 'recurso' },
    { en: 'nature',      es: 'naturaleza' },
    { en: 'species',     es: 'especie' },
    { en: 'extinction',  es: 'extinción' },
    { en: 'disaster',    es: 'desastre' },
    { en: 'earthquake',  es: 'terremoto' },
    { en: 'flood',       es: 'inundación' },
    { en: 'drought',     es: 'sequía' },
    { en: 'prevention',  es: 'prevención' },
    { en: 'protection',  es: 'protección' },
    { en: 'awareness',   es: 'conciencia' },
    { en: 'influence',   es: 'influencia' },
    { en: 'impact',      es: 'impacto' },
    { en: 'benefit',     es: 'beneficio' },
    { en: 'risk',        es: 'riesgo' },
  ],

  4: [
    { en: 'ambiguous',   es: 'ambiguo' },
    { en: 'diligent',    es: 'diligente' },
    { en: 'eloquent',    es: 'elocuente' },
    { en: 'frugal',      es: 'frugal' },
    { en: 'gregarious',  es: 'gregario' },
    { en: 'humble',      es: 'humilde' },
    { en: 'impartial',   es: 'imparcial' },
    { en: 'judicious',   es: 'juicioso' },
    { en: 'lenient',     es: 'indulgente' },
    { en: 'meticulous',  es: 'meticuloso' },
    { en: 'notorious',   es: 'notorio' },
    { en: 'oblivious',   es: 'inconsciente' },
    { en: 'pragmatic',   es: 'pragmático' },
    { en: 'resilient',   es: 'resiliente' },
    { en: 'skeptical',   es: 'escéptico' },
    { en: 'tenacious',   es: 'tenaz' },
    { en: 'versatile',   es: 'versátil' },
    { en: 'vulnerable',  es: 'vulnerable' },
    { en: 'wholesome',   es: 'saludable' },
    { en: 'zealous',     es: 'celoso / apasionado' },
    { en: 'abolish',     es: 'abolir' },
    { en: 'acquire',     es: 'adquirir' },
    { en: 'advocate',    es: 'abogar / defensor' },
    { en: 'allocate',    es: 'asignar' },
    { en: 'anticipate',  es: 'anticipar' },
    { en: 'appreciate',  es: 'apreciar' },
    { en: 'assess',      es: 'evaluar' },
    { en: 'assume',      es: 'asumir' },
    { en: 'attribute',   es: 'atribuir' },
    { en: 'collaborate', es: 'colaborar' },
    { en: 'compensate',  es: 'compensar' },
    { en: 'concentrate', es: 'concentrarse' },
    { en: 'contribute',  es: 'contribuir' },
    { en: 'convince',    es: 'convencer' },
    { en: 'demonstrate', es: 'demostrar' },
    { en: 'emphasize',   es: 'enfatizar' },
    { en: 'evaluate',    es: 'evaluar' },
    { en: 'facilitate',  es: 'facilitar' },
    { en: 'generate',    es: 'generar' },
    { en: 'implement',   es: 'implementar' },
    { en: 'integrate',   es: 'integrar' },
    { en: 'justify',     es: 'justificar' },
    { en: 'maintain',    es: 'mantener' },
    { en: 'negotiate',   es: 'negociar' },
    { en: 'obtain',      es: 'obtener' },
    { en: 'perceive',    es: 'percibir' },
    { en: 'persuade',    es: 'persuadir' },
    { en: 'prioritize',  es: 'priorizar' },
    { en: 'reinforce',   es: 'reforzar' },
    { en: 'represent',   es: 'representar' },
    { en: 'accommodate', es: 'acomodar' },
    { en: 'acknowledge', es: 'reconocer' },
    { en: 'breakthrough',es: 'avance decisivo' },
    { en: 'circumstance',es: 'circunstancia' },
    { en: 'consequence', es: 'consecuencia' },
    { en: 'controversy', es: 'controversia' },
    { en: 'deliberate',  es: 'deliberado' },
    { en: 'distinction', es: 'distinción' },
    { en: 'empathy',     es: 'empatía' },
    { en: 'expertise',   es: 'experiencia / pericia' },
    { en: 'feasible',    es: 'factible' },
    { en: 'hierarchy',   es: 'jerarquía' },
    { en: 'inconsistent',es: 'inconsistente' },
    { en: 'initiative',  es: 'iniciativa' },
    { en: 'integrity',   es: 'integridad' },
    { en: 'legitimate',  es: 'legítimo' },
    { en: 'methodology', es: 'metodología' },
    { en: 'perception',  es: 'percepción' },
    { en: 'perspective', es: 'perspectiva' },
    { en: 'phenomenon',  es: 'fenómeno' },
    { en: 'precedent',   es: 'precedente' },
    { en: 'redundant',   es: 'redundante' },
    { en: 'relevant',    es: 'relevante' },
    { en: 'spontaneous', es: 'espontáneo' },
    { en: 'substantial', es: 'sustancial' },
    { en: 'transparent', es: 'transparente' },
    { en: 'underlying',  es: 'subyacente' },
    { en: 'ambivalent',  es: 'ambivalente' },
    { en: 'complacent',  es: 'complaciente' },
    { en: 'detrimental', es: 'perjudicial' },
    { en: 'discrepancy', es: 'discrepancia' },
    { en: 'endeavor',    es: 'esfuerzo / empeño' },
    { en: 'fluctuate',   es: 'fluctuar' },
    { en: 'forthcoming', es: 'próximo / accesible' },
    { en: 'inevitable',  es: 'inevitable' },
    { en: 'obscure',     es: 'oscuro / poco claro' },
    { en: 'paramount',   es: 'primordial' },
    { en: 'plausible',   es: 'plausible' },
    { en: 'profound',    es: 'profundo' },
    { en: 'rigorous',    es: 'riguroso' },
    { en: 'scrutiny',    es: 'escrutinio' },
    { en: 'transient',   es: 'transitorio' },
    { en: 'unprecedented',es: 'sin precedentes' },
    { en: 'viable',      es: 'viable' },
    { en: 'volatile',    es: 'volátil' },
    { en: 'withstand',   es: 'resistir' },
    { en: 'yield',       es: 'ceder / producir' },
    { en: 'threshold',   es: 'umbral' },
  ],

  5: [
    { en: 'abdicate',     es: 'abdicar' },
    { en: 'aberration',   es: 'aberración' },
    { en: 'abstruse',     es: 'abstruso' },
    { en: 'acrimony',     es: 'acrimonia' },
    { en: 'acumen',       es: 'perspicacia' },
    { en: 'admonish',     es: 'amonestar' },
    { en: 'adroit',       es: 'hábil / diestro' },
    { en: 'affable',      es: 'afable' },
    { en: 'alacrity',     es: 'diligencia / presteza' },
    { en: 'alleviate',    es: 'aliviar' },
    { en: 'amalgamate',   es: 'amalgamar' },
    { en: 'ameliorate',   es: 'mejorar' },
    { en: 'anachronism',  es: 'anacronismo' },
    { en: 'anomalous',    es: 'anómalo' },
    { en: 'antipathy',    es: 'antipatía' },
    { en: 'apathy',       es: 'apatía' },
    { en: 'arcane',       es: 'arcano / misterioso' },
    { en: 'arduous',      es: 'arduo' },
    { en: 'articulate',   es: 'articular / elocuente' },
    { en: 'ascertain',    es: 'determinar / averiguar' },
    { en: 'astute',       es: 'astuto' },
    { en: 'atrophy',      es: 'atrofia' },
    { en: 'audacious',    es: 'audaz' },
    { en: 'augment',      es: 'aumentar' },
    { en: 'auspicious',   es: 'propicio / auspicioso' },
    { en: 'banal',        es: 'banal' },
    { en: 'benevolent',   es: 'benevolente' },
    { en: 'cacophony',    es: 'cacofonía' },
    { en: 'candid',       es: 'cándido / franco' },
    { en: 'capricious',   es: 'caprichoso' },
    { en: 'caustic',      es: 'cáustico' },
    { en: 'circumvent',   es: 'eludir' },
    { en: 'clandestine',  es: 'clandestino' },
    { en: 'coerce',       es: 'coaccionar' },
    { en: 'cogent',       es: 'convincente' },
    { en: 'coherent',     es: 'coherente' },
    { en: 'commensurate', es: 'proporcional' },
    { en: 'convoluted',   es: 'enrevesado' },
    { en: 'corroborate',  es: 'corroborar' },
    { en: 'cryptic',      es: 'críptico' },
    { en: 'culpable',     es: 'culpable' },
    { en: 'curtail',      es: 'reducir / recortar' },
    { en: 'cynical',      es: 'cínico' },
    { en: 'daunt',        es: 'intimidar' },
    { en: 'debilitate',   es: 'debilitar' },
    { en: 'decipher',     es: 'descifrar' },
    { en: 'deference',    es: 'deferencia / respeto' },
    { en: 'defunct',      es: 'difunto / desaparecido' },
    { en: 'denigrate',    es: 'denigrar' },
    { en: 'denounce',     es: 'denunciar' },
    { en: 'deplete',      es: 'agotar' },
    { en: 'deride',       es: 'ridiculizar' },
    { en: 'deter',        es: 'disuadir' },
    { en: 'devoid',       es: 'desprovisto' },
    { en: 'dichotomy',    es: 'dicotomía' },
    { en: 'diminish',     es: 'disminuir' },
    { en: 'discern',      es: 'discernir' },
    { en: 'disdain',      es: 'desdén' },
    { en: 'disparate',    es: 'dispar' },
    { en: 'dogmatic',     es: 'dogmático' },
    { en: 'duplicity',    es: 'duplicidad' },
    { en: 'ebullient',    es: 'efusivo' },
    { en: 'eclectic',     es: 'ecléctico' },
    { en: 'elucidate',    es: 'elucidar / aclarar' },
    { en: 'emulate',      es: 'emular' },
    { en: 'enigmatic',    es: 'enigmático' },
    { en: 'ephemeral',    es: 'efímero' },
    { en: 'erratic',      es: 'errático' },
    { en: 'esoteric',     es: 'esotérico' },
    { en: 'exacerbate',   es: 'exacerbar' },
    { en: 'exonerate',    es: 'exonerar' },
    { en: 'expedite',     es: 'agilizar' },
    { en: 'exquisite',    es: 'exquisito' },
    { en: 'fallacious',   es: 'falaz' },
    { en: 'fathom',       es: 'comprender / sondar' },
    { en: 'fervent',      es: 'ferviente' },
    { en: 'flagrant',     es: 'flagrante' },
    { en: 'fleeting',     es: 'fugaz' },
    { en: 'flippant',     es: 'frívolo' },
    { en: 'foreboding',   es: 'presagio' },
    { en: 'fortuitous',   es: 'fortuito' },
    { en: 'garrulous',    es: 'garrulo / parlanchín' },
    { en: 'gratuitous',   es: 'gratuito' },
    { en: 'guile',        es: 'astucia / engaño' },
    { en: 'hapless',      es: 'desafortunado' },
    { en: 'harangue',     es: 'arenga' },
    { en: 'hegemony',     es: 'hegemonía' },
    { en: 'heresy',       es: 'herejía' },
    { en: 'hypocritical', es: 'hipócrita' },
    { en: 'idiosyncrasy', es: 'idiosincrasia' },
    { en: 'immutable',    es: 'inmutable' },
    { en: 'impeccable',   es: 'impecable' },
    { en: 'impetuous',    es: 'impetuoso' },
    { en: 'impudent',     es: 'impudente / insolente' },
    { en: 'inadvertent',  es: 'inadvertido' },
    { en: 'incognito',    es: 'incógnito' },
    { en: 'indefatigable',es: 'infatigable' },
    { en: 'indignant',    es: 'indignado' },
    { en: 'infallible',   es: 'infalible' },
  ],
};

// =============================================
//  CONFIGURACIÓN DE NIVELES
// =============================================
const LEVEL_NAMES = {
  1: 'Principiante',
  2: 'Elemental',
  3: 'Intermedio',
  4: 'Avanzado',
  5: 'Experto',
};
const MAX_LEVEL          = 5;
const CORRECT_TO_LEVEL_UP = 10;

// =============================================
//  SEGURIDAD: CONSTANTES Y FUNCIONES
// =============================================
const SECURITY = {
  MAX_WORD_LEN:      80,
  MAX_CUSTOM_CARDS:  200,
  MAX_HARD_WORDS:    1000,
  MAX_TOTAL_COUNTER: 999999,
  ALLOWED_LEVELS:    [1, 2, 3, 4, 5],
  API_TIMEOUT_MS:    6000,
};

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#x27;');
}

function sanitizeWord(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\x00-\x1F\x7F]/g, '').trim().slice(0, SECURITY.MAX_WORD_LEN);
}

function validateData(raw) {
  const safe = {
    totalCorrect: 0, totalWrong: 0,
    hardWords: {}, customCards: [],
    currentLevel: 1, levelCorrect: 0,
  };
  if (!raw || typeof raw !== 'object') return safe;

  safe.totalCorrect = (Number.isInteger(raw.totalCorrect) && raw.totalCorrect >= 0)
    ? Math.min(raw.totalCorrect, SECURITY.MAX_TOTAL_COUNTER) : 0;
  safe.totalWrong   = (Number.isInteger(raw.totalWrong) && raw.totalWrong >= 0)
    ? Math.min(raw.totalWrong, SECURITY.MAX_TOTAL_COUNTER) : 0;
  safe.levelCorrect = (Number.isInteger(raw.levelCorrect) && raw.levelCorrect >= 0)
    ? Math.min(raw.levelCorrect, CORRECT_TO_LEVEL_UP) : 0;
  safe.currentLevel = SECURITY.ALLOWED_LEVELS.includes(raw.currentLevel)
    ? raw.currentLevel : 1;

  if (raw.hardWords && typeof raw.hardWords === 'object' && !Array.isArray(raw.hardWords)) {
    let count = 0;
    for (const [k, v] of Object.entries(raw.hardWords)) {
      if (count >= SECURITY.MAX_HARD_WORDS) break;
      const cleanKey = sanitizeWord(k);
      if (cleanKey && typeof v === 'number' && v > 0) {
        safe.hardWords[cleanKey] = Math.min(Math.floor(v), 9999);
        count++;
      }
    }
  }
  if (Array.isArray(raw.customCards)) {
    for (const card of raw.customCards) {
      if (safe.customCards.length >= SECURITY.MAX_CUSTOM_CARDS) break;
      if (card && typeof card === 'object') {
        const en = sanitizeWord(card.en);
        const es = sanitizeWord(card.es);
        if (en && es) safe.customCards.push({ en, es });
      }
    }
  }
  return safe;
}

// =============================================
//  PERSISTENCIA
// =============================================
const STORAGE_KEY = 'flashenglish_data';

function loadData() {
  try {
    return validateData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch (e) {
    return validateData(null);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// =============================================
//  ESTADO GLOBAL
// =============================================
let deck           = [];   // baraja activa de la sesión (sin repetición)
let currentIndex   = 0;
let answered       = false;
let sessionCorrect = 0;
let sessionWrong   = 0;
let autoNextTimer  = null;

// =============================================
//  CONSTRUCCIÓN DEL MAZO — SIN REPETICIÓN,
//  DIFICULTAD PROGRESIVA
//
//  Estructura de la sesión:
//  • Primero se presentan todas las palabras del
//    nivel 1 (mezcladas), luego las del nivel 2, etc.
//    hasta el nivel desbloqueado.
//  • Finalmente se añaden las tarjetas personalizadas
//    al final del bloque más alto.
//  • Al terminar el mazo completo se reconstruye
//    con un orden diferente (re-shuffle por nivel),
//    garantizando que no se repita el mismo orden.
// =============================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck() {
  const data  = loadData();
  const level = data.currentLevel;

  // Bloque de cada nivel mezclado individualmente,
  // luego concatenados en orden de dificultad 1 → level
  let ordered = [];
  for (let l = 1; l <= level; l++) {
    ordered = ordered.concat(shuffle(WORDS_BY_LEVEL[l]));
  }

  // Tarjetas personalizadas al final (también mezcladas)
  if (data.customCards.length > 0) {
    ordered = ordered.concat(shuffle(data.customCards));
  }

  return ordered;
}

// =============================================
//  NAVEGACIÓN ENTRE SECCIONES
// =============================================
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.getElementById('btn-' + name).classList.add('active');
  if (name === 'progress') renderProgress();
  if (name === 'cards')    renderCustomCards();
}

// =============================================
//  INDICADOR DE NIVEL
// =============================================
function updateLevelBadge() {
  const data  = loadData();
  const badge = document.getElementById('level-badge');
  if (badge) badge.textContent = `Nivel ${data.currentLevel} · ${LEVEL_NAMES[data.currentLevel]}`;

  const bar = document.getElementById('level-progress-bar');
  if (bar) {
    const pct = Math.min((data.levelCorrect / CORRECT_TO_LEVEL_UP) * 100, 100);
    bar.style.width = pct + '%';
  }
  const counter = document.getElementById('level-correct-count');
  if (counter) {
    if (data.currentLevel < MAX_LEVEL) {
      counter.textContent = `${data.levelCorrect}/${CORRECT_TO_LEVEL_UP} para subir de nivel`;
    } else {
      counter.textContent = '¡Nivel máximo alcanzado! 🏆';
    }
  }
}

// =============================================
//  MOSTRAR TARJETA
// =============================================
function showCard(index) {
  if (autoNextTimer !== null) {
    clearTimeout(autoNextTimer);
    autoNextTimer = null;
  }

  const card      = deck[index];
  const flashcard = document.getElementById('flashcard');
  const front     = flashcard.querySelector('.card-front');
  const input     = document.getElementById('answer-input');
  const countdown = document.getElementById('auto-next-countdown');
  const btnNext   = document.getElementById('btn-next');

  flashcard.classList.remove('flipped');
  front.classList.remove('correct-state', 'wrong-state');
  input.classList.remove('correct-input', 'wrong-input');
  input.value    = '';
  input.disabled = false;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  btnNext.classList.add('hidden');
  if (countdown) countdown.classList.add('hidden');
  document.getElementById('answer-area').style.display = 'flex';

  flashcard.classList.remove('new-card');
  void flashcard.offsetWidth; // reflow para reiniciar animación
  flashcard.classList.add('new-card');

  document.getElementById('card-word').textContent        = card.en;
  document.getElementById('card-answer-text').textContent = card.es;
  document.getElementById('card-counter').textContent     =
    `Tarjeta ${index + 1} de ${deck.length}`;

  setTimeout(() => input.focus(), 100);
  answered = false;
  updateLevelBadge();
}

// =============================================
//  VERIFICAR RESPUESTA
// =============================================
function checkAnswer() {
  if (answered) return;

  const input     = document.getElementById('answer-input');
  const userAns   = input.value.trim().toLowerCase();
  const correct   = deck[currentIndex].es.toLowerCase();
  const flashcard = document.getElementById('flashcard');
  const front     = flashcard.querySelector('.card-front');
  const feedback  = document.getElementById('feedback');

  if (!userAns) {
    feedback.textContent = 'Escribe tu respuesta primero.';
    feedback.className   = 'feedback';
    return;
  }

  const normalize = str =>
    str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  const acceptedAnswers = correct.split('/').map(a => normalize(a.trim()));
  const isCorrect       = acceptedAnswers.includes(normalize(userAns));

  const data = loadData();
  data.totalCorrect += isCorrect ? 1 : 0;
  data.totalWrong   += isCorrect ? 0 : 1;

  if (!isCorrect) {
    const word = deck[currentIndex].en;
    data.hardWords[word] = (data.hardWords[word] || 0) + 1;
  } else if (data.currentLevel < MAX_LEVEL) {
    data.levelCorrect = (data.levelCorrect || 0) + 1;
    if (data.levelCorrect >= CORRECT_TO_LEVEL_UP) {
      data.currentLevel++;
      data.levelCorrect = 0;
      saveData(data);
      showLevelUpCelebration(data.currentLevel);
      // Reconstruir mazo con el nuevo nivel desbloqueado
      deck         = buildDeck();
      currentIndex = 0;
    }
  }
  saveData(data);

  if (isCorrect) {
    sessionCorrect++;
    document.getElementById('session-correct').textContent = sessionCorrect;
  } else {
    sessionWrong++;
    document.getElementById('session-wrong').textContent = sessionWrong;
  }

  input.disabled = true;

  if (isCorrect) {
    input.classList.add('correct-input');
    front.classList.add('correct-state');
    feedback.textContent = '¡Correcto! 🎉';
    feedback.className   = 'feedback correct';
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
  updateLevelBadge();
  startAutoNext();
}

// =============================================
//  AUTO-AVANCE CON CUENTA REGRESIVA
// =============================================
function startAutoNext() {
  const countdown = document.getElementById('auto-next-countdown');
  let remaining   = 3;

  function tick() {
    if (countdown) {
      countdown.textContent = `Siguiente en ${remaining}…`;
      countdown.classList.remove('hidden');
    }
  }
  tick();

  const interval = setInterval(() => {
    remaining--;
    if (remaining > 0) tick();
    else clearInterval(interval);
  }, 1000);

  autoNextTimer = setTimeout(() => {
    clearInterval(interval);
    autoNextTimer = null;
    if (answered) nextCard();
  }, 3000);
}

// =============================================
//  SIGUIENTE TARJETA
// =============================================
function nextCard() {
  if (autoNextTimer !== null) {
    clearTimeout(autoNextTimer);
    autoNextTimer = null;
  }
  const countdown = document.getElementById('auto-next-countdown');
  if (countdown) countdown.classList.add('hidden');

  currentIndex++;

  if (currentIndex >= deck.length) {
    // Completó toda la baraja → reconstruir sin repetir orden anterior
    deck         = buildDeck();
    currentIndex = 0;
    document.getElementById('feedback').textContent = '¡Completaste el mazo! Empezando de nuevo…';
    document.getElementById('feedback').className   = 'feedback correct';
    setTimeout(() => showCard(currentIndex), 1200);
    return;
  }
  showCard(currentIndex);
}

// =============================================
//  CELEBRACIÓN DE SUBIDA DE NIVEL
// =============================================
function showLevelUpCelebration(newLevel) {
  const levelName = LEVEL_NAMES[newLevel] || 'Nuevo nivel';
  const container = document.getElementById('celebration-container');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = 'level-up-msg';
  // newLevel y levelName son datos internos controlados, no de usuario
  msg.innerHTML = `🏆 ¡Nivel ${newLevel}!<br><span>${levelName}</span>`;
  container.appendChild(msg);

  const emojis = ['🎉','⭐','🌟','✨','🎊','🥳','💫','🔥','👏','🚀','🎯','💪'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'emoji-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left            = Math.random() * 100 + 'vw';
    el.style.animationDuration = (1.2 + Math.random() * 2) + 's';
    el.style.animationDelay    = (Math.random() * 0.8) + 's';
    el.style.fontSize          = (1.2 + Math.random() * 1.6) + 'rem';
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 3500);
}

// =============================================
//  PROGRESO: RENDERIZAR
// =============================================
function renderProgress() {
  const data  = loadData();
  const total = data.totalCorrect + data.totalWrong;
  const pct   = total > 0 ? Math.round((data.totalCorrect / total) * 100) : 0;

  document.getElementById('total-answered').textContent = total;
  document.getElementById('total-correct').textContent  = data.totalCorrect;
  document.getElementById('total-wrong').textContent    = data.totalWrong;
  document.getElementById('accuracy-pct').textContent   = pct + '%';

  const levelEl = document.getElementById('current-level-display');
  if (levelEl) levelEl.textContent = `Nivel ${data.currentLevel} — ${LEVEL_NAMES[data.currentLevel]}`;

  setTimeout(() => {
    document.getElementById('accuracy-bar-fill').style.width = pct + '%';
  }, 100);

  const hardList  = document.getElementById('hard-words-list');
  const hardWords = Object.entries(data.hardWords).sort((a, b) => b[1] - a[1]).slice(0, 8);

  if (hardWords.length === 0) {
    hardList.innerHTML = '<p class="empty-msg">Aún no hay datos suficientes.</p>';
    return;
  }
  hardList.innerHTML = hardWords.map(([word, count]) => `
    <div class="hard-word-item">
      <span class="hard-word-text">${escapeHTML(word)}</span>
      <span class="hard-word-count">${escapeHTML(String(count))} error${count > 1 ? 'es' : ''}</span>
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
  data.currentLevel = 1;
  data.levelCorrect = 0;
  saveData(data);

  sessionCorrect = 0;
  sessionWrong   = 0;
  document.getElementById('session-correct').textContent = '0';
  document.getElementById('session-wrong').textContent   = '0';

  deck         = buildDeck();
  currentIndex = 0;
  answered     = false;
  showCard(currentIndex);
  updateLevelBadge();
  renderProgress();
}

// =============================================
//  MIS TARJETAS — BÚSQUEDA CON API
// =============================================
async function searchAndPreview(event) {
  event.preventDefault();

  const esWord = sanitizeWord(document.getElementById('input-spanish').value);
  if (!esWord) return;

  // Rechazar entradas que parezcan código o URLs
  if (/[<>"'`]|https?:\/\//i.test(esWord)) {
    showAddModal(esWord, '', true);
    return;
  }

  const btn = document.getElementById('btn-search');
  btn.disabled    = true;
  btn.textContent = 'Buscando...';

  try {
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), SECURITY.API_TIMEOUT_MS);

    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(esWord)}&langpair=es|en`,
      { method: 'GET', signal: controller.signal,
        headers: { 'Accept': 'application/json' },
        credentials: 'omit', mode: 'cors' }
    );
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) throw new Error('No JSON');

    const json = await res.json();
    if (typeof json !== 'object' || json === null ||
        json.responseStatus !== 200 ||
        typeof json.responseData?.translatedText !== 'string') {
      throw new Error('Respuesta inválida');
    }

    const enWord = sanitizeWord(json.responseData.translatedText);
    if (!enWord) throw new Error('Traducción vacía');
    showAddModal(esWord, enWord);
  } catch {
    showAddModal(esWord, '', true);
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Buscar traducción';
  }
}

// =============================================
//  MODAL
// =============================================
function showAddModal(es, en, isError = false) {
  const note = document.getElementById('modal-note');
  document.getElementById('modal-es').textContent = es;
  document.getElementById('modal-en').value       = en;
  note.textContent = isError
    ? 'No se encontró traducción automática. Escribe la traducción manualmente:'
    : 'Traducción encontrada. Puedes editarla antes de guardar:';
  note.style.color = isError ? 'var(--red)' : 'var(--text-soft)';
  document.getElementById('modal-overlay').classList.add('active');
  const enField = document.getElementById('modal-en');
  enField.focus();
  enField.select();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function confirmAddCard() {
  const es = sanitizeWord(document.getElementById('modal-es').textContent);
  const en = sanitizeWord(document.getElementById('modal-en').value);

  if (!en || !es) { alert('Completa ambos campos antes de guardar.'); return; }

  const data = loadData();
  if (data.customCards.length >= SECURITY.MAX_CUSTOM_CARDS) {
    alert(`Has alcanzado el límite de ${SECURITY.MAX_CUSTOM_CARDS} tarjetas personalizadas.`);
    closeModal(); return;
  }

  const allCards = [...Object.values(WORDS_BY_LEVEL).flat(), ...data.customCards];
  if (allCards.some(c => c.es.toLowerCase() === es.toLowerCase() ||
                         c.en.toLowerCase() === en.toLowerCase())) {
    alert(`La palabra "${es}" ya existe en el mazo.`);
    closeModal(); return;
  }

  data.customCards.push({ en, es });
  saveData(data);
  deck = buildDeck();
  document.getElementById('input-spanish').value = '';
  closeModal();
  renderCustomCards();
}

// =============================================
//  MIS TARJETAS — RENDERIZAR Y ELIMINAR
// =============================================
function renderCustomCards() {
  const data      = loadData();
  const container = document.getElementById('custom-cards-list');

  if (data.customCards.length === 0) {
    container.innerHTML = '<p class="empty-msg">Aún no has agregado tarjetas personalizadas.</p>';
    return;
  }
  // Event delegation: no ponemos onclick inline en cada botón
  container.innerHTML = data.customCards.map((card, index) => `
    <div class="custom-card-item">
      <div class="custom-card-words">
        <span class="custom-card-es">${escapeHTML(card.es)}</span>
        <span class="custom-card-sep">→</span>
        <span class="custom-card-en">${escapeHTML(card.en)}</span>
      </div>
      <button class="btn-delete" data-index="${Number(index)}" title="Eliminar tarjeta">✕</button>
    </div>
  `).join('');
}

function deleteCard(index) {
  const data = loadData();
  data.customCards.splice(index, 1);
  saveData(data);
  deck = buildDeck();
  renderCustomCards();
}

// =============================================
//  INICIALIZACIÓN Y EVENT LISTENERS
//  (todos aquí — sin onclick inline en el HTML)
// =============================================
document.addEventListener('DOMContentLoaded', () => {

  // ── Navegación ──────────────────────────────
  document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // ── Estudiar: verificar / siguiente ─────────
  document.getElementById('btn-check').addEventListener('click', checkAnswer);
  document.getElementById('btn-next').addEventListener('click', nextCard);

  // Enter en el input de respuesta
  document.getElementById('answer-input').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (!answered) checkAnswer(); else nextCard();
  });

  // ── Progreso: reset ──────────────────────────
  document.getElementById('btn-reset').addEventListener('click', resetProgress);

  // ── Mis Tarjetas: formulario de búsqueda ────
  document.getElementById('search-form').addEventListener('submit', searchAndPreview);

  // Event delegation para los botones "Eliminar" de tarjetas personalizadas
  document.getElementById('custom-cards-list').addEventListener('click', e => {
    const btn = e.target.closest('.btn-delete');
    if (!btn) return;
    const index = parseInt(btn.dataset.index, 10);
    if (!Number.isNaN(index)) deleteCard(index);
  });

  // ── Modal ────────────────────────────────────
  document.getElementById('btn-modal-close').addEventListener('click',   closeModal);
  document.getElementById('btn-modal-cancel').addEventListener('click',  closeModal);
  document.getElementById('btn-modal-confirm').addEventListener('click', confirmAddCard);

  document.getElementById('modal-en').addEventListener('keydown', e => {
    if (e.key === 'Enter') confirmAddCard();
  });

  // Cerrar modal con Escape o clic en el fondo
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  // ── Arranque ─────────────────────────────────
  deck = buildDeck();
  showCard(currentIndex);
  updateLevelBadge();
});
