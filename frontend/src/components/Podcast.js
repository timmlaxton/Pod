import React from 'react'
import { Card } from 'react-bootstrap'


const Podcast = ({podcast}) => {
  return (
    <Card className='my-3 p-3'>
      <a href={`/podcast/${podcast._id}`}>
      <Card.Img src={podcast.image} variant='top'/>
      </a>

      <Card.Body className='card' >
      <a href={`/podcast/${podcast._id}`}>
        <Card.Title className="card-title"  as='div'><strong>{podcast.name}</strong></Card.Title>
        </a>

        
      </Card.Body>
    </Card>
  )
}

export default Podcast
