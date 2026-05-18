<script>
	import { goto } from "$app/navigation";
	import Button from "$lib/components/elements/button.svelte";
	import { X, MessageCircle } from "@lucide/svelte";
</script>

<main
	class="grow m-2 p-2 bg-text/5 overflow-hidden flex justify-center items-center rounded-default-round border border-text/10"
>
	<section
		class="bg-background rounded-default-round flex flex-col border border-text/15"
	>
		<header class="border-b p-2 border-text/10 text-text/50">
			Contacting your local nerd!
		</header>
		<div
			class="md:p-10 p-2 gap-5 md:flex-row flex-col md:items-start items-center flex"
		>
			<img
				src="https://avatars.githubusercontent.com/u/276165088"
				alt="icon"
				class="rounded-full aspect-square! border-text/10 shadow-2xs"
				width="256"
			/>

			<div class="min-h-[20%] border-l border-text/20"></div>

			<div
				class="flex justify-center md:items-start items-center flex-col"
			>
				<header class="mb-5 gap-2 flex flex-col">
					<h1
						class="text-5xl font-pixel-header md:text-left text-center"
					>
						"Hello, Nyunu!"
					</h1>
					<p class="text-text/80 max-w-90 md:text-left text-center">
						Here are the places where you can <span
							class="font-bold">contact</span
						> me!
					</p>
				</header>
				<footer
					class="bg-black/70 p-2 rounded-default-round border border-text/10 text-xl"
				>
					<p class="text-text/75">
						{"{"}
					</p>
					<p class="text-text/75">
						<span class="text-primary font-bold ml-10"
							>"Bluesky"</span
						>:
						<a
							href="https://bsky.app/profile/nyunu.bsky.social"
							class="underline text-accent hover:text-accent/90"
							>{'"nyunu.bsky.social"'}</a
						>,
					</p>

					<p class="text-text/75">
						<span class="text-primary font-bold ml-10"
							>"X_Twitter"</span
						>:
						<a
							href="https://x.com/nyunusin"
							class="underline text-accent hover:text-accent/90"
							>{'"@nyunusin"'}</a
						>,
					</p>
					<p class="text-text/75">
						{"}"}
					</p>
				</footer>
			</div>
		</div>
	</section>
</main>
