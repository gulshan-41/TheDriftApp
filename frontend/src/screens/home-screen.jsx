import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeroSection from '../components/hero-section';
import MenuSection from '../components/menu-section';

function HomeScreen() {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const isWideScreen = width > 600;
    const [frameWidth, setFrameWidth] = useState(0);

    const onContentLayout = (event) => {
        setFrameWidth(event.nativeEvent.layout.width - 16);
    };

    return (
        <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            style={[styles.screenWrapper, { paddingTop: insets.top + 4 }]}
        >
            <View
                style={[styles.contentWrapper, isWideScreen && styles.contentWide]}
                onLayout={onContentLayout}
            >
                <HeroSection frameWidth={frameWidth} />
                <MenuSection frameWidth={frameWidth} />
                <View style={styles.space} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentWrapper: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 8,
    },
    contentWide: {
        maxWidth: 700,
        alignSelf: 'center',
    },
    space: {
        height: 400,
    },
});

export default HomeScreen;