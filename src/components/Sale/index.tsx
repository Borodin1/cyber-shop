"use client"
import React from "react"
import styles from './Sale.module.scss'
import { Button } from "../ui/button"
import Image from "next/image"
import arr from "./fn"

const style = [styles.logoOne, styles.logoTwo, styles.logoThree, styles.logoFour, styles.logoFive]
interface ISaleProps { }


export default function Sale({ }: ISaleProps) {
    const ar = arr(style)
    return (
        <div className={`${styles.root} saleBgGradient`}>
            {ar?.map((el, i) => (
                <div className={el.className} key={i}>
                    <Image src={el.src} alt={el.alt} width={el.width} height={el.height} />
                </div>
            ))}
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Big Summer <br className="block sm:hidden" /> <span>Sale</span></h1>
                    <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <Button variant={'ghost'} size={'lg'}>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}
