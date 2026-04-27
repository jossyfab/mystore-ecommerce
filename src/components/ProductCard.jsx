import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <NavLink to={`/product/${product.id}`}>

      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">

        {/* PRODUCT IMAGE */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 mx-auto object-contain mb-4"
        />

        {/* PRODUCT TITLE */}
        <h4 className="font-semibold text-sm mb-2">
          {product.title}
        </h4>

        {/* PRODUCT PRICE */}
        <p className="text-gray-600 font-bold mb-3">
          ${product.price}
        </p>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={(e) => {
            e.preventDefault(); // stops navigation when clicking button
            addToCart(product);
          }}
          className="bg-black text-white px-4 py-2 w-full rounded cursor-pointer
                     hover:bg-gray-800 active:scale-95 transition-all duration-150"
        >
          Add to Cart
        </button>

      </div>

    </NavLink>
  );
};

export default ProductCard;