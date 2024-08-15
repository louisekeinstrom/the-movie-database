import { GenreTypeResponse, GenreType } from "../types/genre.types";
import useAllData from "../hooks/useAllData";
import { Alert, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

interface IGenre {
	genreNr: string;
}

const GenreOptions: React.FC<IGenre> = ({ genreNr }) => {
	const {
		data: genreData,
		isError,
		isLoading,
	} = useAllData<GenreTypeResponse>(`genre/movie/list?`);

	const genreTitle = genreData?.genres.find((genre) => genre.id == genreNr);

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
					<h1
						className="title pt-5 h2"
						style={{
							textTransform: "uppercase",
						}}
					>
						Find your {genreTitle?.name}
					</h1>

					<Navbar
						variant="outline-dark"
						className="d-flex m-2 flex-row flex-wrap align-items-center justify-content-center"
					>
						{genreData.genres.map((oneGenre: GenreType) => (
							<NavLink
								to={"/genres/genre/" + oneGenre.id}
								className={`btn h4 m-1 p-3`}
								style={{
									backgroundColor: "black",
									color: "white",
								}}
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
