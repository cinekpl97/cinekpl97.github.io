import React from "react";
import TopNavbar from "./components/navbar";
import "./custom.css";
import MediaBox from "./components/mediaBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App(): JSX.Element {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xl={12}>
            <TopNavbar></TopNavbar>
          </Col>
        </Row>
        <Row>
          <Col xl={2}></Col>
          <Col xl={8}>
            <div className="desktop">
              <MediaBox></MediaBox>
            </div>
          </Col>
          <Col xl={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
