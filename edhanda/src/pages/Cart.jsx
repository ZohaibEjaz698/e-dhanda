import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        console.log("Cart Items:", cartItems); // Log cartItems to see its structure
        const tempData = [];
        
        // Iterate over cartItems
        for (const itemId in cartItems) {
            // Check if itemId is valid
            if (cartItems[itemId]) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        tempData.push({
                            _id: itemId,
                            size: size,
                            quantity: cartItems[itemId][size],
                        });
                    }
                }
            }
        }
        
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className="border-t pt-14">
            <div className="text-2xl mb-3">
                <h2 className="font-bold text-2xl text-secondary">YOUR CART</h2>
            </div>
            <div>
                {
                    cartData.length > 0 ? (
                        cartData.map((item, index) => {
                            const productData = products.find((product) => product._id === item._id);
                            
                            return productData ? ( // Check if productData is found
                                <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_.5fr_.5fr] sm:grid-cols-[4fr_3fr_.5fr] items-center gap-4" key={index}>
                                    <div className="flex items-start gap-6">
                                        <img src={productData.image[0]} className="w-16 sm:w-20" alt={productData.name} />
                                        <div>
                                            <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                                            <div className="flex items-center gap-5 mt-2">
                                                <p>{currency}{productData.price}</p>
                                                <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input onChange={(e) => e.target.value === '' || e.target.value === 0? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" className="px-2 sm:px-3 sm:py-1 border text-center" defaultValue={item.quantity} min={1} />
                                    <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className="w-4 sm:w-5 cursor-pointer" alt="Remove" />
                                </div>
                            ) : (
                                <p key={index} className="text-red-500">Product not found!</p>
                            );
                        })
                    ) : (
                        <h2 className="font-bold text-2xl text-secondary">Your Cart is Empty</h2>
                    )
                }
            </div>
            <div className="flex justify-end my-20">
              <div className="w-full sm:w-[450px]">
                <CartTotal/>
                <div className="w-full text-end">
                  <button onClick={() => navigate("/place-order")} className="bg-accent2 text-primary px-6 font-medium py-2 rounded-full hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear -md:text-sm mt-8">CHECKOUT</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Cart;