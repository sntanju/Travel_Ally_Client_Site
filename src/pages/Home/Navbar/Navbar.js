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
                        <NavLink className="bg-info link-style" to="/blog">Blog</NavLink>
                        <NavLink className="bg-info link-style" to="/aboutus">About Us</NavLink>
                        <NavLink className="bg-info link-style" to="/contactus">Contact Us</NavLink>
                        <NavLink className="bg-info link-style" to="/register">Log In</NavLink>
                        
                        {/* {users?.email ? 
                        <button onClick={logOut} className="detail-btn">LogOut</button>: 
                        <NavLink className="bg-info link-style" to="/login">Login</NavLink> 
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