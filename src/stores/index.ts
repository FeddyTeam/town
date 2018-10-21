import { authStore } from './authStore'
import { notificationStore } from './notificationStore'

export default {
    authStore,
    notificationStore,
}

export { authStore, AuthStore, IUserRoles, IAuthInfo } from './authStore'
export { notificationStore, NotificationStore, IToast } from './notificationStore'