// main.js
import { names, comments } from './data.js';
import { getRandomInt, useNumbersImage, useNumbersID } from './utils.js';

function generateComment() {
  const commentPersons = [];
  for (let i = 1; i <= getRandomInt(1, 30); i++) {
    let newID;
    do {
      newID = getRandomInt(1, 12345);
    } while (useNumbersID.includes(newID));
    useNumbersID.push(newID);

    const commentPerson = [];
    for (let j = 1; j <= getRandomInt(1, 2); j++) {
      commentPerson.push(comments[getRandomInt(0, comments.length - 1)]);
    }

    commentPersons.push({
      id: newID,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`, // Здесь добавлен
      message: commentPerson.join(' '),
      name: names[getRandomInt(0, names.length - 1)],
    });
  }
  return commentPersons;
}

function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    let randomNumberImage;
    do {
      randomNumberImage = getRandomInt(1, 25);
    } while (useNumbersImage.includes(randomNumberImage));
    useNumbersImage.push(randomNumberImage);

    const photo = {
      id: i,
      url: `photos/${randomNumberImage}.jpg`, // Здесь добавлен
      description: `Описание фотографии ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComment(),
    };
    photos.push(photo);
  }
  return photos;
}

const photos = generatePhotos();
photos();
