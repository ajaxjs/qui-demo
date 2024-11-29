<template>
	<q-page class="q-px-sm">
		<q-chat-message v-for="(msg,i) in msglist" :key="i" v-bind="msg"></q-chat-message>
		
		<template #footer>
			<q-footer>
				<input type="text" confirm-type="send" :focus="keepfocus" v-model="text" @confirm="addMsg(text,true)" class="input col"
					@blur="keepfocus=false"
				/>
				<q-btn unelevated square icon="send" color="green" @click="addMsg(text,true)"></q-btn>
			</q-footer>
		</template>
	</q-page>
</template>

<script setup>
	import {
		nextTick,
		ref
	} from "vue"
	const text = ref('')
	const keepfocus = ref(false)
	const msglist = ref([])


	function addMsg(msg, sent, e) {
		msglist.value.push({
			sent,
			name: sent?'Dook':'Kasi',
			avatar: 'https://picsum.photos/150/150?random=' + (sent ? 1 : 0),
			text: [msg],
			stamp: '5 分钟前',
		})
		text.value = '';
		nextTick(()=>{
			keepfocus.value = true
		})
	}

	// Demo
	const demo = ['你好啊！', '你好，很高兴认识你！', '我也是，幸会幸会！', '你是做什么的呀？', '我是做前端的😊', '😂'];
	demo.forEach((msg, i) => {
		addMsg(msg, i % 2 == 0);
	})
</script>

<style lang="scss">
	.input {
		height: 50px;
		padding-left: 5px;
	}
</style>