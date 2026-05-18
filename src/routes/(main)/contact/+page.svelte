<script>
	import Button from "$lib/components/elements/button.svelte";
</script>

<main
	class="grow m-2 p-2 bg-text/5 overflow-hidden flex justify-center items-center rounded-default-round border border-text/10"
>
	<section
		class="bg-background rounded-default-round p-10 flex gap-5 border border-text/15"
	>
		<img
			src="https://avatars.githubusercontent.com/u/276165088"
			alt="icon"
			class="rounded-full border-text/10 shadow-2xs"
			width="256"
		/>

		<div class="min-h-[20%] border-l border-text/20"></div>

		<div class="flex justify-center flex-col">
			<header class="mb-5">
				<h1 class="text-5xl font-pixel-header">Contact</h1>
				<p class="text-text/80 max-w-90">
					Here are the places where you can <span class="font-bold"
						>contact</span
					> me!
				</p>
			</header>
			<footer class="grid grid-cols-3">
				<Button style="secondary"></Button>
			</footer>
		</div>
	</section>
</main>
