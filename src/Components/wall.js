import { signOut } from 'firebase/auth';
import {
  query,
  collection,
  onSnapshot,
} from 'firebase/firestore';

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
  newCommentBox.setAttribute('id', 'containerComment'); // se agrega un atributo de clase a un elemento element.setAttribute(name, value)

  wallMenu.textContent = 'EXPERIENCIAS Y COMENTARIOS';
  postButton.textContent = 'Publicar';
  signOutButton.textContent = 'CERRAR SESIÓN';

  newCommentBox.id = 'postsPrints';
  commentBox.id = 'commentBox';
  postBox.id = 'postBox';
  signOutButton.id = 'signOutButton';
  muroDiv.className = 'wallCont';
  postButton.className = 'enterPost';
  wallMenu.className = 'textoMuro';

  muroDiv.appendChild(wallMenu);
  muroDiv.appendChild(commentBox);
  muroDiv.appendChild(postButton);
  muroDiv.appendChild(postBox);
  muroDiv.appendChild(newCommentBox);
  muroDiv.appendChild(signOutButton);

  const q = query(collection(db, 'comment'));

  onSnapshot(q, (querySnapshot) => {
    let newComment = '';
    const postsPrints = document.getElementById('postsPrints');
    querySnapshot.forEach((docum) => {
      const comment = docum.data();
      newComment += `
      <div class='comment'>
      <h5> ${comment.author}</h5>
      <p> ${comment.text}</p>
      <button class='btnEliminar' data-doc-id="${docum.id}" id="${docum.id}-eliminar"  type='button'>Eliminar</button>
      </div>
      `;
    });
    postsPrints.innerHTML = newComment;
    const btnsDelete = newCommentBox.querySelectorAll('.btnEliminar');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => deleteComment(dataset.docId));
    });

    /* for (let i = 0; i < postsPrints.children.length; i++) {
       const button = postsPrints.children[i].lastElementChild;
       button.addEventListener('click', (e) => {
         // eslint-disable-next-line no-console
         // eslint-disable-next-line no-console
         e.preventDefault();
       });
     } */
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

  return muroDiv;
};
