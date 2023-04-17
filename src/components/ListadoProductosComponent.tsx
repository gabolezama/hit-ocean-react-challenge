import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useSelector } from "react-redux";
import { IProduct } from "../models";

export const ListadoProductosComponent = () => {
  const {addItemToCart, showCarrito} = useContext(CartContext) as any;

  const products = useSelector( (state: any) => state.productsReducer.productsList )
  console.log('--->', products);

  return (
    <div className="flex justify-center min-h-full">
        <div className="max-w-sm w-full py-16">

          {products.map((item: IProduct, i:number) => (
          <div key={item.id} className="bg-black rounded-lg overflow-hidden shadow-lg mb-20">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-5">{item.precio + ' Gemas'}</span>
            <img className="w-20 h-20 rounded-full mx-auto mt-10" src={item.imagen} alt="Imagen principal" />
            <div className="px-6 py-4 text-white">
              <div className="font-bold text-xl mb-2">{'Titulo de ' + item.nombre}</div>
              <p className="text-gray-300 text-base">{item.descripcion}</p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right mb-5" onClick={()=> addItemToCart(item, item.precio)}>Agregar</button>
            </div>
          </div>
        ))}
        </div>
      </div>
  );
};
