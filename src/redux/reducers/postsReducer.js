const postsReducer = (initialState = [], action) => {
    if(action.type === "ADD_POST"){
        let newPost = action.payload[initialState.length].title
        return [ ...initialState, newPost ]
    }
    return initialState
}

export default postsReducer;