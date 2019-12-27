import { isRegistered, currentUser } from "../actions";
import { localStorageService } from '../service/localStorage';

function getUserIfAny() {    
    return dispatch => {
        dispatch(isRegistered(true));
        setTimeout(()=>{
            let user = localStorageService.getUser();
            dispatch(currentUser(user))
        },2000)
    }
}

function updateUserState(user){
    debugger
    return dispatch => {
        dispatch(currentUser(user))
    }
}

const userContainer = {
    getUserIfAny : getUserIfAny, 
    updateUserState : updateUserState
}

export default userContainer;