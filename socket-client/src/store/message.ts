import { writable } from 'svelte/store';

type message = {
	id: string;
	message: string;
	type: 'message' | 'join' | 'disconnected';
	name: string;
};
export let id = writable<string>('');
export let messsages = writable<message[]>([]);
