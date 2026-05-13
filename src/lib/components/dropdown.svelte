<script lang="ts">
	let { children } = $props();
</script>

<button
	class="py-px px-2 rounded-[5px] hover:bg-text-50/15 text-text-50/80 hover:text-text-50 cursor cursor-pointer"
>
	{@render children?.()}
</button>
