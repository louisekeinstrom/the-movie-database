import { Alert, Spinner } from 'react-bootstrap'
import useAllData from '../hooks/useAllData'
import Pagination from '../components/Pagination'
import CardDisplay from '../components/CardDisplay'
import { MovieResponse } from '../types'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const HomePage = () => {
	const { data: homeData, 
            isError, 
            isLoading, 
            refetch } = useAllData<MovieResponse>(`discover/movie?include_adult=false&sort_by=popularity.desc&`)

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
            
            {homeData && homeData.results.length &&
                <>
                    <h1 className='p-5 m-5'>Welcome to the Movie Database</h1>

                    <div  className='d-flex flex-wrap align-items-center flex-column p-2 m-2'>
                        <h4>Discover</h4>
                        <div className='d-flex flex-wrap align-items-center flex-row p-2 m-2'>
                            {homeData.results.map((movie) => (
                                <CardDisplay
                                key={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                id={movie.id}
                                />
                                ))}
                        </div>
                    </div>
                    <div>
                    </div>
                </>
            }
        </>
    )
    
}

export default HomePage