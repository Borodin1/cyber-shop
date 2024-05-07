import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"


interface IInputCustomProps{
    styles: any,
    input: string,
    setInput: (input: string) => void
}

export default function InputCustom({styles, setInput, input}: IInputCustomProps) {
    return (
        <div className={styles.input}>
            <CiSearch className={styles.icon} />
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            {input && (
                <IoMdClose
                    className={styles.close}
                    onClick={() => setInput("")}
                />
            )}
        </div>
    )
}