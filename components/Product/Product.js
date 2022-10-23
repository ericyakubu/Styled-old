import { ProductStyled } from "./style";
import Link from "next/link";

import { Card, CardMedia, Grid, Typography } from "@mui/material";

function Product({ product }) {
    return (
        <>
            <ProductStyled>
                <Link href={`product/${product.slug}`}>
                    <div>
                        <img src={product.image.data[0].attributes.formats.large.url} alt={product.title} />
                    </div>
                </Link>
                <h2>{product.title}</h2>
                <h3>$ {product.price.toFixed(2)}</h3>
            </ProductStyled>
        </>
    );
}

export default Product;
