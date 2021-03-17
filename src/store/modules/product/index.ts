import { combineReducers } from "redux";
import crudProductReducer from "./crudProduct";
import getAllProductReducer from "./getAllProduct";
import cartReducer from './cartReducer';


export const productReducer = combineReducers({
    getAllProduct: getAllProductReducer,
    cartProducts: cartReducer
    // crudProduct: crudProductReducer,
});

export type RootState = ReturnType<typeof productReducer>;

