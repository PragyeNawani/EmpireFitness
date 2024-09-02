import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {type: String},
    username: {type: String},
    gender: {type: String},
    age: {type: String},
    email: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    razorpayid: {type: String},
    razorpaysecret: {type: String},
})

export default  mongoose.models.User || model("User", UserSchema)