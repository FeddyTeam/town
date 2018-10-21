import * as React from 'react'
import { ReactNode, ReactEventHandler } from 'react'
import classnames from 'classnames'

import './button.css'

export interface IButtonProps {
    children?: ReactNode
    type?: string
    size?: string
    block?: boolean
    onClick?: ReactEventHandler
    loading?: boolean
}

export interface IButtonGroupProps {
    children?: ReactNode
}

const Button = (props: IButtonProps) => {
    const { children, type, size, block, onClick, loading } = props
    const classes = classnames(
        'button',
        `button--${type || 'secondary'}`,
        `button--${size || 'medium'}`,
        loading ? 'button--loading' : 'xx',
        block ? 'button--display-block' : ''
    )

    return (
        <button disabled={loading} onClick={onClick} className={classes}>
            {loading ? 'Loading...' : children}
        </button>
    )
}

const ButtonGroup = (props: IButtonGroupProps) => {
    return <div className="button-group">{props.children}</div>
}

Button.ButtonGroup = ButtonGroup

export default Button
