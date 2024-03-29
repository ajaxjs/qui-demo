<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	@import './uni_modules/kv-qui/css/index.sass';
	/* #endif */
	
	/* Demo全局样式 */
	.lm-title{
		font-size: 1.2em;
		font-weight: bold;
		color: var(--q-primary);
		padding: 15px 5px 5px 5px;
		border-bottom: var(--UI-FG-2) solid 1px;
		margin-bottom: 5px;
	}
	.q-table{
		width: 100%;
		td{
			border-bottom: var(--UI-FG-3) solid 1px;
		}
	}
</style>
