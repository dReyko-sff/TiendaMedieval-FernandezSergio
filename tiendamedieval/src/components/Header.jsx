
import { Link , NavLink , Routes , Route } from "react-router-dom";
import "./header.css";
import WidgetCarrito from "./Carrito/CarritoWidget.jsx";


function Header() {

    return(
          <header>
        <h1 className="header_title">Tienda Medieval</h1>
<Routes>
    <Route path="/productos" element={<input type="text" placeholder="Buscar"></input>} />
</Routes>

        <nav className="header_nav">
          <NavLink to="/" className="nav_link">Home</NavLink>
          <NavLink to="/productos" className="nav_link">Productos</NavLink>
          <NavLink to="/ataque" className="nav_link">Ataque</NavLink>
          <NavLink to="/defensa" className="nav_link">Defensa</NavLink>
          <NavLink to="/magia" className="nav_link">Magia</NavLink>
          <WidgetCarrito />
        </nav>
      </header>
    )
}

export default Header;