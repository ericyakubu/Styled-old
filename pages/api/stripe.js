import Stripe from "stripe";
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
    const session = getSession(req, res);
    const user = session?.user;
    if (user) {
        // const stripeId = user["http://localhost:3000/stripe_customer_id"];
        const stripeId = user["https://ericyakubu-styled.vercel.app/stripe_customer_id"];
        if (req.method === "POST") {
            try {
                // Create Checkout Session
                const session = await stripe.checkout.sessions.create({
                    submit_type: "pay",
                    mode: "payment",
                    customer: stripeId,
                    payment_method_types: ["card"],
                    shipping_address_collection: {
                        allowed_countries: ["RU", "US", "CA"],
                    },
                    shipping_options: [{ shipping_rate: "shr_1LONmuJR1cs9KczODJArQryq" }, { shipping_rate: "shr_1LOOPcJR1cs9KczOyxRuCPKr" }],
                    allow_promotion_codes: true,
                    line_items: req.body.map((item) => {
                        return {
                            price_data: {
                                currency: "cad",
                                product_data: {
                                    name: item.title,
                                    images: [item.image.data[0].attributes.formats.thumbnail.url],
                                },
                                unit_amount: item.price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1,
                            },
                            quantity: item.quantity,
                        };
                    }),
                    // Bring ppl to success or failed page
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`, // '?&session_id={CHECKOUT_SESSION_ID}' allows us to recieve the payment information on the success page (including name of the customer, adress, products and etc)
                    cancel_url: `${req.headers.origin}/canceled`,
                });
                res.status(200).json(session);
            } catch (error) {
                res.status(error.statusCode || 500).json(error.message);
            }
        }
    } else {
        if (req.method === "POST") {
            try {
                // Create Checkout Session
                const session = await stripe.checkout.sessions.create({
                    submit_type: "pay",
                    mode: "payment",
                    payment_method_types: ["card"],
                    shipping_address_collection: {
                        allowed_countries: ["RU", "US", "CA"],
                    },
                    shipping_options: [{ shipping_rate: "shr_1LONmuJR1cs9KczODJArQryq" }, { shipping_rate: "shr_1LOOPcJR1cs9KczOyxRuCPKr" }],
                    allow_promotion_codes: true,
                    line_items: req.body.map((item) => {
                        return {
                            price_data: {
                                currency: "cad",
                                product_data: {
                                    name: item.title,
                                    images: [item.image.data[0].attributes.formats.thumbnail.url],
                                },
                                unit_amount: item.price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1,
                            },
                            quantity: item.quantity,
                        };
                    }),
                    // Bring ppl to success or failed page
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`, // '?&session_id={CHECKOUT_SESSION_ID}' allows us to recieve the payment information on the success page (including name of the customer, adress, products and etc)
                    cancel_url: `${req.headers.origin}/canceled`,
                });
                res.status(200).json(session);
            } catch (error) {
                res.status(error.statusCode || 500).json(error.message);
            }
        }
    }
}
