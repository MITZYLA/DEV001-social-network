export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  
  const buttonLogin = document.createElement('button');

  
  buttonLogin.textContent = 'Inicia sesión';

  
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};