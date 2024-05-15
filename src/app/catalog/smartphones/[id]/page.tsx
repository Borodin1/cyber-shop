import React from "react"
import Page from ".";

interface IPostProps {
    params: { id: string }
}
export default function Post({ params: { id } }: IPostProps) {
    return <Page id={id} />

}

