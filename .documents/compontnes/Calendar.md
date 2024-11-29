```vue
<template>
	<q-calendar v-model="currDate" show-lunar today-btn></q-calendar>
</template>
<script>
    export default{
        data(){
            const { dayjs } = this.$q.config.external
            return {
                currDate: dayjs().format('YYYY-MM-DD')
            }
        }
    }
</script>
```



### 属性（Props）

| 属性名称         | 类型         | 描述                                                         | 默认值         | 必填 |
| ---------------- | ------------ | ------------------------------------------------------------ | -------------- | ---- |
| modelValue       | String       | 绑定的日期值                                                 | 无             | 是   |
| defaultYearMonth | String/Array | 默认显示的年月，可以是 `String`（如 `'2024-5'`）或 `Array`（如 `[2024, 5]`） | 无             | 否   |
| showLunar        | Boolean      | 是否显示农历                                                 | `false`        | 否   |
| dateInfo         | Array        | 附加信息                                                     | 无             | 否   |
| todayClass       | String       | 今日的样式类                                                 | 无             | 否   |
| todayBtn         | Boolean      | 是否显示返回今日的按钮                                       | `false`        | 否   |
| activeClass      | String       | 选中日期的样式类                                             | 无             | 否   |
| format           | String       | 日期格式，默认为 `'YYYY-MM-DD'`                              | `'YYYY-MM-DD'` | 否   |
| minimal          | Boolean      | 是否不显示头部                                               | `false`        | 否   |
| defaultView      | String       | 默认视图，可以是 `'Calendar'`、`'Months'` 或 `'Years'`       | `'Calendar'`   | 否   |

### 事件（Events）

| 事件名称          | 描述             | 回调参数           |
| ----------------- | ---------------- | ------------------ |
| update:modelValue | 当日期改变时触发 | 新的日期值         |
| update:year       | 当年份改变时触发 | 新的年份和年月数组 |
| update:month      | 当月份改变时触发 | 新的月份和年月数组 |

### 方法（Methods）

| 方法名称 | 描述               | 参数                              |
| -------- | ------------------ | --------------------------------- |
| setToday | 设置当前日期为今天 | 无                                |
| setYear  | 设置年份           | 年份（`y`）和年月数组（`dateYm`） |
| setMonth | 设置月份           | 月份（`m`）和年月数组（`dateYm`） |

