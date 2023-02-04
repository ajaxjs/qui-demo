# q-btn 属性

| 参数            | 类型             | 说明                                                         |
| --------------- | ---------------- | ------------------------------------------------------------ |
| loading         | Boolean          | 加载状态                                                     |
| percentage      | Number           | 加载进度效果                                                 |
| dark-percentage | Boolean          | 加载进度是否暗模式                                           |
| label           | String \| Number | 按扭文字                                                     |
| icon            | String           | 按扭图标，根据引入的图标文件而定，可以传图片网址`img:https://cdn.quasar.dev/logo-v2/svg/logo.svg` |
| icon-right      | String           | 按扭右边图片                                                 |
| no-caps         | Boolean          | 不大写                                                       |
| no-wrap         | Boolean          | 不换行                                                       |
| align           | String           | 对齐，默认为`center`, 可选：`left`、`right`、`center`、`around`、`between`、`evenly` |
| stack           | Boolean          | 是图标与文字是否竖排                                         |
| stretch         | Boolean          | 当在flexbox父级上使用时，按钮将拉伸到父级的高度              |
| type            | String           | 为form-type的值，可选：submit, reset                         |
| to              | Object\|String   | 路径跳转，如：`/home/dashboard`，或{to:'page',target:'tab'}  |
| href            | String           | 站内跳转，需设置qui.config.js中的`webViewPath`               |
| mp              | String           | 跳转到小程序，语法：小程序://路径，如：`wx1d5f4s85://pages/index/test`将会跳到对应小程序的对应页面 |
| disable         | Boolean          | 是否disable状态                                              |
| **样式：**      |                  |                                                              |
| size            | String           | 按扭大小，如：`16px`,`2rem`,`xs`,`md`                        |
| outline         | Boolean          | 镂空效果                                                     |
| flat            | Boolean          | 无背景、阴影效果                                             |
| unelevated      | Boolean          | 无阴影                                                       |
| push            | Boolean          | 3D效果                                                       |
| square          | Boolean          | 方形                                                         |
| fab             | Boolean          | 大圆角                                                       |
| fab-mini        | Boolean          | 小圆角                                                       |
| padding         | String           | 填充                                                         |
| color           | String           | 颜色，如：red,#f60                                           |
| text-color      | String           | 文字颜色                                                     |
| dense           | Boolean          | 紧凑样式                                                     |
| ripple          | Boolean\|String  | 波纹效果，为字符串时，可传入波纹颜色，如：red,yellow         |

# 示例代码

拷贝到项目中测试

# 按扭路由

target 参数，对**to**属性有效

| 参数   | 说明                                    |
| ------ | --------------------------------------- |
| _blank | `默认`,新窗口打开，uni.navigateTo()实现 |
| _self  | 当前窗口，uni.navigateTo()实现          |
| _tab   | 跳到tab选项卡，uni.switchTab()实现      |
| _top   | 重新打开，uni.reLaunch()实现            |



```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- 简单跟帖 -->
    <q-btn color="primary" label="Primary" to="/pages/index" />
    <!-- 属性参数，data-参数名 -->
    <q-btn color="secondary" label="Secondary" to="/pages/index" data-target="_tab" />
    <!-- 对象参数 -->
    <q-btn color="amber" label="Amber" to="$uni.openUrl({to:'/pages/index',target:'_self'})" />
    <!-- 属性参数 -->
    <q-btn color="brown-5" label="Brown 5" />
  </div>
</template>
```



## 标准用法

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <!--100%宽度样式-->
    <q-btn color="black" label="Black" class="full-width" />
  </div>
</template>
```

## 自定义颜色

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
    <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
    <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
    <q-btn outline style="color: goldenrod;" label="Goldenrod" />
    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" />
  </div>
</template>
```

## 带图标

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
    <br>
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>
</template>
```

## 形状

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
	<!--圆形-->
    <q-btn round color="primary" icon="shopping_cart" />
    <q-btn round color="secondary" icon="navigation" />
    <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
	<!--方形-->
    <q-btn square color="brown-5" icon="directions" />
    <q-btn square color="deep-orange" icon="edit_location" />
    <q-btn square color="purple" glossy icon="local_grocery_store" />
    <q-btn square color="black" icon="my_location" />
  </div>
</template>

```

## 自定义内容

```vue
<template>
  <div class="q-pa-md q-gutter-md">
    <q-btn color="teal">
      <q-icon left size="3em" name="map" />
      <div>Label</div>
    </q-btn>

    <q-btn round>
      <q-avatar size="42px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
      </q-avatar>
    </q-btn>

    <q-btn color="indigo" no-caps>
      Multiline<br>Button
    </q-btn>

    <q-btn color="deep-orange" push>
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">
          Custom<br>Content
        </div>
      </div>
    </q-btn>
  </div>
</template>
```

## 样式设计

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <!--flat 无背景样式-->
    <q-btn flat color="primary" label="Flat" />
    <q-btn flat rounded color="primary" label="Flat Rounded" />
    <q-btn flat round color="primary" icon="card_giftcard" />
    <br>
    <!--outline 镂空样式-->
    <q-btn outline color="primary" label="Outline" />
    <q-btn outline rounded color="primary" label="Outline Rounded" />
    <q-btn outline round color="primary" icon="card_giftcard" />
    <br>
    <!--push 3D样式-->
    <q-btn push color="primary" label="Push" />
    <q-btn push color="primary" round icon="card_giftcard" />
    <q-btn push color="white" text-color="primary" label="Push" />
    <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
    <br>
    <!--unelevated 无阴影样式-->
    <q-btn unelevated color="primary" label="Unelevated" />
    <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
    <q-btn unelevated round color="primary" icon="card_giftcard" />
    <br>
    <!--取消大写-->
    <q-btn no-caps color="primary" label="No caps" />
    <br>
    <!--glossy样式-->
    <q-btn class="glossy" color="teal" label="Glossy" />
    <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
    <q-btn class="glossy" round color="primary" icon="card_giftcard" />
    <q-btn class="glossy" round color="secondary" icon="local_florist" />
    <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
  </div>
</template>
```

## 大小、对齐

```vue
<template>
  <!--按扭大小-->
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="size in sizes" :key="`btn_size_sq_${size}`"
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
  </div>

  <!--按扭对齐-->
  <div class="q-pa-md q-gutter-sm">
    <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
    <q-btn align="right" class="btn-fixed-width" color="secondary" label="Align to right" />
    <q-btn align="between" class="btn-fixed-width" color="accent" label="Align between" icon="flight_takeoff" />
    <q-btn align="around" class="btn-fixed-width" color="brown-5" label="Align around" icon="lightbulb_outline" />
  </div>

  <!--按扭填充-->
  <q-btn padding="none" color="primary" icon="eco" />
  <q-btn padding="xs" color="primary" icon="eco" />
  <q-btn padding="lg" color="primary" icon="eco" />
  <q-btn padding="10px 5px" color="primary" icon="eco" />
</template>
```

## 加载效果

```vue
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      :loading="progress[0].loading"
      :percentage="progress[0].percentage"
      color="primary"
      @click="startComputing(0)"
      style="width: 150px"
    >
      Compute PI
      <template v-slot:loading>
        <q-spinner-gears class="on-left" />
        Computing...
      </template>
    </q-btn>

    <q-btn
      :loading="progress[1].loading"
      :percentage="progress[1].percentage"
      round
      color="secondary"
      @click="startComputing(1)"
      icon="cloud_upload"
    />

    <q-btn
      :loading="progress[2].loading"
      :percentage="progress[2].percentage"
      dark-percentage
      unelevated
      color="orange"
      text-color="grey-9"
      @click="startComputing(2)"
      icon="cloud_upload"
      style="width: 100px"
    />
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  setup () {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 }
    ])

    const intervals = [ null, null, null ]

    function startComputing (id) {
      progress.value[ id ].loading = true
      progress.value[ id ].percentage = 0

      intervals[ id ] = setInterval(() => {
        progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
        if (progress.value[ id ].percentage >= 100) {
          clearInterval(intervals[ id ])
          progress.value[ id ].loading = false
        }
      }, 700)
    }

    onBeforeUnmount(() => {
      intervals.forEach(val => {
        clearInterval(val)
      })
    })

    return {
      progress,
      startComputing
    }
  }
}
</script>
```

