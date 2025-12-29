import "./productos.css";
import { useContext, useEffect, useState } from "react";
import { ContextoCarrito } from "./contexto/ContextoCarrito";
import Swal from "sweetalert2";
import {
  getAllProducts,
  getProductsByCategory,
} from "./services/productsService";
import { useParams } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(ContextoCarrito);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      getProductsByCategory(categoria).then(setProductos);
    } else {
      getAllProducts().then(setProductos);
    }
  }, [categoria]);

  return (
    <main className="productos_main">
      <h2 className="productos_title">Productos</h2>

      <div className="productos_grid">
        {productos.map((item) => (
          <div key={item.id} className="producto_card">
            <img src={item.img} alt={item.nombre} className="producto_imagen" />
            <h3 className="producto_name">{item.nombre}</h3>
            <p className="producto_price">${item.precio}</p>
            <button className="buy_button" onClick={() => { addToCart(item); Swal.fire({ title: 'Agregado!', text: `${item.nombre} se agregó al carrito`, icon: 'success', timer: 2000, showConfirmButton: false }); }}>Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;
