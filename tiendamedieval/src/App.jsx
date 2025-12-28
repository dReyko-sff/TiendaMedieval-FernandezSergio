
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import VistaCarrito from "./components/VistaCarrito.jsx";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexto/ContextoCarrito.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/ataque" element={<Products categoria="ataque" />} />
          <Route path="/magia" element={<Products categoria="magia" />} />
          <Route path="/carrito" element={<VistaCarrito />} />
          <Route path="/defensa" element={<Products categoria="defensa" />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App;
