'use client'
import Link from "next/link"
import React from "react"
import Fill from '~/components/Catalog/Filters'
import styles from './Filters.module.scss'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PAGES_DASHBOARD } from "~/configs/pages"
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation"

interface IFiltersProps { }

export default function Filters({ }: IFiltersProps) {
    const { push } = useRouter()
    function handleRequest() {
        push(PAGES_DASHBOARD.CATALOG)
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Link href={PAGES_DASHBOARD.CATALOG} className={styles.return}>
                    <MdOutlineKeyboardArrowLeft />
                    <h2>Filters</h2>
                </Link>
                <Fill />
                <Button variant={'default'} size={'lg'} onClick={handleRequest} className={styles.button}>Apply</Button>
            </div>
        </div>
    )
}

