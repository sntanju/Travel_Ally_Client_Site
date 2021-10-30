import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Navbar.css';

const NavMenu = () => {
    const {users, logOut} = useAuth();
    return (
        <div >
    
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav>

                        <NavLink className="bg-info link-style" to="/home">Home</NavLink>                       
                        <NavLink className="bg-info link-style" to="/blog">Blog</NavLink>
                        <NavLink className="bg-info link-style" to="/aboutus">About Us</NavLink>
                        <NavLink className="bg-info link-style" to="/contactus">Contact Us</NavLink>
                        <NavLink className="bg-info link-style" to="/mybookings">My Bookings</NavLink>            
                        <NavLink className="bg-info link-style" to="/allbookings">Manage All Bookings</NavLink>
                        
                        
                        {users?.email ? 
                        <button className="logout" onClick={logOut}>LogOut</button>: 
                        <NavLink className="bg-info link-style" to="/login">Login</NavLink> 
                        }
                            <Navbar.Text>
                                <p className="text-warning m-3">{users?.displayName}</p>
                            </Navbar.Text>

                    </Nav>
                </Container>
            </Navbar>

            
        </div>
    );
};

export default NavMenu;