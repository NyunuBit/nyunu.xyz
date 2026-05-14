<script lang="ts">
	import NavBarButton from "$lib/components/elements/navbar_btn.svelte";
	import { House, Rocket, Store, Phone } from "@lucide/svelte";
</script>

<ul
	class="overflow-hidden z-40 hidden md:flex flex-col group rounded-default-round duration-250 shadow-xl/30 bg-background"
>
	<NavBarButton path="/">
		{#snippet children()}
			<a href="/" class="flex transition-[gap] gap-0 group-hover:gap-2">
				<House></House>
				<p
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
				>
					Home
				</p>
			</a>
		{/snippet}
	</NavBarButton>
	<NavBarButton path="/projects">
		{#snippet children()}
			<a
				href="/projects"
				class="flex transition-[gap] gap-0 group-hover:gap-2"
			>
				<Rocket></Rocket>
				<p
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
				>
					Projects
				</p>
			</a>
		{/snippet}
	</NavBarButton>
	<NavBarButton path="/comms">
		{#snippet children()}
			<a
				href="/comms"
				class="flex transition-[gap] gap-0 group-hover:gap-2"
			>
				<Store></Store>
				<p
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
				>
					Commisions
				</p>
			</a>
		{/snippet}
	</NavBarButton>
	<NavBarButton path="/contact">
		{#snippet children()}
			<a
				href="/contact"
				class="flex transition-[gap] gap-0 group-hover:gap-2"
			>
				<Phone></Phone>
				<p
					class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
				>
					Contact
				</p>
			</a>
		{/snippet}
	</NavBarButton>
</ul>
