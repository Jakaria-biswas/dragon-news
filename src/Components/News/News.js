import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    const newsDetails = useLoaderData();
    const { image_url, title, details,category_id
     } = newsDetails;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url
                } />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in the category</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default News;