<script lang="ts">
	import HeaderButton from "$lib/components/elements/header_btn.svelte";
	import { House, Rocket, Store, Phone } from "@lucide/svelte";
</script>

<div class="h-screen absolute p-3 flex items-center">
	<ul
		class="overflow-hidden flex flex-col group rounded-default-round duration-250 shadow-xl/30 bg-background"
	>
		<HeaderButton>
			{#snippet children()}
				<House></House>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/">Home</a
				>
			{/snippet}
		</HeaderButton>
		<HeaderButton>
			{#snippet children()}
				<Rocket></Rocket>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/">Project</a
				>
			{/snippet}
		</HeaderButton>
		<HeaderButton>
			{#snippet children()}
				<Store></Store>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/">Commisions</a
				>
			{/snippet}
		</HeaderButton>
		<HeaderButton>
			{#snippet children()}
				<Phone></Phone>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/">Contact</a
				>
			{/snippet}
		</HeaderButton>
	</ul>
</div>
