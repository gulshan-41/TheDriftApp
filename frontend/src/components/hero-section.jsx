import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const SCROLL_GAP = 4;

const cards = [
    { id: 'story1', color: '#04878F' },
    { id: 'story2', color: '#F4B42C' },
    { id: 'story3', color: '#B31313' },
    { id: 'story4', color: '#64C8A1' },
];

function HeroSection() {
    const [frameWidth, setFrameWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;

    const onFrameLayout = (event) => {
        setFrameWidth(event.nativeEvent.layout.width);
    };

    const cardStride = frameWidth + SCROLL_GAP;

    const goToIndex = (index) => {
        const clamped = Math.max(0, Math.min(index, cards.length - 1));
        setCurrentIndex(clamped);
        Animated.timing(translateX, {
            toValue: -clamped * cardStride,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    const handlePrev = () => goToIndex(currentIndex - 1);
    const handleNext = () => goToIndex(currentIndex + 1);

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === cards.length - 1;

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
                                        styles.storyCardsWrapper,
                                        { transform: [{ translateX }] },
                                    ]}
                                >
                                    {cards.map((card) => (
                                        <View
                                            key={card.id}
                                            style={[
                                                styles.storyCards,
                                                { width: frameWidth, backgroundColor: card.color },
                                            ]}
                                        />
                                    ))}
                                </Animated.View>

                                <View style={styles.navLoveBtnsWrapper}>
                                    <View>
                                        <Pressable style={styles.loveBtn}>
                                            <Icon name="heart-outlined" size={20} color="#fff" />
                                        </Pressable>
                                    </View>
                                    <View style={styles.navBtnsWrapper}>
                                        {!isFirst && (
                                            <Pressable style={styles.navBtn} onPress={handlePrev}>
                                                <Icon name="chevron-thin-left" size={18} color="#fff" />
                                            </Pressable>
                                        )}
                                        {!isLast && (
                                            <Pressable style={styles.navBtn} onPress={handleNext}>
                                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                                            </Pressable>
                                        )}
                                    </View>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </View>
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
        width: '100%',
    },
    storiesFrame: {
        overflow: 'hidden',
        borderRadius: 24,
        position: 'relative',
    },
    storyCardsWrapper: {
        flexDirection: 'row',
        gap: SCROLL_GAP,
    },
    storyCards: {
        height: 540,
        borderRadius: 24,
    },

    navLoveBtnsWrapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 4,
        padding: 16,
        zIndex: 40,
    },
    loveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        borderRadius: 12,
        backgroundColor: '#00000072',
    },
    
    navBtnsWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 4,
    },
    navBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#00000072',
    },
});

export default HeroSection;