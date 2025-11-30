import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './CartContext'
import type { CartItem } from './types'

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart.items')
      return raw ? JSON.parse(raw) as CartItem[] : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart.items', JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const exists = prev.find(p => p.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const clearCart = () => setItems([])

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price, 0), [items])

  const value = { items, addItem, removeItem, clearCart, total }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
