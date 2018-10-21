import * as React from 'react'

export interface IIconProps {
    name: string
    width?: number
    height?: number
}

const Icon = ({ name }: IIconProps) => {
    const url = `./icons/icons8-${name}.svg`

    return <img src={url} />
}

export default Icon
