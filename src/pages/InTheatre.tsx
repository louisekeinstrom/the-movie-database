import { Alert, Spinner } from 'react-bootstrap'
import useAllData from '../hooks/useAllData'
import CardDisplay from '../components/CardDisplay'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'
import { MovieResponse } from '../types'
import { useParams } from 'react-router-dom'

const InTheatre = () => {
    const [page, setPage] = useState(1)
	const { data: theatreData, 
        isError, 
        isLoading, 
        refetch } = useAllData<MovieResponse>(`/movie/now_playing?include_adult=false&page=:id&`)
        const { id } = useParams()
        const movieId = Number(id)
        console.log('movieID',movieId)
        
            useEffect(() => {
                const handlePage = () => {
                    setPage(page+1)
                }
        
                handlePage()
            }, [movieId])
    console.log(page)

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
                            onNextPage={() => { setPage(preValue => preValue + 1) }}
                        />
                    </div>
                        
                </>
            }
        </>
    
    )

    
}

export default InTheatre