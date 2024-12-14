import { createRouter, createWebHistory } from 'vue-router';
import DailyWork from '@/components/DailyWork.vue';
import WarehouseManagement from '@/components/WarehouseManagement.vue';
import ArchiveManagement from '@/components/ArchiveManagement.vue';
import InstrumentFault from '@/components/InstrumentFault.vue';
import ToolManagement from '@/components/ToolManagement.vue';

const routes = [
  { path: '/dailyWork', name: 'dailyWork', component: DailyWork },
  { path: '/warehouse', name: 'warehouse', component: WarehouseManagement },
  { path: '/archive', name: 'archive', component: ArchiveManagement },
  { path: '/instrumentFault', name: 'instrumentFault', component: InstrumentFault },
  { path: '/tools', name: 'tools', component: ToolManagement },
  { path: '/', redirect: '/dailyWork' } // 添加默认重定向
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;