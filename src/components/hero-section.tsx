import { StyleSheet, Text, View } from 'react-native';

function HeroSection() {
    //const { width } = useWindowDimensions();

    return (
        <View style={styles.heroContainer}>
            <Text style={styles.title}>SAVOR THE{'\n'}FLAVOR.</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
                Find your flavour at THE DRIFT's charming cafe oasis.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heroContainer: {
        width: '100%',
        backgroundColor: '#0d1b2a',
        padding: 24,
        borderRadius: 24,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#fff',
        lineHeight: 40,
        marginBottom: 50,
    },
    divider: {
        height: 0.5,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 12,
        color: '#fff',
    },
});

export default HeroSection