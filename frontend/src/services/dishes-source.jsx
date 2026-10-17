import dishesData from '../../assets/data/dishes-data.json';

const byId = {};
Object.values(dishesData).forEach((list) => {
    list.forEach((dish) => {
        byId[dish.id] = dish;
    });
});

export const getDishById = (id) => byId[id];