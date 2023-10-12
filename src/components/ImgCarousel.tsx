import { Carousel } from "react-bootstrap"
import { CastType, CastTypes, CreditResponse, CreditTypes, CrewCredit, CrewCredits, CrewTypes } from "../types"
import { useMutation } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"
import { getAllData } from "../services/APIservice"
import { Await, useParams } from "react-router-dom"

interface ICast {
    key: number | string
    id: number
    cast: CreditTypes
    crew: CrewCredits
}

const ImgCarousel:React.FC<ICast> = ({id, cast, crew}) => {
    return(
        <>
        <div>
            <h2>CAST</h2>
            <Carousel>
                {cast.map(dataType =>
                    <Carousel.Item key={id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${dataType.profile_path}`}
                            alt={dataType.name}
                            style={{maxWidth: '40%'}}
                        />
                        <div>
                            <h2>{dataType.name}</h2>
                            <h3 className="muted">{dataType.character}</h3>
                            <p>Known for:{dataType.known_for_department}</p>
                        </div>
                        <div>
                            <p>Original Name: {dataType.original_name}</p>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
            <h2>CREW</h2>
            <Carousel>
                {crew.map(dataType =>
                    <Carousel.Item key={dataType.id}>
                        <img
                                src={`https://image.tmdb.org/t/p/w500${dataType.profile_path}`}
                                alt={dataType.name}
                                style={{maxWidth: '40%'}}
                        />
                        <div>
                            <h2>{dataType.name}</h2>
                            <p>Known for:{dataType.known_for_department}</p>
                        </div>
                        <div>
                            <p>Original Name: {dataType.original_name}</p>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
            </div>
        </>
    )}

export default ImgCarousel