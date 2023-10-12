import { Alert, Carousel, Spinner } from 'react-bootstrap'
import useAllData from '../hooks/useAllData'
import Pagination from '../components/Pagination'
import CardDisplay from '../components/CardDisplay'
import { MovieResponse } from '../types'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const HomePage = () => {
	const { data: homeData,
            isError,
            isLoading,
            refetch } = useAllData<MovieResponse>(`discover/movie?include_adult=false&sort_by=popularity.desc&`)
            const HomePageMovie = homeData?.results.slice(5)

    return (
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

            {HomePageMovie && HomePageMovie.length &&
                <>
                    <h1 className=' m-5'>WELCOME TO THE MOVIE DATABASE</h1>
                    <h2 className='p-3' style={{color:'white', textAlign:'center'}}>Feel free to browse around and discover top rated movies</h2>
                    <Carousel className='carouselBody' style={{width: '100%'}}>
                    {HomePageMovie.map((movie) => (
                        <Carousel.Item
                            key={movie.id}
                            as={Link} to={"movie/" + movie.id}
                            style={{textDecoration:'none'}}>
                            <div className='d-flex flex-row p-10 align-content-center justify-content-center'>
                                <div className='carouselText' style={{width:'25%', height:'200px'}}>
                                    <h4 style={{textAlign: 'start'}}>{movie.title}</h4>
                                    <h4 className='voteText'>⭐{movie.vote_average}</h4>
                                    <p style={{textOverflow: 'ellipsis'}}>{movie.overview}</p>
                                </div>
                                <div className='carousel align-items-center'>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{height:'400px'}}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </>
            }
        </>
    )
}

export default HomePage