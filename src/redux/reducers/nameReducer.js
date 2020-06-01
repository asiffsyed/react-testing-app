const nameReducer = (initialState = {}, action ) => {
    if(action.type === 'USER_NAME'){
        return { ...action.payload }
    }
    return initialState;
}

export default nameReducer;