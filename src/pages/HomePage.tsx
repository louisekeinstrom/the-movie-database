import { Alert, Spinner } from "react-bootstrap";
import useAllData from "../hooks/useAllData";
import { MovieResponse } from "../types/movie.types";

const HomePage = () => {
	const {
		data: homeData,
		isError,
		isLoading,
	} = useAllData<MovieResponse>(
		`discover/movie?include_adult=false&sort_by=popularity.desc&`
	);
	const HomePageMovie = homeData?.results.slice(5);

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

			{HomePageMovie && HomePageMovie.length && (
				<>
					<h1 className=" m-5">WELCOME TO THE MOVIE DATABASE</h1>
					<h2 className="p-3" style={{ textAlign: "center" }}>
						Feel free to browse around and discover top rated movies
					</h2>
				</>
			)}
		</>
	);
};

export default HomePage;
