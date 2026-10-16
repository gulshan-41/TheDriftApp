import { useSyncExternalStore } from 'react';
import { cartStore } from './cart-store';

export function useDishQuantity(id) {
    return useSyncExternalStore(
        cartStore.subscribe,
        () => cartStore.getItems()[id] || 0
    );
}