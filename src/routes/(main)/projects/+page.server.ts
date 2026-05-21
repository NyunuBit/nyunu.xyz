import toml from "toml";

export const load = async () => {
	try {
		const projects = import.meta.glob("static/toml/projects/*.toml");

		return {
			projects,
		};
	} catch (err) {
		console.error("Error reading directory", err);
	}
};
