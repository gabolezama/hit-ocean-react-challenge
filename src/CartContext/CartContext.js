import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

export function CartContextProvider({children}) {
    const [mivalor, setMivalor] = useState('Holiwis!!')
  return (
    <CartContext.Provider value={
        mivalor
    }>
        {children}
    </CartContext.Provider>
  )
}