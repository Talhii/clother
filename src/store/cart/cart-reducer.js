const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_CART_OPEN':
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}