import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useSelector } from "react-redux";
import { IProduct } from "../models";
import { Toast } from "./Toast/Toast";

export const ListadoProductosComponent = () => {

  const {addItemToCart, added, showToast} = useContext(CartContext) as any;
console.log('ST: ', showToast);

  const products = useSelector( (state: any) => state.productsReducer.productsList )

  return (
    <div className="flex justify-center min-w-full">
        <div className="max-w-sm w-full py-16">

          {
          products.map((item: IProduct) =>{ 

          const isAlreadyAdded = added.some( (elm: IProduct) => elm.id === item.id )  

          return (
            <div key={ item.id } className="bg-black rounded-lg overflow-hidden shadow-lg mb-20">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-5">{ item.precio + ' Gemas' }</span>
              <img className="w-20 h-20 rounded-full mx-auto mt-10" src={ item.imagen } alt="Imagen principal" />
              <div className="px-6 py-4 text-white">
                <div className="font-bold text-xl mb-2">{ item.nombre }</div>
                <p className="text-gray-300 text-base">{ item.descripcion }</p>
              </div>
              <div className="px-6 py-4">
                <button 
                  className={ `${!isAlreadyAdded? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-500'}  font-bold py-2 px-4 rounded-full float-right mb-5` } 
                  onClick={ ()=> addItemToCart(item, item.precio) }
                  disabled={ isAlreadyAdded }
                >Agregar</button>
              </div>
            </div>
            )
          })
        }
        <Toast message={'No tienes suficientes gemas para comprar'}/>
        </div>
      </div>
  );
};
