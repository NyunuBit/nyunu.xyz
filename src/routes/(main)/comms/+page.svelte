<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/elements/button.svelte";
	import { ExternalLink } from "@lucide/svelte";
</script>

<!-- <main
	class="m-2 grow rounded-default-round border border-text/10 overflow-y-auto overflow-hidden"
></main> -->

<main class="flex flex-col grow justify-center items-center">
	<h1 class="md:text-7xl text-3xl font-pixel-header">
		Commissions are Closed!
	</h1>
	<p class="text-text/50 mb-10">
		Sorry! Come back later when i'm available, for that, <span
			class="font-bold">follow me on social media</span
		>
	</p>
	<Button onclick={() => goto("/contact")}
		><ExternalLink></ExternalLink> Contact</Button
	>
</main>
