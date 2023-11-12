import { useParams } from "react-router-dom";
import useOneObject from "../hooks/useOneObject";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { SpecificMovieType } from "../types/movie.types";
import {
	CastType,
	ProductionCompanyType,
	ProductionCountryType,
	SpokenLanguageType,
} from "../types/people.types";
import { Card } from "react-bootstrap";

const Movie = () => {
	const { id } = useParams();
	const movieId = Number(id);
	const {
		data: oneMovie,
		isError,
		isLoading,
	} = useOneObject<SpecificMovieType>(
		`/movie/${movieId}?include_adult=false&append_to_response=credits`
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

			{oneMovie && (
				<>
					<div
						className="background-image d-flex flex-column align-items-center"
						style={{
							backgroundImage: `url(https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path})`,
							width: "100%",
						}}
					>
						<div
							className="d-flex flex-column align-items-center p-3"
							key={oneMovie.id}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
								alt={oneMovie.title}
								style={{ maxWidth: "40%" }}
							/>
							<div className="p-2 m-2 movie-facts d-flex flex-column align-items-center">
								<h1
									style={{ textTransform: "uppercase" }}
									className="bold"
								>
									{oneMovie.title}
								</h1>
								<div className="d-flex flex-column align-items-center p-2 ">
									<h3 className="d-flex flex-column align-items-center muted">
										{oneMovie.tagline}
									</h3>
								</div>
								<p className="muted">
									<span className="bold">Runtime:</span>{" "}
									{oneMovie.runtime} min
								</p>
								<p
									className="d-flex flex-column text-center muted"
									style={{ width: "75%" }}
								>
									{oneMovie.overview}
								</p>
							</div>
							<div className="info-box">
								<div className="d-flex align-items-center flex-column p-5">
									<h4 style={{ textTransform: "capitalize" }}>
										{" "}
										<span className="bold">
											Original Title:{" "}
										</span>
										{oneMovie.original_title}
									</h4>
									<h4 style={{ textTransform: "capitalize" }}>
										<span className="bold">
											Original Language:
										</span>{" "}
										{oneMovie.original_language}
									</h4>
									<h4>⭐ {oneMovie.vote_average}/10</h4>
									<h4>
										<span className="bold">Revenue:</span>{" "}
										{oneMovie.revenue}
									</h4>
									<h4>
										<span className="bold">
											Popularity:
										</span>{" "}
										{oneMovie.popularity}
									</h4>
									<h4>
										<span className="bold">
											Vote Count:
										</span>{" "}
										{oneMovie.vote_count}
									</h4>
								</div>
								<div className="info">
									{oneMovie.spoken_languages && (
										<>
											<div
												className="p-2 m-2 d-flex align-items-center flex-column"
												style={{ width: "33%" }}
											>
												<h4>
													<span className="bold">
														Spoken Languages
													</span>
												</h4>
												<ListGroup
													className="list p-2 m-2"
													style={{
														textTransform:
															"capitalize",
														width: "100%",
													}}
												>
													{oneMovie.spoken_languages.map(
														(
															lang: SpokenLanguageType
														) => (
															<ListGroup.Item
																className="list"
																key={lang.name}
															>
																<h5>
																	{
																		lang.english_name
																	}
																</h5>
															</ListGroup.Item>
														)
													)}
												</ListGroup>
											</div>
										</>
									)}
									{oneMovie.production_companies && (
										<>
											<div
												className="p-2 m-2 d-flex align-items-center flex-column"
												style={{ width: "33%" }}
											>
												<h4>
													<span className="bold">
														Production Companies
													</span>
												</h4>
												<ListGroup
													className="list p-2 m-2"
													style={{ width: "100%" }}
												>
													{oneMovie.production_companies.map(
														(
															movie: ProductionCompanyType
														) => (
															<ListGroup.Item
																key={movie.id}
																className="list"
															>
																{" "}
																<h5>
																	{movie.name}
																</h5>
																<p>
																	{
																		movie.origin_country
																	}
																</p>
															</ListGroup.Item>
														)
													)}
												</ListGroup>
											</div>
										</>
									)}
									{oneMovie.production_countries && (
										<>
											<div
												className="p-2 m-2 d-flex align-items-center flex-column"
												style={{ width: "33%" }}
											>
												<h4>
													<span className="bold">
														Production Countries
													</span>
												</h4>
												<ListGroup
													className="list p-2 m-2"
													style={{ width: "100%" }}
												>
													{oneMovie.production_countries.map(
														(
															movie: ProductionCountryType
														) => (
															<ListGroup.Item
																className="list"
																key={movie.name}
															>
																<h5>
																	{movie.name}{" "}
																</h5>
															</ListGroup.Item>
														)
													)}
												</ListGroup>
											</div>
										</>
									)}
								</div>
								<div
									style={{ textDecoration: "none" }}
									className="p-2 m-2 d-flex flex-wrap flex-column align-items-center"
								>
									<a
										className="bold-text p-2 dark-text"
										style={{
											textDecoration: "none",
										}}
										href={oneMovie.homepage}
									>
										<h5 className="bold">
											{oneMovie.title} Homepage
										</h5>
									</a>
								</div>
								<div className="d-flex align-items flex-column align-items-center soft-corner dark-color p-2">
									<h2 className="p-2 d-flex align-items-center bold-text">
										Actors
									</h2>
									<div className="d-flex flex-wrap flex-row p-2 m-2">
										{oneMovie.credits.cast.map(
											(cast: CastType) => (
												<Card
													className="card-body m-3"
													key={cast.id}
													style={{
														width: "12rem",
														backgroundColor:
															"#212529",
														boxShadow:
															"2px 2px 10px black",
													}}
												>
													<a
														href={
															"/actor/" + cast.id
														}
														style={{
															textDecoration:
																"none",
														}}
													>
														<Card.Img
															variant="top"
															src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
															className="card-image"
														/>
														<Card.Title className="bold card-text p-3">
															{cast.character}
														</Card.Title>
														<Card.Text className="p-3 muted">
															{cast.name}
														</Card.Text>
													</a>
												</Card>
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

export default Movie;
