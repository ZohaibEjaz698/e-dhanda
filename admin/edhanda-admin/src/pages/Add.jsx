import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);


  const onSubmitHandler = async (e) =>{
      e.preventDefault();

      try {
        const formData = new FormData();

        formData.append("name",name);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("category",category);
        formData.append("subCategory",subCategory);
        formData.append("bestSeller",bestSeller);
        formData.append("sizes",JSON.stringify(sizes));


        image1 && formData.append("image1",image1);
        image2 && formData.append("image2",image2);
        image3 && formData.append("image3",image3);
        image4 && formData.append("image4",image4);

        const response = await axios.post(backendUrl+"/api/product/add",formData,{headers: {token}});

        if (response.data.success){
          toast.success(response.data.message);
          setName("")
          setDescription("")
          setPrice("")
          setBestSeller(false);
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
        } else{
          toast.error(response.data.message)
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-3 w-full">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300"
          type="text"
          placeholder="Type Here"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300"
          type="text"
          placeholder="Write Content Here"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 w-full">
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product SubCategory</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="2500"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div onClick={() => setSizes(prev => prev.includes("S")? prev.filter(item => item !== "S"): [...prev,"S"])}>
            <p className={` ${sizes.includes("S")? "bg-amber-200" : "bg-slate-200"} px-3 py-1 cursor-pointer bg-slate-200`}>S</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("M")? prev.filter(item => item !== "M"): [...prev,"M"])}>
            <p className={` ${sizes.includes("M")? "bg-amber-200" : "bg-slate-200"} px-3 py-1 cursor-pointer bg-slate-200`}>M</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("L")? prev.filter(item => item !== "L"): [...prev,"L"])}>
            <p className={` ${sizes.includes("L")? "bg-amber-200" : "bg-slate-200"} px-3 py-1 cursor-pointer bg-slate-200`}>L</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("XL")? prev.filter(item => item !== "XL"): [...prev,"XL"])}>
            <p className={` ${sizes.includes("XL")? "bg-amber-200" : "bgslate-200"} px-3 py-1 cursor-pointer bg-slate-200`}>XL</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("2XL")? prev.filter(item => item !== "2XL"): [...prev,"2XL"])}>
            <p className={` ${sizes.includes("2XL")? "bg-amber-200" : "bg-slate-200"} px-3 py-1 cursor-pointer bg-slate-200`}>2XL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to BestSellers
        </label>
      </div>

      <button
        type="submit"
        className="bg-accent2 text-primary px-10 mt-5 rounded-md font-medium py-2 active:bg-accent1 transition-colors duration-200 ease-linear"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
