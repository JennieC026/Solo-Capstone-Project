import {useEffect}from'react';
import{useDispatch,useSelector}from'react-redux'
import { fetchStoreDishes } from '../../store/dishes';
import { fetchAllStores } from '../../store/stores';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { fetchCreateShoppingCart,fetchEditShoppingCart,fetchAllShoppingCarts } from '../../store/shoppingcarts';
import './DishDetail.css'

function DishDetail(){
    const dispatch = useDispatch();
    const {dishId,storeId} = useParams();
    const dish = useSelector(state => state.dishes[dishId]);
    const store = useSelector(state => state.stores[dish?.storeId])
    const shoppingCarts = useSelector(state => state.shoppingCarts)
    const shoppingCartsArr = Object.values(shoppingCarts);

    


    useEffect(() => {
        if(!dish){
            dispatch(fetchStoreDishes(storeId));
        }
    }, [dispatch]);

    useEffect(() => {
        if(!store){
            dispatch(fetchAllStores());
        }
    }, [dispatch]);

    const handleAddToCartClick = () => {
        const existShoppingCart = shoppingCartsArr.find((shoppingCart) => shoppingCart.storeId === parseInt(storeId));
    
        if(existShoppingCart){
            dispatch(fetchEditShoppingCart(existShoppingCart.id,dishId,1));
            dispatch(fetchAllShoppingCarts());
            
        }else{
        dispatch(fetchCreateShoppingCart(storeId,dishId,1));
        dispatch(fetchAllShoppingCarts());

        }
        window.alert('Added to Order')
        

    }


    if(!dish||!store){
        return(<div>Loading...</div>)
    }
    
    return(
        <div>
            <NavLink to={`/stores/${dish.storeId}`} className='dish-detail-back-link'>
            <div >
            Back to {store?.name}
            </div>
                </NavLink>
                <div className='dish-detail-image-info-container'>
                    <div className='dish-detail-image-container'>
                        <img className='dish-detail-image' src={dish.imageUrl} alt={dish.name}/>
                    </div>
                    <div className='dish-detail-info-button-container'>
                    <div className='dish-detail-info-container'>
                        <div className='dish-detail-info-name'>
                            <h1>{dish.name}</h1>
                            </div>
                            {dish.calorie ?  dish.calorie+' Cal' : 'No calorie information'}
                            {'$' + dish.price}

                </div>
                <button className='dish-detail-add-to-cart-button' onClick={handleAddToCartClick}>Add 1 to Order  •  {dish.price}</button>
                </div>
                
                </div>
        </div>
    )
}

export default DishDetail;