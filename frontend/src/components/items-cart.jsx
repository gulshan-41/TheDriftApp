import { Text, View, StyleSheet, Pressable } from "react-native";
import ItemView from "./item-view";
import { formatPrice } from "../consonants/currency";

function ItemsCart({ lines, totalItems, subTotal }) {
    const discount = 250;
    const grandTotal = subTotal - discount;

    return (
        <View style={styles.itemsSection}>
            <View style={styles.itemsContainer}>
                <View style={styles.primaryHalf}>
                    {lines.map((line) => (
                        <ItemView key={line.id} line={line} />
                    ))}
                </View>
            </View>
            <View style={styles.secondaryHalf}>
                <View style={styles.cafeHalf}>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>Quantity: </Text>
                        <Text style={styles.valueTxt}>{totalItems}</Text>
                    </View>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>Subtotal: </Text>
                        <Text style={styles.valueTxt}>{formatPrice(subTotal)}</Text>
                    </View>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>Coupons: </Text>
                        <Text style={styles.valueTxt}>{discount > 0 ? `-${formatPrice(discount)}` : '—'}</Text>
                    </View>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>OrderID: </Text>
                        <Text style={styles.valueTxt}>ORD-45892</Text>
                    </View>
                </View>
                <View style={styles.couponCut}></View>
                <View style={styles.customerHalf}>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>OrderID: </Text>
                        <Text style={styles.valueTxt}>ORD-45892</Text>
                    </View>
                    <View style={styles.paybleList}>
                        <Text style={styles.headTxt}>Grand Total: </Text>
                        <Text style={styles.valueTxt}>{formatPrice(grandTotal)}</Text>
                    </View>
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
        paddingLeft: 16,
        paddingRight: 16,
        gap: 8
    },
    itemsContainer: {
        flexDirection: 'column',
        gap: 8,
        padding: 12,
        borderColor: '#00000072',
        borderWidth: 1,
        borderRadius: 20,
    },
    primaryHalf: {
        gap: 8,
    },
    secondaryHalf: {
        flexDirection: 'column',
        gap: 8,
        padding: 12,
        borderColor: '#00000072',
        borderWidth: 1,
        borderRadius: 20,
    },
    couponCut: {
        borderTopWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#00000072',
    },
    paybleList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headTxt: {
        fontSize: 14,
        fontWeight: '800',
    },
    valueTxt: {
        fontSize: 13,
    },
});

export default ItemsCart;