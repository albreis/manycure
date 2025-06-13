import { useAdminAuthStore } from '@/stores/adminAuthStore';

const isAuthenticated = (to, from, next) => {
    const adminAuthStore = useAdminAuthStore();
    if (!adminAuthStore.isAuthenticated) {
        next({ name: 'admin/login' });
    } else {
        next();
    }
}

const routes = [
    {
        path: '/admin',
        name: 'admin/dashboard',
       component: () => import('../views/Admin/Dashboard.vue'),
       beforeEnter: isAuthenticated
    },
    {
        path: '/admin/login',
        name: 'admin/login',
        component: () => import('../views/Admin/Login.vue')
    },
    {
        path: '/admin/calendar',
        name: 'admin/calendar',
        component: () => import('../views/Admin/Calendar.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/admin/bookings',
        name: 'admin/bookings',
        component: () => import('../views/Admin/Bookings.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/admin/bookings/:id',
        name: 'admin/booking',
        component: () => import('../views/Admin/BookingView.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/admin/bookings/:id/form',
        name: 'admin/booking-form',
        component: () => import('../views/Admin/BookingForm.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/admin/settings',
        name: 'admin/settings',
        component: () => import('../views/Admin/Settings.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/admin/account',
        name: 'admin/account',
        component: () => import('../views/Admin/Account.vue'),
        beforeEnter: isAuthenticated
    },
];

export default routes;