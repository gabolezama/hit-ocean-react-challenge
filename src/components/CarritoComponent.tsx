import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const CarritoComponent = () => {
  
  const {added, deleteItem, setShowCarrito} = useContext(CartContext) as any;

  return(
    <>
    <button 
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded my-10"
      onClick={()=> setShowCarrito(false)}>
      Volver
    </button>
    {Array.isArray(added) && added.length > 0 ?
      <>
        <h1> Pociones Compradas:</h1>
        <ul className="bg-gray-500 rounded-lg p-1">
        {
          added.map((item, i)=>(
            <li key={i} className="flex justify-between items-center m-5 bg-gray-400 rounded-lg">
              <div className="flex items-center">
                <img src={item.imagen} alt="icono" className="w-8 h-8 rounded-full mr-4"/>
                <h4 style={{color: 'black'}}>{item.nombre}</h4>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={()=> deleteItem(item.id, item.precio)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))
        }
        </ul>
      </>: null}
      </> )
};
