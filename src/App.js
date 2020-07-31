import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  // Listado de productos

  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa Js", precio: 49.99 },
    { id: 2, nombre: "Camisa Php", precio: 39.99 },
    { id: 3, nombre: "Camisa Python", precio: 29.99 },
    { id: 4, nombre: "Camisa JSON", precio: 19.99 },
  ]);

  // State para un carrito de compras

  const [carrito, pushProductos] = useState([]);

  // Obtener fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="MyDrugs" />
      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          pushProductos={pushProductos}
          productos={productos}
        />
      ))}
      <br></br>
      <Carrito carrito={carrito} pushProductos={pushProductos} />
      <br></br>
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
