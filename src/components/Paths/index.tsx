
"use client"
import React from "react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "~/components/ui/breadcrumb"
import styles from './Paths.module.scss'
import { PAGES_DASHBOARD } from "~/configs/pages"
interface IPathsProps {
    brand?: string
    name?: string
}
export default function Paths({ brand, name }: IPathsProps) {

    return (
        <Breadcrumb className={styles.Breadcrumb}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Catalog</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {(brand && name)
                    ? <BreadcrumbItem>
                        <BreadcrumbLink href={`${PAGES_DASHBOARD.CATALOG}/smartphones`}>Smartphones</BreadcrumbLink>
                    </BreadcrumbItem>
                    : <BreadcrumbItem>
                        <BreadcrumbPage>Smartphones</BreadcrumbPage>
                    </BreadcrumbItem>
                }
                <BreadcrumbSeparator />
                {(brand && name) && (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbPage>{brand}</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>

    )

}

