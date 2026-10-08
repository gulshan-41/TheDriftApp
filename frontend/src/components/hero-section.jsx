import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Animated, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import storyImages from '../../assets/image-maps/story-images';

const SCROLL_GAP = 4;

const cards = [
    { id: 'story1' },
    { id: 'story2' },
    { id: 'story3' },
    { id: 'story4' },
    { id: 'story5' },
    { id: 'story6' },
    { id: 'story7' },
    { id: 'story8' },
    { id: 'story9' },
];

function HeroSection({ frameWidth }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedMap, setLikedMap] = useState({});
    const translateX = useRef(new Animated.Value(0)).current;

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

    const currentId = cards[currentIndex].id;
    const liked = !!likedMap[currentId];

    const toggleLike = () =>
        setLikedMap((prev) => ({ ...prev, [currentId]: !prev[currentId] }));

    return (
        <View style={styles.heroSection}>
            <View style={styles.heroWrapper}>
                <View style={styles.heroHero}>
                    <Text style={styles.title}>SAVOR THE{'\n'}FLAVOR.</Text>
                    <View style={styles.dividerSubtitleWrapper}>
                        <View style={styles.divider} />
                        <Text style={styles.subtitle}>
                            Find your flavour at THE DRIFT's charming cafe oasis.
                        </Text>
                    </View>
                </View>
                <View style={styles.storiesSection}>
                    <View style={styles.storiesFrame}>
                        {frameWidth > 0 && (
                            <>
                                <Animated.View
                                    style={[
                                        styles.storyCardsWrapper,
                                        { transform: [{ translateX }] },
                                    ]}
                                >
                                    {cards.map((card) => (
                                        <Image
                                            key={card.id}
                                            source={storyImages[card.id]}
                                            style={[styles.storyCards, { width: frameWidth }]}
                                            resizeMode="cover"
                                        />
                                    ))}
                                </Animated.View>

                                <View style={styles.navLoveBtnsWrapper}>
                                    <View>
                                        <Pressable style={styles.loveBtn} onPress={toggleLike}>
                                            <Icon
                                                name={liked ? "heart" : "heart-outlined"}
                                                size={20}
                                                color={liked ? "#FF4D8D" : "#fff"}
                                            />
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
        alignItems: 'stretch',
        gap: 8,
    },
    heroHero: {
        height: 260,
        width: '100%',
        backgroundColor: '#0d1b2a',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#fff',
        lineHeight: 34,
    },
    divider: {
        height: 1,
        backgroundColor: '#fff',
        marginVertical: 14,
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
        borderRadius: 20,
        position: 'relative',
    },
    storyCardsWrapper: {
        flexDirection: 'row',
        gap: SCROLL_GAP,
    },
    storyCards: {
        height: 570,
        borderRadius: 20,
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
        borderRadius: 14,
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
        borderRadius: 14,
        backgroundColor: '#00000072',
    },
});

export default HeroSection;