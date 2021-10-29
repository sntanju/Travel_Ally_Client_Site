import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    const { signInUsingGoogle} = useAuth();
    return (
        <div  className="booking">
            <h2>Please Sign In With Google</h2>
            <br />
            <button onClick={signInUsingGoogle}>{googleIcon} Sign in With Google </button>
        </div>
    );
};

export default Login;