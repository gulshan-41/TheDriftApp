import { View, Pressable, StyleSheet } from "react-native";
import { Lucide } from '@react-native-vector-icons/lucide';
import Feather from 'react-native-vector-icons/Feather';

const ICONS = {
    Home: (color) => <Lucide name="tv-minimal" size={24} color={color} />,
    Menu: (color) => <Lucide name="notebook" size={24} color={color} />,
    Cart: (color) => <Lucide name="shopping-cart" size={25} color={color} />,
    Scan: (color) => <Lucide name="scan-line" size={25} color={color} />,
    Profile: (color) => <Feather name="user" size={26} color={color} />,
};

function NavBar({ state, navigation }) {
    return (
        <View style={styles.mainNavBarWrapper} pointerEvents="box-none">
            <View style={styles.navBarWrapper}>
                {state.routes.map((route, index) => {
                    const active = state.index === index;
                    return (
                        <Pressable
                            key={route.key}
                            style={[styles.navBtn, active && styles.navBtnActive]}
                            onPress={() => navigation.navigate(route.name)}
                            accessibilityLabel={route.name}
                        >
                            {ICONS[route.name](active ? '#000' : '#fff')}
                        </Pressable>
                    );
                })}
            </View>
        </View>
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
        gap: 8,
        padding: 14,
        borderRadius: 20,
        backgroundColor: '#00000072',
    },
    navBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        borderRadius: 14,
    },
    navBtnActive: {
        backgroundColor: '#fff',
    },
});

export default NavBar;