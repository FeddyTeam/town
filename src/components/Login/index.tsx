import * as React from 'react'
import { SyntheticEvent } from 'react'
import { inject, observer } from 'mobx-react'

import { Form, Button } from '..'
const { Input, FormItem } = Form

import { AuthStore, NotificationStore } from '../../stores'

import loginForm from '../../forms/login'

interface ILoginProps {
    authStore: AuthStore
    notificationStore: NotificationStore
}

@inject('authStore')
@inject('notificationStore')
@observer
class Login extends React.Component<ILoginProps> {
    public render() {
        const { loading } = this.props.authStore

        return (
            <div>
                <Form onSubmit={this.login.bind(this)}>
                    <FormItem label="Email">
                        <Input {...loginForm.$('email').bind()} />
                    </FormItem>
                    <FormItem label="Password">
                        <Input {...loginForm.$('password').bind()} />
                    </FormItem>
                    <FormItem>
                        <Button loading={loading} type="primary">
                            Login
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }

    private async login(e: SyntheticEvent) {
        e.preventDefault()
        const values = loginForm.values()

        try {
            await this.props.authStore.login(values)

            this.props.notificationStore.success(`Login Success~`)
        } catch (err) {
            this.props.notificationStore.error(`Somthing Wrong? - ${err}`)
        }
    }
}

export default Login
