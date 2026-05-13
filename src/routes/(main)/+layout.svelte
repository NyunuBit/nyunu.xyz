<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header></Header>
<div style="height: calc(100vh - 84px)" class="w-screen p-1">
	{@render children()}
</div>
<Footer></Footer>
