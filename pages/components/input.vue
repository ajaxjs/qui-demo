<template>
	<q-page>
		<Lanmu title="Input" content-class="q-gutter-y-sm">
			<view>
				<q-input v-model="text" label="counter" counter />
			</view>
			<view>
				<q-input v-model="text" label="outlined" outlined />
			</view>
			<view>
				<q-input v-model="text" label="filled & autogrow" filled autogrow />
			</view>
		</Lanmu>
		<Lanmu title="Debounce 防抖">
			<q-input v-model="text" label="输入" :debounce="800"></q-input>
		</Lanmu>

		<Lanmu title="Field 包裹器">
			<view class="q-gutter-y-sm">
				<view>
					<q-field outlined color="purple-12" label="Label" stack-label>
						<template v-slot:prepend>
							<q-icon name="event" />
						</template>
						<template v-slot:control>
							<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
						</template>
					</q-field>
				</view>

				<view>
					<q-field color="grey-3" label-color="orange" outlined label="Label" stack-label>
						<template v-slot:append>
							<q-icon name="event" color="orange" />
						</template>
						<template v-slot:control>
							<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
						</template>
					</q-field>
				</view>

				<view>
					<q-field :model-value="text" bottom-slots label="Label" stack-label counter>
						<template v-slot:prepend>
							<q-icon name="place" />
						</template>

						<template v-slot:control>
							<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
						</template>

						<template v-slot:append>
							<q-icon name="close" class="cursor-pointer" />
						</template>

						<template v-slot:hint>
							Field hint
						</template>
					</q-field>
				</view>

				<view>
					<q-field color="lime-11" bg-color="green" filled label="Label" stack-label>
						<template v-slot:prepend>
							<q-icon name="event" />
						</template>
						<template v-slot:control>
							<div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
						</template>
					</q-field>
				</view>
			</view>
		</Lanmu>
		<Lanmu title="API">
			<pre>
		  focus -> autofocus
		  disabled -> disable
		  
		  支持原生参数：
		  confirm-type
		  confirm-hold
		  adjust-position
		  auto-blur
		</pre>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				value: [],
			}
		},
		methods: {
			focus() {
				console.log('focus-----');
			}
		}
	}
</script>

<style>
</style>
