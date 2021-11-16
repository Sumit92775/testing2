import actions from '../actions/actionTypes';

const signup = (state = {authenticated: false}, action) => {
    switch (action.type) {
        case actions.user.authenticate:
            return { ...state, authenticated: action.provider };
    
        default:
            return state
    }
}

export default signup;