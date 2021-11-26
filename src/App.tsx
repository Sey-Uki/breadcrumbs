import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import { RoutesComponent } from './containers/RoutesComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/news">News </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </header>
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
