import Button from "../components/Button"

const Hero = () => {
  return (
    <section className=" bg-accent3 h-[35rem] flex justify-between items-center -lg:h-[28.5rem] -md:flex-col -md:h-[52rem] -md:pt-28 ">
      <div className="flex flex-col items-start ml-32 pt-2 -md:items-center -md:-ml-2">
        <h1 className="font-bold text-4xl text-primary max-w-[16rem] -md:text-center">Discover the convenience of <span className="text-accent2">E</span>-Dhanda</h1>
        <p className="text-accent4 mt-[1rem] max-w-[25rem] mb-5 -md:text-center -xs:max-w-[22rem]">Experience the ultimate online shopping destination with E-Dhanda. Your most valuable choice.</p>
        <Button text="Shop Now"/>
      </div>
      <div>
        <img src="/hero.png" className="mr-40 h-[37rem] -xl:mr-24 -lg:h-[30rem] -md:mr-14 -xs:h-[28rem]" />
      </div>
    </section>
  )
}

export default Hero