<script lang="ts">
	import Logo from "$lib/assets/logo.svg";
	import type { Component } from "svelte";
	import {
		Music,
		Gamepad,
		Diamond,
		Film,
		Code,
		Pencil,
		Store,
		Phone,
		type LucideProps,
	} from "@lucide/svelte";

	let skills: { name: string; path: string; icon: Component<LucideProps> }[] =
		[
			{
				name: "Music",
				path: "",
				icon: Music,
			},
			{
				name: "Games",
				path: "",
				icon: Gamepad,
			},
			{
				name: "Animations",
				path: "",
				icon: Diamond,
			},
			{
				name: "Video Editing",
				path: "",
				icon: Film,
			},

			{
				name: "Programming",
				path: "",
				icon: Code,
			},
			{
				name: "Art",
				path: "",
				icon: Pencil,
			},
		];

	let cta_buttons: {
		name: string;
		path: string;
		icon: Component<LucideProps>;
	}[] = [
		{
			name: "Contact",
			path: "/contact",
			icon: Phone,
		},
		{
			name: "Commisions",
			path: "/comms",
			icon: Store,
		},
	];
</script>

<!-- hero -->
<div
	class=" w-full bg-[url('https://i.pinimg.com/1200x/df/f9/db/dff9db4ef3dd6e91b4e6f3130fd7dd0c.jpg')] bg-cover bg-no-repeat h-screen"
>
	<div
		class="p-1 w-full h-full bg-background/50 backdrop-blur-2xl flex justify-center items-center"
	>
		<div
			class="border-2 bg-background border-background max-w-157.5 w-full max-h-157.5 h-full rounded-default-round"
		>
			<div
				class="w-full h-80 p-3 bg-[url('https://i.pinimg.com/1200x/df/f9/db/dff9db4ef3dd6e91b4e6f3130fd7dd0c.jpg')] rounded-default-round"
			>
				<p class="font-pixel-header text-7xl md:text-left text-center">
					Nyunu
				</p>
			</div>
			<div class="px-9 py-4 flex h-75 justify-between flex-col">
				<p class="text-text/75 mb-2">
					I'm <span class="text-accent font-black">Nyunu</span>, but
					you can call me
					<span class="text-accent font-black">Ny</span>. And i do:
				</p>
				<div
					class="w-full grid grid-cols-2 border-b border-text/20 pb-8"
				>
					{#each skills as skill}
						{@const Icon = skill.icon}
						<a
							class="flex gap-2 m-1 rounded-default-round hover:bg-text/10"
							href={skill.path}
						>
							<Icon class="w-4"></Icon>
							<p>{skill.name}</p></a
						>
					{/each}
				</div>
				<div class="w-full grid grid-cols-2 pb-2">
					{#each cta_buttons as cta}
						{@const Icon = cta.icon}
						<a
							class="flex gap-2 m-1 rounded-default-round hover:bg-primary/30"
							href={cta.path}
						>
							<Icon class="w-4"></Icon>
							<p class="font-bold">{cta.name}</p></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
