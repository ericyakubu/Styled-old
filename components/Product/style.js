import styled from "styled-components";

export const ProductStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        border-radius: 0.25rem;
    }

    h2 {
        padding: 0.5rem 0;
        font-size: 1.5rem;
    }

    h3 {
        font-weight: 700;
        font-size: 1.25rem;
    }
`;
