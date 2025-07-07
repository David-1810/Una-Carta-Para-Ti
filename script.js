const firebaseConfig = {
    apiKey: "AIzaSyCIsuPHYYhxQYbz5zTJZyr63xJ100shyoo",
    authDomain: "prueba-5a28c.firebaseapp.com",
    projectId: "prueba-5a28c",
    storageBucket: "prueba-5a28c.firebasestorage.app",
    messagingSenderId: "1003817153957",
    appId: "1:1003817153957:web:aa74e747452f1fe361a44c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const mensajes = {
    triste: [
        "Las nubes no duran para siempre... y detrás de todas está el sol que eres tú 🌤️.",
        "En tus momentos tristes, quiero ser abrigo. Porque tú me diste luz muchas veces 💖.",
        "Llora si lo necesitas... pero nunca olvides que tú eres amor puro. Y yo estoy contigo 🌷.",
        "Tus lágrimas no son debilidad. Son tu alma limpiándose para volver a brillar 💎.",
        "Hasta el cielo más gris se rinde ante tu luz interior. No lo olvides nunca ☀️.",
        "Recuerda que las lágrimas son solo el agua que nutre tu jardín interior 🌼.",
        "Aunque hoy sientas que el cielo pesa, recuerda que después de la tormenta siempre llega el arcoíris 🌈.",
        "Permítete sentir, pero no te quedes ahí. Eres más fuerte de lo que crees 💪.",
        "Cada lágrima que cae es una semilla de fortaleza que florecerá en tu corazón 🌺.",
        "Hoy puede ser un día gris, pero tú eres el sol que ilumina mi vida ☀️.",
        "Cuando sientas que el mundo pesa, recuerda que yo siempre estaré aquí para levantarte 🌟.",
        "Aunque hoy sientas tristeza, recuerda que cada día es una nueva oportunidad para brillar ✨.",
        "Tu tristeza es solo una parte de tu viaje, no define quién eres. Eres una guerrera 🌸."
    ],
    dudar: [
        "Tú eres mucho más fuerte de lo que te das cuenta 💪.",
        "Las dudas no definen tu esencia... solo prueban tu crecimiento 🌱.",
        "Confío en ti, incluso cuando tú no lo haces. Porque yo sé de lo que estás hecha 💫.",
        "No temas avanzar lento. Solo teme quedarte donde ya no creces 🐢.",
        "Eres capaz, valiosa y suficiente. Nunca lo dudes, por favor ✨.",
        "Las dudas son sombras pasajeras. Tu luz es eterna 🌟.",
        "Cada paso que das, por pequeño que sea, te acerca a tus sueños 🌈.",
        "Cuando dudes, recuerda todas las veces que superaste lo imposible 💖.",
        "Las dudas son solo nubes pasajeras. Tu sol interior siempre brilla detrás de ellas ☀️.",
        "No dejes que las dudas apaguen tu luz. Eres una estrella brillante en este universo 🌌.",
        "Cada vez que dudas, recuerda que yo creo en ti. Y eso es lo que importa más 💕.",
        "Las dudas son solo el viento que mueve las hojas. Tú eres el árbol fuerte que resiste 🌳.",
        "Cada vez que te sientas insegura, recuerda que yo siempre estaré aquí para apoyarte 🤗."
    ],
    sonreir: [
        "¿Ya sonreíste hoy? Porque tu sonrisa hace que todo valga la pena 😊.",
        "Te mando un abrazo en forma de letras... y una cosquilla al corazón 💌.",
        "Sonríe, hermosa. Que cada vez que lo haces, el mundo se enamora un poquito más 💕.",
        "Hoy el universo tiene un regalo para ti: una razón más para sonreír 🌸.",
        "Esa sonrisa tuya debería ser patrimonio universal 😍.",
        "Sonríe, incluso cuando no tengas ganas. Tu felicidad es un acto de rebeldía contra la tristeza 💪.",
        "Recuerda que tu sonrisa tiene el poder de iluminar incluso los días más oscuros ✨.",
        "Cada vez que sonríes, el mundo se vuelve un lugar más bonito 🌍.",
        "Tu sonrisa es un regalo que le das al mundo. Nunca dejes de compartirla 🎁.",
        "Sonríe, porque cada día es una nueva oportunidad para ser feliz 😊.",
        "Tu sonrisa es como un rayo de sol que ilumina mi día ☀️.",
        "Sonríe, porque tu felicidad es contagiosa y hace que todos a tu alrededor se sientan mejor 😄.",
        "Cada vez que sonríes, el universo celebra tu existencia 🎉.",
        "Tu sonrisa es la música que alegra mi corazón. Nunca dejes de tocarla 🎶.",
        "Sonríe, porque tu felicidad es un regalo que todos merecen disfrutar 🎁.",
        "Tu sonrisa es como un faro que guía mi camino. Nunca dejes de brillar 🌟.",
        "Sonríe, porque tu alegría es un acto de amor hacia ti misma y hacia el mundo 💖.",
        "Cada vez que sonríes, el universo te abraza con su magia ✨.",
        "Tu sonrisa es un poema que se escribe en el aire. Nunca dejes de recitarlo 📜.",
        "Sonríe, porque tu felicidad es un acto de resistencia ante las adversidades 💪."
    ],
    extrañar: [
        "Si me extrañas, solo cierra los ojos... y ahí estaré, en tu pensamiento más bonito 🫶.",
        "A veces yo también te extraño tanto que me duelen las ganas de abrazarte 🤗.",
        "Cada segundo lejos de ti es una eternidad... pero cada carta me acerca a ti ✉️.",
        "Aunque la distancia exista, mi corazón nunca se va de tu lado 💘.",
        "Si pudieras ver lo mucho que pienso en ti, sabrías que jamás estás sola 🌙.",
        "Extrañarte es como un eco en mi corazón... siempre presente, siempre dulce 💓.",
        "Aunque estemos lejos, siempre estás en mi mente y en mi corazón 💕.",
    ],
    feliz: [
        "Disfruta este momento, celébralo con todo tu ser 🎊. ¡Te lo mereces!",
        "Qué lindo imaginarte sonriendo como una niña feliz. Ese es mi paisaje favorito 💖.",
        "Si estás feliz, que sepas que yo también... porque tu alegría es contagiosa 💃.",
        "Cuando tú ríes, el mundo entero se vuelve más bonito 🥰.",
        "Guarda este momento en tu corazón. Mereces tener miles más como este 🌈.",
        "Tu felicidad es una melodía que quiero escuchar siempre 🎶.",
        "No hay nada más bello que verte feliz por dentro y por fuera ✨.",
        "Esa alegría que llevas hoy... te queda tan bien como una flor 🌺.",
        "Ríe, baila, salta... el mundo necesita más momentos como este, más tú 💕.",
        "Que tu felicidad te abrace incluso cuando nadie más lo haga 🤗."
    ],
    amor: [
        "No hay un motivo... solo quiero decirte que te amo sin razón, sin pausa, sin medida ❤️.",
        "Eres la persona con la que quiero contar todos mis días, incluso los más simples ☀️.",
        "Quiero recordarte que eres mi lugar favorito, incluso cuando estamos lejos 💘.",
        "Te pienso como quien respira... sin querer y a cada instante 🌬️.",
        "Mi forma favorita de pasar el tiempo es contigo... incluso en silencio 🕰️.",
        "A veces me faltan palabras, pero nunca amor por darte 💌.",
        "Contigo aprendí que amar es también cuidar, escuchar, esperar y reír juntos 💑.",
        "Tú eres mi poesía sin versos, mi melodía sin notas 🎵.",
        "Mi amor por ti no necesita razones... solo necesita verte sonreír 💖.",
        "No sé si esto es magia, destino o locura... pero sé que eres tú 🫶.",
        "Eres mi refugio, mi alegría, mi paz... y todo lo que necesito en este mundo 🌍.",
        "Cada día a tu lado es un regalo que nunca dejo de agradecer 🎁.",
        "Te amo sin condiciones, sin límites, sin final... porque tú eres mi todo 💞.",
        "Eres la razón por la que creo en el amor verdadero, en el amor eterno 💘.",
        "Contigo aprendí que el amor no es solo un sentimiento, sino una decisión diaria 💑.",
        "Eres mi sol en los días nublados, mi luna en las noches oscuras 🌙.",
        "Te amo por ser quien eres, por lo que me haces sentir y por todo lo que compartimos 💕.",
        "Eres mi hogar, mi paz, mi alegría... y todo lo que necesito en este mundo 🌎."
    ],
    noDormir: [
        "Cierra los ojos... que yo me quedo despierto pensando en ti 🌙.",
        "Si esta noche no puedes dormir, deja que mis palabras te arropen como una manta suave 🛏️.",
        "A veces el silencio de la noche es solo una pausa para que escuches a tu corazón 💓.",
        "Respira profundo, suelta el día... y recuerda: estás a salvo, estás bien, eres amada 🌌.",
        "Cuando no puedas dormir, piensa en tus momentos más lindos... Espero aprarecer en ellos 💫.",
        "Imagina que te abrazo tan fuerte que se espantan los pensamientos feos 🫂.",
        "Si cierras los ojos, te prometo aparecer en tus sueños con una sonrisa solo para ti 😴.",
        "Las estrellas también te miran esta noche... y te dicen que todo estará bien ⭐.",
        "Tu descanso es sagrado... deja que mi amor te acompañe al cerrar los ojos 💖.",
        "Aunque no estés durmiendo, espero que estés sintiendo paz... porque te la mereces 🌷.",
        "Si la noche se siente larga, recuerda que cada amanecer trae nuevas oportunidades ☀️.",
        "Cuando no puedas dormir, piensa en todas las cosas que te hacen feliz... y deja que te envuelvan como un abrazo cálido 🤗.",
        "La noche puede ser oscura, pero tu luz interior siempre brilla más fuerte que cualquier sombra 🌟."
    ],
    miedo: [
        "El miedo no puede contra tu luz, solo intenta apagarla... pero tú siempre vuelves a brillar ✨.",
        "Estoy contigo, incluso en la oscuridad... sobre todo ahí 💡.",
        "No estás sola. Si tiembla tu alma, que sepas que la mía está abrazándola 🫶.",
        "Valiente no es quien no siente miedo, sino quien sigue adelante a pesar de él 💪.",
        "Si el mundo te asusta, ven a este rincón donde siempre serás cuidada 🛡️.",
        "Tu fuerza es más grande que cualquier sombra. Solo necesitas recordarla 💫.",
        "¿Tienes miedo? Cierra los ojos, respira, y piensa en este mensaje. Estoy aquí 💌.",
        "Nada malo durará para siempre... pero tú sí: tú eres amor que persiste ❤️.",
        "Si sientes miedo, habla conmigo en tu mente... te prometo que escucharé cada palabra 🧘.",
        "Esta carta es tu escudo invisible. Llévala contigo cuando la noche se vuelva densa 🌘."
    ]
};

let ultimaCarta = "";
let ultimoMensaje = "";
let respuestaEnviada = false;

function animarYAbrir(elemento, tipo) {
    ultimaCarta = tipo;
    respuestaEnviada = false
    elemento.classList.add("opening");

    setTimeout(() => {
        elemento.classList.remove("opening");
        mostrarMensaje(tipo);
    }, 600);
}

function mostrarMensaje(tipo) {
  const opciones = mensajes[tipo];
  const mensaje = opciones[Math.floor(Math.random() * opciones.length)];
  ultimoMensaje = mensaje;

  const zonaCartas = document.getElementById("zonaCartas");
  const mensajeDiv = document.getElementById("mensajeMostrado");
  const contenido = document.getElementById("contenidoMensaje");

  // Frases intro personalizadas
  const frasesIntro = {
    triste: "Como estás triste, quiero decirte lo siguiente:",
    dudar: "Como estás dudando de ti, quiero decirte lo siguiente:",
    sonreir: "Como quieres sonreír, quiero decirte lo siguiente:",
    extrañar: "Como me extrañas, quiero decirte lo siguiente:",
    feliz: "Como estás feliz, quiero decirte lo siguiente:",
    noDormir: "Como no puedes dormir, quiero decirte lo siguiente:",
    miedo: "Como tienes miedo, quiero decirte lo siguiente:",
    amor: "Solo porque sí, quiero decirte lo siguiente:"
  };

  const introduccion = frasesIntro[tipo] || "Quiero decirte lo siguiente:";

  contenido.innerText = "";
  mensajeDiv.classList.add("visible");
  mensajeDiv.style.display = "block";
  zonaCartas.classList.add("blur");
  document.querySelector(".cerrar").disabled = false;

  let textoFinal = introduccion + "\n\n" + mensaje;
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < textoFinal.length) {
      contenido.innerText += textoFinal.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 35);
}


function cerrarMensaje() {
  const textarea = document.getElementById("sentimiento");
  const respuesta = textarea.value.trim();

  if (!respuestaEnviada) {
    const ahora = new Date();
    const fecha = ahora.toISOString().split("T")[0];
    const hora = ahora.toTimeString().split(" ")[0];

    db.collection("respuestas_cartas").add({
      carta: ultimaCarta,
      mensaje: ultimoMensaje,
      respuesta: respuesta,
      fecha: fecha,
      hora: hora
    }).then(() => {
      console.log("Respuesta enviada automáticamente al cerrar.");
    }).catch((error) => {
      console.error("Error al guardar al cerrar:", error);
    });
  }

  const mensajeDiv = document.getElementById("mensajeMostrado");
  mensajeDiv.classList.remove("visible");
  mensajeDiv.style.display = "none";
  document.getElementById("escribeAlgo").style.display = "none";
  document.getElementById("zonaCartas").classList.remove("blur");

  textarea.value = "";
  textarea.style.display = "block";
  document.querySelector("button.enviar").style.display = "inline-block";
}


function enviarRespuesta() {
    const textarea = document.getElementById("sentimiento");
    const respuesta = textarea.value.trim();

    if (!respuesta) {
        document.getElementById("escribeAlgo").style.display = "block";
        return;
    }

    const cerrarBtn = document.querySelector(".cerrar");
    cerrarBtn.disabled = true;

    const ahora = new Date();
    const fecha = ahora.toISOString().split("T")[0];
    const hora = ahora.toTimeString().split(" ")[0];

    db.collection("respuestas_cartas").add({
        carta: ultimaCarta,
        mensaje: ultimoMensaje,
        respuesta: respuesta,
        fecha: fecha,
        hora: hora
    })
        .then(() => {
            respuestaEnviada = true;        
            document.getElementById("mensajeConfirmacion").style.display = "block";
            textarea.value = "";
            cerrarBtn.disabled = false;
            setTimeout(() => {
                document.getElementById("mensajeConfirmacion").style.display = "none";
                textarea.style.display = "none";
                document.querySelector("button.enviar").style.display = "none";
            }, 3000);
        })
        .catch((error) => {
            console.error("Error al guardar:", error);
            console.log("Ocurrió un error al guardar 😔");
            cerrarBtn.disabled = false;
        });
}
