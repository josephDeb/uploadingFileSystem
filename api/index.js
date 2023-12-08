import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';

import itemsRouter from './routes/items.js'

dotenv.config()
connectDB()


const app = express()

const port =  8000;

app.use(express.json())
app.use(cors());

app.get("/", (req ,res) => {
    res.send(`Hello madlang people ${port}`)
})

app.use('/api/items', itemsRouter)


app.listen(port, (req ,res) => {
    console.log(`Hello madlang people ${port}`)
})