const isAuthority = true;
export const RouteConfig=[{
    path: '/',
    component: () => import('../routes/IndexPage'),
    model: [import('../models/IndexPage')],
    routes: [{
      path: '/admin',
      name:'首页',
      component: () => import('../routes/Admin'),
      model: [import('../models/admin')],
      isAuthority,
      redirect: true,
    },
    {
      path: '/admin1',
      name:'首页1',
      component: () => import('../routes/Admin'),
      model: [import('../models/admin')],
      isAuthority,
      redirect: true,
    },
    {
      path: '/admin2',
      name:'首页2',
      component: () => import('../routes/Admin'),
      model: [import('../models/admin')],
      isAuthority,
      redirect: true,
    },
    {
      path: '/admin3',
      name:'首页3',
      component: () => import('../routes/Admin'),
      model: [import('../models/admin')],
      isAuthority,
      redirect: true,
    }
    ]
  }]