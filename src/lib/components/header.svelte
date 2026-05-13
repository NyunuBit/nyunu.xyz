<script lang="ts">
	import Tab from "./tab.svelte";
	import TabIcon from "./tab_icon.svelte";
	import Dropdown from "./dropdown.svelte";
	import Logo from "$lib/assets/logo-white.svg";
</script>

<div class="p-2 flex items-center gap-2 justify-between max-h-10.5">
	<div class="flex items-center gap-2">
		<TabIcon>
			{#snippet children()}
				<img
					style="fill: var(--color-text-100)"
					src={Logo}
					alt="logo"
					width="32"
				/>
			{/snippet}
		</TabIcon>
		<div class="flex gap-0.5">
			<Dropdown>
				{#snippet children()}
					<p>Nyunu</p>
				{/snippet}
			</Dropdown>
		</div>
		<p class="text-shadow-none text-text-50/30">|</p>
		<div class="flex gap-0.5">
			<Tab>
				{#snippet children()}
					<p>Home</p>
				{/snippet}
			</Tab>
			<Tab>
				{#snippet children()}
					<p>Portfolio</p>
				{/snippet}
			</Tab>
			<Tab>
				{#snippet children()}
					<p>Projects</p>
				{/snippet}
			</Tab>
			<Tab>
				{#snippet children()}
					<p>Contact</p>
				{/snippet}
			</Tab>
		</div>
	</div>
	<button
		class="hover:bg-background-50/10 py-1 px-4 border-2 border-text-50/15 rounded-[10px] cursor-pointer"
	>
		<p>Source Code...</p>
	</button>
</div>
