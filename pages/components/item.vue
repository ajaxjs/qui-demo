<template>
	<q-page>
		<Lanmu title="Basic">
			<view class="text-bold">Base 基础应用</view>
			<q-list bordered separator>
				<q-item clickable ripple>
					<q-item-section>单行项目</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section>
						<q-item-label>带备注</q-item-label>
						<q-item-label caption>Item with caption</q-item-label>
					</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section>
						<q-item-label overline>OVERLINE</q-item-label>
						<q-item-label>Item with caption</q-item-label>
					</q-item-section>
				</q-item>

				<q-item clickable>
					<q-item-section>
						<q-item-label>无点击波纹效果</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</Lanmu>
		
		<Lanmu title="样式">
			<view class="q-pt-md text-bold">Dense 紧凑模式</view>
			<q-list dense bordered padding class="rounded-borders">
				<q-item clickable ripple>
					<q-item-section>
						Item
					</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section>
						Item
					</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section>
						Item
					</q-item-section>
				</q-item>
			</q-list>

			<view class="q-pt-md text-bold">黑暗模式，在黑色背景上</view>
			<view class="q-pa-md bg-dark text-white q-mb-md">
				<q-list dark bordered separator>
					<q-item clickable ripple>
						<q-item-section>Single line item</q-item-section>
					</q-item>

					<q-item clickable ripple>
						<q-item-section>
							<q-item-label>Item with caption</q-item-label>
							<q-item-label caption>Caption</q-item-label>
						</q-item-section>
					</q-item>

					<q-item clickable ripple>
						<q-item-section>
							<q-item-label overline>OVERLINE</q-item-label>
							<q-item-label>Item with caption</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</view>

			<view class="q-pt-md text-bold">Folder listing</view>
			<q-list bordered padding class="rounded-borders" style="max-width: 350px">
				<q-item-label header>Folders</q-item-label>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="folder" color="primary" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">Photos</q-item-label>
						<q-item-label caption>February 22nd, 2019</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" color="green" />
					</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="folder" color="orange" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">Movies</q-item-label>
						<q-item-label caption>March 1st, 2019</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" />
					</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="folder" color="teal" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">Photos</q-item-label>
						<q-item-label caption>January 15th, 2019</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" />
					</q-item-section>
				</q-item>

				<q-separator spaced />
				<q-item-label header>Files</q-item-label>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="assignment" color="grey" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">Expenses spreadsheet</q-item-label>
						<q-item-label caption>March 2nd, 2019</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" />
					</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="place" color="grey" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">Places to visit</q-item-label>
						<q-item-label caption>February 22, 2019</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" color="amber" />
					</q-item-section>
				</q-item>

				<q-item clickable ripple>
					<q-item-section avatar top>
						<q-avatar icon="library_music" color="grey" text-color="white" />
					</q-item-section>

					<q-item-section class="col">
						<q-item-label lines="1">My favorite song</q-item-label>
						<q-item-label caption>Singing it all day</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-icon name="info" />
					</q-item-section>
				</q-item>
			</q-list>
			
			<view class="lm-title">Active 激活状态</view>
			<view class="q-pa-md q-gutter-md">
				<q-toggle v-model="active" label="Active" />
				<q-list bordered separator>
					<q-item clickable ripple :active="active">
						<q-item-section avatar>
							<q-icon name="signal_wifi_off" />
						</q-item-section>
						<q-item-section>Active</q-item-section>
						<q-item-section side>Side</q-item-section>
					</q-item>
					<q-item clickable ripple :active="active" active-class="text-orange">
						<q-item-section avatar>
							<q-icon name="signal_wifi_off" />
						</q-item-section>
						<q-item-section>Active, Active class</q-item-section>
						<q-item-section side>Side</q-item-section>
					</q-item>
					<q-item clickable ripple :active="active" active-class="bg-teal-1 text-grey-8">
						<q-item-section avatar>
							<q-icon name="signal_wifi_off" />
						</q-item-section>
						<q-item-section>Active, Active class</q-item-section>
						<q-item-section side>Side</q-item-section>
					</q-item>
				</q-list>
			</view>
		</Lanmu>
		<Lanmu title="QItemSection">
			<q-list bordered>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-icon color="primary" name="bluetooth" />
					</q-item-section>
		
					<q-item-section class="col">Icon as avatar</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar color="teal" text-color="white" icon="bluetooth" />
					</q-item-section>
		
					<q-item-section class="col">Avatar-type icon</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
					</q-item-section>
		
					<q-item-section class="col">Rounded avatar-type icon</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar color="primary" text-color="white">
							R
						</q-avatar>
					</q-item-section>
		
					<q-item-section class="col">Letter avatar-type</q-item-section>
				</q-item>
				<q-separator />
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar>
							<img src="https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/12.png">
						</q-avatar>
					</q-item-section>
					<q-item-section class="col">Image avatar</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar square>
							<img src="https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/8.png">
						</q-avatar>
					</q-item-section>
					<q-item-section class="col">Image square avatar</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar rounded>
							<img src="https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/54.png">
						</q-avatar>
					</q-item-section>
					<q-item-section class="col">Image rounded avatar</q-item-section>
				</q-item>
				<q-separator />
				<q-item clickable ripple>
					<q-item-section avatar>
						<q-avatar rounded>
							<img src="https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/68.png">
						</q-avatar>
					</q-item-section>
					<q-item-section class="col">List item</q-item-section>
				</q-item>
				<q-item clickable ripple>
					<q-item-section thumbnail>
						<img src="https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random/3.png">
					</q-item-section>
					<q-item-section class="col">List item</q-item-section>
				</q-item>
			</q-list>
		</Lanmu>
		<Lanmu title="Contacts">
			<view class="q-pa-md">
				
				<q-list bordered>
					<q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable ripple>
						<q-item-section avatar>
							<q-avatar color="primary" text-color="white">
								{{ contact.letter }}
							</q-avatar>
						</q-item-section>
			
						<q-item-section>
							<q-item-label>{{ contact.name }}</q-item-label>
							<q-item-label caption lines="1">{{ contact.email }}</q-item-label>
						</q-item-section>
			
						<q-item-section side>
							<q-icon name="chat_bubble" color="green" />
						</q-item-section>
					</q-item>
			
					<q-separator />
					<q-item-label header>Offline</q-item-label>
			
					<q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable ripple>
						<q-item-section avatar>
							<q-avatar>
								<img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
							</q-avatar>
						</q-item-section>
			
						<q-item-section>
							<q-item-label>{{ contact.name }}</q-item-label>
							<q-item-label caption lines="1">{{ contact.email }}</q-item-label>
						</q-item-section>
			
						<q-item-section side>
							<q-icon name="chat_bubble" color="grey" />
						</q-item-section>
					</q-item>
				</q-list>
			</view>
		</Lanmu>
		<Lanmu title="Settings">
			<view class="q-pa-md" style="max-width: 350px">
				<q-list bordered padding>
					<q-item-label header>User Controls</q-item-label>
			
					<q-item class="col" clickable ripple>
						<q-item-section>
							<q-item-label>Content filtering</q-item-label>
							<q-item-label caption>
								Set the content filtering level to restrict
								apps that can be downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-item clickable ripple>
						<q-item-section>
							<q-item-label>Password</q-item-label>
							<q-item-label caption>
								Require password for purchase or use
								password to restrict purchase
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-separator spaced />
					<q-item-label header>General</q-item-label>
			
					<q-item tag="label" ripple>
						<q-item-section side top>
							<q-checkbox v-model="check1" />
						</q-item-section>
			
						<q-item-section>
							<q-item-label>Notifications</q-item-label>
							<q-item-label caption>
								Notify me about updates to apps or games that I downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-item tag="label" ripple>
						<q-item-section side top>
							<q-checkbox v-model="check2" />
						</q-item-section>
			
						<q-item-section>
							<q-item-label>Sound</q-item-label>
							<q-item-label caption>
								Auto-update apps at anytime. Data charges may apply
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-item tag="label" ripple>
						<q-item-section side top>
							<q-checkbox v-model="check3" />
						</q-item-section>
			
						<q-item-section>
							<q-item-label>Auto-add widgets</q-item-label>
							<q-item-label caption>
								Automatically add home screen widgets
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-separator spaced />
					<q-item-label header>Notifications</q-item-label>
			
					<q-item tag="label" ripple>
						<q-item-section>
							<q-item-label>Battery too low</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-toggle color="blue" v-model="notif1" val="battery" />
						</q-item-section>
					</q-item>
			
					<q-item tag="label" ripple>
						<q-item-section>
							<q-item-label>Friend request</q-item-label>
							<q-item-label caption>Allow notification</q-item-label>
						</q-item-section>
						<q-item-section side top>
							<q-toggle color="green" v-model="notif2" val="friend" />
						</q-item-section>
					</q-item>
			
					<q-item tag="label" ripple>
						<q-item-section>
							<q-item-label>Picture uploaded</q-item-label>
							<q-item-label caption>Allow notification when uploading images</q-item-label>
						</q-item-section>
						<q-item-section side top>
							<q-toggle color="red" v-model="notif3" val="picture" />
						</q-item-section>
					</q-item>
			
					<q-separator spaced />
					<q-item-label header>Other settings</q-item-label>
			
					<q-item>
						<q-item-section side>
							<q-icon color="teal" name="volume_down" />
						</q-item-section>
						<q-item-section class="col">
							<q-slider v-model="volume" :min="0" :max="10" label color="teal" immediate />
							<view class="">
								值：{{volume}} <text class="text-grey">即时变动</text>
							</view>
						</q-item-section>
						<q-item-section side>
							<q-icon color="teal" name="volume_up" />
						</q-item-section>
					</q-item>
			
					<q-item>
						<q-item-section side>
							<q-icon color="deep-orange" name="brightness_medium" />
						</q-item-section>
						<q-item-section class="col">
							<q-slider v-model="brightness" :min="0" :max="10" color="deep-orange" block-color="red" />
							<view class="">
								值：{{brightness}} <text class="text-grey">松开变动</text>
							</view>
						</q-item-section>
					</q-item>
			
					<q-item>
						<q-item-section side>
							<q-icon color="primary" name="mic" />
						</q-item-section>
						<q-item-section class="col">
							<q-slider v-model="mic" :min="0" :max="50" immediate activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" :block-size="20" />
							<view class="">
								值：{{mic}}
							</view>
						</q-item-section>
					</q-item>
				</q-list>
			</view>
		</Lanmu>
		<Lanmu title="Link 带连接">
			<q-list bordered separator>
				<q-item clickable ripple to="/pages/components/img">
					<q-item-section>内部连接</q-item-section>
				</q-item>
				<q-item clickable ripple href="https://taobao.com">
					<q-item-section>外部连接</q-item-section>
				</q-item>
				<q-item clickable ripple mp="wxa91ff29be8dbb11c://pages/components/btn?id=12">
					<q-item-section>小程序连接</q-item-section>
				</q-item>
			</q-list>
		</Lanmu>
	</q-page>
</template>

<script setup>
	import { ref } from "vue";
	const active = ref(true)
	
	const check1 = ref(true)
	const check2 = ref(false)
	const check3 = ref(false)

	const notif1 = ref(true)
	const notif2 = ref(true)
	const notif3 = ref(false)

	const volume = ref(6)
	const brightness = ref(3)
	const mic = ref(8)
	
	const contacts = [{
		id: 1,
		name: 'Ruddy Jedrzej',
		email: 'rjedrzej0@discuz.net',
		letter: 'R'
	}, {
		id: 2,
		name: 'Mallorie Alessandrini',
		email: 'malessandrini1@marketwatch.com',
		letter: 'M'
	}, {
		id: 3,
		name: 'Elisabetta Wicklen',
		email: 'ewicklen2@microsoft.com',
		letter: 'E'
	}, {
		id: 4,
		name: 'Seka Fawdrey',
		email: 'sfawdrey3@wired.com',
		letter: 'S'
	}]
	
	const offline = [{
		id: 5,
		name: 'Brunhilde Panswick',
		email: 'bpanswick4@csmonitor.com',
		avatar: 'avatar2.jpg'
	}, {
		id: 6,
		name: 'Winfield Stapforth',
		email: 'wstapforth5@pcworld.com',
		avatar: 'avatar6.jpg'
	}]
</script>

<style>
</style>
