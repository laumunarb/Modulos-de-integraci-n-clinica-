# Correlación Clínica — Medicina Semestre 2

Herramienta interactiva para conectar los sistemas del cuerpo humano con casos clínicos reales.

## Estructura
- index.html — Mapa de los 10 módulos (solo Módulo 1 activo)
- modulo1.html — Sistema Cardiovascular: contenido + caso clínico (Carlos) + juego de repaso
- assets/css/styles.css — Estilos de todo el sitio
- assets/js/case-data.js — Preguntas del caso clínico interactivo
- assets/js/game-data.js — 30 preguntas del juego de repaso
- assets/js/module.js — Lógica del caso clínico y del juego
- assets/img/ — Infografías del módulo 1

## Cómo agregar el audio del podcast
1. Sube tu archivo .mp3 a assets/audio/modulo1.mp3
2. En modulo1.html, dentro del bloque con clase "audio-card", reemplaza el parrafo con clase "placeholder-note" por:
   <audio controls src="assets/audio/modulo1.mp3"></audio>

## Como agregar el Modulo 2 y siguientes
1. Duplica modulo1.html y renombralo (ej. modulo2.html)
2. Reemplaza contenido, imagenes en assets/img/ y datos en nuevos archivos case-data-2.js / game-data-2.js
3. En index.html, dentro del array SYSTEMS, cambia live: false a live: true y agrega href: "modulo2.html" en el modulo correspondiente
