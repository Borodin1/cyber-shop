import { Checkbox } from "~/components/ui/checkbox"

export const nameSort = [
    { title: 'Apple' },
    { title: 'Xiaomi' },
    { title: 'Poco' },
    { title: 'OPPO' },
    { title: 'Honor 10' },
    { title: 'Motorola' },
    { title: 'Nokia' },
    { title: 'Realme' },
]
export const memorySort = [
    { title: '16GB' },
    { title: '32GB' },
    { title: '64GB' },
    { title: '128GB' },
    { title: '256GB' },
    { title: '512GB' },
    { title: '1T' },
]
export const diagonalSort = [
    { title: '5' },
    { title: '6.7' },
    { title: '5.5' },
    { title: '7' },
]
export const batarySort = [
    { title: '4323' },
    { title: '1223' },
    { title: '2652' },
    { title: '8532' },
    { title: '5000' },
    { title: '4600' },
]

interface INameSortUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export function NameSortUtils({ styles, input, setClickCheckbox }: INameSortUtils) {
    return (
        <div className={styles.Checkbox}>
            {nameSort.filter(el => el.title.toLowerCase().includes(input.toLowerCase())).map((el, i) => (
                <div key={i}>
                    <Checkbox id={el.title} onClick={() => setClickCheckbox(el.title)} />
                    <label
                        htmlFor={el.title}
                        className=""
                    >
                        {el.title}
                    </label>
                </div>
            ))}
        </div>
    )
}
interface IMemorySortUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export function MemorySortUtils({ styles, input, setClickCheckbox }: IMemorySortUtils) {
    return (
        <div className={styles.Checkbox}>
            {memorySort.filter(el => el.title.toLowerCase().includes(input.toLowerCase())).map((el, i) => (
                <div key={i}>
                    <Checkbox id={el.title} onClick={() => setClickCheckbox(el.title)} />
                    <label
                        htmlFor={el.title}
                        className=""
                    >
                        {el.title}
                    </label>
                </div>
            ))}
        </div>
    )
}
interface IDiagonalSortUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export function DiagonalSortUtils({ styles, input, setClickCheckbox }: IDiagonalSortUtils) {
    return (
        <div className={styles.Checkbox}>
            {diagonalSort.filter(el => el.title.toLowerCase().includes(input.toLowerCase())).map((el, i) => (
                <div key={i}>
                    <Checkbox id={el.title} onClick={() => setClickCheckbox(el.title)} />
                    <label
                        htmlFor={el.title}
                        className=""
                    >
                        {el.title}
                    </label>
                </div>
            ))}
        </div>
    )
}
interface IBatarySortUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export function BatarySortUtils({ styles, input, setClickCheckbox }: IBatarySortUtils) {
    return (
        <div className={styles.Checkbox}>
            {batarySort.filter(el => el.title.toLowerCase().includes(input.toLowerCase())).map((el, i) => (
                <div key={i}>
                    <Checkbox id={el.title} onClick={() => setClickCheckbox(el.title)} />
                    <label
                        htmlFor={el.title}
                        className=""
                    >
                        {el.title}mAh
                    </label>
                </div>
            ))}
        </div>
    )
}
interface IPriceSortUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export function PriceSortUtils({ styles, input, setClickCheckbox }: IPriceSortUtils) {
    return (
        <div className={styles.Checkbox}>
            {batarySort.filter(el => el.title.toLowerCase().includes(input.toLowerCase())).map((el, i) => (
                <div key={i}>
                    <Checkbox id={el.title} onClick={() => setClickCheckbox(el.title)} />
                    <label
                        htmlFor={el.title}
                        className=""
                    >
                        {el.title}mAh
                    </label>
                </div>
            ))}
        </div>
    )
}


interface IMainArrayUtils {
    styles: any
    input: string,
    setClickCheckbox: (clickChecbox: string) => void
}
export default function MainArray({ input, styles, setClickCheckbox }: IMainArrayUtils) {
    return [
        { value: 'Brand', elem: <NameSortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Built-in memory', elem: <MemorySortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Protection class', elem: 'NOTHING' },
        { value: 'Screen diagonal', elem: <DiagonalSortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Screen type', elem: 'NOTHING' },
        { value: 'Battery capacity', elem: <BatarySortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
    ]
}