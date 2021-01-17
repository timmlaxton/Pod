import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const Footer = () => {
  return (
    <footer>
    <Container>
      <Row>
         <Col className='text-center my-3'>
           Copyright &copy; Pod
         </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer
