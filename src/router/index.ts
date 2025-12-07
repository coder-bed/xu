// src/router/index.js
import { createRouter, createWebHistory, type RouteRecordRaw, type Router } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
];

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
