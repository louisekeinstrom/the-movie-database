import { Alert, Spinner } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay'
import { MovieResponse } from '../types'
import Pagination from '../components/Pagination'
import useAllData from '../hooks/useAllData'
import { useState } from 'react'

const Trending = () => {
	const [page, setPage] = useState(1)
    const { data: trendingData, 
            isError, 
            isLoading,
            refetch } = useAllData<MovieResponse>("/trending/movie/day?")

    return (
        <>
            
            {isError && (
                <Alert variant='warning'>
                    <h2>An error occurred...</h2>
                </Alert>
            )}

            {isLoading && ( <>
                <div className='d-flex flex-column'>
                    <Spinner animation='grow'/> <h2>Buffrar...</h2>
                </div>
                </>
            )}
            

        {trendingData && 
            <>
                <h1 className='p-5 m-5'>TRENDING MOVIES</h1>
                <div className='d-flex flex-wrap flex-row p-2 m-2'>
                    {trendingData.results.map(movie => (
                        <CardDisplay
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            id={movie.id}
                        />
                    ))}
                </div>
                <div>
                    <div>
                        <Pagination
                            pageNumb={trendingData.page}
                            totalPages={trendingData.total_pages}
                            hasPreviousPage={page > 1}
                            hasNextPage={page + 1 < trendingData.total_pages}
                            onPreviousPage={() => { setPage(preValue => preValue - 1) }}
                            onNextPage={() => { setPage(preValue => preValue + 1 ), refetch }}
                        />
                    </div>
                </div>
            </>
        }
    </>
)
}

export default Trending