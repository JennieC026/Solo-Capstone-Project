import './StoreComment.css'
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

            const calculateTimeAgo = (time) => {
                const timeAgo = Date.now() - new Date(time);
            
                const seconds = Math.floor(timeAgo / 1000);
                const minutes = Math.floor(seconds / 60);
                const hours = Math.floor(minutes / 60);
                const days = Math.floor(hours / 24);
                const weeks = Math.floor(days / 7);
                const months = Math.floor(days / 30);
                const years = Math.floor(days / 365);
            
                if (years > 0) {
                    return years + (years === 1 ? ' year ago' : ' years ago');
                }
                if (months > 0) {
                    return months + (months === 1 ? ' month ago' : ' months ago');
                }
                if (weeks > 0) {
                    return weeks + (weeks === 1 ? ' week ago' : ' weeks ago');
                }
                if (days > 0) {
                    return days + (days === 1 ? ' day ago' : ' days ago');
                }
                if (hours > 0) {
                    return hours + (hours === 1 ? ' hour ago' : ' hours ago');
                }
                if (minutes > 0) {
                    return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');
                }
                return seconds + (seconds === 1 ? ' second ago' : ' seconds ago');
            };
               

         return (
            
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
                            <div className='store-detail-single-comment-created-time'>
                            <div>
                            {calculateTimeAgo(comment.updatedAt)}
                                 
                            </div>
                            </div>
                                </div>
                            
                            <div className='store-detail-single-comment-star-rating'>
                            {Array(comment.starRating).fill().map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))}
                                
                            </div>
                            </div>
                            </div>
                            <div className='store-detail-single-comment-content-container'>
                        <div className='store-detail-single-comment-content'>
                            {comment.content}
                        </div>
                        <div className='comment-edit-delete-button'>
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

                        </div>
                        
                        </div>
                        
                        {showUpdateComment && sessionUser?.id === comment.User.id &&
                        <EditComment comment={comment} setShowUpdateCommentOrigin={setShowUpdateComment} />
                        }

                            


                        </div>
                    ))}

                </ol>
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