import React, { useEffect, useState } from 'react';

function PickerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de la recepción automática de la lista de productos
    setProducts([
      { name: 'Producto 1', collected: false, unavailable: false },
      { name: 'Producto 2', collected: false, unavailable: false },
      { name: 'Producto 3', collected: false, unavailable: false }
    ]);
  }, []);

  const markAsCollected = (index) => {
    const newProducts = [...products];
    newProducts[index].collected = true;
    setProducts(newProducts);
  };

  const markAsUnavailable = (index) => {
    const newProducts = [...products];
    newProducts[index].unavailable = true;
    // Aquí puedes añadir lógica para contactar al cliente
    setProducts(newProducts);
  };

  return (
    <div>
      <h1>Panel del Picker</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}
            {product.collected ? (
              <span> (Recolectado)</span>
            ) : product.unavailable ? (
              <span> (No disponible)</span>
            ) : (
              <>
                <button onClick={() => markAsCollected(index)}>Recolectado</button>
                <button onClick={() => markAsUnavailable(index)}>No disponible</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickerDashboard;
