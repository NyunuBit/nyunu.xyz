<script lang="ts">
	import Modal from "$lib/components/areas/modal.svelte";
	import ProjectModal from "$lib/components/areas/project_modal.svelte";
	import { ProjectCategory } from "$lib/types";
	let dialog: HTMLDialogElement | undefined = $state(undefined);
</script>

<main class="md:m-20 m-2 grow">
	<h1
		class="mb-2 font-pixel-header text-3xl font-bold md:mx-10 md:w-auto w-full md:text-left text-center"
	>
		Projects
	</h1>
	<section
		class="p-2 grid gap-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-black/20 border border-text/5 rounded-b-default-round"
	>
		<ProjectModal
			bind:dialog
			project={}
		></ProjectModal>
		<button
			onclick={() => dialog?.showModal()}
			class="rounded-default-round bg-background border p-2 aspect-square flex flex-col cursor-pointer items-stretch text-left border-text/5 hover:border-text/15"
		>
			<div
				style="background-image: url('https://as2.ftcdn.net/jpg/02/18/72/73/1000_F_218727336_yFWOEXi4dqc01tCWSNZg2JSa0TPHtz4h.webp');"
				class="w-full aspect-video bg-cover bg-no-repeat mb-3"
				role="img"
				aria-label="title"
			></div>
			<p class="text-primary italic">Type</p>
			<h1 class="font-pixel-header font-bold text-4xl">Lorum Ipsum</h1>
			<p class="text-text/70 text-[18px]">
				Quick description, short short
			</p>
		</button>
	</section>
</main>
