/* ============================================
   JUEGO ESTILO KAHOOT
   ============================================ */
(function initGame(){
  const shell = document.getElementById('game-shell');
  if (!shell) return;

  const TIME_PER_Q = 20; // segundos
  let current = 0;
  let score = 0;
  let correctCount = 0;
  let timer = null;
  let timeLeft = TIME_PER_Q;
  let answered = false;

  function renderStart(){
    shell.innerHTML = `
      <div class="game-start">
        <span class="pill pill--live" style="background:rgba(255,255,255,0.12); color:#fff;">Módulo 01 · Repaso</span>
        <h3>${GAME_TITLE}</h3>
        <p>${GAME_QUESTIONS.length} preguntas, ${TIME_PER_Q} segundos cada una. Responde rápido: entre más rápido aciertes, más puntos ganas.</p>
        <button class="btn btn-primary" id="btn-start-game">Empezar juego →</button>
      </div>
    `;
    document.getElementById('btn-start-game').addEventListener('click', () => {
      current = 0; score = 0; correctCount = 0;
      renderQuestion();
    });
  }

  function renderQuestion(){
    answered = false;
    timeLeft = TIME_PER_Q;
    const item = GAME_QUESTIONS[current];
    const pct = Math.round((current / GAME_QUESTIONS.length) * 100);

    shell.innerHTML = `
      <div class="game-topbar">
        <span>Pregunta ${current + 1} / ${GAME_QUESTIONS.length}</span>
        <span class="game-timer" id="game-timer">${timeLeft}s</span>
      </div>
      <div class="game-progress-bar"><div class="game-progress-fill" style="width:${pct}%"></div></div>
      <div class="game-question">${item.q}</div>
      <div class="game-answers">
        ${item.options.map((opt, i) => `
          <button class="game-answer ans-${i}" data-idx="${i}">
            <span class="shape"></span>${opt}
          </button>
        `).join('')}
      </div>
    `;

    const answerButtons = shell.querySelectorAll('.game-answer');
    answerButtons.forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx, 10), answerButtons));
    });

    const timerEl = document.getElementById('game-timer');
    timer = setInterval(() => {
      timeLeft -= 1;
      timerEl.textContent = `${timeLeft}s`;
      if (timeLeft <= 5) timerEl.classList.add('is-low');
      if (timeLeft <= 0){
        clearInterval(timer);
        if (!answered) handleAnswer(-1, answerButtons);
      }
    }, 1000);
  }

  function handleAnswer(idx, answerButtons){
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const item = GAME_QUESTIONS[current];
    const isCorrect = idx === item.correct;

    if (isCorrect){
      correctCount += 1;
      const speedBonus = Math.max(0, timeLeft) * 20;
      score += 500 + speedBonus;
    }

    answerButtons.forEach(b => {
      b.disabled = true;
      const bIdx = parseInt(b.dataset.idx, 10);
      if (bIdx === item.correct) b.classList.add('is-correct');
      else b.classList.add('is-wrong');
    });

    setTimeout(() => {
      if (current + 1 < GAME_QUESTIONS.length){
        current += 1;
        renderQuestion();
      } else {
        renderResult();
      }
    }, 1300);
  }

  function renderResult(){
    const pct = Math.round((correctCount / GAME_QUESTIONS.length) * 100);
    let msg;
    if (pct >= 90) msg = "Dominio excelente del caso de Carlos y de la fisiología cardiovascular. Estás listo para el siguiente módulo.";
    else if (pct >= 70) msg = "Buen manejo general. Repasa las preguntas falladas antes de avanzar al Módulo 2.";
    else msg = "Vale la pena volver a la sección de contenido y al caso clínico antes de intentarlo de nuevo.";

    shell.innerHTML = `
      <div class="game-result">
        <span class="score-label">Resultado final</span>
        <div class="score-big">${correctCount}/${GAME_QUESTIONS.length}</div>
        <span class="score-label">${score} puntos · ${pct}% de aciertos</span>
        <p class="msg">${msg}</p>
        <div class="game-actions">
          <button class="btn btn-light" id="btn-retry">Volver a intentar</button>
          <a href="index.html" class="btn btn-primary">Ir al mapa de módulos →</a>
        </div>
      </div>
    `;
    document.getElementById('btn-retry').addEventListener('click', renderStart);
  }

  renderStart();
})();
