<template>
	<q-page>
		<Lanmu title="Base">
			<view class="bg-orange-2 text-red q-pa-md">
				小程序中设置Class和style使用：className="" styles=""
			</view>
			<q-card class="my-card">
				<q-card-section>
					{{ lorem }}
				</q-card-section>
			</q-card>
		
			<q-card className="my-card text-white card-blue">
				<q-card-section>
					<div class="text-h6">{{title}}</div>
					<div class="text-subtitle2">{{subTitle}}</div>
				</q-card-section>
				<q-card-section class="q-pt-none">
					{{ lorem }}
				</q-card-section>
			</q-card>
		
			<q-card dark bordered className="bg-grey-9 my-card">
				<q-card-section>
					<div class="text-h6">{{title}}</div>
					<div class="text-subtitle2">{{subTitle}}</div>
				</q-card-section>
		
				<q-separator dark inset />
		
				<q-card-section>
					{{ lorem }}
				</q-card-section>
			</q-card>
		
			<q-card flat bordered className="my-card">
				<q-card-section>
					<div class="text-h6">Our Changing Planet</div>
				</q-card-section>
		
				<q-card-section class="q-pt-none">
					{{ lorem }}
				</q-card-section>
		
				<q-separator inset />
		
				<q-card-section>
					{{ lorem }}
				</q-card-section>
			</q-card>
		</Lanmu>
		<Lanmu title="With Actions">
			<q-card className="my-card bg-secondary text-white">
				<q-card-section>
					<div class="text-h6">Our Changing Planet</div>
					<div class="text-subtitle2">by John Doe</div>
				</q-card-section>
		
				<q-card-section>
					{{ lorem }}
				</q-card-section>
		
				<q-separator dark />
		
				<q-card-actions>
					<q-btn flat>Action 1</q-btn>
					<q-btn flat>Action 2</q-btn>
				</q-card-actions>
			</q-card>
		
			<q-card class="my-card">
				<q-card-section>
					<div class="text-h6">Action Vertical</div>
					<div class="text-subtitle2">by John Doe</div>
				</q-card-section>
		
				<q-separator />
		
				<q-card-actions vertical>
					<q-btn flat>Action 1</q-btn>
					<q-btn flat>Action 2</q-btn>
				</q-card-actions>
			</q-card>
		
			<q-card className="my-card bg-purple text-white">
				<q-card-section>
					<div class="text-h6">Our Changing Planet</div>
					<div class="text-subtitle2">by John Doe</div>
				</q-card-section>
		
				<q-card-actions>
					<q-btn flat>Action 1</q-btn>
					<q-btn flat>Action 2</q-btn>
				</q-card-actions>
			</q-card>
			
			<q-card class="my-card">
			  <img src="https://cdn.quasar.dev/img/mountains.jpg">
		
			  <q-card-section>
				<div class="text-h6">Our Changing Planet</div>
				<div class="text-subtitle2">by John Doe</div>
			  </q-card-section>
		
			  <q-card-section class="q-pt-none">
				{{ lorem }}
			  </q-card-section>
			</q-card>
			
			<q-card class="my-card">
				<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
					<div class="absolute-bottom text-subtitle2 text-center">
						Title
					</div>
				</q-img>
			</q-card>
			<q-card flat bordered class="my-card bg-grey-1">
				<q-card-section>
					<div class="row items-center no-wrap">
						<div class="col">
							<div class="text-h6">Our Planet</div>
							<div class="text-subtitle2">by John Doe</div>
						</div>
		
						<div class="col-auto">
							<q-btn color="grey-7" round flat icon="more_vert">
								<q-menu cover auto-close>
									<q-list>
										<q-item clickable>
											<q-item-section>Remove Card</q-item-section>
										</q-item>
										<q-item clickable>
											<q-item-section>Send Feedback</q-item-section>
										</q-item>
										<q-item clickable>
											<q-item-section>Share</q-item-section>
										</q-item>
									</q-list>
								</q-menu>
							</q-btn>
						</div>
					</div>
				</q-card-section>
		
				<q-card-section>
					{{ lorem }}
				</q-card-section>
		
				<q-separator />
		
				<q-card-actions>
					<q-btn flat>Action 1</q-btn>
					<q-btn flat>Action 2</q-btn>
				</q-card-actions>
			</q-card>
		</Lanmu>
		
		<Lanmu title="Basic horizontal">
			<div class="q-pa-md row items-start q-gutter-md">
				<q-card class="my-card" flat bordered>
					<q-card-section horizontal>
						<q-card-section class="q-pt-xs">
							<div class="text-overline">Overline</div>
							<div class="text-h5 q-mt-sm q-mb-xs">Title</div>
							<div class="text-caption text-grey">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua.
							</div>
						</q-card-section>
			
						<q-card-section class="col-5 flex flex-center">
							<q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
						</q-card-section>
					</q-card-section>
			
					<q-separator />
			
					<q-card-actions>
						<q-btn flat round icon="event" />
						<q-btn flat>
							7:30PM
						</q-btn>
						<q-btn flat color="primary">
							Reserve
						</q-btn>
					</q-card-actions>
				</q-card>
			
				<q-card class="my-card" flat bordered>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img src="https://cdn.quasar.dev/img/boy-avatar.png">
							</q-avatar>
						</q-item-section>
			
						<q-item-section>
							<q-item-label>Title</q-item-label>
							<q-item-label caption>
								Subhead
							</q-item-label>
						</q-item-section>
					</q-item>
			
					<q-separator />
			
					<q-card-section horizontal>
						<q-card-section>
							{{ lorem }}
						</q-card-section>
			
						<q-separator vertical />
			
						<q-card-section class="col-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</q-card-section>
					</q-card-section>
				</q-card>
			
				<q-card class="my-card">
					<q-card-section horizontal>
						<q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />
			
						<q-card-section>
							{{ lorem }}
						</q-card-section>
					</q-card-section>
			
					<q-separator />
			
					<q-card-actions>
						<q-btn flat round icon="event" />
						<q-btn flat>
							5:30PM
						</q-btn>
						<q-btn flat>
							7:00PM
						</q-btn>
						<q-btn flat color="primary">
							Reserve
						</q-btn>
					</q-card-actions>
				</q-card>
			
				<q-card class="my-card">
					<q-card-section horizontal>
						<q-img class="col" src="https://cdn.quasar.dev/img/parallax2.jpg" />
			
						<q-card-actions vertical class="justify-around">
							<q-btn flat round color="red" icon="favorite" />
							<q-btn flat round color="accent" icon="bookmark" />
							<q-btn flat round color="primary" icon="share" />
						</q-card-actions>
					</q-card-section>
				</q-card>
			</div>
		</Lanmu>
	</q-page>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Card Title',
				subTitle: 'Subtitle by Kevin',
				lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		}
	}
</script>

<style lang="sass">
.my-card
  margin: 10px

.card-blue
  background: linear-gradient(#35a2ff 0%, #014a88 100%)
</style>
