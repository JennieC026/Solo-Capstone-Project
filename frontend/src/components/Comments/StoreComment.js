import './StoreComment.js'
import {useState}from'react';
import{useDispatch,useSelector}from'react-redux'
import EditComment from './EditComment.js';
import OpenModalButton from '../OpenModalButton'
import DeleteCommentModal from './DeleteCommentModal.js';



function StoreComment({store}){
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showUpdateComment, setShowUpdateComment] = useState(false);
    const handleToggle = () => {
        setShowUpdateComment((ele) => !ele);
      };


    const commentDisplay = (comments) => {
        if(comments){
            if(comments.length === 0){
                return(
                    <div>Be the first one to comment!</div>
                )
            }
         return (
             <div>
                <div className='store-detail-all-comments-container'>
                <ol className='store-detail-comments-map-container'>
                    {comments.map((comment)=>(
                        <div className='store-detail-single-comment-container'>
                            <div className='store-detail-single-comment-user-avatar-info-container'>
                            <div className='store-detail-single-comment-user-avatar'>
                                <img src={comment.User.photoUrl} alt={comment.User.firstName} className='user-profile-user-avatar-img'/>
                            </div>
                            <div className='store-detail-single-comment-user-name-created-time-star-rating-container'>
                                <div className='store-detail-single-comment-user-name-star-rating-container'>
                                <div className='store-detail-single-comment-user-name'>
                                {comment.User.firstName +' '+ comment.User.lastName[0]+'.'}
                            </div>
                            <div className='store-detail-single-comment-star-rating'>
                            <div>
                                 {Array(comment.starRating).fill().map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                            </div>
                                </div>
                            
                            <div className='store-detail-single-comment-created-time'>
                                {comment.updatedAt}
                            </div>
                            </div>
                            </div>
                        <div className='store-detail-single-comment-content'>
                            {comment.content}
                        </div>
                        {sessionUser?.id === comment.User.id && (
                            <div className='store-detail-single-comment-edit-button' onClick={handleToggle}>
                                Edit                  
                            </div>
                        )}
                        {sessionUser?.id === comment.User.id && 
                        <OpenModalButton
                        className='cursor-button'
                          buttonText="Delete"
                          modalComponent={<DeleteCommentModal commentId={comment.id}/>}/>
                        }
                        
                        {showUpdateComment && sessionUser?.id === comment.User.id &&
                        <EditComment comment={comment} setShowUpdateCommentOrigin={setShowUpdateComment} />
                        }

                            


                        </div>
                    ))}

                </ol>
             </div>
                 
             </div>
         )
        }else{
            return(
                <h1>Loading...</h1>

            )

        }

        
     }


     return(
        <div>
            <div className='store-detail-comments-title-content-container'>

<div className='store-detail-comments-title'>
    Reviews
</div>
{commentDisplay(store?.Comments)}
</div>
        </div>
     )
}

export default StoreComment;