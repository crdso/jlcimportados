import { useContext } from 'react'
import { CartContext } from '../context/cart.js'

export function useCart(){
  const value = useContext(CartContext)
  if(!value) throw new Error('useCart missing provider')
  return value
}
