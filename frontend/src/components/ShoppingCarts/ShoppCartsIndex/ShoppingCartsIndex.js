import './ShoppingCartsIndex.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect,useState,useRef } from 'react';
import { fetchAllShoppingCarts } from '../../../store/shoppingcarts';
import { fetchAllStores } from '../../../store/stores';
import ShoppingCartDetail from '../ShoppingCartDetail/ShoppingCartDetail';
import OpenModalButton from '../../OpenModalButton';
import OpenRightSideModalButton from '../../OpenModalButton/RightSide';

function ShoppingCartsIndex(){
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const sessionUser = useSelector(state => state.session.user);
    const shoppingCarts = useSelector(state => state.shoppingCarts);
    const stores = useSelector(state => state.stores);
    const shoppingCartsArr = Object.values(shoppingCarts).filter(shoppingCart => shoppingCart.status === 'open');
    const storesArr = Object.values(stores);

   

    useEffect(() => {
        if(sessionUser){
            dispatch(fetchAllShoppingCarts(sessionUser.id));
        }
    }, [dispatch,sessionUser]);

    useEffect(() => {
        if(!storesArr.length){
            dispatch(fetchAllStores());
        }
    }, [dispatch,storesArr]);




   
    let checkIfOnlyOneCart;

        if(shoppingCartsArr.length === 1){
            checkIfOnlyOneCart = true;
        }else{
            checkIfOnlyOneCart =  false;
        }
  

    if(!sessionUser){
        return(
            <div>Need to log in to view the shopping carts.</div>
        )
    }

    if(!shoppingCartsArr.length){
        return(
            <div>Add Items to start a cart</div>
        )
    }

    return(
        <>
       
        <div  ref={ulRef}>
            {checkIfOnlyOneCart && <ShoppingCartDetail shoppingCart={shoppingCartsArr[0]}/>}
            {!checkIfOnlyOneCart && shoppingCartsArr.map((shoppingCart)=>(
                <OpenRightSideModalButton
                buttonText={<div className='shopping-carts-index-single-cart-container'>
                <div className='shopping-carts-index-single-cart-store-name'>
                    {stores[shoppingCart.storeId]?.name}
                    </div>
                    <div className='shopping-carts-index-single-cart-total'>
                        Subtotal: {shoppingCart.total}
                        </div>
                        
                        </div>}
                modalComponent={<ShoppingCartDetail shoppingCart={shoppingCart}/>}
              />
 
                ))}

        </div>
        </>
        
    )
}

export default ShoppingCartsIndex;