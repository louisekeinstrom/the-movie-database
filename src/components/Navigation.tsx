import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className='navBar'>
                <Navbar>
                    <Navbar.Brand className="homeIcon" as={NavLink} end to="/">TMDB</Navbar.Brand>
                    <NavLink className="NavLink" to="in-theatre">In Theatre</NavLink>
                    <NavLink className="NavLink" to="/trending">Trending</NavLink>
                    <NavLink className="NavLink" to="/top-rated">Top Rated</NavLink>
                    <NavLink className="NavLink" to="/genres">Genres</NavLink>
                </Navbar>
            </Navbar>
        </>
)}

export default Navigation