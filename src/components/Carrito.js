import React from "react";
import "./carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, pushProductos }) => {
  return (
    <div className="carrito">
      <h2>Tu carrito de compras</h2>
      <p>
        {carrito.length === 0 ? (
          <p>No hay elementos</p>
        ) : (
          carrito.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              carrito={carrito}
              pushProductos={pushProductos}
            />
          ))
        )}
      </p>
    </div>
  );
};

export default Carrito;
