import Razorpay from "razorpay";

export const razorpay = () => {

    const key_id = process.env.RAZORPAY_KEY;
    const key_secret = process.env.RAZORPAY_SECRET_KEY;
    if (!key_secret || !key_id) {
        throw new Error("Invalid key secret");
    }

    return new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
    })
}
