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
        <Card className='card-body m-3' style={{ width:'12rem', backgroundColor:'#212529', color:'white', boxShadow:'2px 2px 10px black'}}>
            <a href={"movie/" + id} style={{textDecoration: 'none', color: 'white'}}>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="card-image"
                    />
                    <Card.Title className='bold p-3'>{title}</Card.Title>
            </a>
        </Card>
    )
}

export default CardDisplay