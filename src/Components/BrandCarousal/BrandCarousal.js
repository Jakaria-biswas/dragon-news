import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousal = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4BVuF-2xSQjysMyhJz-z9s9hWilggEgg0gNWnH5Nc1qC7eRTLLK82VvaDmehUGuxy-s&usqp=CAU"
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7uKUEsxzUFE-NTqmTNEj6GRT4hmn9Psbp0ipnEdYiieYVjU1lIqhxsbvOLm-q4-OVoc&usqp=CAU"
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
                

            </Carousel>
        </div>
    );
};

export default BrandCarousal;