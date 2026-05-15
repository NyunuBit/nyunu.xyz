<script lang="ts">
	let {
		children,
		style,
		onclick,
		class: class_var,
	}: {
		children: any;
		style?: string;
		onclick?: () => void;
		class?: string;
	} = $props();

	let styles: { [key: string]: string } = {
		default: "bg-primary hover:bg-primary/90",
	};
</script>

<button
	{onclick}
	class="{style == null
		? styles.default
		: styles[
				style
			]} {class_var} flex gap-2 rounded-default-round cursor-pointer p-1"
>
	{@render children()}
</button>
