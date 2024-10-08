import { Container } from "react-bootstrap";
import "../src/assets/scss/App.scss";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InTheatre from "./pages/InTheatre";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";
import GenresPage from "./pages/Genres";
import Movie from "./pages/Movie";
import Actor from "./pages/Actor";
import Genre from "./pages/Genre";

function App() {
	return (
		<>
			<Navigation />
			<Container className="movie_container d-flex flex-column">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/in-theatre" element={<InTheatre />} />
					<Route path="/top-rated" element={<TopRated />} />
					<Route path="/trending" element={<Trending />} />
					<Route path="/genres" element={<GenresPage />} />
					<Route path="/genres/genre/:id" element={<Genre />} />
					<Route path="/movie/:id" element={<Movie />} />
					<Route path="/actor/:id" element={<Actor />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
