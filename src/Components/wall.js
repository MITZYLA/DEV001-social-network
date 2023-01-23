import { addComment, showComments } from '../lib/firebase';

// eslint-disable-next-line no-unused-vars
export const Muro = (onNavigate) => {
  const muroDiv = document.createElement('div');
  const postBox = document.createElement('form');
  const commentBox = document.createElement('textarea');
  const postButton = document.createElement('button');
  const wallMenu = document.createElement('div');
  const newCommentBox = document.createElement('div');
  newCommentBox.setAttribute('id', 'containerComment');

  postButton.textContent = 'PUBLICAR';
  wallMenu.textContent = 'EXPERIENCIAS Y COMENTARIOS';

  muroDiv.className = 'wallCont';
  commentBox.id = 'comentBox';
  postBox.id = 'postBox';
  postButton.className = 'enterPost';
  wallMenu.className = 'textoMuro';

  muroDiv.appendChild(wallMenu);
  postBox.appendChild(commentBox);
  postBox.appendChild(postButton);
  muroDiv.appendChild(postBox);
  muroDiv.appendChild(newCommentBox);

  postBox.addEventListener('submit', (event) => {
    event.preventDefault();
    addComment(commentBox.value, window.userEmail);
    // eslint-disable-next-line no-console
    console.log(commentBox.value);
    showComments();
  });

  return muroDiv;
};
