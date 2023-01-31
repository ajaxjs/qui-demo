import {ref, computed} from 'vue'
import qdate from './dateUtils'
import Nongli from './Nongli.js'
import {pad} from '../../utils/format.js'
import usePicker,{usePickerProps} from '../q-picker/usePicker.js'


//import {pad} from '../../utils/format.js'
//import qdate from '../../utils/date/QDate.js'

const yearVali = y => y>=1900 && y<= 2100
const lifaVali = lf=>['公','农'].includes(lf)

export const useDateTimeProps = {
	...usePickerProps,
	modelValue: String,
	lifa: {
		type: String,
		default: '公',
		validate: lifaVali
	},
	// 隐藏历法，为true时，lifa失效
	hideLifa: Boolean,
	// 默认日期
	defaults: String,
	// 日期格式：datetime/date
	dateType: {
		type: String,
		default: 'datetime',
		validate: vo=> ['datetime','date'].includes(vo)
	},
	format: String,
	min: {
		type: Number,
		default: ()=>1930,
		validate: yearVali
	},
	max: {
		type: Number,
		default: ()=>2100,
		validate: yearVali
	},
}

	
// map日期项
const mapMax = function(min,max){
	const retn = []
	for (let i = min; i <= max; i++) {
		retn.push(i)
	}
	return retn
}
// 读取默认值
const getDftStr = ({lifa,modelValue,hideLifa,defaults})=>{
	let dftStr
	if(modelValue){
		dftStr = lifaVali(modelValue.substr(0,1)) ? modelValue : lifa+'历 '+modelValue
	}else{
		dftStr = defaults || new Date()
	}
	return dftStr
}


export default ({ props,emit })=>{
	const min = qdate(props.min)
	const max = qdate(props.max)
	// 默认日期字符串
	// const dftStr = props.modelValue ? props.modelValue : (props.defaults||new Date())
	// 默认日期对象
	const dft = qdate(getDftStr(props))
	const dateArr = dft.format('YYYY-M-D'+(props.dateType=='datetime'?'-H-m':'')).split('-').map(vo=>Number(vo))
	// 历法
	const lifa = ref(dft.$lifa)
	if(dft.$leap) dateArr[1] = -dateArr[1]
	const innerValue = ref(dateArr)//props.modelValue
	// pickerview 返回值
	const dateRes = ref(null)
	// 日期对象
	const dateVal = ref(null)
	const format = ref(props.format || 'YYYY-MM-DD'+(props.dateType=='datetime'?' HH:mm':''))
	// pickerview options
	const options = computed(() => {
		let [year, month] = innerValue.value
		let maxDay;
		if(lifa.value=='公'){
			month = Math.abs(month)
			maxDay = Nongli.solarDays(year, month)
		}else{
			// 验证当前月是否闰月
			month = Nongli.leapMonth(year) == 0 ? Math.abs(month) : month
			maxDay = month < 0 ? Nongli.leapDays(year) : Nongli.monthDays(year, month)
		}
		let dateCol = []
		dateCol[0] = mapMax(min.$y, max.$y).map(value=>({label:value+'年',value}))
		if(lifa.value=='公'){
			dateCol[1] = mapMax(1,12).map(value=>({label:pad(value,2)+'月',value}))
			dateCol[2] = mapMax(1,maxDay).map(value=>({label:pad(value,2)+'日',value}))
		}else{
			// 生成月
			dateCol[1] = mapMax(1,12).map(value=>({label:Nongli.toChinaMonth(value),value}))
			// 读取闰月，并插入到月列表
			const leapMonth = Nongli.leapMonth(year)
			if(leapMonth){
				dateCol[1].splice(leapMonth,0,{label:'闰'+Nongli.toChinaMonth(leapMonth),value:-leapMonth,leap:true})
			}
			// 根据月生成日的天数
			dateCol[2] = mapMax(1,maxDay).map(value=>({label:Nongli.toChinaDay(value),value}))
		}
		if(props.dateType=='datetime'){
			dateCol.push(mapMax(0,23).map(value=>({label:pad(value,2)+'时',value})))
			dateCol.push(mapMax(0,59).map(value=>({label:pad(value,2)+'分',value})))
		}
		return dateCol
	})
	
	function onChange(val){
		// 修复不同月份，天数超出问题
		if(val.index[2] > options.value[2].length-1){
			const maxId = options.value[2].length-1
			val.index[2] = maxId
			val.rawValue[2] = options.value[2][maxId]
			val.value[2] = options.value[2][maxId]['value']
		}
		dateRes.value = val
		innerValue.value = val.value
		
		// 格式化
		const date = val.value
		const leap = date[1] < 0 ? true : false
		const dateObj = qdate({
			lifa: lifa.value,
			date,
			leap
		}, format.value)
		dateVal.value = {
			qobj: dateObj,
			lifa: lifa.value,
			date: dateObj.format(),
			leap,
			text: dateObj.toString()
		}
		emit('change', dateVal)
	}
	// 历法修改
	function onLifaChange(lf){
		lifa.value = lf
		onChange(dateRes.value)
	}
	// PickerValue 初始化
	function onDateReady(val){
		onChange(val)
	}
	// PickerValue Change
	function onDateChange(evt){
		onChange(evt.detail)
	}
	
	const {open,close} = usePicker({props,emit})
	function confirm(){
		emit('update:modelValue', dateVal.value.text)
		emit('confirm', dateVal)
		close();
	}
	
	
	return {
		colName: ['年','月','日','时','分','秒'],
		options,
		
		lifa,
		innerValue,
		dateVal,
		
		open,
		close,
		confirm,
		
		onDateReady,
		onLifaChange,
		onDateChange,
	}
}