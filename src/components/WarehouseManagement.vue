<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <!-- 头部：返回按钮 -->
    <a-layout-header :style="{ background: '#fff', padding: '0 24px', position: 'fixed', width: '100%', zIndex: 1 }">
      <a-button type="link" @click="goBack" :style="{ float: 'left', fontSize: '18px', color: '#1890ff' }">
        <template #icon><LeftOutlined /></template>
        返回上一级
      </a-button>
    </a-layout-header>

    <!-- 主体内容 -->
    <a-layout-content :style="{ marginTop: '64px', padding: '24px', background: '#fff', minHeight: 'calc(100vh - 64px)' }">
      <h1>日常工作内容</h1>
      <!-- 页面内容 -->
      <p>这里是日常工作内容的具体信息。</p>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { LeftOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'WarehouseManagement',
  components: {
    LeftOutlined
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
});
</script>

<style scoped>
/* 调整返回按钮样式 */
.ant-btn-link {
  padding: 0;
}
</style>