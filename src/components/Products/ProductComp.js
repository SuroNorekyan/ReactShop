import "./ProductComp.css";
import { Products } from "./Products";
import { useState, useContext } from "react";
import { AppContext } from "../../App";
export function ProductComp(){
    
    const{ handleAddToCart} = useContext(AppContext);
    const[query,setQuery] = useState("");
    const search = (data) =>{
        return data.filter(item => item.name.toLowerCase().includes(query)
        || item.surname.toLowerCase().includes(query)
        || item.job.toLowerCase().includes(query));
    }

   
    const[split,setSplit] = useState(0);
    let Prod3 = Products.slice(split,split+3);
    const sliceN = (n1,n2) =>{
         Prod3 = Products.slice(n1,n2);
        }

    

    return(
        
        <>
        

        <div class='ourProducts'>
            <h1>Our products</h1>
        </div>
        
        <div class = "searchDiv">
            <input type="text" placeholder="Search..."
            onChange={e => setQuery(e.target.value.toLowerCase())}>
            </input>
        </div>

            <div class = 'products'>
                
                    {Prod3.filter(item =>
                        item.name.toLowerCase().includes(query)
                        ).map(product =>
                            <div class="card-box" key={product.id}>
                            <div class='card-img'>
                                <img src={product.img} alt={product.name}></img>
                            </div>
                            <div class="card-title">
                                <h1>{product.name}</h1>
                            </div>
                            <div class='card-des'>
                                <p>{product.description}</p>
                            </div>
        
                            <div class="price-and-buy">
        
                                <div class='card-price'>
                                    <h1>{product.price}$</h1>
                                </div>
                                <div class='card-buy'>
                                    <button class='buy' onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                                </div>
        
                            </div>
                            
                        </div>
        
                            )
                        }
               

               

            </div>


        {/* Previous page */}
        <button onClick={() =>{
                
                setSplit(c => Math.max(c - 3, 0));
                sliceN(split,split-3)
                console.log("Split is: " +  split)
            
        }}>Previous</button>


        {/* Next page */}
            <button onClick={() => 
        {   
            if(split + 3 < Products.length){
                setSplit(split + 3);
                sliceN(split,split+3)
            }
        }
        } class='pageBtn'>
            Next {split}
        
        </button>
        


       
        

        </>
        
        
    )
}