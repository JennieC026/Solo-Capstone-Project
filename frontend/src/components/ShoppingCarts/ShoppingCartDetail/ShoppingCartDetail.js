import  {useEffect, useState, useRef}from'react';
import{ useDispatch, useSelector}from'react-redux';
import { useHistory } from "react-router-dom";
import ShoppingCartSelector from '../ShoppingCartSelector/ShoppingCartSelector';
import { fetchAllShoppingCarts,fetchCheckoutShoppingCart } from '../../../store/shoppingcarts';
import './ShoppingCartDetail.css'



function ShoppingCartDetail({shoppingCart}){
    const store = useSelector(state => state.stores[shoppingCart?.storeId]);
    const updatedShoppingCart = useSelector(state=>state.shoppingCarts[shoppingCart?.id]);
    const dispatch = useDispatch();
    const history = useHistory();
    const [shoppingCartDishes, setShoppingCartDishes] = useState(shoppingCart?.ShoppingCartDishes);
    const [newShoppingCart, setNewShoppingCart] = useState(shoppingCart);

    useEffect(()=>{
       if(updatedShoppingCart&&updatedShoppingCart?.ShoppingCartDishes&&updatedShoppingCart.id===shoppingCart.id){
           setShoppingCartDishes(updatedShoppingCart?.ShoppingCartDishes);
           setNewShoppingCart(updatedShoppingCart);
       }
    },[dispatch,updatedShoppingCart])

    const handleCheckout = async(e)=>{
        e.preventDefault();
        dispatch(fetchCheckoutShoppingCart(shoppingCart.id));
        history.push(`/shoppingCarts/${shoppingCart.id}/checkout`);
    }
        
    
    
    return(
        <div>
            <div className='shopping-cart-detail-container'>
                <div className='shopping-cart-detail-store-name-add-items-button-container'>
                <div className='shopping-cart-detail-store-name'>
                    {store?.name}
                    </div>
                    <div className='shopping-cart-add-items-menu-button'>
                        <button>...</button>
                        </div>
                    </div>
                    <div className='shopping-cart-detail-order-detail-items-container'>
                        <div className='shopping-cart-detail-order-detail-items'>
                            <div className='shopping-cart-detail-order-detail-item-amount'>
                                {newShoppingCart?.dishAmount===1? newShoppingCart.dishAmount + 'item' : newShoppingCart.dishAmount + 'items'}
                                </div>
                                <div className='shopping-cart-detail-order-detail-item-total'>
                                    Subtotal: {newShoppingCart?.total}
                                    </div>
                            </div>
                            <div className='shopping-cart-detail-order-detail-items'>
                                {shoppingCartDishes.map((shoppingCartDish)=>(
                                    <div className='shopping-cart-detail-single-item-container'>
                                        <div className='shopping-cart-detail-single-item-name-image-container'>
                                        <div className='shopping-cart-detail-single-item-name'>
                                            {shoppingCartDish?.Dish.name}
                                            </div>
                                            <div className='shopping-cart-detail-single-item-image-url-container'>
                                                <img src={shoppingCartDish?.Dish.imageUrl} alt={shoppingCartDish?.Dish.name} className='shopping-cart-detail-single-item-image-url'/>
                                                </div>
                                            </div>
                                        <div className='shopping-cart-detail-single-item-quantity-total-container'>
                                            <div className='shopping-cart-detail-single-item-quantity-selector'>
                                                <ShoppingCartSelector shoppingCartDish={shoppingCartDish}/>
                                            <div className='shopping-cart-detail-single-item-total'>
                                                ${shoppingCartDish?.Dish.price * shoppingCartDish?.quantity}
                                                </div>
                                                </div>

                                            </div>
                                                


                                        </div>
                                ))}
                                <div className='shopping-cart-detail-order-detail-subtotal'>
                                    {newShoppingCart?.total}
                                    </div>
                                    <button onClick={handleCheckout}>Checkout</button>
                                    <button>Add Items</button>
                                </div>
                        </div>
                

                </div>
        </div>
    )
}

export default ShoppingCartDetail;