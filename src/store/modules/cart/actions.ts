import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  CartActionTypes,
  UPDATE_AMOUNT,
  CLEAR_CART,
} from './types'

import { IProduct } from '../../../types'

export function addProductToCart(newProduct: IProduct): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: newProduct,
  }
}

export function removeToCart(productId: number): CartActionTypes {
  return {
    type: REMOVE_TO_CART,
    payload: productId,
  }
}

export function clearCart(productId: number): CartActionTypes {
  return {
    type: CLEAR_CART,
    payload: productId,
  }
}
export function updateProductAmount(
  productId: number,
  amount: number,
): CartActionTypes {
  return {
    type: UPDATE_AMOUNT,
    id: productId,
    amount,
  }
}
