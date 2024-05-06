"use client"
import React from "react"
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from 'next/link';
import Drop from "./Drop";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { arr, arrMenu } from "./arr";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";


interface IHeaderProps { }
export default function Header({ }: IHeaderProps) {
    const [input, setInput] = React.useState("");
    const [close, setClose] = React.useState(true);
    return (
        <header className={styles.root}>
            <div className={styles.container}>
                <div className={styles.inputLogo}>
                    <Image src={"/cyber.svg"} alt="logo" width={65} height={22} />
                    <div className={styles.input}>
                        <CiSearch className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        {input && (
                            <IoMdClose
                                className={styles.close}
                                onClick={() => setInput("")}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.subMenuOne}>
                        {arrMenu.map((el, i) => (
                            <li key={i}><Link href={el.link}>{el.title}</Link></li>
                        ))}
                    </ul>
                    <ul className={styles.subMenuTwo}>
                        {arr.map((item, i) => (
                            <li key={i}>
                                <Link href={item.link} >
                                    {item.logo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.drop}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none" onClick={() => setClose(!close)} >
                            <RxHamburgerMenu className={styles.burger} />
                        </DropdownMenuTrigger>
                        <Drop arr={arr} arrMenu={arrMenu} />
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}