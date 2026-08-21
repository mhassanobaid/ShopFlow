import { useContext } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart, clearCart } = useCart();

  return (
    <nav className="navbar">
      <h1>ShopFlow</h1>

      <div>
        🛒 Cart: {cart.length}
      </div>

      <button onClick={clearCart}>
        Clear Cart
      </button>
    </nav>
  );
}

export default Navbar;
