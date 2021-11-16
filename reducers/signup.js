import actions from '../actions/actionTypes';

const signup = (state = {step: 1, init: false}, action) => {
    switch (action.type) {
        case actions.signup.init:
            state.step = 0;
            state.init = true;
            return state; 

        case actions.signup.next:
            state.step++;
            return state; 
            
        case actions.signup.previous:
            state.step--;
            return state;

        case actions.signup.submit:
            state.step = 0;
            state.init = false;
            return state;
    
        default:
            return state
    }
}

export default signup;