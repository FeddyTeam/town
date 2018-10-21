import * as React from 'react'
import { ReactNode, ReactEventHandler } from 'react'
import classnames from 'classnames'

import './dialog.css'

import { Button } from '..'

export interface IDialogProps {
    title?: string
    children?: ReactNode
    open?: boolean
    onConfirm?: ReactEventHandler
    onCancel?: ReactEventHandler
    onClose?: ReactEventHandler
    confirmText?: string
    cancelText?: string
}

const Dialog = (props: IDialogProps) => {
    const {
        children,
        open,
        title,
        confirmText,
        cancelText,
        onConfirm,
        onCancel,
    } = props
    const classes = classnames(
        'dialog-container',
        open ? 'dialog-container--open' : ''
    )

    return (
        <div className={classes}>
            <dialog className="dialog" open={open}>
                <div className="dialog-header">
                    <h4 className="dialog-header__title">{title}</h4>
                </div>
                <div className="dialog-body">{children}</div>
                <div className="dialog-footer">
                    <Button onClick={onConfirm} type="primary">
                        {confirmText || 'OK'}
                    </Button>
                    <Button onClick={onCancel}>{cancelText || 'CANCEL'}</Button>
                </div>
            </dialog>
        </div>
    )
}

export default Dialog
