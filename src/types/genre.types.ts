import { MoviesType } from "./movie.types";

export type GenreType = {
	id: string;
	name: string;
};

export type GenreTypes = GenreType[];

export type GenreTypeResponse = {
	genres: GenreTypes;
};

export type GenreResponse = {
	page: number;
	results: MoviesType;
	total_pages: number;
	total_results: number;
};
