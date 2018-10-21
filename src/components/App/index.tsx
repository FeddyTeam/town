import * as React from 'react'
import { AppNav, Notification, Hello, Login } from '..'
import { Route } from 'react-router'
import { inject, observer } from 'mobx-react'
import { AuthStore } from '../../stores'

import './app.css'

export interface IAppProps {
    authStore?: AuthStore
}

@inject('authStore')
@observer
class App extends React.Component<IAppProps> {
    public render() {
        const { isAuthed } = this.props.authStore

        return (
            <div className="app">
                <Notification />
                <AppNav />
                <div className="app-content">
                    {!isAuthed && <Route component={Login} path="/" />}
                    {isAuthed && <Route component={Hello} path="/" exact />}
                    {isAuthed && <Route component={Login} path="/login" />}
                </div>
            </div>
        )
    }
}

export default App
