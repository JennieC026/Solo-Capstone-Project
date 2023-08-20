import { useEffect, useState, useRef}from'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchChangeDishQuantity,fetchAllShoppingCarts,fetchRemoveShoppingCart } from '../../../store/shoppingcarts';
import { useModal } from '../../../context/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './ShoppingCartSelector.css';


const ShoppingCartSelector = ({shoppingCartDish,handleCloseModal}) => {
    
    const [quantity,setQuantity] = useState(shoppingCartDish.quantity?shoppingCartDish.quantity:1);
    const shoppingCart = useSelector(state => state.shoppingCarts[shoppingCartDish.shoppingCartId]);
    const shoppingCarts = useSelector(state => state.shoppingCarts);
    const [shoppingCartState,setShoppingCartState] = useState(shoppingCart);
    
    const inputRef = useRef();
    const currentShoppingCartDishes = shoppingCart?.shoppingCartDishes;
    const [shoppingCartDishState,setShoppingCartDishState] = useState(shoppingCartDish);
    const {closeModal} = useModal();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (shoppingCart !== shoppingCartState) {
           setShoppingCartState(shoppingCart);
        }
      }, [shoppingCart]);
    

    const handleQuantityChange = async(e)=>{
        const value = e.target.value;
        if(value === 'remove'&&shoppingCartState.ShoppingCartDishes.length === 1){
           await dispatch(fetchRemoveShoppingCart(shoppingCartState.id,shoppingCartDish.id));
           await dispatch(fetchAllShoppingCarts()); 
           handleCloseModal(); 
           history.push(`/stores/${shoppingCartState.storeId}`);

            return;

        }else if(value === 'remove'){
            await dispatch(fetchRemoveShoppingCart(shoppingCart.id,shoppingCartDish.id));
           await dispatch(fetchAllShoppingCarts());
           
        
        }else{
            setQuantity(Number(value));
            shoppingCartDish.quantity = Number(value);
            dispatch(fetchChangeDishQuantity(shoppingCartDish.shoppingCartId,shoppingCartDish.id,Number(value)));

        }
        
    }








   
    
return (
    <div className='shopping-cart-detail-select-field-container'>
        <i class="fa-solid fa-angle-down"></i>
       <select className='shopping-cart-detail-select-field' 
       value={quantity} 
       onChange={handleQuantityChange} 
       >    
            <option value='remove'>Remove</option>
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
)


        
    }
    

   
export default ShoppingCartSelector;