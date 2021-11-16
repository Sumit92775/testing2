import actions from './actionTypes';

export const authenticate = (provider) => ({ 
    type: actions.user.authenticate,
    provider: provider
})