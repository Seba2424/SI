import React, { useEffect, useState } from 'react';

function OrderList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de la recepción automática de la lista de productos
    setProducts([
      { name: 'Producto 1' },
      { name: 'Producto 2' },
      { name: 'Producto 3' }
    ]);
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;