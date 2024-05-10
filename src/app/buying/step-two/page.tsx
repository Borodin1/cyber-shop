'use client'
import React from "react"
import styles from '../Buying.module.scss'
import { Road } from "../utils"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Button } from "~/components/ui/button"
import { PAGES_DASHBOARD } from "~/configs/pages"
import Link from "next/link"
interface IStepTwoProps {

}
export default function StepTwo({ }: IStepTwoProps) {
    const url = document.URL
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Road styles={styles} url={url} />
                <div className={styles.snipnet}>
                    <h2>Shipment Method</h2>
                    <RadioGroup className={styles.method} defaultValue="one">
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <RadioGroupItem value="one" />
                                <h2>Free</h2>
                                <h2>Regulary shipment</h2>
                            </div>
                            <div className={styles.date}>17 Oct, 2023</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <RadioGroupItem value="one" />
                                <h2>$8.50</h2>
                                <h2>Get your delivery as soon as possible</h2>
                            </div>
                            <div className={styles.date}>1 Oct, 2023</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <RadioGroupItem value="one" />
                                <h2>Schedule</h2>
                                <h2>Pick a date when you want to get your delivery</h2>
                            </div>
                            <div className={styles.date}>Select Date</div>
                        </div>
                    </RadioGroup>
                </div>
                <div className={styles.buttons}>
                    <Link href={`${PAGES_DASHBOARD.BUYING}/step-one`}><Button variant={'outline'} size={'lg'}>Back</Button></Link>
                    <Link href={`${PAGES_DASHBOARD.BUYING}/step-three`}><Button variant={'default'} size={'lg'}>Next</Button></Link>
                </div>
            </div>
        </div>
    )

}