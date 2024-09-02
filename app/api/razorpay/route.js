import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB";

export const POST = async (req)=>{
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if (!p){
        return NextResponse.JSON({success: false, message:"Order ID not found"})
    }
    const secret = process.env.NEXT_PUBLIC_KEY_SECRET
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret )
    if (xx){
        const updatedPayment = await Payment.findOneAndUpdate(
            {oid:body.razorpay_order_id},
            {done: "true"},
            {new: true}
        )
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/memberships/?paymentdone=true`)
    }
    else {
        return NextResponse.JSON({success: false, message:"Payment Verification Failed"})
    }
}