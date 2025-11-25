<script>
	import PortfolioCard from '@/components/PortfolioCard.vue'

	export default {
		name: 'PortfolioView',
		components: {
			PortfolioCard
		},
		data() {
			return {
				items: [
					{
						id: 1,
						name: 'The Meowfficer',
						imageUrl: '5',
						status: 'In this top-down single-player pixelated RPG, you play as a cat in the police force, talking with your allies, fighting in intense gun fights, unraveling the lore, and making moral decisions.',
						tech: '',
						github: 'null',
						demo: 'https://store.steampowered.com/app/3464230/The_Meowfficer/'
					},
					{
						id: 2,
						name: 'The Coroner',
						imageUrl: '3',
						status: 'This is a horror game about you are hired to be the new coroner for the city. Do your job as you cut open skins and sort the body parts of the city\'s corpses. Finish quickly, and pay no mind to the screaming...',
						tech: '',
						github: 'null',
						demo: 'https://jpercent.itch.io/hell-sell'
					},
					{
						id: 3,
						name: 'Hell Sell',
						imageUrl: '4',
						status: 'This is a game between nutty inventors with silly new products and a manager who fails to give you all the details, two rival advertisement agents battle it out for the wittiest and wackiest punchlines!',
						tech: '',
						github: 'null',
						demo: 'https://jpercent.itch.io/hell-sell'
					},
					{
						id: 4,
						name: 'Drift Edgeless',
						imageUrl: '1',
						status: 'This is a visual novel game that players are trying to discover the truth and myths behind the village',
						tech: '',
						github: 'null',
						demo: 'https://toad42.itch.io/drift-endless'
					},
					{
						id: 5,
						name: 'Goddess Village',
						imageUrl: '2',
						status: 'This game revolves around an individual making critical decisions with the aim of rescuing the maximum number of people possible.',
						tech: '',
						github: 'null',
						demo: 'https://sarad666.itch.io/goddess-village'
					},
				]
			};
		},
		computed: {
			topGame() {
				return this.items[0];
			},
			leftVerticalCard() {
				return this.items[1];
			},
			rightGridCards() {
				return this.items.slice(2);
			}
		}
	}
</script>
<template>
	<section class="space-y-8 fade-zoom-in px-6 py-8 text-amber-50 mt-[100px]">
		<!-- 第一排：Top Game -->
		<div class="w-full">
			<PortfolioCard :item="topGame" class="h-[400px] md:h-[500px]" />
		</div>
		<!-- 第二排：左侧竖卡片 + 右侧横向自动换行卡片 -->
		<div class="flex flex-col md:flex-row gap-12">
			<!-- 左侧 Coroner -->
			<div class="md:w-1/3 flex flex-col">
				<div class="flex-1">
					<PortfolioCard :item="leftVerticalCard" class="h-full" />
				</div>
			</div>


			<!-- 右侧其余项目 -->
			<div class="md:w-2/3 flex flex-wrap gap-100">
				<PortfolioCard
				v-for="item in rightGridCards"
				:key="item.id"
				:item="item"
				class="w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.5rem)] h-[360px]"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.item-card:hover {
		transition: transform 0.3s ease;
		transform: translateY(-8px);
	}
	svg:hover {
		stroke: #ffdb70;
	}
	.fade-zoom-in {
		animation: fadeZoomIn 1s ease-in-out;
	}
	@keyframes fadeZoomIn {
		0% {
			opacity: 0;
			transform: scale(0.5);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>

