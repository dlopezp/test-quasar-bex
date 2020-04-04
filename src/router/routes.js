
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  { path: '/options', component: () => import('pages/OptionsPage.vue') },
  { path: '/popup', component: () => import('pages/PopupPage.vue') },
  { path: '/devtools', component: () => import('pages/DevToolsPage.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
