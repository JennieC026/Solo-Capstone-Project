import  {csrfFetch}  from './csrf';
const LOAD_ALL_SHOPPING_CARTS = "shoppingCarts/LOAD_ALL_SHOPPING_CARTS";
const CREATE_SHOPPING_CART = "shoppingCarts/CREATE_SHOPPING_CART";
const EDIT_SHOPPING_CART = "shoppingCarts/EDIT_SHOPPING_CART";
const REMOVE_SHOPPING_CART = "shoppingCarts/REMOVE_SHOPPING_CART";
const REMOVE_DISH_FROM_SHOPPING_CART = "shoppingCarts/REMOVE_DISH_FROM_SHOPPING_CART";
const CHECKOUT_SHOPPING_CART = "shoppingCarts/CHECKOUT_SHOPPING_CART";
const CHANGE_DISH_QUANTITY = "shoppingCarts/CHANGE_DISH_QUANTITY";

export const loadAllShoppingCarts = (shoppingCarts) => {
    return {
        type: LOAD_ALL_SHOPPING_CARTS,
        shoppingCarts,
    }
}

export const createShoppingCart = (shoppingCart) => {
    return {
        type: CREATE_SHOPPING_CART,
        shoppingCart,
    }
}

export const editShoppingCart = (shoppingCart) => {
    return {
        type: EDIT_SHOPPING_CART,
        shoppingCart,
    }
}

export const removeShoppingCart = (shoppingCartId) => {
    return {
        type: REMOVE_SHOPPING_CART,
        shoppingCartId,
    }
}

export const removeDishFromShoppingCart = (shoppingCartId,dishId) => {
    return {
        type: REMOVE_DISH_FROM_SHOPPING_CART,
        shoppingCartId,
        dishId,
    }
}

export const checkoutShoppingCart = (shoppingCart) => {
    return {
        type: CHECKOUT_SHOPPING_CART,
        shoppingCart,
    }
}

export const changeDishQuantity = (shoppingCart) => {
    return {
        type: CHANGE_DISH_QUANTITY,
        shoppingCart
    }
}


//thunk
export const fetchAllShoppingCarts = () => async (dispatch) =>{
    const response = await csrfFetch(`/api/shoppingCarts`);
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const shoppingCarts = await response.json();
    dispatch(loadAllShoppingCarts(shoppingCarts));

    return response;
}


export const fetchCreateShoppingCart = (storeId,dishId,quantity) => async (dispatch) =>{
    const response = await csrfFetch(`/api/shoppingCarts/new`, {
        method: "POST",
        body: JSON.stringify({storeId,dishId,quantity}),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const newShoppingCart = await response.json();
    dispatch(createShoppingCart(newShoppingCart));

    return response;
}

export const fetchEditShoppingCart = (shoppingCartId,dishId,quantity) => async (dispatch) =>{
    const response = await csrfFetch(`/api/shoppingCarts/${shoppingCartId}/shoppingCartDish/${dishId}`, {
        method: "POST",
        body: JSON.stringify({quantity}),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const editedShoppingCart = await response.json();
    dispatch(editShoppingCart(editedShoppingCart));

    return response;
}

export const fetchRemoveShoppingCart = (shoppingCartId,dishId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/shoppingCarts/${shoppingCartId}/shoppingCartDish/${dishId}`, {
        method: "DELETE",
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const removedShoppingCart = await response.json();
    if(removedShoppingCart.message==="Order deleted"){
        dispatch(removeShoppingCart(removedShoppingCart.id));
        return response;

    }else{
        dispatch(removeDishFromShoppingCart(removedShoppingCart.id,dishId));
        return response;
}

    }
    

export const fetchCheckoutShoppingCart = (shoppingCartId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/shoppingCarts/${shoppingCartId}/checkout`, {
        method: "PUT",
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const checkedOutShoppingCart = await response.json();
    dispatch(checkoutShoppingCart(checkedOutShoppingCart));

    return response;
}

export const fetchChangeDishQuantity = (shoppingCartId,dishId,quantity) => async (dispatch) =>{
    console.log('dishIdInThunk',dishId)
    const response = await csrfFetch(`/api/shoppingCarts/${shoppingCartId}/shoppingCartDish/${dishId}`, {
        method: "PUT",
        body: JSON.stringify({quantity}),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const changedShoppingCart = await response.json();
    dispatch(changeDishQuantity(changedShoppingCart));
    return response;
}

const initialState = {};


const shoppingCartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_SHOPPING_CARTS: {
            const allShoppingCarts = {...state};
            action.shoppingCarts.forEach(shoppingCart => {
                allShoppingCarts[shoppingCart.id] = shoppingCart;
            });
            return allShoppingCarts;
        }
        case CREATE_SHOPPING_CART: {
            return {...state,[action.shoppingCart.id]: action.shoppingCart};
        }
        case EDIT_SHOPPING_CART: {
            return {...state,[action.shoppingCart.id]: action.shoppingCart};
        }
        case REMOVE_SHOPPING_CART: {
            const newState = {...state};
            delete newState[action.shoppingCartId];
            return newState;
        }
        case REMOVE_DISH_FROM_SHOPPING_CART: {
            const newState = {...state};
            newState[action.shoppingCartId].ShoppingCartDishes = newState[action.shoppingCartId].ShoppingCartDishes.filter(shoppingCartDish => shoppingCartDish.dishId !== action.dishId);
            return newState;
        }
        case CHECKOUT_SHOPPING_CART: {
            return {...state,[action.shoppingCart.id]: action.shoppingCart};
        }
        case CHANGE_DISH_QUANTITY: {
            return {...state,[action.shoppingCart.id]: action.shoppingCart};
        }
        default:
            return state;
    }
}

export default shoppingCartsReducer;