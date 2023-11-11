import { useState } from "react";
import { useParams } from "react-router-dom";
import useAllData from "../hooks/useAllData";
import { GenreResponse, GenreType, GenreTypeResponse } from "../types";
import { Alert, Spinner } from "react-bootstrap";
import Pagination from "../components/Pagination";
import CardDisplay from "../components/CardDisplay";
import GenreOptions from "../components/GenreOptions";

const Genre = () => {
	const { id } = useParams();
	const genreId = Number(id);
	const { page } = useParams();
	const pageId = Number(page);
	const [pageNr, setPageNr] = useState(1);
	const {
		data: genreData,
		isError,
		isLoading,
		refetch,
	} = useAllData<GenreResponse>(
		`/discover/movie?include_adult=false&page=${pageNr}&sort_by=popularity.desc&with_genres=${genreId}`
	);

	const pageFn = (page: number) => {
		setPageNr((preValue) => preValue + page);
		console.log(pageNr);
	};

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
							hasPreviousPage={pageId > 1}
							hasNextPage={pageId + 1 < genreData.total_pages}
							onPreviousPage={() => {
								pageFn(-1);
							}}
							onNextPage={() => {
								pageFn(1);
								refetch();
							}}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Genre;
