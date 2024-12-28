import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const {currency, delivery_fee,cartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">CART TOTALS</h2>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{cartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{currency}{cartAmount() ===0? 0 : cartAmount() + delivery_fee}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal