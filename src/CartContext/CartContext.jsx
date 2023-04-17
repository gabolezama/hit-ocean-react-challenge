import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();


export function CartContextProvider({children}) {
  const [added, setAdded] = useState([])
  const [stones, setStones] = useState(3)
  const [showCarrito, setShowCarrito] = useState(false);

  let arrayAdded = [...added]
  let stonesCount = stones


  const addItemToCart = (item, price) =>{
    
    if(stones !== 0 && stones >= price){
      arrayAdded = [...arrayAdded, item]
      stonesCount -= price
    }
    else if( stones < price){
      alert('La cantidad de gemas no es suficiente')
    }

    setAdded(arrayAdded)
    setStones(stonesCount)
  }
  
  return (
    <CartContext.Provider value = {{
        stones,
        added,
        showCarrito,
        setShowCarrito,
        addItemToCart
    }}>
        {children}
    </CartContext.Provider>
  )
}