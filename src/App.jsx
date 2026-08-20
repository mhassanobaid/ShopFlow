import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 5000,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 2500,
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 3500,
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 4500,
    },
  ];

  const handleAddToCart = (product) => {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ]);
  };

  const handleClearCart = () => {
    // your implementation
    setCart([]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onRemoveToCart={handleClearCart} />

      <main className="container">
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;
