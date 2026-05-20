<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import Button from "../elements/button.svelte";
	import { X } from "@lucide/svelte";

	let {
		dialog = $bindable(),
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
	class=" bg-background max-w-4xl w-full md:aspect-square md:h-auto h-full text-text border border-text/20 *:focus:outline-0 inset-0 m-auto animate-popup backdrop:animate-fade rounded-default-round backdrop:bg-background/50 backdrop:backdrop-grayscale-100"
>
	<div>
		<header
			class="flex justify-between items-center border-b p-3 border-text/20"
		>
			{@render header?.()}
			<Button onclick={() => dialog?.close()} style="ghost">
				<X></X>
			</Button>
		</header>
		<main class="p-3">
			{@render children?.()}
		</main>
	</div>
</dialog>
