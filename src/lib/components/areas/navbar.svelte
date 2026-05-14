<script lang="ts">
	import NavBarButton from "$lib/components/elements/navbar_btn.svelte";
	import { NavButtons } from "./nav";
</script>

<ul
	class="overflow-hidden z-40 hidden md:flex flex-col group rounded-default-round duration-250 shadow-xl/30 bg-background"
>
	{#each NavButtons as button}
		{@const Icon = button.icon}
		<NavBarButton path={button.path}>
			{#snippet children()}
				<a
					href={button.path}
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
