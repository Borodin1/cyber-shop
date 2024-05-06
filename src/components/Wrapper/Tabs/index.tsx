import React from 'react';
import styles from './Tabs.module.scss'
import Cart from '../Cart';
import { TabsList, TabsTrigger, TabsContent, Tabs } from "~/components/ui/tabs";

const arr = ["New Arrival", "Bestseller", "Featured Products"]

export default function Tab() {
    const [index, setIndex] = React.useState(0)
    return (
        <Tabs defaultValue={arr[0]} className={styles.Tab}>
            <TabsList className={styles.TabsList}>
                {arr.map((el, i) => (
                    <TabsTrigger
                        key={i}
                        value={el}
                        onClick={() => setIndex(i)}
                        className={` ${styles.TabsTrigger}
                        ${index === i ? styles.valid : styles.inValid}
                    `}>{el}</TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value={arr[0]} className={styles.TabsContent}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </TabsContent>
            <TabsContent value={arr[1]}  className={styles.TabsContent}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </TabsContent>
            <TabsContent value={arr[2]}  className={styles.TabsContent}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </TabsContent>
        </Tabs>
    )
}