import { getAuth } from "firebase/auth";
export const Login = (onNavigate) => {
  const LoginDiv = document.createElement('div');  
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const loginEmail = document.createElement('input');
  const loginPassword = document.createElement('input');
  

  LoginDiv.textContent = 'Ingresa a nuestra comunidad, comparte tus ideas y experiencias por una alimentación saludable.';
  buttonLogin.textContent = 'LOGIN';
  buttonGoogle.textContent = 'Login whith Google';
  loginEmail.textContent = 'example@yahoo.es';
  loginPassword.textContent = '********'

  loginEmail.placeholder = 'example@yahoo.es';//.placeholder es usado parauna indicacion corta, para input o textarea. texto que aparecera en el input
  loginEmail.type = 'Email';//.type se usa para indicar el tipo de valor que se ingresara en el input, en este caso es el correo del usuario.

  loginPassword.placeholder = '********';
  loginPassword.type = 'password';

  LoginDiv.className = 'loginContent';
  buttonLogin.className = 'buttonLogin';
  buttonGoogle.className = 'buttonGoogle';
  loginEmail.className = 'loginEmail';
  loginPassword.className = 'loginPassword';

    
   

  buttonLogin.addEventListener('click', () => onNavigate('/'));
  buttonGoogle.addEventListener('click',() => onNavigate('/login'));
  buttonGoogle.addEventListener('click', () => signIn().then(()=> onNavigate('/muro')));
 

  

  LoginDiv.appendChild(buttonLogin);
  LoginDiv.appendChild(buttonGoogle);
  LoginDiv.appendChild(loginEmail);
  LoginDiv.appendChild(loginPassword);
  return LoginDiv;
};

//consultar por que no puedo ponerlo todo en un solo appendchild
//consultar por que no me refresca la IU

