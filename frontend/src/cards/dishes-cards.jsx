import { useState, memo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import dishesImage from "../../assets/image-maps/dishes-image-map";

function DishesCards({ dish }) {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => setLiked((prev) => !prev);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => Math.max(0, prev - 1));

    return (
        <View style={styles.dishesCardsContainer}>
            <View style={styles.imageContainer}>
                <View style={styles.imageWrapper}>
                    <Image 
                        source={dishesImage[dish.id]}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.floatingContainer}>
                    <View style={styles.nameDescPriceWrapper}>
                <Text 
                    style={styles.dishName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >   
                    {dish.name}
                </Text>
                <Text 
                    style={styles.dishDesc}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {dish.description}
                </Text>
                <Text style={styles.dishPrice}>{Number(dish.price).toFixed(2)}</Text>
            </View>
                    <View style={styles.addLikeBtnWrapper}>
                        <Pressable style={styles.loveBtn} onPress={toggleLike}>
                            <Icon
                                name={liked ? "heart" : "heart-outlined"}
                                size={20}
                                color={liked ? "#FF4D8D" : "#fff"}
                            />
                        </Pressable>

                        {count === 0 ? (
                            <Pressable style={styles.addBtn} onPress={increment}>
                                <Icon name="plus" size={20} color="#fff" />
                            </Pressable>
                        ) : (
                            <View style={styles.addBtnWrapper}>
                                <Pressable style={styles.minusBtn} onPress={decrement}>
                                    <Icon name="minus" size={20} color="#fff" />
                                </Pressable>
                                <View style={styles.count}>
                                    <Text style={styles.countText}>{count}</Text>
                                </View>
                                <Pressable style={styles.plusBtn} onPress={increment}>
                                    <Icon name="plus" size={20} color="#fff" />
                                </Pressable>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dishesCardsContainer: {
        width: 200,
        minWidth: 180,
        flexShrink: 1,
        minHeight: 220,
        flexDirection: 'column',
        gap: 4,
    },
    imageContainer: {
        flex: 1,
        position: 'relative',
    },
    imageWrapper: {
        flex: 1,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    nameDescPriceWrapper: {
        padding: 12,
        backgroundColor: '#00000095',
        borderRadius: 16,

        position: 'relative',
    },
    dishName: {
        fontWeight: 800,
        color: '#fff'
    },
    dishDesc: {
        fontSize: 8,
        marginBottom: 3,
        color: '#fff'
    },
    dishPrice: {
        fontWeight: 800,
        lineHeight: 14,
        color: '#fff'
    },

    floatingContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: 19,
        padding: 9,

        position: 'absolute',
        bottom: 0,
    },
    addLikeBtnWrapper: {
        flexDirection: 'column',
        gap: 4,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    loveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    addBtnWrapper: {
        flexDirection: 'row',
        gap: 4,
    },
    addBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    plusBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    minusBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    count: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: '#00000090',
    },
    countText: {
        fontSize: 14,
        color: '#fff',
    }
});

export default memo(DishesCards);