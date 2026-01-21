<template>
  <div class="search-table">
    <n-search-table-page
      ref="searchTablePageRef"
      v-bind="config"
      :search-props="{
        showDeleteSelect: showDeleteSelect,
        showAdd: showAdd,
        searchInputPlaceholder: placeholder,
        addText: addActionText,
        ...config.searchProps,
      }"
      :data-table-props="{
        columns: currentColumns,
        rowKey: (row) => row.id,
        'onUpdate:checkedRowKeys': handleCheck,
        ...config.dataTableProps,
      }"
      :page-config="{
        ...config.pageConfig,
      }"
      :search-input-props="{
        onKeyup: onKeyupEnter,
        ...config.searchInputProps,
      }"
      :data-api="listApi"
      :params="params"
      @reset="reset"
      @deleteSelect="deleteSelect"
      @add="addRow()"
    >
      <template v-for="(item, key) in $slots" :key="key" #[key]="slotProps">
        <component :is="item" v-bind="slotProps"></component>
      </template>
      <template #table_action="scope">
        <n-space justify="center">
          <slot name="table_action" :row="scope.row" :addRow="addRow">
            <slot
              name="table_action_left"
              :row="scope.row"
              :addRow="addRow"
            ></slot>
            <n-button
              v-if="showEditAction && filterAction('edit', scope.row, scope)"
              size="tiny"
              type="primary"
              @click="addRow(scope.row)"
              >{{
                typeof editActionText === "function"
                  ? editActionText("edit", scope.row, scope)
                  : editActionText
              }}</n-button
            >
            <slot
              name="table_action_center"
              :row="scope.row"
              :addRow="addRow"
            ></slot>
            <n-button
              v-if="
                showDeleteAction && filterAction('delete', scope.row, scope)
              "
              size="tiny"
              type="error"
              @click="deleteRow(scope.row)"
              >{{
                typeof deleteActionText === "function"
                  ? deleteActionText("delete", scope.row, scope)
                  : deleteActionText
              }}</n-button
            >
            <slot
              name="table_action_after"
              :row="scope.row"
              :addRow="addRow"
            ></slot>
          </slot>
        </n-space>
      </template>
    </n-search-table-page>
  </div>
</template>
<script setup lang="ts">
import type {
  DataTableColumn,
  DataTableColumns,
  DataTableRowKey,
  SearchTablePageProps,
} from "naive-ui";
const props = withDefaults(
  defineProps<{
    addForm?: any;
    listApi?: any;
    delApi?: any;
    params?: Record<string, any>;
    columns?: DataTableColumns;
    config?: SearchTablePageProps;
    action?: Partial<DataTableColumns[number]>;
    editActionText?:
      | string
      | ((
          type: "edit" | "delete",
          row: any,
          scope: Record<string, any>,
        ) => boolean | void)
      | any;
    deleteActionText?:
      | string
      | ((
          type: "edit" | "delete",
          row: any,
          scope: Record<string, any>,
        ) => boolean | void)
      | any;
    addActionText?: string;
    showEditAction?: boolean;
    showDeleteAction?: boolean;
    showDeleteSelect?: boolean;
    showAdd?: boolean;
    placeholder?: string;
    actionTitle?: string;
    align?: "left" | "center" | "right";
    alertProps?: Record<string, any> | ((row: any) => Record<string, any>);
    showActionBtns?: boolean;
    filterAction?: (
      type: "edit" | "delete",
      row: any,
      scope: Record<string, any>,
    ) => boolean | void;
    addRowHook?: (
      row?: Record<string, any>,
      extData?: Record<string, any>,
    ) => Promise<any> | void;
  }>(),
  {
    params: () => ({}),
    config: () => ({}),
    columns: () => [],
    action: () => ({}) as any,
    showEditAction: true,
    showDeleteAction: true,
    showDeleteSelect: true,
    showAdd: true,
    editActionText: "编辑",
    deleteActionText: "删除",
    addActionText: "新增",
    actionTitle: "操作",
    placeholder: "请输入搜索内容",
    align: "center",
    alertProps: () => ({}),
    showActionBtns: true,
    filterAction: () => true,
  },
);
const emit = defineEmits([
  "update:params",
  "update:columns",
  "save",
  "deleteRow",
  "reset",
]);
const { params, columns } = useVModels(props, emit);
const currentColumns = computed(() => {
  return columns.value
    .concat(
      props.showActionBtns
        ? [
            {
              title: props.actionTitle,
              key: "action",
              width: 120,
              ...props.action,
            } as DataTableColumn,
          ]
        : [],
    )
    .map(
      (e) =>
        ({
          ...e,
          align: e.align || props.align,
        }) as DataTableColumn,
    ) as DataTableColumns;
});
const searchTablePageRef = ref<any>(null);
const reset = () => {
  params.value = {};
  searchTablePageRef.value.initData();
  emit("reset");
};

const checked = ref<DataTableRowKey[]>([]);
const selectedData = ref<any>([]);
const handleCheck = (row: DataTableRowKey[], rows: any) => {
  checked.value = row;
  selectedData.value = rows;
};

const deleteSelect = async () => {
  if (checked.value.length === 0) {
    $message.error("请勾选要删除的数据");
    return;
  }
  await $message.confirm({
    title: "确认删除选中数据吗？",
    content: "删除后将无法恢复",
  });
  await props.delApi?.({
    ids: checked.value,
  });
  $message.success("删除成功");
  searchTablePageRef.value.initData();
  emit("deleteRow", checked.value);
};
const deleteRow = async (row: any) => {
  await $message.confirm();
  await props.delApi?.({
    ids: [row.id],
  });
  $message.success("删除成功");
  searchTablePageRef.value.initData();
  emit("deleteRow", row);
};
const addRow = async (row?: Record<string, any>, extData = {}) => {
  if (props.addRowHook) {
    return await props.addRowHook(row, extData);
  }
  $alert.dialog(
    l_merge(
      {
        title: row
          ? typeof props.editActionText === "function"
            ? props.editActionText("edit", row, {})
            : props.editActionText
          : props.addActionText,
        content: props.addForm,
        minWidth: "500px",
        props: {
          row,
          async onSave(row, saveData, res) {
            await searchTablePageRef.value.initData();
            emit("save", row, saveData, res);
          },
          ...(typeof props.alertProps === "function"
            ? await props.alertProps?.(row)
            : props.alertProps),
          ...l_omit(extData, "$config"),
        },
      },
      l_get(extData, "$config", {}),
    ),
  );
};
const onKeyupEnter = (ev: KeyboardEvent) => {
  if (ev.key === "Enter") {
    searchTablePageRef.value.initData();
  }
};
defineExpose({
  table: searchTablePageRef,
  checked,
  selectedData,
});
</script>
<style scoped lang="less">
.search-table {
  :deep(.n-search-table-page) {
    // background: transparent;
  }
}
</style>
