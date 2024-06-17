// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Qué dirá tu mamacita cuando te lleve conmigo?", time: 0},
  { text: "te llevaré mi cholita, lejos muy lejos mi amor", time: 3},
  { text: "uyachaykipas pukay pukaycha", time:5},
  { text: "Sunquchallayta suwaruwasqa", time: 7 },
  { text: "Ima ninqaraq tayta-mamayki?", time:9},
  { text: "Sunquchaykita suwarullaptiy", time:15 },
  { text: "Ima nimantaraq mamayki-taytayki?", time: 17},
  { text: "sikuwan,haytawan hapiruwanqacha", time: 18},
  { text: "Wiksallam kutiramuptiyki", time:19},
  { text: "¿Qué dirá tu mamacita cuando te lleve conmigo?", time: 25 },
  { text: "te llevaré mi cholita, lejos muy lejos mi amor", time: 28 },
  { text: "uyachaykipas pukay pukaycha", time: 31},
  { text: "Sunquchallayta suwaruwasqa", time:34 },
  { text: "Ima ninqaraq tayta-mamayki?", time: 37 },
  { text: "Sunquchaykita suwarullaptiy", time: 40 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);