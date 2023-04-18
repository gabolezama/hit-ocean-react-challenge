import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { CartContextType } from "../models";
import Toast from "./Toast/Toast";
import { useSelector } from "react-redux";
import RoundLoader from "./Loader/RoundLoader";

export const CarritoComponent = (): JSX.Element  => {
  
  const {added, showToast, deleteItem, setShowCarrito, buyItems} = useContext(CartContext) as CartContextType;

  const comprados = useSelector((state: any) => state.productsReducer.bought)
  
  const showLoader = useSelector((state: any) => state.productsReducer.setLoader)

  return(
    <>
      <button 
        className={`${ !showLoader? "bg-purple-500 hover:bg-purple-700 text-white": "bg-gray-500  text-white" } font-bold py-2 px-4 rounded my-10`}
        onClick={()=> setShowCarrito(false)}
        disabled={showLoader}>
        Volver
      </button>

      { showLoader && <RoundLoader message={'Procesando la compra!!'}/> }

      { showToast && <Toast message={'Los productos fueron comprados!!'}/>}

        {
          Array.isArray(added) && added.length > 0 ?
            <>
              <h1>Pociones Seleccionadas:</h1>
              <ul className="bg-gray-500 rounded-lg p-1">
              {
                added.map((item, i)=>(
                  <li key={i} className="flex justify-between items-center m-5 bg-gray-400 rounded-lg">
                    <div className="flex items-center">
                      <img src={item.imagen} alt="icono" className="w-8 h-8 rounded-full mr-4"/>
                      <h4 className="text-black font-bold">{item.nombre}</h4>
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
              <div className="px-6 py-4 flex justify-center">
                <button
                  className={ `bg-purple-500 hover:bg-purple-700 text-white w-full font-bold py-2 px-4 rounded-full mb-5` } 
                  onClick={ ()=> buyItems(added) }
                >Comprar estas pociones</button>
              </div>
            </> : null
      }
    </> )
};
