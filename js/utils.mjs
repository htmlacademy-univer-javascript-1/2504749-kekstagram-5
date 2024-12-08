
// Функция для генерации случаного числа в заданном диапазоне
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInteger };
