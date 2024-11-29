import {createPhotos} from './data.js';

const picturesListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPhotos();
const picturesListFragment = document.createDocumentFragment();

pictures.forEach(({url,description,likes,comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImage = pictureElement.querySelector('.picture_img');
  pictureImage.src = url;
  pictureImage.alt = description;
  pictureElement.querySelector('.picture_likes').textContent = likes;
  pictureElement.querySelector('.picture_comments').textContent = comments.length;
  picturesListFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(picturesListFragment);


