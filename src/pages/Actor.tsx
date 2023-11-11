import { useParams } from "react-router-dom";
import useOneObject from "../hooks/useOneObject";
import {
	ActorType,
	CrewType,
	MovieType,
	ProductionCompanyType,
	ProductionCountryType,
	SpokenLanguageType,
	oneActorType,
} from "../types";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { CreditType, CrewCredit } from "../types";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { getAllData } from "../services/APIservice";
import { SpecificMovieType, CreditResponse } from "../types";
import ImgCarousel from "../components/ImgCarousel";
import { Card } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";

const Actor = () => {
	const { id } = useParams();
	const actorId = Number(id);
	const {
		data: oneActor,
		isError,
		isLoading,
	} = useOneObject<oneActorType>(
		`person/${actorId}?append_to_response=movie_credits`
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

			{oneActor && (
				<>
					<div
						className="background-image d-flex flex-column align-items-center"
						style={{ width: "100%" }}
					>
						<div
							className="d-flex flex-column align-items-center p-3"
							key={oneActor.id}
							style={{ color: "white" }}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${oneActor.profile_path}`}
								alt={oneActor.name}
								style={{ maxWidth: "40%" }}
							/>
							<div className="p-2 m-2 movie-facts d-flex flex-column align-items-center">
								<h1
									style={{ textTransform: "uppercase" }}
									className="bold"
								>
									{oneActor.name}
								</h1>
								<div className="biography d-flex flex-column align-items-center p-5 m-5">
									<p className="d-flex flex-column align-items-center">
										{oneActor.biography}
									</p>
								</div>
								<div>
									<h2>Starring in</h2>
									<div className="d-flex flex-wrap flex-row p-2 m-2">
										{oneActor.movie_credits.cast.map(
											(movie: MovieType) => (
												<CardDisplay
													key={movie.id}
													title={movie.title}
													poster_path={
														movie.poster_path
													}
													id={movie.id}
													path="/movie"
												/>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Actor;
