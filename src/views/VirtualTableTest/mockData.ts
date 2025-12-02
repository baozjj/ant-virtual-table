import type { DataItem } from './types'
import { CITIES, STATUSES } from './config'

/**
 * 生成模拟数据
 * @param count 数据条数
 * @returns 生成的数据数组
 */
export const generateMockData = (count: number): DataItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `用户${String(index + 1).padStart(5, '0')}`,
    age: Math.floor(Math.random() * 50) + 18,
    email: `user${index + 1}@example.com`,
    city: CITIES[Math.floor(Math.random() * CITIES.length)]!,
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)]!,
  }))
}
