"use client"
import React from "react"
import styles from '../Buying.module.scss'
import { Road } from "../utils"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { PAGES_DASHBOARD } from "~/configs/pages"
const arr = ["Credit Card", "PayPal", "PayPal Credit"]
interface IPAgeThreeProps {

}
export default function PAgeThree({ }: IPAgeThreeProps) {
    const url = document.URL
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Road styles={styles} url={url} />
                <div className={styles.main}>
                    <Card className="w-full flex flex-col gap-6">
                        <CardHeader>
                            <CardTitle>Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={styles.buyElems}>
                                <div className={styles.buyElem}>
                                    <div className="flex gap-4 items-center">
                                        <Image src={'/FullPostIphone.png'} alt="iphone" width={40} height={40} />
                                        <h3>Apple iPhone 14 Pro Max 128Gb </h3>
                                    </div>
                                    <p>$1399</p>
                                </div>
                            </div>
                            <div className={styles.buyElems}>
                                <div className={styles.buyElem}>
                                    <div className="flex gap-4 items-center">
                                        <Image src={'/FullPostIphone.png'} alt="iphone" width={40} height={40} />
                                        <h3>Apple iPhone 14 Pro Max 128Gb </h3>
                                    </div>
                                    <p>$1399</p>
                                </div>
                            </div>
                            <div className={styles.buyElems}>
                                <div className={styles.buyElem}>
                                    <div className="flex gap-4 items-center">
                                        <Image src={'/FullPostIphone.png'} alt="iphone" width={40} height={40} />
                                        <h3>Apple iPhone 14 Pro Max 128Gb </h3>
                                    </div>
                                    <p>$1399</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardContent className="flex flex-col gap-4">
                            <div className={styles.info}>
                                <h4>Address</h4>
                                <h3>1131 Dusty Townline, Jacksonville, TX 40322</h3>
                            </div>
                            <div className={styles.info}>
                                <h4>Shipment method</h4>
                                <h3>Free</h3>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div className={styles.totalSection}>
                                <div className={styles.item}>
                                    <p>Subtotal</p>
                                    <p>$2347</p>
                                </div>
                                <div className={styles.itemOpa}>
                                    <p>Estimated Tax</p>
                                    <p>$2347</p>
                                </div>
                                <div className={styles.itemOpa}>
                                    <p>Estimated shipping & Handling</p>
                                    <p>$2347</p>
                                </div>
                                <div className={styles.total}>
                                    <p>Total</p>
                                    <p>$2426</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Payment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue={arr[0]}>
                                <TabsList className="flex-wrap mb-10">
                                    {arr.map((el, i) => (
                                        <TabsTrigger
                                            key={i}
                                            value={el}>{el}</TabsTrigger>
                                    ))}
                                </TabsList>
                                <TabsContent value={arr[0]} className={styles.TabsContent}>
                                    <Image src={'/Card.png'} alt="card" width={337} height={188} />
                                    <div className={styles.inputs}>
                                        <Input placeholder="Cardholder Name" />
                                        <Input placeholder="Card Number" />
                                        <Input placeholder="Exp.Date" />
                                        <Input placeholder="CVV" />
                                    </div>
                                    <div className="flex gap-3 items-center font-semibold pb-12">
                                        <Checkbox />
                                        Same as billing address
                                    </div>
                                    <div className={styles.buttons}>
                                        <Link href={`${PAGES_DASHBOARD.BUYING}/step-two`}><Button variant={'outline'} size={'lg'}>Back</Button></Link>
                                        <Button variant={'default'} >Pay</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent value={arr[1]} className={styles.TabsContent}>
                                    <Image src={'/Card_two.png'} alt="card" width={337} height={188} />
                                    <div className={styles.inputs}>
                                        <Input placeholder="Cardholder Name" />
                                        <Input placeholder="Card Number" />
                                        <Input placeholder="Exp.Date" />
                                        <Input placeholder="CVV" />
                                    </div>
                                    <div className="flex gap-3 items-center font-semibold pb-12">
                                        <Checkbox />
                                        Same as billing address
                                    </div>
                                    <div className={styles.buttons}>
                                        <Link href={`${PAGES_DASHBOARD.BUYING}/step-two`}><Button variant={'outline'} size={'lg'}>Back</Button></Link>
                                        <Button variant={'default'}>Pay</Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )

}