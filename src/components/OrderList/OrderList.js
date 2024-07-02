import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderList.css';
import panImg from '../Assets/pan_marraqueta.jpg'; 
import manzanaImg from '../Assets/Manzana-Fuji-granel.jpg'; 
import lecheImg from '../Assets/Leche_sin.jpg'; 
import MonsterNegra from '../Assets/MonsterNegra.jpg';

function OrderList() {
  const navigate = useNavigate();
  const user = { name: 'SebastianC', email: 's.calfunao01@ufromail.cl', phone: '+569 1234 5678' ,typeOrder: 'Retiro en tienda'};
  const products = [
    { name: 'Pan Marraqueta', quantity: '500gr aprox', image: panImg },
    { name: 'Manzanas Fuji', quantity: '1kg aprox', image: manzanaImg },
    { name: 'Leche Colum sin Lactosa', quantity: '1 litro', image: lecheImg },
    { name: 'Monster Absolutely Zero', quantity: '500ml', image: MonsterNegra}
  ];

  const handleGoToPicker = () => {
    navigate('/picker-dashboard', { state: { user, products } });
  };

  return (
    <div className="order-list">
      <h1>Lista de Productos</h1>
      <p><strong>Usuario:</strong> {user.name}</p>
      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Tipo de Orden:</strong> {user.typeOrder}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <div>
              <p><strong>{product.name}</strong></p>
              <p>{product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleGoToPicker}>Ir al Panel del Picker</button>
    </div>
  );
}

export default OrderList;
