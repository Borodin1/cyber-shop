
"use client"
import React from "react"
import Filters from "~/components/Catalog/Filters"
import Fill from "~/app/catalog/smartphones/filters"
import styles from '../Catalog.module.scss'
import Paths from "~/components/Paths"
import Cards from "~/components/Catalog/Cards"

interface ICatalogProps { }

export default function Catalog({ }: ICatalogProps) {
    const [filters, setFilters] = React.useState(true)

    if (filters) {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <Paths />
                    <div className={styles.cards}>
                        <div className={styles.Hidden}>
                            <Filters />
                        </div>
                        <Cards filters={filters} setFilters={setFilters}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Fill filters={filters} setFilters={setFilters}/>
    }

}

