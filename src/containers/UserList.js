import { userListLoaded, userList } from "../actions/userActions";

function ifUserLoaded(){
    return dispatch => {
        dispatch(userListLoaded(false))
    }
}

function getUserList(users){
    return dispatch => {
        dispatch(userList(users))
    }
}

const userlistContainer = {
    ifUserLoaded : ifUserLoaded,
    getUserList : getUserList
};

export default userlistContainer;