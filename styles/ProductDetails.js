import styled from "styled-components";

export const DetailsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 85vh;
    max-height: 85vh;

    overflow-y: hidden;

    #images {
        display: flex;
        height: 40rem;
        max-width: 50%;
        gap: 0.25rem;

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
            overflow-y: auto;

            gap: 0.25rem;

            img {
                width: 150px;
                min-width: 150px;
                height: 200px;
                min-height: 200px;
                object-fit: cover;
                object-position: center;

                :hover {
                    cursor: pointer;
                }
            }

            ::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
        }

        @media (max-width: 1440px) {
            flex-direction: column-reverse;
            gap: 0.125rem;
            #mainImg {
                width: 27.5rem;
                height: calc(100% - 125px - 0.125rem);
                object-fit: cover;
            }
            .slide {
                gap: 0.125rem;
                flex-direction: row;
                height: 125px;
                img {
                    width: 100px;
                    min-width: 100px;
                    height: 125px;
                    min-height: 125px;
                }
            }
        }

        @media (max-width: 1024px) {
            width: 49.25%;
            height: 100%;
            #mainImg {
                width: 27.5rem;
                height: calc(100% - 125px - 0.1rem);
                object-fit: cover;
            }
            .slide {
                flex-direction: row;
                img {
                    width: 90px;
                    min-width: 90px;
                    height: 125px;
                    min-height: 125px;
                }
            }
        }

        @media (max-width: 425px) {
            width: 100%;
            max-width: 100%;
        }
    }

    #product_info {
        width: 47.5%;
        height: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        #productTitle {
            padding: 0 0 1rem 0;
            font-size: 2rem;
        }

        .bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 17.5%;
        }

        #productDescription {
            margin: 0 0 3.5rem 0;
            max-height: 17.5rem;
        }

        #productSizes {
            &_container {
                h3 {
                    margin: 0 0 0.5rem 0;
                }
                margin: 0 0 2rem 0;
            }
            font-size: 1.15rem;
            font-weight: 300;
            display: flex;
            gap: 0.5rem;

            .size {
                position: relative;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.75rem;
                height: 2.75rem;
                border: 2px solid var(--secondary);
                color: var(--secondary);
                transition: all 0.1s ease;

                :hover {
                    cursor: pointer;
                    border: 2px solid black;
                    color: black;
                }

                &.active {
                    font-size: 1.25rem;
                    border: 4px solid black;
                    color: black;
                    font-weight: 600;
                }

                &_unavailable {
                    position: relative;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.75rem;
                    height: 2.75rem;
                    border: 2px solid var(--secondary);
                    color: var(--secondary);
                    transition: all 0.5s ease;
                    &:before {
                        content: "";
                        display: block;
                        position: absolute;
                        height: 2.75rem;
                        width: 2px;
                        background-color: var(--secondary05);
                        transform: rotate(-45deg);
                    }
                    &:after {
                        content: "";
                        display: block;
                        position: absolute;
                        height: 2.75rem;
                        width: 2px;
                        background-color: var(--secondary05);
                        transform: rotate(45deg);
                    }
                }
            }
        }

        #productTags {
            &_container {
                h3 {
                    margin: 0 0 0.5rem 0;
                }
            }
        }

        @media (max-width: 1024px) {
            width: 49.25%;
            height: 100%;
            .bottom {
                height: auto;
            }
            #productSizes {
                &_container {
                    h3 {
                        margin: 0 0 0.5rem 0;
                    }

                    margin: 0 0 1rem 0;
                }
                flex-wrap: wrap;
                font-size: 0.75rem;

                .size {
                    width: 2.25rem;
                    height: 2.25rem;

                    :hover {
                        cursor: pointer;
                        border: 2px solid black;
                    }

                    &.active {
                        font-size: 0.85rem;
                        border: 2px solid black;
                        font-weight: 600;
                    }

                    &_unavailable {
                        width: 2.25rem;
                        height: 2.25rem;
                        &:before {
                            height: 2.25rem;
                            width: 2px;
                        }
                        &:after {
                            height: 2.25rem;
                            width: 2px;
                        }
                    }
                }
            }
        }

        @media (max-width: 700px) {
            #productDescription {
                margin: 0 0 1.5rem 0;
                height: 17.5rem;
                max-height: 62.5%;
                overflow-y: auto;
            }
        }

        @media (max-width: 425px) {
            width: 100%;
            max-height: fit-content;
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
                margin: 2rem 0 0 0;
                gap: 0.5rem;
            }

            #productSizes {
                &_container {
                    h3 {
                        margin: 0 0 0.5rem 0;
                    }
                }
                margin: 0;
                font-size: 0.75rem;

                .size {
                    width: 2.25rem;
                    height: 2.25rem;
                    margin: 0;

                    &_unavailable {
                        margin: 0;
                    }
                }
            }

            #productTags {
                &_container {
                    display: block;

                    div {
                        margin: 0;
                        justify-content: flex-start;
                        gap: 0.25rem;
                    }
                }
            }
        }
    }

    #quantity {
        display: flex;
        align-items: center;

        button {
            background: transparent;
            border: none;
            display: flex;
            font-size: 1.5rem;
            font-weight: medium;
            padding: 0.5rem 1rem;

            :hover {
                svg {
                    color: var(--button-on-hover);
                }
            }
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
    }

    #buy_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;

        width: 100%;
        height: 3rem;
        max-height: 10vh;

        font-size: 1.25rem;
        font-weight: 400;
        color: white;
        border: none;

        background: var(--primary);
        border: 3px solid var(--primary);
        border-radius: 0.25rem;
        transition: all 0.4s ease;

        :hover {
            background: none;
            font-size: 1.5rem;
            font-weight: 500;
            border-radius: 0;
            border: 3px solid var(--button-on-hover);
            color: var(--button-on-hover);
        }

        @media (max-width: 700px) {
        }
        @media (max-width: 425px) {
            margin: 0;
            padding: 0.5rem 1.5rem;
        }
    }

    @media (max-width: 1024px) {
        justify-content: space-between;
        padding: 5vw 0;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        overflow-y: auto;
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        font-weight: medium;
        padding: 0.5rem 1rem;

        :hover {
            svg {
                color: var(--button-on-hover);
            }
        }
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
