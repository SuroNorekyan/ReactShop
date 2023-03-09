import "./DestinationStyles.css"
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jfif";
import car3 from "../../assets/car3.jpg";
import car4 from "../../assets/car4.jpg";

import DestinationData from "./DestinationData";
import { useContext, useRef } from "react";
import { AppContext } from "../../App";

const Destination = () =>{
    const {scrollRef} = useContext(AppContext);
    return(
        <div className="destination">


            <h1>Old but gold</h1>
            <p>Take a look at these pieces of classic</p>
            
            <DestinationData 
            className = "first-des"
            heading = "Heading for the paragraph 1"
            text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            img1 = {car1}
            img2 = {car2}
            ImgRef = {scrollRef}
            />

            <DestinationData 
            className = "first-des-reverse"
            heading = "Heading for the paragraph 2"
            text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            img1 = {car3}
            img2 = {car4}
            />


        </div>

        
    )
}

export default Destination;