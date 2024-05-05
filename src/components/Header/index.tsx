"use client"
import React from "react"
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { arr } from "./arr";


interface IHeaderProps { }
export default function Header({ }: IHeaderProps) {
    const [input, setInput] = React.useState("");
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
                    {arr.map((item, i) => (
                        <ul key={i}>
                            <Link href={item.link} >
                                <li>{item.logo}</li>
                            </Link>
                        </ul>
                    ))}
                </div>
            </div>
        </header>
    );
}