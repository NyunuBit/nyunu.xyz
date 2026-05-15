<script lang="ts">
	import Logo from "$lib/assets/logo-white.svg";
	import { NavButtons } from "./nav";
</script>

<header
	class="p-1 top-0 bottom-0 z-50 sticky w-full bg-background gap-2 flex items-center"
>
	<a
		href="/straw"
		class="flex rounded-default-round hover:bg-text/10 p-1 size-8"
	>
		<img src={Logo} alt="logo" width="32" />
	</a>
	<div class="text-text/50 flex overflow-x-auto overflow-y-hidden">
		<p class="hidden md:block">Commisions closed</p>
		{#each NavButtons as button}
			<a
				href={button.path}
				class="text-text/70 block md:hidden hover:text-text mx-2 hover:bg-text/10"
			>
				{button.name}
			</a>
		{/each}
	</div>
</header>
