import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div  className="login">
            <h2>Please Sign In With Google</h2>
            <br />
            <button onClick={handleGoogleLogin}>{googleIcon} Sign in With Google </button>
        </div>
    );
};

export default Login;