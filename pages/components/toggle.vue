<template>
	<q-page>
		<Lanmu title="基础应用">
			<view class="lm-title">Basic</view>
			<div class="q-pa-md">
				<q-toggle v-model="value1" />
				<q-toggle v-model="value1" color="green" />
				<q-toggle v-model="value1" color="yellow" />
				<q-toggle v-model="value1" color="red" />
			</div>
			<view class="lm-title">带标签</view>
			<div class="q-pa-md q-gutter-sm">
				<div>
					<q-toggle v-model="value2" label="On Right" />
					<q-toggle v-model="value2" color="green" label="On Right" />
					<q-toggle v-model="value2" color="yellow" label="On Right" />
					<q-toggle v-model="value2" color="red" label="On Right" />
				</div>
			
				<div>
					<q-toggle v-model="value3" label="On Left" left-label />
					<q-toggle v-model="value3" color="green" label="On Left" left-label />
					<q-toggle v-model="value3" color="yellow" label="On Left" left-label />
					<q-toggle v-model="value3" color="red" label="On Left" left-label />
				</div>
			</div>
			<view class="lm-title">保持颜色</view>
			<div class="q-pa-md">
				<q-toggle v-model="value" color="primary" keep-color />
				<q-toggle v-model="value" color="green" keep-color />
				<q-toggle v-model="value" color="orange" keep-color />
				<q-toggle v-model="value" color="red" keep-color readonly />
			</div>
		</Lanmu>
		<Lanmu title="高级应用">
			
			<view class="lm-title">自定图标</view>
			<div class="q-pa-md q-gutter-sm">
				<div>
					<q-toggle v-model="first" icon="alarm" />
					<q-toggle v-model="second" color="pink" icon="mail" label="状态图标相同" />
				</div>
				<div>
					<q-toggle v-model="third" checked-icon="check" color="green" unchecked-icon="clear" />
					<q-toggle v-model="fourth" checked-icon="check" color="red" label="状态图标不同"
						unchecked-icon="clear" />
				</div>
			</div>
			<view class="lm-title">自定义模型值</view>
			<view class="q-pa-md q-gutter-y-sm column">
				<view class="text-blue-grey">可以使用自定义值代替默认的true/false值。</view>
				<q-toggle :label="`Model is ${blueModel} (default behaviour)`" v-model="blueModel" />
				<q-toggle :label="pinkModel" color="pink" false-value="Disagreed" true-value="Agreed" v-model="pinkModel" />
				<q-toggle :false-value="13" :label="`Model is number ${greenModel}`" :true-value="42" color="green" v-model="greenModel" />
				<q-toggle :false-value="true" :label="`Model is ${redModel} (flipped boolean)`" :true-value="false" color="red" v-model="redModel" />
			</view>
			<view class="lm-title">不确定状态</view>
			<div class="q-pa-md">
				<div class="q-gutter-sm">
					<q-toggle indeterminate-value="maybe" v-model="theModel2" label="Did you eat lunch today?" />
				</div>
				<div class="q-px-sm">
					The model data: <strong>{{ JSON.stringify(theModel2) }}</strong>
				</div>
				<div class="q-gutter-sm">
					<q-toggle toggle-indeterminate v-model="theModel" label="Did you eat lunch today?" />
				</div>
				<div class="q-px-sm row no-wrap items-center">
					<div class="col">
						The model data: <strong>{{ JSON.stringify(theModel) }}</strong>
					</div>
					<q-btn color="primary" label="Reset" @click="reset1" class="q-ml-md" />
				</div>
				<view class="text-blue-grey">在下面的示例中，只要您单击第一个QToggle，它就开始在true/false之间切换。另一方面，第二个QToggle在toggle-indeterminate的帮助下在三种状态（不确定/正确/错误）之间切换。您可以选择设置属性indeterminate-value，否则不确定值将被视为null。</view>
			</div>
			<view class="lm-title">切换顺序</view>
			<div class="q-pa-md">
				<q-btn class="q-mb-md" color="primary" label="Reset models" @click="resetModels" />
				<div class="q-gutter-sm">
					<q-toggle v-model="teal" label="'tf' order" color="teal" />
					<q-toggle toggle-order="ft" v-model="orange" label="'ft' order" color="orange" />
					<q-toggle toggle-indeterminate v-model="red" label="'tf' order + toggle-indeterminate" color="red" />
					<q-toggle toggle-indeterminate toggle-order="ft" v-model="cyan" label="'ft' order + toggle-indeterminate" color="cyan" />
				</div>
				<view class="text-blue-grey">
					<view>默认情况下，QToggle在切换时遵循以下链：不确定 -> 选中的 -> 未选中的。但是，您可以通过toggle-order属性更改此行为。此属性确定状态的顺序，可以是tf（默认值）或ft（t表示true/checked的状态，而f表示false/unchecked的状态）。</view>
					<view>切换顺序是:</view>
					<view>如果toggle-indeterminate为true，则：不确定->第一状态->第二状态->不确定（并重复）</view>
					<view>否则（无切换不确定）：不确定->第一状态->第二状态->第一状态->第二状态->。。。</view>
				</view>
			</div>
			<view class="lm-title">数组模型</view>
			<div class="q-pa-md q-gutter-sm">
				<q-toggle color="blue" label="Blue" v-model="selection" val="blue" />
				<q-toggle color="yellow" label="Yellow" v-model="selection" val="yellow" />
				<q-toggle color="green" label="Green" v-model="selection" val="green" />
				<q-toggle color="red" label="Red" v-model="selection" val="red" />
				<div>
					Model: {{selection}}
				</div>
				<view class="text-blue-grey">
					如果您有多个切换开关可以选择，可以使用数组作为所有切换开关的模型，并在每个切换开关上指定val属性。 如果勾选了切换开关，则将其val插入数组，反之亦然。
				</view>
			</div>
			<view class="lm-title">暗模式</view>
			<div class="q-pa-md bg-grey-10 text-white">
				<q-toggle color="blue" dark v-model="blue" />
				<q-toggle color="green" dark v-model="green" />
				<q-toggle color="yellow" dark v-model="yellow" />
				<q-toggle color="red" dark v-model="red" />
			</div>
			<view class="lm-title">禁用</view>
			<div class="q-pa-md">
				<q-toggle v-model="value" color="primary" disable />
				<q-toggle v-model="value" color="green" disable />
				<q-toggle v-model="value" color="yellow" disable />
				<q-toggle v-model="value" color="red" disable />
			</div>
			<view class="lm-title">结合 List 组件使用</view>
			<view class="text-blue-grey bg-blue-grey-2 q-pa-sm">在结合q-list组件(或包含在其他组件内使用)时，需要在item外面套一层label</view>
			<q-list>
				<label>
					<q-item tag="label" clickable ripple>
						<q-item-section>
							<q-item-label>Battery too low</q-item-label>
						</q-item-section>
						<q-item-section avatar>
							<q-toggle color="blue" v-model="notifications" val="battery" />
						</q-item-section>
					</q-item>
				</label>
			
				<label>
					<q-item tag="label" clickable ripple>
						<q-item-section>
							<q-item-label>Friend request</q-item-label>
							<q-item-label caption>Allow notification</q-item-label>
						</q-item-section>
						<q-item-section avatar>
							<q-toggle color="green" v-model="notifications" val="friend" />
						</q-item-section>
					</q-item>
				</label>
			
				<label>
					<q-item tag="label" clickable ripple>
						<q-item-section>
							<q-item-label>Picture uploaded</q-item-label>
							<q-item-label caption>Allow notification when uploading images</q-item-label>
						</q-item-section>
						<q-item-section avatar>
							<q-toggle color="red" v-model="notifications" val="picture" />
						</q-item-section>
					</q-item>
				</label>
			</q-list>
			<view class="lm-title">大小</view>
			<div class="q-pa-md">
				<div class="q-gutter-sm">
					<q-toggle size="xs" v-model="shape" val="xs" label="Size 'xs'" />
					<q-toggle size="sm" v-model="shape" val="sm" label="Size 'sm'" />
					<q-toggle size="md" v-model="shape" val="md" label="Size 'md'" />
					<q-toggle size="lg" v-model="shape" val="lg" label="Size 'lg'" />
					<q-toggle size="xl" v-model="shape" val="xl" label="Size 'xl'" />
			
					<!-- custom size -->
					<q-toggle size="100px" v-model="shape" val="100px" label="Size '100px'" />
				</div>
			
				<div class="q-px-sm">
					Your selection is: <strong>{{ shape }}</strong>
				</div>
			</div>
		</Lanmu>
		
	</q-page>
</template>

<script setup>
	import { reactive, ref } from "vue";
	const value = ref(true)
	const value1 = ref(true)
	const value2 = ref(true)
	const value3 = ref(true)
	const value4 = ref(true)
	const first = ref(true)
	const second = ref(true)
	const third = ref(false)
	const fourth = ref(true)
	
	const blueModel= ref(true)
	const pinkModel= ref('Agreed')
	const greenModel= ref(42)
	const redModel= ref(true)
	
	const theModel = ref(null)
	const theModel2 = ref('maybe')
	function reset1() {
		theModel.value = null
		theModel2.value = 'maybe'
	}
	
	const teal = ref(null)
	const orange = ref(null)
	const red = ref(true)
	const cyan = ref(false)
	function resetModels() {
		teal.value = null
		orange.value = null
		red.value = true
		cyan.value = false
	}
	
	const selection= ref([ 'yellow', 'red' ])
	
	const blue = ref(false)
	const green = ref(true)
	const yellow = ref(true)
	
	const shape = ref(['line'])
	
	const notifications = ref(['friend'])
	function listCheck(evt){
		console.log(evt);
	}
</script>

<style>
</style>
