<template>
  <a-layout>
    <a-layout-header :style="{ background: '#001529', padding: 0 }">
      <!-- 航拍图背景 -->
      <img :src="require('./../assets/logo.png')" class="header-background"/>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">日常工作内容</a-menu-item>
        <a-menu-item key="2">库房管理</a-menu-item>
        <a-menu-item key="3">档案管理</a-menu-item>
        <a-menu-item key="4">仪器故障</a-menu-item>
        <a-sub-menu key="5">
          <!-- 使用 v-slot 代替 slot -->
          <template #title>工具</template>
          <a-menu-item key="5-1">搜索</a-menu-item>
          <a-menu-item key="5-2">编辑</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px' }">
      <!-- 内容区 -->
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>