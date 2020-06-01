const loadingReducer = (initialState = false, action) => {
    if(action.type === "LOADING"){
        return true
    }else if(action.type === "LOADED"){
        return false
    }
    return initialState
}

export default loadingReducer;