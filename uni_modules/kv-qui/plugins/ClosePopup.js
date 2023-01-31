
const ClosePopup = {
	close(evt){
		console.log('close-popup', evt);
		uni.$emit('close-popup', evt);
	},
	install(opts) {
		const { $q } = opts
		$q.closePopup = this.close
	}
}

export default ClosePopup