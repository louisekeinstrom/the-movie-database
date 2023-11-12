import { GenreTypeResponse, GenreType } from "../types/genre.types";
import useAllData from "../hooks/useAllData";
import { Alert, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const GenreOptions = () => {
	const {
		data: genreData,
		isError,
		isLoading,
	} = useAllData<GenreTypeResponse>(`genre/movie/list?`);

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

			{genreData && (
				<>
					<h1 className="p-5 m-5">GENRES</h1>
					<Navbar
						variant="outline-dark"
						className="d-flex m-2 flex-row flex-wrap align-items-center justify-content-center"
					>
						{genreData.genres.map((oneGenre: GenreType) => (
							<NavLink
								to={"/genres/genre/" + oneGenre.id}
								className={`btn m-1 p-3`}
								key={oneGenre.id}
							>
								{oneGenre.name}
							</NavLink>
						))}
					</Navbar>
				</>
			)}
		</>
	);
};

export default GenreOptions;
