import { useState } from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useScroll } from '../context/scroll-context';

function MainLayout({ children }) {
    const { onScrollBeginDrag, onScrollEndDrag, onMomentumScrollEnd } = useScroll();

    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const isWideScreen = width > 600;
    const [frameWidth, setFrameWidth] = useState(0);

    const onContentLayout = (event) => {
        setFrameWidth(event.nativeEvent.layout.width - 16);
    };

    return (
        <ScrollView
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            showsVerticalScrollIndicator={false}
            style={[styles.screenWrapper, { paddingTop: insets.top + 4 }]}
        >
            <View
                style={[styles.contentWrapper, isWideScreen && styles.contentWide]}
                onLayout={onContentLayout}
            >
                {typeof children === 'function' ? children(frameWidth) : children}
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
});

export default MainLayout;