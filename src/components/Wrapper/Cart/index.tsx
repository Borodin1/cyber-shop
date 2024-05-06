"use client"
import Image from "next/image"
import React from "react"
import styles from './Cart.module.scss'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { CiHeart } from "react-icons/ci";


interface ICartProps { }
export default function Cart({ }: ICartProps) {
    const [hover, setHover] = React.useState(false)
    return (
        <Card
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(false)}
            className={styles.Cart}>
            {hover && <CiHeart className={styles.heart} />}
            <CardContent className={styles.CardContent}>
                <Image src={'/cart/Iphone14.png'} alt="iphohe" width={160} height={160} />
                <h3>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</h3>
                <p>$900</p>
                <Button variant={'default'} size={'lg'}>Buy now</Button>
            </CardContent>
        </Card>

    )

}

