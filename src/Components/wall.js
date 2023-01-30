import { signOut } from 'firebase/auth';
import { query, collection, getDocs, onSnapshot } from 'firebase/firestore'
import {
  addComment,
  auth,
  deleteComment,
  db,
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

  const q = query(collection(db, 'comment'));
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((docum) => {
      const comment = docum.data();
      newCommentBox.innerHTML += `
      <div class="comment">
      <h5> ${comment.author}</h5>
      <p> ${comment.text}</p>
      <button>Eliminar</button>
      </div>
      `;
    });
  });

  onSnapshot(q, (querySnapshot) => {
    let newComment = '';
    querySnapshot.forEach((docum) => {
      const comment = docum.data();
      newComment += `
      <div class="comment">
      <h5> ${comment.author}</h5>
      <p> ${comment.text}</p>
      <button>Eliminar</button>
      </div>
      `;
    });
    document.getElementById('postsPrints').innerHTML = newComment;
  });

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
  // eslint-disable-next-line no-console
  newCommentBox.querySelectorAll('.btnDelete').forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
      console.log('holas');
      // eslint-disable-next-line no-console
      e.preventDefault();
      deleteComment(button.dataset.id);
    });
  });

  return muroDiv;
};
