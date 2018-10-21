import * as validatorjs from 'validatorjs'
import { default as MobxReactForm } from 'mobx-react-form'

const fields = [
    {
        name: 'email',
        label: 'EMAIL',
        type: 'email',
        rules: 'required|email|string|between:5,32',
    },
    {
        name: 'password',
        label: 'PASSWORD',
        type: 'password',
        rules: 'required|string|between:6,32',
    },
]

const plugins = { dvr: validatorjs }

export default new MobxReactForm({ fields }, { plugins })
