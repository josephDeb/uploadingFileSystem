
import path from 'path';
import asyncHandler from '../middlewares/asyncHandler.js';
import Items from '../models/items.js';

const getItem = async (req, res) => {
    try {
        const allItems = await items.find()
        return res.status(200).json({allItems})
    } catch (error) {
        return res.status(500).json("error")
    }
}

const addItem = asyncHandler(async (req, res) => {
 try {
    const {name} = req.body
    const file = req.file.path;
   
    if(!name) {
       throw new Error("Name is required")
    }

    const existingFile = await items.findOne({name})

    if(existingFile) {
        return res.json({Status: false, Error: "Already exist"})
    }

    const itemFile = await new items({name, file}).save();
    return res.status(201).json({Status: true, itemFile})
 } catch (error) {
    return res.status(500).json({Status: false, Erro: "Something went wrong"})
 }
})

const downloadItem = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const item = await Items.findById(id);
    if (!item) {
      return next(new Error("No item found"));
    }
    const file = item.file;
    const filePath = path.join(__dirname, `../${file}`);
    res.download(filePath);
  });
  

export {getItem, addItem, downloadItem}