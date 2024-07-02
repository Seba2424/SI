import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PickerDashboard.css';

function PickerDashboard() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [allMarked, setAllMarked] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [similarProduct, setSimilarProduct] = useState({ index: null, name: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user || { name: '', email: '', phone: '' });
      setProducts(location.state.products || []);
    }
  }, [location.state]);

  useEffect(() => {
    setAllMarked(products.every(product => product.collected || product.unavailable || product.similar));
  }, [products]);

  const markAsCollected = (index) => {
    const newProducts = [...products];
    newProducts[index].collected = true;
    newProducts[index].unavailable = false;
    newProducts[index].similar = false;
    setProducts(newProducts);
  };

  const markAsUnavailable = (index) => {
    const newProducts = [...products];
    newProducts[index].collected = false;
    newProducts[index].unavailable = true;
    newProducts[index].similar = false;
    setProducts(newProducts);
  };

  const markAsSimilar = (index) => {
    setSimilarProduct({ index, name: '' });
  };

  const handleSimilarProductChange = (e) => {
    setSimilarProduct({ ...similarProduct, name: e.target.value });
  };

  const handleSimilarProductSubmit = () => {
    const newProducts = [...products];
    newProducts[similarProduct.index].collected = false;
    newProducts[similarProduct.index].unavailable = false;
    newProducts[similarProduct.index].similar = true;
    newProducts[similarProduct.index].similarName = similarProduct.name;
    setProducts(newProducts);
    setSimilarProduct({ index: null, name: '' });
  };

  return (
    <div className="picker-dashboard">
      <h1>Panel del Picker</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <div>
              <p><strong>{product.name}</strong></p>
              <p>{product.quantity}</p>
            </div>
            <div className="buttons">
              <button
                onClick={() => markAsCollected(index)}
                disabled={product.collected || product.unavailable || product.similar}
                style={{ backgroundColor: product.collected ? 'green' : '' }}
              >
                Recolectado
              </button>
              <button
                onClick={() => markAsUnavailable(index)}
                disabled={product.collected || product.unavailable || product.similar}
                style={{ backgroundColor: product.unavailable ? 'red' : '' }}
              >
                No disponible
              </button>
              <button
                onClick={() => markAsSimilar(index)}
                disabled={product.collected || product.unavailable || product.similar}
              >
                Producto Similar
              </button>
            </div>
          </li>
        ))}
      </ul>
      {similarProduct.index !== null && (
        <div className="similar-product-modal">
          <h2>Ingrese el nombre del producto similar:</h2>
          <input type="text" value={similarProduct.name} onChange={handleSimilarProductChange} />
          <button onClick={handleSimilarProductSubmit}>Guardar</button>
        </div>
      )}
      {allMarked && (
        <button onClick={() => navigate('/contact-customer', { state: { email: user.email, phone: user.phone, products } })}>
          Contactar al Cliente
        </button>
      )}
    </div>
  );
}

export default PickerDashboard;
