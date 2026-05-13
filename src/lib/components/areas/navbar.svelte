<script lang="ts">
	import NavBarButton from "$lib/components/elements/navbar_btn.svelte";
	import { House, Rocket, Store, Phone } from "@lucide/svelte";
</script>

<div class=" absolute p-3 flex items-center">
	<ul
		class="overflow-hidden flex flex-col group rounded-default-round duration-250 shadow-xl/30 bg-background"
	>
		<NavBarButton path="/">
			{#snippet children()}
				<House></House>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/">Home</a
				>
			{/snippet}
		</NavBarButton>
		<NavBarButton path="/projects">
			{#snippet children()}
				<Rocket></Rocket>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/projects">Projects</a
				>
			{/snippet}
		</NavBarButton>
		<NavBarButton path="/comms">
			{#snippet children()}
				<Store></Store>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/comms">Commisions</a
				>
			{/snippet}
		</NavBarButton>
		<NavBarButton path="/contact">
			{#snippet children()}
				<Phone></Phone>
				<a
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					href="/contact">Contact</a
				>
			{/snippet}
		</NavBarButton>
	</ul>
</div>
