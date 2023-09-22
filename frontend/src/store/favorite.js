import { csrfFetch } from "./csrf";

const LOAD_FAVORITES = "favorites/LOAD_FAVORITES";
const ADD_FAVORITE = "favorites/ADD_FAVORITE";
const REMOVE_FAVORITE = "favorites/REMOVE_FAVORITE";

const loadFavorites = (favorites) => {
    return {
        type: LOAD_FAVORITES,
        favorites,
    }
}

const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        favorite,
    }
}

const removeFavorite = (favoriteId) => {
    return {
        type: REMOVE_FAVORITE,
        favoriteId,
    }
}

//thunk

export const fetchFavorites = () => async (dispatch) =>{
    const response = await csrfFetch(`/api/stores/favorites`);
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const favorites = await response.json();
    dispatch(loadFavorites(favorites));

    return response;
}

export const createFavorite = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const favorite = await response.json();
    dispatch(addFavorite(favorite));

    return response;
}

export const deleteFavorite = (storeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites/${storeId}`, {
        method: "DELETE",
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    dispatch(removeFavorite(storeId));

    return response;
}

const initialState = {};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FAVORITES: {
            const allFavorites = {};
            action.favorites.forEach(favorite => {
                allFavorites[favorite.id] = favorite;
            });
            return {
                ...state,
                ...allFavorites,
            };
        }
        case ADD_FAVORITE: {
            const newState = {
                ...state,
                [action.favorite.id]: action.favorite,
            };
            return newState;
        }
        case REMOVE_FAVORITE: {
            const newState = { ...state };
            delete newState[action.favoriteId];
            return newState;
        }
        default:
            return state;
    }
}