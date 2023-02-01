/*
$uni.toast()
*/

export default function(title, sets){
	const iconArr = ['success','error','fail','exception','loading','none']
	const posArr = ['top','center','bottom']
	const tags = typeof sets
	const opts = {title}
	if(tags == 'object'){
		Object.assign(opts, sets)
	}else if(tags == 'string' && iconArr.includes(sets)){
		opts.icon = sets
	/* #ifdef APP */
	}else if(tags == 'string' && posArr.includes(sets)){
		opts.position = sets
	/* #endif */
	}else if (tags == 'string'){
		opts.image = sets
	}else if(tags == 'number'){
		opts.duration = sets
	}else if(tags == 'boolean'){
		opts.mask = sets
	}else if(tags == 'function'){
		opts.complete = sets
	}
	uni.showToast(opts);
}