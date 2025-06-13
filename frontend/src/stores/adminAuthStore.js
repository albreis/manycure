import { defineStore } from 'pinia'
import router from '@/router'

export const useAdminAuthStore = defineStore('admin_auth', {
    state: () => ({
        user: null,
        token: sessionStorage.getItem('admin_token') || null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
            sessionStorage.setItem('admin_token', token)
        },
        logout() {
            this.user = null
            this.token = null
            sessionStorage.removeItem('admin_token')
            router.push({ name: 'admin/login' })
        },
    },
})