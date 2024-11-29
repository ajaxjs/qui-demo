<template>
	<view :class="`q-message q-message-${ op }`">
		<view class="q-message-label" v-if="$slots.label || label">
			<slot name="label" v-if="$slots.label"></slot>
			<template v-else-if="label">
				<text v-if="labelHtml" v-html="label"></text>
				<text v-else>{{label}}</text>
			</template>
		</view>
		<view :class="containerClass">
			<slot name="$slots.avatar" v-if="$slots.avatar"></slot>
			<q-img v-else-if="avatar" :class="'q-message-avatar q-message-avatar--'+op" :src="avatar" />
			<view :class="sizeClass">
				<!-- name -->
				<view :class="'q-message-name q-message-name--'+op">
					<slot v-if="$slots.name" name="name"></slot>
					<template v-else-if="name">
						<text v-if="nameHtml" v-html="name"></text>
						<template v-else>{{name}}</template>
					</template>
				</view>
				<!--  -->
				<view v-if="$slots.default" :class="[messageClass,'last-msg']">
					<view :class="textClass">
						<slot></slot>
					</view>
				</view>
				<template v-else-if="text">
					<view :class="[messageClass, i+1==text.length?'last-msg':'']" v-for="(msg, i) in text" :key="i">
						<view :class="textClass">
							<view v-if="textHtml" v-html="msg"></view>
							<template v-else>{{msg}}</template>
						</view>
						<!-- <view v-if="stamp && i+1 == text.length" class="q-message-stamp" :class="'text-'+(textColor||'white')">
							<view v-if="stampHtml" v-html="stamp"></view>
							<template v-else>{{stamp}}</template>
						</view> -->
					</view>
				</template>
				<!-- 时间戳 -->
				<view v-if="stamp" class="q-message-stamp" :class="'text-'+(textColor||'grey')">
					<view v-if="stampHtml" v-html="stamp"></view>
					<template v-else>{{stamp}}</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { h, computed } from 'vue'
	export default {
		name: 'QChatMessage',
		
		  props: {
		    sent: Boolean,
		    label: String,
		    bgColor: String,
		    textColor: String,
		    name: String,
		    avatar: String,
		    text: Array,
		    stamp: String,
		    size: String,
		    labelHtml: Boolean,
		    nameHtml: Boolean,
		    textHtml: Boolean,
		    stampHtml: Boolean
		  },
		
		  setup (props, { slots }) {
		    const op = computed(() => (props.sent === true ? 'sent' : 'received'))
		
		    const textClass = computed(() =>
		      `q-message-text-content q-message-text-content--${ op.value }`
		      + (props.textColor !== void 0 ? ` text-${ props.textColor }` : '')
		    )
		
		    const messageClass = computed(() =>
		      `q-message-text q-message-text--${ op.value }`
		      + (props.bgColor !== void 0 ? ` text-${ props.bgColor }` : '')
		    )
		
		    const containerClass = computed(() =>
		      'q-message-container row items-end no-wrap'
		      + (props.sent === true ? ' reverse' : '')
		    )
		
		    const sizeClass = computed(() => (props.size !== void 0 ? `col-${ props.size }` : ''))
			
			
			return {
				op,
				textClass,
				messageClass,
				containerClass,
				sizeClass,
			}
		}
	}
</script>

<style>
</style>