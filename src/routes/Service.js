import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/About.jpg";

function Service (){
    return(
        <>
        <Navbar />
            <Hero
            cName = "hero-mid"
            heroImg = {AboutImg}
            title = "Service page"
            btnClass = "hide"
            />
     </>
    )
}


export default Service;