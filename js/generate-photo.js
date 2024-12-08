import { getComment } from './data.mjs';
import { getRandomInteger } from './utils.mjs';

function generatePhoto(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: `Это описание картинки ${index}`,
    likes: getRandomInteger(15, 200),
    comments: getCountComments(),
  };
}

function getCountComments() {
  const limit = getRandomInteger(1, 30);
  const commentsArr = [];
  for (let x = 1; x <= limit; x++) {
    commentsArr.push(getComment());
  }
  return commentsArr;
}

export { generatePhoto };
