import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // Fetch product data using find
  const fetchProductData = () => {
    console.log("Fetching product data for ID:", productId);
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      console.log("Found product:", foundProduct);
    } else {
      console.error("Product not found for ID:", productId);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in opacity-100 duration-500">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} onClick={() => setImage(item)} className="cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {/* Star Ratings */}
            {Array.from({ length: 4 }).map((_, idx) => (
              <img key={idx} src={assets.star_icon} className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="pl-12">(112)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          
          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-4">
              {['S', 'M', 'L'].map(sizeOption => (
                <button key={sizeOption} onClick={() => setSize(sizeOption)} className="border-2 px-4 py-2 bg-gray-100 hover:border-accent2">{sizeOption}</button>
              ))}
            </div>
          </div>
          
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-accent2">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          
          <div className="flex flex-col gap-1 text-sm text-gray-500">
            <p>Delivery</p>
            <p>Free delivery on all orders over $100</p>
            <p>Easy Return and Save Policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>E-Dhanda is a comprehensive online marketplace that caters to all of your shopping needs...</p>
          <p>E-Dhanda is more than just an online marketplace- it is a destination that caters to your every shopping need...</p>
        </div>
      </div>
      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>;
};

export default Product;