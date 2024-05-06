"use client"
import Tab from './Tabs'
import styles from './Wrapper.module.scss'
interface IWrapperProps {
    isValidTab?: boolean
    isValidDiscount?: boolean
}


export default function Wrapper({ isValidTab = true, isValidDiscount = false }: IWrapperProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {isValidTab && <Tab />}
                {isValidDiscount && <>dsdssd</>}
            </div>
        </div>

    )

}