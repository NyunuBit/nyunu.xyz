<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import Button from "../elements/button.svelte";
	import { X } from "@lucide/svelte";

	let {
		dialog,
		open = false,
		header,
		children,
		id,
	}: {
		dialog?: HTMLDialogElement;
		open?: boolean;
		header?: Snippet;
		children?: Snippet;
		id?: string;
	} = $props();

	onMount(() => {
		if (!dialog) return;

		if (open) {
			dialog.showModal();
		}
	});
</script>

<dialog
	bind:this={dialog}
	{id}
	class=" p-3 bg-background text-text border border-text/20 *:focus:outline-0 left-[50%] top-[50%] animate-popup backdrop:animate-fade rounded-default-round backdrop:bg-background/50 backdrop:backdrop-grayscale-100"
>
	<div>
		<header>
			{@render header?.()}
			<Button onclick={() => dialog?.close()} style="ghost">
				<X></X>
			</Button>
		</header>
		<main>
			{@render children?.()}
		</main>
	</div>
</dialog>
