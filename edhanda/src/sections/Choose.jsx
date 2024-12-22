

const Choose = () => {
  return (
    <section className="flex flex-col items-center mt-[4rem] mb-[3rem]">
        <div className="flex items-center -md:block">
        <h3 className="font-semibold text-xl text-accent2 mb-[1rem] mr-[35rem] -xl:mr-[25rem] -lg:mr-[18rem]">Why Choose Us</h3>
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Why Should You Choose Us</h2>
        </div>
        <div className="flex items-center justify-center mt-10 mb-4 flex-wrap">
            <div className="-xl:mt-8">
                <h3 className="font-semibold text-xl text-secondary">Quality Assurance:</h3>
                <p className="max-w-sm">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className="-xl:mt-8">
            <h3 className="font-semibold text-xl text-secondary">Convenience:</h3>
            <p className="max-w-sm">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className="-xl:mt-8">
            <h3 className="font-semibold text-xl text-secondary">Exceptional Customer Service:</h3>
            <p className="max-w-sm">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
        </div>
    </section>
  )
}

export default Choose