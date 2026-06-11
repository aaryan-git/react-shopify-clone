function ProductCard({ name, price, image, addToCart }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <p className="text-gray-600 mt-2">
          ₹{price}
        </p>

       <button
  onClick={addToCart}
  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
>
  Add To Cart
</button>
      </div>
    </div>
  );
}

export default ProductCard;