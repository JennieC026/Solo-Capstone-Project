import './PastOrderPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllShoppingCarts } from '../../../store/shoppingcarts';
import { fetchAllStores } from '../../../store/stores';


function PastOrderPage(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const stores = useSelector(state => Object.values(state.stores));
    const shoppingCarts = useSelector(state => Object.values(state.shoppingCarts));
    const filteredShoppingCarts = shoppingCarts.filter(shoppingCart => shoppingCart.status === 'closed');
    
    
    useEffect(() => {
        if(shoppingCarts.length === 0){
            dispatch(fetchAllShoppingCarts());
        }
    }, [dispatch]);

    useEffect(() => {
        if(stores.length === 0){
            dispatch(fetchAllStores());
        }
    }, [dispatch]);


    if(!user){
        return(
            <div className='need-to-login-container'>
                <div className='need-to-login'>
                    You need to login to see your past orders!
                </div>
            </div>
        )
    }

    if(shoppingCarts.length>=0&&filteredShoppingCarts.length === 0){
        return(
            <div className='no-past-orders-container'>
                <div className='no-past-orders'>
                    You have no past orders.
                </div>
            </div>

        )
    }



    



    return(
        <div className='past-order-component'>{
            filteredShoppingCarts.map(shoppingCart => (
                <div className='past-order-container'>
                    
                    <div className='past-order-store-name-address'>
                        {shoppingCart?.Store?.name}
                           
                                ({shoppingCart?.Store?.address})
                        
                    </div>
                    
                        
                  
                    <div className='past-order-item-amount'>
                        {shoppingCart?.dishAmount} items
                    </div>
                    </div>
                    ))
                    
                    
                    }
            </div>
    )
}

export default PastOrderPage;