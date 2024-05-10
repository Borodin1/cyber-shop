import React from "react"
import Buy from "."
import { getCity, getData } from "~/utils/country.util"

interface IPageProps { }

export default async function Page({ }: IPageProps) {
    const dataCountry = await getData()
    const dataCity = await getCity()

    if(!dataCity || !dataCountry) return <div className="text-center">Loading</div>
    return <Buy dataCity={dataCity} dataCountry={dataCountry} />
}
