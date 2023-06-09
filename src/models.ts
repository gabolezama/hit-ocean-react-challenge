export interface IProduct{
    categoria: string;
    descripcion: string;
    id: number;
    imagen: string;
    nombre: string;
    precio: number;
}

export type CartContextType = {
    stones: number;
    added: IProduct[];
    showToast: boolean;
    showCarrito: boolean;
    setShowCarrito: React.Dispatch<React.SetStateAction<boolean>>;
    addItemToCart: (item: IProduct, price: number) => void;
    buyItems: (arrayToBuy: IProduct[]) => void;
    deleteItem: (id: number, price: number) => void;
    setShowToast:  React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductsApiResponse {
data: IProduct[];
}
export interface ErrorResponse {
    message: string;
}

export interface ProductsState {
    productsList: IProduct[];
    bought: IProduct[];
    getProductsListError: string,
    executePurchaseError: string,
    setLoader: boolean;
}
  
export interface IAction {
    type: string;
    payload: any;
}