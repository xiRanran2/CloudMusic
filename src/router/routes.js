import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/JSX',
  },
  {
    path: '/IndexView/:id',
    component: IndexView,
  },
  {
    path: '/HomeView',
    component: HomeView,
  },
  {
    path: '/MineView',
    component: MineView,
  },
  {
    path: '/Foo',
    // 懒加载组件文件
    component: () => import('@/views/Foo.vue'),
  },
  // {
  //   path: '/Reset',
  //   // 懒加载组件文件
  //   component: () => import('@/views/Reset0.vue'),
  // },
  {
    path: '/JSX',
    // 懒加载组件文件
    component: () => import('@/views/JSX'),
  },
];