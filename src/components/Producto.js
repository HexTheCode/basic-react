import React from "react";

const Producto = ({ producto, carrito, pushProductos, productos }) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito

  const catchProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    pushProductos([...carrito, producto]);
  };

  // Eliminar producto del carrito

  const deleteProducto = (id) => {
    const producto = carrito.filter((producto) => producto.id !== id);
    pushProductos(producto);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio} €</p>

      {productos ? (
        <button type="button" onClick={() => catchProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => deleteProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
