"use client"
import Link from "next/link"
import { arr } from "../arr"
import React from "react"

interface IMenuProps {
    styles: any
}
export default function Menu({ styles }: IMenuProps) {

    return (
        <div className={styles.menu}>
            {arr.map((el, i) => (
                <div key={i} className={styles.info}>
                    <h2>{el.title}</h2>
                    <ul>
                        {el.items.map((ell, i) => (
                            <li key={i}><Link href={'/'}>{ell.title}</Link></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )

}
