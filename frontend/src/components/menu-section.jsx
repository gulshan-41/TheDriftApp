import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import DishesCards from "../cards/dishes-cards";
import DishesData from "../../assets/data/dishes-data.json"

function MenuSection({ frameWidth }) {
    return (
        <View style={styles.menuNavSection}>
            <FlatList
                style={styles.scrollCats}
                data={DishesData.burger}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={[styles.menuFrame, { width: frameWidth }]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>BURGERS</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.pasta}
                horizontal
                inverted
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <DishesCards dish={item} />}
                ListHeaderComponent={
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
                }
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.pizza}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
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
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.sandwich}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={[styles.menuFrame, { width: frameWidth }]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>SANDWICH</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.ramen}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
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
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.noodles}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
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
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.deserts}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={[styles.menuFrame, { width: frameWidth }]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>DESERTS</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
            <FlatList
                style={styles.scrollCats}
                data={DishesData.beverages}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuFrameWrapper}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={[styles.menuFrame, { width: frameWidth }]}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.catHeading}>BEVERAGES</Text>
                            <Pressable style={styles.nextBtn}>
                                <Icon name="chevron-thin-right" size={18} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                }
                renderItem={({ item }) => <DishesCards dish={item} />}
            />
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