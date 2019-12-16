import { isRegistered, currentUser } from "../actions";
import { localStorageService } from '../service/localStorage';

function getUserIfAny() {
    return dispatch => {
        dispatch(isRegistered());
        setTimeout(()=>{
            let user = localStorageService.getUser();
            dispatch(currentUser(user))
        },2000)
    }
}

export default getUserIfAny;