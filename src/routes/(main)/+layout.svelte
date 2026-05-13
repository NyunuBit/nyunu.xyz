<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/components/areas/footer.svelte";
	import Navbar from "$lib/components/areas/navbar.svelte";
	import Header from "$lib/components/areas/header.svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header></Header>
<Navbar></Navbar>
{@render children()}
<Footer></Footer>
