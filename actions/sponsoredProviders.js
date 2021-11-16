import actions from './actionTypes';

export const addProvider = (provider) => ({ 
    type: actions.sponsoredProviders.add,
    provider: provider
})

export const addProviders = (providers) => ({ 
    type: actions.sponsoredProviders.add_multiple,
    providers: providers
})

export const removeProvider = (key) => ({ 
    type: actions.sponsoredProviders.remove,
    key: key
})
