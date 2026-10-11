import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MainLayout from '../layout/main-layout';
import MenuSection from '../components/menu-section';
import MenuSkeleton from '../components/skeletons/menu-skeleton';
import { useCart } from '../context/cart-context';

function MenuScreen() {
    const [isReady, setIsReady] = useState(false);
    const { isHydrated } = useCart();

    useEffect(() => {
        const id = requestAnimationFrame(() => setIsReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const showMenu = isReady && isHydrated;

    return (
        <MainLayout>
            {(frameWidth) => (
                <>
                    {showMenu ? <MenuSection frameWidth={frameWidth} /> : <MenuSkeleton frameWidth={frameWidth} />}
                    <View style={styles.space} />
                </>
            )}
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    space: {
        height: 400,
    },
});

export default MenuScreen;