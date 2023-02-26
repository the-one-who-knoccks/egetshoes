import { IProduct } from '../../../types'

export const ADD_TO_CART = 'ADD_TO_CART'

export const REMOVE_TO_CART = 'REMOVE_TO_CART'

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT'

export const CLEAR_CART = 'CLEAR_CART'

export interface ICartState {
  products: IProduct[]
}

interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: IProduct
}

interface RemoveToCart {
  type: typeof REMOVE_TO_CART
  payload: number
}

interface UpdateCartProductAmount {
  type: typeof UPDATE_AMOUNT
  id: number
  amount: number
}

interface ClearCart {
  type: typeof CLEAR_CART
  payload: number
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveToCart
  | UpdateCartProductAmount
  | ClearCart
