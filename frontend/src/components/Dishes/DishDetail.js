import { useEffect, useState }from'react';
import{useDispatch,useSelector}from'react-redux'
import { fetchStoreDishes } from '../../store/dishes';
import { fetchAllStores } from '../../store/stores';
import { useParams } from 'react-router-dom';
import { NavLink,useHistory } from 'react-router-dom/cjs/react-router-dom';
import { fetchCreateShoppingCart,fetchEditShoppingCart,fetchAllShoppingCarts } from '../../store/shoppingcarts';
import './DishDetail.css'

function DishDetail(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {dishId,storeId} = useParams();
    const dish = useSelector(state => state.dishes[dishId]);
    const store = useSelector(state => state.stores[dish?.storeId])
    const shoppingCarts = useSelector(state => state.shoppingCarts)
    const shoppingCartsArr = Object.values(shoppingCarts).filter(shoppingCart => shoppingCart.status === 'open');
    const shoppingCartDishes = shoppingCartsArr?.find(shoppingCart => shoppingCart.storeId === parseInt(dish?.storeId))?.shoppingCartDishes;
    const shoppingCartDish = shoppingCartDishes?.find(shoppingCartDish => shoppingCartDish.dishId === parseInt(dishId));
    const [quantity,setQuantity] = useState(shoppingCartDish?.quantity? shoppingCartDish.quantity : 1);
    


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
            console.log('quantity',quantity)
            dispatch(fetchEditShoppingCart(existShoppingCart.id,dishId,quantity));
            dispatch(fetchAllShoppingCarts());
            
        }else{
        dispatch(fetchCreateShoppingCart(storeId,dishId,quantity));
        dispatch(fetchAllShoppingCarts());

        }
        history.push(`/stores/${storeId}`);
        

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
                <div className='dish-detail-quantity-selector-container'>
                <select className='shopping-cart-detail-select-field' 
       value={quantity} 
       onChange={(e)=>setQuantity(e.target.value)} 
       >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>

       </select>
                    </div>
                <button className='dish-detail-add-to-cart-button' onClick={handleAddToCartClick}>Add {quantity} to Order  •  {dish.price}</button>
                </div>
                
                </div>
        </div>
    )
}

export default DishDetail;