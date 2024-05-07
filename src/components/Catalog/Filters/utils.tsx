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
    range1: string,
    range2: string,
    setRange1: (range1: string) => void
    setRange2: (range2: string) => void
}
export function PriceSortUtils({ styles, range1, range2, setRange1, setRange2 }: IPriceSortUtils) {
    return (
        <div className={styles.input}>
            <div className={styles.FromTo}>
                {['From', 'To'].map((el, i) => (
                    <div key={i} className={styles.fromToWrapp}>
                        <h2 className={`${i === 1 && 'text-right'}`}>{el}</h2>
                        <p className={`${i === 0 ? 'justify-start' : 'justify-end'}`}>{i === 0 ? (range1 || 0) : (range2.replace('-', '') || 0)}</p>
                    </div>
                ))}
            </div>
            <div className={styles.wrappInput}>
                <input
                    type="range"
                    value={range1}
                    min={0}
                    max={50000}
                    step={1}
                    onChange={e => setRange1(e.target.value)}
                />
                <input
                    type="range"
                    value={range2}
                    min={-50000}
                    max={0}
                    step={1}
                    onChange={e => setRange2(e.target.value)}
                />
            </div>
        </div>
    )
}


interface IMainArrayUtils {
    styles: any
    input: string,
    range1: string,
    range2: string,
    setRange1: (range1: string) => void
    setRange2: (range2: string) => void
    setClickCheckbox: (clickChecbox: string) => void
}
export default function MainArray({ input, styles, range1, range2, setClickCheckbox, setRange1, setRange2 }: IMainArrayUtils) {
    return [
        { value: 'Price', elem: <PriceSortUtils range1={range1} range2={range2} setRange1={setRange1} setRange2={setRange2} styles={styles} /> },
        { value: 'Brand', elem: <NameSortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Built-in memory', elem: <MemorySortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Protection class', elem: 'NOTHING' },
        { value: 'Screen diagonal', elem: <DiagonalSortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
        { value: 'Screen type', elem: 'NOTHING' },
        { value: 'Battery capacity', elem: <BatarySortUtils input={input} styles={styles} setClickCheckbox={setClickCheckbox} /> },
    ]
}