import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    oid : {type: String, required: true},
    subscription : {type: String, required: true},
    amount : {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    done : {type: Boolean, default: false},
})

export default mongoose.models.Payment || model("Payment", PaymentSchema)