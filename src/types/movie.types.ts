import { DatesTypes } from "./dates.type";
import { GenreTypes } from "./genre.types";
import {
	ProductionCompaniesType,
	ProductionCountriesType,
	CastNCrewType,
	SpokenLanguagesType,
} from "./people.types";

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: [];
	id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MoviesType = MovieType[];

export type MovieCreditType = {
	cast: MoviesType;
	crew: MoviesType;
};

export type MovieResponse = {
	dates: DatesTypes;
	page: number;
	results: MoviesType;
	total_pages: number;
	total_results: number;
};

export type SpecificMovieType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: string | null;
	budget: number;
	genres: GenreTypes;
	homepage: string;
	id: string;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompaniesType;
	production_countries: ProductionCountriesType;
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguagesType;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	credits: CastNCrewType;
};
