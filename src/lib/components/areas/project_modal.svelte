<script lang="ts">
	import type { Project } from "$lib/types";
	import Modal from "./modal.svelte";

	let {
		dialog = $bindable(),
		project,
	}: {
		dialog?: HTMLDialogElement;
		project: Project;
	} = $props();
</script>

<Modal bind:dialog>
	{#snippet header()}
		<p>{project.name}</p>
	{/snippet}
	{#snippet children()}
		<h1>{project.name}</h1>
	{/snippet}
</Modal>
