import { useContext } from "react"
import ShopContext from "../context/ShopContext"

const Order = () => {

  const {products,currency} = useContext(ShopContext)

  return (
    <div className="border-t pt-16">
      <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">My Orders</h2>
      <div>
        {
          products.slice(1,4).map((item,index) =>{
            <div className="py-4 border-t border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4" key={index}>
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-16 sm:w-20" />
              <div>
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg">{currency}{item.price}</p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
              </div>
              <p className="mt-2">Date: <span className="text-accent5">12-28-2024</span></p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2 ">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-accent2"></p>
              <p className="text-sm md:text-base">Ready to Ship</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
            </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Order