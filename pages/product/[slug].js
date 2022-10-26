import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

import { DetailsStyled } from "../../styles/ProductDetails";
import { useStateContext } from "../../lib/context";

import { Stack, Chip } from "@mui/material";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Head from "next/head";

export default function ProductDetails() {
    const { setSearchTag, mainImg, setMainImg, qty, selectedSize, setSelectedSize, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

    const productSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    const selected_size = useRef([]);

    useEffect(() => {
        setSelectedSize();
        setQty(1);
        setMainImg(null);
    }, []);

    // get slug from url
    const { query } = useRouter();
    const route = useRouter();

    // Fetch GRAPHQL data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    });
    const { data, fetching, error } = results;

    //check for the data coming in
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    const { title, description, image, tags, sizes, price } = data.products.data[0].attributes;
    let checkSizes = [];
    sizes.data.map((size) => checkSizes.push(size.attributes.size));
    let availableSizes = [];
    productSizes.map((size) => (checkSizes.includes(size) ? availableSizes.push(size) : availableSizes.push("0")));

    // create a toast
    const notify = () => {
        toast.success(`${title} added to your cart`, { duration: 1500 });
        //success just adds a nice green mark next to it
        // duration, obviously, specipifies for how long the 'toast' should be there (im milliseconds (1500 = 1.5seconds))
    };
    const notify_size = () => {
        toast.error(`Please select a size for your ${title}`);
    };

    const selectSize = (e) => {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            setSelectedSize("");
            return;
        }
        selected_size.current.forEach((size) => {
            if (size.innerHTML === e.target.innerHTML) {
                e.target.classList.add("active");
                setSelectedSize(e.target.innerHTML);
            } else {
                size.classList.remove("active");
            }
        });
    };

    return (
        <>
            <Head>
                <title>Styled - {title}</title>
            </Head>
            <DetailsStyled>
                <div id="images">
                    <div className="slide">
                        {image.data.map((img) => (
                            <>
                                <img key={img.attributes.formats.large.url} src={img.attributes.formats.large.url} onClick={() => setMainImg(img.attributes.formats.large.url)} />
                            </>
                        ))}
                    </div>
                    <img id="mainImg" src={mainImg ? mainImg : image.data[0].attributes.formats.large.url} alt={title} />
                </div>
                <div id="product_info">
                    <div className="top">
                        <h3 id="productTitle">{title}</h3>
                        <p id="productDescription">{description}</p>
                        <h3 id="productPrice">
                            $<span>{price.toFixed(2)}</span>
                        </h3>
                        <div id="productSizes_container">
                            <h3>Sizes</h3>
                            <div id="productSizes">
                                {sizes &&
                                    availableSizes.map((size, i) => (
                                        <>
                                            {size !== "0" ? (
                                                <div className="size" onClick={selectSize} ref={(e) => (selected_size.current[i] = e)} key={size}>
                                                    {size}
                                                </div>
                                            ) : (
                                                <div className="size_unavailable" key={productSizes[i]}>
                                                    {productSizes[i]}
                                                </div>
                                            )}
                                        </>
                                    ))}
                            </div>
                        </div>
                        <div id="productTags_container">
                            <h3>Tags</h3>
                            <Stack direction="row" spacing={1}>
                                {tags &&
                                    tags.data.map((tag) => (
                                        <Chip
                                            label={tag.attributes.tag}
                                            key={`${tag.attributes.tag}keytag`}
                                            sx={{
                                                fontSize: 16,
                                                fontWeight: 500,
                                            }}
                                            onClick={() => {
                                                setSearchTag(tag.attributes.tag);
                                                route.push("/");
                                            }}
                                        />
                                    ))}
                            </Stack>
                        </div>
                    </div>

                    <div className="bottom">
                        <div id="quantity">
                            <span>Quantity</span>
                            <button>
                                <HiMinusCircle onClick={decreaseQty} />
                            </button>
                            <p>{qty}</p>
                            <button onClick={increaseQty}>
                                <HiPlusCircle />
                            </button>
                        </div>
                        <button
                            id="buy_btn"
                            onClick={() => {
                                if (selectedSize) {
                                    onAdd(data.products.data[0].attributes, qty, selectedSize);
                                    notify();
                                } else {
                                    notify_size();
                                }
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </DetailsStyled>
        </>
    );
}
