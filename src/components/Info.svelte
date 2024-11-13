<script>
	import Escalator from "$lib/escalator_stairs.png"
	import Toilet from "$lib/toilet.png"
	import Skull from "$lib/skull.png"
	import Escape from "$lib/escape.png"
</script>

<div class="w-9/12 flex justify-evenly">
	<div class="info p-4 flex flex-wrap">
		<div class="flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
			</svg>
			<img src={Escalator} alt="" class="h-16">
		</div>
		<div class="flex ml-4">
			<div class="blue w-3 h-full mr-4"></div>
			<div>
				<p class="text-xl">1-4</p>
				<p class="text-sm">Thoughts</p>
			</div>
		</div>
		<div class="flex">
			<div class="green w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">5-6</p>
				<p class="text-sm">Doubts</p>
			</div>
		</div>
		<div class="flex">
			<div class="yellow w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">7-9</p>
				<p class="text-sm">More Doubts</p>
			</div>
		</div>
		<div class="flex">
			<div class="orange w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">8</p>
				<p class="text-sm">Hopes</p>
			</div>
		</div>
		<div class="flex">
			<div class="dark-blue w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">6, 9-12</p>
				<p class="text-sm">Fears</p>
			</div>
		</div>
		<div class="flex">
			<div class="light-green w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">13-99</p>
				<p class="text-sm">Dreams</p>
			</div>
		</div>
		<div class="flex">
			<div class="blue w-3 h-full mx-4"></div>
			<div>
				<p class="text-xl">42</p>
				<p class="text-sm">Meaning</p>
			</div>
		</div>
	</div>
	<div class="info w-4/12 flex flex-wrap">
		<div class="flex items-center w-1/3 pl-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
			</svg>
			<img src={Toilet} alt="" class="h-16">
		</div>
		<div class="flex items-center w-1/3">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
			</svg>
			<img src={Skull} alt="" class="h-16">
		</div>
		<div class="escape green flex justify-center items-center w-1/3 transition-colors duration-300">
			<a href="#newspaper"><img src={Escape} alt="" class="h-16" draggable="false"></a>
		</div>
	</div>
</div>

<style>
    .info {
        border: 3px solid #08060a;
		background-color: #fffefa;
        font-family: 'Chocolate Classical Sans', sans-serif;
    }

    .blue {
        background-color: #7a73ff;
    }

    .green {
        background-color: #55d20c;
    }

	.yellow {
		background-color: #ffe44f;
	}

	.orange {
		background-color: #ffa44f;
	}

	.dark-blue {
        background-color: #3b32fc;
	}

	.light-green {
		background-color: #afff73;
	}
	
	.escape:hover {
		background-color: #13a400;
		cursor: pointer;
	}

</style>