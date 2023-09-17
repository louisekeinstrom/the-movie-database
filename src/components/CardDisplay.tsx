import { Card, Button } from "react-bootstrap"
import React from "react"
import { Link } from "react-router-dom"

interface ICard {
    key: number | string
    title: string
    poster_path: string
    id: number | string
}

const CardDisplay:React.FC<ICard> = ({id, title, poster_path}) => {
    return(
        <Card className='m-2' style={{ width: '18rem'}}>
                                    <Card.Img
                                        variant="top" 
                                        src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                                        alt={title} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Link as={Link} to={"movie/" + id}>
                                        <Button
                                            variant="outline-secondary"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Link>
                                    </Card.Body>
                                </Card>
    )
}

export default CardDisplay