 import Product from "../models/product.model.js";

 export const getAllProducts = async (req,res) => {
    try {
        
    } catch (error) {
        console.log("Error in getAllProducts controller", error.message);
        res.status(500).json({message:"Server error", error: error.message});
    }
 };