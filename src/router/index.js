import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ]
  },
  {
    path: '/projects',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
      },
    ]
  },
  {
    path: '/team',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/team',
        name: 'Team',
        component: () => import('@/views/Team.vue'),
      },
    ]
  },
  {
    path: '/burst-game',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/burst-game',
        name: 'BurstGame',
        component: () => import('@/views/BurstGame.vue'),
      },
    ]
  },
  {
    path: '/blog',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue'),
      },
    ]
  },
  {
    path: '/example-1',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/example-1',
        name: 'Example1',
        component: () => import('@/views/Example1.vue'),
      },
    ]
  },
  {
    path: '/example-2',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/example-2',
        name: 'Example2',
        component: () => import('@/views/Example2.vue'),
      },
    ]
  },
  {
    path: '/example-3',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/example-3',
        name: 'Example3',
        component: () => import('@/views/Example3.vue'),
      },
    ]
  },
  {
    path: '/example-4',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/example-4',
        name: 'Example4',
        component: () => import('@/views/Example4.vue'),
      },
    ]
  },
  {
    path: '/example-5',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/example-5',
        name: 'Example5',
        component: () => import('@/views/Example5.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
