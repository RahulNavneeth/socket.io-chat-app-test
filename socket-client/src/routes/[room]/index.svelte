<script context="module">
	import { NAME } from '../store/name';

	export const load = async () => {
		if (get(NAME).length) {
			return {
				props: {
					name: get(NAME)
				}
			};
		} else {
			return {
				status: 301,
				redirect: '/'
			};
		}
	};
</script>

<script lang="ts">
	import { messsages } from '../store/message';
	import io from 'socket.io-client';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	const { room } = $page.params;

	export let name: string = '';

	const socket = io('http://localhost:3001');

	socket.on(`message-${$page.params.room}`, (data) => {
		$messsages = [...$messsages, data];
	});

	let MESSAGE: string = '';

	const onSubmit = () => {
		socket.emit('message', { message: MESSAGE, room: room, name });
		MESSAGE = '';
	};
</script>

<h1 class="text-[50px] font-nunito">WELCOME TO - {room}, {name}</h1>
<form class="flex flex-row w-full items-center justify-center" on:submit|preventDefault={onSubmit}>
	<input
		bind:value={MESSAGE}
		class="border-2 font-nunito border-black w-1/2 rounded-lg p-2"
		type="text"
		placeholder="Message"
	/>

	<button class="border-2 border-black p-2 font-nunito rounded-lg">SEND</button>
</form>

<div class="flex flex-col my-4 h-fit items-center  w-1/2 justify-center">
	{#each $messsages as message, k}
		{#if message.type === 'message'}
			<div
				class="flex flex-col my-4 {message.name === name
					? 'items-end'
					: 'items-start'} w-full justify-center"
			>
				<div class="w-fit">
					<div
						class="w-full flex font-nunito {message.name !== name
							? 'text-left'
							: 'text-right'} flex-col"
					>
						{message.name === name ? 'You' : message.name}
					</div>
					<div
						class="w-fit font-nunito {message.name === name
							? ' bg-blue-500 font-bold rounded-lg p-2'
							: `bg-emerald-500 font-bold rounded-lg p-2`}"
					>
						{message.message}
					</div>
				</div>
			</div>
		{:else if message.type === 'join' || message.type === 'disconnected'}
			<div>
				{message.name} - {message.message}
			</div>
		{/if}
	{:else}
		No messages yet :(
	{/each}
</div>
