import { loadProjects } from "$lib/utils";

export const load = async () => {
	const projects = await loadProjects(true);
	return { projects };
};
