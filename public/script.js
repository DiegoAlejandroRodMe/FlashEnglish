// =============================================
//  FLASHENGLISH — MAZO DE FRASES POR NIVEL
//
//  Nivel 1 — Fill-in-the-blank: una palabra clave (contexto fuerza respuesta única)
//  Nivel 2 — Fill-in-the-blank: dos palabras clave (ídem)
//  Nivel 3 — Traducción de frase completa (sentido de tiempo)
//  Nivel 4 — Traducción de frase completa (estructuras complejas)
//  Nivel 5 — Lectura + fill-in-the-blank con sinónimos aceptados
//
//  Niveles 1-2:  { en, blank, answer, hint, es }
//    en     → frase con ___ donde va la palabra
//    blank  → la(s) palabra(s) que faltan (en inglés)
//    answer → traducción al español de blank
//    es     → traducción completa de la frase (para el reverso)
//    hint   → tipo de ejercicio
//
//  Niveles 3-4:  { en, es, hint }
//  Nivel 5:      { en, blank, answer, hint, es }
//    en     → "Context: ... — Fill in: frase con ___"
//    blank  → palabra(s) del texto (sinónimos separados por /)
//    answer → traducción(es) al español
// =============================================

const WORDS_BY_LEVEL = {

  // ─────────────────────────────────────────
  //  NIVEL 1 — contexto fuerza respuesta única (100 tarjetas)
  // ─────────────────────────────────────────
  1: [
    { en: 'The opposite of "hot" is ___.', blank: 'cold', answer: 'frio', hint: 'opuesto', es: 'El opuesto de caliente es frio.' },
    { en: 'The opposite of "big" is ___.', blank: 'small', answer: 'pequeno', hint: 'opuesto', es: 'El opuesto de grande es pequeno.' },
    { en: 'The opposite of "fast" is ___.', blank: 'slow', answer: 'lento', hint: 'opuesto', es: 'El opuesto de rapido es lento.' },
    { en: 'The opposite of "dark" is ___.', blank: 'bright / light', answer: 'brillante / claro', hint: 'opuesto', es: 'El opuesto de oscuro es claro.' },
    { en: 'The opposite of "noisy" is ___.', blank: 'quiet', answer: 'silencioso', hint: 'opuesto', es: 'El opuesto de ruidoso es silencioso.' },
    { en: 'The opposite of "early" is ___.', blank: 'late', answer: 'tarde', hint: 'opuesto', es: 'El opuesto de temprano es tarde.' },
    { en: 'The opposite of "open" is ___.', blank: 'closed', answer: 'cerrado', hint: 'opuesto', es: 'El opuesto de abierto es cerrado.' },
    { en: 'The opposite of "happy" is ___.', blank: 'sad', answer: 'triste', hint: 'opuesto', es: 'El opuesto de feliz es triste.' },
    { en: 'The opposite of "old" is ___.', blank: 'young / new', answer: 'joven / nuevo', hint: 'opuesto', es: 'El opuesto de viejo es joven.' },
    { en: 'The opposite of "cheap" is ___.', blank: 'expensive', answer: 'caro', hint: 'opuesto', es: 'El opuesto de barato es caro.' },
    { en: 'The opposite of "empty" is ___.', blank: 'full', answer: 'lleno', hint: 'opuesto', es: 'El opuesto de vacio es lleno.' },
    { en: 'The opposite of "clean" is ___.', blank: 'dirty', answer: 'sucio', hint: 'opuesto', es: 'El opuesto de limpio es sucio.' },
    { en: 'The opposite of "safe" is ___.', blank: 'dangerous', answer: 'peligroso', hint: 'opuesto', es: 'El opuesto de seguro es peligroso.' },
    { en: 'The opposite of "strong" is ___.', blank: 'weak', answer: 'debil', hint: 'opuesto', es: 'El opuesto de fuerte es debil.' },
    { en: 'The opposite of "smart" is ___.', blank: 'foolish / stupid', answer: 'tonto / estupido', hint: 'opuesto', es: 'El opuesto de inteligente es tonto.' },
    { en: 'We use an umbrella when it ___.', blank: 'rains', answer: 'llueve', hint: 'logica', es: 'Usamos un paraguas cuando llueve.' },
    { en: 'We wear a coat when it is very ___.', blank: 'cold', answer: 'frio', hint: 'logica', es: 'Usamos abrigo cuando hace mucho frio.' },
    { en: 'We wear sunglasses when the sun is ___.', blank: 'bright', answer: 'brillante', hint: 'logica', es: 'Usamos gafas de sol cuando el sol esta brillante.' },
    { en: 'We go to the doctor when we are ___.', blank: 'sick / ill', answer: 'enfermos', hint: 'logica', es: 'Vamos al medico cuando estamos enfermos.' },
    { en: 'We go to the pharmacy to buy ___.', blank: 'medicine', answer: 'medicina', hint: 'logica', es: 'Vamos a la farmacia a comprar medicina.' },
    { en: 'We go to the bakery to buy ___.', blank: 'bread', answer: 'pan', hint: 'logica', es: 'Vamos a la panaderia a comprar pan.' },
    { en: 'We go to the library to borrow ___.', blank: 'books', answer: 'libros', hint: 'logica', es: 'Vamos a la biblioteca a pedir libros prestados.' },
    { en: 'We go to the airport to catch a ___.', blank: 'flight / plane', answer: 'vuelo / avion', hint: 'logica', es: 'Vamos al aeropuerto para tomar un vuelo.' },
    { en: 'We go to the bank to save or withdraw ___.', blank: 'money', answer: 'dinero', hint: 'logica', es: 'Vamos al banco a ahorrar o retirar dinero.' },
    { en: 'A knife is a sharp tool used in the kitchen to ___ ingredients.', blank: 'cut / chop', answer: 'cortar / picar', hint: 'logica', es: 'Un cuchillo es una herramienta afilada usada en la cocina para cortar ingredientes.' },
    { en: 'A pen is a writing tool used to put ___ on paper.', blank: 'ink', answer: 'tinta', hint: 'logica', es: 'Un boligrafo es una herramienta de escritura que pone tinta en el papel.' },
    { en: 'We use a key to open a ___.', blank: 'door / lock', answer: 'puerta / cerradura', hint: 'logica', es: 'Usamos una llave para abrir una puerta.' },
    { en: 'We use a clock to tell the ___.', blank: 'time', answer: 'hora', hint: 'logica', es: 'Usamos un reloj para decir la hora.' },
    { en: 'We use a map to find our ___.', blank: 'way / location', answer: 'camino / ubicacion', hint: 'logica', es: 'Usamos un mapa para encontrar nuestro camino.' },
    { en: 'A person who teaches students is called a ___.', blank: 'teacher', answer: 'maestro / profesor', hint: 'definicion', es: 'Una persona que ensena a estudiantes se llama maestro.' },
    { en: 'A person who treats sick people is called a ___.', blank: 'doctor', answer: 'medico / doctor', hint: 'definicion', es: 'Una persona que trata a enfermos se llama medico.' },
    { en: 'A person who cooks food in a restaurant is called a ___.', blank: 'chef / cook', answer: 'chef / cocinero', hint: 'definicion', es: 'Una persona que cocina en un restaurante se llama chef.' },
    { en: 'A person who flies an airplane is called a ___.', blank: 'pilot', answer: 'piloto', hint: 'definicion', es: 'Una persona que pilota aviones se llama piloto.' },
    { en: 'A person who puts out fires is called a ___.', blank: 'firefighter', answer: 'bombero', hint: 'definicion', es: 'Una persona que apaga incendios se llama bombero.' },
    { en: 'A place where you borrow books for free is called a ___.', blank: 'library', answer: 'biblioteca', hint: 'definicion', es: 'Un lugar donde prestas libros gratis se llama biblioteca.' },
    { en: 'A place where sick people are treated is called a ___.', blank: 'hospital', answer: 'hospital', hint: 'definicion', es: 'Un lugar donde se trata a enfermos se llama hospital.' },
    { en: 'A place where you keep your money safely is called a ___.', blank: 'bank', answer: 'banco', hint: 'definicion', es: 'Un lugar donde guardas tu dinero con seguridad se llama banco.' },
    { en: 'The day after Monday is ___.', blank: 'Tuesday', answer: 'martes', hint: 'secuencia', es: 'El dia despues del lunes es martes.' },
    { en: 'The day before Friday is ___.', blank: 'Thursday', answer: 'jueves', hint: 'secuencia', es: 'El dia antes del viernes es jueves.' },
    { en: 'The month after January is ___.', blank: 'February', answer: 'febrero', hint: 'secuencia', es: 'El mes despues de enero es febrero.' },
    { en: 'The season after summer is ___.', blank: 'autumn / fall', answer: 'otono', hint: 'secuencia', es: 'La estacion despues del verano es el otono.' },
    { en: 'The season before summer is ___.', blank: 'spring', answer: 'primavera', hint: 'secuencia', es: 'La estacion antes del verano es la primavera.' },
    { en: 'Water freezes and becomes ___.', blank: 'ice', answer: 'hielo', hint: 'proceso', es: 'El agua se congela y se convierte en hielo.' },
    { en: 'Ice melts and becomes ___.', blank: 'water', answer: 'agua', hint: 'proceso', es: 'El hielo se derrite y se convierte en agua.' },
    { en: 'Water boils and becomes ___.', blank: 'steam / vapor', answer: 'vapor', hint: 'proceso', es: 'El agua hierve y se convierte en vapor.' },
    { en: 'A caterpillar transforms into a ___.', blank: 'butterfly', answer: 'mariposa', hint: 'proceso', es: 'Una oruga se transforma en mariposa.' },
    { en: 'A tadpole grows into a ___.', blank: 'frog', answer: 'rana', hint: 'proceso', es: 'Un renacuajo crece y se convierte en rana.' },
    { en: 'Plants need sunlight and ___ to grow.', blank: 'water', answer: 'agua', hint: 'logica', es: 'Las plantas necesitan luz solar y agua para crecer.' },
    { en: 'Humans need food, water and ___ to survive.', blank: 'air / oxygen', answer: 'aire / oxigeno', hint: 'logica', es: 'Los humanos necesitan comida, agua y aire para sobrevivir.' },
    { en: 'The tool with two sharp blades joined in the middle, used to cut paper or cloth, is called ___.', blank: 'scissors', answer: 'tijeras', hint: 'definicion', es: 'La herramienta con dos hojas afiladas unidas en el medio, usada para cortar papel o tela, se llama tijeras.' },
    { en: 'The long-handled tool with bristles that you push along the floor to clean it is called a ___.', blank: 'broom', answer: 'escoba', hint: 'definicion', es: 'La herramienta de mango largo con cerdas que empujas por el suelo para limpiar se llama escoba.' },
    { en: 'You turn on the ___ when the room is dark.', blank: 'light / lamp', answer: 'luz / lampara', hint: 'logica', es: 'Enciendes la luz cuando la habitacion esta oscura.' },
    { en: 'You look in a ___ to see your reflection.', blank: 'mirror', answer: 'espejo', hint: 'logica', es: 'Te miras en un espejo para ver tu reflejo.' },
    { en: 'You sit on a ___ at a dining table.', blank: 'chair', answer: 'silla', hint: 'logica', es: 'Te sientas en una silla en la mesa del comedor.' },
    { en: 'You sleep on a ___ at night.', blank: 'bed', answer: 'cama', hint: 'logica', es: 'Duermes en una cama por la noche.' },
    { en: 'You cook food on a ___ in the kitchen.', blank: 'stove', answer: 'estufa', hint: 'logica', es: 'Cocinas en una estufa en la cocina.' },
    { en: 'You store cold food inside a ___.', blank: 'fridge / refrigerator', answer: 'nevera / refrigerador', hint: 'logica', es: 'Guardas la comida fria dentro de una nevera.' },
    { en: 'You wash your hands with water and ___.', blank: 'soap', answer: 'jabon', hint: 'logica', es: 'Te lavas las manos con agua y jabon.' },
    { en: 'You brush your teeth with a ___ and toothpaste.', blank: 'toothbrush', answer: 'cepillo de dientes', hint: 'logica', es: 'Te cepillas los dientes con un cepillo y pasta dental.' },
    { en: 'You dry your body with a ___ after a shower.', blank: 'towel', answer: 'toalla', hint: 'logica', es: 'Te secas el cuerpo con una toalla despues de ducharte.' },
    { en: 'You wear a ___ on your head to protect from the sun.', blank: 'hat / cap', answer: 'sombrero / gorra', hint: 'logica', es: 'Usas un sombrero para protegerte del sol.' },
    { en: 'You wear ___ on your feet to walk outside.', blank: 'shoes', answer: 'zapatos', hint: 'logica', es: 'Usas zapatos en los pies para caminar afuera.' },
    { en: 'You wear a ___ around your neck in cold weather.', blank: 'scarf', answer: 'bufanda', hint: 'logica', es: 'Usas una bufanda alrededor del cuello en el frio.' },
    { en: 'You wear ___ on your hands in cold weather.', blank: 'gloves', answer: 'guantes', hint: 'logica', es: 'Usas guantes en las manos cuando hace frio.' },
    { en: 'The number after nineteen is ___.', blank: 'twenty', answer: 'veinte', hint: 'secuencia', es: 'El numero despues del diecinueve es veinte.' },
    { en: 'Half of one hundred is ___.', blank: 'fifty', answer: 'cincuenta', hint: 'matematicas', es: 'La mitad de cien es cincuenta.' },
    { en: 'The color you get when you mix red and white is ___.', blank: 'pink', answer: 'rosado', hint: 'logica', es: 'El color que obtienes al mezclar rojo y blanco es rosado.' },
    { en: 'The color you get when you mix red and blue is ___.', blank: 'purple', answer: 'morado', hint: 'logica', es: 'El color que obtienes al mezclar rojo y azul es morado.' },
    { en: 'The color you get when you mix blue and yellow is ___.', blank: 'green', answer: 'verde', hint: 'logica', es: 'El color que obtienes al mezclar azul y amarillo es verde.' },
    { en: 'The organ in your body that pumps blood is called the ___.', blank: 'heart', answer: 'corazon', hint: 'definicion', es: 'El organo que bombea sangre se llama corazon.' },
    { en: 'The organ you use to breathe is called the ___.', blank: 'lungs', answer: 'pulmones', hint: 'definicion', es: 'El organo que usas para respirar se llama pulmones.' },
    { en: 'The organ you use to think and make decisions is the ___.', blank: 'brain', answer: 'cerebro', hint: 'definicion', es: 'El organo que usas para pensar es el cerebro.' },
    { en: 'Two plus two equals ___.', blank: 'four', answer: 'cuatro', hint: 'matematicas', es: 'Dos mas dos es igual a cuatro.' },
    { en: 'Ten minus three equals ___.', blank: 'seven', answer: 'siete', hint: 'matematicas', es: 'Diez menos tres es igual a siete.' },
    { en: 'Three multiplied by four equals ___.', blank: 'twelve', answer: 'doce', hint: 'matematicas', es: 'Tres multiplicado por cuatro es igual a doce.' },
    { en: 'The capital city of France is ___.', blank: 'Paris', answer: 'Paris', hint: 'geografia', es: 'La capital de Francia es Paris.' },
    { en: 'The capital city of Japan is ___.', blank: 'Tokyo', answer: 'Tokio', hint: 'geografia', es: 'La capital de Japon es Tokio.' },
    { en: 'The capital city of the United Kingdom is ___.', blank: 'London', answer: 'Londres', hint: 'geografia', es: 'La capital del Reino Unido es Londres.' },
    { en: 'The capital city of Germany is ___.', blank: 'Berlin', answer: 'Berlin', hint: 'geografia', es: 'La capital de Alemania es Berlin.' },
    { en: 'The largest planet in our solar system is ___.', blank: 'Jupiter', answer: 'Jupiter', hint: 'ciencia', es: 'El planeta mas grande de nuestro sistema solar es Jupiter.' },
    { en: 'The planet closest to the Sun is ___.', blank: 'Mercury', answer: 'Mercurio', hint: 'ciencia', es: 'El planeta mas cercano al Sol es Mercurio.' },
    { en: 'The natural satellite that orbits the Earth is the ___.', blank: 'Moon', answer: 'Luna', hint: 'ciencia', es: 'El satelite natural que orbita la Tierra es la Luna.' },
    { en: 'The star at the center of our solar system is the ___.', blank: 'Sun', answer: 'Sol', hint: 'ciencia', es: 'La estrella en el centro de nuestro sistema solar es el Sol.' },
    { en: 'The language spoken in Brazil is ___.', blank: 'Portuguese', answer: 'portugues', hint: 'cultura', es: 'El idioma que se habla en Brasil es el portugues.' },
    { en: 'The language spoken in Germany is ___.', blank: 'German', answer: 'aleman', hint: 'cultura', es: 'El idioma que se habla en Alemania es el aleman.' },
    { en: 'A vehicle with two wheels powered by pedals is called a ___.', blank: 'bicycle / bike', answer: 'bicicleta', hint: 'definicion', es: 'Un vehiculo con dos ruedas movido por pedales se llama bicicleta.' },
    { en: 'A vehicle that travels underwater is called a ___.', blank: 'submarine', answer: 'submarino', hint: 'definicion', es: 'Un vehiculo que viaja bajo el agua se llama submarino.' },
    { en: 'The meal eaten first thing in the morning is called ___.', blank: 'breakfast', answer: 'desayuno', hint: 'definicion', es: 'La comida que se come por la manana se llama desayuno.' },
    { en: 'The meal eaten in the middle of the day is called ___.', blank: 'lunch', answer: 'almuerzo', hint: 'definicion', es: 'La comida que se come a mediodia se llama almuerzo.' },
    { en: 'The meal eaten in the evening is called ___.', blank: 'dinner / supper', answer: 'cena', hint: 'definicion', es: 'La comida que se come por la noche se llama cena.' },
    { en: 'The plural of "child" is ___.', blank: 'children', answer: 'ninos', hint: 'gramatica', es: 'El plural de nino es children.' },
    { en: 'The past tense of "go" is ___.', blank: 'went', answer: 'fue / fui', hint: 'gramatica', es: 'El pasado de ir es went.' },
    { en: 'The past tense of "eat" is ___.', blank: 'ate', answer: 'comio / comi', hint: 'gramatica', es: 'El pasado de comer es ate.' },
    { en: 'The past tense of "see" is ___.', blank: 'saw', answer: 'vio / vi', hint: 'gramatica', es: 'El pasado de ver es saw.' },
    { en: 'The past tense of "write" is ___.', blank: 'wrote', answer: 'escribio / escribi', hint: 'gramatica', es: 'El pasado de escribir es wrote.' },
    { en: 'The past tense of "run" is ___.', blank: 'ran', answer: 'corrio / corri', hint: 'gramatica', es: 'El pasado de correr es ran.' },
    { en: 'The past tense of "drink" is ___.', blank: 'drank', answer: 'bebio / bebi', hint: 'gramatica', es: 'El pasado de beber es drank.' },
    { en: 'The past tense of "begin" is ___.', blank: 'began', answer: 'empezo / empece', hint: 'gramatica', es: 'El pasado de comenzar es began.' },
    { en: 'The past tense of "speak" is ___.', blank: 'spoke', answer: 'hablo / hable', hint: 'gramatica', es: 'El pasado de hablar es spoke.' },
    { en: 'The past tense of "give" is ___.', blank: 'gave', answer: 'dio / di', hint: 'gramatica', es: 'El pasado de dar es gave.' },
    { en: 'The past tense of "know" is ___.', blank: 'knew', answer: 'sabia / supo', hint: 'gramatica', es: 'El pasado de saber es knew.' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 2 — dos palabras clave, contexto fuerza respuesta (100 tarjetas)
  // ─────────────────────────────────────────
  2: [
    { en: 'The ___ is a cold-blooded animal that lives in water and on land, known for its long sticky ___.', blank: 'frog / tongue', answer: 'rana / lengua', hint: 'biologia', es: 'La rana es un animal de sangre fria que vive en el agua y en tierra, conocida por su larga lengua pegajosa.' },
    { en: 'The ___ is the largest land animal on Earth and uses its long ___ to grab food and drink water.', blank: 'elephant / trunk', answer: 'elefante / trompa', hint: 'biologia', es: 'El elefante es el animal terrestre mas grande de la Tierra y usa su trompa para agarrar comida y beber agua.' },
    { en: 'The ___ is a marine mammal known for its intelligence, and it uses ___ to communicate with others.', blank: 'dolphin / sounds', answer: 'delfin / sonidos', hint: 'biologia', es: 'El delfin es un mamifero marino conocido por su inteligencia y usa sonidos para comunicarse.' },
    { en: 'A ___ is a large black-and-white mammal from China that feeds almost exclusively on ___.', blank: 'panda / bamboo', answer: 'panda / bambu', hint: 'biologia', es: 'El panda es un gran mamifero blanco y negro de China que se alimenta casi exclusivamente de bambu.' },
    { en: 'The ___ is an insect known for making honey and living in a ___ built from wax.', blank: 'bee / hive', answer: 'abeja / colmena', hint: 'biologia', es: 'La abeja es un insecto conocido por hacer miel y vivir en una colmena construida de cera.' },
    { en: 'The ___ is a nocturnal bird of prey known for its ability to rotate its ___ almost completely around.', blank: 'owl / head', answer: 'buho / cabeza', hint: 'biologia', es: 'El buho es un ave de rapina nocturna conocida por girar su cabeza casi completamente.' },
    { en: 'The ___ is the tallest animal on Earth, and uses its long ___ to reach leaves high in trees.', blank: 'giraffe / neck', answer: 'jirafa / cuello', hint: 'biologia', es: 'La jirafa es el animal mas alto de la Tierra y usa su largo cuello para alcanzar hojas en los arboles.' },
    { en: 'The ___ is an eight-legged creature that spins a ___ to catch its prey.', blank: 'spider / web', answer: 'arana / telarana', hint: 'biologia', es: 'La arana es una criatura de ocho patas que teje una telarana para atrapar a sus presas.' },
    { en: 'The ___ is a precious metal used in jewelry and considered more valuable than ___.', blank: 'gold / silver', answer: 'oro / plata', hint: 'minerales', es: 'El oro es un metal precioso usado en joyeria y considerado mas valioso que la plata.' },
    { en: 'The ___ is the hardest natural substance on Earth and is used to make engagement ___.', blank: 'diamond / rings', answer: 'diamante / anillos', hint: 'minerales', es: 'El diamante es la sustancia natural mas dura de la Tierra y se usa para hacer anillos de compromiso.' },
    { en: 'The ___ is a renewable energy source that converts sunlight into ___ using panels on rooftops.', blank: 'solar / electricity', answer: 'energia solar / electricidad', hint: 'tecnologia', es: 'La energia solar es una fuente renovable que convierte la luz solar en electricidad usando paneles.' },
    { en: 'A ___ is a device that stores electrical energy and powers devices when there is no direct ___ supply.', blank: 'battery / power', answer: 'bateria / energia', hint: 'tecnologia', es: 'Una bateria almacena energia electrica y alimenta dispositivos cuando no hay suministro directo.' },
    { en: 'The ___ is the part of a computer that processes all instructions and is often called the ___ of the machine.', blank: 'CPU / brain', answer: 'CPU / cerebro', hint: 'tecnologia', es: 'La CPU es la parte de la computadora que procesa instrucciones y suele llamarse el cerebro de la maquina.' },
    { en: 'The ___ is a global network that connects millions of computers and allows people to share ___ instantly.', blank: 'internet / information', answer: 'internet / informacion', hint: 'tecnologia', es: 'El internet es una red global que conecta millones de computadoras y permite compartir informacion al instante.' },
    { en: 'The ___ is a document that proves your identity and allows you to travel to foreign ___.', blank: 'passport / countries', answer: 'pasaporte / paises', hint: 'viajes', es: 'El pasaporte es un documento que prueba tu identidad y te permite viajar a paises extranjeros.' },
    { en: 'A ___ is a place where planes take off and land, and passengers check in their ___ before boarding.', blank: 'airport / luggage', answer: 'aeropuerto / equipaje', hint: 'viajes', es: 'Un aeropuerto es un lugar donde los aviones despegan y aterrizan y los pasajeros facturan su equipaje.' },
    { en: 'A ___ is a document that grants permission to work or live in a foreign ___ for a certain period.', blank: 'visa / country', answer: 'visa / pais', hint: 'viajes', es: 'Una visa es un documento que autoriza trabajar o vivir en un pais extranjero por un tiempo determinado.' },
    { en: 'A ___ is a building where guests pay to sleep in a private room with access to shared or private ___.', blank: 'hotel / bathroom', answer: 'hotel / bano', hint: 'viajes', es: 'Un hotel es un edificio donde los huespedes pagan por dormir en una habitacion con acceso a bano.' },
    { en: 'The ___ is a formal document between two parties that legally defines their ___ and obligations.', blank: 'contract / rights', answer: 'contrato / derechos', hint: 'negocios', es: 'El contrato es un documento formal entre dos partes que define legalmente sus derechos y obligaciones.' },
    { en: 'A ___ is a person who starts their own company and takes financial ___ to build a business.', blank: 'entrepreneur / risk', answer: 'emprendedor / riesgo', hint: 'negocios', es: 'Un emprendedor es una persona que funda su propia empresa y asume riesgos financieros.' },
    { en: 'A ___ is a regular payment made by an employer to an employee in exchange for their ___.', blank: 'salary / work', answer: 'salario / trabajo', hint: 'negocios', es: 'Un salario es un pago regular que hace un empleador a un empleado a cambio de su trabajo.' },
    { en: 'A ___ is a financial institution where people deposit ___ and apply for loans.', blank: 'bank / money', answer: 'banco / dinero', hint: 'finanzas', es: 'Un banco es una institucion financiera donde las personas depositan dinero y solicitan prestamos.' },
    { en: 'The ___ is a formal gathering of people to discuss and make decisions about a shared ___.', blank: 'meeting / agenda', answer: 'reunion / agenda', hint: 'trabajo', es: 'Una reunion es un encuentro formal de personas para discutir y tomar decisiones sobre una agenda comun.' },
    { en: 'The ___ is a person elected by citizens to represent them in the ___ of a country.', blank: 'politician / government', answer: 'politico / gobierno', hint: 'politica', es: 'El politico es una persona elegida por los ciudadanos para representarlos en el gobierno del pais.' },
    { en: 'A ___ is a set of rules agreed upon by a group and enforced to maintain order and ___.', blank: 'law / justice', answer: 'ley / justicia', hint: 'politica', es: 'Una ley es un conjunto de reglas acordadas por un grupo para mantener el orden y la justicia.' },
    { en: 'A ___ is a formal vote in which citizens choose their ___ or decide on a public issue.', blank: 'election / leaders', answer: 'eleccion / lideres', hint: 'politica', es: 'Una eleccion es una votacion formal en que los ciudadanos eligen a sus lideres o deciden sobre un asunto publico.' },
    { en: 'The ___ is a trained professional who defends or prosecutes individuals in a court of ___.', blank: 'lawyer / law', answer: 'abogado / ley', hint: 'derecho', es: 'El abogado es un profesional capacitado que defiende o acusa a individuos en un tribunal de justicia.' },
    { en: 'A ___ is the basic unit of life that contains a ___ which holds the genetic information of an organism.', blank: 'cell / nucleus', answer: 'celula / nucleo', hint: 'biologia', es: 'Una celula es la unidad basica de vida que contiene un nucleo con la informacion genetica del organismo.' },
    { en: 'The ___ is the layer of gases surrounding the Earth that protects life by blocking harmful ___ radiation.', blank: 'atmosphere / UV / solar', answer: 'atmosfera / radiacion UV', hint: 'ciencia', es: 'La atmosfera es la capa de gases que rodea la Tierra y protege la vida bloqueando la radiacion UV.' },
    { en: 'The ___ is a measurement of how hot or cold something is, usually expressed in degrees ___.', blank: 'temperature / Celsius', answer: 'temperatura / Celsius', hint: 'ciencia', es: 'La temperatura es una medida de que tan caliente o frio esta algo, expresada generalmente en grados Celsius.' },
    { en: 'A ___ is a device that measures atmospheric pressure and helps predict the ___.', blank: 'barometer / weather', answer: 'barometro / clima', hint: 'meteorologia', es: 'Un barometro es un dispositivo que mide la presion atmosferica y ayuda a predecir el clima.' },
    { en: 'The ___ is a large natural stream of water that flows into a ___ or an ocean.', blank: 'river / lake', answer: 'rio / lago', hint: 'geografia', es: 'El rio es una gran corriente natural de agua que fluye hacia un lago o un oceano.' },
    { en: 'A ___ is a large body of salt water that covers most of the Earth\'s ___.', blank: 'ocean / surface', answer: 'oceano / superficie', hint: 'geografia', es: 'Un oceano es una gran masa de agua salada que cubre la mayor parte de la superficie de la Tierra.' },
    { en: 'A ___ is a high landform that rises steeply from the ground and often has snow on its ___.', blank: 'mountain / peak', answer: 'montana / cima', hint: 'geografia', es: 'Una montana es una formacion elevada que sube abruptamente del suelo y a menudo tiene nieve en su cima.' },
    { en: 'The ___ is a hot, dry area with very little rainfall where only ___ plants can survive.', blank: 'desert / resistant', answer: 'desierto / resistentes', hint: 'geografia', es: 'El desierto es una zona caliente y seca con muy poca lluvia donde solo sobreviven plantas resistentes.' },
    { en: 'The ___ is a dense forest found near the equator characterized by heavy ___ and rich biodiversity.', blank: 'rainforest / rainfall', answer: 'selva tropical / lluvia', hint: 'geografia', es: 'La selva tropical es un bosque denso cerca del ecuador caracterizado por abundante lluvia y biodiversidad.' },
    { en: 'A ___ is a professional who designs buildings and creates detailed ___ before construction begins.', blank: 'architect / plans', answer: 'arquitecto / planos', hint: 'profesiones', es: 'Un arquitecto es un profesional que disena edificios y crea planos detallados antes de iniciar la construccion.' },
    { en: 'A ___ is a professional who diagnoses and treats diseases of the ___ and gums.', blank: 'dentist / teeth', answer: 'dentista / dientes', hint: 'salud', es: 'Un dentista es un profesional que diagnostica y trata enfermedades de los dientes y encias.' },
    { en: 'A ___ is a person trained to investigate ___ and maintain public order and safety.', blank: 'police officer / crimes', answer: 'policia / crimenes', hint: 'profesiones', es: 'Un policia es una persona capacitada para investigar crimenes y mantener el orden y la seguridad publica.' },
    { en: 'The ___ is a room in a hospital where ___ are performed by surgeons under sterile conditions.', blank: 'operating room / surgeries', answer: 'quirofano / cirugias', hint: 'medicina', es: 'El quirofano es una sala hospitalaria donde los cirujanos realizan cirugias en condiciones esteriles.' },
    { en: 'A ___ is a medicine given to patients to reduce pain or fight ___ caused by bacteria.', blank: 'antibiotic / infections', answer: 'antibiotico / infecciones', hint: 'medicina', es: 'Un antibiotico es un medicamento que reduce el dolor o combate infecciones causadas por bacterias.' },
    { en: 'The ___ is the annual celebration of the day a person was born, often marked with a ___ and candles.', blank: 'birthday / cake', answer: 'cumpleanos / pastel', hint: 'celebraciones', es: 'El cumpleanos es la celebracion anual del dia en que nacio una persona, marcada con un pastel y velas.' },
    { en: 'A ___ is a traditional ceremony in which two people formally commit to a lifelong romantic ___.', blank: 'wedding / partnership', answer: 'boda / pareja', hint: 'celebraciones', es: 'Una boda es una ceremonia tradicional en la que dos personas se comprometen formalmente a una pareja romantica.' },
    { en: 'A ___ is a structured plan created by a nutritionist that outlines what a person should eat to improve their ___.', blank: 'diet / health', answer: 'dieta / salud', hint: 'salud', es: 'Una dieta es un plan estructurado creado por un nutricionista que indica que debe comer una persona para mejorar su salud.' },
    { en: 'A ___ is a place where students attend lessons taught by ___ to gain knowledge and qualifications.', blank: 'school / teachers', answer: 'escuela / maestros', hint: 'educacion', es: 'Una escuela es un lugar donde los estudiantes asisten a clases impartidas por maestros para obtener conocimiento.' },
    { en: 'A ___ is a book used in schools that contains information and exercises for a specific ___.', blank: 'textbook / subject', answer: 'libro de texto / materia', hint: 'educacion', es: 'Un libro de texto es un libro escolar con informacion y ejercicios para una materia especifica.' },
    { en: 'A ___ is a formal test designed to assess a student knowledge of a particular ___.', blank: 'exam / subject', answer: 'examen / materia', hint: 'educacion', es: 'Un examen es una prueba formal para evaluar el conocimiento de un estudiante en una materia particular.' },
    { en: 'A ___ is an institution of higher education where students study for a ___ and pursue advanced knowledge.', blank: 'university / degree', answer: 'universidad / titulo', hint: 'educacion', es: 'Una universidad es una institucion de educacion superior donde los estudiantes estudian para obtener un titulo.' },
    { en: 'The ___ is a public system of vehicles such as ___, trains, and subways that carry passengers around a city.', blank: 'public transport / buses', answer: 'transporte publico / autobuses', hint: 'transporte', es: 'El transporte publico es un sistema de vehiculos como autobuses, trenes y metro que transportan pasajeros por la ciudad.' },
    { en: 'A ___ is a vehicle used to carry goods from one place to another over long distances on ___.', blank: 'truck / roads', answer: 'camion / carreteras', hint: 'transporte', es: 'Un camion es un vehiculo usado para transportar mercancias de un lugar a otro por carretera.' },
    { en: 'A ___ is an underground rail system that transports large numbers of ___ through tunnels beneath a city.', blank: 'subway / passengers', answer: 'metro / pasajeros', hint: 'transporte', es: 'El metro es un sistema de trenes subterraneos que transporta grandes cantidades de pasajeros por tuneles bajo la ciudad.' },
    { en: 'The ___ is the document issued by a court that authorizes the police to search a property or arrest a ___.', blank: 'warrant / suspect', answer: 'orden judicial / sospechoso', hint: 'derecho', es: 'La orden judicial es el documento emitido por un tribunal que autoriza a la policia a registrar una propiedad o arrestar a un sospechoso.' },
    { en: 'The ___ is the governing document of a country that defines the fundamental ___ and freedoms of its citizens.', blank: 'constitution / rights', answer: 'constitucion / derechos', hint: 'politica', es: 'La constitucion es el documento rector de un pais que define los derechos y libertades fundamentales de sus ciudadanos.' },
    { en: 'The ___ is an international organization founded after World War II to promote ___ and cooperation between nations.', blank: 'United Nations / peace', answer: 'Naciones Unidas / paz', hint: 'historia', es: 'Las Naciones Unidas es una organizacion internacional fundada tras la Segunda Guerra Mundial para promover la paz.' },
    { en: 'The ___ was a global conflict fought between 1939 and 1945, involving most of the world major ___.', blank: 'Second World War / powers', answer: 'Segunda Guerra Mundial / potencias', hint: 'historia', es: 'La Segunda Guerra Mundial fue un conflicto global entre 1939 y 1945 que involucro a las principales potencias del mundo.' },
    { en: 'The ___ is a famous ancient Egyptian structure built as a ___ for pharaohs.', blank: 'pyramid / tomb', answer: 'piramide / tumba', hint: 'historia', es: 'La piramide es una famosa estructura del antiguo Egipto construida como tumba para los faraones.' },
    { en: 'The ___ is a formal agreement between two or more countries to cooperate on matters of trade, ___, or security.', blank: 'treaty / diplomacy', answer: 'tratado / diplomacia', hint: 'politica', es: 'El tratado es un acuerdo formal entre paises para cooperar en asuntos de comercio, diplomacia o seguridad.' },
    { en: 'A ___ is a place where criminals are held as ___ for breaking the law.', blank: 'prison / punishment', answer: 'prision / castigo', hint: 'derecho', es: 'Una prision es un lugar donde los delincuentes son recluidos como castigo por infringir la ley.' },
    { en: 'The ___ is an international sporting event held every four years where athletes from all ___ compete.', blank: 'Olympics / countries', answer: 'Olimpiadas / paises', hint: 'deportes', es: 'Las Olimpiadas son un evento deportivo internacional celebrado cada cuatro anos donde atletas de todo el mundo compiten.' },
    { en: 'The ___ is a sport played by two teams of eleven players who try to score by kicking a ___ into the opposing goal.', blank: 'football / ball', answer: 'futbol / balon', hint: 'deportes', es: 'El futbol es un deporte jugado por dos equipos de once jugadores que intentan meter un balon en la porteria rival.' },
    { en: 'The ___ is a sport played on a court where players use a ___ to hit a small rubber ball over a net.', blank: 'tennis / racket', answer: 'tenis / raqueta', hint: 'deportes', es: 'El tenis es un deporte que se juega en una cancha donde los jugadores usan una raqueta para golpear la pelota.' },
    { en: 'A ___ is a musician who directs and coordinates an ___ during a performance.', blank: 'conductor / orchestra', answer: 'director / orquesta', hint: 'musica', es: 'Un director es un musico que dirige y coordina una orquesta durante una actuacion.' },
    { en: 'A ___ is a visual artist who creates images using paint on a ___ or other surface.', blank: 'painter / canvas', answer: 'pintor / lienzo', hint: 'arte', es: 'Un pintor es un artista visual que crea imagenes usando pintura sobre un lienzo u otra superficie.' },
    { en: 'A ___ is a piece of writing that uses rhythm and ___ to express ideas and emotions in a condensed form.', blank: 'poem / rhyme', answer: 'poema / rima', hint: 'literatura', es: 'Un poema es un escrito que usa ritmo y rima para expresar ideas y emociones de forma condensada.' },
    { en: 'The ___ is a branch of science that studies the composition, ___, and properties of substances.', blank: 'chemistry / structure', answer: 'quimica / estructura', hint: 'ciencia', es: 'La quimica es una rama de la ciencia que estudia la composicion, estructura y propiedades de las sustancias.' },
    { en: 'The ___ is a branch of science that studies the forces and ___ that govern the movement of objects.', blank: 'physics / laws', answer: 'fisica / leyes', hint: 'ciencia', es: 'La fisica es una rama de la ciencia que estudia las fuerzas y leyes que rigen el movimiento de los objetos.' },
    { en: 'The ___ is a field of science that uses mathematics to study ___ and the universe beyond Earth.', blank: 'astronomy / space', answer: 'astronomia / espacio', hint: 'ciencia', es: 'La astronomia es una ciencia que usa las matematicas para estudiar el espacio y el universo mas alla de la Tierra.' },
    { en: 'A ___ is a scientist who studies the Earth ___, including rocks, minerals, and geological processes.', blank: 'geologist / structure', answer: 'geologo / estructura', hint: 'ciencia', es: 'Un geologo es un cientifico que estudia la estructura de la Tierra, incluidas rocas, minerales y procesos geologicos.' },
    { en: 'A ___ is a wearable device that tells the time and is worn on the ___.', blank: 'watch / wrist', answer: 'reloj / muneca', hint: 'objetos', es: 'Un reloj de pulsera es un dispositivo que indica la hora y se lleva en la muneca.' },
    { en: 'A ___ is a flat portable ___ that allows users to browse the internet and use applications with a touchscreen.', blank: 'tablet / device', answer: 'tableta / dispositivo', hint: 'tecnologia', es: 'Una tableta es un dispositivo portatil plano que permite navegar por internet y usar aplicaciones.' },
    { en: 'A ___ is a tool with a flat metal head used to hammer ___ into wood or walls.', blank: 'hammer / nails', answer: 'martillo / clavos', hint: 'herramientas', es: 'El martillo es una herramienta con cabeza metalica usada para clavar clavos en madera o paredes.' },
    { en: 'A ___ is a device with a rotating ___ that generates electricity when driven by wind or water.', blank: 'turbine / blade', answer: 'turbina / aspa', hint: 'energia', es: 'Una turbina es un dispositivo con aspas giratorias que genera electricidad impulsada por viento o agua.' },
    { en: 'A ___ is a large structure built across a ___ or body of water to allow people or vehicles to cross.', blank: 'bridge / river', answer: 'puente / rio', hint: 'construccion', es: 'Un puente es una gran estructura construida sobre un rio para que personas o vehiculos puedan cruzar.' },
    { en: 'A ___ is a pathway built for ___ to travel between places, made of asphalt or concrete.', blank: 'road / vehicles', answer: 'carretera / vehiculos', hint: 'infraestructura', es: 'Una carretera es un camino construido para que los vehiculos viajen entre lugares.' },
    { en: 'A ___ is a round object used in sports and games that players ___ or kick to score points.', blank: 'ball / throw', answer: 'balon / lanzar', hint: 'deportes', es: 'Un balon es un objeto redondo que los jugadores lanzan o patean para marcar puntos.' },
    { en: 'A ___ is a person who writes books or stories, and whose work is published for ___ to read.', blank: 'writer / readers', answer: 'escritor / lectores', hint: 'literatura', es: 'Un escritor es una persona que escribe libros y cuya obra es publicada para que los lectores la lean.' },
    { en: 'A ___ is a person who is elected to lead and manage a ___ on behalf of its citizens.', blank: 'president / country', answer: 'presidente / pais', hint: 'politica', es: 'Un presidente es una persona elegida para liderar un pais en nombre de sus ciudadanos.' },
    { en: 'A ___ is a round shape where every point on its edge is the same ___ from the center.', blank: 'circle / distance', answer: 'circulo / distancia', hint: 'geometria', es: 'Un circulo es una figura en la que todos los puntos del borde estan a la misma distancia del centro.' },
    { en: 'The ___ is the closest ___ to Earth that orbits our planet and controls the ocean tides.', blank: 'Moon / satellite', answer: 'Luna / satelite', hint: 'ciencia', es: 'La Luna es el satelite mas cercano a la Tierra que orbita nuestro planeta y controla las mareas.' },
    { en: 'A ___ is a type of vehicle that can ___ on water and is used for transportation or recreation.', blank: 'boat / float', answer: 'bote / flotar', hint: 'transporte', es: 'Un bote es un vehiculo que puede flotar en el agua y se usa para transporte o recreacion.' },
    { en: 'A ___ is a tall structure built in a city where many people live or ___ on multiple floors.', blank: 'skyscraper / work', answer: 'rascacielos / trabajar', hint: 'arquitectura', es: 'Un rascacielos es una estructura alta construida en una ciudad donde muchas personas viven o trabajan.' },
    { en: 'A ___ is a tool with a sharp ___ used to cut materials such as wood, metal, or plastic.', blank: 'saw / blade', answer: 'sierra / hoja', hint: 'herramientas', es: 'Una sierra es una herramienta con una hoja afilada usada para cortar materiales como madera o metal.' },
    { en: 'A ___ is a short trip taken for pleasure to a natural setting, where people carry their food in a ___.', blank: 'picnic / basket', answer: 'picnic / canasta', hint: 'ocio', es: 'Un picnic es una excursion corta de placer, normalmente en la naturaleza, donde la gente lleva comida en una canasta.' },
    { en: 'The ___ is a period of rest and recovery after an illness or ___, prescribed by a doctor.', blank: 'recovery / surgery', answer: 'recuperacion / cirugia', hint: 'salud', es: 'La recuperacion es un periodo de descanso tras una enfermedad o cirugia, prescrito por un medico.' },
    { en: 'A ___ is a form of artistic expression where performers move their bodies rhythmically to ___.', blank: 'dance / music', answer: 'danza / musica', hint: 'arte', es: 'La danza es una forma de expresion artistica en la que los interpretes mueven su cuerpo ritmicamente al ritmo de la musica.' },
    { en: 'The ___ is a long work of fiction that tells the story of fictional characters and ___ in depth.', blank: 'novel / events', answer: 'novela / eventos', hint: 'literatura', es: 'Una novela es una obra de ficcion larga que narra la historia de personajes y eventos ficticios en profundidad.' },
    { en: 'A ___ is a long journey, typically by sea or in ___, undertaken for exploration or pleasure.', blank: 'voyage / space', answer: 'viaje / espacio', hint: 'exploracion', es: 'Un viaje es una larga travesia, generalmente por mar o en el espacio, realizada con fines de exploracion o placer.' },
    { en: 'The ___ was a period of rapid industrial growth that transformed economies from agrarian to ___.', blank: 'Industrial Revolution / industrial', answer: 'Revolucion Industrial / industrial', hint: 'historia', es: 'La Revolucion Industrial fue un periodo de rapido crecimiento industrial que transformo las economias agrarias.' },
    { en: 'The ___ is a famous ancient structure built in China to protect against northern ___.', blank: 'Great Wall / invasions', answer: 'Gran Muralla / invasiones', hint: 'historia', es: 'La Gran Muralla es una famosa estructura antigua construida en China para protegerse de invasiones del norte.' },
    { en: 'A ___ is a nurse trained to assist ___ during childbirth and monitor their health throughout pregnancy.', blank: 'midwife / mothers', answer: 'partera / madres', hint: 'salud', es: 'Una partera es una enfermera capacitada que asiste a las madres durante el parto.' },
    { en: 'A ___ is a competitive event in which participants run a distance of 26.2 ___ on a paved course.', blank: 'marathon / miles', answer: 'maraton / millas', hint: 'deportes', es: 'Un maraton es una competencia en la que los participantes corren 26.2 millas en una ruta pavimentada.' },
    { en: 'A ___ is a story written in dramatic form meant to be performed on stage by ___.', blank: 'play / actors', answer: 'obra de teatro / actores', hint: 'arte', es: 'Una obra de teatro es una historia escrita en forma dramatica para ser representada en un escenario por actores.' },
    { en: 'She bought shoes and a ___, then paid at the ___ before leaving the store.', blank: 'jacket / cashier', answer: 'chaqueta / cajero', hint: 'compras', es: 'Ella compro zapatos y una chaqueta, luego pago en la caja antes de salir de la tienda.' },
    { en: 'He repairs ___ and ___ for a living at his garage on the main street.', blank: 'cars / trucks', answer: 'carros / camiones', hint: 'trabajo', es: 'El repara carros y camiones para ganarse la vida en su garage en la calle principal.' },
    { en: 'The ___ is the largest ___ in our solar system, and it has a famous storm called the Great Red Spot.', blank: 'Jupiter / planet', answer: 'Jupiter / planeta', hint: 'astronomia', es: 'Jupiter es el planeta mas grande de nuestro sistema solar y tiene una famosa tormenta llamada la Gran Mancha Roja.' },
    { en: 'A ___ uses petals, leaves, and ___ to make its own food using sunlight.', blank: 'plant / roots', answer: 'planta / raices', hint: 'biologia', es: 'Una planta usa petalos, hojas y raices para producir su propio alimento usando la luz solar.' },
    { en: 'The ___ is the only natural ___ that orbits the Earth, controlling the tides.', blank: 'Moon / satellite', answer: 'Luna / satelite', hint: 'astronomia', es: 'La Luna es el unico satelite natural que orbita la Tierra, controlando las mareas.' },
    { en: 'A ___ is a person who runs for public office and tries to win ___ from citizens.', blank: 'candidate / votes', answer: 'candidato / votos', hint: 'politica', es: 'Un candidato es una persona que se postula para un cargo publico e intenta ganar votos de los ciudadanos.' },
    { en: 'In a ___, the judge listens to both sides and then makes a final ___ based on the law.', blank: 'trial / decision', answer: 'juicio / decision', hint: 'derecho', es: 'En un juicio, el juez escucha ambas partes y luego toma una decision final basada en la ley.' },
    { en: 'A ___ is a written agreement between two or more parties that is ___ by law.', blank: 'contract / enforceable', answer: 'contrato / ejecutable', hint: 'derecho', es: 'Un contrato es un acuerdo escrito entre dos o mas partes que es ejecutable por ley.' },
  ],


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
    // Nivel 5 — Lectura + fill-in-the-blank con sinónimos aceptados
    // Cada tarjeta: contexto = párrafo; en = frase con ___; blank = palabra(s) del texto; answer = traducción(es) al español
    { en: 'Context: "The Renaissance was a period of great cultural and intellectual revival in Europe between the 14th and 17th centuries. It saw the emergence of humanism, a philosophy that emphasized human potential and achievements." — Fill in: The Renaissance was a period of great cultural and intellectual ___.', blank: 'revival / rebirth / resurgence', answer: 'renacimiento / resurgimiento / revival', hint: 'texto histórico', es: 'El Renacimiento fue un período de gran renacimiento cultural e intelectual en Europa.' },
    { en: 'Context: "Charles Darwin proposed the theory of evolution by natural selection in 1859. He argued that species change over generations as traits that improve survival are passed on to offspring." — Fill in: Darwin argued that species ___ over generations.', blank: 'change / evolve / adapt', answer: 'cambian / evolucionan / se adaptan', hint: 'texto científico', es: 'Darwin argumentó que las especies cambian a lo largo de las generaciones.' },
    { en: 'Context: "The French Revolution began in 1789 and radically transformed France. The monarchy was abolished, and principles of liberty, equality, and fraternity became the foundation of the new republic." — Fill in: The French Revolution ___ the monarchy.', blank: 'abolished / overthrew / ended', answer: 'abolió / derrocó / terminó con', hint: 'texto histórico', es: 'La Revolución Francesa abolió la monarquía.' },
    { en: 'Context: "Climate change refers to long-term shifts in global temperatures and weather patterns. While some changes are natural, human activities — particularly the burning of fossil fuels — have significantly accelerated the process." — Fill in: Human activities have significantly ___ climate change.', blank: 'accelerated / worsened / intensified', answer: 'acelerado / empeorado / intensificado', hint: 'texto ambiental', es: 'Las actividades humanas han acelerado significativamente el cambio climático.' },
    { en: 'Context: "The Roman Empire was one of the most powerful civilizations in history. At its peak, it stretched from Britain to Mesopotamia and introduced systems of law, engineering, and governance that still influence modern societies." — Fill in: The Roman Empire ___ systems of law that still influence modern societies.', blank: 'introduced / established / created', answer: 'introdujo / estableció / creó', hint: 'texto histórico', es: 'El Imperio Romano introdujo sistemas de derecho que aún influyen en las sociedades modernas.' },
    { en: 'Context: "The Industrial Revolution began in Britain in the late 18th century and spread across Europe and America. It transformed economies from agrarian to industrial, leading to rapid urbanization and new social classes." — Fill in: The Industrial Revolution ___ economies from agrarian to industrial.', blank: 'transformed / changed / shifted', answer: 'transformó / cambió / convirtió', hint: 'texto histórico', es: 'La Revolución Industrial transformó las economías de agrarias a industriales.' },
    { en: 'Context: "Artificial intelligence refers to the simulation of human intelligence in machines. It enables computers to perform tasks such as recognizing speech, making decisions, and translating languages." — Fill in: Artificial intelligence enables computers to ___ human intelligence.', blank: 'simulate / imitate / replicate', answer: 'simular / imitar / replicar', hint: 'texto tecnológico', es: 'La inteligencia artificial permite a las computadoras simular la inteligencia humana.' },
    { en: 'Context: "Vaccines work by introducing a weakened or inactive form of a pathogen into the body. The immune system then learns to recognize and fight the real pathogen, providing protection against future infections." — Fill in: Vaccines ___ the immune system to recognize pathogens.', blank: 'train / teach / enable', answer: 'entrenan / enseñan / permiten', hint: 'texto médico', es: 'Las vacunas entrenan al sistema inmune para reconocer los patógenos.' },
    { en: 'Context: "Black holes are regions of space where gravity is so strong that nothing — not even light — can escape. They form when massive stars collapse at the end of their life cycle." — Fill in: Black holes form when massive stars ___ at the end of their life cycle.', blank: 'collapse / implode / die', answer: 'colapsan / implotan / mueren', hint: 'texto científico', es: 'Los agujeros negros se forman cuando estrellas masivas colapsan al final de su ciclo de vida.' },
    { en: 'Context: "The United Nations was founded in 1945 to maintain international peace and security. Its primary goal is to promote cooperation among nations and prevent armed conflicts through diplomacy." — Fill in: The United Nations aims to prevent armed conflicts through ___.', blank: 'diplomacy / negotiation / dialogue', answer: 'diplomacia / negociación / diálogo', hint: 'texto político', es: 'Las Naciones Unidas buscan prevenir conflictos armados a través de la diplomacia.' },
    { en: 'Context: "Globalization refers to the process by which businesses, cultures, and economies become increasingly interconnected across national borders. It has been driven by advances in communication, transportation, and trade agreements." — Fill in: Globalization has been ___ by advances in communication and transportation.', blank: 'driven / accelerated / fueled', answer: 'impulsada / acelerada / alimentada', hint: 'texto económico', es: 'La globalización ha sido impulsada por los avances en comunicación y transporte.' },
    { en: 'Context: "The human brain contains approximately 86 billion neurons. These cells communicate through electrical and chemical signals, enabling everything from basic survival functions to complex thought and emotion." — Fill in: Neurons communicate through electrical and chemical ___.', blank: 'signals / impulses / messages', answer: 'señales / impulsos / mensajes', hint: 'texto científico', es: 'Las neuronas se comunican a través de señales eléctricas y químicas.' },
    { en: 'Context: "The Enlightenment was an intellectual movement of the 17th and 18th centuries that emphasized reason, science, and individual rights. It challenged religious authority and laid the groundwork for modern democracy." — Fill in: The Enlightenment ___ religious authority and promoted reason.', blank: 'challenged / questioned / undermined', answer: 'cuestionó / desafió / socavó', hint: 'texto filosófico', es: 'La Ilustración cuestionó la autoridad religiosa y promovió la razón.' },
    { en: 'Context: "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. This process is fundamental to life on Earth as it produces the oxygen that most living organisms breathe." — Fill in: Photosynthesis ___ sunlight, water, and carbon dioxide into glucose and oxygen.', blank: 'converts / transforms / processes', answer: 'convierte / transforma / procesa', hint: 'texto científico', es: 'La fotosíntesis convierte la luz solar, el agua y el dióxido de carbono en glucosa y oxígeno.' },
    { en: 'Context: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union from 1947 to 1991. It was characterized by political rivalry, arms races, and proxy wars rather than direct military conflict." — Fill in: The Cold War was ___ by political rivalry and arms races rather than direct conflict.', blank: 'characterized / defined / marked', answer: 'caracterizado / definido / marcado', hint: 'texto histórico', es: 'La Guerra Fría fue caracterizada por la rivalidad política y las carreras armamentistas.' },
    { en: 'Context: "Democracy is a system of government in which citizens exercise power by voting. It is based on principles of equality, freedom of speech, and the rule of law." — Fill in: Democracy is based on equality, freedom of speech, and the rule of ___.', blank: 'law', answer: 'ley', hint: 'texto político', es: 'La democracia se basa en la igualdad, la libertad de expresión y el estado de derecho.' },
    { en: 'Context: "Migration has shaped human history. People have moved across borders throughout history in search of better opportunities, fleeing conflict, or escaping natural disasters. Today, millions of migrants contribute to economies worldwide." — Fill in: People migrate in search of better opportunities or fleeing ___.', blank: 'conflict / war / violence', answer: 'conflicto / guerra / violencia', hint: 'texto social', es: 'Las personas migran en busca de mejores oportunidades o huyendo del conflicto.' },
    { en: 'Context: "The ozone layer is a region of Earth\'s stratosphere that absorbs most of the Sun\'s harmful ultraviolet radiation. Its depletion, caused largely by human-made chemicals, has increased risks of skin cancer and environmental damage." — Fill in: The ozone layer ___ most of the Sun\'s harmful ultraviolet radiation.', blank: 'absorbs / filters / blocks', answer: 'absorbe / filtra / bloquea', hint: 'texto ambiental', es: 'La capa de ozono absorbe la mayor parte de la radiación ultravioleta dañina del Sol.' },
    { en: 'Context: "Antibiotics are medicines that kill or inhibit the growth of bacteria. However, overuse of antibiotics has led to antibiotic resistance, a serious global health threat in which bacteria evolve to survive treatment." — Fill in: Overuse of antibiotics has led to antibiotic ___.', blank: 'resistance / immunity', answer: 'resistencia / inmunidad', hint: 'texto médico', es: 'El uso excesivo de antibióticos ha llevado a la resistencia a los antibióticos.' },
    { en: 'Context: "The printing press, invented by Johannes Gutenberg in the 15th century, revolutionized communication by making books affordable and widely available. It played a key role in spreading the ideas of the Renaissance and the Reformation." — Fill in: The printing press ___ communication by making books widely available.', blank: 'revolutionized / transformed / changed', answer: 'revolucionó / transformó / cambió', hint: 'texto histórico', es: 'La imprenta revolucionó la comunicación al hacer los libros ampliamente disponibles.' },
    { en: 'Context: "Supply and demand is a fundamental economic principle. When supply is high and demand is low, prices tend to fall. Conversely, when demand exceeds supply, prices tend to rise." — Fill in: When demand exceeds supply, prices tend to ___.', blank: 'rise / increase / go up', answer: 'subir / aumentar / incrementarse', hint: 'texto económico', es: 'Cuando la demanda supera la oferta, los precios tienden a subir.' },
    { en: 'Context: "Shakespeare wrote 37 plays and 154 sonnets during his lifetime. His works explore universal themes such as love, jealousy, ambition, and betrayal, and continue to be performed worldwide." — Fill in: Shakespeare\'s works explore universal themes such as love, jealousy, and ___.', blank: 'betrayal / ambition / treachery', answer: 'traición / ambición', hint: 'texto literario', es: 'Las obras de Shakespeare exploran temas universales como el amor, los celos y la traición.' },
    { en: 'Context: "The water cycle describes the continuous movement of water through evaporation, condensation, and precipitation. It is essential for distributing freshwater across the planet and sustaining all forms of life." — Fill in: The water cycle is essential for ___ freshwater across the planet.', blank: 'distributing / circulating / spreading', answer: 'distribuir / circular / dispersar', hint: 'texto científico', es: 'El ciclo del agua es esencial para distribuir el agua dulce por todo el planeta.' },
    { en: 'Context: "The gig economy refers to a labor market characterized by short-term contracts and freelance work rather than permanent employment. It offers workers flexibility but often lacks benefits such as healthcare and retirement savings." — Fill in: The gig economy often lacks benefits such as healthcare and ___ savings.', blank: 'retirement / pension', answer: 'jubilación / pensión', hint: 'texto económico', es: 'La economía gig a menudo carece de beneficios como la atención médica y los ahorros para la jubilación.' },
    { en: 'Context: "Neural networks are computing systems inspired by the human brain. They learn from large amounts of data by adjusting internal parameters, and are used in applications such as image recognition and language translation." — Fill in: Neural networks learn from large amounts of data by adjusting internal ___.', blank: 'parameters / weights / settings', answer: 'parámetros / pesos / configuraciones', hint: 'texto tecnológico', es: 'Las redes neuronales aprenden de grandes cantidades de datos ajustando sus parámetros internos.' },
    { en: 'Context: "The placebo effect occurs when a patient experiences a real improvement in symptoms after receiving a treatment with no active medical ingredients. It highlights the powerful role of the mind in physical healing." — Fill in: The placebo effect highlights the powerful role of the ___ in physical healing.', blank: 'mind / brain / psychology', answer: 'mente / cerebro / psicología', hint: 'texto médico', es: 'El efecto placebo destaca el poderoso papel de la mente en la curación física.' },
    { en: 'Context: "Urbanization is the process by which rural populations move to cities. It has accelerated in the 20th and 21st centuries due to industrialization and the search for economic opportunities, fundamentally reshaping societies." — Fill in: Urbanization has been accelerated by industrialization and the search for economic ___.', blank: 'opportunities / growth / development', answer: 'oportunidades / crecimiento / desarrollo', hint: 'texto social', es: 'La urbanización ha sido acelerada por la industrialización y la búsqueda de oportunidades económicas.' },
    { en: 'Context: "Capitalism is an economic system in which private individuals or companies own the means of production. Markets determine the prices of goods and services through supply and demand, with minimal government intervention." — Fill in: In capitalism, markets determine prices through supply and ___.', blank: 'demand', answer: 'demanda', hint: 'texto económico', es: 'En el capitalismo, los mercados determinan los precios a través de la oferta y la demanda.' },
    { en: 'Context: "The Silk Road was an ancient network of trade routes that connected China and East Asia with Central Asia, the Middle East, and Europe. It facilitated not only trade but also the exchange of ideas, religions, and cultures." — Fill in: The Silk Road facilitated not only trade but also the ___ of ideas and cultures.', blank: 'exchange / spread / transmission', answer: 'intercambio / difusión / transmisión', hint: 'texto histórico', es: 'La Ruta de la Seda facilitó no solo el comercio sino también el intercambio de ideas y culturas.' },
    { en: 'Context: "Biodiversity refers to the variety of life on Earth, from genes to ecosystems. It is under threat from habitat destruction, pollution, climate change, and invasive species, with species going extinct at an alarming rate." — Fill in: Biodiversity is under threat from habitat destruction, pollution, and ___ species.', blank: 'invasive', answer: 'invasoras / invasivas', hint: 'texto ambiental', es: 'La biodiversidad está amenazada por la destrucción del hábitat, la contaminación y las especies invasoras.' },
    { en: 'Context: "The scientific method is a systematic process used to investigate phenomena, acquire new knowledge, or correct previous knowledge. It involves observation, hypothesis formation, experimentation, and conclusion." — Fill in: The scientific method involves observation, hypothesis formation, experimentation, and ___.', blank: 'conclusion / analysis', answer: 'conclusión / análisis', hint: 'texto científico', es: 'El método científico implica observación, formación de hipótesis, experimentación y conclusión.' },
    { en: 'Context: "Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power. Central banks attempt to control inflation by adjusting interest rates." — Fill in: Central banks control inflation by adjusting interest ___.', blank: 'rates', answer: 'tasas', hint: 'texto económico', es: 'Los bancos centrales controlan la inflación ajustando las tasas de interés.' },
    { en: 'Context: "The theory of relativity, developed by Albert Einstein, describes the relationship between space, time, and gravity. It fundamentally changed our understanding of the universe and laid the groundwork for modern physics." — Fill in: Einstein\'s theory of relativity ___ our understanding of the universe.', blank: 'changed / transformed / revolutionized', answer: 'cambió / transformó / revolucionó', hint: 'texto científico', es: 'La teoría de la relatividad de Einstein cambió nuestra comprensión del universo.' },
    { en: 'Context: "Deforestation is the large-scale removal of forests, primarily for agriculture and urban development. It contributes to climate change, loss of biodiversity, and disruption of the water cycle." — Fill in: Deforestation contributes to climate change and loss of ___.', blank: 'biodiversity / wildlife / species', answer: 'biodiversidad / fauna silvestre / especies', hint: 'texto ambiental', es: 'La deforestación contribuye al cambio climático y a la pérdida de biodiversidad.' },
    { en: 'Context: "The human genome contains approximately 3 billion base pairs of DNA. The Human Genome Project, completed in 2003, mapped the entire sequence, opening new possibilities for medicine and genetic research." — Fill in: The Human Genome Project ___ the entire sequence of human DNA.', blank: 'mapped / sequenced / decoded', answer: 'mapeó / secuenció / decodificó', hint: 'texto científico', es: 'El Proyecto Genoma Humano mapeó toda la secuencia del ADN humano.' },
    { en: 'Context: "Propaganda is information, often biased or misleading, used to promote a particular political cause or point of view. Historically, it has been used by governments and political movements to shape public opinion." — Fill in: Propaganda is used to ___ public opinion.', blank: 'shape / influence / manipulate', answer: 'moldear / influenciar / manipular', hint: 'texto político', es: 'La propaganda se usa para moldear la opinión pública.' },
    { en: 'Context: "The concept of human rights refers to the basic rights and freedoms that all people are entitled to, regardless of nationality, ethnicity, or religion. The Universal Declaration of Human Rights was adopted in 1948." — Fill in: Human rights are entitlements that all people have ___ of nationality or ethnicity.', blank: 'regardless / independent / irrespective', answer: 'independientemente / sin importar / con independencia', hint: 'texto político', es: 'Los derechos humanos son derechos que todas las personas tienen independientemente de su nacionalidad o etnia.' },
    { en: 'Context: "Cognitive dissonance refers to the mental discomfort experienced when a person holds two conflicting beliefs or when their actions contradict their values. People often resolve this discomfort by changing their beliefs or behavior." — Fill in: Cognitive dissonance is the discomfort of holding two ___ beliefs.', blank: 'conflicting / contradictory / opposing', answer: 'contradictorias / conflictivas / opuestas', hint: 'texto psicológico', es: 'La disonancia cognitiva es la incomodidad de mantener dos creencias contradictorias.' },
    { en: 'Context: "The theory of plate tectonics explains the movement of large sections of Earth\'s crust, called tectonic plates. Their collision, separation, or sliding past each other causes earthquakes, volcanoes, and the formation of mountain ranges." — Fill in: Tectonic plate movement causes earthquakes, volcanoes, and mountain ___ formation.', blank: 'range / chain', answer: 'cordillera / cadena montañosa', hint: 'texto geológico', es: 'El movimiento de las placas tectónicas causa terremotos, volcanes y la formación de cordilleras.' },
    { en: 'Context: "Feudalism was a medieval social and political system in which land was exchanged for military service. Lords granted land to vassals in exchange for loyalty and military support, creating a rigid social hierarchy." — Fill in: In feudalism, lords granted land to vassals in exchange for loyalty and military ___.', blank: 'support / service', answer: 'apoyo / servicio', hint: 'texto histórico', es: 'En el feudalismo, los señores otorgaban tierras a los vasallos a cambio de lealtad y servicio militar.' },
    { en: 'Context: "The placebo effect, cognitive biases, and confirmation bias illustrate how our minds can distort our perception of reality. Confirmation bias leads people to seek out information that supports their existing ___ while ignoring contradictory evidence." — Fill in: Confirmation bias leads people to seek information that supports their existing ___.', blank: 'beliefs / views / opinions', answer: 'creencias / opiniones', hint: 'texto psicológico', es: 'El sesgo de confirmación lleva a las personas a buscar información que respalde sus creencias existentes.' },
    { en: 'Context: "Existentialism is a philosophical movement that emphasizes individual freedom and the search for meaning in a universe without inherent purpose. Thinkers like Sartre and Camus argued that humans must create their own ___ in life." — Fill in: Existentialists argue that humans must create their own ___ in life.', blank: 'meaning / purpose / values', answer: 'significado / propósito / valores', hint: 'texto filosófico', es: 'Los existencialistas argumentan que los humanos deben crear su propio significado en la vida.' },
    { en: 'Context: "The concept of supply chain refers to the entire process of producing and delivering a product, from raw materials to the final consumer. Disruptions in the supply chain can cause significant economic consequences." — Fill in: A supply chain disruption can cause significant economic ___.', blank: 'consequences / damage / losses', answer: 'consecuencias / daños / pérdidas', hint: 'texto económico', es: 'Una interrupción en la cadena de suministro puede causar importantes consecuencias económicas.' },
    { en: 'Context: "Stoicism is an ancient Greek philosophy that teaches the development of self-control and fortitude as a means of overcoming destructive emotions. Stoics believed that virtue is the only true good and that external events are ___ our control." — Fill in: Stoics believed that external events are beyond our ___.', blank: 'control', answer: 'control', hint: 'texto filosófico', es: 'Los estoicos creían que los eventos externos están más allá de nuestro control.' },
    { en: 'Context: "The greenhouse effect occurs when gases in Earth\'s atmosphere trap heat from the sun, warming the planet\'s surface. While a natural greenhouse effect is essential for life, human-enhanced greenhouse gases are causing ___ warming." — Fill in: Human-enhanced greenhouse gases are causing ___ warming.', blank: 'global / excessive / dangerous', answer: 'calentamiento global / excesivo / peligroso', hint: 'texto ambiental', es: 'Los gases de efecto invernadero producidos por humanos están causando calentamiento global.' },
    { en: 'Context: "A monopoly occurs when a single company dominates an entire market, eliminating competition. This can lead to higher prices, reduced innovation, and fewer choices for consumers, prompting ___ intervention." — Fill in: Monopolies can lead to higher prices and reduced innovation, prompting ___ intervention.', blank: 'government / regulatory / state', answer: 'gobierno / regulatorio / estatal', hint: 'texto económico', es: 'Los monopolios pueden llevar a precios más altos e innovación reducida, provocando intervención gubernamental.' },
    { en: 'Context: "Neuroplasticity is the brain\'s ability to reorganize itself by forming new neural connections. This allows the brain to adapt to new experiences, recover from injury, and continue learning throughout a person\'s ___ life." — Fill in: Neuroplasticity allows the brain to adapt and continue learning throughout a person\'s ___ life.', blank: 'entire / whole', answer: 'toda', hint: 'texto científico', es: 'La neuroplasticidad permite al cerebro adaptarse y seguir aprendiendo durante toda la vida de una persona.' },
    { en: 'Context: "The social contract theory, proposed by philosophers like Rousseau and Locke, suggests that governments derive their authority from the consent of the governed. Citizens agree to give up some ___ in exchange for order and protection." — Fill in: Citizens give up some ___ in exchange for order and protection.', blank: 'freedom / liberty / rights', answer: 'libertad / derechos', hint: 'texto filosófico', es: 'Los ciudadanos ceden parte de su libertad a cambio de orden y protección.' },
    { en: 'Context: "Quantum mechanics is a branch of physics that describes the behavior of particles at the atomic and subatomic level. Unlike classical physics, it introduces the concept of ___, meaning particles can exist in multiple states simultaneously." — Fill in: Quantum mechanics introduces the concept of ___, meaning particles can exist in multiple states.', blank: 'superposition', answer: 'superposición', hint: 'texto científico', es: 'La mecánica cuántica introduce el concepto de superposición, lo que significa que las partículas pueden existir en múltiples estados.' },
    { en: 'Context: "The Magna Carta, signed in 1215, was a landmark document that limited the power of the English king and established the principle that everyone, including the monarch, is ___ to the law." — Fill in: The Magna Carta established that everyone, including the monarch, is ___ to the law.', blank: 'subject / accountable', answer: 'sujeto / responsable', hint: 'texto histórico', es: 'La Carta Magna estableció que todos, incluido el monarca, están sujetos a la ley.' },
    { en: 'Context: "Artificial scarcity is a strategy used by companies to limit the supply of a product to drive up demand and price. Limited edition products are a common example of manufactured ___ used to increase perceived value." — Fill in: Artificial scarcity is used to drive up ___ and price.', blank: 'demand', answer: 'demanda', hint: 'texto económico', es: 'La escasez artificial se usa para aumentar la demanda y el precio.' },
    { en: 'Context: "The Socratic method is a form of cooperative dialogue in which questions are used to stimulate critical thinking and reveal contradictions in one\'s beliefs. It is named after the Greek philosopher ___, who used it extensively." — Fill in: The Socratic method is named after the Greek philosopher ___.', blank: 'Socrates', answer: 'Sócrates', hint: 'texto filosófico', es: 'El método socrático lleva el nombre del filósofo griego Sócrates.' },
    { en: 'Context: "Pandemics are outbreaks of disease that spread across countries or continents. The COVID-19 pandemic of 2020 demonstrated how quickly a novel ___ can disrupt global health systems, economies, and daily life." — Fill in: The COVID-19 pandemic showed how quickly a novel ___ can disrupt global systems.', blank: 'virus / pathogen / disease', answer: 'virus / patógeno / enfermedad', hint: 'texto médico', es: 'La pandemia de COVID-19 demostró con qué rapidez un nuevo virus puede interrumpir los sistemas globales.' },
    { en: 'Context: "The concept of entropy in thermodynamics refers to the degree of disorder or randomness in a system. The second law of thermodynamics states that the total entropy of a closed system always ___ over time." — Fill in: The second law of thermodynamics states that entropy always ___ over time.', blank: 'increases / grows / rises', answer: 'aumenta / crece / sube', hint: 'texto científico', es: 'La segunda ley de la termodinámica establece que la entropía siempre aumenta con el tiempo.' },
    { en: 'Context: "The concept of moral relativism holds that moral judgments are not universally valid but depend on the cultural or social context in which they arise. Critics argue this position makes it impossible to condemn ___ practices in other cultures." — Fill in: Moral relativism makes it difficult to condemn ___ practices in other cultures.', blank: 'harmful / unethical / unjust', answer: 'prácticas dañinas / poco éticas / injustas', hint: 'texto filosófico', es: 'El relativismo moral dificulta condenar prácticas dañinas o injustas en otras culturas.' },
    { en: 'Context: "The tragedy of the commons describes a situation in which individual users, acting in self-interest, deplete a shared resource through collective action. Without regulation, shared resources such as fisheries and forests are ___ unsustainably." — Fill in: Without regulation, shared resources are ___ unsustainably.', blank: 'exploited / consumed / depleted', answer: 'explotados / consumidos / agotados', hint: 'texto ambiental/económico', es: 'Sin regulación, los recursos compartidos son explotados de forma insostenible.' },
    { en: 'Context: "The water cycle, also called the hydrological cycle, describes how water moves continuously through Earths systems. Water evaporates from oceans and lakes, rises as vapor, forms clouds, and falls back as rain or snow." — Fill in: Water ___ from oceans and lakes and rises into the atmosphere as vapor.', blank: 'evaporates / rises / vaporizes', answer: 'se evapora / sube / se vaporiza', hint: 'ciencias de la Tierra', es: 'El agua se evapora de los oceanos y lagos y sube a la atmosfera como vapor.' },
    { en: 'Context: "Photosynthesis is the process by which green plants convert sunlight into food. They absorb carbon dioxide from the air and water from the soil, and release oxygen as a byproduct." — Fill in: Plants release ___ as a byproduct of photosynthesis.', blank: 'oxygen', answer: 'oxigeno', hint: 'biologia', es: 'Las plantas liberan oxigeno como subproducto de la fotosintesis.' },
    { en: 'Context: "The French Revolution began in 1789 and fundamentally changed French society. The monarchy was abolished, a republic was declared, and the slogan Liberty, Equality, Fraternity became the symbol of the movement." — Fill in: The ___ was abolished during the French Revolution and a republic was declared.', blank: 'monarchy', answer: 'monarquia', hint: 'historia de Francia', es: 'La monarquia fue abolida durante la Revolucion Francesa y se declaro una republica.' },
    { en: 'Context: "Earthquakes occur when tectonic plates shift along fault lines. The point underground where the earthquake originates is called the focus, and the point directly above it on the surface is the epicenter." — Fill in: The point on the surface directly above the earthquake origin is called the ___.', blank: 'epicenter / epicentre', answer: 'epicentro', hint: 'geologia', es: 'El punto en la superficie directamente sobre el origen del terremoto se llama epicentro.' },
    { en: 'Context: "The immune system defends the body against infections and diseases. White blood cells, also called leukocytes, identify and destroy harmful pathogens like bacteria and viruses." — Fill in: ___ blood cells identify and destroy harmful pathogens in the body.', blank: 'White', answer: 'Blancos / leucocitos', hint: 'biologia humana', es: 'Los globulos blancos identifican y destruyen patogenos daninos en el cuerpo.' },
    { en: 'Context: "Inflation occurs when the general level of prices for goods and services rises over time. When inflation is high, each unit of currency buys fewer goods, reducing the purchasing power of money." — Fill in: When inflation is high, the purchasing ___ of money is reduced.', blank: 'power', answer: 'poder', hint: 'economia', es: 'Cuando la inflacion es alta, el poder adquisitivo del dinero se reduce.' },
    { en: 'Context: "The Amazon rainforest is the worlds largest tropical rainforest, covering most of the Amazon basin in South America. It is home to an estimated 10% of all species on Earth and plays a critical role in regulating the global climate." — Fill in: The Amazon rainforest plays a critical role in regulating the global ___.', blank: 'climate', answer: 'clima', hint: 'medio ambiente', es: 'La selva amazonica juega un papel fundamental en la regulacion del clima global.' },
    { en: 'Context: "DNA, or deoxyribonucleic acid, carries the genetic information of living organisms. It is structured as a double helix and contains four chemical bases: adenine, thymine, cytosine, and guanine." — Fill in: DNA is structured as a double ___ and contains four chemical bases.', blank: 'helix', answer: 'helice', hint: 'genetica', es: 'El ADN tiene estructura de doble helice y contiene cuatro bases quimicas.' },
    { en: 'Context: "The Industrial Revolution began in Britain in the late 18th century and transformed manufacturing. Steam engines replaced manual labor, factories were built, and goods were produced faster and in larger quantities than ever before." — Fill in: During the Industrial Revolution, ___ engines replaced manual labor in factories.', blank: 'steam', answer: 'vapor', hint: 'historia industrial', es: 'Durante la Revolucion Industrial, las maquinas de vapor reemplazaron la mano de obra manual en las fabricas.' },
    { en: 'Context: "Gravity is the force that attracts objects with mass toward each other. On Earth, gravity pulls everything downward toward the center of the planet, giving objects weight and keeping the atmosphere in place." — Fill in: On Earth, gravity pulls everything downward toward the ___ of the planet.', blank: 'center / centre', answer: 'centro', hint: 'fisica', es: 'En la Tierra, la gravedad atrae todo hacia abajo, hacia el centro del planeta.' },
    { en: 'Context: "The Great Wall of China was built over many centuries to protect Chinese states from invasions. Stretching thousands of miles, it is one of the greatest architectural achievements in human history." — Fill in: The Great Wall of China was built to protect Chinese states from ___.', blank: 'invasions / invaders', answer: 'invasiones / invasores', hint: 'historia de China', es: 'La Gran Muralla China fue construida para proteger los estados chinos de las invasiones.' },
    { en: 'Context: "Vaccines work by introducing a weakened or inactive form of a pathogen into the body. This triggers the immune system to produce antibodies, so that if the real pathogen appears, the body can fight it off quickly." — Fill in: Vaccines trigger the immune system to produce ___ that protect against disease.', blank: 'antibodies', answer: 'anticuerpos', hint: 'medicina', es: 'Las vacunas estimulan al sistema inmunologico para producir anticuerpos que protegen contra enfermedades.' },
    { en: 'Context: "Migration is the movement of people from one place to another in search of better living conditions. People migrate for many reasons, including economic opportunities, political instability, conflict, and natural disasters." — Fill in: People ___ in search of better living conditions, often due to economic or political reasons.', blank: 'migrate', answer: 'migran', hint: 'sociologia', es: 'Las personas migran en busca de mejores condiciones de vida, a menudo por razones economicas o politicas.' },
    { en: 'Context: "The speed of light in a vacuum is approximately 300,000 kilometers per second. Nothing in the universe can travel faster than light, making it a fundamental constant in physics." — Fill in: Nothing in the universe can travel faster than ___.', blank: 'light', answer: 'la luz', hint: 'fisica', es: 'Nada en el universo puede viajar mas rapido que la luz.' },
    { en: 'Context: "The human skeleton is made up of 206 bones that support the body and protect internal organs. Bones are connected to each other at joints, and muscles attach to bones via tendons to enable movement." — Fill in: Muscles attach to bones via ___ to enable movement.', blank: 'tendons', answer: 'tendones', hint: 'anatomia', es: 'Los musculos se unen a los huesos mediante tendones para permitir el movimiento.' },
    { en: 'Context: "Democracy is a system of government where citizens vote to elect their representatives. In a representative democracy, elected officials make laws and decisions on behalf of the people who voted for them." — Fill in: In a representative democracy, elected officials make decisions on behalf of the people who ___ for them.', blank: 'voted', answer: 'votaron', hint: 'gobierno', es: 'En una democracia representativa, los funcionarios electos toman decisiones en nombre de las personas que votaron por ellos.' },
    { en: 'Context: "The solar system consists of the Sun and all objects that orbit around it, including eight planets, their moons, asteroids, and comets. The four inner planets are rocky, while the four outer planets are gas or ice giants." — Fill in: The four inner planets are ___, while the four outer planets are gas or ice giants.', blank: 'rocky', answer: 'rocosos', hint: 'astronomia', es: 'Los cuatro planetas interiores son rocosos, mientras que los cuatro exteriores son gigantes de gas o hielo.' },
    { en: 'Context: "Renewable energy sources, such as solar, wind, and hydroelectric power, generate electricity without depleting natural resources. Unlike fossil fuels, renewable sources do not produce carbon dioxide emissions when generating power." — Fill in: Renewable energy sources do not produce carbon ___ emissions when generating power.', blank: 'dioxide', answer: 'dioxido', hint: 'energia', es: 'Las fuentes de energia renovable no producen emisiones de dioxido de carbono al generar electricidad.' },
    { en: 'Context: "The printing press, invented by Johannes Gutenberg around 1440, revolutionized the spread of information in Europe. Books became cheaper and more widely available, literacy rates increased, and ideas spread faster than ever before." — Fill in: The printing press made books cheaper and increased ___ rates across Europe.', blank: 'literacy', answer: 'alfabetizacion', hint: 'historia de la comunicacion', es: 'La imprenta hizo los libros mas baratos e incremento las tasas de alfabetizacion en Europa.' },
    { en: 'Context: "The nervous system controls and coordinates all body functions. It consists of the brain and spinal cord, which form the central nervous system, and the network of nerves that extend throughout the body." — Fill in: The brain and spinal cord together form the ___ nervous system.', blank: 'central', answer: 'central', hint: 'anatomia', es: 'El cerebro y la medula espinal forman juntos el sistema nervioso central.' },
    { en: 'Context: "Supply and demand is one of the most fundamental principles in economics. When the supply of a good decreases but demand stays the same, prices tend to rise. When supply increases and demand falls, prices tend to drop." — Fill in: When the supply of a good decreases but demand stays the same, prices tend to ___.', blank: 'rise / increase', answer: 'subir / aumentar', hint: 'economia', es: 'Cuando la oferta de un bien disminuye pero la demanda se mantiene igual, los precios tienden a subir.' },
    { en: 'Context: "Volcanoes form where molten rock, called magma, rises from beneath the Earths crust and erupts on the surface. When magma reaches the surface, it is called lava, and it can flow for miles before cooling and solidifying." — Fill in: When ___ reaches the surface during a volcanic eruption, it is called lava.', blank: 'magma', answer: 'magma', hint: 'geologia', es: 'Cuando el magma llega a la superficie durante una erupcion volcanica, se llama lava.' },
    { en: 'Context: "The United Nations was founded in 1945 after World War II with the goal of maintaining international peace and security. It has 193 member states and its headquarters are located in New York City." — Fill in: The United Nations was founded in 1945 with the goal of maintaining international ___ and security.', blank: 'peace', answer: 'paz', hint: 'relaciones internacionales', es: 'Las Naciones Unidas se fundaron en 1945 con el objetivo de mantener la paz y seguridad internacionales.' },
    { en: 'Context: "Climate change refers to long-term shifts in global temperatures and weather patterns. While natural factors contribute, scientific evidence shows that human activities, especially burning fossil fuels, have been the main driver since the 20th century." — Fill in: Scientific evidence shows that ___ activities are the main driver of climate change since the 20th century.', blank: 'human', answer: 'humanas', hint: 'medioambiente', es: 'La evidencia cientifica muestra que las actividades humanas son el principal impulsor del cambio climatico desde el siglo XX.' },
    { en: 'Context: "Antibiotics are medicines that kill or stop the growth of bacteria. They are not effective against viral infections like the common cold or flu. Overusing antibiotics can lead to antibiotic resistance, making bacteria harder to treat." — Fill in: Antibiotics are not effective against ___ infections like the common cold.', blank: 'viral / virus', answer: 'virales / viricas', hint: 'medicina', es: 'Los antibioticos no son efectivos contra las infecciones virales como el resfriado comun.' },
    { en: 'Context: "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They form when a massive star collapses at the end of its life, compressing its core into an incredibly dense point." — Fill in: A black hole forms when a massive star ___ at the end of its life.', blank: 'collapses', answer: 'colapsa', hint: 'astronomia', es: 'Un agujero negro se forma cuando una estrella masiva colapsa al final de su vida.' },
    { en: 'Context: "The Silk Road was an ancient network of trade routes connecting China to the Mediterranean world. Merchants traded goods like silk, spices, and precious metals, and ideas, religions, and technologies also spread along these routes." — Fill in: Along the Silk Road, merchants traded goods and ___, religions, and technologies also spread.', blank: 'ideas', answer: 'ideas', hint: 'historia del comercio', es: 'A lo largo de la Ruta de la Seda, los comerciantes intercambiaban mercancias e ideas, religiones y tecnologias tambien se difundian.' },
    { en: 'Context: "The mitochondria are organelles found in most cells and are often called the powerhouse of the cell. They convert energy from food into ATP, a molecule that cells use to power their activities." — Fill in: Mitochondria convert energy from food into ___, a molecule that cells use to power their activities.', blank: 'ATP', answer: 'ATP', hint: 'biologia celular', es: 'Las mitocondrias convierten la energia de los alimentos en ATP, una molecula que las celulas usan para sus actividades.' },
    { en: 'Context: "The Enlightenment was an intellectual movement in 18th-century Europe that emphasized reason, individualism, and skepticism of traditional authority. It influenced the American and French Revolutions and laid the groundwork for modern democracy." — Fill in: The Enlightenment emphasized ___, individualism, and skepticism of traditional authority.', blank: 'reason', answer: 'razon', hint: 'historia intelectual', es: 'La Ilustracion enfatizo la razon, el individualismo y el escepticismo hacia la autoridad tradicional.' },
    { en: 'Context: "The ozone layer is a region of Earths stratosphere that absorbs most of the Suns ultraviolet radiation. Depletion of the ozone layer, mainly caused by chemicals called CFCs, increases the risk of skin cancer and other health issues." — Fill in: The ozone layer absorbs most of the Sun\'s ultraviolet ___, protecting life on Earth.', blank: 'radiation', answer: 'radiacion', hint: 'ciencias atmosfericas', es: 'La capa de ozono absorbe la mayor parte de la radiacion ultravioleta del Sol, protegiendo la vida en la Tierra.' },
    { en: 'Context: "World War I began in 1914 following the assassination of Archduke Franz Ferdinand of Austria. The war involved most of the worlds great powers and resulted in millions of military and civilian casualties." — Fill in: World War I began following the ___ of Archduke Franz Ferdinand of Austria.', blank: 'assassination', answer: 'asesinato', hint: 'historia mundial', es: 'La Primera Guerra Mundial comenzo tras el asesinato del Archiduque Francisco Fernando de Austria.' },
    { en: 'Context: "Ecosystems are communities of living organisms interacting with their physical environment. Energy flows through an ecosystem in a food chain, starting with producers like plants, then herbivores, then carnivores." — Fill in: In a food chain, energy starts with ___ like plants, then flows to herbivores and carnivores.', blank: 'producers', answer: 'productores', hint: 'ecologia', es: 'En una cadena alimentaria, la energia comienza con los productores como las plantas, luego pasa a herviboros y carnivoros.' },
    { en: 'Context: "The Renaissance was a cultural movement that began in Italy in the 14th century and spread throughout Europe. It brought renewed interest in the art and knowledge of ancient Greece and Rome and produced great artists like Leonardo da Vinci and Michelangelo." — Fill in: The Renaissance brought renewed interest in the art and knowledge of ancient Greece and ___.', blank: 'Rome', answer: 'Roma', hint: 'historia del arte', es: 'El Renacimiento trajo un renovado interes por el arte y el conocimiento de la antigua Grecia y Roma.' },
    { en: 'Context: "The atmosphere is the layer of gases surrounding the Earth. It consists mainly of nitrogen and oxygen, and it protects life on Earth by absorbing ultraviolet solar radiation and maintaining temperatures suitable for life." — Fill in: The atmosphere consists mainly of ___ and oxygen and protects life on Earth.', blank: 'nitrogen', answer: 'nitrogeno', hint: 'ciencias de la Tierra', es: 'La atmosfera consiste principalmente en nitrogeno y oxigeno y protege la vida en la Tierra.' },
    { en: 'Context: "Osmosis is the movement of water molecules through a semipermeable membrane from an area of lower solute concentration to an area of higher solute concentration. This process is essential for cells to maintain proper hydration." — Fill in: In osmosis, water moves from an area of lower ___ concentration to higher concentration through a membrane.', blank: 'solute', answer: 'soluto', hint: 'quimica', es: 'En la osmosis, el agua se mueve desde una zona de menor concentracion de soluto hacia una de mayor concentracion a traves de una membrana.' },
    { en: 'Context: "Colonialism was the practice of powerful nations establishing control over other territories and peoples. European countries colonized large parts of Africa, Asia, and the Americas, extracting resources and imposing their cultures on local populations." — Fill in: During colonialism, European nations extracted ___ and imposed their cultures on local populations.', blank: 'resources', answer: 'recursos', hint: 'historia colonial', es: 'Durante el colonialismo, las naciones europeas extrajeron recursos e impusieron sus culturas a las poblaciones locales.' },
    { en: 'Context: "The theory of evolution, developed by Charles Darwin, states that species change over time through a process called natural selection. Individuals with traits better suited to their environment survive and reproduce more successfully." — Fill in: According to Darwin, individuals with traits better suited to their environment ___ and reproduce more successfully.', blank: 'survive', answer: 'sobreviven', hint: 'biologia evolutiva', es: 'Segun Darwin, los individuos con rasgos mejor adaptados a su entorno sobreviven y se reproducen con mayor exito.' },
    { en: 'Context: "Atoms are the basic building blocks of matter. Each atom consists of a nucleus containing protons and neutrons, surrounded by a cloud of electrons. The number of protons in the nucleus determines what element the atom is." — Fill in: The number of ___ in the nucleus determines what element the atom is.', blank: 'protons', answer: 'protones', hint: 'quimica', es: 'El numero de protones en el nucleo determina que elemento es el atomo.' },
    { en: 'Context: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 30% of the planet\'s surface. It is bordered by the Americas to the east and Asia and Australia to the west." — Fill in: The Pacific Ocean covers more than 30% of the ___ surface and is the deepest ocean.', blank: 'planet\'s / Earth\'s', answer: 'superficie del planeta / de la Tierra', hint: 'geografia', es: 'El Oceano Pacifico cubre mas del 30% de la superficie del planeta y es el oceano mas profundo.' },
    { en: 'Context: "Feudalism was a social and economic system in medieval Europe. At the top was the king, who granted land to lords in exchange for military service. Lords then rented land to peasants, who farmed it in exchange for protection." — Fill in: In feudalism, the king granted land to ___ in exchange for military service.', blank: 'lords / nobles', answer: 'senores / nobles', hint: 'historia medieval', es: 'En el feudalismo, el rey otorgaba tierras a los senores a cambio de servicio militar.' },
    { en: 'Context: "Sound travels as a wave through a medium such as air, water, or solid material. The speed of sound depends on the medium: it travels faster in water than in air, and faster still in solid materials." — Fill in: Sound travels faster in ___ than in air, and fastest in solid materials.', blank: 'water', answer: 'agua', hint: 'fisica del sonido', es: 'El sonido viaja mas rapido en el agua que en el aire, y mas rapido aun en los solidos.' },
    { en: 'Context: "Respiration is the process by which living organisms release energy from food. In aerobic respiration, glucose is broken down using oxygen to produce energy, carbon dioxide, and water." — Fill in: In aerobic respiration, ___ is broken down using oxygen to produce energy.', blank: 'glucose', answer: 'glucosa', hint: 'biologia', es: 'En la respiracion aerobica, la glucosa se descompone usando oxigeno para producir energia.' },
    { en: 'Context: "The Renaissance artist Leonardo da Vinci is famous not only for his paintings but also for his detailed notebooks filled with scientific observations and inventions. He studied anatomy, designed flying machines, and sketched hydraulic systems." — Fill in: Leonardo da Vinci is famous for his paintings and for his ___ filled with scientific observations and inventions.', blank: 'notebooks', answer: 'cuadernos', hint: 'arte y ciencia', es: 'Leonardo da Vinci es famoso por sus pinturas y por sus cuadernos llenos de observaciones cientificas e inventos.' },
    { en: 'Context: "Plate tectonics is the theory that the Earth\'s outer shell is divided into large plates that move slowly over time. The movement of these plates causes earthquakes, volcanic eruptions, and the formation of mountains." — Fill in: The movement of tectonic plates causes earthquakes, volcanic eruptions, and the formation of ___.', blank: 'mountains', answer: 'montanas', hint: 'geologia', es: 'El movimiento de las placas tectonicas provoca terremotos, erupciones volcanicas y la formacion de montanas.' },
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

  // Helper: build card-back content
  function buildCardBack(c) {
    const sentenceEl    = document.getElementById('card-back-sentence');
    const keywordsEl    = document.getElementById('card-back-keywords');
    const translationEl = document.getElementById('card-back-translation');

    if (isBlankCard(c)) {
      // Show the full English sentence with blank filled in (highlighted)
      const blanks     = c.blank.split('/').map(w => w.trim());
      const firstBlank = blanks[0];
      // Reconstruct the sentence with the answer word highlighted
      const fullSentence = c.en.replace(/___/g, firstBlank);
      sentenceEl.textContent = fullSentence;

      // Keywords: EN word(s) → ES word(s) in large colored text
      keywordsEl.innerHTML = '';
      const enWords = c.blank.split('/').map(w => w.trim());
      const esWords = c.answer.split('/').map(w => w.trim());
      const maxLen  = Math.max(enWords.length, esWords.length);
      for (let i = 0; i < maxLen; i++) {
        if (i > 0) {
          const sep = document.createElement('span');
          sep.className   = 'keyword-sep';
          sep.textContent = ' / ';
          keywordsEl.appendChild(sep);
        }
        const pair = document.createElement('span');
        pair.className = 'keyword-pair';
        const en = document.createElement('span');
        en.className   = 'keyword-en';
        en.textContent = enWords[i] || enWords[0];
        const arr = document.createElement('span');
        arr.className   = 'keyword-arrow';
        arr.textContent = ' → ';
        const es = document.createElement('span');
        es.className   = 'keyword-es';
        es.textContent = esWords[i] || esWords[0];
        pair.appendChild(en);
        pair.appendChild(arr);
        pair.appendChild(es);
        keywordsEl.appendChild(pair);
      }

      // Spanish translation of the full sentence, smaller
      translationEl.textContent = c.es || '';
    } else {
      // Full sentence mode: EN sentence on back, ES below
      sentenceEl.textContent   = c.en;
      keywordsEl.innerHTML     = '';
      translationEl.textContent = c.es;
    }
  }

  if (isBlankCard(card)) {
    // MODO FILL-IN-THE-BLANK (niveles 1-2 y 5)
    const sentence = buildBlankSentence(card);
    document.getElementById('card-word').textContent = sentence;
    if (labelEl) labelEl.textContent = '¿Qué palabra en inglés completa la frase?';
    input.placeholder = 'Escribe la palabra en inglés...';
    if (hintEl) hintEl.textContent = card.hint ? `[ ${card.hint} ]` : '';
  } else {
    // MODO FRASE COMPLETA (niveles 3-5)
    document.getElementById('card-word').textContent = card.en;
    if (labelEl) labelEl.textContent = 'Traduce al español';
    input.placeholder = 'Escribe la traducción en español...';
    if (hintEl) hintEl.textContent = card.hint ? `[ ${card.hint} ]` : '';
  }
  buildCardBack(card);

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
    // Nivel 1: blank = "apple"         → usuario escribe "apple"
    // Nivel 2: blank = "hotel / airport" → usuario escribe ambas (cualquier orden)
    correctText = card.blank;
    const parts = card.blank.split('/').map(p => normalizeFrase(p));
    const userParts = userAns.split('/').map(p => normalizeFrase(p));

    if (parts.length === 1) {
      // Nivel 1: comparación directa contra la palabra en inglés
      isCorrect = parts[0] === normalizeFrase(userAns);
    } else {
      // Nivel 2: el usuario escribe las dos palabras en inglés (cualquier orden)
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
    const respuesta = isBlankCard(card) ? card.blank : card.es;
    feedback.textContent = `Incorrecto. La palabra era: "${respuesta}"`;
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
  let remaining   = 5;

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
  }, 5000);
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
    const json = await res.json();
    if (typeof json !== 'object' || json === null ||
        json.responseStatus !== 200 ||
        typeof json.responseData?.translatedText !== 'string') throw new Error('Inválida');
    const enWord = sanitizeWord(json.responseData.translatedText);
    if (!enWord) throw new Error('Vacía');
    showAddModal(esWord, enWord);
  } catch {
    showAddModal(esWord, '', true);
  } finally {
    btn.disabled = false; btn.textContent = 'Buscar traducción';
  }
}

function showAddModal(es, en, isError = false) {
  const note = document.getElementById('modal-note');
  document.getElementById('modal-es').textContent = es;
  document.getElementById('modal-en').value       = en;
  note.textContent = isError
    ? 'No se encontró traducción automática. Escribe la traducción manualmente:'
    : 'Traducción encontrada. Puedes editarla antes de guardar:';
  note.style.color = isError ? 'var(--red)' : 'var(--text-soft)';
  document.getElementById('modal-overlay').classList.add('active');
  const f = document.getElementById('modal-en'); f.focus(); f.select();
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
    alert(`Límite de ${SECURITY.MAX_CUSTOM_CARDS} tarjetas alcanzado.`);
    closeModal(); return;
  }
  const allCards = [...Object.values(WORDS_BY_LEVEL).flat(), ...data.customCards];
  if (allCards.some(c => (c.es || c.answer || '').toLowerCase() === es.toLowerCase() ||
                         c.en.toLowerCase() === en.toLowerCase())) {
    alert(`La frase "${es}" ya existe en el mazo.`);
    closeModal(); return;
  }
  data.customCards.push({ en, es, hint: 'personalizada' });
  saveData(data);
  deck = buildDeck();
  document.getElementById('input-spanish').value = '';
  closeModal();
  renderCustomCards();
}

function renderCustomCards() {
  const data      = loadData();
  const container = document.getElementById('custom-cards-list');
  if (data.customCards.length === 0) {
    container.innerHTML = '<p class="empty-msg">Aún no has agregado tarjetas personalizadas.</p>';
    return;
  }
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
// =============================================
document.addEventListener('DOMContentLoaded', () => {

  // Navegación
  document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Estudiar
  document.getElementById('btn-check').addEventListener('click', checkAnswer);
  document.getElementById('btn-next').addEventListener('click', nextCard);
  document.getElementById('answer-input').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (!answered) checkAnswer(); else nextCard();
  });

  // Progreso
  document.getElementById('btn-reset').addEventListener('click', resetProgress);

  // Mis Tarjetas
  document.getElementById('search-form').addEventListener('submit', searchAndPreview);
  document.getElementById('custom-cards-list').addEventListener('click', e => {
    const btn = e.target.closest('.btn-delete');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index, 10);
    if (!Number.isNaN(idx)) deleteCard(idx);
  });

  // Modal
  document.getElementById('btn-modal-close').addEventListener('click',   closeModal);
  document.getElementById('btn-modal-cancel').addEventListener('click',  closeModal);
  document.getElementById('btn-modal-confirm').addEventListener('click', confirmAddCard);
  document.getElementById('modal-en').addEventListener('keydown', e => {
    if (e.key === 'Enter') confirmAddCard();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  // Arranque
  deck = buildDeck();
  showCard(currentIndex);
  updateLevelBadge();
});
