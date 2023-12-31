import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {

    const { _id, title, image_url, details, author, rating, total_view
     } = news;
    // console.log(news)
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='me-2' src={author.img} style={{ height: "60px" }} roundedCircle />
                        <div>
                            <span><small>{author?.name}</small></span>
                            <br />
                            <span><small>{author?.published_date}</small></span>
                        </div>


                    </div>
                    <div>
                        <FaBookmark className='me-2' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 150 ? <p>{details.slice(0, 150) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p> : <p>{details}</p>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center ">
                    <div>
                        <FaStar className='text-warning me-2' />
                        <span>{rating?.number}</span>

                    </div>
                    <div>
                        <FaEye className='me-2' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;