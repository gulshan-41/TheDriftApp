import { View, StyleSheet } from 'react-native';

function MenuSkeleton({ frameWidth }) {
    return (
        <View style={styles.wrapper}>
            {[0, 1, 2].map((i) => (
                <View key={i} style={[styles.row, { width: frameWidth }]} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        gap: 8,
        paddingHorizontal: 8,
    },
    row: {
        height: 260,
        borderRadius: 20,
        backgroundColor: '#e6e6e6',
    },
});

export default MenuSkeleton;