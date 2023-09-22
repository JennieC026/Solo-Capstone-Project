import { csrfFetch } from "./csrf";

const LOAD_CATEGORIES = "categories/LOAD_CATEGORIES";

const loadCategories = (categories) => {
    return {
        type: LOAD_CATEGORIES,
        categories,
    }
}

//thunk
export const fetchCategories = () => async (dispatch) =>{
    const response = await csrfFetch(`/api/categories`);
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const categories = await response.json();
    dispatch(loadCategories(categories));

    return response;
}

const initialState = {};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES: {
            const allCategories = {};
            action.categories.forEach(category => {
                allCategories[category.id] = category;
            });
            return {
                ...state,
                ...allCategories,
            };
        }
        default:
            return state;
    }
}

export default categoriesReducer;