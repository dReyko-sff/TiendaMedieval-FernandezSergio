
import { Link , NavLink } from "react-router-dom";
import "./header.css";
import WidgetCarrito from "./Carrito/CarritoWidget.jsx";


function Header() {

    return(
          <header>
        <h1 className="header_title">Tienda Medieval</h1>

        <nav className="header_nav">
          <NavLink to="/" className="nav_link">Home</NavLink>
          <NavLink to="/productos" end className="nav_link">Productos</NavLink>
          <NavLink to="/productos/ataque" className="nav_link">Ataque</NavLink>
          <NavLink to="/productos/defensa" className="nav_link">Defensa</NavLink>
          <NavLink to="/productos/magia" className="nav_link">Magia</NavLink>
          <WidgetCarrito />
        </nav>
      </header>
    )
}

export default Header;