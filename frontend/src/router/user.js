import { useAuthStore } from '@/stores/authStore';

const isAuthenticated = (to, from, next) => {
    const authStore = useAuthStore();
    if (!authStore.isAuthenticated) {
        next({ name: 'login' });
    } else {
        next();
    }
}

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
        component: () => import('../views/Dashboard.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/bookings',
        name: 'bookings',
        component: () => import('../views/Bookings.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/bookings/:id',
        name: 'booking',
        component: () => import('../views/BookingView.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/bookings/:id/form',
        name: 'booking-form',
        component: () => import('../views/BookingForm.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Settings.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/Account.vue'),
        beforeEnter: isAuthenticated
    },
];

export default routes;