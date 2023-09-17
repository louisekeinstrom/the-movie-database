import { Alert, Button, ListGroup, Spinner } from 'react-bootstrap'
import useAllData from '../hooks/useAllData'
import { GenreType, GenreResponse, MovieResponse } from '../types'
import { Link } from 'react-router-dom'
import CardDisplay from '../components/CardDisplay'
import useAllMutation from '../hooks/useMutation'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'


const GenrePage = () => {
    const [page, setPage] = useState(1)
    const { data: genreData, 
            isError, 
            isLoading } = useAllData<GenreResponse>(`genre/movie/list?include_adult=false&include_video=true&page=${page}&`)    
    
// useAllData<MovieResponse>(`discover/movie?include_adult=false&include_video=true&with_genres=${id}&`)
 

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

            {genreData && 
                <> 
                    <h1 className='p-5 m-5'>Genres</h1>
                    <div className='d-flex m-2 flex-row flex-wrap align-items-center justify-content-center'>
                        {genreData.genres.map((oneGenre:GenreType) => (
                            <Button 
                                className='m-1 p-3' 
                                key={oneGenre.id} 
                                onClick={() => console.log('hej', oneGenre.id)}
                            >
                                {oneGenre.name}
                            </Button>
                        ))}
                    </div>
                    <div>
                    </div>
                </>
            }      
        </>
    )
}

export default GenrePage