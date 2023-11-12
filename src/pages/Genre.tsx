import { useParams, useSearchParams } from "react-router-dom";
import useAllData from "../hooks/useAllData";
import { GenreResponse } from "../types/genre.types";
import { Alert, Spinner } from "react-bootstrap";
import Pagination from "../components/Pagination";
import CardDisplay from "../components/CardDisplay";
import GenreOptions from "../components/GenreOptions";

const Genre = () => {
	const { id } = useParams();
	const genreId = Number(id);
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	});
	const page = Number(searchParams.get("page") || 1);
	const {
		data: genreData,
		isError,
		isLoading,
	} = useAllData<GenreResponse>(
		`/discover/movie?include_adult=false&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
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
								path="/movie"
							/>
						))}
					</div>
					<div>
						<Pagination
							pageNumb={genreData.page}
							totalPages={genreData.total_pages}
							hasPreviousPage={page > 1}
							hasNextPage={page + 1 < genreData.total_pages}
							onPreviousPage={() => {
								setSearchParams({ page: String(page - 1) });
							}}
							onNextPage={() => {
								setSearchParams({ page: String(page + 1) });
							}}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Genre;
