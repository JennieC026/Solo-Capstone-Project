import { useEffect, useState, useRef}from'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchChangeDishQuantity,fetchAllShoppingCarts } from '../../../store/shoppingcarts';

import './ShoppingCartSelector.css';


const DishDetailSelector = ({shoppingCartDish}) => {
    
    const [quantity,setQuantity] = useState(shoppingCartDish.quantity?shoppingCartDish.quantity:1);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const handleQuantityChange = (e)=>{
        const value = e.target.value;
        setQuantity(Number(value));
        shoppingCartDish.quantity = Number(value);
        dispatch(fetchChangeDishQuantity(shoppingCartDish.shoppingCartId,shoppingCartDish.id,Number(value)));
        
    }








   
    
return (
    <div className='shopping-cart-detail-select-field-container'>
       <select className='shopping-cart-detail-select-field' 
       value={quantity} 
       onChange={handleQuantityChange} 
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
)


        
    }
    

   
export default DishDetailSelector;