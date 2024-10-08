import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT_SERVER;
const URI = process.env.MONGO_URI;

mongoose.connect(URI);

const db = mongoose.connection;

db.on('error', (error) => console.log(error));

db.once('open', () => console.log("Berhasil terhubung"));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
