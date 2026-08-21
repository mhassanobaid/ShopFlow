import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section>
      <h2>Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
