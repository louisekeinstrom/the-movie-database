import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<Navbar
				expand="lg"
				data-bs-theme="dark"
				sticky="top"
				className="navBar"
			>
				<Navbar.Brand className="homeIcon" as={NavLink} end to="/">
					TMDB
				</Navbar.Brand>
				<NavLink className="NavLink" to="/in-theatre">
					In Theatre
				</NavLink>
				<NavLink className="NavLink" to="/trending">
					Trending
				</NavLink>
				<NavLink className="NavLink" to="/top-rated">
					Top Rated
				</NavLink>
				<NavLink className="NavLink" to="/genres">
					Genres
				</NavLink>
			</Navbar>
		</>
	);
};

export default Navigation;
