import { signOut } from 'firebase/auth';
import {
  addComment,
  showComments,
  auth,
  deleteComment,
} from '../lib/firebase';

// eslint-disable-next-line no-unused-vars
export const Muro = (onNavigate) => {
  const muroDiv = document.createElement('div');
  const wallMenu = document.createElement('div');
  const newCommentBox = document.createElement('div');
  const postBox = document.createElement('form');
  const commentBox = document.createElement('textarea');
  const postButton = document.createElement('button');
  const signOutButton = document.createElement('button');
  const btnDelete = document.createElement('button');
  newCommentBox.setAttribute('id', 'containerComment'); // se agrega un atributo de clase a un elemento element.setAttribute(name, value)

  wallMenu.textContent = 'EXPERIENCIAS Y COMENTARIOS';
  postButton.textContent = 'PUBLICAR';
  signOutButton.textContent = 'CERRAR SESIÓN';

  newCommentBox.id = 'postsPrints';
  commentBox.id = 'commentBox';
  postBox.id = 'postBox';
  signOutButton.id = 'signOutButton';
  muroDiv.className = 'wallCont';
  postButton.className = 'enterPost';
  wallMenu.className = 'textoMuro';
  btnDelete.className = 'btnDelete';

  muroDiv.appendChild(wallMenu);
  muroDiv.appendChild(commentBox);
  muroDiv.appendChild(postButton);
  muroDiv.appendChild(postBox);
  muroDiv.appendChild(newCommentBox);
  muroDiv.appendChild(signOutButton);
  newCommentBox.appendChild(btnDelete);
  // eslint-disable-next-line no-console
  console.log(muroDiv);
  postButton.addEventListener('click', (event) => {
    event.preventDefault();
    addComment(commentBox.value, auth.currentUser.email);
    // eslint-disable-next-line no-console
    console.log(commentBox.value);
  });

  signOutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  });
console.log(showComments());
  newCommentBox.innerHTML = showComments();
  muroDiv.querySelectorAll('.btnDelete').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      deleteComment(button.dataset.id);
    });
  });

  return muroDiv;
};
