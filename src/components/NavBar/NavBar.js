import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
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