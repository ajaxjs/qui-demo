import defineReactivePlugin from './utils/private/define-reactive-plugin.js'
import { injectProp } from './utils/private/inject-obj-prop.js'
// no extension on purpose for next one:
import materialIcons from './icon-set/material-icons'

const Plugin = defineReactivePlugin({
  iconMapFn: null,
  __icons: {}
}, {
  set (setObject) {
    const def = { ...setObject, rtl: setObject.rtl === true }

	def.set = Plugin.set
	Object.assign(Plugin.__icons, def)
  },

  install ({ $q, iconSet }) {
    if ($q.config.iconMapFn !== void 0) {
      this.iconMapFn = $q.config.iconMapFn
    }
    //console.log('iconSet',iconSet);
    $q.iconSet = this.__icons
    
    injectProp($q, 'iconMapFn', () => this.iconMapFn, val => { this.iconMapFn = val })
    
    if (this.__installed === true) {
      iconSet !== void 0 && this.set(iconSet)
    }
    else {
      this.set(iconSet || materialIcons)
    }
  }
})

export default Plugin
