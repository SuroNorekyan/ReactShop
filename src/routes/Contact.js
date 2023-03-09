import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ContactImg from "../assets/Contact.jpg"

function Contact (){
    return(
        <>
        <Navbar />
            <Hero
            cName = "hero-mid"
            heroImg = {ContactImg}
            title = "Contact page"
            btnClass = "hide"
            />
     </>
    )
}


export default Contact;