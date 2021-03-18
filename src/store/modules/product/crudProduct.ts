// import { ShoppingCartLine } from './crudProduct';
// import { AppAction } from '../actions';
// import { AppState, ShoppingCartLine } from '../types';
// import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';
import initialState from "../../helper/default-state";
const initialProductList = initialState;
console.log(initialProductList,"intialProductList")


// const calculatePrice = (cart: ShoppingCartLine[]) => cart.reduce((total, item) => total + item.product.price * item.count, 0);

export const ADD_PRODUCT = 'ADD_PRODUCT';
export type ADD_PRODUCT = typeof ADD_PRODUCT;

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export type REMOVE_PRODUCT = typeof REMOVE_PRODUCT;

export type ProductItem = {
    name: string,
    price: string
  }

export interface ShoppingCartLine {
    product: ProductItem;
    count: number;
  }
  
  export interface AppState {
    catalog: ProductItem[];
    shoppingCart: ShoppingCartLine[];
    totalPrice: number;
  } 
  export interface AddProduct {
    type: ADD_PRODUCT;
    payload: ProductItem;
  }
  
  export interface RemoveProduct {
    type: REMOVE_PRODUCT;
    payload: ProductItem;
  }
 

export default function crudProductReducer(state: AppState, action: AppAction): AppState {
  const { shoppingCart } = state;
  const { payload, type } = action;

  switch (type) {  
    case ADD_PRODUCT: {
        console.log(initialProductList,"intialProductList")

      const newShoppingCart = [...shoppingCart];

      let line = newShoppingCart.find(line => line.product === payload);
      if (!line) {
        line = {
          product: payload,
          count: 0,
        };
        newShoppingCart.push(line);
      }

      line.count++;

      return {
        ...state,
        shoppingCart: newShoppingCart,
        // totalPrice: calculatePrice(newShoppingCart),
      };
    }
    case REMOVE_PRODUCT: {
      let newShoppingCart = [...shoppingCart];

      let line = newShoppingCart.find(line => line.product === payload);
      if (line) {
        line.count--;

        if (line.count === 0) {
          newShoppingCart = newShoppingCart.filter((line) => line.product !== payload);
        }
      }

      return {
        ...state,
        shoppingCart: newShoppingCart,
        // totalPrice: calculatePrice(newShoppingCart),
      };
    }


    default:
      return state;
  }
}

export type AppAction = AddProduct | RemoveProduct;

export function addProduct(product: ProductItem): AddProduct {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function removeProduct(product: ProductItem): RemoveProduct {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
}