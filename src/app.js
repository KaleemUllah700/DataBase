import 'dotenv/config'
import express from "express"
import allRoutes from "./routes/index.js"
import { connectDB } from "./db/config.js";
import syncDB from './db/init.js';

connectDB();
syncDB(()=>{
    console.log("BD sync")
});

const app = express()
app.use(express.json());
app.use(allRoutes);


app.listen(3000)


