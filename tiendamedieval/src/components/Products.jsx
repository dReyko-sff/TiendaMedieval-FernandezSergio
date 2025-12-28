import productos from "../productos.json";
import "./productos.css";
import { useContext } from "react";
import { ContextoCarrito } from "../contexto/ContextoCarrito";
import Swal from 'sweetalert2';

function Productos({ categoria }) {
  const { addToCart } = useContext(ContextoCarrito);
  const filteredProducts = categoria ? productos.filter(p => p.categoria === categoria) : productos;

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: '¡Producto agregado!',
      text: `${product.nombre} se ha agregado al carrito.`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  };

  return (
    <main className="productos_main">
      <h2 className="productos-title">Bienvenido a Productos</h2>

      <div className="productos_grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="producto_card">
            <img 
              src={item.img} 
              alt={item.nombre}
              className="producto_imagen"
            />
            <h3 className="producto_name">{item.nombre}</h3>
            <p className="producto_price">Precio: ${item.precio}</p>
            <button onClick={() => handleAddToCart(item)} className="buy_button">Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;
