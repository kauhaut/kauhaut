<script>
	import { onMount } from "svelte";

	// Function to generate a random number within a given range
	const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	// Function to generate random buildings with different widths
	const generateRandomBuildings = (count) => {
		const buildings = [];
		const maxBuildingWidth = 60; // Max width of each building
		const minBuildingWidth = 20;  // Min width of each building
		const skylineWidth = 1400;     // Total width of the skyline

		let currentX = 0;

		for (let i = 0; i < count; i++) {
			const width = randomInRange(minBuildingWidth, maxBuildingWidth); // Random width for each building
			const height = randomInRange(50, 150); // Random height between 50 and 150

			// Ensure the next building does not exceed the skyline width
			if (currentX + width > skylineWidth) {
				break; // Stop if adding this building would exceed the total width
			}

			buildings.push({ x: currentX, width, height });
			currentX += width + randomInRange(5, 15); // Increment X position with a small gap
		}

		return buildings;
	};

	const randomWindowColor = () => (Math.random() < 0.2 ? "#9e9320" : "#555");

	let buildings = [];

	// Generate buildings when the component mounts
	onMount(() => {
		buildings = generateRandomBuildings(30); // Generate 30 random buildings
	});
</script>

<div class="w-full pb-20">
	<div class="skyline-container">
		<svg viewBox="0 0 1400 150" class="skyline" xmlns="http://www.w3.org/2000/svg">
			{#each buildings as { x, width, height }}
				<rect x={x} y={150 - height} width={width} height={height} fill="#333" />
				<!-- Optional: Add windows -->
				{#each Array(Math.floor(height / 20)) as _, i}
					<rect x={x + 5} y={150 - (i + 1) * 20} width="10" height="10" fill={randomWindowColor()} />
				{/each}
			{/each}
		</svg>
	</div>
	<div class="city w-full h-8"></div>
</div>


<style>
    /* Container with white background */
    .skyline-container {
        width: 100%;
        display: flex;
        justify-content: center; /* Center the SVG horizontally */
    }

    /* SVG centered with max width */
    .skyline {
        width: 100%;
        height: auto;
    }
	
	.city {
        background-color: #b3b3b3;
    }
</style>