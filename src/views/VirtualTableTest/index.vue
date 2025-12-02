<template>
  <div class="virtual-table-test">
    <h1>虚拟列表测试</h1>
    <v-table
      :data-source="tableData"
      :columns="columns"
      :row-height="55"
      :container-height="600"
      row-key="id"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue'
import VTable from '@/components/vTable/index.vue'
import { TABLE_COLUMNS } from './config'
import { generateMockData } from './mockData'

defineComponent({
  name: 'VirtualTableTest',
})

const tableData = ref(generateMockData(100000))
const columns = TABLE_COLUMNS
</script>

<style scoped>
.virtual-table-test {
  padding: 20px;
  min-height: 100vh;
}

.virtual-table-test h1 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
</style>
