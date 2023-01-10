export const Home = (onNavigate) => {
   
  const HomeDiv = document.createElement('div');
  const EnterButton= document.createElement('button');
  const textHome = document.createElement('h1');

  HomeDiv.className = "homeContent";
  EnterButton.className = "EnterButton";
  textHome.className = "h1";


  EnterButton.textContent = 'Ingresar';
  textHome.textContent = 'Bienvenido a Origen saludable';

  EnterButton.addEventListener('click', () => onNavigate('/login'));
  HomeDiv.appendChild(EnterButton);
  HomeDiv.appendChild(textHome);
  //console.log(HomeDiv)

  return HomeDiv;
};
