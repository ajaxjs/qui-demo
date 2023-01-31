<template>
	<q-page>
		<Lanmu title="用户登录">
			<q-form className="myform q-gutter-md">
				<view>
					<q-input v-model="prms.username" label="用户名" outlined />
				</view>
				<view>
					<q-input v-model="prms.password" label="密码" outlined password />
				</view>
				<view>
					<q-checkbox v-model="prms.remember" :val="1" label="记住密码" />
				</view>
				<view class="q-gutter-x-sm">
					<q-btn type="submit" label="立即提交" color="primary" />
					<q-btn type="reset" label="重置表单" color="green" />
				</view>
			</q-form>
			<view class="q-pa-md bg-orange-2 q-mt-md">{{JSON.stringify(prms)}}</view>
		</Lanmu>
		
		<Lanmu title="用户资料">
			<q-form className="myform q-gutter-md">
				<view><q-input v-model="info.username" label="用户昵称" outlined /></view>
				<view><q-input v-model="info.phone" type="tel" label="电话号码" outlined /></view>
				<view>
					<q-field outlined label="生日" :stack-label="info.born?true:false">
						<template #control>
							<q-datetime v-model="info.born"  />
						</template>
					</q-field>
				</view>
				<view class="">
					<q-field outlined label="用户性别" stack-label>
						<template #control>
							<q-radio v-model="info.sex" :options="['男','女']" checked-icon="task_alt" unchecked-icon="highlight_off" />
						</template>
					</q-field>
				</view>
				<view>
					<q-field outlined label="状态" stack-label>
						<template #control>
							<q-radio v-model="info.status" :options="statusOpt" />
						</template>
					</q-field>
				</view>
				<view>
					<q-field outlined label="兴趣爱好" stack-label autogrow>
						<template #control>
							<q-checkbox v-model="info.hobby" :options="hobby"></q-checkbox>
						</template>
					</q-field>
				</view>
				<view>
					<q-field outlined label="标签" stack-label autogrow>
						<template #control>
							<q-checkbox v-model="info.tags" :options="['颜值担当','实力不凡','一夫当关','万夫莫开']"></q-checkbox>
						</template>
					</q-field>
				</view>
			</q-form>
			<view class="q-pa-md bg-orange-2 q-mt-md">{{JSON.stringify(info)}}</view>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data() {
			return {
				statusOpt: [
					{label: '在线',value:'在线',icon:'emoji_emotions'},
					{label: '离线',value:'离线',icon:'sentiment_neutral'},
					{label: '勿扰',value:'勿扰',icon:'block'},
				],
				hobby: [
					{label:'听音乐', value:'听音乐', uncheckedIcon:'headset'},
					{label:'打篮球', value:'打篮球', uncheckedIcon:'sports_basketball'},
					{label:'看电影', value:'看电影', uncheckedIcon:'theaters'},
					{label:'玩手机', value:'刷手机', uncheckedIcon:'phone'},
					{label:'玩手机', value:'玩游戏', uncheckedIcon:'sports_esports'}
				],
				prms: {},
				info: {
					hobby:['看电影']
				}
			}
		},
		methods: {
			submit(evt) {
				console.log('submit', evt);
			}
		}
	}
</script>

<style>
</style>
