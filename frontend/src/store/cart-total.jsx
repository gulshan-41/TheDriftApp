import { useSyncExternalStore } from 'react';
import { cartStore } from './cart-store';

export function useCartTotal() {
    return useSyncExternalStore(cartStore.subscribe, () =>
        Object.values(cartStore.getItems()).reduce((sum, qty) => sum + qty, 0)
    );
}