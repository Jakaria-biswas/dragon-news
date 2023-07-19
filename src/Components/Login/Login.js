import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contextes/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '';




    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                
                 if(user.emailVerified){
                    navigate(from, { replace: true })
                 }else{
                     alert("Email not verified.")
                 }
                // setSuccess(<Alert variant="success">
                //     Login successfully
                // </Alert>)
            })
            .catch(error => {
                console.log(error.message)
                if(error.code === 'auth/user-not-found'){
                     setError(<Alert variant="danger">
                     Email not valid.
                 </Alert>)
                 return;
                }
            });
            setError("");
            setSuccess("")
        
    }

    return (
        <div>
            <h4 className='text-center'>Login now.</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='mt-5'>
                {success}
                {error}
            </div>
        </div>
    );
};

export default Login;