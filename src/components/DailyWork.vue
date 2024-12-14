<!-- 示例：DailyWork.vue -->
<template>
    <div>
      <a-button type="link" @click="goBack">返回上一级</a-button>
      <h1>日常工作内容</h1>
      <!-- 页面内容 -->
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>