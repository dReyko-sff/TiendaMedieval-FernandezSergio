import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextoCarrito } from "../contexto/ContextoCarrito";

function WidgetCarrito() {
  const { totalItems } = useContext(ContextoCarrito);

  return (
    <Link to="/carrito" style={{ position: "relative" }}>
      🛒
      {totalItems > 0 && (
        <span style={{
          position: "absolute",
          top: "-8px",
          right: "-10px",
          background: "#ff6b6b",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "12px"
        }}>
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default WidgetCarrito;
