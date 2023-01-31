import defineReactivePlugin from '../utils/private/define-reactive-plugin.js'

const Plugin = defineReactivePlugin({
  isActive: false,
  mode: false
}, {
  __media: void 0,

  set (val) {

    Plugin.mode = val

    Plugin.isActive = val === true

  },

  toggle () {
    Plugin.set(Plugin.isActive === false)
  },

  install ({ $q }) {
    let { dark } = $q.config
	
	if(dark === undefined){
		const {osTheme} = $q.platform
		dark = osTheme && osTheme == 'dark'
	}

    $q.dark = this

    if (this.__installed === true && dark === void 0) {
      return
    }

    this.isActive = dark === true

    const initialVal = dark !== void 0 ? dark : false

    this.set(initialVal)
  }
})

export default Plugin
