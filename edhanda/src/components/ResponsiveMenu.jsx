import {motion,AnimatePresence} from "framer-motion"
import { Link } from "react-router-dom"
const ResponsiveMenu = ({ isOpen }) => {
  return <AnimatePresence>
    {
    isOpen && (
      <motion.div
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-100}}
      transition={{duration:0.3}}
      className="absolute top-20 left-0 w-full h-screen z-20"
      >
          <div className="text-xl font-semibold uppercase bg-accent2 text-primary py-10 m-6 rounded-3xl ">
            <ul className="flex flex-col items-center justify-center gap-12">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
      </motion.div>
    )
  }
  </AnimatePresence>
}

export default ResponsiveMenu