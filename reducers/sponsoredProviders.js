import actions from '../actions/actionTypes';

const sponsoredProviders = (state = [], action) => {
    switch (action.type) {
        case actions.sponsoredProviders.add:
            return [...state, action.provider]

        case actions.sponsoredProviders.add_multiple:
            return [...state, ...action.providers]

        case actions.sponsoredProviders.remove:
            return [...state.filter(a => a.key !== action.key)]
    
        default:
            return state
    }
}

export default sponsoredProviders;