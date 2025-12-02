<template>
  <div v-bind="containerProps" class="virtual-scroll-container">
    <div v-bind="wrapperProps">
      <a-table
        sticky
        :columns="columns"
        :data-source="tableData"
        :pagination="false"
        :row-key="rowKey"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData || {}"></slot>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from 'vue'
import { useVirtualList } from '@vueuse/core'
import type { TableColumnType } from 'ant-design-vue'

defineComponent({
  name: 'VirtualTable',
})

// 定义 Props
interface Props {
  dataSource: unknown[]
  columns: TableColumnType[]
  rowHeight?: number // 固定行高，必填项，越准越好
  containerHeight?: number // 容器可视高度
  rowKey?: string | ((record: unknown) => string)
}
// 表格列配置的 ellipsis 必须设置为 true，如：
//   const columns =  [
//     { title: '类型', key: 'type', width: 400, ellipsis: true },
//   ]

const props = withDefaults(defineProps<Props>(), {
  rowHeight: 55,
  containerHeight: 500,
  rowKey: 'id',
})

const { list, containerProps, wrapperProps } = useVirtualList(
  computed(() => props.dataSource),
  {
    itemHeight: props.rowHeight,
    overscan: 10,
  },
)

const tableData = computed(() => {
  return list.value.map((item: { data: unknown }) => item.data)
})
</script>

<style scoped>
.virtual-scroll-container {
  height: v-bind(containerHeight + 'px');
  overflow-y: auto;
  pointer-events: auto;
  touch-action: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
