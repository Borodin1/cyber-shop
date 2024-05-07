
"use client"
import React from "react"
import Filters from "~/components/Catalog/Filters"
import styles from './Catalog.module.scss'

interface ICatalogProps { }

export default function Catalog({ }: ICatalogProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Filters />
            </div>
        </div>
    )

}

