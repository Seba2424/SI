import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import starLogo from '../Assets/Líder_logo.png';

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src={starLogo} alt="Star Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Lista de Productos</Link>
        </li>
        <li>
          <Link to="/picker-dashboard">Panel del Picker</Link>
        </li>
        <li>
          <Link to="/admin-panel">Panel de Administración</Link>
        </li>
        <li>
          <Link to="/contact-customer">Contactar al Cliente</Link>
        </li>
        <li>
          <Link to="/pickup-area">Área Pickup</Link>
        </li>
        <li>
          <Link to="/delivery-panel">Panel de Delivery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;