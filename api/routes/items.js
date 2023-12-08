
import express from 'express'
import multer from 'multer'
import path from 'path'


import {addItem, getItem, downloadItem} from '../controller/items.js'
const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
  const fileFilter = (req, file, cb) => {
    //reject a file if it's not a jpg or png
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  });


router.route("/").get(getItem).post(upload.single('file'), addItem )

router.route('/download/:id').get(downloadItem)

export default router