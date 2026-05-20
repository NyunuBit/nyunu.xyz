export enum ProjectCategory {
	GAMES = "Games",
	ANIMATION = "Animation",
}

export type Project = {
	banner_path: URL;
	icon_path: URL;
	name: string;
	description: string;
	creation_date: number;
	role: string;
	url: string;
	category: ProjectCategory;
};
