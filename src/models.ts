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
    deleteItem: (id: number, price: number) => void;
}