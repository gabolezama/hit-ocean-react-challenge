import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../CartContext/CartContext';

function Toast({ message }) {

  const {showToast, setShowToast} = useContext(CartContext);

  const [visible, setVisible] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setVisible(false);
      setShowToast(false); 
    }, 2000);

    return ()=>{
      clearTimeout(timer);
    } 

  }, [])

  return (
    <div className={`${ visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} fixed top-10 left-20 bg-gray-600 w-200 h-100 text-white p-10 opacity-100 translate-y-0 mt-20 rounded-lg`}>
      {message}
    </div>
  )
}

export default Toast
