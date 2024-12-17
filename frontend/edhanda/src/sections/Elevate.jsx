import Button from "../components/Button"


const Elevate = () => {
  return (
    <section className="flex justify-between bg-accent3 h-[30rem] -xl:h-[25rem] -md:flex-col -md:h-[50rem] -md:justify-center -md:items-center">
        <div><img src="/Elevate.png" className="h-[30rem] -xl:h-[25rem] -xs:h-[18rem]" /></div>
        <div className="mr-48 mt-32 -lg:mr-2 -md:flex -md:flex-col -md:items-center">
        <h2 className="font-bold text-5xl text-primary -xl:text-4xl -lg:text-3xl -xs:text-2xl">Elevate Your Shopping Journey</h2>
        <p className="mt-[1rem] max-w-lg text-accent4 mb-10 -md:text-center -xs:text-sm">E-Dhanda is more than just an online marketplace- it is a destination that caters to your every shopping need. Our platform offers a wide range of products for your ease.</p>
        <Button text="Shop Now"/>
        </div>
    </section>
  )
}

export default Elevate