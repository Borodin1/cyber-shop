import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PAGES_DASHBOARD } from "~/configs/pages";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TbLogs } from "react-icons/tb";





export const arr = [
    { logo: <CiHeart height={32} width={32} />, link: PAGES_DASHBOARD.WISHSLIST, title: 'Favorite' },
    { logo: <CiShoppingCart width={32} />, link: PAGES_DASHBOARD.CART, title: 'Basket' },
    { logo: <CiUser width={32} />, link: PAGES_DASHBOARD.PROFILE, title: 'Profile' },
]

export const arrMenu = [
    { logo: <FaHome />, title: 'Home', link: PAGES_DASHBOARD.HOME },
    { logo: <FaUsers />, title: 'About', link: PAGES_DASHBOARD.ABOUT },
    { logo: <IoMdContact />, title: 'Contact Us', link: PAGES_DASHBOARD.CONTACT },
    { logo: <TbLogs />, title: 'Blog', link: PAGES_DASHBOARD.BLOG },
]