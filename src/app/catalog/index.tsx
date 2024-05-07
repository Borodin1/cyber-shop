
"use client"
import React from "react"
import Filters from "~/components/Catalog/Filters"
import styles from './Catalog.module.scss'
import Paths from "~/components/Catalog/Paths"
import Cards from "~/components/Catalog/Cards"

interface ICatalogProps { }

export default function Catalog({ }: ICatalogProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Paths />
                <div className={styles.cards}>
                    <div className={styles.Hidden}>
                        <Filters />
                    </div>
                    <Cards />
                </div>
            </div>
        </div>
    )

}

