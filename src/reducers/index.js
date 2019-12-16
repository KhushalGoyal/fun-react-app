import { UserState } from '../actions' 

const initial_state = {
    userState : null,
    pending : false
}
const user = (state = initial_state, action) => {
    switch (action.type) {
        case UserState.TOBE_REGISTERED: 
            return {
                ...state,
                pending : true
            }
        case UserState.CURRENT_USER: 
            return {
                ...state,
                pending : false,
                userState : action.payload
            }
        default:
            return state
    }
};

export default user;