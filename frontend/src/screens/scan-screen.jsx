import { View, StyleSheet } from 'react-native';
import MainLayout from '../layout/main-layout';

function ScanScreen() {
    return (
        <MainLayout>
            <View style={styles.space} />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    space: {
        height: 400,
    },
});

export default ScanScreen;