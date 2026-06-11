import Hero from "../components/Hero";
import Products from "./Products";

function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <Products addToCart={addToCart} />
    </>
  );
}

export default Home;