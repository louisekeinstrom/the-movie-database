import React from 'react'
import Button  from 'react-bootstrap/Button';

interface IProps {
    pageNumb: number
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
  }

const Pagination:React.FC<IProps>= ({
        pageNumb,
        totalPages,
        hasPreviousPage,
        hasNextPage,
        onPreviousPage,
        onNextPage, 
    }) => {
    
    return (
        <div>
            <div>
                <Button 
                    disabled={!hasPreviousPage}
                    onClick={onPreviousPage}>
                        Previous Page
                </Button>
                <div>
                    {pageNumb}/{totalPages}
                </div>
                <Button 
                    disabled={!hasNextPage}
                    onClick={onNextPage}>
                        Next Page
                </Button>
            </div>
        </div>
    )   
}

export default Pagination
