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

    let existComment = store?.Comments?.find(comment => comment.userId === sessionUser.id);

    const handleSubmitComment = async(e) => {
        e.preventDefault();
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


    return(
        <div>
            <div className="checkout-container">
            <div className="checkout-header-container">
            <h1>Thanks for your Order,{sessionUser.firstName}</h1>
            </div>
            <div className="order-summary-container">
                {shoppingCart && shoppingCart?.shoppingCartDishes?.map((shoppingCartDish) => (
                    <div className="order-summary-dish-container">
                        <div className="order-summary-dish-name">
                            <h3>{shoppingCartDish.dish.name}</h3>
                            </div>
                            <div className="order-summary-dish-price">
                                <h3>${shoppingCartDish.dish.price}</h3>
                            </div>
                            </div>))}
                </div>
                <div className="order-total-container">
                    <h3>Order Total: ${shoppingCart?.total}</h3>
                    </div>
                    {showCommentBar && !existComment && <div className="order-comment-container">
                        <div className="order-comment-header">
                        <h3>Leave a comment for {store?.name}</h3>
                        </div>
                        <div className="order-comment-input-container">
                            <textarea className="order-comment-input" placeholder="Leave a comment for the store" onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            {starRating}
                            <div className="order-submit-comment-container">
                                <button className="order-submit-comment-button" onClick={handleSubmitComment}>Submit Comment</button>
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