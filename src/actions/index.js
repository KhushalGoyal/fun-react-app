export const UserState = {
    CURRENT_USER : 'CURRENT_USER',
    IS_REGISTERED : 'IS_REGISTERED',
    TOBE_REGISTERED : 'TOBE_REGISTERED'
}

export const isRegistered = function(){
    return   {
        type : UserState.IS_REGISTERED,
    }
}

export const currentUser = function(user){
    return {
        type : UserState.CURRENT_USER,
        user : user
    }
}