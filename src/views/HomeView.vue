<template>
	<main
		class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
		<div class="space-y-2 text-center md:text-left px-10">
			<h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Sara (Jingwen) Dou</h1>
			<div class="py-2">
				<h1 class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
					ref="typewriter">
					<span class="wrap">{{ txt }}</span>
				</h1>
			</div>
			<p class="text-white pr-4 fade-in-from-left">A game developer and computer science programmer at NYU
			</p>
			<div class="buttons-container">
				<a href = "/files/Modern_Simple_ATS_Friendly_LateX_CV.pdf"
					class="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
					Resume</a>
				<a href = "#"
						class="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
						Blog</a>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'HomeView',
		data() {
			return {
				toRotate: ["Game Designer" , "Gameplay Engineer" ,"Tool Engineer" , "Machine Learning Researcher", "Programmer", "C/C++", "Java" , "Python" , "Marketing", "Unreal", "Unity", "JavaScript" , "Project Manager" , "Digital Business Strategy"],
				period: 2000,
				txt: '',
				loopNum: 0,
				isDeleting: false,
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.tick();
			});
		},
		methods: {
			tick() {
				let typewriter = this.$refs.typewriter;

				if (!typewriter) {
					return; // 如果无法获取 typewriter 元素，则结束函数
				}

				let i = this.loopNum % this.toRotate.length;
				let fullTxt = this.toRotate[i];

				// 根据当前状态，更新文本内容
				this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt
					.length + 1);
				typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

				let that = this;
				let delta = 200 - Math.random() * 100;

				if (this.isDeleting) {
					delta /= 2; // 如果正在删除文本，则减少延迟时间
				}

				if (!this.isDeleting && this.txt === fullTxt) {
					delta = this.period; // 如果已经完全显示文本，则将延迟时间设置为固定的周期
					this.isDeleting = true; // 切换到删除文本的状态
				} else if (this.isDeleting && this.txt === '') {
					this.isDeleting = false; // 切换回添加文本的状态
					this.loopNum++; // 增加循环次数
					delta = 500; // 设置删除完整文本后的延迟时间
				}

				setTimeout(() => {
					that.tick(); // 递归调用 tick() 函数，进行下一次文本更新
				}, delta);
			}

		}
	}
</script>

<style>
	body {
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.buttons-container {
		display: flex;
		/* 使用Flex布局 */
		justify-content: center;
		/* 水平居中对齐 */
		gap: 1rem;
		/* 两个按钮之间的间距，根据需要调整 */
	}

	.typewrite>.wrap {
		border-right: 0.08em solid #fff;
	}

	.wave {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg)
		}

		10% {
			transform: rotate(14deg)
		}

		20% {
			transform: rotate(-8deg)
		}

		30% {
			transform: rotate(14deg)
		}

		40% {
			transform: rotate(-4deg)
		}

		50% {
			transform: rotate(10deg)
		}

		60% {
			transform: rotate(0deg)
		}

		to {
			transform: rotate(0deg)
		}
	}

	.pict {
		box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
		-webkit-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
		-moz-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
	}

	.fadein-up {
		opacity: 0;
		animation-name: fadeInUp;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		animation-delay: 500ms;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 15px, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	.fade-in-from-left {
		opacity: 0;
		animation: fadeInLeft 0.5s ease-out forwards;
		animation-delay: 500ms;
	}

	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}

		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.fadein-right {
		opacity: 0;
		animation: fadeInRight 0.5s ease-out forwards;
		animation-delay: 500ms;
	}

	@keyframes fadeInRight {
		0% {
			opacity: 0;
			transform: translateX(100%);
		}

		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.fadein-bot {
		opacity: 0;
		animation: fadeInBot 0.5s forwards;
	}

	@keyframes fadeInBot {
		from {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	.fadein-1 {
		animation-delay: 200ms;
	}

	.fadein-2 {
		animation-delay: 400ms;
	}

	.fadein-3 {
		animation-delay: 600ms;
	}

	.fade-500 {
		animation-delay: 500ms;
	}
</style>
