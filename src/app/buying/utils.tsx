import { FaLocationDot } from "react-icons/fa6";
import { FaPencilAlt, FaShippingFast } from "react-icons/fa";
import { TbCreditCardPay } from "react-icons/tb";
import { ICity, IData } from "~/types/country.type";
import { Input } from "~/components/ui/input";
import { IoCloseOutline } from "react-icons/io5";
import { RadioGroupItem } from "~/components/ui/radio-group";

export const arr = [
    { title: 'Address', icon: <FaLocationDot /> },
    { title: 'Shipping', icon: <FaShippingFast /> },
    { title: 'Payment', icon: <TbCreditCardPay /> },
]
interface IRoad {
    styles: any
    url: string
}
export function Road({ styles, url }: IRoad) {
    return (
        <div className={styles.road}>
            {arr.map((el, i) => (
                <div key={i} className={`${styles.item}
                 ${(url.includes('/step-one') && i !== 0)
                        ? "opacity-30"
                        : ''}
                 ${(url.includes('/step-two') && i !== 1)
                        ? "opacity-30"
                        : ''}
                 ${(url.includes('/step-three') && i !== 2)
                        ? "opacity-30"
                        : ''}
                 `}>
                    <FaLocationDot />
                    <p>
                        <span>Step {i + 1}</span>
                        <span>{el.title}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}
interface IInputs {
    styles: any
    country: string
    city: string
    dataCountry: IData[]
    dataCity: ICity[]
    setCountry: (country: string) => void
    setCity: (city: string) => void
}
export function Inputs({ city, country, dataCity, dataCountry, setCity, setCountry, styles }: IInputs) {
    return (
        <>
            <Input placeholder="Enter you're Country" onChange={e => setCountry(e.target.value)} value={country} className="text-lg" />
            <div className="flex flex-col border border-black/25 rounded-lg gap-2 max-h-[200px] overflow-y-scroll">
                {dataCountry.filter(el => el.name.toLowerCase().includes(country.toLowerCase())).map((el) => (
                    <div
                        onClick={() => setCountry(el.name)}
                        key={el.id}
                        className={'px-4 py-1 cursor-pointer hover:bg-black/20 rounded-lg flex gap-3 items-center'}>
                        <FaLocationDot />
                        {el.name}
                    </div>
                ))}
            </div>
            <Input placeholder="Enter you're City" onChange={e => setCity(e.target.value)} value={city} className="text-lg" />
            <div className="flex flex-col border border-black/25 rounded-lg gap-2 max-h-[200px] overflow-y-scroll">
                {dataCity.filter(el => el.name.toLowerCase().includes(city.toLowerCase())).map((el) => (
                    <div
                        onClick={() => setCity(el.name)}
                        key={el.city_id}
                        className={'px-4 py-1 cursor-pointer hover:bg-black/20 rounded-lg flex gap-3 items-center'}>
                        <FaLocationDot />
                        {el.name}
                    </div>
                ))}
            </div>
            <Input placeholder="Enter number" type="" />
        </>
    )
}
interface IAdress {
    styles: any
    country: string
    city: string
    value: string
    clearData: { country: string, city: string }[]
    setClearData: (clearData: { country: string, city: string }[]) => void
}
export function Adress({ city, country, styles, setClearData, value, clearData }: IAdress) {
    return (
        <div className={styles.adress}>
            <div className={styles.item}>
                <RadioGroupItem value={value} id={value} />
                <div className={styles.info}>
                    <div className={styles.Flex}>
                        <h3>{country}</h3>
                        <p>{city}</p>
                        <span>(209) 555-0104</span>
                    </div>
                    <div className={styles.icon}>
                        <FaPencilAlt />
                        <IoCloseOutline />
                    </div>
                </div>
            </div>
        </div>
    )
}
