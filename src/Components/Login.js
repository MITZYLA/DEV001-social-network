export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');  
  const buttonHome = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  HomeDiv.textContent = 'Ingresa a nuestra comunidad, y comparte tus ideas y experiencias por una alimentación saludable.';
  buttonHome.textContent = 'Regresar al Home';
  buttonGoogle.textContent = 'Login whith Google';

  HomeDiv.className = 'loginContent'
  buttonHome.className = 'buttonHome';
  buttonGoogle.className = 'buttonGoogle';

    


  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonGoogle.addEventListener('click',() => onNavigate('/login'));
  buttonGoogle.addEventListener('click', () => signIn().then(()=> onNavigate('/muro')));

  HomeDiv.appendChild(buttonHome,buttonGoogle);//no me funciona ni ctualiza appendchild

  return HomeDiv;
};

P7