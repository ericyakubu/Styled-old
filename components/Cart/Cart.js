import { useStateContext } from "../../lib/context";
import { CartWrapper, CartStyled, CartItem, CartItemInfo, Empty, Checkout, CartItems } from "./style";
import { Quantity } from "../../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";

const { motion, AnimatePresence } = require("framer-motion"); //! this import is differet in Next.js from the one of React.js
import { cartItemAnimaiton, cartItemsAnimaiton } from "./animations";
import getStripe from "../../lib/getStripe";

export default function Cart() {
    const { cartItems, setShowCart, showCart, onAdd, onRemove, totalPrice } = useStateContext();

    // Payment
    const _handleCheckout = async () => {
        console.log(cartItems);
        const stripe = await getStripe();
        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartItems),
        });
        const data = await response.json();
        console.log(data);
        await stripe.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <CartWrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} onClick={() => setShowCart(!showCart)}>
            <CartStyled animate={{ x: "0%" }} initial={{ x: "50%" }} exit={{ x: "50%" }} transition={{ type: "tween" }} onClick={(e) => e.stopPropagation()}>
                {/* since the 'onClick' of the parent element will trigger this even whenever we click in cart div itself as well, we need a way to stop it from happening. that's what e.stopPropagation does. basically ignores onclick shit of the parent element */}
                <div id="cart_close_container">
                    <button id="cart_close_btn" onClick={() => setShowCart(!showCart)}>
                        <RiCloseCircleFill />
                    </button>
                </div>
                {cartItems.length < 1 && (
                    <>
                        <Empty initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                            <h1>you have more shopping to do</h1>
                            <FaShoppingCart />
                        </Empty>
                    </>
                )}
                {cartItems.length >= 1 && (
                    <CartItems variants={cartItemsAnimaiton} layout animate="show" initial="hidden">
                        {cartItems.map((cartItem) => (
                            <CartItem variants={cartItemAnimaiton} layout key={cartItem.slug}>
                                <img src={cartItem.image.data[0].attributes.formats.large.url} alt={cartItem.title} />
                                <CartItemInfo>
                                    <h3>{cartItem.title}</h3>
                                    <h3>
                                        Size:<span>{cartItem.selected_size}</span>
                                    </h3>
                                    <h3>
                                        $<span>{cartItem.price.toFixed(2)}</span>
                                    </h3>
                                    <Quantity>
                                        <span>Quantity</span>
                                        <button>
                                            <HiMinusCircle onClick={() => onRemove(cartItem)} />
                                        </button>
                                        <p>{cartItem.quantity}</p>

                                        <button onClick={() => onAdd(cartItem, 1)}>
                                            <HiPlusCircle />
                                        </button>
                                    </Quantity>
                                </CartItemInfo>
                            </CartItem>
                        ))}
                        <Checkout layout onClick={_handleCheckout}>
                            <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
                            <button>Purchase</button>
                        </Checkout>
                    </CartItems>
                )}
            </CartStyled>
        </CartWrapper>
    );
}

// export default Cart;
