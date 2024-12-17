import Navbar from "../components/Navbar"   
import Hero from "../sections/Hero"
import About from "../sections/About"
import Partner from "../sections/Partner"
import Elevate from "../sections/Elevate"
import Footer from "../components/Footer"
import Newsletter from "../sections/Newsletter"
import Featured from "../sections/Featured"
import More from "../sections/More"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Partner/>
    <Featured/>
    <More/>
    <Elevate/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home