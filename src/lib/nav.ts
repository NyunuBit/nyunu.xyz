import { House, Rocket, Store, Phone, type LucideProps } from "@lucide/svelte";
import type { Component } from "svelte";

export let NavButtons: {
	name: string;
	path: string;
	icon: Component<LucideProps>;
}[] = [
	{
		name: "Home",
		path: "/",
		icon: House,
	},
	{
		name: "Projects",
		path: "/projects",
		icon: Rocket,
	},
	{
		name: "Commisions",
		path: "/comms",
		icon: Store,
	},
	{
		name: "Contact",
		path: "/contact",
		icon: Phone,
	},
];
