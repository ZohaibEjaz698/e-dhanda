

const Partner = () => {
  return (
    <section className="flex flex-col items-center mt-[2rem] mb-[2rem]">
        <h3 className="font-semibold text-xl text-accent2 mb-[1rem]">Partner</h3>
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Our Partners</h2>
        <div className="flex mt-[3rem] mb-10 -md:flex-wrap -md:ml-48 -xs:ml-40">
        <div><img src="/sony.png" className="h-[2rem] mr-[10rem] -lg:h-[1.5rem]"/></div>
        <div><img src="/samsung.png" className="h-[2rem] mr-[10rem] -lg:h-[1.5rem] -sm:mt-10"/></div>
        <div><img src="/haier.png" className="h-[2rem] mr-[10rem] -lg:h-[1.5rem] -md:mt-10"/></div>
        <div><img src="/gucci.png" className="h-[2rem] -lg:h-[1.5rem] -md:mt-10"/></div>
        </div>
    </section>
  )
}

export default Partner