import {createPhotos} from './data.js';

const picturesListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPhotos();
const picturesListFragment = document.createDocumentFragment();

  for (let x = 0; x < posts.length; x++) {
    const templateClone = newTemplate.cloneNode(true);
    const urlBlock = templateClone.querySelector('.picture__img');
    urlBlock.src = posts[x].url;
    urlBlock.alt = posts[x].description;
    const likesBlock = templateClone.querySelector('.picture__likes');
    likesBlock.innerHTML = posts[x].likes;
    const commentsBlock = templateClone.querySelector('.picture__comments');
    commentsBlock.innerHTML = posts[x].comments.length;
    fragment.appendChild(templateClone);
  }

  spisok.appendChild(fragment);
}

export { renderPhotos };
