import { useContext, useState } from "react";
import { ContextoCarrito } from "../contexto/ContextoCarrito";
import Swal from 'sweetalert2';

function VistaCarrito() {
  const { cart, clearCart, removeFromCart, history, clearHistory } = useContext(ContextoCarrito);
  const [buyer, setBuyer] = useState({ nombre: "", email: "" });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    Swal.fire({
      title: '¡Compra realizada!',
      text: `Gracias ${buyer.nombre}, tu pedido fue recibido ⚔️`,
      icon: 'success',
      timer: 3000,
      showConfirmButton: false
    });
  };

  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío. ¡Agrega productos desde la tienda!</p>}

      {cart.length > 0 && (
        <button onClick={clearCart} style={{ marginBottom: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
          Limpiar Todo
        </button>
      )}

      {cart.map((prod, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <p style={{ margin: 0, flexGrow: 1 }}>{prod.nombre} - ${prod.precio}</p>
          <button onClick={() => removeFromCart(index)} style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}>
            Eliminar
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <button type="submit">Comprar</button>
        </form>
      )}

      <h3>Historial de Compras</h3>
      {history.length > 0 && (
        <button onClick={clearHistory} style={{ marginBottom: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
          Limpiar Historial
        </button>
      )}
      {history.map((purchase, idx) => (
        <div key={idx}>
          <p>Compra del {new Date(purchase.date).toLocaleString()}</p>
          <ul>
            {purchase.items.map((item, i) => (
              <li key={i}>{item.nombre} - ${item.precio}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default VistaCarrito;
