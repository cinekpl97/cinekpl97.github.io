import React from 'react';
import TopNavbar from './components/navbar'
import Background from './background.jpg'
import './custom.css'
import MediaBox from './components/mediaBox'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const divStyle = {
  backgroundImage: `url(${Background})`
}

export default function App(): JSX.Element {
  return (
    <div className='container'>
      <Container>
        <Row>
          <Col>
            <TopNavbar></TopNavbar>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}><MediaBox></MediaBox></Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  );
}