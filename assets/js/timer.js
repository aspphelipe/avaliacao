window.onload = function() {
  // Define o tempo inicial de 28 minutos (em segundos)
  let timeLeft = 28 * 60;

  // Seleciona o elemento onde o timer será exibido
  const countdownDisplay = document.getElementById('countdown-timer');

  // Função para atualizar o timer a cada segundo
  function updateTimer() {
    // Calcula minutos e segundos
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Exibe o timer no formato MM:SS
    countdownDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

    // Diminui o tempo restante
    timeLeft--;

    // Quando o tempo acabar, limpa o intervalo e exibe "Tempo Esgotado"
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      countdownDisplay.textContent = "Tempo Esgotado!";
    }
  }

  // Função para formatar os minutos e segundos para sempre ter 2 dígitos
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  // Atualiza o timer a cada segundo
  const timerInterval = setInterval(updateTimer, 1000);

  // Chama a função para iniciar o contador imediatamente
  updateTimer();
};
