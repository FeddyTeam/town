import axios from 'axios'

import { print } from 'graphql/language/printer'

import { LOGIN, RENEW, QINIU_TOKEN } from './auth'

const token = localStorage.getItem('token')
const agent = axios.create({
    url: '/graphql',
    method: 'POST',
    headers: {
        Authentication: `Bearer ${token}`,
    },
})

const query = async (graphqlTag: unknown, variables?: any) => {
    const response = await agent.request({ data: { query: print(graphqlTag), variables } })
    const { errors } = response.data
    if (errors) {
        const messages = errors.map((one: Error) => one.message)
        throw new Error(messages.join(', '))
    }

    return response.data
}

export interface ILoginForm {
    email: string
    password: string
}

export const auth = {
    renew: async () => query(RENEW),
    login: async (form: ILoginForm) => query(LOGIN, { form }),
    qiniuToken: async () => query(QINIU_TOKEN),
}

export default {
    auth,
    config: {
        setToken(authedToken: string): void {
            agent.defaults.headers.Authentication = `Bearer ${authedToken}`
        },
    },
}
