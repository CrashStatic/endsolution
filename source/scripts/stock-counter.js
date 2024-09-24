const display = document.querySelector('#countdown .stock__counter-display');

function countDown() {
  let timeLeft = 1800;
  const time = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft --; // Уменьшаем оставшееся время
      const hours = timeLeft / 3600 ^ 0,
        minutes = (timeLeft - hours * 3600) / 60 ^ 0, // Перевод в минуты
        seconds = timeLeft - hours * 3600 - minutes * 60, // Перевод в секунды
        newTime = `${hours < 10 ? `0${ hours}` : hours} : ${minutes < 10 ? `0${ minutes}` : minutes} : ${seconds < 10 ? `0${ seconds}` : seconds}`;
      display.textContent = newTime; // Обновляем отображаемое время
    } else {
      clearInterval(time); // Очищаем интервал
      timeLeft = 1800; // Сбрасываем время на начальное значение
      countDown(); // Запускаем таймер заново
    }
  }, 1000); // Интервал в 1000 мс (1 секунда)
}

countDown();
