import { useContext, useState } from "react"
import CartTotal from "../components/CartTotal"
import { ShopContext } from "../context/ShopContext"
const PlaceOrder = () => {
  
  const [method,setMethod] = useState("cod")
  const {navigate} = useContext(ShopContext)

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* left side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px] ml-20">
      <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Delivery Information</h2>
      <div className="flex gap-3">
        <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="First Name" />
        <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Last Name" />
      </div>
      <input type="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Your Email" />
      <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Your Address" />
      <div className="flex gap-3">
        <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="City" />
        <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Region" />
      </div>
      <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Zip Code" />
      <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none" placeholder="Phone No." />
      </div>
      {/* right side */}
      <div className="mt-8 mr-20">
        <div className="mt-8 min-w-80">
            <CartTotal/>
        </div>
        <div className="mt-12 mr-20">
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Payment Method</h2>
        <div className="flex flex-col gap-3 lg:flex-row">
          <div onClick={()=> setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer mt-4">
            <p className={`h-3.5 min-w-3.5 border rounded-full bg-accent1 ${method === 'cod' ? 'bg-accent2': ''}`}></p>
            <p className="text-gray-500 text-sm font-medium mx-4 w-full">Cash On Delivery</p>
          </div>
        </div>
        <div className="w-full text-end mt-8">
        <button onClick={() => navigate("/order")} className="bg-accent1 text-primary px-6 font-medium py-2 rounded-full hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear -md:text-sm mt-8">Order Now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder