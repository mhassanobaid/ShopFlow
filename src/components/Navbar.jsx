function Navbar({ cartCount, onRemoveToCart }) {
  return (
    <nav className="navbar">
      <h1>ShopFlow</h1>

      <div>
        🛒 Cart: {cartCount}
      </div>

      <button onClick={onRemoveToCart}>
        Clear Cart
      </button>
    </nav>
  );
}

export default Navbar;
