import { View, StyleSheet } from 'react-native';
import MainLayout from '../layout/main-layout';
import ItemsCart from '../components/items-cart';
import { useCartLineUp } from '../store/cart-lineup';

function CartScreen() {
    const { lines, totalItems, subTotal } = useCartLineUp();
    
    return (
        <MainLayout>
            {lines.length === 0 ? (
                <View></View>
            ) : (
                <ItemsCart lines={lines} totalItems={totalItems} subTotal={subTotal} />
            )}
            <View style={styles.space} />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    space: {
        height: 400,
    },
});

export default CartScreen;