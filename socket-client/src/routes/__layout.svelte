<script>
	import '../app.css';
	const TITLE = 'WEBSOCKET-CHAT-TEST';
</script>

<div class="w-screen h-screen overflow-hidden flex flex-col">
	<h1 class="text-[100px] text-center font-nunito">{TITLE}</h1>

	<div class="flex flex-col items-center justify-center w-full">
		<slot />
	</div>
</div>
