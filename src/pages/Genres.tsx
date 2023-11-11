import { Alert, Button, ListGroup, Spinner } from "react-bootstrap";
import useAllData from "../hooks/useAllData";
import { GenreType, GenreResponse, MovieResponse } from "../types";
import { Link } from "react-router-dom";
import CardDisplay from "../components/CardDisplay";
import useAllMutation from "../hooks/useMutation";
import { useState } from "react";
import GenreOptions from "../components/GenreOptions";

const GenresPage = () => {
	const {
		data: genreData,
		isError,
		isLoading,
		refetch,
	} = useAllData<MovieResponse>(
		`discover/movie?include_adult=false&sort_by=popularity.desc`
	);
	return (
		<>
			<GenreOptions />
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
