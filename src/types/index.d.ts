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

export type MovieResponse = {
	dates: DatesTypes;
	page: number;
	results: MoviesType;
	total_pages: number;
	total_results: number;
};

export type GenreResponse = {
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

export type CastNCrewType = {
	cast: ActorsType;
	crew: CrewTypes;
};

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

export type MovieCreditType = {
	cast: MoviesType;
	crew: MoviesType;
};

export type ActorType = {
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

export type ActorsType = ActorType[];

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

export type DatesType = {
	maximum: string;
	minimum: string;
};

export type DatesTypes = DatesType[];

export type GenreTypeResponse = {
	genres: GenreTypes;
};

export type GenreType = {
	id: string;
	name: string;
};

export type GenreTypes = GenreType[];

export type AllPeopleResponse = {
	cast: CastTypes;
	crew: CrewTypes;
	id: number;
};

export type CastType = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: [];
	id: number;
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

export type CreditResponse = {
	id: number;
	cast: CreditTypes;
	crew: CrewCredits;
};

export type CreditType = {
	adult: boolean;
	gender: number;
	id: number | string;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
};

export type CreditTypes = CreditType[];

export type CrewCredit = {
	adult: boolean;
	gender: number;
	id: number | string;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	credit_id: number;
	department: string;
	job: string;
};

export type CrewCredits = CrewCredit[];
