<template>
  <n-search-table-page
    ref="searchTablePageRef"
    :data-api="dataApi"
    :data-table-props="dataTableProps"
    :search-props="searchProps"
    :params="searchParams"
    @add="handleAdd"
  >
    <template #search_form_middle>
      <n-space>
        <n-input
          v-model:value="searchParams.name"
          placeholder="请输入名称"
          clearable
          style="width: 200px"
        />
        <n-select
          v-model:value="searchParams.status"
          placeholder="请选择状态"
          :options="statusOptions"
          clearable
          style="width: 150px"
        />
      </n-space>
    </template>

    <template #table_action="{ row }">
      <n-space>
        <n-button text type="primary" @click="handleEdit(row)">
          编辑
        </n-button>
        <n-button text type="error" @click="handleDelete(row)">
          删除
        </n-button>
      </n-space>
    </template>
  </n-search-table-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { DataTableColumns } from 'naive-ui'

const searchTablePageRef = ref()

const searchParams = reactive({
  name: '',
  status: null
})

const searchProps = {
  showInput: false,
  showDeleteSelect: false
}

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 }
]

const dataTableProps = {
  columns: [
    {
      type: 'selection'
    },
    {
      title: '序号',
      key: 'index',
      width: 80,
      render: (_: any, index: number) => index + 1
    },
    {
      title: '名称',
      key: 'name',
      ellipsis: { tooltip: true }
    },
    {
      title: '状态',
      key: 'status',
      width: 100,
      render: (row: any) => {
        return row.status === 1 ? '启用' : '禁用'
      }
    },
    {
      title: '创建时间',
      key: 'createTime',
      width: 180
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right'
    }
  ] as DataTableColumns
}

const dataApi = async (params: any) => {
  // TODO: 替换为实际接口
  console.log('请求参数:', params)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: '测试数据1', status: 1, createTime: '2026-01-21 10:00:00' },
          { id: 2, name: '测试数据2', status: 0, createTime: '2026-01-21 11:00:00' },
          { id: 3, name: '测试数据3', status: 1, createTime: '2026-01-21 12:00:00' }
        ],
        total: 3
      })
    }, 500)
  })
}

const handleAdd = () => {
  console.log('新增')
  // TODO: 实现新增逻辑
}

const handleEdit = (row: any) => {
  console.log('编辑', row)
  // TODO: 实现编辑逻辑
}

const handleDelete = (row: any) => {
  console.log('删除', row)
  // TODO: 实现删除逻辑
}
</script>

<style scoped lang="less">
</style>
