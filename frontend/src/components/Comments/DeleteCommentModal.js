import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteCommentModal.css"
import { fetchDeleteComment } from "../../store/comments";
import { fetchAllStores } from "../../store/stores";

function  DeleteCommentModal({commentId}){
    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const handleDeleteClick =async (commentId) =>{
        try{
            await dispatch(fetchDeleteComment(commentId))
            await dispatch(fetchAllStores())
            closeModal();

        }catch(error){
            const data = await error.json();
             if (data && data.errors) {
               setErrors(data.errors);
             }

        }
        
     }
     const handleCancelDeleteClick = () =>{
        closeModal();
       }

       return (
        <div className="delete-m">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this review?
    </p>
             <button id="delete-button-yes"onClick={()=>handleDeleteClick(commentId)}>{'Yes (Delete Review)'}</button>
             <button id='delete-button-no' onClick={handleCancelDeleteClick}>{'No (Keep Review)'}</button>
           </div>
          
      );
    
}

export default DeleteCommentModal;