import { MdPhoneAndroid } from "react-icons/md";
import { BsCpu } from "react-icons/bs";
import { LuCpu } from "react-icons/lu";
import { IoCameraOutline, IoHome } from "react-icons/io5";
import { IoIosCloudDone, IoMdReverseCamera } from "react-icons/io";
import { GiBattery75 } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { Button } from "~/components/ui/button";
import Image from "next/image";



export const arrLogos = [
    { el: <MdPhoneAndroid />, title: 'Screen size' },
    { el: <BsCpu />, title: 'CPU' },
    { el: <LuCpu />, title: 'Numbers of Cores' },
    { el: <IoCameraOutline />, title: 'Main Camera' },
    { el: <IoMdReverseCamera />, title: 'Front-Camera' },
    { el: <GiBattery75 />, title: 'Battery capacity' },
]
export const arrDelivery = [
    { el: <CiDeliveryTruck />, title: 'Free Delivery', p: '1-2 day' },
    { el: <IoHome />, title: 'In-stock', p: 'Today' },
    { el: <IoIosCloudDone />, title: 'Guaranteed', p: '1 year' },
]
export const sreensArr = [
    { title: 'Screen diagonal', desc: '6.7' },
    { title: 'The screen resolution', desc: '2796x1290' },
    { title: 'The screen refresh rate', desc: '120 Hz' },
    { title: 'The pixel density', desc: '460 ppi' },
    { title: 'Screen type', desc: 'OLED' },
    { title: 'Additionally', desc: 'Dynamic Island-Always-On display HDR display True Tone Wide color (P3)' }
]

export interface GetOne {
    Battery: number
    CPU: string
    FrontCamera: string
    MainCamera: string
    brand: string

    description: string

    screenType: string
    memory: number[]
    pixelDebcity: string

    screenResolution: string
    screenSize: string
}


interface IInfoProps {
    styles: any
    memory: number
    color: number
    price: number
    title: string
    prices: number[]
    colors: string[]
    memorys: number[]
    FrontCamera: string
    MainCamera: string
    cpu: string
    Battery: number
    screenSize: string
    setMemory: (memory: number) => void
    setColor: (color: number) => void
    setPrice: (price: number) => void
}
export function Info({
    styles,
    memory,
    memorys,
    color,
    price,
    prices,
    title,
    FrontCamera,
    MainCamera,
    cpu,
    colors,
    Battery,
    screenSize,
    setMemory,
    setColor,
    setPrice,
}: IInfoProps) {
    return (
        <>
            <div className={styles.info}>
                <h2>{title}</h2>
                <div className={styles.prices}>
                    {prices.map((el, i) => (
                        <p
                            onClick={() => setPrice(i)}
                            key={i}
                            className={`${i === price ? 'text-4xl text-black' : 'text-2xl text-black/20 line-through'}`}
                        >${el}</p>
                    ))}
                </div>
                <div className={styles.colors}>
                    <p>Select color :</p>
                    <div className={styles.colorsArray}>
                        {colors.map((el, i) => (
                            <p
                                onClick={() => setColor(i)}
                                className={`w-8 h-8 bg-[${el}] 
                            ${i === color ? 'border-[5px] border-stone-500' : ''}`}
                                key={i}
                            ></p>
                        ))}
                    </div>
                </div>
                <div className={styles.memorys}>
                    {memorys.map((el, i) => (
                        <div
                            onClick={() => setMemory(i)}
                            className={`${styles.memory} ${i === memory ? 'border border-black text-black' : 'border text-black/40 border-black/20'}`}
                            key={i}>{el}{i !== 3 ? 'GB' : 'TB'}</div>
                    ))}
                </div>
                <div className={styles.characteristics}>
                    {[...new Array(6)].map((_, i) => (
                        <div className={styles.characteristicsItem} key={i}>
                            {arrLogos[i].el}
                            <p>
                                <span>{arrLogos[i].title}</span>
                                <span>
                                    {i === 0
                                        ? screenSize
                                        : i === 1
                                            ? cpu
                                            : i === 2
                                                ? screenSize
                                                : i === 3
                                                    ? MainCamera
                                                    : i === 4
                                                        ? FrontCamera
                                                        : i === 5
                                                            ? Battery
                                                            : ''}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.descriprion}>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</div>
                <div className={styles.buttons}>
                    {['Add to Wishlist', 'Add to Card'].map((el, i) => (
                        <Button size={'lg'} key={i} variant={i === 0 ? 'outline' : 'default'}>{el}</Button>
                    ))}
                </div>
                <div className={styles.delivery}>
                    {arrDelivery.map((el, i) => (
                        <div className={styles.deliveryItem} key={i}>
                            {el.el}
                            <p>
                                <span>{el.title}</span>
                                <span>{el.p}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div></>
    )
}
interface IDetailsProps {
    styles: any
    screenSize: string
    description: string
    screenResolution: string
    screenType: string
}
export function Details({ styles, ...data }: IDetailsProps) {
    return (
        <>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>{data.description}</p>
                <div className={styles.screen}>
                    <h2>Screen</h2>
                    <div className={styles.screenOptions}>
                        {sreensArr.map((el, i) => (
                            <div key={i} className={styles.separator}>
                                <p>{el.title}</p>
                                <p>{i === 0
                                    ? data.screenSize
                                    : i === 1
                                        ? data.screenResolution
                                        : i === 2
                                            ? sreensArr[2].desc
                                            : i === 3
                                                ? sreensArr[3].desc
                                                : i === 4
                                                    ? data.screenType
                                                    : i === 5
                                                        ? sreensArr[5].desc
                                                        : ''
                                }
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.cpu}>
                    <h2>CPU</h2>
                    <div className={styles.cpuOptions}>
                        {['CPU', 'Number of cores'].map((el, i) => (
                            <div key={i} className={styles.separator}>
                                <p>{el}</p>
                                <p>{i === 0 ? 'A16 Bionic' : '6'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
interface IReviewsProps {
    styles: any
    input: number
}
export function Reviews({ styles, input }: IReviewsProps) {
    return (
        <>
            <div className={styles.reviews}>
                <h1 className={styles.h1}>Reviews</h1>
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        <h1>4.8</h1>
                        <p>of 125 reviews</p>
                        <div className={styles.star}>
                            {[...new Array(5)].map((_, i) => (
                                <Image key={i} src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.input}>
                        {['Excellent', 'Good', 'Average', 'Below Average', 'Poor'].map((el, i) => (
                            <div className={styles.inputOne} key={i}>
                                <h3>{el}</h3>
                                <div className={styles.line}>
                                    <div className={styles.lineOne}></div>
                                    <Image src={'/line.svg'} alt="line" height={6} width={input} className={styles.lineTwo} />
                                </div>
                                <h4>100</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
interface ILogosProps {
    styles: any
    index: number
    setIndex: (index: number) => void
    logos: string[]
}
export function Logos({ styles, index, setIndex, logos }: ILogosProps) {
    return (
        <>
            <div className={styles.wrapperLogos}>
                <div className={styles.subLogos}>
                    {logos?.map((el, i) => (
                        <div key={i} className={`${index === i ? 'opacity-55' : ''}`}>
                            <Image
                                src={el}
                                alt="iphone"
                                width={74}
                                height={76}
                                onClick={() => setIndex(i)}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.mainLogo}>
                    <Image
                        src={logos ? logos[index] : ''}
                        alt="iphone"
                        width={416}
                        height={516} />
                </div>
            </div>
        </>
    )
}
interface ICommentsProps {
    styles: any
}
export function Comments({ styles }: ICommentsProps) {
    return (
        <>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <Image src={'/icons/Icon_Gaming.png'} alt="logo" width={56} height={56} />
                    <div className={styles.info}>
                        <div className={styles.create}>
                            <h3>Grace Carey</h3>
                            <p>24 January,2023</p>
                        </div>
                        <div className={styles.stars}>
                            {[...new Array(5)].map((_, i) => (
                                <Image key={i} src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                        <p>I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤</p>
                    </div>
                </div>
            </div>
        </>
    )
}