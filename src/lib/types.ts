export enum ProjectCategory {
	GAMES = "Games",
	ANIMATION = "Animation",
}

export type Project = {
	assets: {
		banner: string;
		icon: string;
	};
	main: {
		name: string;
		description: string;
		creation_date: number;
		role: string;
		link: string;
		category: ProjectCategory;
	};
};
