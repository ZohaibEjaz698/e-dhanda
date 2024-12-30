import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import router from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";


//app config
const app = express();
const PORT = process.env.PORT || 5000;
connectDB()
connectCloudinary()

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5714'];
//middlewares
app.use(cors({

    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, origin); // Allow the origin
        } else {
            callback(new Error('Not allowed by CORS')); // Reject the origin
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization',"token"],
    credentials: true
}));
app.use(express.json());

//api endpoint
app.use("/api/user", router);
app.use("/api/product", productRouter);


app.get("/", (req, res) => {
    res.send("Hee");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})