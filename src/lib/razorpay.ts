import Razorpay from "razorpay";

/**
 * Initializes and returns an instance of the Razorpay payment gateway.
 *
 * This function retrieves the necessary credentials for the Razorpay instance
 * from the environment variables. It requires the following environment variables to be set:
 * - `RAZORPAY_KEY`: The public key provided by Razorpay.
 * - `RAZORPAY_SECRET_KEY`: The secret key provided by Razorpay.
 *
 * Throws an error if either `RAZORPAY_KEY` or `RAZORPAY_SECRET_KEY` is missing or invalid.
 *
 * @throws {Error} If the `RAZORPAY_KEY` or `RAZORPAY_SECRET_KEY` environment variables are not defined.
 * @returns {Object} An instance of the Razorpay SDK configured with the provided credentials.
 */
export const razorpay = (): Razorpay => {
    const key_id = process.env.RAZORPAY_KEY!;
    const key_secret = process.env.RAZORPAY_SECRET_KEY!;
    if (!key_secret || !key_id) {
        throw new Error("Invalid key secret");
    }

    return new Razorpay({
        key_id,
        key_secret,
    });
};
