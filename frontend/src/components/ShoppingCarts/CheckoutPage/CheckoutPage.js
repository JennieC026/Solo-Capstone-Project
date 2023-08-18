import React,{ useEffect,useState,useRef } from 'react';
import{ useDispatch, useSelector}from'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchCreateComment } from '../../../store/comments';
import { fetchAllStores } from '../../../store/stores';
import { useHistory } from "react-router-dom";

function CheckoutPage(){
    const { shoppingCartId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const shoppingCart = useSelector(store => store.shoppingCarts[shoppingCartId]);
    const sessionUser = useSelector(store => store.session.user);
    const store = useSelector(state => state.stores[shoppingCart?.storeId]);
    
    const [comment, setComment] = useState('');
    const [hoveredStar, setHoveredStar] = useState(0);
    const [stars,setStars] = useState(0);
    const [showCommentBar,setShowCommentBar] = useState(true);
    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    let existComment = store?.Comments?.find(comment => comment.userId === sessionUser.id);
    
    useEffect(()=>{
        
            const errorObj = {};

            if(comment.length>200) errorObj.comment = 'Comment cannot be more than 200 characters';
                       
            if(comment.length === 0) errorObj.comment = 'Comment cannot be empty';

            if(stars === 0) errorObj.stars = 'Please select a star rating';

            setErrors(errorObj);
        
    },[comment,stars])


    const handleSubmitComment = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if(Object.keys(errors).length){
            return;
        }
        const newComment = {
            content:comment,
            starRating:stars,
        };
        await dispatch(fetchCreateComment(shoppingCart.storeId,newComment));
        setShowCommentBar(false);
        await dispatch(fetchAllStores())
       

    }

    const handleDoneClick = async (e) => {
        e.preventDefault();
        history.push(`/`);

    }

    const handleClearClick = async (e) => {
        e.preventDefault();
        setComment('');
        setStars(0);
        setIsSubmitting(false);
        setErrors({});
    }



        const handleStarHover = (index) =>{
            setHoveredStar(index);
          }
    
          const starRating = (<div> {[...Array(5)].map((star,index)=>{
            index += 1;
            return (
                <button
                type="button"
                key={index}    
                id="star-button"
                onClick={()=>setStars(index)}             
                >
                <i className={`fa-${index<=stars?'solid':'regular'} fa-star`}
                style={{cursor:'pointer'}}></i>
                </button>
            )
        })}</div>)

        const disabled = comment.length > 200 ;

    return(
        <div>
            <div className="checkout-container">
            <div className="checkout-header-container">
            <h1>Thanks for your Order,{sessionUser.firstName}</h1>
            </div>
            <div className="order-summary-container">
                {shoppingCart && shoppingCart?.ShoppingCartDishes?.map((shoppingCartDish) => (
                    <div className="order-summary-dish-container">
                        <div className="order-summary-dish-name">
                            <h3>{shoppingCartDish?.Dish?.name}</h3>
                            </div>
                            <div className="order-summary-dish-price">
                                <h3>${shoppingCartDish?.Dish?.price}</h3>
                            </div>
                            </div>))}
                </div>
                <div className="order-total-container">
                    <h3>Order Total: ${shoppingCart?.total}</h3>
                    </div>
                    {showCommentBar && !existComment && <div className="order-comment-container">
                        <div className="order-comment-header">
                        <h3>Leave a comment for {store?.name} (Optional)</h3>
                        </div>
                        <div className="order-comment-input-container">
                            <textarea className="order-comment-input" 
                            placeholder="Leave a comment for the store" 
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)} 
                            required
                            ></textarea>
                            </div>
                            {isSubmitting && errors.comment && <div className="comment-error-container">{errors.comment}</div>}
                            {starRating}
                            {isSubmitting && errors.stars && <div className="comment-error-container">{errors.stars}</div>}
                            <div className="order-submit-comment-container">
                                <button className="order-submit-comment-button" onClick={handleSubmitComment} disabled={disabled}>Submit Comment</button>
                                <button className='order-clear-comment-button' onClick={handleClearClick}>Clear</button>
                                </div>
                                </div>}
                    {!showCommentBar && <div className="order-thanks-comment-container">
                        Thanks for the comment!
                        </div>}
                        <button onClick={handleDoneClick}>Done</button>


                </div>
            
        </div>
    )
}

export default CheckoutPage;