import mongoose from 'mongoose';

mongoose.set("strictQuery", false)

const uploadingSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 28,
        unique: true
    },
    image: {
        type: String
    }
})


export default mongoose.model("Upload", uploadingSchema)
