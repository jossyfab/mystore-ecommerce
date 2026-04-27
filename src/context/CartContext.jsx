import {  createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const  savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    const addToCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
    

        if (exist) {
            // increase quantity
            setCart(
            cart.map(item =>
                item.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
            );
        } else {
            // add new product with qty = 1
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };
 
    const removeFromCart = (id) => {
    const exist = cart.find(item => item.id === id);
    if (!exist) return;

    if (exist.qty === 1) {
        // remove completely
        setCart(cart.filter(item => item.id !== id));
    } else {
        // reduce quantity
        setCart(
        cart.map(item =>
            item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        );
    }
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            { children }
        </CartContext.Provider>
    )
}