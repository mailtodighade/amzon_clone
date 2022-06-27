import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import Product from "../models/ProductModel.js";

//@desc FETCH ALL PRODUCTS
//@route /api/v1/products
//@ access public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res
      .status(200)
      .json({ message: "products fetched successfully!", data: products });
  } catch (error) {
    res.status(400).json({ message: "something went wrong!", data: null });
  }
});

//@desc GET SINGLE PRODUCT
//@route  GET /api/v1/products/:id
//@ access public
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
      res
        .status(200)
        .json({ message: "product fetched successfully!", data: product });
    } else {
      res
        .status(404)
        .json({ message: "product not found!", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong!", data: null });
  }
});



export default router;
