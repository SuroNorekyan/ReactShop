import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/About.jpg";

function About (){
    return(
        <>
           <Navbar />
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title = "About page"
        btnClass = "hide"
        />
        </>
    )
}


export default About;