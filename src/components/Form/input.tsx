import * as React from 'react'

import './input.css'

export interface IInputProps {
    value?: string
    type?: string
    placeholder?: string
    onChange?: () => {}
}

const Input = (props: IInputProps) => {
    const { type } = props

    return (
        <div className="input-box">
            {type === 'textarea' ? (
                <textarea className="input" {...props} />
            ) : (
                <input className="input" {...props} />
            )}
        </div>
    )
}

export default Input
