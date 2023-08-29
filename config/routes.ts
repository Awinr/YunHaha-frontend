export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/bi',
    name: 'BI智能图表分析',
    icon: 'crown',
    routes: [
      { path: '/bi/chart', name: '数据分析', icon: 'smile', component: './Chart' },
      {
        path: '/bi/asyncChart',
        name: '数据分析异步生成',
        icon: 'smile',
        component: './Chart/asyncChart',
      },
      { path: '/bi/history-chart', name: '历史图表', icon: 'smile', component: './Chart/history' },
    ],
  },
  {
    path: '/qa',
    name: '智能问答（MQ）',
    icon: 'crown',
    routes: [
      { path: '/qa/assistant', name: '问答助手', icon: 'smile', component: './Assistant' },
      { path: '/qa/history', name: '我的问答', icon: 'smile', component: './Assistant/history' },
    ],
  },
  // { path: '/search', name: 'Search', icon: 'smile', component: './Search' },
  {
    path: '/admin',
    name: '系统管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user-list' },
      { icon: 'table', path: '/admin/user-list', component: './UserList', name: '用户管理' },
      { icon: 'table', path: '/admin/dict', component: './Dict', name: '数据字典' },
    ],
  },
  {
    path: '/proComponents',
    name: 'ProComponents文档',
    icon: 'crown',
    routes: [
      {
        path: 'proComponents/list-search',
        name: 'list-search',
        icon: 'smile',
        component: './ProListDemo/search',
      },
      {
        path: 'proComponents/list-vertical',
        name: 'list-vertical',
        icon: 'smile',
        component: './ProListDemo/vertical',
      },
      {
        path: 'proComponents/list-page',
        name: 'list-page',
        icon: 'smile',
        component: './ProListDemo/page',
      },
      {
        path: 'proComponents/list-card',
        name: 'list-card',
        icon: 'smile',
        component: './ProListDemo/card',
      },
    ],
  },
  { path: '/', redirect: '/qa/assistant' },
  { path: '*', layout: false, component: './404' },
  {
    path: '/user/center',
    name: '个人中心',
    icon: 'smile',
    component: './UserCenter',
    // https://umijs.org/docs/max/layout-menu#hideinxxx
    hideInMenu: true,
  },
];
