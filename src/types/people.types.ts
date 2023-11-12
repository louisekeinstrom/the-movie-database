import { MovieCreditType } from "./movie.types";

export type oneActorType = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
	movie_credits: MovieCreditType;
};

export type CastType = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
};

export type CastTypes = CastType[];

export type CrewType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: [];
	id: number | string;
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
	credit_id: string;
	department: string;
	job: string;
};

export type CrewTypes = CrewType[];

export type CastNCrewType = {
	cast: CastTypes;
	crew: CrewTypes;
};

export type ProductionCompanyType = {
	id: string;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

export type ProductionCompaniesType = ProductionCompanyType[];

export type ProductionCountryType = {
	iso_3166_1: number;
	name: string;
};

export type ProductionCountriesType = ProductionCountryType[];

export type SpokenLanguageType = {
	english_name: string;
	iso_3166_1: number;
	name: string;
};

export type SpokenLanguagesType = SpokenLanguageType[];
