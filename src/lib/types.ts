export enum ProjectCategory {
	GAMES = "Games",
	ANIMATION = "Animation",
}

// TODO: maybe find another type for type for path, if available
export type Project = {
	banner_path: string;
	icon_path: string;
	name: string;
	description: string;
	creation_date: number;
	role: string;
	url: string;
	category: ProjectCategory;
};
