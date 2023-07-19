import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter,FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import BrandCarousal from '../../BrandCarousal/BrandCarousal';
import { AuthContext } from '../../../Contextes/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {googleSignIn} = useContext(AuthContext);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn =  () => {
        googleSignIn(provider)
        .then(result => {
               const user = result.user;
               console.log(user)
        })
        .catch((error) => {
               console.log(error)
        })
            
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className="mb-2" variant='outline-primary'><FaGoogle /> Login with Google</Button>
                <Button variant='outline-primary'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h5>Find on us</h5>
                <ListGroup>
                    <Link><ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item></Link>
                    <ListGroup.Item className='mb-2'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube/> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                 <BrandCarousal></BrandCarousal>
            </div>

        </div>
    );
};

export default RightSideNav;