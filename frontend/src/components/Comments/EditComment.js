import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { fetchUpdateComment } from "../../store/comments";
import { fetchAllStores } from "../../store/stores";
import './EditComment.css'
function EditComment({comment,setShowUpdateCommentOrigin}){
    const dispatch = useDispatch();
    const ulRef = useRef();
    const [updateContent,setUpdateContent] = useState(comment.content);
    const [updateStars,setUpdateStars] = useState(comment.starRating);
    const [showUpdateComment,setShowUpdateComment] = useState(true);
    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const [hoveredStar, setHoveredStar] = useState(0);

    useEffect(()=>{
        
        const errorObj = {};

        if(updateContent.length > 200) errorObj.comment = 'Comment cannot be more than 200 characters';
                   
        if(updateContent.length === 0) errorObj.comment = 'Comment cannot be empty';

        if(updateStars === 0) errorObj.stars = 'Please select a star rating';

        setErrors(errorObj);
    
},[updateContent,updateStars])

    const handleUpdateCommentClick = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if(Object.keys(errors).length){
            return;
        }
        const data = {
            ...comment,
            content:updateContent,
            starRating:updateStars,
        }
        await dispatch(fetchUpdateComment(data));
        setShowUpdateCommentOrigin(false);
        setShowUpdateComment(false);
        await dispatch(fetchAllStores())
        
        
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
            onClick={()=>setUpdateStars(index)}             
            >
            <i className={`fa-${index<=updateStars?'solid':'regular'} fa-star`}
            style={{cursor:'pointer'}}></i>
            </button>
        )
    })}</div>)
    

    const disabled = updateContent.length > 200 ||updateContent.length === 0 || (updateContent===comment.content && updateStars===comment.starRating);


    return(<div>
        {showUpdateComment && (
            <div className="store-detail-edit-comment-form-container">
                <form onSubmit={handleUpdateCommentClick} className="store-detail-edit-comment-form">
                    <textarea className="store-detail-edit-comment-form-content" 
                     placeholder="How about this delivery experience?"
                     typeof="text"
                     value={updateContent}
                     onChange={(e)=>setUpdateContent(e.target.value)}
                     required  
                    >
                    

                    </textarea>
                    {isSubmitting && errors.comment && <div className="comment-error-container">{errors.comment}</div>}
                    {starRating}
                    {isSubmitting && errors.stars && <div className="comment-error-container">{errors.stars}</div>}
                    <button disabled={disabled} className="store-detail-edit-comment-form-button">Submit</button>
                </form>
            </div>
        )
        }
    </div>)
}
export default EditComment;