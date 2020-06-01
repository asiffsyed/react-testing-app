const commentsReducer = (initialState = [], action) => {
    if(action.type === "ADD_COMMENT"){
        let newComment = action.payload[initialState.length].body;
        return [ ...initialState, newComment ]
    }
    return initialState
}

export default commentsReducer;