import { Alert, Spinner } from 'react-bootstrap'
import useAllData from '../hooks/useAllData'
import CardDisplay from '../components/CardDisplay'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import { MovieResponse } from '../types'
import { useParams } from 'react-router-dom'

const InTheatre = () => {
    const { id } = useParams()
	const movieId = Number(id)
    console.log('movieID',movieId)
	const [page, setPage] = useState(movieId)
	const { data: theatreData, 
            isError, 
            isLoading, 
            refetch } = useAllData<MovieResponse>(`/movie/now_playing?include_adult=false&page=${page}&`)
console.log('page',page)
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
            

            {theatreData && 
                <>
                    <h1 className='p-5 m-5'>In Theatre</h1>
                    <div className='d-flex flex-wrap flex-row p-2 m-2'>
                        {theatreData.results.map(movie => (
                            <CardDisplay
                                key={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                id={movie.id}
                            />
                        ))}
                    </div>
                    <div>
                        <Pagination
                            pageNumb={theatreData.page}
                            totalPages={theatreData.total_pages}
                            hasPreviousPage={page > 1}
                            hasNextPage={page + 1 < theatreData.total_pages}
                            onPreviousPage={() => { setPage(preValue => preValue - 1) }}
                            onNextPage={() => { setPage(preValue => preValue + 1), refetch }}
                        />
                    </div>
                        
                </>
            }
        </>
    )
}

export default InTheatre