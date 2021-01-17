import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Podcast = ({podcast}) => {
  return (
    <Card className='my-3 p-3'>
      <Link to={`/podcast/${podcast._id}`}>
      <Card.Img src={podcast.image} variant='top'/>
      </Link>

      <Card.Body className='card' >
      <Link to={`/podcast/${podcast._id}`}>
        <Card.Title className="card-title"  as='div'><strong>{podcast.name}</strong></Card.Title>
        </Link>

        
      </Card.Body>
    </Card>
  )
}

export default Podcast
