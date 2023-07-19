import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contextes/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [agree, setAgree] = useState(false);

    const { updateUserProfile, emailVerify } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                userEmailVerification();
                
            })
            .catch(error => {
                console.log(error.code)
            })
    };

    /// agree to terms and conditions
    const handleChecked = event => {
        setAgree(event.target.checked)
    }


    /// update user profile after creating
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => { })

    }

    /// email verify 

    const userEmailVerification = () => {

        emailVerify()
            .then(() => {
                alert("Please verify your email.")
            })

    }

    return (
        <div>
            <h4 className='text-center'>Register now.</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="phtotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label={<p>I agree <Link to="/terms">to read terms and condition</Link></p>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;