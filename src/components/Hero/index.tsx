"use client"
import React from "react"
import styles from './Hero.module.scss'
import { Button } from "../ui/button"
import Image from "next/image"
interface IHeroProps {

}
export default function Hero({ }: IHeroProps) {

    return (
        <div className={`${styles.root} heroGradient`}>
            <div className={`${styles.container}`}>
                <div className={styles.info}>
                    <h2 className={styles.h2}>Pro.Beyond.</h2>
                    <h1 className={styles.h1}>IPhone 14 <span>Pro</span></h1>
                    <p className={styles.p}>Created to change everything for the better. For everyone</p>
                    <Button variant={'ghost'} size={'lg'}>Shop Now</Button>
                </div>
                <div className="">
                    <Image src={'/iphone.png'} alt="iphone" width={406} height={632} className="max-w-full" />
                </div>
            </div>
        </div>
    )

}