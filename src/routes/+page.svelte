<script>
	import Mobile from '../components/Mobile.svelte';
	import Heading from '../components/Heading.svelte';
	import Train from '../components/Train.svelte';
	import Marquee from '../components/Marquee.svelte';
	import Terminal from '../components/Terminal.svelte';
	import Info from '../components/Info.svelte';
	
	import Skyline from '../components/Skyline.svelte';
	import Newspaper from '../components/Newspaper.svelte';
	import Switch from '../components/Switch.svelte';


	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export function createMediaQueryStore(query) {
		const matches = writable(false);

		onMount(() => {
			const mediaQueryList = window.matchMedia(query);
			const updateMatches = () => matches.set(mediaQueryList.matches);

			updateMatches();
			mediaQueryList.addEventListener('change', updateMatches);

			return () => mediaQueryList.removeEventListener('change', updateMatches);
		});

		return matches;
	}

	const isMobile = createMediaQueryStore('(max-width: 640px)');

	let isToggled = true;

	const handleSwitchChange = (newState) => {
		console.log(newState);
		isToggled = newState;
	}
</script>

{#if $isMobile}
	<Mobile />
{:else}
	<div class="fixed bottom-0 right-0 pr-5 pb-5">
		<Switch bind:checked={isToggled} onChange={handleSwitchChange} />
	</div>
	<main class="py-5">
		<div id="station" class="flex flex-col items-center mb-20">
			<Heading />
			<Train />
			<Marquee />
			<Terminal />
			<Info />
		</div>
		<div id="newspaper" class="flex flex-col items-center pt-20 mb-20">
			{#if isToggled}
				<Skyline />
				<Newspaper />
			{/if}
		</div>
		<div id="home" class="pt-20">

		</div>
	</main>
{/if}

<style>
	main {
        background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
	}
</style>