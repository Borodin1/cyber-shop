"use client"
import React from "react"
import styles from './Footer.module.scss'
import Image from "next/image"
import { arr, logos } from "./arr"
import Link from "next/link"
import Menu from "./Menu"
import Logos from "./Logos"
interface IFooterProps { }

export default function Footer({ }: IFooterProps) {

    return (
        <footer className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Image src={"/cyber-white.png"} alt="logo" width={65} height={22} />
                    <h2>We are a residential interior design firm <br className="block " /> located in Portland. Our boutique-studio offers  <br className="block" />  more than</h2>
                </div>
                <Menu styles={styles} />
            </div>
            <Logos styles={styles} />
        </footer>
    )

}
