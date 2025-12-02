import type { TableColumnType } from 'ant-design-vue'

// 表格配置
export const TABLE_CONFIG = {
  rowHeight: 55,
  containerHeight: 600,
  rowKey: 'id',
  overscan: 10,
}

// 城市列表
export const CITIES = ['北京', '上海', '深圳', '杭州', '南京', '武汉', '成都', '西安']

// 状态列表
export const STATUSES = ['Active', 'Inactive', 'Pending', 'Suspended']

// 表格列配置
export const TABLE_COLUMNS: TableColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    ellipsis: true,
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    ellipsis: true,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
    ellipsis: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 200,
    ellipsis: true,
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
    width: 120,
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    ellipsis: true,
  },
]
