import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

const NavMenu = () => {
    return (
        <div >
    
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav>

                        <NavLink className="bg-info link-style" to="/home">Home</NavLink>                       
                        <NavLink className="bg-info link-style" to="/showservices">Services</NavLink>
                        <NavLink  className="bg-info link-style" to="/blog">Blog</NavLink>
                        <NavLink className="bg-info link-style" to="/aboutus">About Us</NavLink>
                        <NavLink className="bg-info link-style" to="/contact">Contact Us</NavLink>
                        <NavLink className="bg-info link-style" to="/register">Register</NavLink>
                        
                        {/* {users?.email ? 
                        <button onClick={logOut} className="detail-btn">LogOut</button>: 
                        <NavLink  style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="/login">Login</NavLink> 
                        }
                            <Navbar.Text>
                                <a href = '#login'>{users?.displayName}</a>
                            </Navbar.Text> */}

                    </Nav>
                </Container>
            </Navbar>

            
        </div>
    );
};

export default NavMenu;