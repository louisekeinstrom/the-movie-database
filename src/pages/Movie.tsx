import { useParams } from "react-router-dom"  
import useOneObject from "../hooks/useOneObject"
import { CrewType, ProductionCompanyType, ProductionCountryType, SpokenLanguageType } from "../types"
import { Alert, ListGroup, Spinner } from "react-bootstrap"
import { Carousel } from "react-bootstrap"
import { CreditType, CrewCredit } from "../types"
import { QueryClient, useMutation } from "@tanstack/react-query"
import { getAllData } from "../services/APIservice"
import { SpecificMovieType, CreditResponse } from "../types"
import ImgCarousel from "../components/ImgCarousel"

const Movie = () => {
    const { id } = useParams()
    const movieId = Number(id)
    const { data: oneMovie, isError, isLoading } = useOneObject<SpecificMovieType>(`/movie/${movieId}?include_video=true&`)
    // const mutation = useAllMutation(`/movie/${movieId}/credits`)
    return(
        <>
            {isError && 
                <>
                    <Alert variant='warning'>
                        <h2>An error occurred...</h2>
                    </Alert>
                </>
            }

            {isLoading && 
                <>
                    <div className='d-flex flex-column'>
                        <Spinner animation='grow'/> <h2>Buffrar...</h2>
                    </div>
                </>
            }

            {oneMovie &&
                <>
                    <div 
                        className="background-image d-flex flex-column align-items-center" 
                        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path})`, width: "100%"}}>
                        <div 
                            className="d-flex flex-column align-items-center p-3"  
                            key={oneMovie.id}
                            style={{color: 'white'}}
                        >
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} 
                            alt={oneMovie.title}
                            style={{maxWidth: '40%'}}    
                        />
                        <div className="p-2 m-2 movie-facts d-flex flex-column align-items-center">
                            <h1 style={{textTransform: 'uppercase'}} className='bold'>{oneMovie.title}</h1>
                            <div className="d-flex flex-column align-items-center p-2 ">
                                    <h3 className="d-flex flex-column align-items-center">{oneMovie.tagline}</h3>
                            </div>
                            <p><span className='bold'>Runtime:</span> {oneMovie.runtime} min</p>
                            <p className="d-flex flex-column text-center" style={{ width: '75%' }}>{oneMovie.overview}</p>
                        </div>
                        <div className="info-box">
                            <div className="d-flex align-items-center flex-column p-5">
                                <h4 style={{textTransform: 'capitalize'}}> <span className='bold'>Original Title: </span>{oneMovie.original_title}</h4>
                                <h4 style={{textTransform: 'capitalize'}}><span className='bold'>Original Language:</span> {oneMovie.original_language}</h4>
                                <h4><span className='bold'>Revenue:</span> {oneMovie.revenue}</h4> 
                                <h4><span className='bold'>Popularity:</span> {oneMovie.popularity}</h4> 
                                <h4><span className='bold'>Vote Average:</span> {oneMovie.vote_average}/10</h4>
                                <h4><span className='bold'>Vote Count:</span> {oneMovie.vote_count}</h4>
                            </div>
                            <div className="info">
                                <div 
                                    className="p-2 m-2 d-flex align-items-center flex-column"
                                    style={{width: '33%'}}
                                >
                                    <h4><span className='bold'>Spoken Languages</span></h4>
                                    <ListGroup
                                        className="list p-2 m-2"
                                        style={{textTransform: 'capitalize', width: '100%'}}
                                        >
                                        {oneMovie.spoken_languages.map((lang:SpokenLanguageType)=> (
                                            <ListGroup.Item 
                                                className="list"
                                                key={lang.name}>
                                                    <h5>{lang.english_name}</h5>
                                                </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                                <div 
                                    className="p-2 m-2 d-flex align-items-center flex-column"
                                    style={{width: '33%'}}
                                >
                                    <h4><span className='bold'>Production Companies</span></h4>
                                    <ListGroup
                                        className="list p-2 m-2"
                                        style={{width: '100%'}}
                                        >
                                        {oneMovie.production_companies.map((movie:ProductionCompanyType)=> (
                                            <ListGroup.Item 
                                                key={movie.id}
                                                className="list"
                                                >
                                                <h5>{movie.name}</h5>
                                                <p>{movie.origin_country}</p>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                                <div 
                                    className="p-2 m-2 d-flex align-items-center flex-column"
                                    style={{width: '33%'}}
                                >
                                    <h4><span className='bold'>Production Countries</span></h4>
                                    <ListGroup
                                        className="list p-2 m-2"
                                        style={{width: '100%'}}
                                        >
                                        {oneMovie.production_countries.map((movie:ProductionCountryType)=> (
                                            <ListGroup.Item
                                                className="list"
                                                key={movie.name}>
                                                <h5>{movie.name} </h5>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                                <div style={{textDecoration: "none"}} className="p-2 m-2 d-flex flex-wrap flex-column align-items-center">
                                    <a style={{textDecoration:'none', color:'white'}} href={oneMovie.homepage}>
                                        <h5 className="bold">{oneMovie.title} Homepage</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Movie