<script lang="ts">
	import { goto } from '$app/navigation';

	import { NAME } from './store/name';

	let ROOM = '';

	let disabled = true;

	$: if (!!ROOM && !!$NAME) {
		disabled = false;
	} else {
		disabled = true;
	}

	const onsubmit = () => {
		goto(`/${ROOM}`);
	};
</script>

<form class="flex flex-col items-center justify-center w-1/2" on:submit|preventDefault={onsubmit}>
	<input
		bind:value={$NAME}
		class="border-2 mt-2 font-bold font-nunito border-black w-full rounded-lg p-2"
		type="text"
		placeholder="name"
	/>
	<input
		bind:value={ROOM}
		class="border-2 mt-2 font-bold font-nunito border-black w-full rounded-lg p-2"
		type="text"
		placeholder="room"
	/>

	<button
		{disabled}
		class="bg-purple-500 disabled:bg-purple-300 hover:bg-purple-600 mt-2 px-2 w-full font-bold transition-all p-2 font-nunito rounded-lg"
		>JOIN</button
	>
</form>
