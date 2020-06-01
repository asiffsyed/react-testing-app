const errorReducer = (initialState = false, action) => {
    if(action.type === "ERROR"){
        return true
    }else if(action.type === "NO_ERROR"){
        return false
    }
    return initialState
}

export default errorReducer