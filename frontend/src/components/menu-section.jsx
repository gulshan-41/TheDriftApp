import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import DishesCards from "../cards/dishes-cards";
import DishesData from "../../assets/data/dishes-data.json";

const GAP = 8;
const MIN_CARD = 170;
const MAX_COLUMNS = 4;
const HEIGHT_RATIO = 1.25;
const MIN_HEIGHT = 220;
const SIDE_PADDING = 16;

function getCardWidth(frameWidth) {
    if (frameWidth <= 0) return 0;
    const fit = Math.floor((frameWidth + GAP) / (MIN_CARD + GAP));
    const columns = Math.min(MAX_COLUMNS, Math.max(2, fit));
    return (frameWidth - GAP * (columns - 1)) / columns;
}

const CATEGORIES = [
    { key: 'burger', title: 'BURGERS', color: '#0d1b2a' },
    { key: 'pasta', title: 'PASTA', color: '#a01010', inverted: true },
    { key: 'pizza', title: 'PIZZA', color: '#a01010' },
    { key: 'sandwich', title: 'SANDWICH', color: '#0d1b2a' },
    { key: 'ramen', title: 'RAMEN', color: '#a01010' },
    { key: 'noodles', title: 'NOODLES', color: '#f3b734' },
    { key: 'deserts', title: 'DESERTS', color: '#0d1b2a' },
    { key: 'beverages', title: 'BEVERAGES', color: '#0d1b2a' },
];

function CategoryRow({ category, frameWidth, cardWidth, rowHeight }) {
    const { key, title, color, inverted } = category;

    const header = (
        <View style={[
            styles.menuFrame, 
            { width: frameWidth, 
                height: rowHeight, 
                backgroundColor: color 
            }
        ]}>
            <View style={styles.contentWrapper}>
                {inverted ? (
                    <>
                        <Pressable style={styles.pBtn}>
                            <Feather name="chevron-left" size={22} color="#fff" />
                        </Pressable>
                        <Text style={styles.catHeading}>{title}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.catHeading}>{title}</Text>
                        <Pressable style={styles.pBtn}>
                            <Feather name="chevron-right" size={22} color="#fff" />
                        </Pressable>
                    </>
                )}
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.scrollCats}
            data={DishesData[key]}
            horizontal
            inverted={inverted}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.menuFrameWrapper}
            keyExtractor={(item) => item.id}
            // snapToInterval={cardWidth + GAP}
            // decelerationRate="fast"
            ListHeaderComponent={header}
            renderItem={({ item }) => (
                <DishesCards dish={item} width={cardWidth} height={rowHeight} />
            )}
        />
    );
}

function MenuSection({ frameWidth }) {
    const listWidth = frameWidth + 16 - SIDE_PADDING * 2;
    const cardWidth = getCardWidth(listWidth);
    const rowHeight = Math.max(MIN_HEIGHT, cardWidth * HEIGHT_RATIO);

    return (
        <View style={styles.menuNavSection}>
            {CATEGORIES.map((category) => (
                <CategoryRow
                    key={category.key}
                    category={category}
                    frameWidth={listWidth}
                    cardWidth={cardWidth}
                    rowHeight={rowHeight}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    menuNavSection: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 16,
        paddingRight: 16,
        gap: GAP,
    },
    scrollCats: {
        flexDirection: 'row',
        borderRadius: 20,
    },
    menuFrameWrapper: {
        flexDirection: 'row',
        gap: GAP,
    },
    menuFrame: {
        borderRadius: 20,
        padding: 16,
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    catHeading: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '900',
        lineHeight: 35,
    },
    pBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#00000072',
    },
});

export default MenuSection;