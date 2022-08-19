import styled from "styled-components";
const { motion } = require("framer-motion"); //! this import is differet in Next.js from the one of React.js

export const Wrapper = styled.div`
    margin: 0 15rem;
`;
export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 2rem;
    padding: 3rem 3rem;

    h2 {
        margin: 0 0 0.5rem 0;
    }

    button {
        color: white;
        background: var(--primary);
        font-size: 1.2rem;
        font-weight: 500;
        padding: 1rem 2rem;
        border: none;
        cursor: pointer;
    }
`;

export const Address = styled.div`
    font-size: 1rem;
    width: 100%;
`;
export const OrderInfo = styled.div`
    font-size: 1rem;
    width: 100%;

    div {
        padding: 0 0 1rem 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    margin: 2rem 0;
`;
