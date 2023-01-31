// scroll-view 属性
export const useScrollProps = {
	scrollX: Boolean,
	scrollY: Boolean,
	upperThreshold: {
	  type: [Number,String],
	  default: 50
	},
	lowerThreshold: {
	  type: [Number,String],
	  default: 50
	},
	scrollTop: [Number,String],
	scrollLeft: [Number,String],
	scrollIntoView: String,
	scrollWithAnimation: Boolean,
	enableBackToTop: Boolean,
	showScrollbar: Boolean,
	refresherEnabled: Boolean,
	refresherThreshold: {
	  type: Number,
	  default: 45
	},
	refresherDefaultStyle: {
	  type: String,
	  default: 'black'
	},
	refresherBackground: {
	  type: String,
	  default: '#FFF'
	},
	refresherTriggered: Boolean,
	enableFlex: Boolean,
	scrollAnchoring: Boolean,
}

export default (props, {emit})=>{
	// 事件触发
	const onEventEmit = (name,evt)=>{
		emit(name, evt)
	}
	return {
		onEventEmit
	}
}