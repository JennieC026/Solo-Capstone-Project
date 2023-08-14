import { csrfFetch } from "./csrf";
const LOAD_STORE_DISHES = "dishes/LOAD_STORE_DISHES";

export const loadStoreDishes = (dishes) => {
    return {
        type: LOAD_STORE_DISHES,
        dishes,
    };
};

//thunk
export const fetchStoreDishes = (storeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stores/${storeId}/dishes`);
    if (response.ok) {
        const dishes = await response.json();
        dispatch(loadStoreDishes(dishes));
    }
    return response;
};

const initialState = {};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORE_DISHES: {
            const allDishes = {};
            action.dishes.forEach(dish => {
                allDishes[dish.id] = dish;
            });
            return {
                ...state,
                ...allDishes,
            };
        }
        default:
            return state;
    }
}

export default dishesReducer;