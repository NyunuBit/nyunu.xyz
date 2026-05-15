<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/components/areas/footer.svelte";
	import Navbar from "$lib/components/areas/navbar.svelte";
	import Header from "$lib/components/areas/header.svelte";
	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} /><title>Nyunu's website</title>
</svelte:head>

<Header></Header>
<div class="fixed z-40 p-3 flex items-center">
	<Navbar></Navbar>
</div>
{@render children()}

<Footer></Footer>
