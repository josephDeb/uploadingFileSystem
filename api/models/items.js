import mongoose from 'mongoose';

mongoose.set("strictQuery", false)

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 28,
        unique: true
    },
    file: {
        type: String
    }
})


export default mongoose.model("Items", itemsSchema)
