import { ICity, IData } from "~/types/country.type"
import axios from 'axios'
import React from "react"
export async function getData() {
    try {
        const { data } = await axios.get(`https://ace270a52c2dc1f6.mokky.dev/countrys?limit=30`)
        return data.items as IData[]
    } catch (error) {
        console.log(error);

    }
}
export async function getCity() {
    try {
        const { data } = await axios.get(`https://ace270a52c2dc1f6.mokky.dev/sd?limit=30`)
        return data.items as ICity[]
    } catch (error) {
        console.log(error);

    }
}
