<template>
	<div class="max-w-7xl mx-auto flex flex-col relative">
		<nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
			<div class="container mx-auto flex flex-wrap items-center justify-between">
				<button @click="redirectToHome" class="flex">
					<span
						class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
							<path fill="#ffffff"
								d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" />
						</svg>
					</span>
				</button>
				<div class="flex md:order-2 fadein-bot">

				</div>
				<div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
					<ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
						<li>
							<router-link to="/"
								class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
								My Profile
							</router-link>
						</li>
						<li>
							<router-link to="/resume"
								class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
								Resume
							</router-link>
						</li>
						<li>
							<router-link to="/portfolio"
								class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
								Portfolio
							</router-link>
						</li>
						<li>
							<router-link to="/current"
								class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
								Current Research
							</router-link>
						</li>
						<li>
							<router-link to="/blog"
								class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
								Blog
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		redirectToHome() {
			this.$router.push('/')
		}
	},
}
</script>

<style>
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

::-webkit-scrollbar {
	width: 5px;
	/* for vertical scrollbar */
	height: 5px;
	/* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
	background: hsl(240, 1%, 17%);
	border-radius: 5px;
}

::-webkit-scrollbar-thumb {
	background: #ffdb70;
	border-radius: 5px;
}

::-webkit-scrollbar-button {
	width: 20px;
}

body {
	font-family: 'Poppins', sans-serif;
	background: hsl(0, 0%, 7%);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100vh;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	transition: color 0.3s;
}

nav a.router-link-exact-active {
	display: inline-flex;
	flex-direction: column;
	color: white;
	transition: color 0.3s;
}

nav a.router-link-exact-active::after {
	display: inline-block;
	content: "";
	margin-top: 0.08em;
	width: 100%;
	height: 4px;
	border-radius: 2px;
	background-color: #ffdb70;
}

nav a.router-link-exact-active:hover {
	color: white;
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
</style>
