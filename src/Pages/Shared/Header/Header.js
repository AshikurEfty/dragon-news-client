import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then ( ()=> {})
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar expand="lg" className="mb-4 bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Catagories</Nav.Link>
                        <Nav.Link href="#">All News</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ? 
                                <>
                                    <Button onClick={handleLogOut} variant="light">Log Out</Button>
                                    <span>{user?.displayName}</span>
                                </>
                                : 
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                            
                            </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image 
                                    style={{ height:'30px' }} roundedCircle 
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>   
                            }
                        </Link>
                    </Nav>

                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;