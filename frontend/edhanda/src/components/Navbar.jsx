import Button from "./Button"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-accent3 flex items-center justify-between h-14 pt-5">
        <a href="#" className="ml-32 -md:ml-12"><img src="/logo.png" alt="" /></a>
        <nav className="-md:hidden">
            <Link to="/" className="text-accent4 ml-8 font-medium hover:text-accent2 transition-colors duration-300 ease-out -lg:text-sm">Home</Link>
            <Link to="/about" className="text-accent4 ml-8 font-medium hover:text-accent2 transition-colors duration-300 ease-out -lg:text-sm">About</Link>
            <Link to="/categories" className="text-accent4 ml-8 font-medium hover:text-accent2 transition-colors duration-300 ease-out -lg:text-sm">Categories</Link>
            <Link to="/contact" className="text-accent4 ml-8 font-medium hover:text-accent2 transition-colors duration-300 ease-out -lg:text-sm">Contact Us</Link>
        <button className="ml-10 mr-24"><Button text="Sign Up"/></button>
        </nav>
        <img src="/navbar.png" className="h-10 mr-12 hidden -md:block" />
    </header>
  )
}

export default Navbar