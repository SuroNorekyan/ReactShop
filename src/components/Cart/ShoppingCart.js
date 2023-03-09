import React, { useState } from 'react';
import "./shoppingCart.css";
import { Products } from '../Products/Products';
import { AppContext } from '../../App';
import { useContext } from 'react';

const ShoppingCart = (props) => {
    
    const{ counter,cartItems,selectedProductId,idArray,price, removeFromCart,addToCart,setPrice,setCartItems} = useContext(AppContext);
    // const uniqueId = Array.from(new Set(idArray));
    const [uniqueId,setUniqueId] = useState(Array.from(new Set(idArray)));
    const handleRemove = (idToRemove) =>{
      console.log("Removed price: " + (cartItems[idToRemove]) * Products[idToRemove].price)
      console.log("cartItems[idToRemove]: " + (cartItems[idToRemove]))
      setPrice(prev => prev - ((cartItems[idToRemove]) * Products[idToRemove].price) )
      setUniqueId((prevIds) => prevIds.filter((id) => id-1 !== idToRemove));
      setCartItems((prev) => ({ ...prev, [idToRemove]: 0}));
      console.log("uniqueId state: " + uniqueId)
    }
    console.log("uniqueId: " + uniqueId)
    return (
        <div>
            <div class='box-main'>
                {
                  
                  uniqueId.map((prod) => {
                    return <div class='card-box' key={Products[prod - 1].id}>
                      <div key={Products[prod -1 ].id}>
                      <p> Id: {prod} " "</p>
                      <div class='card-img'>
                                <img src={Products[prod -1].img} alt={Products[prod -1].name} />
                      </div>
                      <div class="card-title">
                                    <h1>{Products[prod -1].name}</h1>
                                </div>
                      <div class='card-des'>
                                    <p>{Products[prod -1].description}</p>
                      </div>
                      <div class="price-and-buy">
                          <div class='card-price'>
                              <h1>${Products[prod-1].price}</h1>
                          </div>
                          <div class='quantity'>
                            <button onClick={() => removeFromCart(prod - 1)}>-</button>
                            <div>{cartItems[prod -1]}</div>
                            <button onClick={() => addToCart(prod - 1)}>+</button>
                            
                          </div>
                          <button className='removeBtn' onClick={() => handleRemove(prod-1)}>Remove</button>          
            
                      </div>

                      
                      </div>
                    </div>


                    
                    
                  })}


                  

            </div>
          <div class="total-price-box">
                    <div class="total-price-label">Total Price:</div>
                    <div class="total-price-amount">${price}</div>
          </div>


        </div>

        
       
    )
}
export default ShoppingCart