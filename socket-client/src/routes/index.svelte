<script lang="ts">
	import { goto } from '$app/navigation';

	import { NAME } from './store/name';

	let ROOM = '';

	const onsubmit = () => {
		goto(`/${ROOM}`);
	};
</script>

<form class="flex flex-col items-center justify-center w-full" on:submit|preventDefault={onsubmit}>
	<input
		bind:value={$NAME}
		class="border-2 font-nunito border-black w-1/2 rounded-lg p-2"
		type="text"
		placeholder="NAME"
	/>
	<input
		bind:value={ROOM}
		class="border-2 font-nunito border-black w-1/2 rounded-lg p-2"
		type="text"
		placeholder="ROOMNAME"
	/>

	<button class="border-2 border-black p-2 font-nunito rounded-lg">SEND</button>
</form>
