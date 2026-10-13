import { View, StyleSheet } from 'react-native';
import MainLayout from '../layout/main-layout';
import ItemsCart from '../components/items-cart';

function CartScreen() {
    return (
        <MainLayout>
            <ItemsCart />
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