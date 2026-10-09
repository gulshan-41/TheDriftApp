import { View, StyleSheet } from 'react-native';
import MainLayout from '../layout/main-layout';
import MenuSection from '../components/menu-section';

function MenuScreen() {
    return (
        <MainLayout>
            {(frameWidth) => (
                <>
                    <MenuSection frameWidth={frameWidth} />
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