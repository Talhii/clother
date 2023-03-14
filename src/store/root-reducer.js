import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { CategoryReducer } from "./category/category-reducer";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    category: CategoryReducer,
    cart: cartReducer
});