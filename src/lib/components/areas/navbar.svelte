<script lang="ts">
	import NavBarButton from "$lib/components/elements/navbar_btn.svelte";
	import {
		House,
		Rocket,
		Store,
		Phone,
		type LucideProps,
	} from "@lucide/svelte";
	import type { Component } from "svelte";

	let buttons: {
		name: string;
		path: string;
		icon: Component<LucideProps>;
	}[] = [
		{
			path: "Home",
			name: "/",
			icon: House,
		},
		{
			path: "Projects",
			name: "/projects",
			icon: Rocket,
		},
		{
			path: "Commisions",
			name: "/comms",
			icon: Store,
		},
		{
			path: "Contact",
			name: "/contact",
			icon: Phone,
		},
	];
</script>

<ul
	class="overflow-hidden z-40 hidden md:flex flex-col group rounded-default-round duration-250 shadow-xl/30 bg-background"
>
	{#each buttons as button}
		{@const Icon = button.icon}
		<NavBarButton path={button.path}>
			{#snippet children()}
				<a
					href="/"
					class="flex transition-[gap] gap-0 group-hover:gap-2"
				>
					<Icon></Icon>
					<p
						class="size-full duration-250 group-hover:w-auto group-hover:opacity-100 w-0 opacity-0"
					>
						{button.name}
					</p>
				</a>
			{/snippet}
		</NavBarButton>
	{/each}
</ul>
