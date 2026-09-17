import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeroSection from '../components/hero-section';

function HomeScreen() {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const isWideScreen = width > 600;

    return (
        <View style={[styles.screenWrapper, { paddingTop: insets.top + 4 }]}>
            <View style={[styles.contentWrapper, isWideScreen && styles.contentWide]}>
                <HeroSection />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    contentWide: {
        maxWidth: 700,
        alignSelf: 'center',
    },
});

export default HomeScreen;