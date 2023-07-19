import React, { useContext, useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../Sheard/LeftSideNav/LeftSideNav';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contextes/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                alert("Log out success.")
                navigate("/")
            })
            .catch(() => { })
    }

    const active = {
        color: "blue",
        textDecoration: "underline",
        
    }

    return (
        <div className='mb-4'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand ><Link style={{textDecoration:"none",color:"black"}} to="/">Dragon news</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><NavLink style={({isActive}) => isActive ? active : undefined} to="/">Home</NavLink></Nav.Link>
                            
                        </Nav>
                        <Nav>

                            {/* <Nav.Link> <Link to="/login">Login</Link></Nav.Link>
                            <Nav.Link><Link to="/register">Register</Link></Nav.Link> */}

                            {
                                user?.uid ?
                                    <Nav.Link>
                                        <Image roundedCircle style={{ height: "30px" }} src={user?.photoURL} />

                                        <span className='p-2'>{user?.displayName}</span>
                                    </Nav.Link>
                                    :
                                    <>
                                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                                        <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                                    </>
                            }

                            {/* <Nav.Link > {user?.photoURL ? : <FaUserAlt />}  </Nav.Link> */}

                            <Nav.Link eventKey={2} >
                                {user?.uid ? <Button variant="danger" onClick={handleLogOut}>Log Out</Button> : ""}
                            </Nav.Link>
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