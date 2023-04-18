import { useContext, useEffect } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CartContext } from "./CartContext/CartContext";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from "./GlobalState/Actions";
import { CartContextType } from "./models";
import RoundLoader from "./components/Loader/RoundLoader";

function App() {

  const dispatcher = useDispatch();
  const {showCarrito} = useContext(CartContext) as CartContextType;

  const showLoader = useSelector((state: any) => state.productsReducer.setLoader)

  useEffect(() => {
    dispatcher(getProductsList() as any);
  }, [])
  
  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className="max-w-sm w-full py-5">
            { showLoader ? <RoundLoader/> : showCarrito ? <CarritoComponent /> : <ListadoProductosComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
