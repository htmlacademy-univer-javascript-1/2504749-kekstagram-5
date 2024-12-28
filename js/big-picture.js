import { isEscapeKey } from './util.js';

const COMMENTS_STEP = 5;

const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const pictureCaptionElement = bigPictureElement.querySelector('.social__caption');
const socialFooterTextElement = bigPictureElement.querySelector('.social__footer-text');
const commentFragmentelement = document.createDocumentFragment();

let commentsCount = COMMENTS_STEP;
let currentComments = [];

const createComment = (comment) => {
  const newComment = document.createElement('li');
  const imgComment = document.createElement('img');
  const textComment = document.createElement('p');

  newComment.classList.add('social__comment');
  imgComment.classList.add('social__picture');
  textComment.classList.add('social__text');

  imgComment.src = comment.avatar;
  imgComment.alt = comment.name;
  textComment.textContent = comment.message;

  newComment.appendChild(imgComment);
  newComment.appendChild(textComment);
  commentFragmentelement.appendChild(newComment);
};

const renderComments = () => {
  commentListElement.innerHTML = '';
  commentCountElement.innerHTML = '';
  commentsCount = (commentsCount > currentComments.length) ? currentComments.length : commentsCount;

  if (currentComments.length <= COMMENTS_STEP || commentsCount >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  commentCountElement.innerHTML = `${commentsCount} из <span class="comments-count">${currentComments.length}</span> комментариев`;
  currentComments.slice(0, commentsCount).forEach(createComment);
  commentListElement.appendChild(commentFragmentelement);
};

const onLoadCommentsButtonClick = () => {
  commentsCount += COMMENTS_STEP;
  renderComments();
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  commentsCount = COMMENTS_STEP;
  currentComments = [];
  socialFooterTextElement.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCanselbuttonClick = () => {
  hideBigPicture();
};

const openBigPicture = (data) => {
  const {url, comments, likes, description} = data;

  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  bigPictureImageElement.src = url;
  likesCountElement.textContent = likes;
  pictureCaptionElement.textContent = description;

  currentComments = comments.slice();
  renderComments();

  commentsLoaderElement.addEventListener('click', onLoadCommentsButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

cancelButtonElement.addEventListener('click', onCanselbuttonClick);

export { openBigPicture };
