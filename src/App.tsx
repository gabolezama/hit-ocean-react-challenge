import { useContext, useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CartContext } from "./CartContext/CartContext";
import { useDispatch } from 'react-redux';
import { getProductsList } from "./GlobalState/Actions";

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima commodi, quis quam corporis nihil nesciunt quo nisi! Unde culpa, deleniti rem, voluptas quod illo dicta voluptates iure pariatur, laboriosam necessitatibus!'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima commodi, quis quam corporis nihil nesciunt quo nisi! Unde culpa, deleniti rem, voluptas quod illo dicta voluptates iure pariatur, laboriosam necessitatibus!'

  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima commodi, quis quam corporis nihil nesciunt quo nisi! Unde culpa, deleniti rem, voluptas quod illo dicta voluptates iure pariatur, laboriosam necessitatibus!'

  },
]

function App() {
  const [showCarrito, setShowCarrito] = useState(false);

  const captura = useContext(CartContext)

  console.log('Este es mi valor: ' + captura);

  const dispatcher = useDispatch();

  dispatcher(getProductsList() as any);
  
  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCarrito ? <CarritoComponent /> : <ListadoProductosComponent />}

          {people.map((item, i) => (
          <div key={item.name} className="bg-black rounded-lg overflow-hidden shadow-lg">
            <img className="w-60 h-60 rounded-full mx-auto" src={item.image} alt="Imagen principal" />
            <div className="px-6 py-4 text-white">
              <div className="font-bold text-xl mb-2">{'Titulo de ' + item.name}</div>
              <p className="text-gray-300 text-base">{item.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{'badge ' + i}</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">Agregar</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
