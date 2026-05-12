// =============================================
//  FLASHENGLISH — MAZO DE FRASES POR NIVEL
//
//  Nivel 1 — Fill-in-the-blank: una palabra clave a traducir
//  Nivel 2 — Fill-in-the-blank: dos palabras clave a traducir
//  Nivel 3 — Frase completa (sentido de tiempo)
//  Nivel 4 — Frase completa (estructuras complejas)
//  Nivel 5 — Frase completa (vocabulario experto)
//
//  Niveles 1-2:  { en, blank, answer, hint }
//    en     → frase en inglés (se muestra con ___ en lugar de blank)
//    blank  → la(s) palabra(s) en inglés que se ocultan
//    answer → traducción en español de blank (lo que el usuario escribe)
//    hint   → etiqueta de estructura
//
//  Niveles 3-5:  { en, es, hint }
//    en   → frase en inglés completa
//    es   → traducción completa en español
//    hint → etiqueta de estructura
// =============================================

const WORDS_BY_LEVEL = {

  // ─────────────────────────────────────────
  //  NIVEL 1 — Fill-in-the-blank (100 frases)
  //  Se muestra la frase con ___ y el usuario
  //  escribe en español solo la palabra que falta.
  //  blank  = palabra en inglés que se oculta
  //  answer = su traducción en español
  // ─────────────────────────────────────────
  1: [
    { en: 'I eat an apple.',              blank: 'apple',     answer: 'manzana',     hint: 'sustantivo' },
    { en: 'She drinks water.',            blank: 'water',     answer: 'agua',        hint: 'sustantivo' },
    { en: 'They live in a house.',        blank: 'house',     answer: 'casa',        hint: 'sustantivo' },
    { en: 'He has a dog.',                blank: 'dog',       answer: 'perro',       hint: 'sustantivo' },
    { en: 'She loves her cat.',           blank: 'cat',       answer: 'gato',        hint: 'sustantivo' },
    { en: 'I read a book.',               blank: 'book',      answer: 'libro',       hint: 'sustantivo' },
    { en: 'He calls his friend.',         blank: 'friend',    answer: 'amigo',       hint: 'sustantivo' },
    { en: 'We have a family.',            blank: 'family',    answer: 'familia',     hint: 'sustantivo' },
    { en: 'I need food.',                 blank: 'food',      answer: 'comida',      hint: 'sustantivo' },
    { en: 'She has no time.',             blank: 'time',      answer: 'tiempo',      hint: 'sustantivo' },
    { en: 'It is a sunny day.',           blank: 'day',       answer: 'día',         hint: 'sustantivo' },
    { en: 'I sleep at night.',            blank: 'night',     answer: 'noche',       hint: 'sustantivo' },
    { en: 'She goes to school.',          blank: 'school',    answer: 'escuela',     hint: 'sustantivo' },
    { en: 'He is a good teacher.',        blank: 'teacher',   answer: 'maestro',     hint: 'sustantivo' },
    { en: 'I sit on the chair.',          blank: 'chair',     answer: 'silla',       hint: 'sustantivo' },
    { en: 'The food is on the table.',    blank: 'table',     answer: 'mesa',        hint: 'sustantivo' },
    { en: 'I open the window.',           blank: 'window',    answer: 'ventana',     hint: 'sustantivo' },
    { en: 'Close the door, please.',      blank: 'door',      answer: 'puerta',      hint: 'sustantivo' },
    { en: 'I drive a car.',               blank: 'car',       answer: 'carro',       hint: 'sustantivo' },
    { en: 'We take the bus.',             blank: 'bus',       answer: 'autobús',     hint: 'sustantivo' },
    { en: 'I walk down the street.',      blank: 'street',    answer: 'calle',       hint: 'sustantivo' },
    { en: 'She lives in the city.',       blank: 'city',      answer: 'ciudad',      hint: 'sustantivo' },
    { en: 'He is from this country.',     blank: 'country',   answer: 'país',        hint: 'sustantivo' },
    { en: 'I love music.',                blank: 'music',     answer: 'música',      hint: 'sustantivo' },
    { en: 'She checks her phone.',        blank: 'phone',     answer: 'teléfono',    hint: 'sustantivo' },
    { en: 'I need money.',                blank: 'money',     answer: 'dinero',      hint: 'sustantivo' },
    { en: 'He goes to work.',             blank: 'work',      answer: 'trabajo',     hint: 'sustantivo' },
    { en: 'We play a game.',              blank: 'game',      answer: 'juego',       hint: 'sustantivo' },
    { en: 'I see the moon.',              blank: 'moon',      answer: 'luna',        hint: 'sustantivo' },
    { en: 'I see the sun.',               blank: 'sun',       answer: 'sol',         hint: 'sustantivo' },
    { en: 'It starts to rain.',           blank: 'rain',      answer: 'llover / lluvia', hint: 'sustantivo/verbo' },
    { en: 'We sit under the tree.',       blank: 'tree',      answer: 'árbol',       hint: 'sustantivo' },
    { en: 'She picks a flower.',          blank: 'flower',    answer: 'flor',        hint: 'sustantivo' },
    { en: 'A bird sings outside.',        blank: 'bird',      answer: 'pájaro',      hint: 'sustantivo' },
    { en: 'I catch a fish.',              blank: 'fish',      answer: 'pez',         hint: 'sustantivo' },
    { en: 'I eat bread for breakfast.',   blank: 'bread',     answer: 'pan',         hint: 'sustantivo' },
    { en: 'She drinks milk.',             blank: 'milk',      answer: 'leche',       hint: 'sustantivo' },
    { en: 'He drinks coffee.',            blank: 'coffee',    answer: 'café',        hint: 'sustantivo' },
    { en: 'She prefers tea.',             blank: 'tea',       answer: 'té',          hint: 'sustantivo' },
    { en: 'He wears a shirt.',            blank: 'shirt',     answer: 'camisa',      hint: 'sustantivo' },
    { en: 'I lost my shoe.',              blank: 'shoe',      answer: 'zapato',      hint: 'sustantivo' },
    { en: 'She wears a hat.',             blank: 'hat',       answer: 'sombrero',    hint: 'sustantivo' },
    { en: 'I feel it in my heart.',       blank: 'heart',     answer: 'corazón',     hint: 'sustantivo' },
    { en: 'Write the word here.',         blank: 'word',      answer: 'palabra',     hint: 'sustantivo' },
    { en: 'Say the number.',              blank: 'number',    answer: 'número',      hint: 'sustantivo' },
    { en: 'I have a dream.',              blank: 'dream',     answer: 'sueño',       hint: 'sustantivo' },
    { en: 'She cleans the room.',         blank: 'room',      answer: 'habitación',  hint: 'sustantivo' },
    { en: 'He cooks in the kitchen.',     blank: 'kitchen',   answer: 'cocina',      hint: 'sustantivo' },
    { en: 'I use the bathroom.',          blank: 'bathroom',  answer: 'baño',        hint: 'sustantivo' },
    { en: 'We work in the garden.',       blank: 'garden',    answer: 'jardín',      hint: 'sustantivo' },
    { en: 'Kids play in the park.',       blank: 'park',      answer: 'parque',      hint: 'sustantivo' },
    { en: 'I buy it at the store.',       blank: 'store',     answer: 'tienda',      hint: 'sustantivo' },
    { en: 'She shops at the market.',     blank: 'market',    answer: 'mercado',     hint: 'sustantivo' },
    { en: 'He goes to the bank.',         blank: 'bank',      answer: 'banco',       hint: 'sustantivo' },
    { en: 'She works at the hospital.',   blank: 'hospital',  answer: 'hospital',    hint: 'sustantivo' },
    { en: 'The doctor helps the child.',  blank: 'doctor',    answer: 'médico',      hint: 'sustantivo' },
    { en: 'The baby cries at night.',     blank: 'baby',      answer: 'bebé',        hint: 'sustantivo' },
    { en: 'The man reads the paper.',     blank: 'paper',     answer: 'periódico',   hint: 'sustantivo' },
    { en: 'The woman cooks dinner.',      blank: 'dinner',    answer: 'cena',        hint: 'sustantivo' },
    { en: 'The boy runs fast.',           blank: 'boy',       answer: 'chico / niño', hint: 'sustantivo' },
    { en: 'The girl sings well.',         blank: 'girl',      answer: 'chica / niña', hint: 'sustantivo' },
    { en: 'My mother is kind.',           blank: 'mother',    answer: 'madre',       hint: 'sustantivo' },
    { en: 'His father works hard.',       blank: 'father',    answer: 'padre',       hint: 'sustantivo' },
    { en: 'My brother is tall.',          blank: 'brother',   answer: 'hermano',     hint: 'sustantivo' },
    { en: 'Her sister is smart.',         blank: 'sister',    answer: 'hermana',     hint: 'sustantivo' },
    { en: 'This year is busy.',           blank: 'year',      answer: 'año',         hint: 'sustantivo' },
    { en: 'The week starts Monday.',      blank: 'week',      answer: 'semana',      hint: 'sustantivo' },
    { en: 'This month is cold.',          blank: 'month',     answer: 'mes',         hint: 'sustantivo' },
    { en: 'Wait one minute.',             blank: 'minute',    answer: 'minuto',      hint: 'sustantivo' },
    { en: 'It is very hot.',              blank: 'hot',       answer: 'caliente / calor', hint: 'adjetivo' },
    { en: 'The water is cold.',           blank: 'cold',      answer: 'frío',        hint: 'adjetivo' },
    { en: 'He is a big man.',             blank: 'big',       answer: 'grande',      hint: 'adjetivo' },
    { en: 'It is a small house.',         blank: 'small',     answer: 'pequeño',     hint: 'adjetivo' },
    { en: 'She is a good person.',        blank: 'good',      answer: 'buena / bueno', hint: 'adjetivo' },
    { en: 'This is bad news.',            blank: 'bad',       answer: 'mala / malo', hint: 'adjetivo' },
    { en: 'She is very happy.',           blank: 'happy',     answer: 'feliz',       hint: 'adjetivo' },
    { en: 'He looks sad today.',          blank: 'sad',       answer: 'triste',      hint: 'adjetivo' },
    { en: 'The shop is open now.',        blank: 'open',      answer: 'abierta / abierto', hint: 'adjetivo' },
    { en: 'The bank is closed today.',    blank: 'closed',    answer: 'cerrado',     hint: 'adjetivo' },
    { en: 'She always says yes.',         blank: 'always',    answer: 'siempre',     hint: 'adverbio' },
    { en: 'Walk slowly, please.',         blank: 'slowly',    answer: 'despacio',    hint: 'adverbio' },
    { en: 'The boy runs fast.',           blank: 'fast',      answer: 'rápido',      hint: 'adverbio' },
    { en: 'I eat an apple.',              blank: 'eat',       answer: 'como / comer', hint: 'verbo' },
    { en: 'She drinks water.',            blank: 'drinks',    answer: 'bebe / beber', hint: 'verbo' },
    { en: 'He calls his friend.',         blank: 'calls',     answer: 'llama / llamar', hint: 'verbo' },
    { en: 'I sleep at night.',            blank: 'sleep',     answer: 'duermo / dormir', hint: 'verbo' },
    { en: 'She goes to school.',          blank: 'goes',      answer: 'va / ir',     hint: 'verbo' },
    { en: 'I open the window.',           blank: 'open',      answer: 'abro / abrir', hint: 'verbo' },
    { en: 'I drive a car.',               blank: 'drive',     answer: 'manejo / conducir', hint: 'verbo' },
    { en: 'I walk down the street.',      blank: 'walk',      answer: 'camino / caminar', hint: 'verbo' },
    { en: 'She picks a flower.',          blank: 'picks',     answer: 'recoge / recoger', hint: 'verbo' },
    { en: 'I catch a fish.',              blank: 'catch',     answer: 'atrapo / atrapar', hint: 'verbo' },
    { en: 'She cleans the room.',         blank: 'cleans',    answer: 'limpia / limpiar', hint: 'verbo' },
    { en: 'He cooks in the kitchen.',     blank: 'cooks',     answer: 'cocina / cocinar', hint: 'verbo' },
    { en: 'The baby cries at night.',     blank: 'cries',     answer: 'llora / llorar', hint: 'verbo' },
    { en: 'She works at the hospital.',   blank: 'works',     answer: 'trabaja / trabajar', hint: 'verbo' },
    { en: 'I need money.',                blank: 'need',      answer: 'necesito / necesitar', hint: 'verbo' },
    { en: 'I have a dream.',              blank: 'have',      answer: 'tengo / tener', hint: 'verbo' },
    { en: 'I love music.',                blank: 'love',      answer: 'amo / amar',  hint: 'verbo' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 2 — Fill-in-the-blank, dos palabras (100 frases)
  //  blank  = "palabra1 / palabra2" (ambas en inglés)
  //  answer = "trad1 / trad2" (ambas en español)
  //  El usuario escribe las dos traducciones separadas por /
  // ─────────────────────────────────────────
  2: [
    { en: 'I booked a hotel near the airport.',         blank: 'hotel / airport',        answer: 'hotel / aeropuerto',             hint: 'viaje' },
    { en: 'She bought a ticket for the concert.',       blank: 'ticket / concert',       answer: 'boleto / concierto',             hint: 'entretenimiento' },
    { en: 'We planned a long travel.',                  blank: 'planned / travel',       answer: 'planeamos / viaje',              hint: 'viaje' },
    { en: 'The beach is near the city.',                blank: 'beach / city',           answer: 'playa / ciudad',                 hint: 'lugares' },
    { en: 'We hiked up the mountain.',                  blank: 'hiked / mountain',       answer: 'caminamos / montaña',            hint: 'naturaleza' },
    { en: 'The river crosses the forest.',              blank: 'river / forest',         answer: 'río / bosque',                   hint: 'naturaleza' },
    { en: 'The island has no bridge.',                  blank: 'island / bridge',        answer: 'isla / puente',                  hint: 'geografía' },
    { en: 'She reads the map in the village.',          blank: 'map / village',          answer: 'mapa / pueblo',                  hint: 'lugares' },
    { en: 'He studies a foreign language.',             blank: 'studies / language',     answer: 'estudia / idioma',               hint: 'educación' },
    { en: 'Our class starts at eight.',                 blank: 'class / eight',          answer: 'clase / ocho',                   hint: 'educación' },
    { en: 'She finished her homework before the exam.', blank: 'homework / exam',        answer: 'tarea / examen',                 hint: 'educación' },
    { en: 'He got a good grade at the university.',     blank: 'grade / university',     answer: 'calificación / universidad',     hint: 'educación' },
    { en: 'I return books to the library.',             blank: 'books / library',        answer: 'libros / biblioteca',            hint: 'educación' },
    { en: 'We have a meeting at the office.',           blank: 'meeting / office',       answer: 'reunión / oficina',              hint: 'trabajo' },
    { en: 'His salary covers the rent.',                blank: 'salary / rent',          answer: 'salario / alquiler',             hint: 'finanzas' },
    { en: 'She fixes the computer with the keyboard.',  blank: 'computer / keyboard',   answer: 'computadora / teclado',          hint: 'tecnología' },
    { en: 'The screen shows a new email.',              blank: 'screen / email',         answer: 'pantalla / correo electrónico',  hint: 'tecnología' },
    { en: 'Change your password on the website.',       blank: 'password / website',     answer: 'contraseña / sitio web',         hint: 'tecnología' },
    { en: 'She posts a picture at the concert.',        blank: 'picture / concert',      answer: 'foto / concierto',               hint: 'redes sociales' },
    { en: 'We watch a movie on the big screen.',        blank: 'movie / screen',         answer: 'película / pantalla',            hint: 'entretenimiento' },
    { en: 'Our team won the match.',                    blank: 'team / match',           answer: 'equipo / partido',               hint: 'deportes' },
    { en: 'The player scored and won the prize.',       blank: 'player / prize',         answer: 'jugador / premio',               hint: 'deportes' },
    { en: 'She organizes a birthday party.',            blank: 'birthday / party',       answer: 'cumpleaños / fiesta',            hint: 'celebraciones' },
    { en: 'I bought a gift and a cake.',                blank: 'gift / cake',            answer: 'regalo / pastel',                hint: 'celebraciones' },
    { en: 'They had dinner at a restaurant.',           blank: 'dinner / restaurant',    answer: 'cena / restaurante',             hint: 'comida' },
    { en: 'We ordered from the menu.',                  blank: 'ordered / menu',         answer: 'pedimos / menú',                 hint: 'comida' },
    { en: 'The waiter brought the bill.',               blank: 'waiter / bill',          answer: 'mesero / cuenta',                hint: 'comida' },
    { en: 'The doctor gave him medicine.',              blank: 'doctor / medicine',      answer: 'médico / medicina',              hint: 'salud' },
    { en: 'She has a fever and a headache.',            blank: 'fever / headache',       answer: 'fiebre / dolor de cabeza',       hint: 'salud' },
    { en: 'I got medicine at the pharmacy.',            blank: 'medicine / pharmacy',    answer: 'medicina / farmacia',            hint: 'salud' },
    { en: 'Daily exercise improves health.',            blank: 'exercise / health',      answer: 'ejercicio / salud',              hint: 'salud' },
    { en: 'Check the weather before traveling.',        blank: 'weather / traveling',    answer: 'clima / viajar',                 hint: 'clima' },
    { en: 'A cloud covers the sun.',                    blank: 'cloud / sun',            answer: 'nube / sol',                     hint: 'clima' },
    { en: 'Strong wind brings the storm.',              blank: 'wind / storm',           answer: 'viento / tormenta',              hint: 'clima' },
    { en: 'Snow falls every winter season.',            blank: 'snow / winter',          answer: 'nieve / invierno',               hint: 'estaciones' },
    { en: 'Flowers bloom in the spring.',               blank: 'flowers / spring',       answer: 'flores / primavera',             hint: 'estaciones' },
    { en: 'We swim at the beach in summer.',            blank: 'swim / summer',          answer: 'nadamos / verano',               hint: 'estaciones' },
    { en: 'Leaves fall in autumn.',                     blank: 'leaves / autumn',        answer: 'hojas / otoño',                  hint: 'estaciones' },
    { en: 'The lion hunts in the forest.',              blank: 'lion / forest',          answer: 'león / bosque',                  hint: 'animales' },
    { en: 'The monkey climbs the tree.',                blank: 'monkey / tree',          answer: 'mono / árbol',                   hint: 'animales' },
    { en: 'The rabbit hides from the snake.',           blank: 'rabbit / snake',         answer: 'conejo / serpiente',             hint: 'animales' },
    { en: 'The horse and the cow are on the farm.',     blank: 'horse / cow',            answer: 'caballo / vaca',                 hint: 'animales' },
    { en: 'She wore a red shirt and blue shoes.',       blank: 'shirt / shoes',          answer: 'camisa / zapatos',               hint: 'ropa' },
    { en: 'The black cat sat on the white chair.',      blank: 'black / white',          answer: 'negro / blanco',                 hint: 'colores' },
    { en: 'Mix purple and pink for brown.',             blank: 'purple / pink',          answer: 'morado / rosa',                  hint: 'colores' },
    { en: 'The tall man and the short woman talked.',   blank: 'tall / short',           answer: 'alto / baja',                    hint: 'opuestos' },
    { en: 'The heavy box and the light bag are here.',  blank: 'heavy / light',          answer: 'pesada / ligera',                hint: 'opuestos' },
    { en: 'Keep it clean and quiet.',                   blank: 'clean / quiet',          answer: 'limpio / tranquilo',             hint: 'adjetivos' },
    { en: 'She is busy but free tonight.',              blank: 'busy / free',            answer: 'ocupada / libre',                hint: 'adjetivos' },
    { en: 'We had breakfast before the exam.',          blank: 'breakfast / exam',       answer: 'desayuno / examen',              hint: 'comida + estudio' },
    { en: 'He ordered dinner from the menu.',           blank: 'dinner / menu',          answer: 'cena / menú',                    hint: 'comida' },
    { en: 'He drives the car to the airport.',          blank: 'car / airport',          answer: 'carro / aeropuerto',             hint: 'transporte' },
    { en: 'She walks her dog in the park.',             blank: 'dog / park',             answer: 'perro / parque',                 hint: 'actividad' },
    { en: 'They read a book in the library.',           blank: 'book / library',         answer: 'libro / biblioteca',             hint: 'educación' },
    { en: 'We drank coffee and tea.',                   blank: 'coffee / tea',           answer: 'café / té',                      hint: 'bebidas' },
    { en: 'He saved money at the bank.',                blank: 'money / bank',           answer: 'dinero / banco',                 hint: 'finanzas' },
    { en: 'They crossed the bridge over the river.',    blank: 'bridge / river',         answer: 'puente / río',                   hint: 'geografía' },
    { en: 'The bird flew over the forest.',             blank: 'bird / forest',          answer: 'pájaro / bosque',                hint: 'naturaleza' },
    { en: 'She learned the language in the village.',   blank: 'language / village',     answer: 'idioma / pueblo',                hint: 'educación' },
    { en: 'He used the map to find the island.',        blank: 'map / island',           answer: 'mapa / isla',                    hint: 'viaje' },
    { en: 'I need water and food right now.',           blank: 'water / food',           answer: 'agua / comida',                  hint: 'necesidades' },
    { en: 'She left her phone and wallet behind.',      blank: 'phone / wallet',         answer: 'teléfono / cartera',             hint: 'objetos personales' },
    { en: 'The doctor and the teacher help people.',    blank: 'doctor / teacher',       answer: 'médico / maestro',               hint: 'profesiones' },
    { en: 'My brother and sister came to the party.',   blank: 'brother / sister',       answer: 'hermano / hermana',              hint: 'familia' },
    { en: 'The man and the woman shared a meal.',       blank: 'man / woman',            answer: 'hombre / mujer',                 hint: 'personas' },
    { en: 'We need a computer and internet.',           blank: 'computer / internet',    answer: 'computadora / internet',         hint: 'tecnología' },
    { en: 'She bought a camera at the market.',         blank: 'camera / market',        answer: 'cámara / mercado',               hint: 'compras' },
    { en: 'He lost his ticket and his map.',            blank: 'ticket / map',           answer: 'boleto / mapa',                  hint: 'viaje' },
    { en: 'The pig and the chicken are on the farm.',   blank: 'pig / chicken',          answer: 'cerdo / pollo',                  hint: 'animales' },
    { en: 'They watched the sunset at the beach.',      blank: 'sunset / beach',         answer: 'atardecer / playa',              hint: 'naturaleza' },
    { en: 'The waiter and the cook work together.',     blank: 'waiter / cook',          answer: 'mesero / cocinero',              hint: 'profesiones' },
    { en: 'She studies and works at the same time.',    blank: 'studies / works',        answer: 'estudia / trabaja',              hint: 'verbos' },
    { en: 'He writes a report in the office.',          blank: 'report / office',        answer: 'informe / oficina',              hint: 'trabajo' },
    { en: 'The storm hit the city and the village.',    blank: 'city / village',         answer: 'ciudad / pueblo',                hint: 'lugares' },
    { en: 'She mixed yellow and blue for green.',       blank: 'yellow / blue',          answer: 'amarillo / azul',                hint: 'colores' },
    { en: 'He wore a hat and a brown shirt.',           blank: 'hat / shirt',            answer: 'sombrero / camisa',              hint: 'ropa' },
    { en: 'They drank milk and coffee after dinner.',   blank: 'milk / dinner',          answer: 'leche / cena',                   hint: 'comida' },
    { en: 'She cleaned the kitchen and the bathroom.',  blank: 'kitchen / bathroom',     answer: 'cocina / baño',                  hint: 'hogar' },
    { en: 'The garden and the park were beautiful.',    blank: 'garden / park',          answer: 'jardín / parque',                hint: 'lugares' },
    { en: 'He saved the contract and the report.',      blank: 'contract / report',      answer: 'contrato / informe',             hint: 'trabajo' },
    { en: 'She bought shoes and a jacket.',             blank: 'shoes / jacket',         answer: 'zapatos / chaqueta',             hint: 'ropa' },
    { en: 'They drove past the church and the school.', blank: 'church / school',        answer: 'iglesia / escuela',              hint: 'lugares' },
    { en: 'He repairs cars and trucks.',                blank: 'cars / trucks',          answer: 'carros / camiones',              hint: 'transporte' },
    { en: 'She baked bread and cookies.',               blank: 'bread / cookies',        answer: 'pan / galletas',                 hint: 'comida' },
    { en: 'He painted the wall and the ceiling.',       blank: 'wall / ceiling',         answer: 'pared / techo',                  hint: 'hogar' },
    { en: 'The cat and the mouse ran fast.',            blank: 'cat / mouse',            answer: 'gato / ratón',                   hint: 'animales' },
    { en: 'She planted roses and sunflowers.',          blank: 'roses / sunflowers',     answer: 'rosas / girasoles',              hint: 'naturaleza' },
    { en: 'He fixed the door and the window.',          blank: 'door / window',          answer: 'puerta / ventana',               hint: 'hogar' },
    { en: 'They swam in the lake and the river.',       blank: 'lake / river',           answer: 'lago / río',                     hint: 'naturaleza' },
    { en: 'She plays the guitar and the piano.',        blank: 'guitar / piano',         answer: 'guitarra / piano',               hint: 'música' },
    { en: 'He wore a suit and a tie.',                  blank: 'suit / tie',             answer: 'traje / corbata',                hint: 'ropa' },
    { en: 'The nurse and the doctor treated the patient.', blank: 'nurse / patient',     answer: 'enfermera / paciente',           hint: 'salud' },
    { en: 'She bought rice and beans at the store.',    blank: 'rice / beans',           answer: 'arroz / frijoles',               hint: 'comida' },
    { en: 'He broke the cup and the plate.',            blank: 'cup / plate',            answer: 'taza / plato',                   hint: 'hogar' },
    { en: 'The spider and the fly are insects.',        blank: 'spider / fly',           answer: 'araña / mosca',                  hint: 'animales' },
    { en: 'She wore a ring and a necklace.',            blank: 'ring / necklace',        answer: 'anillo / collar',                hint: 'accesorios' },
    { en: 'He read the letter and the contract.',       blank: 'letter / contract',      answer: 'carta / contrato',               hint: 'documentos' },
    { en: 'They visited the museum and the castle.',    blank: 'museum / castle',        answer: 'museo / castillo',               hint: 'turismo' },
    { en: 'She drank juice and water for breakfast.',   blank: 'juice / water',          answer: 'jugo / agua',                    hint: 'bebidas' },
    { en: 'The pilot and the passenger boarded the plane.', blank: 'pilot / passenger', answer: 'piloto / pasajero',              hint: 'viaje' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 3 — Sentido de tiempo (100 frases)
  //  Pasado / Presente continuo / Futuro /
  //  Preguntas / Negaciones
  // ─────────────────────────────────────────
  3: [
    { en: 'She was working when I called.',              es: 'Ella estaba trabajando cuando llamé.',             hint: 'pasado continuo' },
    { en: 'He has already finished his homework.',       es: 'Él ya terminó su tarea.',                         hint: 'presente perfecto' },
    { en: 'We will travel to Europe next year.',         es: 'Viajaremos a Europa el próximo año.',              hint: 'futuro simple' },
    { en: 'Are you studying for the exam?',              es: '¿Estás estudiando para el examen?',                hint: 'pregunta presente continuo' },
    { en: 'I didn\'t go to school yesterday.',           es: 'No fui a la escuela ayer.',                       hint: 'pasado negativo' },
    { en: 'She has never seen the ocean.',               es: 'Ella nunca ha visto el océano.',                   hint: 'presente perfecto negativo' },
    { en: 'Will you call me tomorrow morning?',          es: '¿Me llamarás mañana por la mañana?',              hint: 'pregunta futuro' },
    { en: 'I am going to start a new project.',          es: 'Voy a empezar un nuevo proyecto.',                 hint: 'futuro próximo' },
    { en: 'They were playing football when it rained.',  es: 'Ellos estaban jugando fútbol cuando llovió.',      hint: 'pasado continuo' },
    { en: 'Have you ever visited a foreign country?',   es: '¿Has visitado alguna vez un país extranjero?',     hint: 'presente perfecto pregunta' },
    { en: 'He will not come to the meeting.',            es: 'Él no vendrá a la reunión.',                       hint: 'futuro negativo' },
    { en: 'I was reading when the phone rang.',          es: 'Yo estaba leyendo cuando sonó el teléfono.',       hint: 'pasado continuo' },
    { en: 'She has just arrived at the airport.',        es: 'Ella acaba de llegar al aeropuerto.',              hint: 'presente perfecto reciente' },
    { en: 'We are planning to move next month.',         es: 'Estamos planeando mudarnos el próximo mes.',       hint: 'presente continuo futuro' },
    { en: 'Did you finish your report on time?',         es: '¿Terminaste tu informe a tiempo?',                 hint: 'pregunta pasado simple' },
    { en: 'I have been learning English for two years.', es: 'He estado aprendiendo inglés por dos años.',       hint: 'presente perfecto continuo' },
    { en: 'She won\'t accept the new contract.',         es: 'Ella no aceptará el nuevo contrato.',              hint: 'futuro negativo' },
    { en: 'Are they going to invest in the project?',    es: '¿Van a invertir en el proyecto?',                  hint: 'pregunta futuro próximo' },
    { en: 'He had saved money before losing his job.',   es: 'Él había ahorrado dinero antes de perder su trabajo.', hint: 'pasado perfecto' },
    { en: 'We haven\'t decided yet.',                    es: 'No hemos decidido aún.',                           hint: 'presente perfecto negativo' },
    { en: 'What were you doing at midnight?',            es: '¿Qué estabas haciendo a medianoche?',              hint: 'pregunta pasado continuo' },
    { en: 'I will have finished by Friday.',             es: 'Habré terminado para el viernes.',                 hint: 'futuro perfecto' },
    { en: 'She was not feeling well last night.',        es: 'Ella no se sentía bien anoche.',                   hint: 'pasado continuo negativo' },
    { en: 'Have they announced the winner yet?',         es: '¿Ya anunciaron al ganador?',                       hint: 'presente perfecto pregunta' },
    { en: 'He is going to present his research.',        es: 'Él va a presentar su investigación.',              hint: 'futuro próximo' },
    { en: 'I did not understand the question.',          es: 'No entendí la pregunta.',                          hint: 'pasado negativo' },
    { en: 'She has been waiting for an hour.',           es: 'Ella ha estado esperando por una hora.',           hint: 'presente perfecto continuo' },
    { en: 'Will the economy grow next year?',            es: '¿Crecerá la economía el próximo año?',             hint: 'pregunta futuro' },
    { en: 'They had already left when we arrived.',      es: 'Ellos ya se habían ido cuando llegamos.',          hint: 'pasado perfecto' },
    { en: 'Is she still working at the hospital?',       es: '¿Sigue ella trabajando en el hospital?',           hint: 'pregunta presente continuo' },
    { en: 'I am not going to accept that offer.',        es: 'No voy a aceptar esa oferta.',                     hint: 'futuro próximo negativo' },
    { en: 'He worked late every night last week.',       es: 'Él trabajó hasta tarde cada noche la semana pasada.', hint: 'pasado simple' },
    { en: 'Have you read the new report?',               es: '¿Has leído el nuevo informe?',                     hint: 'presente perfecto pregunta' },
    { en: 'She will be traveling all summer.',           es: 'Ella estará viajando todo el verano.',             hint: 'futuro continuo' },
    { en: 'We were not expecting that result.',          es: 'No estábamos esperando ese resultado.',             hint: 'pasado continuo negativo' },
    { en: 'Did the team win the match?',                 es: '¿Ganó el equipo el partido?',                      hint: 'pregunta pasado simple' },
    { en: 'I have always loved music.',                  es: 'Siempre he amado la música.',                      hint: 'presente perfecto' },
    { en: 'They are going to open a new office.',        es: 'Van a abrir una nueva oficina.',                   hint: 'futuro próximo' },
    { en: 'Was he at the meeting yesterday?',            es: '¿Estuvo él en la reunión de ayer?',                hint: 'pregunta pasado simple' },
    { en: 'I won\'t forget what you said.',              es: 'No olvidaré lo que dijiste.',                      hint: 'futuro negativo' },
    { en: 'She has grown a lot since last year.',        es: 'Ella ha crecido mucho desde el año pasado.',       hint: 'presente perfecto' },
    { en: 'Are you going to study abroad?',              es: '¿Vas a estudiar en el extranjero?',                hint: 'pregunta futuro próximo' },
    { en: 'He was not listening during the class.',      es: 'Él no estaba escuchando durante la clase.',        hint: 'pasado continuo negativo' },
    { en: 'I had never tried sushi before that day.',    es: 'Nunca había probado sushi antes de ese día.',      hint: 'pasado perfecto' },
    { en: 'Will she accept the new challenge?',          es: '¿Aceptará ella el nuevo desafío?',                 hint: 'pregunta futuro' },
    { en: 'They have not paid their debt.',              es: 'Ellos no han pagado su deuda.',                    hint: 'presente perfecto negativo' },
    { en: 'I am currently working on a new design.',     es: 'Actualmente estoy trabajando en un nuevo diseño.', hint: 'presente continuo' },
    { en: 'He did not attend the ceremony.',             es: 'Él no asistió a la ceremonia.',                    hint: 'pasado negativo' },
    { en: 'Have you made your decision yet?',            es: '¿Ya tomaste tu decisión?',                         hint: 'presente perfecto pregunta' },
    { en: 'She will complete the survey tomorrow.',      es: 'Ella completará la encuesta mañana.',              hint: 'futuro simple' },
    { en: 'I was thinking about the solution.',          es: 'Estaba pensando en la solución.',                  hint: 'pasado continuo' },
    { en: 'They had planned a surprise party.',          es: 'Ellos habían planeado una fiesta sorpresa.',       hint: 'pasado perfecto' },
    { en: 'Is the company going to hire more people?',   es: '¿Va a contratar más personas la empresa?',         hint: 'pregunta futuro próximo' },
    { en: 'I have not received any news.',               es: 'No he recibido ninguna noticia.',                  hint: 'presente perfecto negativo' },
    { en: 'He will not sign the agreement.',             es: 'Él no firmará el acuerdo.',                        hint: 'futuro negativo' },
    { en: 'She was studying when the power went out.',   es: 'Ella estaba estudiando cuando se fue la luz.',     hint: 'pasado continuo' },
    { en: 'Have you ever lost your passport?',           es: '¿Alguna vez has perdido tu pasaporte?',            hint: 'presente perfecto pregunta' },
    { en: 'We are not going to change our strategy.',    es: 'No vamos a cambiar nuestra estrategia.',           hint: 'futuro próximo negativo' },
    { en: 'Did she finish her analysis on time?',        es: '¿Terminó ella su análisis a tiempo?',              hint: 'pregunta pasado simple' },
    { en: 'He has contributed a lot to this project.',   es: 'Él ha contribuido mucho a este proyecto.',         hint: 'presente perfecto' },
    { en: 'I will be presenting the results next week.', es: 'Estaré presentando los resultados la próxima semana.', hint: 'futuro continuo' },
    { en: 'They were not aware of the risk.',            es: 'Ellos no estaban conscientes del riesgo.',         hint: 'pasado continuo negativo' },
    { en: 'Have the results been published?',            es: '¿Se han publicado los resultados?',                hint: 'presente perfecto pasiva' },
    { en: 'I had already sent the report.',              es: 'Ya había enviado el informe.',                     hint: 'pasado perfecto' },
    { en: 'Are you currently looking for a job?',        es: '¿Estás buscando trabajo actualmente?',             hint: 'pregunta presente continuo' },
    { en: 'She won\'t miss this opportunity.',           es: 'Ella no perderá esta oportunidad.',                hint: 'futuro negativo' },
    { en: 'They have built a new system.',               es: 'Ellos han construido un nuevo sistema.',           hint: 'presente perfecto' },
    { en: 'Was the data analyzed correctly?',            es: '¿Se analizaron los datos correctamente?',          hint: 'pregunta pasado pasiva' },
    { en: 'I am going to protect the environment.',      es: 'Voy a proteger el medio ambiente.',                hint: 'futuro próximo' },
    { en: 'She had already left when I arrived.',        es: 'Ella ya se había ido cuando llegué.',              hint: 'pasado perfecto' },
    { en: 'Will they invest in renewable energy?',       es: '¿Invertirán en energía renovable?',                hint: 'pregunta futuro' },
    { en: 'He has not finished his research yet.',       es: 'Él aún no ha terminado su investigación.',         hint: 'presente perfecto negativo' },
    { en: 'Are they implementing the new interface?',    es: '¿Están implementando la nueva interfaz?',          hint: 'pregunta presente continuo' },
    { en: 'I did not predict that conclusion.',          es: 'No predije esa conclusión.',                       hint: 'pasado negativo' },
    { en: 'She will have designed it by Monday.',        es: 'Ella lo habrá diseñado para el lunes.',            hint: 'futuro perfecto' },
    { en: 'They were evaluating the process.',           es: 'Ellos estaban evaluando el proceso.',              hint: 'pasado continuo' },
    { en: 'Have you updated the database?',              es: '¿Has actualizado la base de datos?',               hint: 'presente perfecto pregunta' },
    { en: 'We won\'t generate those risks.',             es: 'No generaremos esos riesgos.',                     hint: 'futuro negativo' },
    { en: 'I was not able to attend the ceremony.',      es: 'No pude asistir a la ceremonia.',                  hint: 'pasado negativo' },
    { en: 'Has the population grown this decade?',       es: '¿Ha crecido la población esta década?',            hint: 'presente perfecto pregunta' },
    { en: 'She is going to lead the new generation.',    es: 'Ella va a liderar la nueva generación.',           hint: 'futuro próximo' },
    { en: 'They had faced a natural disaster.',          es: 'Ellos habían enfrentado un desastre natural.',     hint: 'pasado perfecto' },
    { en: 'Is the community aware of the risk?',         es: '¿Es consciente la comunidad del riesgo?',          hint: 'pregunta presente simple' },
    { en: 'I will not ignore that evidence.',            es: 'No ignoraré esa evidencia.',                       hint: 'futuro negativo' },
    { en: 'She has protected the species for years.',    es: 'Ella ha protegido la especie por años.',           hint: 'presente perfecto' },
    { en: 'Were they planning to prevent the flood?',    es: '¿Estaban planeando prevenir la inundación?',       hint: 'pregunta pasado continuo' },
    { en: 'We have not found a solution yet.',           es: 'No hemos encontrado una solución aún.',            hint: 'presente perfecto negativo' },
    { en: 'He will benefit from this agreement.',        es: 'Él se beneficiará de este acuerdo.',               hint: 'futuro simple' },
    { en: 'Did the drought affect the population?',      es: '¿Afectó la sequía a la población?',                hint: 'pregunta pasado simple' },
    { en: 'They have influenced the culture.',           es: 'Ellos han influenciado la cultura.',               hint: 'presente perfecto' },
    { en: 'Was she aware of the impact?',                es: '¿Era ella consciente del impacto?',                hint: 'pregunta pasado simple' },
    { en: 'I am going to reduce the risk.',              es: 'Voy a reducir el riesgo.',                         hint: 'futuro próximo' },
    { en: 'Have they measured the benefit?',             es: '¿Han medido el beneficio?',                        hint: 'presente perfecto pregunta' },
    { en: 'She had not expected that result.',           es: 'Ella no había esperado ese resultado.',            hint: 'pasado perfecto negativo' },
    { en: 'Will you contribute to the project?',         es: '¿Contribuirás al proyecto?',                       hint: 'pregunta futuro' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 4 — Estructuras complejas (100 frases)
  //  Condicionales / Voz pasiva / Reported speech /
  //  Subjuntivo / Estructuras de énfasis
  // ─────────────────────────────────────────
  4: [
    { en: 'If she had studied harder, she would have passed.',       es: 'Si hubiera estudiado más, habría aprobado.',             hint: 'condicional 3' },
    { en: 'The contract was signed by both parties.',                es: 'El contrato fue firmado por ambas partes.',              hint: 'voz pasiva pasado' },
    { en: 'He told me that she had already left.',                   es: 'Me dijo que ella ya se había ido.',                      hint: 'reported speech' },
    { en: 'It is essential that he attend the meeting.',             es: 'Es esencial que él asista a la reunión.',                hint: 'subjuntivo' },
    { en: 'Not only did she finish, but she also exceeded.',         es: 'No solo terminó, sino que también superó.',              hint: 'inversión énfasis' },
    { en: 'Had I known, I would have acted differently.',            es: 'Si lo hubiera sabido, habría actuado diferente.',        hint: 'condicional 3 invertido' },
    { en: 'The results were not what we had anticipated.',           es: 'Los resultados no eran lo que habíamos anticipado.',     hint: 'reported speech implícito' },
    { en: 'She asked whether the report had been submitted.',        es: 'Ella preguntó si el informe había sido entregado.',      hint: 'reported question' },
    { en: 'The new policy will be implemented next quarter.',        es: 'La nueva política se implementará el próximo trimestre.',hint: 'voz pasiva futuro' },
    { en: 'It is vital that the data be analyzed carefully.',        es: 'Es vital que los datos sean analizados cuidadosamente.', hint: 'subjuntivo pasiva' },
    { en: 'Were she to resign, we would lose expertise.',            es: 'Si ella renunciara, perderíamos experiencia.',           hint: 'condicional 2 invertido' },
    { en: 'He was told to submit the proposal by Friday.',           es: 'Se le dijo que entregara la propuesta antes del viernes.',hint:'pasiva + reported' },
    { en: 'The budget has been revised three times.',                es: 'El presupuesto ha sido revisado tres veces.',            hint: 'presente perfecto pasiva' },
    { en: 'She insisted that the terms be renegotiated.',            es: 'Ella insistió en que los términos fueran renegociados.', hint: 'subjuntivo pasado' },
    { en: 'No sooner had he left than it started raining.',          es: 'Apenas se había ido cuando empezó a llover.',            hint: 'inversión temporal' },
    { en: 'The risk could have been avoided with better planning.',  es: 'El riesgo podría haberse evitado con mejor planificación.',hint:'modal perfecto pasiva' },
    { en: 'What she said was not what she meant.',                   es: 'Lo que dijo no era lo que quería decir.',                hint: 'reported speech énfasis' },
    { en: 'Should you need help, do not hesitate to call.',          es: 'Si necesitas ayuda, no dudes en llamar.',                hint: 'condicional 1 invertido' },
    { en: 'The strategy was devised to maximize profit.',            es: 'La estrategia fue diseñada para maximizar la ganancia.', hint: 'voz pasiva propósito' },
    { en: 'It is recommended that he be given more time.',           es: 'Se recomienda que se le dé más tiempo.',                 hint: 'subjuntivo pasiva' },
    { en: 'Only after the analysis did they understand the impact.', es: 'Solo después del análisis entendieron el impacto.',      hint: 'inversión énfasis' },
    { en: 'She claimed that the evidence had been manipulated.',     es: 'Ella afirmó que la evidencia había sido manipulada.',    hint: 'reported speech pasiva' },
    { en: 'If the investment had succeeded, we would be profitable.',es: 'Si la inversión hubiera tenido éxito, seríamos rentables.',hint:'condicional mixto' },
    { en: 'The phenomenon has never been fully explained.',          es: 'El fenómeno nunca ha sido explicado completamente.',     hint: 'presente perfecto pasiva negativa' },
    { en: 'He suggested that we reconsider our methodology.',        es: 'Él sugirió que reconsideráramos nuestra metodología.',   hint: 'subjuntivo reported' },
    { en: 'Under no circumstances should you share that data.',      es: 'Bajo ninguna circunstancia debes compartir esos datos.', hint: 'inversión énfasis' },
    { en: 'The hierarchy was restructured following the merger.',    es: 'La jerarquía fue reestructurada tras la fusión.',        hint: 'voz pasiva pasado' },
    { en: 'It is imperative that the initiative be launched now.',   es: 'Es imperativo que la iniciativa se lance ahora.',        hint: 'subjuntivo urgencia' },
    { en: 'She told me she would not tolerate any discrepancy.',     es: 'Me dijo que no toleraría ninguna discrepancia.',         hint: 'reported speech futuro' },
    { en: 'Had the project been managed better, it would have succeeded.', es: 'Si el proyecto hubiera sido mejor gestionado, habría tenido éxito.', hint: 'condicional 3 pasiva' },
    { en: 'Little did he know what was about to happen.',            es: 'Él poco sabía lo que estaba a punto de ocurrir.',        hint: 'inversión énfasis' },
    { en: 'The decision was deferred pending further analysis.',     es: 'La decisión se aplazó pendiente de más análisis.',       hint: 'voz pasiva compleja' },
    { en: 'She emphasized that integrity was non-negotiable.',       es: 'Ella enfatizó que la integridad no era negociable.',     hint: 'reported speech énfasis' },
    { en: 'It is crucial that all risks be identified beforehand.',  es: 'Es crucial que todos los riesgos se identifiquen previamente.', hint: 'subjuntivo pasiva' },
    { en: 'Not until the deadline passed did they react.',           es: 'No fue hasta que venció el plazo que reaccionaron.',     hint: 'inversión temporal' },
    { en: 'The proposal was rejected on the grounds of redundancy.', es: 'La propuesta fue rechazada por motivos de redundancia.', hint: 'voz pasiva razón' },
    { en: 'Were the data transparent, trust would increase.',        es: 'Si los datos fueran transparentes, la confianza aumentaría.', hint: 'condicional 2' },
    { en: 'He asked whether they had implemented the interface.',    es: 'Él preguntó si habían implementado la interfaz.',        hint: 'reported question perfecto' },
    { en: 'It is suggested that feasible alternatives be explored.', es: 'Se sugiere que se exploren alternativas factibles.',     hint: 'subjuntivo pasiva' },
    { en: 'Seldom has such a precedent been set.',                   es: 'Pocas veces se ha establecido tal precedente.',          hint: 'inversión frecuencia' },
    { en: 'The system was upgraded to improve performance.',         es: 'El sistema fue actualizado para mejorar el rendimiento.',hint: 'voz pasiva propósito' },
    { en: 'She warned that the volatile market could crash.',        es: 'Ella advirtió que el mercado volátil podría colapsar.',  hint: 'reported speech modal' },
    { en: 'Had we anticipated the drought, we would have prepared.', es: 'Si hubiéramos anticipado la sequía, nos habríamos preparado.', hint: 'condicional 3' },
    { en: 'It is paramount that the process be legitimate.',         es: 'Es primordial que el proceso sea legítimo.',             hint: 'subjuntivo importancia' },
    { en: 'Only by collaborating will we achieve this goal.',        es: 'Solo colaborando lograremos este objetivo.',             hint: 'inversión énfasis' },
    { en: 'The methodology was validated by independent experts.',   es: 'La metodología fue validada por expertos independientes.',hint:'voz pasiva agente' },
    { en: 'He implied that the outcome was inevitable.',             es: 'Él insinuó que el resultado era inevitable.',            hint: 'reported speech implícito' },
    { en: 'Should the market fluctuate, adjust your strategy.',      es: 'Si el mercado fluctúa, ajusta tu estrategia.',           hint: 'condicional 1 invertido' },
    { en: 'It was unprecedented that the law be overturned.',        es: 'Fue sin precedentes que la ley fuera revocada.',         hint: 'subjuntivo pasado énfasis' },
    { en: 'Rarely had such expertise been demonstrated publicly.',   es: 'Pocas veces se había demostrado tal pericia públicamente.',hint:'inversión frecuencia' },
    { en: 'The report will have been reviewed by all parties.',      es: 'El informe habrá sido revisado por todas las partes.',   hint: 'futuro perfecto pasiva' },
    { en: 'She requested that the meeting be rescheduled.',          es: 'Ella solicitó que la reunión se reprogramara.',          hint: 'subjuntivo pasado' },
    { en: 'It is debatable whether the decision was justified.',     es: 'Es debatible si la decisión fue justificada.',           hint: 'reported question indirecta' },
    { en: 'Had the team been more diligent, errors would be fewer.', es: 'Si el equipo hubiera sido más diligente, habría menos errores.', hint: 'condicional mixto' },
    { en: 'Not a single risk was overlooked in the assessment.',     es: 'Ni un solo riesgo fue pasado por alto en la evaluación.',hint: 'voz pasiva énfasis negativo' },
    { en: 'Were the benefits more substantial, I would invest.',     es: 'Si los beneficios fueran más sustanciales, invertiría.', hint: 'condicional 2' },
    { en: 'She confessed that she had been complacent.',             es: 'Ella confesó que había sido complaciente.',              hint: 'reported speech continuo' },
    { en: 'It is vital that leadership remain transparent.',         es: 'Es vital que el liderazgo permanezca transparente.',     hint: 'subjuntivo presente' },
    { en: 'Only then did the underlying issue become clear.',        es: 'Solo entonces se hizo evidente el problema subyacente.', hint: 'inversión temporal' },
    { en: 'The threshold was exceeded, triggering an alert.',        es: 'El umbral fue superado, lo que activó una alerta.',      hint: 'voz pasiva consecuencia' },
    { en: 'He insisted that his perspective be considered.',         es: 'Él insistió en que su perspectiva fuera considerada.',   hint: 'subjuntivo reported pasiva' },
    { en: 'Should there be any ambiguity, please clarify.',          es: 'Si hubiera alguna ambigüedad, aclara.',                  hint: 'condicional 1 invertido' },
    { en: 'It was argued that the approach was detrimental.',        es: 'Se argumentó que el enfoque era perjudicial.',           hint: 'reported pasiva' },
    { en: 'Barely had she spoken when the debate erupted.',          es: 'Apenas había hablado cuando el debate estalló.',         hint: 'inversión temporal' },
    { en: 'The initiative was endorsed by the entire committee.',    es: 'La iniciativa fue respaldada por todo el comité.',       hint: 'voz pasiva agente' },
    { en: 'It is indispensable that each member be accountable.',    es: 'Es indispensable que cada miembro sea responsable.',     hint: 'subjuntivo obligación' },
    { en: 'Had she been more forthcoming, trust would have remained.',es: 'Si ella hubiera sido más abierta, la confianza habría permanecido.', hint: 'condicional 3' },
    { en: 'What the data reveals is often misinterpreted.',          es: 'Lo que revelan los datos suele malinterpretarse.',       hint: 'voz pasiva énfasis' },
    { en: 'He suggested that I yield before the deadline.',          es: 'Él sugirió que cediera antes del plazo.',                hint: 'subjuntivo reported' },
    { en: 'No sooner was the plan devised than it was challenged.',  es: 'Apenas se diseñó el plan cuando fue cuestionado.',       hint: 'inversión temporal pasiva' },
    { en: 'It is expected that the analysis will be completed.',     es: 'Se espera que el análisis sea completado.',              hint: 'pasiva + subjuntivo' },
    { en: 'Were the system more rigorous, fewer errors would occur.',es: 'Si el sistema fuera más riguroso, ocurrirían menos errores.', hint: 'condicional 2' },
    { en: 'She acknowledged that her judgment had been flawed.',     es: 'Ella reconoció que su juicio había sido erróneo.',       hint: 'reported speech perfecto' },
    { en: 'It is remarkable that such progress has been made.',      es: 'Es notable que se haya logrado tal progreso.',           hint: 'subjuntivo presente perfecto' },
    { en: 'Not a single feasible solution was proposed.',            es: 'No se propuso ninguna solución factible.',               hint: 'voz pasiva negativa énfasis' },
    { en: 'Should the volatile conditions persist, halt operations.',es: 'Si las condiciones volátiles persisten, detén las operaciones.', hint: 'condicional 1 invertido' },
    { en: 'He proclaimed that the outcome was unprecedented.',       es: 'Él proclamó que el resultado fue sin precedentes.',      hint: 'reported speech pasado' },
    { en: 'Only when all parties agree can progress be made.',       es: 'Solo cuando todas las partes estén de acuerdo puede haber progreso.', hint: 'inversión condición' },
    { en: 'The discrepancy was identified during the audit.',        es: 'La discrepancia fue identificada durante la auditoría.', hint: 'voz pasiva temporal' },
    { en: 'It is crucial that no ambiguity remain in the text.',     es: 'Es crucial que no quede ambigüedad en el texto.',        hint: 'subjuntivo negativo' },
    { en: 'Were the initiative to fail, funding would be cut.',      es: 'Si la iniciativa fallara, se cortaría el financiamiento.',hint:'condicional 2 invertido' },
    { en: 'He confided that the hierarchy had been manipulated.',    es: 'Él confesó que la jerarquía había sido manipulada.',     hint: 'reported speech pasiva perfecto' },
    { en: 'Scarcely had the agreement been signed when it was contested.', es: 'Apenas había sido firmado el acuerdo cuando fue impugnado.', hint: 'inversión temporal pasiva' },
    { en: 'It is mandatory that the precedent be respected.',        es: 'Es obligatorio que el precedente sea respetado.',        hint: 'subjuntivo obligación pasiva' },
    { en: 'Not only was she pragmatic, but also visionary.',         es: 'No solo era pragmática, sino también visionaria.',       hint: 'inversión correlativa' },
    { en: 'The redundant steps were eliminated to save time.',       es: 'Los pasos redundantes fueron eliminados para ahorrar tiempo.', hint: 'voz pasiva propósito' },
    { en: 'Had the data been scrutinized, fraud would have been caught.',es:'Si los datos hubieran sido examinados, el fraude habría sido detectado.', hint: 'condicional 3 pasiva doble' },
    { en: 'She stipulated that all tasks be completed by noon.',     es: 'Ella estipuló que todas las tareas se completaran antes del mediodía.', hint: 'subjuntivo pasado' },
    { en: 'It is worth noting that the approach was viable.',        es: 'Vale la pena señalar que el enfoque fue viable.',        hint: 'voz pasiva evaluativa' },
    { en: 'Rarely does such spontaneous collaboration occur.',       es: 'Pocas veces ocurre tal colaboración espontánea.',        hint: 'inversión frecuencia' },
    { en: 'Were the findings to prove substantial, publish them.',   es: 'Si los hallazgos resultan sustanciales, publícalos.',     hint: 'condicional 2 invertido imperativo' },
    { en: 'The commensurate response was not forthcoming.',          es: 'La respuesta proporcional no fue evidente.',             hint: 'voz pasiva negativa' },
    { en: 'It is essential that transient issues be addressed first.',es:'Es esencial que los problemas transitorios se aborden primero.', hint: 'subjuntivo prioridad' },
    { en: 'She observed that endeavors rarely succeed alone.',       es: 'Ella observó que los esfuerzos pocas veces tienen éxito solos.', hint: 'reported speech general' },
    { en: 'No sooner had the crisis emerged than measures were taken.',es:'Apenas había surgido la crisis cuando se tomaron medidas.',    hint: 'inversión temporal pasiva' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 5 — Frases sofisticadas (100 frases)
  //  Vocabulario experto + matices retóricos,
  //  ironía, implicación, registros formales
  // ─────────────────────────────────────────
  5: [
    { en: 'His abdication of responsibility precipitated the crisis.',    es: 'Su abdicación de responsabilidad precipitó la crisis.',       hint: 'vocabulario experto' },
    { en: 'The aberration in the data rendered the model unreliable.',    es: 'La aberración en los datos volvió el modelo poco confiable.', hint: 'vocabulario técnico' },
    { en: 'His abstruse argument left the audience bewildered.',          es: 'Su argumento abstruso dejó al público desconcertado.',         hint: 'registro formal' },
    { en: 'The acrimony of the debate overshadowed its substance.',       es: 'La acrimonia del debate opacó su sustancia.',                  hint: 'vocabulario retórico' },
    { en: 'Her business acumen allowed her to foresee the downturn.',     es: 'Su perspicacia empresarial le permitió prever la recesión.',   hint: 'vocabulario experto' },
    { en: 'He admonished the committee for its deliberate inaction.',     es: 'Él amonestó al comité por su inacción deliberada.',            hint: 'vocabulario formal' },
    { en: 'Her adroit handling of the crisis earned widespread praise.',  es: 'Su hábil manejo de la crisis le ganó amplio reconocimiento.',  hint: 'vocabulario experto' },
    { en: 'His affable demeanor concealed a calculating mind.',           es: 'Su carácter afable ocultaba una mente calculadora.',           hint: 'contraste' },
    { en: 'She accepted the challenge with remarkable alacrity.',         es: 'Ella aceptó el desafío con notable presteza.',                 hint: 'vocabulario avanzado' },
    { en: 'The policy was designed to alleviate systemic inequality.',    es: 'La política fue diseñada para aliviar la desigualdad sistémica.',hint:'voz pasiva formal' },
    { en: 'The merger sought to amalgamate two competing cultures.',      es: 'La fusión buscaba amalgamar dos culturas en competencia.',      hint: 'vocabulario corporativo' },
    { en: 'Targeted intervention can ameliorate entrenched poverty.',     es: 'La intervención focalizada puede mejorar la pobreza arraigada.',hint:'vocabulario político' },
    { en: 'Using an anachronism undermined the credibility of the essay.',es: 'Usar un anacronismo socavó la credibilidad del ensayo.',        hint: 'vocabulario académico' },
    { en: 'Anomalous readings suggest the sensor may be defective.',      es: 'Lecturas anómalas sugieren que el sensor puede estar defectuoso.',hint:'vocabulario científico' },
    { en: 'Her antipathy toward bureaucracy was well documented.',        es: 'Su antipatía hacia la burocracia estaba bien documentada.',     hint: 'vocabulario formal' },
    { en: 'Public apathy toward the issue alarmed civil society.',        es: 'La apatía pública hacia el problema alarmó a la sociedad civil.',hint:'vocabulario sociológico' },
    { en: 'The arcane rituals of the institution baffled outsiders.',     es: 'Los rituales arcanos de la institución desconcertaban a los externos.', hint: 'vocabulario experto' },
    { en: 'The arduous journey transformed his perspective entirely.',    es: 'El arduo viaje transformó su perspectiva por completo.',        hint: 'vocabulario literario' },
    { en: 'She was articulate in conveying her dissent.',                 es: 'Ella fue elocuente al expresar su disidencia.',                 hint: 'registro formal' },
    { en: 'It took months to ascertain the true cause of the failure.',   es: 'Tomó meses determinar la verdadera causa del fracaso.',         hint: 'vocabulario investigativo' },
    { en: 'His astute observation revealed a flaw in the argument.',      es: 'Su astuta observación reveló una falla en el argumento.',       hint: 'vocabulario intelectual' },
    { en: 'Years of neglect led to the atrophy of the institution.',      es: 'Años de negligencia llevaron a la atrofia de la institución.',  hint: 'vocabulario formal' },
    { en: 'Her audacious proposal challenged conventional thinking.',     es: 'Su propuesta audaz desafió el pensamiento convencional.',       hint: 'vocabulario experto' },
    { en: 'The funding augmented their capacity to conduct research.',    es: 'El financiamiento aumentó su capacidad para llevar a cabo investigaciones.', hint: 'vocabulario académico' },
    { en: 'The timing of the launch proved auspicious.',                  es: 'El momento del lanzamiento resultó propicio.',                  hint: 'vocabulario formal' },
    { en: 'His banal commentary added nothing to the discourse.',         es: 'Su comentario banal no aportó nada al discurso.',               hint: 'crítica retórica' },
    { en: 'The foundation was driven by benevolent motives.',             es: 'La fundación estaba impulsada por motivos benevolentes.',        hint: 'vocabulario formal' },
    { en: 'The cacophony of competing voices made consensus impossible.', es: 'La cacofonía de voces en competencia hizo imposible el consenso.', hint: 'metáfora' },
    { en: 'A candid assessment of the risks is long overdue.',            es: 'Una evaluación franca de los riesgos lleva mucho tiempo pendiente.', hint: 'registro formal' },
    { en: 'Her capricious decisions destabilized the entire team.',       es: 'Sus decisiones caprichosas desestabilizaron a todo el equipo.', hint: 'vocabulario experto' },
    { en: 'His caustic review alienated potential collaborators.',        es: 'Su reseña cáustica alejó a posibles colaboradores.',            hint: 'vocabulario crítico' },
    { en: 'She circumvented the protocol through indirect channels.',     es: 'Ella eludió el protocolo a través de canales indirectos.',      hint: 'vocabulario corporativo' },
    { en: 'The clandestine operation was exposed by investigative journalism.', es: 'La operación clandestina fue expuesta por el periodismo de investigación.', hint: 'vocabulario político' },
    { en: 'Economic hardship can coerce individuals into compliance.',    es: 'Las dificultades económicas pueden coaccionar a los individuos.', hint: 'vocabulario sociológico' },
    { en: 'Her cogent reasoning persuaded even the skeptics.',            es: 'Su razonamiento convincente persuadió incluso a los escépticos.',hint: 'vocabulario retórico' },
    { en: 'A coherent narrative is essential for public trust.',          es: 'Una narrativa coherente es esencial para la confianza pública.',  hint: 'vocabulario comunicativo' },
    { en: 'The punishment was not commensurate with the offense.',        es: 'El castigo no era proporcional a la ofensa.',                   hint: 'vocabulario jurídico' },
    { en: 'His convoluted reasoning obscured the core argument.',         es: 'Su razonamiento enrevesado oscureció el argumento central.',     hint: 'vocabulario intelectual' },
    { en: 'Independent witnesses corroborated the defendant\'s alibi.',   es: 'Testigos independientes corroboraron la coartada del acusado.', hint: 'vocabulario jurídico' },
    { en: 'The cryptic message was decoded by a team of analysts.',       es: 'El mensaje críptico fue descifrado por un equipo de analistas.', hint: 'vocabulario técnico' },
    { en: 'All culpable parties must be held legally accountable.',       es: 'Todas las partes culpables deben rendir cuentas legalmente.',   hint: 'vocabulario jurídico' },
    { en: 'Budget cuts curtailed the scope of the research project.',     es: 'Los recortes presupuestarios limitaron el alcance del proyecto de investigación.', hint: 'vocabulario académico' },
    { en: 'Her cynical worldview precluded genuine collaboration.',       es: 'Su visión del mundo cínica impedía la verdadera colaboración.', hint: 'vocabulario filosófico' },
    { en: 'The enormity of the task daunted even the most experienced.',  es: 'La enormidad de la tarea intimidó incluso a los más experimentados.', hint: 'vocabulario expresivo' },
    { en: 'The prolonged conflict debilitated the nation\'s economy.',    es: 'El prolongado conflicto debilitó la economía de la nación.',    hint: 'vocabulario político' },
    { en: 'She could not decipher the intent behind his cryptic remark.', es: 'Ella no pudo descifrar la intención detrás de su enigmático comentario.', hint: 'vocabulario avanzado' },
    { en: 'He showed deference to his mentor despite their disagreement.',es: 'Él mostró deferencia hacia su mentor a pesar de su desacuerdo.',hint: 'vocabulario relacional' },
    { en: 'The defunct agency left a regulatory vacuum.',                 es: 'La agencia desaparecida dejó un vacío regulatorio.',            hint: 'vocabulario institucional' },
    { en: 'Critics sought to denigrate her work without engaging its merit.', es: 'Los críticos buscaron denigrar su trabajo sin abordar su mérito.', hint: 'vocabulario crítico' },
    { en: 'The whistleblower denounced the corruption publicly.',         es: 'El informante denunció públicamente la corrupción.',            hint: 'vocabulario político' },
    { en: 'Decades of overuse depleted the region\'s natural resources.', es: 'Décadas de sobreexplotación agotaron los recursos naturales de la región.', hint: 'vocabulario ambiental' },
    { en: 'His rivals sought to deride his groundbreaking findings.',     es: 'Sus rivales intentaron ridiculizar sus hallazgos innovadores.', hint: 'vocabulario académico' },
    { en: 'Severe penalties deter potential violators.',                  es: 'Las sanciones severas disuaden a los posibles infractores.',    hint: 'vocabulario jurídico' },
    { en: 'The report was devoid of any substantive evidence.',           es: 'El informe estaba desprovisto de cualquier evidencia sustancial.',hint:'vocabulario académico' },
    { en: 'The apparent dichotomy between growth and sustainability is misleading.', es: 'La aparente dicotomía entre crecimiento y sostenibilidad es engañosa.', hint: 'vocabulario filosófico' },
    { en: 'Prolonged exposure to stress can diminish cognitive function.',es: 'La exposición prolongada al estrés puede disminuir la función cognitiva.', hint: 'vocabulario científico' },
    { en: 'We must discern between correlation and causation.',           es: 'Debemos discernir entre correlación y causalidad.',             hint: 'vocabulario científico' },
    { en: 'She treated his suggestion with undisguised disdain.',         es: 'Ella trató su sugerencia con desdén sin disimulo.',             hint: 'vocabulario emocional' },
    { en: 'The disparate findings challenged every existing theory.',     es: 'Los hallazgos dispares desafiaron todas las teorías existentes.',hint:'vocabulario investigativo' },
    { en: 'His dogmatic stance prevented any meaningful dialogue.',       es: 'Su postura dogmática impidió cualquier diálogo significativo.', hint: 'vocabulario filosófico' },
    { en: 'The duplicity of the negotiator undermined the peace process.',es: 'La duplicidad del negociador socavó el proceso de paz.',        hint: 'vocabulario político' },
    { en: 'Her ebullient personality energized the entire organization.', es: 'Su personalidad efusiva energizó a toda la organización.',      hint: 'vocabulario expresivo' },
    { en: 'An eclectic approach draws from multiple disciplines.',        es: 'Un enfoque ecléctico toma de múltiples disciplinas.',           hint: 'vocabulario académico' },
    { en: 'Her role was to elucidate the implications of the findings.',  es: 'Su papel era aclarar las implicaciones de los hallazgos.',      hint: 'vocabulario investigativo' },
    { en: 'Many seek to emulate her leadership style.',                   es: 'Muchos buscan emular su estilo de liderazgo.',                  hint: 'vocabulario corporativo' },
    { en: 'His enigmatic silence spoke louder than any denial.',          es: 'Su silencio enigmático habló más fuerte que cualquier negación.',hint:'vocabulario expresivo' },
    { en: 'Ephemeral trends should not dictate long-term strategy.',      es: 'Las tendencias efímeras no deben dictar la estrategia a largo plazo.', hint: 'vocabulario estratégico' },
    { en: 'Her erratic behavior raised concerns about her reliability.',  es: 'Su comportamiento errático generó dudas sobre su fiabilidad.',  hint: 'vocabulario psicológico' },
    { en: 'The esoteric nature of the theory limited its audience.',      es: 'La naturaleza esotérica de la teoría limitó su audiencia.',     hint: 'vocabulario académico' },
    { en: 'Miscommunication can exacerbate an already tense situation.',  es: 'La mala comunicación puede exacerbar una situación ya tensa.',  hint: 'vocabulario relacional' },
    { en: 'New evidence exonerated the wrongfully accused.',              es: 'Nueva evidencia exoneró al injustamente acusado.',              hint: 'vocabulario jurídico' },
    { en: 'Streamlining the process will expedite delivery.',             es: 'Optimizar el proceso agilizará la entrega.',                    hint: 'vocabulario corporativo' },
    { en: 'The exquisite craftsmanship elevated the object to art.',      es: 'La artesanía exquisita elevó el objeto al nivel de arte.',      hint: 'vocabulario estético' },
    { en: 'The fallacious premise invalidated the entire conclusion.',    es: 'La premisa falaz invalidó toda la conclusión.',                  hint: 'vocabulario lógico' },
    { en: 'Few could fathom the depth of her commitment.',                es: 'Pocos podían comprender la profundidad de su compromiso.',      hint: 'vocabulario expresivo' },
    { en: 'His fervent advocacy transformed public opinion.',             es: 'Su ferviente defensa transformó la opinión pública.',           hint: 'vocabulario político' },
    { en: 'A flagrant breach of protocol cannot be overlooked.',          es: 'Una violación flagrante del protocolo no puede pasarse por alto.',hint:'vocabulario jurídico' },
    { en: 'The fleeting nature of success requires constant reinvention.',es: 'La naturaleza fugaz del éxito requiere reinvención constante.', hint: 'vocabulario filosófico' },
    { en: 'Her flippant remark undermined a grave discussion.',           es: 'Su comentario frívolo socavó una discusión grave.',             hint: 'vocabulario retórico' },
    { en: 'A sense of foreboding permeated the organization.',            es: 'Una sensación de presagio impregnó a la organización.',         hint: 'vocabulario literario' },
    { en: 'The discovery proved fortuitous for the entire team.',         es: 'El descubrimiento resultó fortuito para todo el equipo.',       hint: 'vocabulario experto' },
    { en: 'His garrulous nature made him unsuitable for confidential roles.', es: 'Su naturaleza parlanchina lo hacía inadecuado para roles confidenciales.', hint: 'vocabulario relacional' },
    { en: 'Gratuitous violence in media desensitizes audiences.',         es: 'La violencia gratuita en los medios desensibiliza al público.', hint: 'vocabulario sociológico' },
    { en: 'She used guile to extract information without raising suspicion.', es: 'Ella usó astucia para extraer información sin despertar sospechas.', hint: 'vocabulario literario' },
    { en: 'The hapless candidate struggled through every debate.',        es: 'El desafortunado candidato batalló en cada debate.',            hint: 'vocabulario expresivo' },
    { en: 'His harangue failed to inspire the demoralized troops.',       es: 'Su arenga no logró inspirar a las tropas desmoralizadas.',      hint: 'vocabulario militar/retórico' },
    { en: 'The nation\'s cultural hegemony was gradually challenged.',    es: 'La hegemonía cultural de la nación fue gradualmente desafiada.',hint: 'vocabulario político' },
    { en: 'Prosecuting heresy was once considered a civic duty.',         es: 'Perseguir la herejía fue alguna vez considerado un deber cívico.',hint:'vocabulario histórico' },
    { en: 'His hypocritical stance eroded trust over time.',              es: 'Su postura hipócrita fue erosionando la confianza con el tiempo.',hint:'vocabulario ético' },
    { en: 'Each culture has its own idiosyncrasy.',                       es: 'Cada cultura tiene su propia idiosincrasia.',                   hint: 'vocabulario antropológico' },
    { en: 'Certain moral principles are immutable across cultures.',      es: 'Ciertos principios morales son inmutables entre culturas.',     hint: 'vocabulario filosófico' },
    { en: 'Her impeccable record made her the ideal candidate.',          es: 'Su historial impecable la hacía la candidata ideal.',           hint: 'vocabulario formal' },
    { en: 'His impetuous decision led to unforeseen consequences.',       es: 'Su decisión impetuosa llevó a consecuencias imprevistas.',      hint: 'vocabulario psicológico' },
    { en: 'The impudent official showed no remorse whatsoever.',          es: 'El funcionario impudente no mostró ningún remordimiento.',      hint: 'vocabulario formal' },
    { en: 'The inadvertent error cascaded into a systemic failure.',      es: 'El error inadvertido se convirtió en un fallo sistémico.',      hint: 'vocabulario técnico' },
    { en: 'He operated incognito to gather intelligence undetected.',     es: 'Él operó de incógnito para recopilar inteligencia sin ser detectado.', hint: 'vocabulario espionaje' },
    { en: 'Her indefatigable spirit sustained the project through hardship.', es: 'Su espíritu infatigable sostuvo el proyecto en tiempos difíciles.', hint: 'vocabulario expresivo' },
    { en: 'He was indignant at the suggestion of negligence.',            es: 'Él estaba indignado ante la sugerencia de negligencia.',        hint: 'vocabulario emocional formal' },
    { en: 'No system is infallible; redundancy is essential.',            es: 'Ningún sistema es infalible; la redundancia es esencial.',      hint: 'vocabulario técnico filosófico' },
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
const MAX_LEVEL           = 5;
const CORRECT_TO_LEVEL_UP = 10;

// =============================================
//  SEGURIDAD
// =============================================
const SECURITY = {
  MAX_WORD_LEN:      120,   // frases son más largas que palabras
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
        if (en && es) safe.customCards.push({ en, es, hint: sanitizeWord(card.hint || '') });
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
  try   { return validateData(JSON.parse(localStorage.getItem(STORAGE_KEY))); }
  catch { return validateData(null); }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// =============================================
//  ESTADO GLOBAL
// =============================================
let deck           = [];
let currentIndex   = 0;
let answered       = false;
let sessionCorrect = 0;
let sessionWrong   = 0;
let autoNextTimer  = null;

// =============================================
//  CONSTRUCCIÓN DEL MAZO
//  Dificultad progresiva: primero nivel 1,
//  luego 2, etc. Dentro de cada bloque mezclado.
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

  let ordered = [];
  for (let l = 1; l <= level; l++) {
    ordered = ordered.concat(shuffle(WORDS_BY_LEVEL[l]));
  }
  if (data.customCards.length > 0) {
    ordered = ordered.concat(shuffle(data.customCards));
  }
  return ordered;
}

// =============================================
//  NAVEGACIÓN
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
    counter.textContent = data.currentLevel < MAX_LEVEL
      ? `${data.levelCorrect}/${CORRECT_TO_LEVEL_UP} para subir de nivel`
      : '¡Nivel máximo alcanzado! 🏆';
  }
}

// =============================================
//  HELPER: ¿es tarjeta fill-in-the-blank?
//  Nivel 1 y 2 tienen campo "blank"; 3-5 no.
// =============================================
function isBlankCard(card) {
  return typeof card.blank === 'string' && card.blank.length > 0;
}

// Construye la frase con ___ en lugar de las palabras de blank
function buildBlankSentence(card) {
  // blank puede ser "word1 / word2"; sustituimos cada parte en la frase
  const parts = card.blank.split('/').map(p => p.trim());
  let sentence = card.en;
  parts.forEach(word => {
    // Reemplazar la primera aparición exacta (case-insensitive) con ___
    const re = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    sentence = sentence.replace(re, '___');
  });
  return sentence;
}

// =============================================
//  MOSTRAR TARJETA
// =============================================
function showCard(index) {
  if (autoNextTimer !== null) { clearTimeout(autoNextTimer); autoNextTimer = null; }

  const card      = deck[index];
  const flashcard = document.getElementById('flashcard');
  const front     = flashcard.querySelector('.card-front');
  const input     = document.getElementById('answer-input');
  const countdown = document.getElementById('auto-next-countdown');
  const btnNext   = document.getElementById('btn-next');
  const labelEl   = front.querySelector('.card-label');

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
  void flashcard.offsetWidth;
  flashcard.classList.add('new-card');

  const hintEl = document.getElementById('card-hint');

  if (isBlankCard(card)) {
    // MODO FILL-IN-THE-BLANK (niveles 1-2)
    const sentence = buildBlankSentence(card);
    document.getElementById('card-word').textContent = sentence;
    // En la parte trasera mostramos la frase completa + la respuesta
    document.getElementById('card-answer-text').textContent = card.answer;
    if (labelEl) labelEl.textContent = '¿Cómo se dice ___ en español?';
    input.placeholder = 'Escribe la traducción en español...';
    if (hintEl) hintEl.textContent = card.hint ? `[ ${card.hint} ]` : '';
  } else {
    // MODO FRASE COMPLETA (niveles 3-5)
    document.getElementById('card-word').textContent        = card.en;
    document.getElementById('card-answer-text').textContent = card.es;
    if (labelEl) labelEl.textContent = 'Traduce al español';
    input.placeholder = 'Escribe la traducción en español...';
    if (hintEl) hintEl.textContent = card.hint ? `[ ${card.hint} ]` : '';
  }

  document.getElementById('card-counter').textContent =
    `Tarjeta ${index + 1} de ${deck.length}`;

  setTimeout(() => input.focus(), 100);
  answered = false;
  updateLevelBadge();
}

// =============================================
//  VERIFICAR RESPUESTA
//  Para frases, se acepta si el usuario traduce
//  correctamente la frase o una variante válida.
//  Usamos comparación normalizada con tolerancia
//  a signos de puntuación y acentos.
// =============================================
function normalizeFrase(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')  // quitar tildes
    .replace(/[¿¡.,;:!?"""''()\-]/g, '') // quitar puntuación
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function checkAnswer() {
  if (answered) return;

  const input    = document.getElementById('answer-input');
  const userAns  = input.value.trim();
  const feedback = document.getElementById('feedback');

  if (!userAns) {
    feedback.textContent = 'Escribe tu respuesta primero.';
    feedback.className   = 'feedback';
    return;
  }

  const flashcard  = document.getElementById('flashcard');
  const front      = flashcard.querySelector('.card-front');
  const card       = deck[currentIndex];
  const blank      = isBlankCard(card);

  // ── Obtener la respuesta correcta según el modo ──
  // En blank: "trad1 / trad2" — el usuario puede escribir cualquiera de las partes
  // En frase completa: "traducción completa" con variantes separadas por /
  let correctText;
  let isCorrect;

  if (blank) {
    // Nivel 1: answer = "manzana" → usuario escribe "manzana"
    // Nivel 2: answer = "hotel / aeropuerto" → el usuario puede escribir
    //   - "hotel / aeropuerto" (ambas en orden)
    //   - "aeropuerto / hotel" (ambas en orden inverso)
    //   - solo una de las dos (aceptamos si escribe al menos una correctamente)
    correctText = card.answer;
    const parts = card.answer.split('/').map(p => normalizeFrase(p));
    const userParts = userAns.split('/').map(p => normalizeFrase(p));

    if (parts.length === 1) {
      // Nivel 1: comparación directa
      isCorrect = parts[0] === normalizeFrase(userAns);
    } else {
      // Nivel 2: el usuario debe escribir ambas palabras (en cualquier orden)
      // Aceptamos si escribe "trad1 / trad2" o "trad2 / trad1"
      // También aceptamos si escribe ambas separadas por coma, espacio, etc.
      const userNorm = normalizeFrase(userAns.replace(/[,;\/]/g, ' '));
      const allMatch = parts.every(p => userNorm.includes(p));
      const directMatch = (
        (userParts[0] === parts[0] && userParts[1] === parts[1]) ||
        (userParts[0] === parts[1] && userParts[1] === parts[0])
      );
      isCorrect = allMatch || directMatch;
    }
  } else {
    // Niveles 3-5: comparación de frase completa
    correctText = card.es;
    const accepted = card.es.split('/').map(a => normalizeFrase(a));
    isCorrect = accepted.includes(normalizeFrase(userAns));
  }

  const data = loadData();
  data.totalCorrect += isCorrect ? 1 : 0;
  data.totalWrong   += isCorrect ? 0 : 1;

  if (!isCorrect) {
    // Guardar la frase en inglés como "palabra difícil"
    const key = card.en.slice(0, 60); // recortar para no saturar
    data.hardWords[key] = (data.hardWords[key] || 0) + 1;
  } else if (data.currentLevel < MAX_LEVEL) {
    data.levelCorrect = (data.levelCorrect || 0) + 1;
    if (data.levelCorrect >= CORRECT_TO_LEVEL_UP) {
      data.currentLevel++;
      data.levelCorrect = 0;
      saveData(data);
      showLevelUpCelebration(data.currentLevel);
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
    const respuesta = isBlankCard(card) ? card.answer : card.es;
    feedback.textContent = `Incorrecto. Respuesta: "${respuesta}"`;
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
    if (remaining > 0) tick(); else clearInterval(interval);
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
  if (autoNextTimer !== null) { clearTimeout(autoNextTimer); autoNextTimer = null; }
  const countdown = document.getElementById('auto-next-countdown');
  if (countdown) countdown.classList.add('hidden');

  currentIndex++;
  if (currentIndex >= deck.length) {
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
//  CELEBRACIÓN DE NIVEL
// =============================================
function showLevelUpCelebration(newLevel) {
  const levelName = LEVEL_NAMES[newLevel] || 'Nuevo nivel';
  const container = document.getElementById('celebration-container');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = 'level-up-msg';
  msg.innerHTML = `🏆 ¡Nivel ${newLevel}!<br><span>${levelName}</span>`;
  container.appendChild(msg);

  const emojis = ['🎉','⭐','🌟','✨','🎊','🥳','💫','🔥','👏','🚀','🎯','💪'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'emoji-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left              = Math.random() * 100 + 'vw';
    el.style.animationDuration = (1.2 + Math.random() * 2) + 's';
    el.style.animationDelay    = (Math.random() * 0.8) + 's';
    el.style.fontSize          = (1.2 + Math.random() * 1.6) + 'rem';
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 3500);
}

// =============================================
//  PROGRESO
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
  hardList.innerHTML = hardWords.map(([phrase, count]) => `
    <div class="hard-word-item">
      <span class="hard-word-text">${escapeHTML(phrase)}</span>
      <span class="hard-word-count">${escapeHTML(String(count))} error${count > 1 ? 'es' : ''}</span>
    </div>
  `).join('');
}

function resetProgress() {
  if (!confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) return;

  const data = loadData();
  data.totalCorrect = 0; data.totalWrong   = 0;
  data.hardWords    = {}; data.currentLevel = 1; data.levelCorrect = 0;
  saveData(data);

  sessionCorrect = 0; sessionWrong = 0;
  document.getElementById('session-correct').textContent = '0';
  document.getElementById('session-wrong').textContent   = '0';

  deck = buildDeck(); currentIndex = 0; answered = false;
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
  if (/[<>"'`]|https?:\/\//i.test(esWord)) { showAddModal(esWord, '', true); return; }

  const btn = document.getElementById('btn-search');
  btn.disabled = true; btn.textContent = 'Buscando...';

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), SECURITY.API_TIMEOUT_MS);
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(esWord)}&langpair=es|en`,
      { method: 'GET', signal: controller.signal,
        headers: { 'Accept': 'application/json' },
        credentials: 'omit', mode: 'cors' }
    );
    clearTimeout(tid);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) throw new Error('No JSON');
    const json 