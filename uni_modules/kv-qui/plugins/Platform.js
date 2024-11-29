
const Platform = {
	install(opts) {
		const { $q } = opts
		const platform = Object.assign(
			uni.getWindowInfo(), 
			uni.getDeviceInfo(),
			uni.getAppBaseInfo()
		)
		$q.platform = platform
	}
}
export default Platform
