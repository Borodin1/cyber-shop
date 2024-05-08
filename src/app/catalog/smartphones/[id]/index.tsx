"use client"
import React from "react"
import styles from './Post.module.scss'
import Paths from "~/components/Paths"
import Image from "next/image";
import { Comments, Details, Info, Logos, Reviews, } from "./utils";
import { Button } from "~/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "~/components/ui/input";
import Cart from "~/components/Cart";

interface IPageProps { id: string }

export default function Page({ id }: IPageProps) {
    const [index, setIndex] = React.useState(0)
    const [memory, setMemory] = React.useState(0)
    const [input, setInput] = React.useState(50)
    const [price, setPrice] = React.useState(0)
    const [color, setColor] = React.useState(0)
    const [more, setMore] = React.useState(false)
    const [comment, setComment] = React.useState(false)

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className="hidden lg:block">
                    <Paths brand="Apple" name="Iphone 14" />
                </div>
                <div className={styles.main}>
                    <Logos index={index} setIndex={setIndex} styles={styles} />
                    <Info
                        styles={styles}
                        memory={memory}
                        color={color}
                        price={price}
                        setPrice={setPrice}
                        setMemory={setMemory}
                        setColor={setColor} />
                </div>
                <Details styles={styles} />
                <Button
                    variant={'outline'}
                    size={'lg'}
                    className={styles.button}
                    onClick={() => setMore(!more)}>
                    <p>View More</p>
                    <IoIosArrowDown />
                </Button>
                {more && <Details styles={styles} />}
                <Reviews input={input} styles={styles} />
                <Input placeholder="Leave Comment" className="h-[64px]" />
                <Comments styles={styles} />
                <Comments styles={styles} />
                <Comments styles={styles} />
                {comment && (
                    <>
                        <Comments styles={styles} />
                        <Comments styles={styles} />
                        <Comments styles={styles} /></>
                )}
                <Button
                    variant={'outline'}
                    size={'lg'}
                    className={styles.button}
                    onClick={() => setComment(!comment)}>
                    <p>View More</p>
                    <IoIosArrowDown className={`${comment && 'rotate-180'}`} />
                </Button>
                <div className={styles.related}>
                    <h3 className={styles.h3}>Related Products</h3>
                    <div className={styles.cards}>
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )

}

