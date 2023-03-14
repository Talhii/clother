import { createSelector } from "reselect";

const cartSelector = (state) => {
    return state.cart
}

export const cartItemSelector = createSelector(
    [cartSelector],
    (cart) => {
        return cart.cartItems
    }
);

export const isCartOpenSelector = createSelector(
    [cartSelector],
    (cart) => {
        return cart.isCartOpen
    }
)

export const cartCountSelector = createSelector(
    [cartItemSelector],
    (cartItems) => {
        return cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
    }
);

export const cartTotalSelector = createSelector(
    [cartItemSelector],
    (cartItems) => {
        return cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
    }
);