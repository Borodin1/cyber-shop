"use client"
import React from "react"
import styles from './Filters.module.scss'
import InputCustom from "~/components/_custom/input"
import MainArray from "./utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"

interface IFiltersProps { }
export default function Filters({ }: IFiltersProps) {
    const [input, setInput] = React.useState('');
    const [range1, setRange1] = React.useState('');
    const [range2, setRange2] = React.useState('');
    const [clickChecbox, setClickCheckbox] = React.useState("");

    
    const data = MainArray({ input, styles, setClickCheckbox, range1, range2, setRange1, setRange2 })
    return (
        <div className={styles.root}>
            <Accordion type="single" collapsible>
                {data.map((el, i) => (
                    <AccordionItem value={el.value}>
                        <div key={i}>
                            <AccordionTrigger className={styles.AccordionTrigger}>{el.value}</AccordionTrigger>
                            <AccordionContent className={styles.AccordionContent}>
                                {i !== 0 && (<InputCustom input={input} setInput={setInput} styles={styles} />)}
                                {el.elem}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )

}
