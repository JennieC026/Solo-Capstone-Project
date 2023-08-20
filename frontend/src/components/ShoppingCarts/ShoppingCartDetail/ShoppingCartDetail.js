import  {useEffect, useState, useRef}from'react';
import{ useDispatch, useSelector}from'react-redux';
import { useHistory } from "react-router-dom";
import ShoppingCartSelector from '../ShoppingCartSelector/ShoppingCartSelector';
import { fetchAllShoppingCarts,fetchCheckoutShoppingCart } from '../../../store/shoppingcarts';
import { useRightSideModal } from '../../../context/SideModal/RightSideModal';
import { fetchRemoveWholeShoppingCart } from '../../../store/shoppingcarts';
import './ShoppingCartDetail.css'



function ShoppingCartDetail({shoppingCart}){
    const store = useSelector(state => state.stores[shoppingCart?.storeId]);
    const updatedShoppingCart = useSelector(state=>state.shoppingCarts[shoppingCart?.id]);
    const dispatch = useDispatch();
    const history = useHistory();
    const {closeModal} = useRightSideModal();
    const [shoppingCartDishes, setShoppingCartDishes] = useState(shoppingCart?.ShoppingCartDishes);
    const [newShoppingCart, setNewShoppingCart] = useState(shoppingCart);
    const [showMenu, setShowMenu] = useState(false);

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
        closeModal();
    }

    const handleCloseModal = () => {
        closeModal();
    }
    const handleAddItems = () => {
        closeModal();
        history.push(`/stores/${shoppingCart.storeId}`);

    }
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    const handleClearCart = async(e) => {
        e.preventDefault();
        await dispatch(fetchRemoveWholeShoppingCart(shoppingCart.id));
        await dispatch(fetchAllShoppingCarts());
        closeModal();
    }
    const handleCloseModalClick = () => {
        closeModal();
    }

    return(
        <div>
            <div className='shopping-cart-detail-container'>
                <div className='shopping-cart-detail-close-modal-button' onClick={handleCloseModalClick}>
                <i class="fa-solid fa-xmark"></i>
                    </div>
                <div className='shopping-cart-detail-store-name-add-items-button-container'>
                <div className='shopping-cart-detail-store-name'>
                    {store?.name}
                    </div>
                    <div >
                        <button onClick={handleMenuClick} className='shopping-cart-add-items-menu-button'>...</button>
                        {showMenu&&<div className='shopping-cart-buttons-menu'>
                            <div className='shopping-cart-buttons-container'>
                            <button onClick={handleAddItems} className='shopping-cart-buttons-menu-add-items'><i class="fa-solid fa-plus"></i><div>Add Items</div></button>
                                </div>
                                <div className='shopping-cart-buttons-container-bottom'>
                                <button onClick={handleClearCart} className='shopping-cart-buttons-menu-clear-carts'><i class="fa-solid fa-trash"></i><div>Clear Cart</div></button>
                                    </div>
                        
                       
                        
                            </div>
                        }
                        </div>
                    </div>
                    <div className='shopping-cart-detail-order-detail-items-container'>
             
                            <div className='shopping-cart-detail-order-detail-item-amount'>
                                {newShoppingCart?.dishAmount===1? newShoppingCart.dishAmount + 'item' : newShoppingCart.dishAmount + 'items'}
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
                                                <ShoppingCartSelector shoppingCartDish={shoppingCartDish} handleCloseModal={handleCloseModal}/>
                                                </div>
                                            <div className='shopping-cart-detail-single-item-total'>
                                                ${(shoppingCartDish?.Dish.price * shoppingCartDish?.quantity).toFixed(2)}
                                                
                                                </div>

                                            </div>
                                                


                                        </div>
                                ))}
                                </div>
                               
                                <div className='shopping-cart-detail-order-subtotal'>
                                    <div> Subtotal</div>
                                    <div>{newShoppingCart?.total}</div>
                                    </div>
                                   
                                    <div className='shopping-cart-detail-order-checkout-add-items-container'>
                                    <button className='shopping-cart-detail-order-checkout-button' onClick={handleCheckout}>Checkout</button>
                                    <button className='shopping-cart-detail-order-add-items-button' onClick={handleAddItems}>Add Items</button>
                                    </div>
                                
                        </div>
                

                </div>
        </div>
    )
}

export default ShoppingCartDetail;