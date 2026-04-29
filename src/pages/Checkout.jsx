import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
 const { cart, clearCart } = useContext(CartContext);

 const navigate = useNavigate();



 const total =cart.reduce( 
    (acc, item) => acc + item.price * (item.qty || 1),
    0
 );


    return ( 
        <div className="p-5 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>

            <p className="mb-4">Total Amount: <strong>${total}</strong></p>

            {/*Bank Details*/}
            <div className="border rounded p-4 mb-4 bg-gray-100">
                <h3 className="font-bold mb-2">Bank Transfer Details</h3>
                <p>Bank: Example Bank</p>
                <p>Account Name: MyStore</p>
                <p>Account Number: 1234567890</p>
            </div>

            <p className="mb-4 text-sm text-gray-600">
                After making payment, click the button below.
            </p>

            <button
            onClick={() => {
                clearCart();   // clear cart
                navigate("/"); // go home
            }}
            className="bg-black text-white px-4 py-2 rounded w-full"
            >
            I Have Paid
            </button>
        </div>
     );
}
 
export default Checkout;