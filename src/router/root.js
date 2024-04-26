export default [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/views/Layout/index.vue'),
        
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
    },
]