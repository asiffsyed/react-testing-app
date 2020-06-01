import actionTypes from './actionTypes'

const loadingAction = () => ({
    type : actionTypes.loading
})

const loadedAction = () => ({
    type : actionTypes.loaded
})
const nameAction = payload => ({
    type : actionTypes.userName,
    payload
})
const getPostAction = (payload) => ({
    type : actionTypes.getPost,
    payload
})
const getUserAction = () => ({
    type : actionTypes.getUser,
})
const getCommentAction = () => ({
    type : actionTypes.getComment,
})
const addPostAction = payload => ({
    type : actionTypes.addPost,
    payload
})
const addUserAction = payload => ({
    type : actionTypes.addUser,
    payload
})
const addCommentAction = payload  => ({
    type : actionTypes.addComment,
    payload
})

export { loadedAction, loadingAction, nameAction, getCommentAction, getUserAction, getPostAction, addCommentAction, addPostAction, addUserAction}