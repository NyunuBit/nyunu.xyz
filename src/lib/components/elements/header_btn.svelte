<script lang="ts">
	let { children } = $props();
</script>

<li
	class="border-b border-t flex flex-row group-hover:gap-2 transition-[gap] gap-0 hover:bg-text/5 text-text/70 hover:text-text p-3 border-text/10"
>
	{@render children?.()}
</li>
