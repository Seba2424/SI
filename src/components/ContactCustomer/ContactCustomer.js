import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ContactCustomer.css';
import axios from 'axios';

function ContactCustomer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [products, setProducts] = useState([]);
  const [showResponseButtons, setShowResponseButtons] = useState(false);

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setPhone(location.state.phone);
      setProducts(location.state.products);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const productsWithStatus = products.map(product => ({
      ...product,
      status: product.collected ? 'Recolectado' : product.unavailable ? 'No disponible' : `Producto similar: ${product.similarName}`
    }));

    axios.post('http://localhost:5000/send-email', {
      email,
      products: productsWithStatus
    })
    .then(response => {
      alert('Correo enviado correctamente');
      setShowResponseButtons(true);
    })
    .catch(error => {
      console.error('Error al enviar el correo', error);
    });
  };

  const handleAccept = () => {
    navigate('/area-pickup');
  };

  const handleReject = () => {
    navigate('/admin-panel');
  };

  return (
    <div className="contact-customer">
      <h1>Contactar al Cliente</h1>
      <p><strong>Teléfono:</strong> {phone}</p>
      <p><strong>Correo:</strong> <input type="email" value={email} onChange={handleChange} /> <button onClick={handleSubmit}>Enviar</button></p>
      <h2>Lista de Productos:</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <div>
              <p><strong>{product.name}</strong></p>
              <p>{product.quantity}</p>
              <p>{product.collected ? 'Recolectado' : product.unavailable ? 'No disponible' : 'Producto similar: ' + (product.similarName || '')}</p>
            </div>
          </li>
        ))}
      </ul>
      {showResponseButtons && (
        <div>
          <button onClick={handleAccept}>Cliente Acepta</button>
          <button onClick={handleReject}>Cliente Rechaza</button>
        </div>
      )}
    </div>
  );
}

export default ContactCustomer;
