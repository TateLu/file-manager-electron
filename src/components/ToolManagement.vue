<template>
  <div>
    <a-button type="link" @click="goBack">返回上一级</a-button>
    <h1>工具管理</h1>
    <!-- 页面内容 -->
  </div>
</template>

<script>
export default {
  name: 'ToolManagement', // 修改组件名称为多词形式
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>