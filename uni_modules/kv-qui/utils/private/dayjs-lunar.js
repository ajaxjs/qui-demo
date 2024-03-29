import Nongli from './date-nongli.js'
export default (option, dayjsClass, dayjsFactory) => {

	// 农历月份
	dayjsClass.prototype.lunar = function(){
		return Nongli.solar2lunar(this.$y, this.$M + 1, this.$D)
	}

}