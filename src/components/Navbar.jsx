import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">

      <h1 className="text-xl font-bold">
        MyStore
      </h1>

      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Home
        </NavLink>

        <NavLink to="/products" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Products
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Cart ({cart.length})
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;