import { signIn } from "../lib/firebase";

export const Login = (onNavigate) => {
  const LoginDiv = document.createElement('div');
  const textLogin = document.createElement('h1');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonHome = document.createElement('button');
  const loginEmail = document.createElement('input');
  const loginPassword = document.createElement('input');
  const boxMenu = document.createElement('div');


  textLogin.textContent = 'Ingresa a nuestra comunidad, comparte tus ideas y experiencias por una alimentación saludable.';
  buttonLogin.textContent = '_LOGIN_';
  buttonGoogle.textContent = '______________';
  buttonHome.textContent = 'Volver al Home'
  loginEmail.textContent = 'example@yahoo.es';
  loginPassword.textContent = '********';

  loginEmail.placeholder = 'example@yahoo.es';//.placeholder es usado parauna indicacion corta, para input o textarea. texto que aparecera en el input
  loginEmail.type = 'Email';//.type se usa para indicar el tipo de valor que se ingresara en el input, en este caso es el correo del usuario.
  loginPassword.placeholder = '********';
  loginPassword.type = 'password';

  LoginDiv.className = 'loginContent';
  textLogin.className = 'textLogin';
  boxMenu.className = 'cuadroMenu';
  buttonLogin.className = 'buttonLogin';
  buttonGoogle.className = 'buttonGoogle';
  loginEmail.className = 'loginEmail';
  loginPassword.className = 'loginPassword';


  buttonGoogle.addEventListener('click', () => onNavigate('/muro'));
  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonLogin.addEventListener('click', () => {
    signIn(loginEmail.value, loginPassword.value)
      .then((user) => onNavigate('/muro'))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });

  LoginDiv.appendChild(textLogin);
  boxMenu.appendChild(loginEmail);
  boxMenu.appendChild(loginPassword);
  boxMenu.appendChild(buttonLogin);
  boxMenu.appendChild(buttonGoogle);
  LoginDiv.appendChild(boxMenu);

  LoginDiv.appendChild(buttonHome);

  return LoginDiv;




};
