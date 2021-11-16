import actions from './actionTypes';

export const init = () => ({ 
    type: actions.signup.init,
    provider: null
})

export const next = () => ({ 
    type: actions.signup.next,
    provider: null
})

export const previous = () => ({ 
    type: actions.signup.previous,
    providers: null
})

export const submit = () => ({ 
    type: actions.signup.submit,
    providers: null
})