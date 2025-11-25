<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>
<template>
	<div
		class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
		<article data-page="about">

			<header>
				<div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
					Contact Me
					<div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
						data-aos-duration="600"></div>
				</div>
			</header>

			<section
				class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">

				<ul class="mb-3 md:mb-7 fadein-left fadeins-1">
					<li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
						· Linkedin:
						<span class="bg-clip-text text-transparent">
							<a 
								href="https://www.linkedin.com/in/jingwen-dou-0a4571264/" 
								target="_blank"
								class="underline decoration-2 hover:text-amber-300 transition duration-200"
							>
								in/jingwen-dou-0a4571264
							</a>
						</span>
					</li>
					<li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">
						· Github:
						<span class="bg-clip-text text-transparent">
							<a 
								href="https://github.com/SaraD-666" 
								target="_blank"
								class="underline decoration-2 hover:text-amber-300 transition duration-200"
							>
								github.com/SaraD-666
							</a>
						</span>
					</li>
					<li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
						· E-Mail:
						<span class="bg-clip-text text-transparent">
							<a 
								href="mailto:dou546425@gmail.com"
								class="underline decoration-2 hover:text-amber-300 transition duration-200"
							>
								dou546425@gmail.com
							</a>
						</span>
					</li>
				</ul>

				
			</section>

		</article>
	</div>
</template>

<style>
	.fadein-left {
		opacity: 0;
		font-size: 1.1rem;
		line-height: 2.2rem;
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
		animation-delay: 500ms;

	}

	.fadeins-2 {
		animation-delay: 800ms;
	}

	.img-tech,
	.tech {
		transition: transform 0.3s ease;
	}

	.item-tech:hover .img-tech {
		transform: scale(1.3);
	}

	.item-tech:hover .tech {
		transform: translateY(-12px);
	}

	.item-tech:hover .status-tech {
		opacity: 1;
	}

	.pict {
		box-shadow: 0px 0px 43px -9px rgba(255, 219, 112, 0.44);

	}
</style>
