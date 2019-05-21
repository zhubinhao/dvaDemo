const isAuthority = true;
export const RouteConfig=[{
    path: '/',
    component: () => import('../routes/IndexPage'),
    model: [import('../models/IndexPage')],
    routes: [{
      path: '/home',
      component: () => import('../routes/Admin'),
      model: [import('../models/about')],
      isAuthority,
      redirect: true,
    }
    ]
  }]