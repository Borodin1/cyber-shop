'use client'
import Link from "next/link"
import React from "react"
import Fill from '~/components/Catalog/Filters'
import styles from './Filters.module.scss'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PAGES_DASHBOARD } from "~/configs/pages"
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation"

interface IFiltersProps {
    filters: boolean
    setFilters: (filters: boolean) => void
}

export default function Filters({ filters, setFilters }: IFiltersProps) {
    const { push } = useRouter()
    function handleRequest() {
        setFilters(true)
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.return} onClick={() => setFilters(!filters)}>
                    <MdOutlineKeyboardArrowLeft />
                    <h2>Filters</h2>
                </div>
                <Fill />
                <Button variant={'default'} size={'lg'} onClick={handleRequest} className={styles.button}>Apply</Button>
            </div>
        </div>
    )
}

