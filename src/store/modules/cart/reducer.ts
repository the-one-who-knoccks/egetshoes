import produce from 'immer'
import { CartActionTypes, ICartState } from './types'

const initialState: ICartState = { products: [] }

export default function cart(
  state = initialState,
  action: CartActionTypes,
): ICartState {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce<ICartState>(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.payload.id,
        )

        if (productIndex >= 0) {
          const product = draft.products[productIndex]
          product.amount += 1
        } else {
          draft.products.push({ ...action.payload, amount: 1 })
        }
      })

    case 'REMOVE_TO_CART':
      return produce<ICartState>(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.payload,
        )

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1)
        }
      })
    case 'UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state
      }
      return produce<ICartState>(state, (draft) => {
        const productIndex = draft.products.findIndex((p) => p.id === action.id)

        if (productIndex >= 0) {
          const product = draft.products[productIndex]
          product.amount = Number(action.amount)
        }
      })
    }

    default:
      return state
  }
}
