import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { Order } from "../styles/Profile";
import formatMoney from "../lib/formatMoney";

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const session = getSession(ctx.req, ctx.res);
        const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId,
        });
        return { props: { orders: paymentIntents.data } };
    },
});

export default function Profile({ user, orders }) {
    const route = useRouter();
    console.log(user);
    console.log(orders);
    return (
        user && (
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <h1>Order Number: {order.id}</h1>
                            <h2>Amount: {formatMoney(order.amount)}</h2>
                            <h2>Receipt Email: {user.email}</h2>
                        </Order>
                    ))}
                </div>
                <button onClick={() => route.push("/api/auth/logout")}>Log out</button>
            </div>
        )
    );
}
