"use client"
import Tab from './Tabs'
import styles from './Wrapper.module.scss'
interface IWrapperProps {}


export default function Wrapper({ }: IWrapperProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Tab/>
            </div>
        </div>

    )

}