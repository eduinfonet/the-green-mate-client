import React from "react";
import Header from "../Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import RightNav from "../Shared/RightNav/RightNav";
import Footer from "../Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col md={9}>
            <Outlet></Outlet>
          </Col>
          <Col md={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
