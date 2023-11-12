import { Alert, Spinner } from "react-bootstrap";
import useAllData from "../hooks/useAllData";
import CardDisplay from "../components/CardDisplay";
import Pagination from "../components/Pagination";
import { MovieResponse } from "../types/movie.types";
import { useSearchParams } from "react-router-dom";

const InTheatre = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	});
	const page = Number(searchParams.get("page") || 1);
	const {
		data: theatreData,
		isError,
		isLoading,
	} = useAllData<MovieResponse>(
		`/movie/now_playing?include_adult=false&page=${page}`
	);

	return (
		<>
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

			{theatreData && (
				<>
					<h1 className="p-5 m-5">IN THEATRE</h1>
					<div className="d-flex flex-wrap flex-row p-2 m-2">
						{theatreData.results.map((movie) => (
							<CardDisplay
								key={movie.id}
								title={movie.title}
								poster_path={movie.poster_path}
								id={movie.id}
								path="movie"
							/>
						))}
					</div>
					<div>
						<Pagination
							pageNumb={theatreData.page}
							totalPages={theatreData.total_pages}
							hasPreviousPage={page > 1}
							hasNextPage={page + 1 < theatreData.total_pages}
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

export default InTheatre;
