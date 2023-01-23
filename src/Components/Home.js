export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const EnterButton = document.createElement('button');
  const textHome = document.createElement('h1');

  HomeDiv.className = 'homeContent';
  EnterButton.className = 'EnterButton';
  textHome.className = 'textHome';

  EnterButton.textContent = '';
  textHome.textContent = 'Bienvenido a Equilibrio saludable';

  EnterButton.addEventListener('click', () => onNavigate('/login'));
  HomeDiv.appendChild(textHome);
  HomeDiv.appendChild(EnterButton);
  return HomeDiv;
};
