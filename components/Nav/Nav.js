import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "../Cart/Cart";
import { NavStyled, NavItems } from "./style";
import { useStateContext } from "../../lib/context";
import User from "../User/User";
import { useUser } from "@auth0/nextjs-auth0";

const { AnimatePresence, motion } = require("framer-motion"); //! this import is differet in Next.js from the one of React.js

function Nav() {
    const { showCart, setShowCart, totalQnt } = useStateContext();
    const { user, error, isLoading } = useUser();

    return (
        <NavStyled>
            <Link href={`/`}>Styled.</Link>
            <NavItems>
                <User />
                <div onClick={() => setShowCart(!showCart)}>
                    {totalQnt > 0 && (
                        <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
                            {totalQnt}
                        </motion.span>
                    )}
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
            </NavItems>
            <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
        </NavStyled>
    );
}

export default Nav;
