<script>
  	import Social from "./Social.svelte";
  	import Conversation from "$lib/conversation.png"
	import Ticket from "$lib/ticket.png"
	import Taxi from "$lib/taxi.png"

	const sections = [
		{
			title: "Books",
			description: "A curated selection of book my recommendations.",
			items: [
				"1984 - George Orwell",
				"Sandworm - Andy Greenberg",
				"Animal Farm - George Orwell",
				"The Great Escape - Paul Brickhill",
				"The Denial of Death - Ernest Becker",
				"The Emotional Brain - Joseph LeDoux",
				"Man's Search for Meaning - Viktor Frankl",
				"Anti-Tech Revolution - Theodore Kaczynski",
				"Technological Slavery - Theodore Kaczynski",
				"No Country for Old Men - Cormac McCarthy",
				"An Outline of Psycho-Analysis - Sigmund Freud"
			]
		},
		{
			title: "Music",
			description: "A mix of songs I enjoy; you might discover a gem.",
			items: [
				"Far from Any Road - The Handsome Family",
				"Moonshine Got Me - Daniel Norgren",
				"Drop 'Em Out - Wheeler Walker Jr.",
				"Summersong - The Decemberists",
				"Sound & Color - Alabama Shakes",
				"The Chills - Peter Bjorn and John",
				"Short Change Hero - The Heavy",
				"Nightshift - The Commodores",
				"Gorgeous - Kanye West",
				"Fritzpleasure - alt-J",
				"Losers - Balthazar"
			]
		},
		{
			title: "Games",
			description: "Fav games <3",
			items: [
				"Undertale - tobyfox",
				"Metro Exodus - 4A Games",
				"Resident Evil 7 - CAPCOM",
				"DREDGE - Black Salt Games",
				"Control - Remedy Entertainment",
				"Little Nightmares - Tarsier Studios",
				"Alien: Isolation - Creative Assembly",
				"Alan Wake - Remedy Entertainment",
				"Fears to Fathom (1-5) - Rayll Studios",
				"Amnesia: The Bunker - Frictional Games",
				"Red Dead Redemption 2 - Rockstar Games"
			]
		}
	];
</script>

<div class="w-10/12 flex flex-col items-center">
	<div class="text-center relative">
		<header class="font-bold text-5xl uppercase inline-block mb-5">Kauhaut Post</header>
		<p class="subhead uppercase py-3">Kauhaut, XYZ - Tuesday October 29, 2024 - Three Articles</p>
	</div>
	
	<div class="w-full content flex justify-evenly text-center py-20">
		{#each sections as { title, description, items }}
			<div class="w-1/4">
				<h1 class="text-2xl">{title}</h1>
				<p class="text-sm">{description}</p>
				<ol class="list-decimal py-5">
					{#each items as item}
						<li>{item}</li>
					{/each}
				</ol>
			</div>
		{/each}
	</div>
	<div class="divider border w-11/12"></div>
	<div class="py-10 w-10/12 flex flex-row justify-evenly text-center">
		<div class="w-1/3 border p-4">
			<h1 class="text-xl underline pb-2">A Little About Me</h1>
			<section>
				In the space of the World Wide Web to prefer to go by the name <i>kauhaut.</i>
				<br><br>
				<p class="text-left">
					I am a 22-year-old software developer based in Germany. While I find my current role
					both engaging and rewarding, I am eager to expand my horizons by pursuing a degree
					in environmental technology. I am particularly drawn to the potential of this field
					to make a tangible impact, and I am excited about the prospect of merging my
					technical background with sustainable innovation.
				</p>
			</section>
		</div>
		<div class="w-1/3 px-2 flex flex-col justify-center">
			<h1 class="py-4 text-xl underline">Where You Can Find Me</h1>
			<img src={Conversation} alt="" class="m-auto">
			<div class="">
				<Social />
			</div>
		</div>
		<div class="w-1/3 border p-4 flex flex-col items-center">
			<div>
				<h1 class="text-xl underline pb-2">& Challenge Me</h1>
				<ul>
					<li><a class="hover:underline" href="https://lichess.org/">lichess.or</a></li>
					<li><a class="hover:underline" href="https://chess.com/member/blaqmo">chess.com</a></li>
					<br>
				</ul>
			</div>
			<div class="divider border w-11/12 py-5 flex flex-row justify-evenly">
				<a class="hover-effect" href="#station"><img src={Ticket} alt="" class="m-auto h-32"></a>
				<a class="hover-effect" href="#home"><img src={Taxi} alt="" class="m-auto h-32"></a>
			</div>
		</div>
	</div>
</div>

<style>
	header, p, h1, li, section {
        font-family: 'Playfair Display', serif;
	}

    header {
        line-height: 72px;
    }

    .subhead{
        border-bottom: 2px solid #2f2f2f;
        border-top: 2px solid #2f2f2f;
    }

	.hover-effect {
		transition: transform 0.3s ease;
	}

	.hover-effect:hover {
		transform: scale(1.1);
		animation: hover-grow;
	}
</style>