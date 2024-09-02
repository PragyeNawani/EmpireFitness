"use server"
import connectDB from "@/db/connectDB"
import Contact from "@/models/contact"
import User from "@/models/user"
import Razorpay from "razorpay"
import payment from "@/models/payment"
import user from "@/models/user"
export const initiate = async (amount, byuser)=>{
    await connectDB()
    let user = await User.findOne({email: byuser})
    const secret = process.env.NEXT_PUBLIC_KEY_SECRET
    var instance = new Razorpay({key_id : process.env.NEXT_PUBLIC_KEY_ID ,
        key_secret: secret})
    const Membership = {
        "12" : "monthly",
        "36" : "quaterly",
        "72" : "half-yearly",
        "140": "yearly",
        "200": "premium"
    }
    let dc = amount/100
    let duration = Membership[dc]
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    // create a payment object which shows a pending payment in the database
    await payment.create({
        oid: x.id,
        email: user.email,
        amount: amount/100 ,
        name: user.name,
        subscription: duration
    })
    return x
}
export const submitcontact = async (contactform) => { 
    await connectDB()
    const newentry = new Contact({
        Name : contactform.Name,
        Phone : contactform.Phone,
        Gmail : contactform.Gmail,
        Date : Date.now()
    })
    await newentry.save()
 }

 export const fetchuserdata = async (email)=>{
    await connectDB()
    let u = await User.findOne({email : email})
    let user = u.toObject({flattenObjectIds: true})
    return user
}
export const updatedashboard = async (data, email) => { 
    await connectDB()
    let dashdata = Object.fromEntries(data)
    // dashdata.updatedAt = Date.now()
    const update = {
        updatedAt : Date.now()
    }
    await User.findOneAndUpdate({email: dashdata.email}, dashdata)
    await User.findOneAndUpdate({email: dashdata.email},update)
 }
export const newvisitors = async () => { 
    await connectDB()
    let visi = await Contact.find()
    return visi 
 }
export const newmemberships = async () =>{
    await connectDB()
    let mem = await payment.find({done: true})
    return mem
}
export const membershipstatus = async (session)=>{
    await connectDB()
    let sd = await payment.find({email: session})
    return sd
}