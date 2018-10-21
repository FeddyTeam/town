import * as React from 'react'

import './figure.css'

export interface IFigureProps {
    src: string
    alt?: string
    caption?: string
    link?: string
    title?: string
    source?: string
    sourceLink?: string
}

const sourceTag = (source: string, sourceLink?: string) => {
    return sourceLink ? (
        <a
            className="figure__source"
            target="_blank"
            href={sourceLink}
            title={source}
        >
            Image Source: {source}
        </a>
    ) : (
        <span className="figure__source">Image Source: {source}</span>
    )
}

const Figure = (props: IFigureProps) => {
    const { src, alt, caption, link, title, source, sourceLink } = props

    return (
        <figure className="figure">
            {link ? (
                <a href={link} target="_blank" title={title || alt}>
                    <img className="figure__image" src={src} alt={alt} />
                </a>
            ) : (
                <img className="figure__image" src={src} alt={alt} />
            )}
            <figcaption className="figure__caption">
                <p>{caption}</p>
                {source && sourceTag(source, sourceLink)}
            </figcaption>
        </figure>
    )
}

export default Figure
