import React,{ useEffect,useState,useRef } from 'react';
import{ useDispatch, useSelector}from'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchCreateComment } from '../../../store/comments';
import { fetchAllStores } from '../../../store/stores';
import { useHistory } from "react-router-dom";
import './CheckoutPage.css'


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

    let checkPastOrder = shoppingCart?.status === 'closed';
    
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
        <div className='checkout-page-component'>
            <div className='checkout-page--container-img'>
            
            <div className="checkout-container">
                <div className="checkout-info-container">
                    <div className="checkout-info-logo-container">
                    <img src="https://cdn.discordapp.com/attachments/811082976501825539/1142352525379510372/logo_copy.png" alt="logo" className="amber-eats-logo-checkout"/>
                        </div>
            <div className="checkout-header-container">
            <div className='checkout-thank-message'>Thanks for ordering,{sessionUser.firstName}</div>
            <div className='checkout-thank-message'>Enjoy your food!</div>
            </div>
            <div className="order-summary-container">
                <div className='order-summary-header'>Order Summary</div>
                <div className="order-summary-dishes-container">
                {shoppingCart && shoppingCart?.ShoppingCartDishes?.map((shoppingCartDish) => (
                    <div className="order-summary-dish-container">
                        <div className="order-summary-dish-name">
                            { shoppingCartDish?.Dish?.name?.length>20? shoppingCartDish?.Dish?.name?.slice(0,20):shoppingCartDish?.Dish?.name}
                            </div>
                            <div className="order-summary-dish-price">
                                ${shoppingCartDish?.Dish?.price}
                            </div>
                            </div>))}
                            </div>
                </div>
                <div className="order-total-container">
                    Order Total: ${shoppingCart?.total}
                    </div>
                    {showCommentBar && !existComment && <div className="order-comment-container">
                        <div className="order-comment-header">
                        <div className='checkout-leave-comment'>Leave a comment for {store?.name} (Optional)</div>
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
                                <button className="order-submit-comment-button" onClick={handleSubmitComment} disabled={disabled}>Submit</button>
                                <button className='order-clear-comment-button' onClick={handleClearClick}>Clear</button>
                                </div>
                                </div>}
                    {!showCommentBar && <div className="order-thanks-comment-container">
                        Thanks for the comment!
                        </div>}
                        <div className="order-done-button-container">
                        <button onClick={handleDoneClick} className='checkout-done-button'>Done</button>
                        </div>

                    </div>
                </div>
                <div className='checkout-thanks-llama-img'>
                    <img src='https://cdn.discordapp.com/attachments/811082976501825539/1154718814160818187/thnaks-llama_copy.png'/>
                </div>
                </div>
            
        </div>
    )
}

export default CheckoutPage;