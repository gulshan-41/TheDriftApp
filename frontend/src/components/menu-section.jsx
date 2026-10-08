import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useEffect, useRef } from "react";
import Icon from 'react-native-vector-icons/Entypo';
import DishesCardsGrid from "../cards-grid/dishes-cards-grid";
import DishesData from "../../assets/data/dishes-data.json"

function MenuSection({ frameWidth }) {
    const pastaScrollRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            pastaScrollRef.current?.scrollToEnd({
                animated: false
            });
        }, 0);
    }, []);

    return (
        <View style={styles.menuNavSection}>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>BURGERS</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.burger}/>
                </View>
            </ScrollView>
            <ScrollView 
                style={styles.scrollCats} 
                ref={pastaScrollRef}
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.menuFrameWrapper}>
                    <DishesCardsGrid dishes={DishesData.pasta}/>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth },
                        { backgroundColor: '#a01010' }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-left" size={18} color="#fff" />
                            </Pressable>
                            <Text style={styles.catHeading}>PASTA</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth },
                        { backgroundColor: '#a01010' }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>PIZZA</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.pizza}/>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>SANDWICH</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.sandwich}/>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth },
                        { backgroundColor: '#a01010' }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>RAMEN</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.ramen}/>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth },
                        { backgroundColor: '#f3b734' }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>NOODLES</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.noodles}/>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>DESSERT</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.deserts}/>
                </View>
            </ScrollView>
            <ScrollView style={styles.scrollCats} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuFrameWrapper}>
                    <View style={[
                        styles.menuFrame,
                        { width: frameWidth }
                    ]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>BEVERAGES</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                    <DishesCardsGrid dishes={DishesData.beverages}/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    menuNavSection: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 8,
        paddingRight: 8,
        gap: 8,
    },

    scrollCats: {
        flexDirection: 'row',
        borderRadius: 20,
    },
    menuFrameWrapper: {
        flexDirection: 'row',
        gap: 8,
        width: '100%'
    },
    menuFrame: {
        borderRadius: 20,
        backgroundColor: '#0d1b2a',
        height: 260,
        padding: 20,
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
    nextBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderRadius: 14,
        backgroundColor: '#00000072',
    },
})

export default MenuSection;