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


interface IInfoProps {
    styles: any
    memory: number
    color: number
    price: number
    setMemory: (memory: number) => void
    setColor: (color: number) => void
    setPrice: (price: number) => void
}
export function Info({
    styles,
    memory,
    color,
    price,
    setMemory,
    setColor,
    setPrice,
}: IInfoProps) {
    return (
        <>
            <div className={styles.info}>
                <h2>Apple iPhone 14 Pro Max</h2>
                <div className={styles.prices}>
                    {['1399', '1499'].map((el, i) => (
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
                        {['bg-slate-400', 'bg-red-600', 'bg-purple-700', 'bg-orange-600', 'bg-black'].map((el, i) => (
                            <p
                                onClick={() => setColor(i)}
                                className={`w-8 h-8 ${el} 
                            ${i === color ? 'border-[5px] border-stone-500' : ''}`}
                                key={i}
                            ></p>
                        ))}
                    </div>
                </div>
                <div className={styles.memorys}>
                    {['128', '256', '512', '1',].map((el, i) => (
                        <div
                            onClick={() => setMemory(i)}
                            className={`${styles.memory} ${i === memory ? 'border border-black text-black' : 'border text-black/40 border-black/20'}`}
                            key={i}>{el}{i !== 3 ? 'GB' : 'TB'}</div>
                    ))}
                </div>
                <div className={styles.characteristics}>
                    {[...new Array(6)].map((_, i) => (
                        <div className={styles.characteristicsItem}>
                            {arrLogos[i].el}
                            <p>
                                <span>{arrLogos[i].title}</span>
                                <span>6.7</span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.descriprion}>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</div>
                <div className={styles.buttons}>
                    {['Add to Wishlist', 'Add to Card'].map((el, i) => (
                        <Button size={'lg'} variant={i === 0 ? 'outline' : 'default'}>{el}</Button>
                    ))}
                </div>
                <div className={styles.delivery}>
                    {arrDelivery.map((el, i) => (
                        <div className={styles.deliveryItem}>
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
}
export function Details({ styles }: IDetailsProps) {
    return (
        <>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                <div className={styles.screen}>
                    <h2>Screen</h2>
                    <div className={styles.screenOptions}>
                        {sreensArr.map((el, i) => (
                            <div key={i} className={styles.separator}>
                                <p>{el.title}</p>
                                <p>{el.desc}</p>
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
                                <Image src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.input}>
                        {['Excellent', 'Good', 'Average', 'Below Average', 'Poor'].map((el, i) => (
                            <div className={styles.inputOne}>
                                <h3>{el}</h3>
                                <div key={i} className={styles.line}>
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
}
export function Logos({ styles, index, setIndex }: ILogosProps) {
    return (
        <>
            <div className={styles.wrapperLogos}>
                <div className={styles.subLogos}>
                    {[...new Array(4)].map((_, i) => (
                        <div className={`${index === i ? 'opacity-55' : ''}`}>
                            <Image
                                src={'/FullPostIphone.png'}
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
                        src={'/FullPostIphone.png'}
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
                                <Image src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                        <p>I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤</p>
                    </div>
                </div>
            </div>
        </>
    )
}