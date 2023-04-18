import { ReactNode, createContext, useState } from 'react'
import { CartContextType, IProduct } from '../models';

export const CartContext = createContext<CartContextType>(null!);

export function CartContextProvider({ children }: { children: ReactNode }) {

  const [added, setAdded] = useState<IProduct[]>([])
  const [stones, setStones] = useState<number>(3)
  const [showCarrito, setShowCarrito] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  let arrayAdded = [...added]
  let stonesCount = stones


  const addItemToCart = (item: IProduct, price: number) =>{

    if(stones !== 0 && stones >= price){
      arrayAdded = [...arrayAdded, item]
      stonesCount -= price
    }
    else if( stones < price){
      setShowToast(true)
    }

    setAdded(arrayAdded)
    setStones(stonesCount)
  }
  
  const deleteItem = (id: number, price: number) =>{    
    const mapper = new Map( 
      arrayAdded.map(item => [item.id, item] )
    )

    mapper.delete(id)
    setAdded([...mapper.values() as any]);

    stonesCount += price
    setStones(stonesCount)
  }

  return (
    <CartContext.Provider value = {{
        stones,
        added,
        showToast,
        showCarrito,
        setShowCarrito,
        addItemToCart,
        deleteItem,
        setShowToast
    }}>
        {children}
    </CartContext.Provider>
  )
}