<template>
  <div class="example-table-page">
    <search-table
      ref="tableRef"
      :list-api="getDataList"
      :del-api="deleteData"
      :columns="columns"
      :add-form="AlertForm"
      :params="params"
      :config="tableConfig"
      placeholder="请输入关键词搜索"
      :show-add="true"
      :show-edit-action="true"
      :show-delete-action="true"
      :show-delete-select="true"
      add-action-text="新增"
      edit-action-text="编辑"
      delete-action-text="删除"
      action-title="操作"
      @save="handleSave"
      @reset="handleReset"
      @delete-row="handleDelete"
    >
      <!-- 搜索区域左侧自定义内容 -->
      <template #search_form_pre>
        <n-date-picker
          v-model:value="params.dateRange"
          type="daterange"
          clearable
          placeholder="选择日期范围"
          style="width: 240px"
        />
      </template>

      <!-- 搜索区域右侧自定义按钮 -->
      <template #search_handle_after>
        <n-button type="info" @click="handleExport">
          <template #icon>
            <n-icon><DownloadOutline /></n-icon>
          </template>
          导出
        </n-button>
      </template>

      <!-- 表格列自定义插槽示例 -->
      <template #table_status="{ row }">
        <n-tag :type="row.status === 1 ? 'success' : 'error'">
          {{ row.status === 1 ? '启用' : '禁用' }}
        </n-tag>
      </template>

      <template #table_avatar="{ row }">
        <n-avatar :src="row.avatar" round size="small" />
      </template>

      <!-- 操作列自定义内容 -->
      <template #table_action_center="{ row }">
        <n-button size="tiny" type="warning" @click="handleDetail(row)">
          详情
        </n-button>
      </template>
    </search-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { DownloadOutline } from '@vicons/ionicons5'
import SearchTable from '@/components/search-table.vue'
import AlertForm from '@/components/alert-form.vue'

// 定义表格列
const columns: DataTableColumns = [
  {
    type: 'selection',
    width: 50,
  },
  {
    title: '序号',
    key: 'index',
    width: 80,
    render: (_, index) => index + 1,
  },
  {
    title: '头像',
    key: 'avatar',
    width: 80,
  },
  {
    title: '姓名',
    key: 'name',
    width: 120,
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '邮箱',
    key: 'email',
    width: 200,
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '手机号',
    key: 'phone',
    width: 140,
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    key: 'remark',
    minWidth: 150,
    ellipsis: {
      tooltip: true,
    },
  },
]

// 搜索参数
const params = ref<Record<string, any>>({
  dateRange: null,
})

// 表格配置
const tableConfig = {
  searchProps: {
    showInput: true,
    showSearch: true,
    showReset: true,
    inputWidth: 300,
  },
  tableProps: {
    showTable: true,
    showPagination: true,
    showTotal: true,
  },
  dataTableProps: {
    striped: true,
    bordered: false,
    singleLine: false,
    size: 'medium',
    scrollX: 1200,
  },
  pageConfig: {
    page: 1,
    size: 10,
  },
  columnSettingProps: {
    enable: true,
    buttonText: '列设置',
    reorderable: true,
  },
}

const tableRef = ref()

// 模拟数据列表接口
const getDataList = async (params: any) => {
  // 模拟 API 请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const { page = 1, pageSize = 10, search = '' } = params

      // 模拟数据
      const mockData = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `用户${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `138${String(i).padStart(8, '0')}`,
        status: Math.random() > 0.5 ? 1 : 0,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
        createTime: new Date(Date.now() - Math.random() * 10000000000).toLocaleString(),
        remark: `这是用户${i + 1}的备注信息`,
      }))

      // 模拟搜索过滤
      const filteredData = search
        ? mockData.filter(item =>
            item.name.includes(search) ||
            item.email.includes(search) ||
            item.phone.includes(search)
          )
        : mockData

      // 模拟分页
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const paginatedData = filteredData.slice(start, end)

      resolve({
        data: paginatedData,
        total: filteredData.length,
      })
    }, 500)
  })
}

// 模拟删除接口
const deleteData = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('删除数据:', params.ids)
      resolve({ success: true })
    }, 300)
  })
}

// 保存回调
const handleSave = (row: any, saveData: any, res: any) => {
  console.log('保存成功:', { row, saveData, res })
  $message.success('保存成功')
}

// 重置回调
const handleReset = () => {
  console.log('重置搜索条件')
  params.value = {
    dateRange: null,
  }
}

// 删除回调
const handleDelete = (row: any) => {
  console.log('删除行:', row)
}

// 导出功能
const handleExport = () => {
  $message.info('导出功能开发中...')
}

// 详情功能
const handleDetail = (row: any) => {
  $message.info(`查看详情: ${row.name}`)
}

// 刷新表格
const refreshTable = () => {
  tableRef.value?.table?.initData()
}

defineExpose({
  refreshTable,
})
</script>

<style scoped lang="less">
.example-table-page {
  width: 100%;
  height: 100%;
  padding: 16px;
}
</style>
