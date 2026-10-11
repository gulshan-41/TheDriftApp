import { createContext, useContext, useState, useEffect } from 'react';
import { loadCart, saveCart } from '../services/cart-storage';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState({});
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        loadCart().then((saved) => {
            setItems(saved);
            setIsHydrated(true);
        });
    }, []);

    useEffect(() => {
        if (!isHydrated) return;
        saveCart(items);
    }, [items, isHydrated]);

    useEffect(() => {
        console.log('CART:', JSON.stringify(items), 'TOTAL:', totalItems);
    }, [items, totalItems]);

    const add = (id) => {
        setItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const remove = (id) => {
        setItems((prev) => {
            const current = prev[id] || 0;
    
            if (current <= 1) {
                const { [id]: _removed, ...rest } = prev;
                return rest;
            }
    
            return { ...prev, [id]: current - 1 };
        });
    };

    const quantity = (id) => items[id] || 0;
    const totalItems = Object.values(items).reduce((sum, qty) => sum + qty, 0);

    return (
        <CartContext.Provider value={{ add, quantity, remove, isHydrated, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () =>{
    const context =  useContext(CartContext);
    if(!context) {
        throw new Error("useCart must be used within CartProvider!");
    }

    return context;
}