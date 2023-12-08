import express from 'express';
import dotenv from 'dotenv'
import multer from 'multer';
import cors from 'cors'
import connectDB from './config/db.js';

dotenv.config();
connectDB()

const app = express()

const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors());

app.get("/", (req ,res) => {
    res.send(`Hello madlang people ${port}`)
})



app.listen(port, (req ,res) => {
    console.log(`Hello madlang people ${port}`)
})
