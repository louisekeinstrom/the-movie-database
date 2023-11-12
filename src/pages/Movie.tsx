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
import { GenreType } from "../types/genre.types";

const Movie = () => {
	const { id } = useParams();
	const movieId = Number(id);
	const {
		data: oneMovie,
		isError,
		isLoading,
	} = useOneObject<SpecificMovieType>(
		`/movie/${movieId}?append_to_response=credits`
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
							<div className="p-2 m-2 d-flex flex-column align-items-center">
								<h1
									style={{ textTransform: "uppercase" }}
									className=""
								>
									{oneMovie.title}
								</h1>
								<div className="d-flex flex-column align-items-center p-2 ">
									<h3 className="d-flex flex-column align-items-center">
										{oneMovie.tagline}
									</h3>
								</div>
								<p>
									<span>Release date:</span>{" "}
									{oneMovie.release_date}
								</p>
								<p>
									<span>Runtime:</span> {oneMovie.runtime} min
								</p>
								<p
									className="d-flex flex-column text-center"
									style={{ width: "75%" }}
								>
									{oneMovie.overview}
								</p>
							</div>
							<div>
								<div className="d-flex align-items-center justify-content-center flex-column p-5">
									<h4 style={{ textTransform: "capitalize" }}>
										{" "}
										<span>Original Title: </span>
										{oneMovie.original_title}
									</h4>
									<h4 style={{ textTransform: "capitalize" }}>
										<span>Original Language:</span>{" "}
										{oneMovie.original_language}
									</h4>
									<h4>⭐ {oneMovie.vote_average}/10</h4>
									<h4 style={{ textTransform: "capitalize" }}>
										{" "}
										<span>Budget: </span>
										{oneMovie.budget}
									</h4>
									<h4>
										<span>Revenue:</span> {oneMovie.revenue}
									</h4>
									<h4>
										<span>Popularity:</span>{" "}
										{oneMovie.popularity}
									</h4>
									<h4>
										<span>Vote Count:</span>{" "}
										{oneMovie.vote_count}
									</h4>
								</div>
								<div className="d-flex flex-column flex-wrap align-items-center">
									{oneMovie.genres && (
										<>
											<div className="d-flex flex-column">
												<h4>Genres</h4>
												<ListGroup className="p-2 m-2">
													{oneMovie.genres.map(
														(
															genreList: GenreType
														) => (
															<ListGroup.Item
																key={
																	genreList.id
																}
															>
																<h2
																	style={{
																		textTransform:
																			"capitalize",
																	}}
																>
																	{
																		genreList.name
																	}
																</h2>
															</ListGroup.Item>
														)
													)}
												</ListGroup>
											</div>
										</>
									)}
									{oneMovie.spoken_languages && (
										<>
											<div className="p-2 m-2 d-flex align-items-center flex-column">
												<h4>
													<span>
														Spoken Languages
													</span>
												</h4>
												<ListGroup
													className=" p-2 m-2"
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
																key={lang.name}
															>
																<h2>
																	{
																		lang.english_name
																	}
																</h2>
															</ListGroup.Item>
														)
													)}
												</ListGroup>
											</div>
										</>
									)}
									{oneMovie.production_companies && (
										<>
											<div className="p-2 m-2 d-flex align-items-center flex-column">
												<h4>
													<span>
														Production Companies
													</span>
												</h4>
												<ListGroup className=" p-2 m-2">
													{oneMovie.production_companies.map(
														(
															movie: ProductionCompanyType
														) => (
															<ListGroup.Item
																key={movie.id}
															>
																{" "}
																<h2>
																	{movie.name}
																</h2>
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
												style={{ width: "100%" }}
											>
												<h4>
													<span>
														Production Countries
													</span>
												</h4>
												<ListGroup className=" p-2 m-2">
													{oneMovie.production_countries.map(
														(
															movie: ProductionCountryType
														) => (
															<ListGroup.Item
																key={movie.name}
															>
																<h2>
																	{movie.name}{" "}
																</h2>
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
										className="p-2"
										style={{
											textDecoration: "none",
										}}
										href={oneMovie.homepage}
									>
										<h5 className=" web">
											{oneMovie.title} Homepage
										</h5>
									</a>
								</div>
								<div className="d-flex align-items flex-column align-items-center p-2">
									<h2 className="p-2 d-flex align-items-center">
										ACTORS
									</h2>
									<div className="d-flex flex-wrap flex-row p-2 m-2">
										{oneMovie.credits.cast.map(
											(cast: CastType) => (
												<Card
													className="m-3"
													key={cast.id}
													style={{
														width: "12rem",
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
														<Card.Title className="p-3">
															{cast.character}
														</Card.Title>
														<Card.Text className="p-3">
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
