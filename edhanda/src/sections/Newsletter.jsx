import Button from "../components/Button"


const Newsletter = () => {
  return (
    <section className="flex flex-col items-center h-[25rem] bg-accent4">
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl mt-16 mb-3">Want First Dribs?</h2>
        <p className="mt-[1rem] max-w-lg text-center -xs:text-sm mb-4" id="aboutP">Join our email list and be the first one to know about new limited edition products, material innovations, and alots of other stuff.</p>
        <form>
            <input type="text" placeholder="Enter Email" className="px-4 py-2 mt-4 mr-5 rounded-xl w-[20rem] text-xl -xs:w-[13rem]" />
            <Button text="Sign Up"/>
        </form>
        <p className="mt-[1rem] max-w-lg text-center -xs:text-sm" id="aboutP"><span className="font-semibold text-secondary">Note:</span>You can opt-out at any time.</p>
    </section>
  )
}

export default Newsletter