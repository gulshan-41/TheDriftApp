import { StyleSheet, View } from "react-native";
import DishesCards from "../cards/dishes-cards";

function DishesCardsGrid({ dishes }) {
    return (
        <View style={styles.gridWrapper}>
            {dishes.map((dish) => (
                <DishesCards key={dish.id} dish={dish} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    gridWrapper: {
        flexDirection: 'row',
        gap: 8,
        flexShrink: 1,
    },
});

export default DishesCardsGrid;