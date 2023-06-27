QAvatar组件创建一个可缩放的、可着色的元素，其形状内可以包含文本、图标或图像。 默认情况下，它是圆形的，但也可以是正方形的，也可以应用边框半径为正方形提供圆角。

它通常与插槽中的其他组件一起使用。

| 参数       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| icon       | String | 图标                      |
| size       | String | 大小，如：16px 2rem xs md |
| font-size  | String |                           |
| color      | String |                           |
| text-color | String |                           |
| square     | String |                           |
| rounded    | String |                           |



# 用法

```vue
<template>
    <!-- Basic -->
    <div class="q-pa-md q-gutter-sm">
        <q-avatar color="red" text-color="white" icon="directions" />
        <q-avatar color="primary" text-color="white">J</q-avatar>
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
        <q-avatar size="24px" color="orange">J</q-avatar>
        <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
    </div>
    <!-- Standard sizes -->
    <div class="q-pa-md q-gutter-sm">
        <q-avatar
            v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
            :key="size"
            :size="size"
            color="primary"
            text-color="white" icon="directions"
        />
    </div>
    <!-- Square -->
    <div class="q-pa-md q-gutter-sm">
        <q-avatar square color="red" text-color="white" icon="directions" />
        <q-avatar square color="primary" text-color="white">J</q-avatar>
        <q-avatar square size="100px" font-size="82px" color="teal" text-color="white" icon="directions" />
        <q-avatar square size="24px" color="orange">J</q-avatar>
        <q-avatar square>
            <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
    </div>
    <!-- Rounded -->
    <div class="q-pa-md q-gutter-sm">
        <q-avatar rounded color="red" text-color="white" icon="directions" />
        <q-avatar rounded color="primary" text-color="white">J</q-avatar>
        <q-avatar rounded size="100px" font-size="82px" color="teal" text-color="white" icon="directions" />
        <q-avatar rounded size="24px" color="orange">J</q-avatar>
        <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
    </div>
    <!-- With other components -->
    <div class="q-pa-md q-gutter-y-md">
        <div class="q-gutter-sm">
            <q-chip>
                <q-avatar color="red" text-color="white">50</q-avatar>
                Emails
            </q-chip>
            <q-chip>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                John
            </q-chip>
        </div>
        <div class="q-gutter-x-sm">
            <q-btn round>
                <q-avatar size="28px">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
            </q-btn>
            <q-btn round>
                <q-avatar size="32px">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
            </q-btn>
            <q-btn round>
                <q-avatar size="40px">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
            </q-btn>
        </div>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar rounded size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                    <q-badge floating color="teal">new</q-badge>
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mary</q-item-label>
                <q-item-label caption>2 new messages</q-item-label>
            </q-item-section>
            <q-item-section side>
                3 min ago
            </q-item-section>
        </q-item>
        <q-banner rounded class="bg-primary text-white">
            <template v-slot:avatar>
                <q-avatar icon="signal_wifi_off" color="white" text-color="primary" />
            </template>
            You have lost connection to the internet. This app is offline.
            <template v-slot:action>
                <q-btn flat color="white" label="Turn ON Wifi" />
            </template>
        </q-banner>
    </div>
</template>
```

