import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

function Navbar({cartCount = 0,
  search = "",
  setSearch = () => {},
}) {
  return (

  <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">

{/* Logo */}
<div>
    <h1 className="text-4xl font-bold text-blue-600">
      Shopify
    </h1>
</div>

{/* Search Bar */}
<div className="flex items-center border border-blue-500 rounded-lg overflow-hidden">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="px-4 py-2 w-72 outline-none"
  />

  <button className="bg-blue-500 text-white px-4 py-3">
    <FiSearch size={20} />
  </button>
</div>

{/* Right Section */}
<div className="flex items-center gap-6">

  <ul className="flex gap-6 font-semibold">
    <li>
      <Link to="/">Home</Link>
    </li>

     <li>
      <Link to="/fetch">Fetch</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>

    <li>
      <Link to="/categories">Categories</Link>
    </li>
  </ul>

  <FaUser size={22} className="cursor-pointer" />

  <div className="relative cursor-pointer">
    <FaShoppingCart size={22} />

    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  </div>

  <MdDarkMode size={24} className="cursor-pointer" />

</div>
  </nav>
);
}

export default Navbar;