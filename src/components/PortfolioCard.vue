<template>
	<div class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
		<div class="w-full h-[70%] overflow-hidden">
			<img
				:src="'img/portfolio-' + item.imageUrl + '.png'"
				alt="project image"
				class="w-full h-full object-cover rounded-xl"
			/>
		</div>
		<div class="flex-1 flex flex-col justify-end items-center gap-2 text-sm md:text-base lg:text-lg">
			<div class="title-text font-medium text-secondary">{{ item.name }}</div>
			<div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">{{ item.status }}</div>
			<div class="w-full mt-4 text-normal text-sm text-left text-amber-200">{{ item.tech }}</div>
			<div class="w-full flex justify-end">
				<div class="flex cursor-pointer items-end gap-2 text-primary">
					<a v-if="item.github !== 'null'" :href="item.github" target="_blank" title="查看源码" class="transition-all hover:text-accent">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87..." />
						</svg>
					</a>
					<a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" title="查看" class="transition-all hover:text-accent">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18">
							<path d="M18 13v6a2 2 0 0 1-2 2H5..." />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PortfolioCard',
	props: {
		item: Object
	}
}
</script>