import * as React from 'react'
import classnames from 'classnames'
import Input from './input'
import { ReactNode, EventHandler, SyntheticEvent } from 'react'

import './form.css'

export interface IFormProps {
    children?: ReactNode
    onSubmit?: EventHandler<SyntheticEvent>
}

export interface IFormItemProps {
    children?: ReactNode
    label?: string
    helperText?: string
    error?: boolean
    theme?: string
}

const Form = (props: IFormProps) => {
    const { children, onSubmit } = props

    return <form onSubmit={onSubmit}>{children}</form>
}

const FormItem = ({
    label,
    children,
    helperText,
    error,
    theme,
}: IFormItemProps) => {
    const classes = classnames(
        'form-item',
        error && 'form-item--theme-error',
        !error && theme && `form-item--theme-${theme}`
    )

    return (
        <div className={classes}>
            <label className="form-item__label">{label}</label>
            <div>{children}</div>
            {helperText && (
                <span className="form-item__helper">{helperText}</span>
            )}
        </div>
    )
}

Form.FormItem = FormItem
Form.Input = Input

export { default as Input } from './input'
export default Form
