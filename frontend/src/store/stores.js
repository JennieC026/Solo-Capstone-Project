import { csrfFetch } from "./csrf";
const LOAD_STORES = "storeS/LOAD_STORES";
const LOAD_ONE_STORE = "storeS/LOAD_ONE_STORE";

export const loadAllStores = (stores) => {
    return {
        type: LOAD_STORES,
        stores,
    };
}

export const loadOneStore = (store) => {
    return {
        type: LOAD_ONE_STORE,
        store,
    };
}
//thunk
export const fetchAllStores = () => async (dispatch) => {
    const response = await csrfFetch(`/api/stores`);
    if (response.ok) {
        const stores = await response.json();
        dispatch(loadAllStores(stores));
    }
    return response;
}

export const fetchOneStore = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/stores/${id}`);
    if (response.ok) {
        const store = await response.json();
        dispatch(loadOneStore(store));
    }
    return response;
}

const initialState = {};

const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORES: {
            const allStores = {};
            action.stores.forEach(store => {
                allStores[store.id] = store;
            });
            return {
                ...allStores,

            };
        }
        case LOAD_ONE_STORE: {
            const newState = {
                ...state,
                [action.store.id]: action.store,
            };
            return newState;
        }
        default:
            return state;
    }
}

export default storesReducer;