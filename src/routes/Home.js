import { useState} from "react";
import Destination from '../components/Destination/Destination';
import SliderParagraph from "../components/Destination/SliderParagraph";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { ProductComp } from "../components/Products/ProductComp";
import { Slider } from "../components/Slider/Slider";
import {Slides} from "../components/Slider/Slides";
import './Home.css';


function Home (props){
    
    return(
        <>
         <Navbar />
        <Hero
        cName = "hero"
        heroImg = "https://rare-gallery.com/uploads/posts/556290-landscape-nature.jpg"
        title = "Worldwide shopping"
        text = "Buy anything you want from all around the globe!"
        buttonText = "Explore"
        url = "/"
        btnClass = "show"
        />
        
       
        <Destination />
        <div className="sliderMain">
            <SliderParagraph 
            sliderTitle = "Slider"
            title="Heading for the Slider paragraph"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
             but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <Slider slides={Slides} />
        </div>
        <ProductComp />
        

        
        </>
    )
}


export default Home;