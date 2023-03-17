const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_USER':
            return { ...state, ...payload };
        case 'SIGN_IN_SUCCESS':
            return { ...state, ...payload };
        case 'SIGN_OUT_SUCCESS':
            return { ...state, ...payload };
        case 'SIGN_OUT_FAILED':
        case 'SIGN_IN_FAILED':
        case 'SIGN_UP_FAILED':
            return { ...state, ...payload };
        default:
            return state;
    }
}