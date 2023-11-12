import { Card } from "react-bootstrap";
import React from "react";

interface ICard {
	key: number | string;
	title: string;
	poster_path: string | "";
	id: number | string;
	path: string;
}

const CardDisplay: React.FC<ICard> = ({ id, title, poster_path, path }) => {
	return (
		<Card
			className="m-3"
			style={{
				width: "12rem",
				boxShadow: "2px 2px 10px black",
			}}
		>
			<a
				href={path + "/" + id}
				style={{
					textDecoration: "none",
				}}
			>
				<Card.Img
					variant="top"
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				/>
				<Card.Title className="p-3">{title}</Card.Title>
			</a>
		</Card>
	);
};

export default CardDisplay;
