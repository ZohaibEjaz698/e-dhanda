

const About = () => {
  return (
    <section className="flex flex-col items-center mt-[2rem] mb-[3rem]">
        <h3 className="font-semibold text-xl text-accent2 mb-[1rem]">About Us</h3>
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">About E-Dhanda</h2>
        <p className="mt-[1rem] max-w-lg text-center -xs:text-sm" id="aboutP">E-Dhanda is a comprehensive online marketplace that caters all of your shopping needs. Discover a vast collection of high quality products, from the latest tech gadgets to stylish clothes and home essentials</p>
        <div className="w-full flex justify-center items-center mt-14 mb-10 -lg:flex-wrap -md:flex-col ">
            <div className="flex items-center justify-center -md:mb-5">
            <div className="bg-accent3 w-12 h-12 rounded-full flex items-center justify-center"><img src="/uncertainty.png" className="h-8" /></div>
            <p className="ml-4 -xs:text-sm" id="aboutP">Discover the Possibilities of Endless Categories</p>
            </div>
            <div className="flex items-center justify-center ml-16 -md:-ml-14 -md:mb-5">
            <div className="bg-accent3 w-12 h-12 rounded-full flex items-center justify-center"><img src="/icon3.png" className="h-8" /></div>
            <p className="ml-4 -xs:text-sm" id="aboutP">Our Mission is to Value Our Customer.</p>
            </div>
            <div className="flex items-center justify-center ml-16 -md:-ml-7">
            <div className="bg-accent3 w-12 h-12 rounded-full flex items-center justify-center"><img src="/icon2.png" className="h-8" /></div>
            <p className="ml-4 -xs:text-sm" id="aboutP">High Quality Support From Our Help Line.</p>
            </div>
        </div>
    </section>
  )
}

export default About