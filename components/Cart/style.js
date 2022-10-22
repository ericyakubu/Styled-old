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

    #cart_close_container {
        height: 3.5rem;
        display: none;
        position: sticky;
        top: 0;
        background: rgba(241, 241, 241, 0.75);

        button {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--secondary);
            transition: all 0.2s ease;
            :hover {
                color: var(--primary);
            }
        }
    }

    @media (max-width: 425px) {
        padding: 0 5%;
        width: 100%;

        #cart_close_container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
`;

export const CartItem = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 1rem;

    img {
        height: 10.75rem;
        width: 8rem;
        border-radius: 0.5rem;
        object-fit: cover;
    }

    @media (max-width: 425px) {
        padding: 0.5rem;
        img {
            height: 8rem;
            width: 6rem;
        }
    }
`;

export const CartItemInfo = styled(motion.div)`
    width: 60%;

    h3:nth-child(1) {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary_darker);
    }
    h3:nth-child(2) {
        font-weight: 400;
        margin: 0.3rem 0;
        span {
            margin: 0 0 0 0.5rem;
            font-size: 1.15rem;
            text-transform: uppercase;
        }
    }

    h3:nth-child(3) {
        display: flex;
        align-items: center;
        font-size: 1.15rem;
        color: var(--primary);
        span {
            margin: 0 0 0 0.25rem;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
    }

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
    width: calc(100% - 7rem);
    text-align: center;

    h1 {
        font-size: 2rem;
        padding: 2rem;
    }

    svg {
        font-size: 10rem;
        color: var(--secondary);
    }

    @media (max-width: 425px) {
        width: 90%;
    }
`;

export const Checkout = styled(motion.div)`
    position: sticky;

    bottom: 0;
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

export const CartItems = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
