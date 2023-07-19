import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
                <h2>Welcome to read our Terms and condition.</h2>
                <p>You have to flow some steps if you want create an account in this site.</p>
                <Link to="/register"><Button variant="primary">Create an account</Button></Link>
        </div>
    );
};

export default TermsCondition;