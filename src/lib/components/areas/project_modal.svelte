<script lang="ts">
	import Modal from "./modal.svelte";

	let {
		dialog = $bindable(),
		title,
	}: {
		dialog?: HTMLDialogElement;
		title: string;
	} = $props();
</script>

<Modal bind:dialog>
	{#snippet header()}
		<p>{title}</p>
	{/snippet}
</Modal>
