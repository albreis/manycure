import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
       component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/bookings',
        name: 'bookings',
        component: () => import('../views/Bookings.vue')
    },
    {
        path: '/bookings/:id',
        name: 'booking',
        component: () => import('../views/BookingView.vue')
    },
    {
        path: '/bookings/:id/form',
        name: 'booking-form',
        component: () => import('../views/BookingForm.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Settings.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/Account.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;