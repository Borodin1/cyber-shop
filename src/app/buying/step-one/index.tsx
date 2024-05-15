"use client"
import React from "react"
import styles from '../Buying.module.scss'
import { Adress, Inputs, Road } from "../utils"
import { FiPlus } from "react-icons/fi";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "~/components/ui/dialog"
import { ICity, IData } from "~/types/country.type";
import { RadioGroup } from "~/components/ui/radio-group";
import Link from "next/link";
import { PAGES_DASHBOARD } from "~/configs/pages";

interface IBuyProps {
    dataCountry: IData[]
    dataCity: ICity[]
}
export default function Buy({ dataCity, dataCountry }: IBuyProps) {
    const [clearData, setClearData] = React.useState<{ country: string, city: string }[]>([])
    const [country, setCountry] = React.useState('')
    const [data, setData] = React.useState({
        country: '',
        city: ''
    })
    const [city, setCity] = React.useState('')

    function addCountryState() {
        setData({ country, city })
        clearData.push({ country, city })
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Road styles={styles} url={''} />
                <h2>Select Address</h2>
                <RadioGroup defaultValue="0">
                    {(data.city && data.country !== '') && (
                        <>
                            {clearData.map((el, i) => (
                                <Adress
                                    key={i}
                                    setClearData={setClearData}
                                    clearData={clearData}
                                    city={city}
                                    country={country}
                                    styles={styles}
                                    value={i.toString()} />
                            ))}
                        </>
                    )}
                </RadioGroup>
                <div className={styles.addAdress}>
                    <div className={styles.separator} />
                    <Dialog>
                        <DialogTrigger><FiPlus /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Enter youre adress</DialogTitle>
                            </DialogHeader>
                            <Inputs
                                city={city}
                                country={country}
                                dataCity={dataCity}
                                dataCountry={dataCountry}
                                setCity={setCity}
                                setCountry={setCountry}
                                styles={styles} />
                            <DialogFooter>
                                <DialogTrigger>
                                    <Button onClick={addCountryState} variant={'default'} size={'lg'}>Add</Button>
                                </DialogTrigger>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className={styles.buttons}>
                    <Link href={`${PAGES_DASHBOARD.BUYING}/step-one`}><Button variant={'default'} size={'lg'}>Back</Button></Link>
                    <Link href={`${PAGES_DASHBOARD.BUYING}/step-two`}><Button variant={'default'} size={'lg'}>Next</Button></Link>
                </div>
            </div>
        </div>
    )
}
