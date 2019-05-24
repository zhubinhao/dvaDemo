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
      path: '/evaluation',
      name:'测评目录',
      component: () => import('../routes/Evaluation'),
      model: [import('../models/evaluation')],
      isAuthority,
      redirect: true,
    },
    {
      path: '/download',
      name:'资料下载',
      component: () => import('../routes/Download'),
      model: [import('../models/download')],
      isAuthority,
      redirect: true,
    },
    {
      path: '/about',
      name:'关于我们',
      component: () => import('../routes/About'),
      model: [import('../models/about')],
      isAuthority,
      redirect: true,
    }
    ]
  }]