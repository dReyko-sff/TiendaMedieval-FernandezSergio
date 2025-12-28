import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextoCarrito = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('cartHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cartHistory', JSON.stringify(history));
  }, [history]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setHistory([...history, { date: new Date().toISOString(), items: cart }]);
      setCart([]);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const totalItems = cart.length;

  return (
    <ContextoCarrito.Provider value={{ cart, addToCart, removeFromCart, totalItems, clearCart, history, clearHistory }}>
      {children}
    </ContextoCarrito.Provider>
  );
}
