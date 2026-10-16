import { loadCart, saveCart } from "../services/cart-storage";

let items = {};
let hydrated = false;
const listeners = new Set();

function persist() {
    if (!hydrated) return;
    saveCart(items);
}

function emit() {
    listeners.forEach((listener) => listener());
}

export const cartStore = {
    getItems: () => items,

    subscribe: (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },

    add: (id) => {
        items = { ...items, [id]: (items[id] || 0) + 1 };
        persist();
        emit();
    },

    remove: (id) => {
        const current = items[id] || 0;
        if (current <= 1) {
            const { [id]: _removed, ...rest } = items;
            items = rest;
        } else {
            items = { ...items, [id]: current - 1 };
        }
        persist();
        emit();
    },

    isHydrated: () => hydrated,
    
    hydrate: async () => {
        if (hydrated) return;
        items = await loadCart();
        hydrated = true;
        emit();
    },
};