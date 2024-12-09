<template>
    <a-layout>
      <!-- 上部区域：带背景图片 asset/logo.png -->
      <a-layout-header style="background: #fff url('./asset/logo.png') no-repeat center center / cover;">
       aaa
      </a-layout-header>
  
      <!-- 下部区域：包含6个按钮 -->
      <a-layout-content style="padding: 24px; text-align: center;">
        <div style="margin-bottom: 16px;">
          <a-button v-for="(item, index) in buttons" :key="index" type="primary" @click="navigateTo(item.path)">
            <a-icon :type="item.icon" /> {{ item.text }}
          </a-button>
        </div>
      </a-layout-content>
    </a-layout>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const navigateTo = (path) => {
        // 使用Vue Router的方法进行页面跳转
        router.push(path);
      };
  
      return {
        navigateTo,
      };
    },
    data() {
      return {
        // 按钮数据，包括对应的路由路径
        buttons: [
          { text: 'Home', icon: 'home', path: '/home' },
          { text: 'Profile', icon: 'user', path: '/profile' },
          { text: 'Messages', icon: 'message', path: '/messages' },
          { text: 'Settings', icon: 'setting', path: '/settings' },
          { text: 'Help', icon: 'question-circle', path: '/help' },
          { text: 'Logout', icon: 'logout', path: '/logout' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* 确保按钮不要太小 */
  .ant-btn {
    min-width: 100px;
    margin: 0 8px;
  }
  </style>