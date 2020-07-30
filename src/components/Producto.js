import React from "react";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito

  const catchProducto = (id, nombre) =>
    console.log(`${nombre} añadido al carrito de compra. id: ${id}`);

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio} €</p>
      <button type="button" onClick={catchProducto(id, nombre)}>
        Comprar
      </button>
    </div>
  );
};

export default Producto;
