import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/product.model.js'

//function to add a product
const addProduct = async (req, res) => {
    try {
        // Validate request body
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Log received files for debugging
        console.log("Received files:", req.files);

        // Check if files are uploaded
        const images = [];
        for (let i = 1; i <= 4; i++) {
            if (req.files[`image${i}`]) {
                images.push(req.files[`image${i}`][0]);
            }
        }

        if (images.length === 0) {
            return res.status(400).json({ success: false, message: "At least one image is required" });
        }

        // Upload images to Cloudinary
        const imageUrls = await Promise.all(images.map(async (image) => {
            try {
                let result = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
                return result.secure_url;
            } catch (uploadError) {
                console.error(`Error uploading image: ${uploadError.message}`);
                return null;
            }
        }));

        // Filter out any null values from image uploads
        const filteredImageUrls = imageUrls.filter(url => url !== null);

        if (filteredImageUrls.length === 0) {
            return res.status(500).json({ success: false, message: "No images were uploaded successfully" });
        }

        const productData = {
            name,
            description,
            price: Number(price),
            image: filteredImageUrls,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            date: Date.now(),
            bestseller: bestseller === "true"
        };

        // Create and save the product
        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error); // Log the entire error object
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message }); // Add error message to response
    }
};
//function to list product
const listProduct = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, message: "Products fetched successfully", products})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}
//function to remove a product
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed successfully"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}
//function for single product
const singleProduct = async (req,res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, message: "Product fetched successfully", product})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"})
    }
}

export {addProduct,listProduct,removeProduct,singleProduct}