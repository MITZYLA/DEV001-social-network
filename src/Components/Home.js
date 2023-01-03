export const Home = (onNavigate) => {
   
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const textHome = document.createElement('h1');

  HomeDiv.className = "homeContent";
  buttonLogin.className = "buttonLogin";
  textHome.className = "h1";


  buttonLogin.textContent = 'Inicia sesión';
  textHome.textContent = 'Bienvenido a Origen saludable';

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(textHome);
console.log(HomeDiv)

  return HomeDiv;
};
