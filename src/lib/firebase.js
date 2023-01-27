/* eslint-disable spaced-comment */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  //deleteDoc,
  //doc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbhXAdP485zjZ5dJNyfxh2p31fsKzfBYw',
  authDomain: 'equilibrio-saludable.firebaseapp.com',
  projectId: 'equilibrio-saludable',
  storageBucket: 'equilibrio-saludable.appspot.com',
  messagingSenderId: '518710435585',
  appId: '1:518710435585:web:4c9bfcc5ca506b2b9b4500',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// eslint-disable-next-line max-len
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password); // función ingreso con correo y contraseña
export const signInGoogle = (onNavigate) => { // funcion de ingreso con cta google
  // eslint-disable-next-line arrow-parens, no-unused-vars
  signInWithPopup(auth, provider).then(result => {
    onNavigate('/muro');
  // eslint-disable-next-line arrow-parens
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export const addComment = (text, author) => {
  addDoc(collection(db, 'comment'), { // el objeto db es la conección a la base de datos
    text,
    author,
    date: new Date(),
  });
}; // funcion que lleva los posts a la coleccion de firestore

export const showComments = () => { //funcion que lleva los posts a consola IU y a IU.
  const allComments = query(collection(db, 'comment'));
  onSnapshot(allComments, (querySnapshot) => {
    let newComment = '';
    querySnapshot.forEach((docum) => {
      const comment = docum.data();
      // eslint-disable-next-line no-console
      console.log('el comentario', comment.text);
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
};

// export const deleteComment = (id) => deleteDoc(doc(db, 'comment', id));
