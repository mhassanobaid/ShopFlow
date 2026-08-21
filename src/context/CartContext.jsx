import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((product) => product.id !== productId)
    );
  };

  const value = {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}