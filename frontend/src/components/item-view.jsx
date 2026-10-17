import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import dishesImage from "../../assets/image-maps/dishes-image-map";
import { cartStore } from "../store/cart-store";
import { formatPrice } from "../consonants/currency";

function ItemView({ line }) {
    const { dish, quantity, lineTotal } = line;
    return(
        <View style={styles.itemsWrapper}>
            <View style={styles.upperHalf}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={dishesImage[dish.id]}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.nameUnitCostDesc}>
                    <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
                        {dish.name} <Text style={styles.unitPrice}>({formatPrice(dish.price)})</Text>
                    </Text>
                    <Text style={styles.itemDesc} numberOfLines={3} ellipsizeMode="tail">
                        {dish.description}
                    </Text>
                </View>
                <View style={styles.controls}>
                    <View style={styles.count}>
                        <Text style={styles.countText}>{quantity}</Text>
                    </View>
                    <View style={styles.controlsWrapper}>
                        <Pressable style={styles.minusBtn} onPress={() => cartStore.remove(dish.id)}>
                            <Icon name="minus" size={20} color="#fff" />
                        </Pressable>
                        <Pressable style={styles.plusBtn} onPress={() => cartStore.add(dish.id)}>
                            <Icon name="plus" size={20} color="#fff" />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.lowerHalf}>
                <View style={styles.connectorP}>
                    <View style={styles.connector}></View>
                    <Icon style={styles.arrow} name="chevron-thin-right" size={14}color="#00000072" />
                </View>
                <Text style={styles.totalCost}>{formatPrice(lineTotal)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemsWrapper: {
        flexDirection: 'column',
        gap: 8
    },
    upperHalf: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: 8,
        borderRadius: 16,
    },
    imageWrapper: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
    },
    nameUnitCostDesc: {
        flex: 1,
        maxWidth: 270,
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 14,
        fontWeight: '800',
    },
    itemDesc: {
        fontSize: 8,
    },
    unitPrice: {
        position: 'relative',
    },
    controls: {
        flexShrink: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        gap: 4
    },
    controlsWrapper: {
        flexDirection: 'column',
        gap: 4,
    },
    count: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    countText: {
        fontSize: 14,
        color: '#fff',
    },
    plusBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    minusBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },

    lowerHalf: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 24,
        gap: 16,
    },
    connectorP: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    connector: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -9,
        bottom: '46%',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 12,
        borderColor: '#00000072',
    },
    arrow: {
        position: 'absolute',
        right: -4,
        bottom: 4
    },
    totalCost: {
        fontSize: 14,
        fontWeight: '800',
    }
});

export default ItemView;