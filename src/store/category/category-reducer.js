const INITIAL_STATE = {
    categoriesMap: {},
}

export const CategoryReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case 'SET_CATEOGRY_MAP':
            return {
                ...state,
                ...payload
            }

        default:
            return state;
    }
}


