import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'

const EpisodeScreen = ({match}) => {
const [podcast, setPodcast] = useState({})

useEffect(() => {
  const fetchPodcast = async () => {
    const {data} = await axios.get(`/api/podcasts/${match.params.id}`)

    setPodcast(data)
  }

  fetchPodcast()
}, [match])

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
