import { createRouter,createMemoryHistory } from 'vue-router'
import Home from '../views/HomePage.vue' // 假设你有一个Home组件
import Profile from '../views/FormExample.vue' 
import Messages from '../views/HomePage.vue' 
import Settings from '../views/HomePage.vue' 
import Help from '../views/HomePage.vue' 
import Logout from '../views/HomePage.vue' 
// 导入其他页面组件...

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   // 在这里添加更多路由...
// ]
const routes = [
  { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/profile', component: Profile },
    { path: '/messages', component: Messages },
    { path: '/settings', component: Settings },
    { path: '/help', component: Help },
    { path: '/logout', component: Logout },
    // 其他路由...
  ];
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router