import styled from "styled-components";
const { motion } = require("framer-motion"); //! this import is differet in Next.js from the one of React.js

export const CartWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
`;

export const CartStyled = styled(motion.div)`
    width: 40%;
    background: #f1f1f1;
    padding: 0 3.5rem;
    overflow-y: scroll;
    position: relative;
`;

export const CartItem = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 1rem;
    margin: 1rem 0;

    img {
        width: 8rem;
        border-radius: 0.5rem;
    }
`;

export const CartItemInfo = styled(motion.div)`
    width: 50%;
    div {
        display: flex;
        justify-content: space-between;
    }
`;

export const Empty = styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;

    h1 {
        font-size: 2rem;
        padding: 2rem;
    }

    svg {
        font-size: 10rem;
        color: var(--secondary);
    }
`;

export const Checkout = styled(motion.div)`
    position: sticky;
    /* width: 100%; */

    bottom: 0;
    /* background: white; */
    background: #f1f1f1;
    padding: 1rem 0;

    h3 {
        font-size: 1.5rem;
    }

    button {
        background: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        margin: 1rem 0 0 0;
        cursor: pointer;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.5rem;
    }
`;

export const CartItems = styled(motion.div)``;
