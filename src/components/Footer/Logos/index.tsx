
"use client"
import React from "react"
import { logos } from "../arr"

interface ILogosProps {
    styles: any
}
export default function Logos({ styles }: ILogosProps) {

    return (
        <div className={styles.logos}>
            <ul>
                {logos.map((el, i) => {
                    return <li key={i}>{el.logo}</li>
                })}
            </ul>
        </div>
    )

}
