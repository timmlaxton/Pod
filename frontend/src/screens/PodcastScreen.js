import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Podcast from '../components/Podcast' 
const PodcastScreen = () => {
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const fetchPodcasts = async () => {
      const {data} = await axios.get('/api/podcasts')

      setPodcasts(data)
    }

    fetchPodcasts()
  }, [])

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
