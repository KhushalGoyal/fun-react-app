export const UserList = {
    USER_LIST : 'USER_LIST',
    USER_LIST_LOADED : 'USER_LIST_LOADED'
}


export const userListLoaded = function(status){
    return {
        type : UserList.USER_LIST_LOADED,
        status : status
    }
}

export const userList = function(users){
    return {
        type : UserList.USER_LIST,
        users :  users
    }
}