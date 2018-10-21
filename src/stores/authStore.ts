import { observable, computed, action, autorun } from 'mobx'
import agent, { ILoginForm } from '../graphql'

export interface IUserRoles {
    admin?: boolean
    editor?: boolean
}

export interface IAuthInfo {
    roles: IUserRoles
}

export class AuthStore {
    @observable
    public loading: boolean = false

    @observable
    public token: string = ''

    @observable
    private info: IAuthInfo = { roles: {} }

    @computed
    public get isAuthed(): boolean {
        return this.token.length > 0
    }

    @computed
    public get isAdmin(): boolean {
        return this.info.roles.admin
    }
    @computed
    public get isEditor(): boolean {
        return this.info.roles.editor
    }

    @action
    public async login(values: ILoginForm) {
        this.startProgress()
        try {
            const {
                data: { token },
            } = await agent.auth.login(values)

            this.setToken(token)
        } catch (err) {
            throw err.message
        } finally {
            this.stopProgress()
        }
    }

    @action
    public async renew() {
        if (!this.token) {
            return
        }

        this.startProgress()
        try {
            const {
                data: { token },
            } = await agent.auth.renew()

            this.setToken(token)
        } catch (err) {
            throw err.message
        } finally {
            this.stopProgress()
        }
    }

    @action
    public async mkQiniuToken() {
        try {
            const {
                data: { qiniuToken },
            } = await agent.auth.qiniuToken()

            return qiniuToken
        } catch (err) {
            throw err.message
        }
    }

    @action.bound
    public logout() {
        this.info = { roles: { admin: false, editor: false } }
        this.removeToken()
    }

    @action
    public removeToken() {
        this.token = ''
        localStorage.removeItem('token')
    }

    @action.bound
    public loadToken() {
        const token = localStorage.getItem('token')
        if (/^[\w-]+\.[\w-]+\.[\w-]+$/.test(token)) {
            this.setToken(token)
        }
    }

    @action.bound
    public startProgress(): void {
        this.loading = true
    }

    @action.bound
    public stopProgress(): void {
        this.loading = false
    }

    @action.bound
    private setToken(token: string) {
        this.token = token
        localStorage.setItem('token', token)

        try {
            const base64URL = token.match(/\.([\w-]+)\./)[1]
            const base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/')
            const payload = JSON.parse(atob(base64))
            if (payload.exp * 1000 > new Date().getTime()) {
                this.info = payload
            } else {
                throw new Error('Token is outdated')
            }
        } catch (err) {
            this.removeToken()
        }
    }
}

export const authStore = new AuthStore()

autorun(() => {
    const { token } = authStore

    agent.config.setToken(token)
})
