import { createContext} from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
     const currency = "Rs";
     const delivery_fee = 150;
     const [search,setSearch] = useState("");
     const [showSearch,setShowSearch] = useState(false);
     const [cartItems,setCartItems] = useState({});
     const navigate = useNavigate();

     const addToCart = (itemId, size) => {
        console.log("Adding item to cart:", itemId, size);
    
        if (!size) {
            toast.error("Please select a size");
            return;
        }
    
        let cartData = structuredClone(cartItems);
        console.log("Cart data before update:", cartData);
    
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
    
        console.log("Cart data after update:", cartData);
        setCartItems(cartData);
    }
    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,size,quantity)=>{
         let cartData = structuredClone(cartItems);
         cartData[itemId][size] = quantity;
         setCartItems(cartData);
    }

    const cartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        const itemData = products.find((product) => product._id === items);
                        totalAmount += (itemData.price * cartItems[items][item]);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    }
    
    const value = {
      products,currency,delivery_fee,
      search,setSearch,setShowSearch,showSearch,
      cartItems,addToCart,getCartCount,updateQuantity,
      cartAmount,navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider