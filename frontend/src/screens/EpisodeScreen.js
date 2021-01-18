import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import podcasts from '../podcasts'

const EpisodeScreen = ({match}) => {
    const podcast = podcasts.find((p) => p._id === match.params.id)


  return (
    <>
    <Link className='btn btn-light my-3' to='/podcast'>Go Back</Link>
    <Row>
      <Col md={3}>
        <br/>
      <Image src={podcast.image} alt={podcast.name} fluid />
      </Col>
      <Col md={5}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{podcast.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            {podcast.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    </>
  )
}

export default EpisodeScreen
