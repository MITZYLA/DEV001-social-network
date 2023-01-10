import { Home } from './components/Home.js';
import { Login } from './components/Login.js';
import { Muro } from './components/wall.js';
//console.log(holas)


const rootDiv = document.getElementById('root');

const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
  
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
  
    rootDiv.appendChild(routes[pathname]);
  };

const routes = {
  '/': Home(onNavigate),  
  '/login': Login(onNavigate),
  '/muro': Muro(onNavigate),

};


const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]);
};

rootDiv.appendChild(component);