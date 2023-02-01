import each from '../each.js'

/*
$uni.alert('一个简单的提示！')
$uni.alert('一个简单的提示！','这是标题',['关了吧！'])
$uni.alert('一个简单的提示！',['关了吧！'])
$uni.alert('一个简单的提示！',['取消1','确定2'])
$uni.alert('这是一个提示！', '这是标题', ['取消1','确定2'], (evt)=>{
	console.log('点击了', evt)
})
*/

export default function (content){
	const opts = {content}
	each(arguments, (vo,k)=>{
		if(k > 0){
			const tag = typeof vo
			if(tag == 'string'){
				opts.title = vo
			}else if(Array.isArray(vo)){
				let btnTp = ['cancel', 'confirm'];
				vo = vo.splice(0,2)
				opts.showCancel = vo.length == 2 && vo[0]?true:false
				if(vo.length == 1) vo.unshift(null)
				each(vo, (text,i)=>{
					const btn = typeof text == 'string' ? {text} : text
					if(btn && btn['text']) opts[btnTp[i]+'Text'] = btn['text']
					if(btn && btn['color']) opts[btnTp[i]+'Color'] = btn['color']
				})
			}else if(tag == 'function'){
				opts.success = vo
			}
		}
	})
	uni.showModal(opts)
}