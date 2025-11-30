import { createContext } from 'react'
import type { CartItem } from './types'

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
}

export const CartContext = createContext<CartState | undefined>(undefined)
