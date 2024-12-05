export const useNumbersImage = [];
export const useNumbersID = [];

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getRandomInteger, isEscapeKey};
