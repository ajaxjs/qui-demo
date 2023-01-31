
const Platform = {
	install(opts) {
		const { $q } = opts
		const platform = Object.assign(
			uni.getWindowInfo(), 
			uni.getSystemInfoSync(),
		)
		$q.platform = platform
	}
}

export default Platform
