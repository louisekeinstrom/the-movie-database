import { useParams } from "react-router-dom";
import useOneObject from "../hooks/useOneObject";
import { MovieType } from "../types/movie.types";
import { oneActorType } from "../types/people.types";
import { Alert, Spinner } from "react-bootstrap";
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
					<div className="background-image d-flex flex-column align-items-center ">
						<div
							className="d-flex flex-column align-items-center p-3"
							key={oneActor.id}
						>
							<div className="d-flex flex-column align-items-start justify-content-start p-5">
								<div className="d-flex align-items-start justify-content-start p-2">
									<img
										src={`https://image.tmdb.org/t/p/w500${oneActor.profile_path}`}
										alt={oneActor.name}
										style={{
											width: "250px",
											height: "auto",
										}}
									/>
								</div>
								<div>
									<div className="ps-4 d-flex flex-column align-items-start">
										<h1
											style={{
												textTransform: "uppercase",
											}}
											className="ps-4"
										>
											{oneActor.name}
										</h1>
										<div className="d-flex flex-column align-items-start">
											<p className="d-flex flex-column align-items-center ps-4">
												{oneActor.biography}
											</p>
											<div className="d-flex flex-column">
												<div className="d-flex flex-wrap flex-column text-align align-items-start justify-content-start ps-4">
													<h4>
														Known for:{" "}
														{
															oneActor.known_for_department
														}
													</h4>
													<h4>
														Place of birth:{" "}
														{
															oneActor.place_of_birth
														}
													</h4>
													<h4>
														Birthday:{" "}
														{oneActor.birthday}
													</h4>
													{oneActor.deathday && (
														<h4>
															Deceased:{" "}
															{oneActor.deathday}
														</h4>
													)}
												</div>
												<div className="d-flex flex-column flex-wrap ps-4">
													<div>
														<h4>Also known as: </h4>
														{oneActor.also_known_as.map(
															(name) => {
																return (
																	<h4>
																		{name}
																	</h4>
																);
															}
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="d-flex flex-wrap flex-column p-2 m-2">
									<h2 className="p-2 m-2 bold">
										STARRING IN
									</h2>
									<div className="d-flex flex-wrap flex-row">
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
