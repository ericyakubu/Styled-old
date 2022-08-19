import styled from "styled-components";

export const DetailsStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5rem 0 0;
    height: 40rem;

    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: none;

        margin-top: calc(15vh + 1rem);
    }
`;

export const Images = styled.div`
    display: flex;
    height: 40rem;
    max-width: 50%;

    #mainImg {
        width: 30rem;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide {
        height: 100%;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        img {
            width: 150px;
            min-width: 150px;
            height: 200px;
            min-height: 200px;
            object-fit: cover;
            object-position: center;

            :not(:last-child) {
                margin: 0 0 0.15rem 0;
            }

            :hover {
                cursor: pointer;
            }
        }

        ::-webkit-scrollbar {
            width: 0.5rem;

            &-thumb {
                border-radius: 0.25rem;
                background-color: #5a5a5a;
            }

            &-track {
                background-color: transparent;
            }
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column-reverse;

        #mainImg {
            height: 85%;
        }

        .slide {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            overflow-y: hidden;
            margin-top: 0.15rem;
            height: 15%;

            img {
                width: calc(25% - 0.15rem);
                min-width: calc(25% - 0.15rem);

                height: 100%;
                min-height: 100%;

                :not(:last-child) {
                    margin: 0 0.15rem 0 0;
                }
            }

            ::-webkit-scrollbar {
                height: 0.35rem;

                &-thumb {
                    border-radius: 0.25rem;
                    background-color: #5a5a5a;
                }

                &-track {
                    background-color: transparent;
                }
            }
        }
    }
    @media (max-width: 425px) {
        flex-direction: column-reverse;
        width: 100%;
        max-width: 100%;

        #mainImg {
            height: 85%;
        }

        .slide {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            overflow-y: hidden;
            margin-top: 0.15rem;
            height: 15%;

            img {
                width: calc(25% - 0.15rem);
                min-width: calc(25% - 0.15rem);

                height: 100%;
                min-height: 100%;

                :not(:last-child) {
                    margin: 0 0.15rem 0 0;
                }
            }

            ::-webkit-scrollbar {
                height: 0.35rem;

                &-thumb {
                    border-radius: 0.25rem;
                    background-color: #5a5a5a;
                }

                &-track {
                    background-color: transparent;
                }
            }
        }
    }
`;

export const ProductInfo = styled.div`
    width: 40%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;

    #productTitle {
        padding: 0 0 1rem 0;
        font-size: 2rem;
    }

    #productDescription {
        height: 25rem;
    }

    @media (max-width: 425px) {
        width: 100%;
        height: fit-content;
        padding: 0 0 1rem;

        #productTitle {
            padding: 1rem 0 0.5rem 0;
            font-size: 2rem;
        }

        #productDescription {
            height: 10rem;
            overflow-x: scroll;
        }

        div:last-child {
            display: flex;
            justify-content: space-between;
            margin: 2rem 0;
        }
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
    }
    p {
        width: 1rem;
        text-align: center;
    }
    span {
        color: var(--secondary);
    }

    svg {
        color: #494949;
    }

    @media (max-width: 425px) {
        margin: 0;

        button {
            padding: 0;

            &:first-of-type {
                padding: 0 0.75rem;
            }
            &:last-of-type {
                padding: 0 0 0 0.75rem;
            }
        }
    }
`;

export const Buy = styled.button`
    min-width: 25%;
    align-self: center;
    background: var(--primary);
    color: white;
    font-weight: 500;
    border: none;
    margin: 0;

    font-size: 1.25rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    :hover {
        background: var(--button-on-hover);
    }

    @media (max-width: 425px) {
        margin: 0;
        padding: 0.5rem 1.5rem;
    }
`;
