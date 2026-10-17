import { useMemo, useSyncExternalStore } from 'react';
import { cartStore } from './cart-store';
import { getDishById } from '../services/dishes-source';

export function useCartLineUp() {
    const items = useSyncExternalStore(cartStore.subscribe, cartStore.getItems);

    return useMemo(() => {
        const lines = Object.entries(items)
            .map(([id, quantity]) => {
                const dish = getDishById(id);
                if (!dish) return null;
                return { id, dish, quantity, lineTotal: Number(dish.price) * quantity };
            })
            .filter(Boolean);

        return {
            lines,
            totalItems: lines.reduce((sum, l) => sum + l.quantity, 0),
            subTotal: lines.reduce((sum, l) => sum + l.lineTotal, 0),
        };
    }, [items]);
}