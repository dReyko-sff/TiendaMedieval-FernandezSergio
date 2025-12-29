import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import VistaCarrito from "./components/Carrito/VistaCarrito.jsx";
import CargarProductos from "./components/CargarProductos.jsx";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/contexto/ContextoCarrito.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:categoria" element={<Products />} />
          <Route path="/carrito" element={<VistaCarrito />} />
        
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
