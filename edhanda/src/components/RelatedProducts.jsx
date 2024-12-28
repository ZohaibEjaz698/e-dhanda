import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Filter products based on category and subCategory
            const productCopy = products.filter(
                (item) => category === item.category && subCategory === item.subCategory
            );

            // Set the related state with the filtered products
            setRelated(productCopy.slice(0, 5));
        }
    }, [products, category, subCategory]); // Include category and subCategory as dependencies

    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">Related Collection</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-10">
                {related.map((item, index) => (
                    <ProductItem key={index} productId={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;