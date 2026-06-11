import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.js"

function Categories({ addToCart }) {
const [selectedCategory, setSelectedCategory] = useState("Phones");

const categories = [
"Phones",
"Laptops",
"Accessories",
];

const filteredProducts = products.filter(
(product) => product.category === selectedCategory
);

return ( <section className="px-4 py-10"> <h1 className="text-4xl font-bold mb-8">
Categories </h1>

  <div className="flex gap-4 mb-8">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white"
      >
        {category}
      </button>
    ))}
  </div>

  <h2 className="text-2xl font-semibold mb-6">
    {selectedCategory}
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredProducts.map((product) => (
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

export default Categories;
