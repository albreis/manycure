import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';
import userRoutes from './user';
const routes = [
    ...userRoutes,
    ...adminRoutes    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;