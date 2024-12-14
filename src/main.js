import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router/index.js'; // 引入路由器

const app = createApp(App);

// 使用路由器和 Ant Design Vue
app.use(router);
app.use(Antd);

// 挂载应用到 #app
app.mount('#app');

console.log('Application initialized.');