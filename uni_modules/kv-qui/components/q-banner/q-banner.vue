<template>
	<view :class="[classes,className]" role="alert">
		<view v-if="$slots.avatar" class="q-banner__avatar col-auto row items-center self-start">
			<slot name="avatar"></slot>
		</view>
		<view class="q-banner__content col text-body2">
			<slot></slot>
		</view>
		<view v-if="$slots.action" :class="actionClass.value">
			<slot name="action"></slot>
		</view>
	</view>
</template>

<script>
	import {computed, getCurrentInstance } from 'vue'
	import { createComponent } from '../../utils/private/create.js'
	import useDark, { useDarkProps } from '../../composables/private/use-dark.js'
	import {useAttrProps} from '../../composables/private/use-attr.js'

	export default createComponent({
		name: 'QBanner',

		props: {
			...useDarkProps,
			...useAttrProps,

			inlineActions: Boolean,
			dense: Boolean,
			rounded: Boolean
		},

		setup(props, {slots}) {
			const {proxy: {$q}} = getCurrentInstance()
			const isDark = useDark(props, $q)
			
			const actions = slots.action
			const classes = computed(() =>
				'q-banner row items-center' +
				(props.dense === true ? ' q-banner--dense' : '') +
				(isDark.value === true ? ' q-banner--dark q-dark' : '') +
				(props.rounded === true ? ' rounded-borders' : '')
				//+(props.inlineActions === false && actions !== void 0 ? ' q-banner--top-padding' : '')
			)

			const actionClass = computed(() =>
				'q-banner__actions row items-center justify-end' +
				` col-${ props.inlineActions === true ? 'auto' : 'all' }`
			)

			return {
				classes,
				actionClass,
			}
		}
	})
</script>

<style lang="sass">
.q-banner
  box-sizing: border-box
  min-height: 54px
  padding: 8px 16px
  background: #fff

  &--top-padding
    padding-top: 14px

  &__avatar
    min-width: 1px !important
    > .q-avatar
      font-size: 46px
    > .q-icon
      font-size: 40px

  &__avatar:not(:empty) + &__content
    padding-left: 16px

  &__actions
    &.col-auto
      padding-left: 16px
    &.col-all
      .q-btn-item
        margin: 4px 0 0 4px

  &--dense
    min-height: 32px
    padding: 8px
    &.q-banner--top-padding
      padding-top: 12px
    .q-banner__avatar
      > .q-avatar, > .q-icon
        font-size: 28px
    .q-banner__avatar:not(:empty) + .q-banner__content
      padding-left: 8px
    .q-banner__actions
      &.col-auto
        padding-left: 8px

</style>
