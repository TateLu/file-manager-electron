<template>
  <a-layout :style="{ minHeight: '100vh', background: '#f0f2f5' }">
    <!-- 上半部分：背景图片 -->
    <a-layout-header :style="{ height: '50vh', background: '#fff', padding: 0, position: 'relative' }">
      <img :src="backgroundImage" class="background-image"/>
    </a-layout-header>

    <!-- 下半部分：按钮 -->
    <a-layout-content :style="{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }">
      <div :style="{ width: '80%', textAlign: 'center' }">
        <a-button type="primary" @click="navigateTo('dailyWork')">日常工作内容</a-button>
        <a-button type="primary" @click="navigateTo('warehouse')">库房管理</a-button>
        <a-button type="primary" @click="navigateTo('archive')">档案管理</a-button>
        <a-button type="primary" @click="navigateTo('instrumentFault')">仪器故障</a-button>
        <a-button type="primary" @click="navigateTo('tools')">工具</a-button>
      </div>
    </a-layout-content>
  </a-layout>

  <!-- 动态路由视图 -->
  <router-view v-if="currentView"></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentView: null,
      backgroundImage: require('@/assets/logo.png') // 使用相对路径加载背景图片
    };
  },
  methods: {
    navigateTo(view) {
      this.currentView = view;
      this.$router.push({ name: view });
      console.log(`Navigated to ${view}`); // 添加调试信息
    }
  },
  mounted() {
    console.log('App component mounted.'); // 添加调试信息
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
</style>