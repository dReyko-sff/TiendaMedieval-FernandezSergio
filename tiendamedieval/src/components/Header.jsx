
import { Link , NavLink , Routes , Route } from "react-router";
import "./header.css";

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
          <NavLink to="/carrito" className="nav_link">Carrito</NavLink>
        </nav>
      </header>
    )
}

export default Header;