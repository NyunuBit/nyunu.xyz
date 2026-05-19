<script lang="ts">
	import HeroBanner from "$lib/assets/hero_banner.png";
	import { Mouse, Rocket } from "@lucide/svelte";
	import type { Component } from "svelte";
	import { goto } from "$app/navigation";
	import {
		Music,
		Gamepad,
		ExternalLink,
		Film,
		Code,
		Pencil,
		Store,
		Phone,
		type LucideProps,
	} from "@lucide/svelte";
	import Button from "$lib/components/elements/button.svelte";

	let skills: { name: string; path: string; icon: Component<LucideProps> }[] =
		[
			{
				name: "Music",
				path: "",
				icon: Music,
			},
			{
				name: "Games",
				path: "https://nyunu.itch.io/",
				icon: Gamepad,
			},
			{
				name: "Audiovisual",
				path: "https://www.youtube.com/@nyunusin",
				icon: Film,
			},

			{
				name: "Programming",
				path: "https://github.com/NyunuBit",
				icon: Code,
			},
			{
				name: "Art",
				path: "https://bsky.app/profile/nyunu.bsky.social",
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
			name: "Commissions",
			path: "/comms",
			icon: Store,
		},
		{
			name: "Projects",
			path: "/projects",
			icon: Rocket,
		},
	];
</script>

<!-- hero -->
<section
	style="background-image: url({HeroBanner});"
	class="w-full bg-cover bg-no-repeat md:rounded-b-[64px] md:h-auto h-200 overflow-hidden"
>
	<div
		class=" w-full h-full bg-background/50 backdrop-blur-2xl md:p-20 p-2 flex flex-col gap-20 justify-center items-center"
	>
		<div
			class="border-2 bg-background border-background max-w-157.5 w-full sm:max-h-157.5 max-h-200 h-full rounded-default-round"
		>
			<div
				style="background-image: url({HeroBanner});"
				class="w-full h-80 p-8 bg-right bg-no-repeat bg-cover rounded-default-round"
			>
				<p
					class="font-pixel-header text-7xl text-accent text-shadow-lg text-left"
				>
					Nyunu
				</p>
			</div>
			<div class="px-9 py-4 flex h-75 justify-between flex-col">
				<p class="text-text/75 mb-2">
					I'm <span class="text-accent font-black">Nyunu</span>, but
					you can call me
					<span class="text-accent font-black">Ny</span>. I'm 16 and i
					do:
				</p>
				<div
					class="w-full grid sm:grid-cols-2 border-b border-text/20 pb-8"
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
				<div class="w-full grid sm:grid-cols-3 pb-2 md:pt-0 pt-4">
					{#each cta_buttons as cta}
						{@const Icon = cta.icon}
						<a
							class="flex gap-2 m-1 rounded-default-round hover:bg-primary/80 border-b-2 border-secondary/50 hover:border-background/0 duration-100 p-2"
							href={cta.path}
						>
							<Icon class="w-4"></Icon>
							<p class="font-bold">{cta.name}</p></a
						>
					{/each}
				</div>
			</div>
		</div>

		<!-- <div class="gap-2 sm:flex hidden animate-bounce">
			<Mouse></Mouse>
			<span class="text-text/50">|</span> Scroll for more.
		</div> -->
	</div>
</section>

<!-- comms ad -->
<section
	class="lg:py-10 lg:px-30 p-4 m-1 flex gap-10 flex-row bg-accent text-background items-center mb-10 justify-between border-b border-text/10 rounded-default-round"
>
	<div class="flex gap-2 items-center">
		<h1
			class="font-pixel-header font-bold md:text-7xl text-4xl shadow-none!"
		>
			Open Commissions!
		</h1>
	</div>
	<Button
		class="p-3 bg-background! hover:bg-background/60! duration-200 border-3  border-background  text-text"
		onclick={() => {
			goto("/comms");
		}}
	>
		<p class="lg:block hidden">Secure your slot!</p>
		<ExternalLink class="lg:hidden block"></ExternalLink>
	</Button>
</section>

<!-- demo reel -->
<section
	class="xl:px-70 xl:py-10 p-4 md:mx-20 m-1 flex flex-col gap-5 items-center border-b border-text/10 rounded-default-round justify-center"
>
	<h1
		class="font-pixel-header font-bold md:text-9xl text-5xl md:text-center text-left"
	>
		Demo Reel <span class="italic text-accent">26</span>
	</h1>
	<p class="text-text/75 mb-4 max-w-156 w-full md:text-center text-left">
		Every year, i'll <span class="text-text/50">(try)</span> to prepare a video
		containing a summary of all of my work in a quick and flashy manner!
	</p>
	<div class="border max-w-100 w-full border-t border-text/20"></div>
	<video controls src="" class="aspect-video max-w-300 w-full bg-black">
		<track kind="captions" />
	</video>
</section>

<!-- featured projects -->
<section
	class="xl:py-10 py-10 xl:mx-40 mx-0 flex md:flex-row flex-col items-center md:justify-between justify-center border-b border-text/10 rounded-default-round"
>
	<div
		class="flex justify-center items-center md:items-start gap-5 flex-col m-6"
	>
		<h1
			class="font-pixel-header md:text-left text-center md:text-7xl text-5xl"
		>
			Featured Projects
		</h1>
		<div class="max-w-100 w-full border-t border-text/20"></div>

		<p
			class=" max-w-100 w-full text-text/70 md:text-left text-center mb-10"
		>
			Here's brief mentions of the projects i think i did my <span
				class="font-bold text-accent">BEST</span
			>!
		</p>

		<Button
			onclick={() => {
				goto("/projects");
			}}
		>
			<ExternalLink class="w-5"></ExternalLink>
			<p>View more!</p>
		</Button>
	</div>
	<div class="border border-text/20 bg-text/5 rounded-default-round">
		<header
			class="w-full rounded-default-round border-b border-text/20 p-1"
		>
			<p class="text-text/50 shadow-none! xl:text-center text-left">
				Featured Projects!
			</p>
		</header>
		<div
			class="grid grid-cols-2 sm:grid-cols-4 md:w-auto w-full h-full md:p-5"
		>
			<button
				class="md:w-50 w-40 rounded-default-round p-2 flex flex-col cursor-pointer gap-2 hover:bg-text/19"
			>
				<div
					style="background-image: url('');"
					class="aspect-square w-full bg-cover bg-center bg-no-repeat border border-text/20"
				></div>
				<p class="w-full md:text-[18px] text-[12px]">name</p>
			</button>
		</div>
	</div>
</section>

<!-- Contact -->
<section
	class="xl:py-10 xl:px-40 px-2 py-10 xl:gap-10 gap-4 xl:mx-40 flex flex-col items-center justify-center rounded-default-round"
>
	<h1 class="font-pixel-header text-center md:text-7xl text-5xl">
		Contact me!
	</h1>
	<div class="max-w-50 w-full border-t border-text/20"></div>
	<div class="flex *:p-3 gap-2">
		<Button
			onclick={() => {
				goto("/contact");
			}}
		>
			<p>Contact</p>
		</Button>

		<Button
			style="secondary"
			onclick={() => {
				goto("/comms");
			}}
		>
			<p>Commissions</p>
		</Button>
	</div>
</section>

<section
	class="xl:py-5 xl:px-40 p-2 gap-10 xl:mx-40 flex flex-col items-center justify-center border-b border-text/10 rounded-default-round"
>
	<h1 class="font-pixel-header text-text/50 md:text-2xl text-xl">
		Thanks for scrolling :3
	</h1>
</section>
