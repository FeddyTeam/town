import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'
import * as stores from './stores'

import { BrowserRouter, Route } from 'react-router-dom'

import './styles/index.css'

import { App } from './components'

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
