import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import logo from './page_logo.jpg';

const Header = () => {
    const navigate = useNavigate();  // Use navigate to programmatically change route

    // Handle Login button click
    const handleLogin = () => {
        navigate('/login');  // Navigate to /login when clicked
    };

    // Handle Register button click
    const handleRegister = () => {
        navigate('/register');  // Navigate to /register when clicked
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ color: 'gold' }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '40px', marginRight: '10px' }}
                    />
                    <FontAwesomeIcon icon={faVideoSlash} />CP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    {/* Login Button navigates to /login */}
                    <Button variant="outline-info" className="me-2" onClick={handleLogin}>
                        Login
                    </Button>
                    {/* Register Button navigates to /register */}
                    <Button variant="outline-info" onClick={handleRegister}>
                        Register
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
