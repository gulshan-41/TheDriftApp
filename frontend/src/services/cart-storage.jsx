import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'drift.cart.v1';

export async function loadCart() {
    try {
        const raw = await AsyncStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (error) {
        console.log('loadCart failed:', error);
        return {};
    }
}

export async function saveCart(items) {
    try {
        await AsyncStorage.setItem(KEY, JSON.stringify(items));
    } catch (error) {
        console.log('saveCart failed:', error);
    }
}