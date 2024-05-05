import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PAGES_DASHBOARD } from "~/configs/pages";




export const arr = [
    { logo: <CiHeart height={32} width={32} />, link: PAGES_DASHBOARD.WISHSLIST },
    { logo: <CiShoppingCart width={32} />, link: PAGES_DASHBOARD.CART},
    { logo: <CiUser width={32} />, link: PAGES_DASHBOARD.PROFILE },
]

export const arrMenu = [
    { title: 'Home', link: PAGES_DASHBOARD.HOME },
    { title: 'About', link: PAGES_DASHBOARD.ABOUT },
    { title: 'Contact Us', link: PAGES_DASHBOARD.CONTACT },
    { title: 'Blog', link: PAGES_DASHBOARD.BLOG },
]