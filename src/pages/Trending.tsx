import { Alert, Spinner } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";
import { MovieResponse } from "../types/movie.types";
import Pagination from "../components/Pagination";
import useAllData from "../hooks/useAllData";
import { useSearchParams } from "react-router-dom";

const Trending = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	});

	const page = Number(searchParams.get("page") || 1);
	const {
		data: trendingData,
		isError,
		isLoading,
	} = useAllData<MovieResponse>(
		`/trending/movie/day?include_adult=false&page=${page}`
	);

	return (
		<>
			{isError && (
				<Alert variant="warning">
					<h2>An error occurred...</h2>
				</Alert>
			)}

			{isLoading && (
				<div className="d-flex flex-column">
					<Spinner animation="grow" /> <h2>Buffrar...</h2>
				</div>
			)}

			{trendingData && (
				<>
					<h1 className="title p-5 h2">TRENDING MOVIES</h1>
					<div className="d-flex flex-wrap justify-content-evenly flex-row p-2 m-2">
						{trendingData.results.map((movie) => (
							<CardDisplay
								key={movie.id}
								poster_path={movie.poster_path}
								id={movie.id}
								path="movie"
							/>
						))}
					</div>
					<div>
						<div>
							<Pagination
								pageNumb={trendingData.page}
								totalPages={trendingData.total_pages}
								hasPreviousPage={page > 1}
								hasNextPage={
									page + 1 < trendingData.total_pages
								}
								onPreviousPage={() => {
									setSearchParams({ page: String(page - 1) });
								}}
								onNextPage={() => {
									setSearchParams({ page: String(page + 1) });
								}}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Trending;
