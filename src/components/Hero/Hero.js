import "./HeroStyles.css";
import { useContext, useRef } from "react";
import { AppContext } from "../../App";

function Hero (props){
    const{scrollToImg} = useContext(AppContext);
    

   
    return(
       <div className={props.cName}>
        <img alt ="HeroIMG" src={props.heroImg} />

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}
            </p>
            <button className={props.btnClass} onClick={scrollToImg}>
                {props.buttonText}
            </button>


        </div>
       </div>


    )
}


export default Hero;