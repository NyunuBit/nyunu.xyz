<script lang="ts">
	import type { Project } from "$lib/types";
	import Button from "../elements/button.svelte";
	import Modal from "./modal.svelte";
	import { ArrowRight, Tag, Calendar, Info } from "@lucide/svelte";

	let {
		dialog = $bindable(),
		project,
	}: {
		dialog?: HTMLDialogElement;
		project: Project;
	} = $props();
</script>

<Modal bind:dialog>
	{#snippet header()}
		<p class="text-xl font-bold">{project.main.name}</p>
	{/snippet}
	{#snippet children()}
		<div class="overflow-y-auto overflow-x-hidden p-2 flex flex-col gap-2">
			<img
				src={project.assets.banner}
				alt="{project.main.name}'s Banner"
			/>
			<div class="flex md:flex-row flex-col justify-between p-2 gap-10">
				<section class="flex-1">
					<h1 class="font-pixel-header text-6xl my-4">
						{project.main.name}
					</h1>
					<p class="text-text/70 mb-10">{project.main.description}</p>
					<div class="grid md:grid-cols-2 gap-2">
						<p
							class="text-text/60 flex gap-2 w-full bg-black/30 p-5 rounded-default-round"
						>
							<Tag></Tag>Role:
							<span class="text-text/80">{project.main.role}</span
							>
						</p>
						<p
							class="text-text/60 flex gap-2 w-full bg-black/30 p-5 rounded-default-round"
						>
							<Calendar></Calendar>Creation Date:
							<span class="text-text/80"
								>{project.main.creation_date}</span
							>
						</p>
						<p
							class="text-text/60 flex gap-2 md:col-span-2 w-full bg-black/30 p-5 rounded-default-round"
						>
							<Info></Info>Category:
							<span class="text-text/80"
								>{project.main.category}</span
							>
						</p>
					</div>
				</section>
				<section>
					<Button
						onclick={() => {
							window.open(project.main.link);
						}}
						class="p-4"
						>Check it out!<ArrowRight class="animate-pulse"
						></ArrowRight></Button
					>
				</section>
			</div>
		</div>
	{/snippet}
</Modal>
