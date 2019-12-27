import { UserList } from '../actions/userActions';

const initial_state = {
    users : null,
    status : false
}
const userList = (state = initial_state, action) => {
    switch (action.type) {
        case UserList.USER_LIST_LOADED: 
            return {
                ...state,
                status : action.status
            }
        case UserList.USER_LIST: 
            return {
                ...state,
                status : true,
                users : action.users
            }
        default:
            return state
    }
};

export default userList;