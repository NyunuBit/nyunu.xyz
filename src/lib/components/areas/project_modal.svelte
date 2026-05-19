<script lang="ts">
	import Modal from "./modal.svelte";

	let {
		dialog,
		title,
	}: {
		dialog?: HTMLDialogElement;
		title: string;
	} = $props();
</script>

<Modal {dialog}>
	{#snippet header()}
		<p>{title}</p>
	{/snippet}
</Modal>
