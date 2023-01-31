<template>
	<q-page>
		<Lanmu title="Link">
			<q-list bordered separator>
				<q-item clickable ripple to="/pages/components/img">
					<q-item-section>内部连接</q-item-section>
				</q-item>
				<q-item clickable ripple href="https://taobao.com">
					<q-item-section>外部连接</q-item-section>
				</q-item>
				<q-item clickable ripple href="wxa91ff29be8dbb11c://pages/components/btn?id=12">
					<q-item-section>小程序连接</q-item-section>
				</q-item>
			</q-list>
		</Lanmu>
		<Lanmu title="Basic">
			<div class="q-pa-md" style="max-width: 350px">
				<q-list bordered separator>
					<q-item clickable ripple>
						<q-item-section>Single line item</q-item-section>
					</q-item>
		
					<q-item clickable>
						<q-item-section>
							<q-item-label>Item with No ripple</q-item-label>
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
			</div>
			Dense
			<div class="q-pa-md" style="max-width: 350px">
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
			</div>
			On a dark background
			<div class="q-pa-md bg-grey-10 text-white q-mb-md">
				<q-list dark bordered separator style="max-width: 318px">
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
			</div>
			Folder listing
			<div class="q-pa-md q-gutter-md">
				<q-list bordered padding class="rounded-borders" style="max-width: 350px">
					<q-item-label header>Folders</q-item-label>
			
					<q-item clickable ripple>
						<q-item-section avatar top>
							<q-avatar icon="folder" color="primary" text-color="white" />
						</q-item-section>
			
						<q-item-section>
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
			
						<q-item-section>
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
			
						<q-item-section>
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
			
						<q-item-section>
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
			
						<q-item-section>
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
			
						<q-item-section>
							<q-item-label lines="1">My favorite song</q-item-label>
							<q-item-label caption>Singing it all day</q-item-label>
						</q-item-section>
			
						<q-item-section side>
							<q-icon name="info" />
						</q-item-section>
					</q-item>
				</q-list>
			</div>
			
		</Lanmu>
	</q-page>
</template>

<script>
</script>

<style>
</style>
