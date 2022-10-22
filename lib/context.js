import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    // Page configs
    const [pagesCount, setPagesCount] = useState();
    const [pagesSize, setPagesSize] = useState(10);
    const [page, setPage] = useState(1);
    const [pagesOffset, setPagesOffset] = useState(0);

    // Filtering
    const [searchTitle, setSearchTitle] = useState();
    const [searchTag, setSearchTag] = useState();
    const [searchMinPrice, setSearchMinPrice] = useState();
    const [searchMaxPrice, setSearchMaxPrice] = useState();
    const [sortAlph, setSortAlph] = useState(`title:asc`);

    const [tags, setTags] = useState([]);
    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState();
    const [totalQnt, setTotalQnty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [mainImg, setMainImg] = useState(null);

    // increase product quantity
    const increaseQty = (e) => {
        e.preventDefault();
        setQty((prevQty) => prevQty + 1);
    };
    // decrease product quantity
    const decreaseQty = (e) => {
        e.preventDefault();
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };

    //add product to cart
    const onAdd = (product, quantity, selectedSize) => {
        // check if product is in the cart already
        const exists = cartItems.find((item) => item.slug === product.slug);

        const check = exists ? exists.selected_size === selectedSize : false;

        if (exists & check) {
            setCartItems(cartItems.map((item) => (item.slug === product.slug ? { ...exists, quantity: exists.quantity + quantity } : item)));
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity, selected_size: selectedSize }]);
        }

        // increase totals
        setTotalQnty(totalQnt + quantity);
        setTotalPrice(totalPrice + product.price * quantity);
    };

    //remove product from cart
    const onRemove = (product) => {
        // check if product is in the cart already
        const exists = cartItems.find((item) => item.slug === product.slug);

        if (exists.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.slug !== product.slug));
        } else {
            setCartItems(cartItems.map((item) => (item.slug === product.slug ? { ...exists, quantity: exists.quantity - 1 } : item)));
        }

        //! decrease totals
        setTotalQnty(totalQnt - 1);
        setTotalPrice(totalPrice - product.price);
    };

    return (
        <ShopContext.Provider
            value={{
                searchTag,
                setSearchTag,
                searchTitle,
                setSearchTitle,
                searchMinPrice,
                setSearchMinPrice,
                searchMaxPrice,
                setSearchMaxPrice,
                sortAlph,
                setSortAlph,
                tags,
                setTags,
                page,
                setPage,
                pagesOffset,
                setPagesOffset,
                pagesCount,
                setPagesCount,
                pagesSize,
                setPagesSize,
                mainImg,
                setMainImg,
                qty,
                setQty,
                selectedSize,
                setSelectedSize,
                increaseQty,
                decreaseQty,
                showCart,
                setShowCart,
                cartItems,
                onAdd,
                onRemove,
                totalQnt,
                totalPrice,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useStateContext = () => useContext(ShopContext);
