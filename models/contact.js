import mongoose from "mongoose";
const { Schema, model} = mongoose

const ContactSchema = new Schema({
    Name: {type: String},
    Phone: {type: String},
    Gmail: {type: String},
    Date: {type: Date, default: Date.now}
})
export default mongoose.models.Contact || model("Contact", ContactSchema)