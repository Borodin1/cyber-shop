"use client"
import React from "react"
import styles from './Discount.module.scss'
import Cart from "../Cart"
interface IDiscountProps { }

export default function Discount({ }: IDiscountProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>Discounts up to -50%</h2>
                <div className={styles.cards}>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </div>
            </div>
        </div>
    )

}
