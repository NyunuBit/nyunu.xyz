import type { Project } from "./types";
import toml from "toml";

export async function loadProjects(featured?: boolean) {
	try {
		const raw_projects: Record<string, unknown> = import.meta.glob(
			"/src/content/toml/projects/*.toml",
			{
				eager: true,
				query: "?raw",
				import: "default",
			},
		);

		let projects: Project[] = [];

		for (const project in raw_projects) {
			if (featured != undefined && !project.endsWith("-featured.toml"))
				continue;
			projects.push(toml.parse(raw_projects[project] as string));
		}

		return projects;
	} catch (err) {
		console.error(`Error opening project directory: ${err}`);
		return undefined;
	}
}
