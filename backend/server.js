import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./data/products.js";
import { notFound, errorHandler } from "./middleware/errrorMiddleware.js";
import connectDB from "./database/db.js";

//routes import
import productRoute from "./routes/productRoute.js";

const app = express();

dotenv.config();

//connect to the database..
connectDB();

app.use(cors());
//routes...

app.use("/api/v1/products", productRoute);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `server is runnig on ${process.env.NODE_ENV} and listening to port ${PORT}`
  );
});
