import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ShopContext } from "../context/ShopContext"
import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets"
import ProductItem from "../components/ProductItem"
import SearchBar from "../components/SearchBar"
import { Link } from "react-router-dom"

const CollectionPage = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts,setFilterProducts] = useState([])
    const {products,search,showSearch} = useContext(ShopContext)
    const [category,setCategory] = useState([])
    const [subCategory,setSubCategory] = useState([])
    const [sortType,setSortType] = useState("relavent")

    const toggleCategory = (e) => {
        if(category.includes(e.target.value)){
            setCategory(category.filter((item) => item !== e.target.value))
        }else{
            setCategory([...category,e.target.value])
        }
    }
    const sortProducts = () => {
      let fpCopy = filterProducts.slice()
      switch (sortType){
        case "low-high":
          setFilterProducts(fpCopy.sort((a,b) => a.price - b.price))
          break;
        case "high-low":
          setFilterProducts(fpCopy.sort((a,b) => b.price - a.price))
          break;
        case "a-z":
          setFilterProducts(fpCopy.sort((a,b) => a.name.localeCompare(b.name)))
          break;
        case "z-a":
          setFilterProducts(fpCopy.sort((a,b) => b.name.localeCompare(a.name)))
          break;
        default:
          applyFilter()
      }
    }
    const toggleSubCategory = (e) => {
      if(subCategory.includes(e.target.value)){
          setSubCategory(subCategory.filter((item) => item !== e.target.value))
      }else{
          setSubCategory([...subCategory,e.target.value])
      }
  }
  
  const applyFilter = () =>{
    let productCopy = products.slice()
    if(category.length > 0){
      productCopy = productCopy.filter((item) => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory))
    }
    if(search && showSearch){
      productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilterProducts(productCopy)
  }

    useEffect(() => {
      setFilterProducts(products);
      applyFilter()
      sortProducts()
    },[products,category,subCategory,search,showSearch,sortType])
    
  return (
    <>
    <Navbar/>
    <SearchBar/>
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ml-8 mr-8">
      <div className="min-w-60">
           <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">Filters
            <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} />
           </p>
           <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"} sm:block`}>
               <p className="mb-3 text-sm font-medium">CATEGORIES</p>
               <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Kitchen"} onChange={toggleCategory} />Kitchen Appliances
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Clothing"} onChange={toggleCategory} /> Clothing
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} /> Men
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} /> Women
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Tech"} onChange={toggleCategory} /> Tech
                </p>
               </div>
           </div>
           {/*sub categories */}
           <div className={`border border-gray-400 pl-5 py-3 my-5 ${showFilter ? " " : "hidden"} sm:block`}>
               <p className="mb-3 text-sm font-medium">SUB-CATEGORIES</p>
               <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory} />Topwear
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
                </p>
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory} /> Winterwear
                </p>
               </div>
           </div>
      </div>
      {/* products */}
      <div className="flex-1">
        <div className="flex justify-between text-base mb-4 sm:text-2xl">
        <h2 className="font-bold text-4xl text-secondary -sm:text-3xl">E-Dhanda's Collection</h2>
        <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
          <option value="relavent">Sort By: Relavence</option>
          <option value="high-low">Sort By: High to Low</option>
          <option value="low-high">Sort By: Low to High</option>
          <option value="a-z">Sort By: A to Z</option>
          <option value="z-a">Sort By: Z to A</option>
        </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-10">
                  {
              filterProducts.map((item, index) => (
                <Link key={index} to={`/product/${item._id}`}> 
                  <ProductItem id={item._id} name={item.name} image={item.image} price={item.price} />
                </Link>
              ))
            }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CollectionPage