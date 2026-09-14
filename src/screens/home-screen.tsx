import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeroSection from '../components/hero-section';

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingTop: insets.top + 4 }]}>
            <HeroSection />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff',
        paddingLeft: 8,
        paddingRight: 8, 
    },
});

export default HomeScreen;