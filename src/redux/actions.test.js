import  actionTypes  from './actionTypes'
import { loadedAction,
         loadingAction,
         nameAction,
         getCommentAction,
         getUserAction,
         getPostAction,
         addCommentAction,
         addPostAction,
         addUserAction
        } from './actions'

test('loadingAction creator', () => {
    expect(loadingAction()).toEqual({
        type : actionTypes.loading
    })
})

test('loadedAction creator', () => {
    expect(loadedAction()).toEqual({
        type : actionTypes.loaded
    })
})

test('nameAction creator', () => {
    const name = {
        fName : 'Hello',
        lName : 'Bye'
    }
    expect(nameAction(name)).toEqual({
        type : actionTypes.userName,
        payload : name
    })
})

test('getUserAction creator', () => {
    expect(getUserAction()).toEqual({
        type : actionTypes.getUser
    })
})
test('getCommentAction creator', () => {
    expect(getCommentAction()).toEqual({
        type : actionTypes.getComment
    })
})
test('getPostAction creator', () => {
    expect(getPostAction()).toEqual({
        type : actionTypes.getPost
    })
})
test('addPostAction creator', () => {
    const post = ['A Post']
    expect(addPostAction(post)).toEqual({
        type : actionTypes.addPost,
        payload : post
    })
})
test('addUserAction creator', () => {
    const user = ['A User']
    expect(addUserAction(user)).toEqual({
        type : actionTypes.addUser,
        payload : user
    })
})
test('addCommentAction creator', () => {
    const comment = ['A Comment']
    expect(addCommentAction(comment)).toEqual({
        type : actionTypes.addComment,
        payload : comment
    })
})