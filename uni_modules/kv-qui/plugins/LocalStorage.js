import { getStorage } from '../utils/private/web-storage.js'

const storage = getStorage()

const Plugin = {
	
	install(opts) {
		const {$q} = opts
		$q.localStorage = storage
	}
}

Object.assign(Plugin, storage)

export default Plugin
