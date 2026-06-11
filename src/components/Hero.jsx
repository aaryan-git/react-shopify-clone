function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-100">

      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Find The Best Products Online
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Discover amazing products at great prices.
          Shop smarter, save more, and enjoy a seamless
          shopping experience.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Shop Now
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            Explore
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
          alt="Shopping"
          className="w-[450px] rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
}

export default Hero;