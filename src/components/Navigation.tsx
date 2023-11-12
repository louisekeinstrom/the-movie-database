import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
	return (
		<>
			<Navbar
				expand="lg"
				data-bs-theme="dark"
				sticky="top"
				className="bg-body-tertiary"
			>
				<Container>
					<Navbar.Brand className="homeIcon" as={NavLink} end to="/">
						TMDB
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/in-theatre">
								In Theatre
							</Nav.Link>
							<Nav.Link as={NavLink} to="/trending">
								Trending
							</Nav.Link>
							<Nav.Link as={NavLink} to="/top-rated">
								Top Rated
							</Nav.Link>
							<Nav.Link as={NavLink} to="/genres">
								Genres
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
