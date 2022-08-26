import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

import { DetailsStyled, ProductInfo, Quantity, Buy, Images } from "../../styles/ProductDetails";
import { useStateContext } from "../../lib/context";

import { Stack, Chip } from "@mui/material";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const { setSearchTag, mainImg, setMainImg, qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

    useEffect(() => {
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

    const { title, description, image, tags } = data.products.data[0].attributes;

    // create a toast
    const notify = () => {
        toast.success(`${title} added to your cart`, { duration: 1500 });
        //success just adds a nice green mark next to it
        // duration, obviously, specipifies for how long the 'toast' should be there (im milliseconds (1500 = 1.5seconds))
    };

    return (
        <DetailsStyled>
            <Images>
                <div className="slide">
                    {image.data.map((img) => (
                        <>
                            <img key={img.attributes.formats.large.url} src={img.attributes.formats.large.url} onClick={() => setMainImg(img.attributes.formats.large.url)} />
                        </>
                    ))}
                </div>
                <img id="mainImg" src={mainImg ? mainImg : image.data[0].attributes.formats.large.url} alt={title} />
            </Images>
            <ProductInfo>
                <div>
                    <h3 id="productTitle">{title}</h3>
                    <p id="productDescription">{description}</p>
                    <Stack direction="row" spacing={1}>
                        {tags &&
                            tags.data.map((tag) => (
                                <Chip
                                    label={tag.attributes.tag}
                                    key={`${tag.attributes.tag}keytag`}
                                    sx={{ fontSize: 16, fontWeight: 500 }}
                                    onClick={() => {
                                        setSearchTag(tag.attributes.tag);
                                        route.push("/");
                                    }}
                                />
                            ))}
                    </Stack>
                </div>

                <div>
                    <Quantity>
                        <span>Quantity</span>
                        <button>
                            <HiMinusCircle onClick={decreaseQty} />
                        </button>
                        <p>{qty}</p>
                        <button onClick={increaseQty}>
                            <HiPlusCircle />
                        </button>
                    </Quantity>
                    <Buy
                        onClick={() => {
                            onAdd(data.products.data[0].attributes, qty);
                            notify();
                        }}
                    >
                        Add to cart
                    </Buy>
                </div>
            </ProductInfo>
        </DetailsStyled>
    );
}
