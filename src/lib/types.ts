export enum ProjectCategory {
	GAMES,
	ANIMATION,
}

export type Project = {
	name: string;
	description: string;
	creation_date: number;
	role: string;
	category: ProjectCategory;
};
