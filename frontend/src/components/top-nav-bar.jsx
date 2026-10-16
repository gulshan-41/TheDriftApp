import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Lucide } from '@react-native-vector-icons/lucide';
import Feather from 'react-native-vector-icons/Feather';
import { useCartTotal } from "../store/cart-total";

function TopNavBar() {
    const navigation = useNavigation();
    const route = useRoute();  
    const totalItems = useCartTotal();

    const showBack = route.name !== 'Home';

    return (
        <View style={styles.topNavBarWrapper}>
            {showBack ? (
                <Pressable style={styles.navBtn} onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={24} color="#fff" />
                </Pressable>
            ) : (
                <View style={styles.navBtnPlaceholder} />
            )}

            <View style={styles.secondHalf}>
                <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Cart')}>
                    <Lucide name="shopping-cart" size={22} color="#fff" />
                    {totalItems > 0 && (
                        <View style={styles.badgeWrapper}>
                            <Text style={styles.badgeText}>{totalItems > 20 ? '20+' : totalItems}</Text>
                        </View>
                    )}
                </Pressable>
                <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Notifications')}>
                    <Lucide name="bell" size={21} color="#fff" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topNavBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    navBtnPlaceholder: {
        width: 54,
        height: 54,
    },
    secondHalf: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    navBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 54,
        height: 54,
        borderRadius: 14,
        backgroundColor: '#00000072'
    },

    badgeWrapper: {
        position: 'absolute',
        top: -5,
        right: -5,
        minWidth: 22,
        height: 22,
        borderRadius: '50%',
        backgroundColor: '#c91b1b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '800',
    },
});

export default TopNavBar;