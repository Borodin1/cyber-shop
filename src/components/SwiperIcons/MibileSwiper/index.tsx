"use client"
import React from "react"
import { arr } from "../arr"
import styles from './MobileSwiper.module.scss'
import Link from "next/link"
interface IMobileSwiperProps {

}
export default function MobileSwiper({ }: IMobileSwiperProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {arr.map((el, i) => (
                    <Link href={el.link} className={`${styles.slide} ${(i === 4) ? 'xls:col-start-2' : ''}`}>
                        <div className={styles.elem}>
                            {el.icon}
                            {el.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )

}
