import { csrfFetch } from "./csrf";
const LOAD_USER_COMMENTS = "comments/LOAD_USER_COMMENTS";
const CREATE_COMMENTS = "comments/CREATE_COMMENTS";
const UPDATE_COMMENTS = "comments/UPDATE_COMMENTS";
const DELETE_COMMENTS = "comments/DELETE_COMMENTS";


export const loadUserComments = (comments) => {
    return {
        type: LOAD_USER_COMMENTS,
        comments,
    }
}

export const createComments = (comment) => {
    return {
        type: CREATE_COMMENTS,
        comment,
    }
}


export const updateComments = (comment) => {
    return {
        type: UPDATE_COMMENTS,
        comment,
    }
}

export const deleteComments = (commentId) => {
    return {
        type: DELETE_COMMENTS,
        commentId,
    }
}

//thunk
export const fetchUserComments = () => async (dispatch) =>{
    const response = await csrfFetch(`/api/comments/currentUser`);
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const comments = await response.json();
    dispatch(loadUserComments(comments));

    return response;
}

export const fetchCreateComment = (storeId,comment) => async (dispatch) =>{
    const response = await csrfFetch(`/api/stores/${storeId}/comments`, {
        method: "POST",
        body: JSON.stringify(comment),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const newComment = await response.json();
    dispatch(createComments(newComment));
    return newComment;


}

export const fetchUpdateComment = (comment) => async (dispatch) =>{
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
        method: "PUT",
        body: JSON.stringify(comment),
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const updatedComment = await response.json();
    dispatch(updateComments(updatedComment));
    return updatedComment;
    
}

export const fetchDeleteComment = (commentId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    });
    if(!(response.ok)){
        const data = await response.json();
        throw data;
    }
    const data = await response.json();
    dispatch(deleteComments(commentId));
    return response;
}

const initialState = {};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_COMMENTS: {
            const allComments = {};
            action.comments.forEach(comment => {
                allComments[comment.id] = comment;
            });
            return {
                ...state,
                ...allComments,
            };
        }
        case CREATE_COMMENTS: {
            return {...state, [action.comment.id]: action.comment,};
        }
        case UPDATE_COMMENTS: {
            return {...state, [action.comment.id]: action.comment,};
        }
        case DELETE_COMMENTS: {
            const newState = { ...state };
            delete newState[action.commentId];
            return newState;
        }
        default:
            return state;
    }
}

export default commentsReducer;