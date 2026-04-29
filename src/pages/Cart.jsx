import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {/* 🔹 If cart is empty */}
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {/* 🔹 Cart Items */}
          {cart.map(item => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              {/* 🔹 Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-sm">Qty: {item.qty}</p>
                </div>
              </div>

              {/* 🔹 Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  −
                </button>
              </div>
            </div>
          ))}

          {/* 🔹 Total Price */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </>
      )}
      <Link to="/checkout">
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 w-full">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;