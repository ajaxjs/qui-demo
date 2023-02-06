<template>
	<q-page>
		<Lanmu title="Basic">
			<view class="q-gutter-md">
				<view>
					<q-chip icon="event" clickable @click="onEvent">Add to calendar</q-chip>
					<q-chip icon="bookmark">Bookmark</q-chip>
					<q-chip icon="alarm" label="Set alarm" />
					<q-chip class="glossy" icon="directions">Get directions</q-chip>
				</view>
				<view>
					<q-chip color="primary" text-color="white" icon="event">
						Add to calendar
					</q-chip>
					<q-chip color="teal" text-color="white" icon="bookmark">
						Bookmark
					</q-chip>
					<q-chip class="glossy" color="orange" text-color="white" icon-right="star">
						Star
					</q-chip>
					<q-chip color="red" text-color="white" icon="alarm" label="Set alarm" />
					<q-chip color="deep-orange" text-color="white" icon="directions">
						Get directions
					</q-chip>
					<q-chip>
						<q-avatar icon="bookmark" color="red" text-color="white" />
						Bookmark
					</q-chip>
					<q-chip>
						<q-avatar color="red" text-color="white">50</q-avatar>
						Emails
					</q-chip>
					<q-chip>
						<q-avatar>
							<img src="https://cdn.quasar.dev/img/avatar5.jpg">
						</q-avatar>
						John
					</q-chip>
				</view>
			</view>
		</Lanmu>
		<Lanmu title="Dense">
			<view class="q-pa-md q-gutter-md">
				<view>
					<q-chip dense icon="event">Add to calendar</q-chip>
					<q-chip dense icon="bookmark">Bookmark</q-chip>
					<q-chip dense icon="alarm" label="Set alarm" />
					<q-chip dense icon="directions">Get directions</q-chip>
				</view>
				<view>
					<q-chip dense color="primary" text-color="white" icon="event">
						Add to calendar
					</q-chip>
					<q-chip dense color="teal" text-color="white" icon="bookmark">
						Bookmark
					</q-chip>
					<q-chip dense color="orange" text-color="white" icon-right="star">
						Star
					</q-chip>
					<q-chip dense color="red" text-color="white" icon="alarm" label="Set alarm" />
					<q-chip dense color="deep-orange" text-color="white" icon="directions">
						Get directions
					</q-chip>
					<q-chip dense>
						<q-avatar icon="bookmark" color="red" text-color="white" />
						Bookmark
					</q-chip>
					<q-chip dense>
						<q-avatar color="red" text-color="white">50</q-avatar>
						Emails
					</q-chip>
					<q-chip dense>
						<q-avatar>
							<img src="https://cdn.quasar.dev/img/avatar3.jpg">
						</q-avatar>
						Mary
					</q-chip>
				</view>
			</view>
		</Lanmu>

		<Lanmu title="Style">
			<view class="lm-title">Square</view>
			<div class="q-pa-md q-gutter-md">
				<div>
					<q-chip square icon="event">Add to calendar</q-chip>
					<q-chip class="glossy" square icon="bookmark">Bookmark</q-chip>
					<q-chip square icon="alarm" label="Set alarm" />
					<q-chip square icon="directions">Get directions</q-chip>
				</div>
				<div>
					<q-chip square color="primary" text-color="white" icon="event">
						Add to calendar
					</q-chip>
					<q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">
						Bookmark
					</q-chip>
					<q-chip square color="orange" text-color="white" icon-right="star">
						Star
					</q-chip>
					<q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
					<q-chip square color="deep-orange" text-color="white" icon="directions">
						Get directions
					</q-chip>
					<q-chip square>
						<q-avatar icon="bookmark" color="red" text-color="white" />
						Bookmark
					</q-chip>
					<q-chip square>
						<q-avatar color="red" text-color="white">50</q-avatar>
						Emails
					</q-chip>
					<q-chip square>
						<q-avatar>
							<img src="https://cdn.quasar.dev/img/boy-avatar.png">
						</q-avatar>
						John
					</q-chip>
				</div>
			</div>
			<view class="lm-title">Outline</view>
			<div class="q-pa-md">
				<q-chip outline color="primary" text-color="white" icon="event">
					Add to calendar
				</q-chip>
				<q-chip outline color="teal" text-color="white" icon="bookmark">
					Bookmark
				</q-chip>
				<q-chip outline color="orange" text-color="white" icon-right="star">
					Star
				</q-chip>
				<q-chip outline square color="red" text-color="white" icon="alarm" label="Set alarm" />
				<q-chip outline square color="deep-orange" text-color="white" icon="directions">
					Get directions
				</q-chip>
			</div>
			<view class="lm-title">Clickable</view>
			<div class="q-pa-md">
				<q-chip clickable @click="onClick" color="primary" text-color="white" icon="event">
					Add to calendar
				</q-chip>
				<q-chip clickable @click="onClick" icon="bookmark">
					Bookmark
				</q-chip>
				<q-chip clickable @click="onClick" color="teal" text-color="white" icon="bookmark">
					Bookmark
				</q-chip>
				<q-chip clickable @click="onClick" color="red" text-color="white" icon="alarm" label="Set alarm" />
				<q-chip clickable @click="onClick" color="orange" text-color="white" icon="directions">
					Get directions
				</q-chip>
			</div>
			<view class="lm-title">Selected</view>
			<div class="q-pa-md">
				<div class="q-gutter-xs">
					<q-chip v-model:selected="desert.Icecream" color="primary" text-color="white" icon="cake">
						Ice cream
					</q-chip>
					<q-chip v-model:selected="desert.Eclair" color="teal" text-color="white" icon="cake">
						Eclair
					</q-chip>
					<q-chip v-model:selected="desert.Cupcake" color="orange" text-color="white" icon="cake">
						Cupcake
					</q-chip>
					<q-chip v-model:selected="desert.Gingerbread" color="red" text-color="white" icon="cake">
						Gingerbread
					</q-chip>
				</div>

				<div class="q-mt-sm">
					Your pick: {{ selection }}
				</div>
			</div>
			<view class="lm-title">Removable</view>
			<div class="q-pa-md">
				<div class="q-gutter-xs">
					<q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white"
						icon="cake">
						Ice cream
					</q-chip>
					<q-chip removable v-model="eclair" @remove="log('Icecream')" color="teal" text-color="white"
						icon="cake">
						Eclair
					</q-chip>
					<q-chip removable v-model="cupcake" @remove="log('Icecream')" color="orange" text-color="white"
						icon="cake">
						Cupcake
					</q-chip>
					<q-chip disable removable v-model="gingerbread" @remove="log('Icecream')" color="red"
						text-color="white" icon="cake">
						Gingerbread (disable)
					</q-chip>
				</div>

				<q-btn color="primary" label="Reset" @click="onResetClick" class="q-mt-sm" />
			</div>
			<view class="lm-title">Long label truncation</view>
			<div class="q-pa-md">
				<div class="q-gutter-xs row" style="max-width: 300px" :class="{ 'truncate-chip-labels': truncate }">
					<q-chip removable v-model="vanilla" color="primary" text-color="white" icon="cake"
						:label="vanillaLabel" :title="vanillaLabel" />
					<q-chip removable v-model="chocolate" color="teal" text-color="white" icon="cake"
						:label="chocolateLabel">
					</q-chip>
					<q-chip removable v-model="strawberry" color="orange" text-color="white" icon="cake">
						<div class="ellipsis">
							{{ strawberryLabel }}
						</div>
					</q-chip>
					<q-chip removable v-model="cookies" color="red" text-color="white">
						<q-avatar>
							<img src="https://cdn.quasar.dev/img/boy-avatar.png">
						</q-avatar>
						<div class="ellipsis">
							{{ cookiesLabel }}
						</div>
					</q-chip>
				</div>

				<div class="row items-center q-mt-sm">
					<q-btn color="primary" label="Reset" @click="onResetClick" class="q-mr-sm" />
					<q-toggle v-model="truncate" label="截断标签" />
				</div>
			</div>
		</Lanmu>

		<Lanmu title="Size">
			<div class="q-pa-md q-gutter-md">
				<div>
					<q-chip size="18px" icon="bookmark">
						Bookmark
					</q-chip>
				</div>

				<div>
					<q-chip size="xs" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip size="sm" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip size="md" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip size="lg" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip size="xl" icon="bookmark">
						Bookmark
					</q-chip>
				</div>

				<div>
					<q-chip dense size="xs" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip dense size="sm" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip dense size="md" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip dense size="lg" icon="bookmark">
						Bookmark
					</q-chip>

					<q-chip dense size="xl" icon="bookmark">
						Bookmark
					</q-chip>
				</div>
			</div>
		</Lanmu>
	</q-page>
</template>

<script>
	import {
		reactive,
		computed,
		ref
	} from 'vue'
	export default {
		setup() {
			const icecream = ref(true)
			const eclair = ref(true)
			const cupcake = ref(true)
			const gingerbread = ref(true)

			const vanilla = ref(true)
			const chocolate = ref(true)
			const strawberry = ref(true)
			const cookies = ref(true)

			const desert = reactive({
				Icecream: false,
				Eclair: true,
				Cupcake: false,
				Gingerbread: false
			})

			return {
				desert,
				selection: computed(() => {
					return Object.keys(desert)
						.filter(type => desert[type] === true)
						.join(', ')
				}),
				icecream,
				eclair,
				cupcake,
				gingerbread,

				truncate: ref(true),

				vanilla,
				chocolate,
				strawberry,
				cookies,

				vanillaLabel: 'I want vanilla flavoured ice cream',
				chocolateLabel: 'I want chocolate flavoured ice cream',
				strawberryLabel: 'I want strawberry flavoured ice cream',
				cookiesLabel: 'I want cookies flavoured ice cream',

				onResetClick() {
					icecream.value = true
					eclair.value = true
					cupcake.value = true
					gingerbread.value = true

					vanilla.value = true
					chocolate.value = true
					strawberry.value = true
					cookies.value = true
				},

				log(desert) {
					console.log(`${desert} has been removed`)
				}
			}
		},
		methods: {
			onClick(evt) {
				console.log('Clicked on a QChip', evt)
			},
			onEvent(evt) {
				console.log(evt);
			}
		}
	}
</script>

<style lang="sass" scoped>
.truncate-chip-labels > .q-chip
  max-width: 140px
</style>
