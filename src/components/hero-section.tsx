import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, LayoutChangeEvent, Pressable, Animated } from 'react-native';


const AUTO_PLAY_INTERVAL = 4000;
const SCROLL_GAP = 4;

const cards = [
    { id: 'story1', color: '#04878F' },
    { id: 'story2', color: '#64C8A1' },
    { id: 'story3', color: '#F4B42C' },
    { id: 'story4', color: '#B31313' },
    { id: 'story5', color: '#000000' }
];

function HeroSection() {
    const [frameWidth, setFrameWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const translateX = useRef(new Animated.Value(0)).current;
    const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    const onFrameLayout = (event: LayoutChangeEvent) => {
        setFrameWidth(event.nativeEvent.layout.width);
    };

    const scrollDistance = frameWidth + SCROLL_GAP;

    const animateTo = (index: number) => {
        Animated.timing(translateX, {
            toValue: -index * scrollDistance,
            duration: 400,
            useNativeDriver: true,
        }).start();
    };

    const goToIndex = (index: number) => {
        const wrapped = (index + cards.length) % cards.length;
        setCurrentIndex(wrapped);
        animateTo(wrapped);
    };

    const handleNext = () => { goToIndex(currentIndex + 1); resetAutoPlay(); };
    const handlePrev = () => { goToIndex(currentIndex - 1); resetAutoPlay(); };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayTimer.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = (prev + 1) % cards.length;
                animateTo(next);
                return next;
            });
        }, AUTO_PLAY_INTERVAL);
    };

    const stopAutoPlay = () => {
        if (autoPlayTimer.current) {
            clearInterval(autoPlayTimer.current);
            autoPlayTimer.current = null;
        }
    };

    const resetAutoPlay = () => {
        if (!isPaused) startAutoPlay();
    };

    useEffect(() => {
        if (frameWidth > 0 && !isPaused) startAutoPlay();
        return stopAutoPlay;
    }, [frameWidth, isPaused]);

    const handlePressIn = () => { setIsPaused(true); stopAutoPlay(); };
    const handlePressOut = () => { setIsPaused(false); };

    return (
        <View style={styles.heroSection}>
            <View style={styles.heroWrapper}>
                <View style={styles.heroHero}>
                    <Text style={styles.title}>SAVOR THE{'\n'}FLAVOR.</Text>
                    <View style={styles.divider} />
                    <Text style={styles.subtitle}>
                        Find your flavour at THE DRIFT's charming cafe oasis.
                    </Text>
                </View>
                <View style={styles.storiesSection}>
                    <View style={styles.storiesFrame} onLayout={onFrameLayout}>
                        {frameWidth > 0 && (
                            <>
                                <Animated.View
                                    style={[
                                        styles.storiesScrollContent,
                                        { transform: [{ translateX }]}
                                    ]}
                                >
                                    {cards.map((card) => (
                                        <View 
                                            key={card.id}
                                            style={[
                                                styles.storyCards,
                                                { width: frameWidth, backgroundColor: card.color }
                                            ]}
                                        />
                                    ))}
                                </Animated.View>
                                <View style={styles.paginationWrapper} pointerEvents="none">
                                    <View style={styles.paginationBtns}>
                                        {cards.map((card, i) => (
                                            <PaginationDot
                                                key={card.id}
                                                active={i === currentIndex}
                                                filled={i < currentIndex}
                                                duration={AUTO_PLAY_INTERVAL}
                                                isPaused={isPaused}
                                            />
                                        ))}
                                    </View>
                                </View>
                                <View style={styles.tapZonesWrapper} pointerEvents="box-none">
                                    <Pressable 
                                        style={styles.leftTapZone}
                                        onPress={handlePrev}
                                        onPressIn={handlePressIn}
                                        onPressOut={handlePressOut}
                                    />
                                    <Pressable 
                                        style={styles.rightTapZone}
                                        onPress={handleNext}
                                        onPressIn={handlePressIn}
                                        onPressOut={handlePressOut}
                                    />
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

function PaginationDot({
    active,
    filled,
    duration,
    isPaused,
}: {
    active: boolean;
    filled: boolean;
    duration: number;
    isPaused: boolean;
}) {
    const fillWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (filled) {
            fillWidth.setValue(100);
            return;
        }
        if (active && !isPaused) {
            Animated.timing(fillWidth, {
                toValue: 100,
                duration,
                useNativeDriver: false,
            }).start();
        } else if (active && isPaused) {
            fillWidth.stopAnimation();
        } else {
            fillWidth.setValue(0);
        }
    }, [active, filled, isPaused, duration, fillWidth]);

    return (
        <View style={styles.slideBtn}>
            <Animated.View
                style={[
                    styles.fill,
                    {
                        width: fillWidth.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%'],
                        }),
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heroSection: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 8,
        paddingRight: 8,
    },
    heroWrapper: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: 8,
    },

    heroHero: {
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
        height: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 12,
        color: '#fff',
    },

    storiesSection: {
        width: '100%'
    },
    storiesFrame: {
        overflow: 'hidden',
        borderRadius: 24,
        position: 'relative',
    },
    storiesScrollContent: {
        flexDirection: 'row',
        gap: 4,
    },
    storyCards: {
        height: 570,
        borderRadius: 24,
    },

    paginationWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 20,
        zIndex: 40,
    },
    paginationBtns: {
        flexDirection: 'row',
        gap: 4,
    },
    slideBtn: {
        flex: 1,
        height: 3.2,
        borderRadius: 50,
        backgroundColor: '#00000052',
        overflow: 'hidden',
    },
    fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    
    tapZonesWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftTapZone: {
        height: '100%',
        width: '47%',
        // backgroundColor: '#00000072',
    },
    rightTapZone: {
        height: '100%',
        width: '47%',
        // backgroundColor: '#00000072',
    }
});

export default HeroSection