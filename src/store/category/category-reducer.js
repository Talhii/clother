const INITIAL_STATE = {
    categoriesMap: {},
    isLoading: false,
    error: []
}

export const CategoryReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){

        case 'FETCH_CATEGORY_MAP':
            return{
                ...state,
                isLoading: true
            }

        case 'SET_CATEGORY_MAP':
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        case 'FETCH_CATEGORY_FAIL':
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        default:
            return state;
    }
}


