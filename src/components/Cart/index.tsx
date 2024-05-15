"use client"
import Image from "next/image"
import React from "react"
import styles from './Cart.module.scss'
import { Card, CardContent, } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { CiHeart } from "react-icons/ci";
import Link from "next/link"
import { PAGES_DASHBOARD } from "~/configs/pages"


interface ICartProps {
    id?: string;
    title?: string;
    prices?: number[];
    logos?: string[];

}

export default function Cart({ ...data }: Partial<ICartProps>) {
    const [hover, setHover] = React.useState(false)
    
    return (
        <Card
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(false)}
            className={styles.Cart}>
            {hover && <CiHeart className={styles.heart} />}
            <CardContent className={styles.CardContent}>
                <Image src={data?.logos ? data?.logos[0] : ''} alt="iphone" width={160} height={160} />
                <Link href={`${PAGES_DASHBOARD.CATALOG}/smartphones/${data.id}`}>{data.title}</Link>
                <p>{data.prices ? data.prices[0] : ''}</p>
                <Button variant={'default'} size={'lg'}>Buy now</Button>
            </CardContent>
        </Card>

    )

}

