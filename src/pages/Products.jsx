import ProductCard from "../components/ProductCard";
import products from "../data/products.js";

function Products({ addToCart }) {
return ( <section className="px-4 py-10"> <h1 className="text-4xl font-bold mb-8">
All Products </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        addToCart={addToCart}
      />
    ))}
  </div>
</section>

);
}

export default Products;

