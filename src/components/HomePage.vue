<template>
    <a-layout :style="{ minHeight: '100vh', background: '#f0f2f5' }">
      <!-- 上半部分：背景图片 -->
      <a-layout-header :style="{ height: '50vh', background: '#fff', padding: 0, position: 'relative' }">
        <img :src="backgroundImage" class="background-image"/>
      </a-layout-header>
  
      <!-- 下半部分：按钮 -->
      <a-layout-content :style="{ height: '50vh', background: '#fff', padding: '24px' }">
        <a-row :gutter="[16, 16]" :style="{ height: '100%' }">
          <!-- 第一行 -->
          <a-col :span="8">
            <a-button type="primary" size="large" block @click="navigateTo('dailyWork')">日常工作内容</a-button>
          </a-col>
          <a-col :span="8">
            <a-button type="primary" size="large" block @click="navigateTo('warehouse')">库房管理</a-button>
          </a-col>
          <a-col :span="8">
            <a-button type="primary" size="large" block @click="navigateTo('archive')">档案管理</a-button>
          </a-col>
  
          <!-- 第二行 -->
          <a-col :span="8">
            <a-button type="primary" size="large" block @click="navigateTo('instrumentFault')">仪器故障</a-button>
          </a-col>
          <a-col :span="8">
            <a-button type="primary" size="large" block @click="navigateTo('tools')">工具</a-button>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        backgroundImage: require('@/assets/logo.png') // 使用相对路径加载背景图片
      };
    },
    methods: {
      navigateTo(view) {
        this.$router.push({ name: view });
      }
    }
  };
  </script>
  
  <style scoped>
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* 调整按钮样式 */
  .ant-btn-primary {
    font-size: 18px;
    height: 64px;
    border-radius: 8px;
  }
  </style>