<script>
	import { onMount } from 'svelte';
	import Marqueeck from '@arisbh/marqueeck';

	let currentTime = '';

	let marqueeMessage = `-------------------
	You have arrived at Kauhaut Station! Enjoy your visit and remember to
	stay hydrated because hydration is essential for maintaining health, supporting physical
	and mental performance, and ensuring the body operates efficiently. Making hydration a priority
	can have a positive impact on your overall well-being. Ever heard of a successful, dehydrated
	entrepreneur? Me neither. It's not that hard either. Just get up from your chair and drink a
	big glass of juicy, rejuvenating water. Do it right now, I'll be waiting for you here ..........................................................................................................................................................................................................
	why are you still here? Please consider my advice. I promise you will feel way better after drinking
	something. I'm going to patiently wait here, but now go..........................................................................................................................................................................................................................................................................................................................................
	Listen to me you little shit, do you even understand what I am trying to do
	here for you? Probably not with that shriveled, dry brain of yours. You know what? Don't drink
	that glass of water. In fact, do not drink any more water. Ever. It would be a waste anyway.
	That's right, YOU ARE WASTE. You unthankful piece of ********** ******* of a ********************
	with a *********** as a ***************** -`;

	const updateTime = () => {
		const now = new Date();
		currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	const startClock = () => {
		updateTime();
		setInterval(updateTime, 60000);
	};

	onMount(() => {
		startClock();
	});
</script>

<div class="marquee w-11/12 py-4 flex flex-col md:flex-row flex-wrap items-center text-background rounded mb-5">
	<div class="p-2 flex flex-col text-center xl:w-1/12">
		<p class="opacity-70 font-bold">タイム</p>
		<p class="time md:text-2xl">{currentTime}</p>
	</div>
	<div class="md:px-20 flex flex-col text-center w-10/12 xl:w-11/12">
		<p class="opacity-70 font-bold">ニュース</p>
		<div class="md:text-3xl w-full h-full flex items-center justify-center">
			<Marqueeck options={{ direction: 'left', speed: 140 }}>
				<p class="marquee-text">{marqueeMessage}</p>
			</Marqueeck>
		</div>
	</div>
</div>

<style>
	.marquee {
		background-color: #08060a;
		overflow: hidden;
		position: relative;
		font-family: 'Chocolate Classical Sans', sans-serif;
	}

    .marquee-text {
		font-family: 'Tiny5', sans-serif;
        color: #55d20c;
    }

	.time {
		font-family: 'Jersey 20 Charted', sans-serif;
	}

    @keyframes marquee {
        0% {
            transform: translateX(100%); /* Start from right */
        }
        100% {
            transform: translateX(-100%); /* Move to left */
        }
    }
</style>