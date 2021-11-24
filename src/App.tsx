import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import { Routes } from './containers/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/news">News </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </header>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
