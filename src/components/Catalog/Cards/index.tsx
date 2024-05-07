
"use client"
import React from "react"
import styles from './Cards.module.scss'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import Cart from "~/components/Wrapper/Cart"
import { PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext, Pagination } from "~/components/ui/pagination"
import { Button } from "~/components/ui/button"
import { IoIosOptions } from "react-icons/io";
import Link from "next/link"
import { PAGES_DASHBOARD } from "~/configs/pages"

interface ICardsProps {

}
export default function Cards({ }: ICardsProps) {
    const [click, setClick] = React.useState(1)
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2>Selected Products: <span>{85}</span></h2>
                    <div className={styles.filters}>
                        <Accordion type="single" collapsible className={styles.Accordion}>
                            <AccordionItem value="By rating">
                                <AccordionTrigger>By rating</AccordionTrigger>
                                <AccordionContent>
                                    any
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link href={`${PAGES_DASHBOARD.CATALOG}/filters`} className={styles.Link}>
                            <Button size={'lg'} variant={'ghost'} className={styles.button}>
                                <h3>Filters</h3>
                                <IoIosOptions />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <Pagination>
                    <PaginationContent className="sm:gap-4 gap-2">
                        <PaginationItem className="w-[35px]">
                            <PaginationPrevious href="/" />
                        </PaginationItem>
                        {[...new Array(4)].map((_, i) => (
                            <>{i !== 0 && (
                                <PaginationItem key={i} className={`${i === click && 'bg-black text-white rounded-lg'} w-[35px] `} onClick={() => setClick(i)}>
                                    <PaginationLink href="#">{i}</PaginationLink>
                                </PaginationItem>
                            )}</>
                        ))}
                        <PaginationItem className="w-[35px]">
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem className="w-[35px]">
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )

}

