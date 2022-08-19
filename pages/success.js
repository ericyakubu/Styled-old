import { useRouter } from "next/router";
import Image from "next/image";
import happy_dog from "../public/happy_dog.jpg";
import { Address, Card, InfoWrapper, OrderInfo, Wrapper } from "../styles/SuccessPayment";

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function getServerSideProps(params) {
    const order = await stripe.checkout.sessions.retrieve(params.query.session_id, {
        expand: ["line_items"], //this is require to get the information about the products bought (by difault it's not shown unless u add this object)
    });
    return { props: { order } };
}

export default function Success({ order }) {
    const route = useRouter();
    // console.log(order);
    return (
        <Wrapper>
            <Card animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.75 }}>
                <h1>Thank you for your order</h1>
                <h2>A confirmation email has been sent to</h2>
                <h2>{order.customer_details.email}</h2>
                <InfoWrapper>
                    <Address>
                        <h3>users adress</h3>
                        {Object.entries(order.customer_details.address).map(([key, value]) => (
                            <p key={key}>
                                {key} : {value}
                            </p>
                        ))}
                    </Address>
                    <OrderInfo>
                        <h3>Products</h3>
                        {order.line_items.data.map((item) => (
                            <div key={item.id}>
                                <p>Product: {item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price.unit_amount}</p>
                            </div>
                        ))}
                    </OrderInfo>
                </InfoWrapper>
                <button onClick={() => route.push("/")}>Continue Shopping</button>
                <Image src={happy_dog} alt="happy dog" width={300} height={400}></Image>
            </Card>
        </Wrapper>
    );
}
