import { useEffect, useRef } from 'react';
import { Text, View, Pressable, StyleSheet, Animated } from 'react-native';
import { useScroll } from '../context/scroll-context';
import { Lucide } from '@react-native-vector-icons/lucide';
import Feather from 'react-native-vector-icons/Feather';
import { useCart } from '../context/cart-context';

const BUTTON_SIZE = 56;
const GAP = 8;
const PADDING = 14;

const ICONS = {
    Home: (color) => <Lucide name="tv-minimal" size={24} color={color} />,
    Menu: (color) => <Lucide name="notebook" size={24} color={color} />,
    Cart: (color) => <Lucide name="shopping-cart" size={25} color={color} />,
    Scan: (color) => <Lucide name="scan-line" size={25} color={color} />,
    Profile: (color) => <Feather name="user" size={26} color={color} />,
};

function NavBar({ state, navigation }) {
    const { translateY } = useScroll();
    const { totalItems } = useCart();

    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const targetX = state.index * (BUTTON_SIZE + GAP);

        Animated.spring(translateX, {
            toValue: targetX,
            useNativeDriver: true,
            speed: 16,
            bounciness: 6,
        }).start();
    }, [state.index, translateX]);

    return (
        <Animated.View 
            style={[
                styles.mainNavBarWrapper, 
                { transform: [{ translateY }] }
            ]}
            pointerEvents="box-none"
        >
            <View style={styles.navBarWrapper}>
                <Animated.View
                    style={[
                        styles.activePill,
                        { transform: [{ translateX }] },
                    ]}
                />

                {state.routes.map((route, index) => {
                    const active = state.index === index;
                    return (
                        <Pressable
                            key={route.key}
                            style={styles.navBtn}
                            onPress={() => navigation.navigate(route.name)}
                            accessibilityLabel={route.name}
                        >
                            {ICONS[route.name] ? (
                                ICONS[route.name](active ? '#000' : '#fff')
                            ) : null}

                            {route.name === 'Cart' && totalItems > 0 && (
                                <View style={styles.badgeWrapper}>
                                    <Text style={styles.badgeText}>{totalItems > 20 ? '20+' : totalItems}</Text>
                                </View>
                            )}
                        </Pressable>
                    );
                })}
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    mainNavBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 54,
    },
    navBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: GAP,
        padding: PADDING,
        borderRadius: 20,
        backgroundColor: '#00000072',
        position: 'relative',
    },
    activePill: {
        position: 'absolute',
        top: PADDING,
        left: PADDING,
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: 14,
        backgroundColor: '#fff',
    },
    navBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: 14,
        zIndex: 1,
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

export default NavBar;