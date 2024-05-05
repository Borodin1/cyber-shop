"use client"
import React from "react"
import styles from './Tehnology.module.scss'
import Image from "next/image"
import { Button } from "../ui/button"

interface ITehnologyProps {

}
export default function Tehnology({ }: ITehnologyProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className="lg:col-span-6 col-span-12 flex max-xls:flex-col justify-center xls:justify-between p-10 xls:p-0">
                    <Image src={'/PlayStation.png'} alt="playstation" width={360} height={343} className="max-w-full ml-12 xls:m-0" />
                    <div className="flex flex-col gap-4 justify-center xls:items-start items-center text-center xls:text-left">
                        <h1 className="text-2xl w-[300px] xxl:text-5xl">Playstation 5</h1>
                        <p className="text-sm opacity-60 ">Incredibly powerful CPUs, GPUs, and an SSD with <br className="xxl:block hidden" /> integrated I/O will redefine your PlayStation <br /> experience.</p>
                    </div>
                </div>
                <div className="col-start-1 lg:col-end-4 xls:col-span-6 col-span-12 row-start-2 row-end-3 flex items-center xls:gap-11 gap-4 p-10 xls:p-0 bg-[#ededed] max-xls:flex-col">
                    <Image src={'/Bads.png'} alt="Bads" width={104} height={272} className="max-w-full " />
                    <div className="flex flex-col gap-4 justify-center xls:items-start items-center xls:text-left text-center ">
                        <h1 className="text-xl xxl:text-[29px] font-thin">Apple <br className="xls:block hidden"/> AirPods <br className="xls:block hidden"/> <span className="font-medium">Max</span></h1>
                        <p className="text-sm opacity-60">Computational <br className="sm:hidden xls:block hidden" /> audio. <br className="xls:block hidden"/> Listen,<br className="sm:hidden xls:block hidden" />  it's powerful</p>
                    </div>
                </div>
                <div className="bg-[#353535] p-10 xls:p-0 xls:row-start-2 row-start-3 xls:row-end-3 row-end-4 lg:col-start-4 xls:col-start-7 col-start-1 col-end-13 lg:col-end-7 flex items-center gap-4 text-white h-full max-xls:flex-col" >
                    <Image src={'/VR.png'} alt="VR" width={136} height={190} className="max-w-full" />
                    <div className="flex flex-col gap-4 justify-center xls:items-start items-center xls:text-left text-center">
                        <h1 className="text-lg xxl:text-[29px] font-thin">Apple <br className="hidden xls:block"/> Vision <span className="font-medium">Pro</span></h1>
                        <p className="text-sm opacity-60">An immersive <br className="xxl:hidden xls:block hidden" /> way to <br className="xxl:hidden xls:block hidden" /> experience <br /> entertainment</p>
                    </div>
                </div>
                <div className="h-full lg:col-start-7 col-start-1 lg:col-end-13 col-end-12 lg:row-span-3 row-span-4 flex items-center relative xls:p-14 p-2 ml-6 bg-[#ededed] max-xls:flex-col-reverse ">
                    <div className="flex flex-col gap-4 justify-center xls:items-start items-center xls:text-left text-center">
                        <h1 className="text-4xl xls:text-5xl xxl:text-[64px] font-thin leading-[50px]">Macbook <br className="hidden xls:block"/> <span className="font-normal">Air</span></h1>
                        <p className="text-sm opacity-60 ">The new 15‑inch MacBook Air makes <br className="xxl:hidden xls:block hidden" /> room for more <br className="hidden xls:block"/>  of what you love with a spacious Liquid <br className="xxl:hidden xls:block hidden" />  Retina display.</p>
                        <Button variant={'ghost'} size={'lg'} className="border border-black/50 w-full xls:w-auto">Shop Now</Button>
                    </div>
                    <div className="xls:absolute min-w-[215px] min-h-[140px] xxl:top-[153px] xxl:right-[-402px] xls:top-[113px] xls:right-[-472px] ">
                        <Image src={'/MacBook.png'} alt="MacBook" width={659} height={459} className="max-w-full" />
                    </div>
                </div>
            </div>
        </div>
    )

}