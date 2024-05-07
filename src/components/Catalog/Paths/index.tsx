
"use client"
import React from "react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "~/components/ui/breadcrumb"
import styles from './Paths.module.scss'
interface IPathsProps {

}
export default function Paths({ }: IPathsProps) {

    return (
        <Breadcrumb className={styles.Breadcrumb}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <button disabled={true}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/catalog" >Catalog</BreadcrumbLink>
                    </BreadcrumbItem>
                </button>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Smartphones</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    )

}

