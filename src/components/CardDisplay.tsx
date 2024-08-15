import { Card } from "react-bootstrap";
import React from "react";

interface ICard {
	key: number | string;
	poster_path: string | "";
	id: number | string;
	path: string;
}

const CardDisplay: React.FC<ICard> = ({ id, poster_path, path }) => {
	return (
		<Card
			className="m-3 card"
			style={{
				width: "12rem",
				boxShadow: "2px 2px 10px black",
				border: "none",
			}}
		>
			<a
				href={path + "/" + id}
				style={{
					textDecoration: "none",
				}}
			>
				<Card.Img
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				/>
			</a>
		</Card>
	);
};

export default CardDisplay;
