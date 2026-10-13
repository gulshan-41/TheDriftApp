import { View, StyleSheet } from "react-native";
import ItemView from "./item-view";

function ItemsCart() {
    return (
        <View style={styles.itemsSection}>
            <View style={styles.itemsContainer}>
                <View style={styles.primaryHalf}>
                    <ItemView />
                    <ItemView />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemsSection: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 8,
        paddingRight: 8,
    },
    itemsContainer: {
        flexDirection: 'column',
        gap: 8,
        padding: 16,
        // borderColor: '#c6c6c6',
        borderColor: '#00000072',
        borderWidth: 1,
        borderRadius: 20,
    },
    primaryHalf: {
        gap: 8,
    },
});

export default ItemsCart;