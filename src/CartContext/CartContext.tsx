import { ReactNode, createContext, useState } from 'react'
import { CartContextType, IProduct } from '../models';
import { executePurchase } from '../GlobalState/Actions';
import { useDispatch } from 'react-redux';

export const CartContext = createContext<CartContextType>(null!);

export function CartContextProvider({ children }: { children: ReactNode }) {

  const [added, setAdded] = useState<IProduct[]>([])
  const [stones, setStones] = useState<number>(3)
  const [showCarrito, setShowCarrito] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  let arrayAdded: IProduct[] = [...added]
  let stonesCount: number = stones

  const dispatcher = useDispatch()

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

  const buyItems = (arrayToBuy: IProduct[]) =>{
    dispatcher( executePurchase(arrayToBuy.map( (item: IProduct) => item.id)) as any)
    setStones(3)
    setAdded([])
    setShowToast(true)
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
        setShowToast,
        buyItems
    }}>
        {children}
    </CartContext.Provider>
  )
}