<template>
	<div class="about-container">
		<div class="flex flex-col-reverse gap-6 items-center md:flex-row md:gap-12 md:justify-center h-full">
			<div class="space-y-2 text-center md:text-left px-4 md:px-8 flex-1">
				<article data-page="about">
					<header>
						<div class="text-xl font-bold text-white mb-4 fadein-bot title-section flex items-center">
							About Me &nbsp;
							<div class="h-[1px] w-24 bg-amber-200 md:w-64"></div>
						</div>
					</header>

					<section class="text-sm md:text-base text-justify flex flex-col gap-3">
						<div class="mb-2 md:mb-5 fadein-left fadeins-1">
							<p class="mb-4">
								<span class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">
									Hello! I'm Sara Dou — a game designer, researcher, and the founder of <strong>SnapDrama</strong>, a new vertical short-drama platform exploring the future of mobile storytelling in the U.S. market. I’m currently studying Game Design & Computer Science at NYU, where I build games that inspire connection, playfulness, and emotional warmth.
								</span>
							</p>
							<p class="mb-4">
								<span class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">
									My work spans both creative design and technical research. I develop games in Unity, Unreal Engine 5, and Godot, and I specialize in level design, narrative systems, and player experience. On the research side, I’ve published two papers on EEG signal processing at HCII and KDD, and I’m currently leading <strong>MindX</strong>, an EEG-controlled gaming system exploring real-time brain–computer interaction for more accessible and imaginative play.
								</span>
							</p>
							<p class="mb-4">
								<span class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">
									When I'm not building startups or running experiments, I'm creating games — from emotional RPGs to experimental mechanics.  
									<br>Play my games:
									<a 
										href="https://sarad666.itch.io/" 
										target="_blank" 
										class="underline decoration-2 hover:text-amber-300 transition duration-200"
									>
										https://sarad666.itch.io/
									</a> 
									<br>
									My Github: 
									<a 
										href="https://github.com/SaraD-666" 
										target="_blank" 
										class="underline decoration-2 hover:text-amber-300 transition duration-200"
									>
										https://github.com/SaraD-666
									</a>
								</span>
							</p>
						</div>
					</section>

				</article>
			</div>

			<div class="flex justify-center md:justify-start fadein-right flex-1">
				<img alt="avatar" width="250" height="250" class="w-7/12 md:w-9/12 rounded-full border-3 border-amber-200 pict"
					src="img/image.jpg">
			</div>
		</div>
	</div>
</template>

<style scoped>
.about-container {
	height: 100%;
	width: 100%;
	padding: 16px;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}

.fadein-left {
	opacity: 0;
	font-size: 1rem;
	line-height: 1.8rem;
	animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
	0% {
		opacity: 0;
		transform: translateX(100%);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.fadeins-1 {
	animation-delay: 300ms;
}

.pict {
	box-shadow: 0px 0px 30px -6px rgba(255, 219, 112, 0.44);
	max-width: 100%;
	height: auto;
}

@media (max-width: 768px) {
	.about-container {
		padding: 8px;
	}

	.fadein-left {
		font-size: 0.9rem;
		line-height: 1.6rem;
	}
}
</style>