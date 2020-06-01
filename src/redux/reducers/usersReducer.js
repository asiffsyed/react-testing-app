
const usersReducer = (initialState = [], action) => {

    if(action.type === "ADD_USER"){
        let newUser = action.payload[initialState.length].name;

        return [ ...initialState, newUser ]
    }
    return initialState
}

export default usersReducer;