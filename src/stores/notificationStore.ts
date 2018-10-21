import { observable, computed, action } from 'mobx'

export interface IToast {
    content: string
    duratation: number
    type: string
    id: string
}

export class NotificationStore {
    @observable private store = new Map<string, IToast>()
    @action.bound public pushMessage(content: string, type: string, duratation: number = 3000): void {
        const id = Math.random().toString()
        this.store.set(id, {
            id,
            content,
            type,
            duratation,
        })

        setTimeout(() => {
            this.store.delete(id)
        }, duratation)
    }

    @action.bound public error(content: string, duratation?: number) {
        this.pushMessage(content, 'error', duratation)
    }

    @action.bound public success(content: string, duratation?: number) {
        this.pushMessage(content, 'success', duratation)
    }

    @action.bound public message(content: string, duratation?: number) {
        this.pushMessage(content, 'message', duratation)
    }

    @action.bound public warning(content: string, duratation?: number) {
        this.pushMessage(content, 'warning', duratation)
    }

    @computed public get messageList(): IToast[] {
        return Array.from(this.store.values())
    }
}

export const notificationStore = new NotificationStore()
