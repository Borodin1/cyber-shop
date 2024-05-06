import styles from './Banner.module.scss'

import Image from 'next/image';
import { arr } from './arr';
import Link from 'next/link';


export default function Banner(){
    return(
        <div className={styles.mainBanner}>
            {arr.map((item,i)=>(
                <div key={i} className={styles.banner} style={{backgroundColor:item.bg}}>
                    <div >
                    <Image src={item.logo} alt={item.title}/>
                    </div>

                    <div className={styles.info}>
                        <h2 style={{color:item?.textC}}>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>

                    <button style={{color:item?.textC,borderColor:item?.textC}}><Link href="/">Shop Now</Link></button>
                </div>
            ))}
        </div>
    )
}