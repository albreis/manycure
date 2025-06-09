import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: sessionStorage.getItem('token') || null,
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
            sessionStorage.setItem('token', token)
        },
        logout() {
            this.user = null
            this.token = null
            sessionStorage.removeItem('token')
            router.push({ name: 'login' })
        },
    },
})