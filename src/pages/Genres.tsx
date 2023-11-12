import useAllData from "../hooks/useAllData";
import { MovieResponse } from "../types/movie.types";
import CardDisplay from "../components/CardDisplay";
import GenreOptions from "../components/GenreOptions";
import { Alert, Spinner } from "react-bootstrap";

const GenresPage = () => {
	const {
		data: genreData,
		isError,
		isLoading,
	} = useAllData<MovieResponse>(
		`/discover/movie?include_adult=false&page=&sort_by=popularity.desc&with_genres=`
	);

	return (
		<>
			<GenreOptions />

			{isError && (
				<>
					<Alert variant="warning">
						<h2>An error occurred...</h2>
					</Alert>
				</>
			)}

			{isLoading && (
				<>
					<div className="d-flex flex-column">
						<Spinner animation="grow" /> <h2>Buffrar...</h2>
					</div>
				</>
			)}

			{genreData && (
				<>
					<div className="d-flex flex-wrap flex-row p-2 m-2">
						{genreData.results.map((movie) => (
							<CardDisplay
								key={movie.id}
								title={movie.title}
								poster_path={movie.poster_path}
								id={movie.id}
								path="movie"
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default GenresPage;
