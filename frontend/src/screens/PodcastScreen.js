import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Podcast from '../components/Podcast'
import podcasts from '../podcasts'

const PodcastScreen = () => {
  return (
    <>
      <h1 className='title'>Episodes</h1>
      <Row>
       {podcasts.map(podcast => (
         <Col sm={12} md={6} lg={4} xl={3}>
         <Podcast podcast={podcast} />
         </Col>
       ))}
      </Row>
    </>
  )
}

export default PodcastScreen
