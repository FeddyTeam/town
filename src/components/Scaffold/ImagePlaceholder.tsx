import * as React from 'react'

import './image-placeholder.css'

export interface IImagePlaceholderProps {
    width: number
    height?: number
    random?: boolean
}

const ImagePlaceholder = ({ width, height, random }: IImagePlaceholderProps) => {
    const url = random
        ? `https://source.unsplash.com/random/${width}x${height || width}`
        : `https://fakeimg.pl/${width}x${height || width}`

    return (
        <img
            width={width}
            height={height}
            className="image-placeholder"
            src={url}
            alt={`Fake Image ${width}x${height}`}
        />
    )
}

export default ImagePlaceholder
