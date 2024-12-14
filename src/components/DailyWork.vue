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
    <a-layout-content :style="{ marginTop: '64px', padding: '24px', background: '#fff' }">
      <a-row :gutter="[8, 8]">
        <!-- 第一行：firstButtonArr 按钮 -->
        <a-col v-for="(button, index) in firstButtonArr" :key="index" :span="4">
          <a-button type="primary" size="large" block @click="selectFirstButton(button)">
            {{ button }}
          </a-button>
        </a-col>
      </a-row>

      <!-- 第二行：secondButtonArr 按钮 -->
      <a-row :gutter="[8, 8]" v-if="selectedFirstButton">
        <a-col v-for="(button, index) in secondButtonArr" :key="index" :span="4">
          <a-button type="default" size="large" block @click="selectSecondButton(button)">
            {{ button }}
          </a-button>
        </a-col>
      </a-row>

      <!-- 下半部分：表格展示 -->
      <a-table
        :columns="columns"
        :data-source="tableData"
        :pagination="false"
        style="margin-top: 24px;"
        v-if="tableData.length > 0"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'fileName'">
            {{ record.fileName }}
          </template>
          <template v-else-if="column.dataIndex === 'fileLocation'">
            {{ record.fileLocation }}
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue';
import { LeftOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'DailyWork',
  components: {
    LeftOutlined
  },
  setup() {
    const dailyWorkConfig = {
      "日常工作内容": {
        "日维护": ["巡查内容", "MDOS系统", "天元系统填写", "表格填写"],
        "周维护": ["巡查内容", "库房巡查", "天元系统填写", "MDOS系统", "表格填写", "计算机杀毒升级", "地面数据备份"],
        "月维护": ["巡查内容", "表格填写", "天元系统", "酸雨校准"],
        "季度维护": ["天元系统"],
        "年维护": ["巡查内容", "天元系统", "表格填写"],
        "固定日巡查": []
      }
    };

    const firstButtonArr = Object.keys(dailyWorkConfig['日常工作内容']);
    const selectedFirstButton = ref(null);
    const selectedSecondButton = ref(null);

    const secondButtonArr = computed(() => {
      if (selectedFirstButton.value) {
        return dailyWorkConfig['日常工作内容'][selectedFirstButton.value];
      }
      return [];
    });

    const columns = [
      {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      },
      {
        title: '文件位置',
        dataIndex: 'fileLocation',
        key: 'fileLocation'
      }
    ];

    // 使用 watch 监听 selectedSecondButton 变化，动态生成 tableData
    const tableData = ref([]);

    watch(selectedSecondButton, (newVal) => {
      if (newVal) {
        // 示例数据，实际使用时应根据 newVal 动态获取真实数据
        tableData.value = [
          { fileName: newVal, fileLocation: '待定位置' },
          // 可以添加更多示例数据或从 API 获取
        ];
      } else {
        tableData.value = [];
      }
    });

    const selectFirstButton = (button) => {
      selectedFirstButton.value = button;
      selectedSecondButton.value = null; // 清除选中的二级按钮
    };

    const selectSecondButton = (button) => {
      selectedSecondButton.value = button;
    };

    const goBack = () => {
      window.history.back();
    };

    return {
      firstButtonArr,
      selectedFirstButton,
      secondButtonArr,
      columns,
      tableData,
      selectFirstButton,
      selectSecondButton,
      goBack
    };
  }
});
</script>

<style scoped>
/* 调整按钮样式 */
.ant-btn-primary,
.ant-btn-default {
  font-size: 16px;
  height: 56px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.ant-row {
  white-space: nowrap;
  overflow-x: auto;
}
</style>