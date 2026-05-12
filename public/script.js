// =============================================
//  FLASHENGLISH — MAZO DE FRASES POR NIVEL
//
//  Nivel 1 — Palabra en contexto mínimo (sujeto + verbo + objeto)
//  Nivel 2 — Frases con dos palabras clave en presente simple
//  Nivel 3 — Frases con sentido de tiempo (pasado / presente / futuro / preguntas)
//  Nivel 4 — Estructuras complejas (condicionales, voz pasiva, reported speech)
//  Nivel 5 — Frases sofisticadas con vocabulario avanzado y matices
//
//  Cada tarjeta: { en, es, hint }
//    en   → frase en inglés (lo que ve el usuario)
//    es   → traducción aceptada en español
//    hint → etiqueta que describe la estructura
// =============================================

const WORDS_BY_LEVEL = {

  // ─────────────────────────────────────────
  //  NIVEL 1 — Contexto mínimo (100 frases)
  //  Estructura: sujeto + verbo + palabra clave
  //  Una sola palabra destacada por frase
  // ─────────────────────────────────────────
  1: [
    { en: 'I eat an apple.',              es: 'Yo como una manzana.',            hint: 'presente simple' },
    { en: 'She drinks water.',            es: 'Ella bebe agua.',                 hint: 'presente simple' },
    { en: 'They live in a house.',        es: 'Ellos viven en una casa.',        hint: 'presente simple' },
    { en: 'He has a dog.',                es: 'Él tiene un perro.',              hint: 'presente simple' },
    { en: 'She loves her cat.',           es: 'Ella ama a su gato.',             hint: 'presente simple' },
    { en: 'I read a book.',               es: 'Yo leo un libro.',                hint: 'presente simple' },
    { en: 'He calls his friend.',         es: 'Él llama a su amigo.',            hint: 'presente simple' },
    { en: 'We have a family.',            es: 'Nosotros tenemos una familia.',   hint: 'presente simple' },
    { en: 'I need food.',                 es: 'Yo necesito comida.',             hint: 'presente simple' },
    { en: 'She has no time.',             es: 'Ella no tiene tiempo.',           hint: 'presente simple' },
    { en: 'It is a sunny day.',           es: 'Es un día soleado.',              hint: 'presente simple' },
    { en: 'I sleep at night.',            es: 'Yo duermo de noche.',             hint: 'presente simple' },
    { en: 'She goes to school.',          es: 'Ella va a la escuela.',           hint: 'presente simple' },
    { en: 'He is a good teacher.',        es: 'Él es un buen maestro.',          hint: 'presente simple' },
    { en: 'I sit on the chair.',          es: 'Yo me siento en la silla.',       hint: 'presente simple' },
    { en: 'The food is on the table.',    es: 'La comida está en la mesa.',      hint: 'presente simple' },
    { en: 'I open the window.',           es: 'Yo abro la ventana.',             hint: 'presente simple' },
    { en: 'Close the door, please.',      es: 'Cierra la puerta, por favor.',    hint: 'imperativo' },
    { en: 'I drive a car.',               es: 'Yo manejo un carro.',             hint: 'presente simple' },
    { en: 'We take the bus.',             es: 'Nosotros tomamos el autobús.',    hint: 'presente simple' },
    { en: 'I walk down the street.',      es: 'Yo camino por la calle.',         hint: 'presente simple' },
    { en: 'She lives in the city.',       es: 'Ella vive en la ciudad.',         hint: 'presente simple' },
    { en: 'He is from this country.',     es: 'Él es de este país.',             hint: 'presente simple' },
    { en: 'What is your favorite color?', es: '¿Cuál es tu color favorito?',     hint: 'pregunta simple' },
    { en: 'I love music.',                es: 'Yo amo la música.',               hint: 'presente simple' },
    { en: 'She checks her phone.',        es: 'Ella revisa su teléfono.',        hint: 'presente simple' },
    { en: 'I need money.',                es: 'Yo necesito dinero.',             hint: 'presente simple' },
    { en: 'He goes to work.',             es: 'Él va al trabajo.',               hint: 'presente simple' },
    { en: 'We play a game.',              es: 'Nosotros jugamos un juego.',      hint: 'presente simple' },
    { en: 'The sun is bright today.',     es: 'El sol está brillante hoy.',      hint: 'presente simple' },
    { en: 'I see the moon.',              es: 'Yo veo la luna.',                 hint: 'presente simple' },
    { en: 'It starts to rain.',           es: 'Empieza a llover.',               hint: 'presente simple' },
    { en: 'We sit under the tree.',       es: 'Nos sentamos bajo el árbol.',     hint: 'presente simple' },
    { en: 'She picks a flower.',          es: 'Ella recoge una flor.',           hint: 'presente simple' },
    { en: 'A bird sings outside.',        es: 'Un pájaro canta afuera.',         hint: 'presente simple' },
    { en: 'I catch a fish.',              es: 'Yo atrapo un pez.',               hint: 'presente simple' },
    { en: 'I eat bread for breakfast.',   es: 'Yo como pan en el desayuno.',     hint: 'presente simple' },
    { en: 'She drinks milk.',             es: 'Ella bebe leche.',                hint: 'presente simple' },
    { en: 'He drinks coffee.',            es: 'Él bebe café.',                   hint: 'presente simple' },
    { en: 'She prefers tea.',             es: 'Ella prefiere el té.',            hint: 'presente simple' },
    { en: 'He wears a shirt.',            es: 'Él usa una camisa.',              hint: 'presente simple' },
    { en: 'I lost my shoe.',              es: 'Perdí mi zapato.',                hint: 'pasado simple' },
    { en: 'She wears a hat.',             es: 'Ella usa un sombrero.',           hint: 'presente simple' },
    { en: 'I hurt my eye.',               es: 'Me lastimé el ojo.',              hint: 'pasado simple' },
    { en: 'Raise your hand.',             es: 'Levanta tu mano.',                hint: 'imperativo' },
    { en: 'I feel it in my heart.',       es: 'Lo siento en mi corazón.',        hint: 'presente simple' },
    { en: 'Write the word here.',         es: 'Escribe la palabra aquí.',        hint: 'imperativo' },
    { en: 'Show me the letter.',          es: 'Muéstrame la letra.',             hint: 'imperativo' },
    { en: 'Say the number.',              es: 'Di el número.',                   hint: 'imperativo' },
    { en: 'I have a dream.',              es: 'Yo tengo un sueño.',              hint: 'presente simple' },
    { en: 'I go to bed early.',           es: 'Me voy a la cama temprano.',      hint: 'presente simple' },
    { en: 'She cleans the room.',         es: 'Ella limpia la habitación.',      hint: 'presente simple' },
    { en: 'He cooks in the kitchen.',     es: 'Él cocina en la cocina.',         hint: 'presente simple' },
    { en: 'I use the bathroom.',          es: 'Yo uso el baño.',                 hint: 'presente simple' },
    { en: 'We work in the garden.',       es: 'Nosotros trabajamos en el jardín.',hint:'presente simple' },
    { en: 'Kids play in the park.',       es: 'Los niños juegan en el parque.',  hint: 'presente simple' },
    { en: 'I buy it at the store.',       es: 'Lo compro en la tienda.',         hint: 'presente simple' },
    { en: 'She shops at the market.',     es: 'Ella compra en el mercado.',      hint: 'presente simple' },
    { en: 'He goes to the bank.',         es: 'Él va al banco.',                 hint: 'presente simple' },
    { en: 'She works at the hospital.',   es: 'Ella trabaja en el hospital.',    hint: 'presente simple' },
    { en: 'The doctor helps the child.',  es: 'El médico ayuda al niño.',        hint: 'presente simple' },
    { en: 'The baby cries at night.',     es: 'El bebé llora de noche.',         hint: 'presente simple' },
    { en: 'The man reads the paper.',     es: 'El hombre lee el periódico.',     hint: 'presente simple' },
    { en: 'The woman cooks dinner.',      es: 'La mujer cocina la cena.',        hint: 'presente simple' },
    { en: 'The boy runs fast.',           es: 'El chico corre rápido.',          hint: 'presente simple' },
    { en: 'The girl sings well.',         es: 'La chica canta bien.',            hint: 'presente simple' },
    { en: 'My mother is kind.',           es: 'Mi madre es amable.',             hint: 'presente simple' },
    { en: 'His father works hard.',       es: 'Su padre trabaja duro.',          hint: 'presente simple' },
    { en: 'My brother is tall.',          es: 'Mi hermano es alto.',             hint: 'presente simple' },
    { en: 'Her sister is smart.',         es: 'Su hermana es inteligente.',      hint: 'presente simple' },
    { en: 'What is your name?',           es: '¿Cuál es tu nombre?',             hint: 'pregunta simple' },
    { en: 'This year is busy.',           es: 'Este año está ocupado.',          hint: 'presente simple' },
    { en: 'The week starts Monday.',      es: 'La semana empieza el lunes.',     hint: 'presente simple' },
    { en: 'This month is cold.',          es: 'Este mes hace frío.',             hint: 'presente simple' },
    { en: 'It is one hour late.',         es: 'Es una hora tarde.',              hint: 'presente simple' },
    { en: 'Wait one minute.',             es: 'Espera un minuto.',               hint: 'imperativo' },
    { en: 'Wake up in the morning.',      es: 'Despierta en la mañana.',         hint: 'imperativo' },
    { en: 'Rest in the afternoon.',       es: 'Descansa en la tarde.',           hint: 'imperativo' },
    { en: 'It is evening now.',           es: 'Ya es de noche.',                 hint: 'presente simple' },
    { en: 'Do it today.',                 es: 'Hazlo hoy.',                      hint: 'imperativo' },
    { en: 'Come back tomorrow.',          es: 'Regresa mañana.',                 hint: 'imperativo' },
    { en: 'It happened yesterday.',       es: 'Sucedió ayer.',                   hint: 'pasado simple' },
    { en: 'It is very hot.',              es: 'Hace mucho calor.',               hint: 'presente simple' },
    { en: 'The water is cold.',           es: 'El agua está fría.',              hint: 'presente simple' },
    { en: 'He is a big man.',             es: 'Él es un hombre grande.',         hint: 'presente simple' },
    { en: 'It is a small house.',         es: 'Es una casa pequeña.',            hint: 'presente simple' },
    { en: 'She is a good person.',        es: 'Ella es una buena persona.',      hint: 'presente simple' },
    { en: 'This is bad news.',            es: 'Esta es una mala noticia.',       hint: 'presente simple' },
    { en: 'I buy a new phone.',           es: 'Compro un teléfono nuevo.',       hint: 'presente simple' },
    { en: 'The old man smiles.',          es: 'El hombre viejo sonríe.',         hint: 'presente simple' },
    { en: 'She is very happy.',           es: 'Ella está muy feliz.',            hint: 'presente simple' },
    { en: 'He looks sad today.',          es: 'Él parece triste hoy.',           hint: 'presente simple' },
    { en: 'Drive fast, we are late.',     es: 'Maneja rápido, llegamos tarde.',  hint: 'imperativo' },
    { en: 'Walk slowly, please.',         es: 'Camina despacio, por favor.',     hint: 'imperativo' },
    { en: 'The shop is open now.',        es: 'La tienda está abierta ahora.',   hint: 'presente simple' },
    { en: 'The bank is closed today.',    es: 'El banco está cerrado hoy.',      hint: 'presente simple' },
    { en: 'Say yes or no.',              es: 'Di sí o no.',                     hint: 'imperativo' },
    { en: 'She always says yes.',         es: 'Ella siempre dice que sí.',       hint: 'presente simple' },
  ],

  // ─────────────────────────────────────────
  //  NIVEL 2 — Dos palabras clave por frase (100 frases)
  //  Presente simple + vocabulario elemental
  // ─────────────────────────────────────────
  2: [
    { en: 'I booked a hotel near the airport.',         es: 'Reservé un hotel cerca del aeropuerto.',        hint: 'dos palabras clave' },
    { en: 'She bought a ticket for the concert.',       es: 'Ella compró un boleto para el concierto.',      hint: 'dos palabras clave' },
    { en: 'We planned a long travel.',                  es: 'Planeamos un largo viaje.',                     hint: 'dos palabras clave' },
    { en: 'The beach is near the city.',                es: 'La playa está cerca de la ciudad.',             hint: 'dos palabras clave' },
    { en: 'We hiked up the mountain.',                  es: 'Nosotros escalamos la montaña.',                hint: 'dos palabras clave' },
    { en: 'The river crosses the forest.',              es: 'El río cruza el bosque.',                       hint: 'dos palabras clave' },
    { en: 'The island has no bridge.',                  es: 'La isla no tiene puente.',                      hint: 'dos palabras clave' },
    { en: 'She reads the map in the village.',          es: 'Ella lee el mapa en el pueblo.',                hint: 'dos palabras clave' },
    { en: 'He studies a foreign language.',             es: 'Él estudia un idioma extranjero.',              hint: 'dos palabras clave' },
    { en: 'Our class starts at eight.',                 es: 'Nuestra clase empieza a las ocho.',             hint: 'dos palabras clave' },
    { en: 'She finished her homework before the exam.', es: 'Ella terminó su tarea antes del examen.',       hint: 'dos palabras clave' },
    { en: 'He got a good grade at the university.',     es: 'Él obtuvo una buena calificación en la universidad.', hint: 'dos palabras clave' },
    { en: 'I return books to the library.',             es: 'Yo regreso libros a la biblioteca.',            hint: 'dos palabras clave' },
    { en: 'She works in the office downtown.',          es: 'Ella trabaja en la oficina del centro.',        hint: 'dos palabras clave' },
    { en: 'We have a meeting at the office.',           es: 'Tenemos una reunión en la oficina.',            hint: 'dos palabras clave' },
    { en: 'His salary covers the rent.',                es: 'Su salario cubre el alquiler.',                 hint: 'dos palabras clave' },
    { en: 'She fixes the computer with the keyboard.',  es: 'Ella arregla la computadora con el teclado.',   hint: 'dos palabras clave' },
    { en: 'The screen shows a new email.',              es: 'La pantalla muestra un nuevo correo electrónico.',hint:'dos palabras clave' },
    { en: 'Change your password on the website.',       es: 'Cambia tu contraseña en el sitio web.',         hint: 'dos palabras clave' },
    { en: 'I have no internet for my camera.',          es: 'No tengo internet para mi cámara.',             hint: 'dos palabras clave' },
    { en: 'She posts a picture at the concert.',        es: 'Ella publica una foto en el concierto.',        hint: 'dos palabras clave' },
    { en: 'We watch a movie on the big screen.',        es: 'Vemos una película en la pantalla grande.',     hint: 'dos palabras clave' },
    { en: 'The song played at the concert.',            es: 'La canción sonó en el concierto.',              hint: 'dos palabras clave' },
    { en: 'Our team won the match.',                    es: 'Nuestro equipo ganó el partido.',               hint: 'dos palabras clave' },
    { en: 'The player scored and won the prize.',       es: 'El jugador anotó y ganó el premio.',            hint: 'dos palabras clave' },
    { en: 'She organizes a birthday party.',            es: 'Ella organiza una fiesta de cumpleaños.',       hint: 'dos palabras clave' },
    { en: 'I bought a gift and a cake.',                es: 'Compré un regalo y un pastel.',                 hint: 'dos palabras clave' },
    { en: 'They had dinner at a restaurant.',           es: 'Ellos cenaron en un restaurante.',              hint: 'dos palabras clave' },
    { en: 'We ordered from the menu.',                  es: 'Pedimos del menú.',                             hint: 'dos palabras clave' },
    { en: 'The waiter brought the bill.',               es: 'El mesero trajo la cuenta.',                    hint: 'dos palabras clave' },
    { en: 'The doctor gave him medicine.',              es: 'El médico le dio medicina.',                    hint: 'dos palabras clave' },
    { en: 'She has a fever and a headache.',            es: 'Ella tiene fiebre y dolor de cabeza.',          hint: 'dos palabras clave' },
    { en: 'I got medicine at the pharmacy.',            es: 'Conseguí medicina en la farmacia.',             hint: 'dos palabras clave' },
    { en: 'Daily exercise improves health.',            es: 'El ejercicio diario mejora la salud.',          hint: 'dos palabras clave' },
    { en: 'That habit is good for your health.',        es: 'Ese hábito es bueno para tu salud.',            hint: 'dos palabras clave' },
    { en: 'Check the weather before traveling.',        es: 'Revisa el clima antes de viajar.',              hint: 'dos palabras clave' },
    { en: 'A cloud covers the sun.',                    es: 'Una nube cubre el sol.',                        hint: 'dos palabras clave' },
    { en: 'Strong wind brings the storm.',              es: 'El viento fuerte trae la tormenta.',            hint: 'dos palabras clave' },
    { en: 'Snow falls every winter season.',            es: 'La nieve cae cada estación de invierno.',       hint: 'dos palabras clave' },
    { en: 'Flowers bloom in the spring.',               es: 'Las flores florecen en primavera.',             hint: 'dos palabras clave' },
    { en: 'We swim at the beach in summer.',            es: 'Nadamos en la playa en verano.',                hint: 'dos palabras clave' },
    { en: 'Leaves fall in autumn.',                     es: 'Las hojas caen en otoño.',                      hint: 'dos palabras clave' },
    { en: 'The lion hunts in the forest.',              es: 'El león caza en el bosque.',                    hint: 'dos palabras clave' },
    { en: 'A tiger and an elephant crossed the river.', es: 'Un tigre y un elefante cruzaron el río.',       hint: 'dos palabras clave' },
    { en: 'The monkey climbs the tree.',                es: 'El mono trepa el árbol.',                       hint: 'dos palabras clave' },
    { en: 'The rabbit hides from the snake.',           es: 'El conejo se esconde de la serpiente.',         hint: 'dos palabras clave' },
    { en: 'The horse and the cow are on the farm.',     es: 'El caballo y la vaca están en la granja.',      hint: 'dos palabras clave' },
    { en: 'She wore a red shirt and blue shoes.',       es: 'Ella usó una camisa roja y zapatos azules.',    hint: 'dos palabras clave' },
    { en: 'The black cat sat on the white chair.',      es: 'El gato negro se sentó en la silla blanca.',    hint: 'dos palabras clave' },
    { en: 'Paint it green and orange.',                 es: 'Píntalas de verde y naranja.',                  hint: 'dos palabras clave' },
    { en: 'Mix purple and pink for brown.',             es: 'Mezcla morado y rosa para obtener marrón.',     hint: 'dos palabras clave' },
    { en: 'The tall man and the short woman talked.',   es: 'El hombre alto y la mujer baja hablaron.',      hint: 'dos palabras clave' },
    { en: 'The heavy box and the light bag are here.',  es: 'La caja pesada y la bolsa ligera están aquí.',  hint: 'dos palabras clave' },
    { en: 'Keep it clean and quiet.',                   es: 'Mantenlo limpio y tranquilo.',                  hint: 'dos palabras clave' },
    { en: 'The dirty street was loud.',                 es: 'La calle sucia era ruidosa.',                   hint: 'dos palabras clave' },
    { en: 'She is busy but free tonight.',              es: 'Ella está ocupada pero libre esta noche.',      hint: 'dos palabras clave' },
    { en: 'He broke his lunch during the meeting.',     es: 'Él interrumpió su almuerzo durante la reunión.',hint: 'dos palabras clave' },
    { en: 'We had breakfast before the exam.',          es: 'Desayunamos antes del examen.',                 hint: 'dos palabras clave' },
    { en: 'He ordered dinner from the menu.',           es: 'Él pidió la cena del menú.',                    hint: 'dos palabras clave' },
    { en: 'She checked the email and the password.',    es: 'Ella revisó el correo y la contraseña.',        hint: 'dos palabras clave' },
    { en: 'The sport requires a team and a player.',    es: 'El deporte requiere un equipo y un jugador.',   hint: 'dos palabras clave' },
    { en: 'He drives the car to the airport.',          es: 'Él conduce el carro al aeropuerto.',            hint: 'dos palabras clave' },
    { en: 'She walks her dog in the park.',             es: 'Ella pasea a su perro en el parque.',           hint: 'dos palabras clave' },
    { en: 'They read a book in the library.',           es: 'Ellos leyeron un libro en la biblioteca.',      hint: 'dos palabras clave' },
    { en: 'We drank coffee and tea.',                   es: 'Bebimos café y té.',                            hint: 'dos palabras clave' },
    { en: 'He saved money at the bank.',                es: 'Él ahorró dinero en el banco.',                 hint: 'dos palabras clave' },
    { en: 'She found a gift and a cake.',               es: 'Ella encontró un regalo y un pastel.',          hint: 'dos palabras clave' },
    { en: 'They crossed the bridge over the river.',    es: 'Ellos cruzaron el puente sobre el río.',        hint: 'dos palabras clave' },
    { en: 'The bird flew over the forest.',             es: 'El pájaro voló sobre el bosque.',               hint: 'dos palabras clave' },
    { en: 'The fish swam under the bridge.',            es: 'El pez nadó bajo el puente.',                   hint: 'dos palabras clave' },
    { en: 'She learned the language in the village.',   es: 'Ella aprendió el idioma en el pueblo.',         hint: 'dos palabras clave' },
    { en: 'He used the map to find the island.',        es: 'Él usó el mapa para encontrar la isla.',        hint: 'dos palabras clave' },
    { en: 'I need water and food right now.',           es: 'Necesito agua y comida ahora mismo.',           hint: 'dos palabras clave' },
    { en: 'She left her phone and wallet behind.',      es: 'Ella dejó su teléfono y cartera atrás.',        hint: 'dos palabras clave' },
    { en: 'The doctor and the teacher help people.',    es: 'El médico y el maestro ayudan a las personas.', hint: 'dos palabras clave' },
    { en: 'My brother and sister came to the party.',   es: 'Mi hermano y hermana vinieron a la fiesta.',    hint: 'dos palabras clave' },
    { en: 'The baby and the child cried.',              es: 'El bebé y el niño lloraron.',                   hint: 'dos palabras clave' },
    { en: 'The man and the woman shared a meal.',       es: 'El hombre y la mujer compartieron una comida.', hint: 'dos palabras clave' },
    { en: 'The boy and the girl sang a song.',          es: 'El chico y la chica cantaron una canción.',     hint: 'dos palabras clave' },
    { en: 'Her mother and father traveled.',            es: 'Su madre y padre viajaron.',                    hint: 'dos palabras clave' },
    { en: 'We need a computer and internet.',           es: 'Necesitamos una computadora e internet.',       hint: 'dos palabras clave' },
    { en: 'She bought a camera at the market.',         es: 'Ella compró una cámara en el mercado.',         hint: 'dos palabras clave' },
    { en: 'He lost his ticket and his map.',            es: 'Él perdió su boleto y su mapa.',                hint: 'dos palabras clave' },
    { en: 'The pig and the chicken are on the farm.',   es: 'El cerdo y el pollo están en la granja.',       hint: 'dos palabras clave' },
    { en: 'She has a habit of morning exercise.',       es: 'Ella tiene el hábito del ejercicio matutino.',  hint: 'dos palabras clave' },
    { en: 'They watched the sunset at the beach.',      es: 'Vieron el atardecer en la playa.',              hint: 'dos palabras clave' },
    { en: 'He checked his email and salary.',           es: 'Él revisó su correo y su salario.',             hint: 'dos palabras clave' },
    { en: 'The waiter and the cook work together.',     es: 'El mesero y el cocinero trabajan juntos.',      hint: 'dos palabras clave' },
    { en: 'We hiked and then camped in the forest.',    es: 'Caminamos y luego acampamos en el bosque.',     hint: 'dos palabras clave' },
    { en: 'She studies and works at the same time.',    es: 'Ella estudia y trabaja al mismo tiempo.',       hint: 'dos palabras clave' },
    { en: 'He writes a report in the office.',          es: 'Él escribe un informe en la oficina.',          hint: 'dos palabras clave' },
    { en: 'The storm hit the city and the village.',    es: 'La tormenta golpeó la ciudad y el pueblo.',     hint: 'dos palabras clave' },
    { en: 'The snake and the rabbit crossed the road.', es: 'La serpiente y el conejo cruzaron el camino.',  hint: 'dos palabras clave' },
    { en: 'She mixed yellow and blue for green.',       es: 'Ella mezcló amarillo y azul para obtener verde.',hint:'dos palabras clave' },
    { en: 'He wore a hat and a brown shirt.',           es: 'Él usó un sombrero y una camisa marrón.',       hint: 'dos palabras clave' },
    { en: 'They drank milk and coffee after dinner.',   es: 'Ellos bebieron leche y café después de la cena.',hint:'dos palabras clave' },
    { en: 'She cleaned the kitchen and the bathroom.',  es: 'Ella limpió la cocina y el baño.',              hint: 'dos palabras clave' },
    { en: 'The garden and the park were beautiful.',    es: 'El jardín y el parque eran hermosos.',          hint: 'dos palabras clave' },
    { en: 'He saved the contract and the report.',      es: 'Él guardó el contrato y el informe.',           hint: 'dos palabras clave' },
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

  // Mostrar frase + etiqueta de estructura
  document.getElementById('card-word').textContent        = card.en;
  document.getElementById('card-answer-text').textContent = card.es;

  const hintEl = document.getElementById('card-hint');
  if (hintEl) hintEl.textContent = card.hint ? `[ ${card.hint} ]` : '';

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

  const flashcard = document.getElementById('flashcard');
  const front     = flashcard.querySelector('.card-front');

  // Aceptar múltiples traducciones separadas por /
  const accepted   = deck[currentIndex].es.split('/').map(a => normalizeFrase(a));
  const isCorrect  = accepted.includes(normalizeFrase(userAns));

  const data = loadData();
  data.totalCorrect += isCorrect ? 1 : 0;
  data.totalWrong   += isCorrect ? 0 : 1;

  if (!isCorrect) {
    // Guardar la frase en inglés como "palabra difícil"
    const key = deck[currentIndex].en.slice(0, 60); // recortar para no saturar
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
    feedback.textContent = `Incorrecto. Traducción: "${deck[currentIndex].es}"`;
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
  if (allCards.some(c => c.es.toLowerCase() === es.toLowerCase() ||
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
