import { useSyncExternalStore } from 'react';
import { cartStore } from './cart-store';

export function useCartHydrated() {
    return useSyncExternalStore(cartStore.subscribe, cartStore.isHydrated);
}