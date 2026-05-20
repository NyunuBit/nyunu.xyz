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
		<p class="text-xl font-bold">{project.name}</p>
	{/snippet}
	{#snippet children()}
		<div class="overflow-y-auto overflow-x-hidden p-2">
			<img src={project.banner_path} alt="{project.name}'s Banner" />
			<h1 class="font-pixel-header text-6xl">{project.name}</h1>
		</div>
	{/snippet}
</Modal>
