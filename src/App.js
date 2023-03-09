import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Cart from './routes/Cart';
import { useState,useContext, createContext,useRef } from 'react';
import { Products } from './components/Products/Products';
import { ShopContextProvider } from './context/shop-context';


export const AppContext = createContext(0);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < Products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  export const AppContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    
  const [counter,setCounter] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const[idArray,setIdArray] = useState([]);
  const[price,setPrice] = useState(0);
  const scrollRef = useRef(null);

  
  
  
  
    const addToCart = (itemId) => {
      console.log(cartItems)
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      setPrice(prev => prev + Number(Products[itemId].price))
      
      
    };
  
    const removeFromCart = (itemId) => {
      if(cartItems[itemId] > 0){
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        setPrice(prev => prev - Number(Products[itemId].price))
      }
      
      
    };
  
    const updateCartItemCount = (newAmount,itemId) =>{
      setCartItems(prev => ({...prev,[itemId]: newAmount}))
    }

    
  const handleAddToCart = (id) =>{
    setCounter(n => n+1)
    setSelectedProductId(id);
    setIdArray([...idArray,id]);
    setPrice((n) => +(n + parseFloat(Number(Products[id - 1].price).toFixed(2) )));
    setCartItems((prev) => ({ ...prev, [id - 1]: prev[id - 1] + 1}));
    console.log(cartItems)
    
  }
  function scrollToImg(){
    scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
}
  
  
  
  
  
    const contextValue = {
      cartItems,
      counter,
      selectedProductId,
      price,
      idArray,
      scrollRef,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      handleAddToCart,
      setPrice,
      setCartItems,
      scrollToImg
    };
    // console.log(cartItems)
  
    return (
      <AppContext.Provider value={contextValue}>
        {props.children}
      </AppContext.Provider>
    );
  };
export const App = () => {

    return (
    <div className='App'>
      <AppContextProvider>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/service" element={<Service/>}/>
            <Route path = "/cart" element={<Cart />}/>
          </Routes>
        
      </AppContextProvider>

      

     
      
    </div>
  );
}

