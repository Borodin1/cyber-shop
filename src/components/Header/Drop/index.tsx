"use client"
import Link from "next/link"
import React from "react"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "~/components/ui/dropdown-menu"
import styles from './Drop.module.scss'

interface IDropProps {
    arr: { logo: JSX.Element, link: string, title: string }[]
    arrMenu: { title: string; link: string; logo: JSX.Element }[]
}
export default function Drop({ arr, arrMenu, }: IDropProps) {

    return (
        <DropdownMenuContent className={`${styles.root}`}>
            <DropdownMenuLabel className={styles.label}>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className={styles.separator} />
            {arrMenu.map((el, i) => (
                <Link href={el.link} className={styles.arrMenu}>
                    <DropdownMenuItem className={styles.logo}>{el.logo}</DropdownMenuItem>
                    <DropdownMenuItem className={styles.title}>{el.title}</DropdownMenuItem>
                </Link>
            ))}
            <DropdownMenuSeparator className={styles.separator} />
            {arr.map((el, i) => (
                <Link href={el.link} key={i} className={styles.arr}>
                    <DropdownMenuItem className={styles.logo} >{el.logo}</DropdownMenuItem>
                    <DropdownMenuItem className={styles.title} >{el.title}</DropdownMenuItem>
                </Link>
            ))}
        </DropdownMenuContent>
    )

}