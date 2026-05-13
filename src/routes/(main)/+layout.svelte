<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/areas/header.svelte";
	import Footer from "$lib/components/areas/footer.svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header></Header>
{@render children()}
<Footer></Footer>
