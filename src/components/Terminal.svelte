<script>
	import { onMount } from "svelte";

	let currentTime = ''

	let terminalData = [
		{ status: "ON TIME", time: "10:54", type: "success", info: "-", text: "RESPONSIBILITIES" },
		{ status: "ON TIME", time: "10:55", type: "success", info: "-", text: "HOGWARTS" },
		{ status: "DELAYED", time: "10:56", type: "warning", info: "TECHNICAL ISSUE", text: "GOALS" },
		{ status: "CANCELLED", time: "10:57", type: "cancelled", info: "?", text: "HAPPINESS" },
	];

	function getClass(type) {
		switch(type) {
			case 'cancelled': return 'cancelled';
			case 'normal': return 'normal';
			case 'warning': return 'warning';
			case 'success': return 'success';
			default: return '';
		}
	}

	const updateTime = (minutesAhead) => {
		const futureDate = new Date();
		futureDate.setMinutes(futureDate.getMinutes() + minutesAhead);
		return futureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	const updateTerminalTimes = () => {
		terminalData = terminalData.map((entry, index) => ({
			...entry,
			time: updateTime(5 + index)
		}));
	};

	const startClock = () => {
		updateTerminalTimes();
		setInterval(updateTerminalTimes, 60000);
	};

	onMount(() => {
		startClock();
		updateTerminalTimes();
	});
</script>

<div class="terminal w-11/12 flex flex-col text-background rounded p-4 mb-10">
	<div class="terminal-heading hidden md:flex w-full md:text-2xl px-2 py-1 font-bold opacity-70">
		<div class="flex-1 text-center ">タイム</div>
		<div class="flex-1 text-center">デスティネーション</div>
		<div class="flex-1 text-center">ステータス</div>
		<div class="flex-1 text-center">インフォーメーション</div>
	</div>
	{#each terminalData as { status, time, type, info, text }}
		<div class="flex w-full md:text-2xl md:px-2 py-1">
			<div class="flex-1 text-center">
				<p class="normal">{time}</p>
			</div>
			<div class="flex-1 text-center">
				<p>{text}</p>
			</div>
			<div class="flex-1 text-center">
				<p class={getClass(type)}>{status}</p>
			</div>
			<div class="flex-1 text-center">
				<p class="info">{info}</p>
			</div>
		</div>
		<div class="border opacity-20"></div>
	{/each}
</div>

<style>
	.hide-me {
		display:none;
	}

    .terminal {
        background-color: #08060a;
        font-family: 'Jersey 20 Charted', sans-serif;
    }

	.terminal-heading {
        font-family: 'Chocolate Classical Sans', sans-serif;
	}

    .cancelled {
        color: red;
    }

    .normal {
        color: white;
    }

    .success {
        color: #55d20c;
    }

    .warning {
        color: yellow;
    }

    .info {
        color: #433bff;
    }

    /* Flex properties for column alignment */
    .flex-1 {
        flex: 1; /* Allow each column to grow equally */
        display: flex;
        justify-content: center; /* Center align text horizontally */
        align-items: center; /* Center align text vertically */
        min-width: 0; /* Prevent overflow */
    }
</style>