function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>Price: Rs. {product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
