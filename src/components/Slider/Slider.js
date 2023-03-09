import { useState } from "react";
import "./Slider.css";

export function Slider({slides}){
    const[currentIndex,setCurrentIndex] = useState(0);

    const goToPrevious = () =>{
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () =>{
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return(
        <div class = 'containerStyle'>
            <div class='arrowStyleL' onClick={goToPrevious}> <i class="fa-solid fa-arrow-left"></i> </div>
            
            <div style={{
                width: "60%",
                height: "400px",
                borderRadius: '10px',
                backgroundPosition: 'center',
                backgroundSize: "cover",
                border:"solid 1px black",
                backgroundImage: `url(${slides[currentIndex].url})`,

                }}> 

            </div>

            <div class='arrowStyleR' onClick={goToNext}> <i class="fa-solid fa-arrow-right"></i> </div>
            <div  class="dots">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => {
                        setCurrentIndex(slideIndex)
                    }}><i class="fa-solid fa-circle"></i></div>
                ))}
            </div>
        </div>
    )
}