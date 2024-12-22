import Button from "../components/Button"

const Contact = () => {
  return (
    <section className="flex flex-col items-center mt-[2rem] mb-[3rem]">
     <h3 className="font-semibold text-xl text-accent2 mb-[1rem]">Contact Us</h3>
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Contact E-Dhanda</h2>
        <p className="mt-[1rem] max-w-lg text-center -md:ml-12 -xs:text-sm" id="aboutP">Contact us if you have any questions regarding any of our products</p>
        <div className="flex items-center justify-center mt-14 mb-10 -md:flex-col">
        <form className="flex flex-col items-center justify-center -mt-6 mr-16">
            <input type="text" placeholder="Enter Name" className="px-4 py-2 mt-4 mr-5 rounded-xl border-2 border-slate-300 w-[20rem] text-xl -xs:w-[22rem] -xs:ml-20 -md:w-[27rem] -md:ml-32" />
            <input type="email" placeholder="Enter Email" className="px-4 py-2 mt-4 mr-5 rounded-xl border-2 border-slate-300 w-[20rem] text-xl -xs:w-[22rem] -xs:ml-20 -md:w-[27rem] -md:ml-32" />
            <input type="text" placeholder="Enter Subject" className="px-4 py-2 mt-4 mr-5 rounded-xl border-2 border-slate-300 w-[20rem] text-xl -xs:w-[22rem] -xs:ml-20 -md:w-[27rem] -md:ml-32" />
            <textarea placeholder="Enter Message" className="px-4 py-2 mt-4 mr-5 rounded-xl w-[20rem] text-xl border-2 border-slate-300 mb-10 -xs:w-[22rem] -xs:ml-20 -md:w-[27rem] -md:ml-32" />
            <div className="-md:ml-[6rem]"><Button text="Submit"/></div>
        </form>
        <div className="-md:ml-24">
        <h2 className="font-bold text-2xl text-secondary -md:mt-8">Our Address</h2>
        <p className="mt-[1rem] max-w-[15rem] -xs:text-sm" id="aboutP">5400 Nisbat Road Gawalmandi,Lahore Pakistan</p>
        <p className="mt-[1rem] max-w-[15rem] -xs:text-sm" id="aboutP">Tel: +92 326 5920943</p>
        <p className="mt-[1rem] max-w-[15rem] mb-2 -xs:text-sm" id="aboutP">Email:help@edhanda.com</p>
        <h2 className="font-bold text-2xl text-secondary">Opening Hours</h2>
        <p className="mt-[1rem] max-w-[15rem] -mb-3 -xs:text-sm" id="aboutP">Mon-Fri: 9am-6pm</p>
        <p className="mt-[1rem] max-w-[15rem] mb-20 -xs:text-sm" id="aboutP">Sat-Sun: 9am-4pm</p>
        </div>
        </div>
    </section>
  )
}

export default Contact