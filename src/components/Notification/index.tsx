import * as React from 'react'
import { ReactNode } from 'react'
import classnames from 'classnames'
import { inject, observer } from 'mobx-react'
import { NotificationStore, IToast } from '../../stores'

import './notification.css'

export interface INotificationProps {
    notificationStore?: NotificationStore
}

export interface IToastProps {
    type?: string
    children?: ReactNode
}

const Toast = ({ children, type = 'message' }: IToastProps) => {
    const classes = classnames(
        'notification-toast',
        `notification-toast--${type}`
    )

    return <div className={classes}>{children}</div>
}

@inject('notificationStore')
@observer
class Notification extends React.Component<INotificationProps> {
    public render() {
        const { messageList } = this.props.notificationStore

        return (
            <div className="notification">
                {messageList.map(({ id, content, type }: IToast) => (
                    <Toast key={id} type={type}>{content}</Toast>
                ))}
            </div>
        )
    }
}

export default Notification
