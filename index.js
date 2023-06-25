import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.use("/api", userRoutes);

app.get("/api", (req, res) => {
  res.render("index");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/multer-test")
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);

//Error Middleware
app.use(errorHandler);
