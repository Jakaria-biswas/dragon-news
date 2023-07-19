import React from 'react';
import Header from '../Components/Heder/Header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Components/Sheard/LeftSideNav/LeftSideNav';
import RightSideNav from '../Components/Sheard/RightSideNav/RightSideNav';
import Footer from '../Components/Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className='d-none d-lg-block' lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;