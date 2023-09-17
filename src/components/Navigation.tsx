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
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" >
                <Container>
                    <Navbar bg="dark" data-bs-theme="dark">
                    <Navbar.Brand as={NavLink} end to="/home/1">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                
                                {/* DROPDOWN MENU */}
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} end to="/in-theatre/1">In Theatre</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} end to="/trending">Trending</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} end to="/top-rated">Top Rated</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} end to="/genres">Genres</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>  
                    </Navbar>
                         
                         {/* SUBMIT FORM FOR SEARCHES */}
                            <Form >
                                <Row>
                                <Col xs="auto">
                                    <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="outline-secondary" type="submit">Submit</Button>
                                </Col>
                                </Row>
                            </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation