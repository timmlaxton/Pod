import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import PodcastScreen from './screens/PodcastScreen'


const App = () => {
  return (
    <>
    <Header/>
    <PodcastScreen> 
      <Container>
      <h1>Hi</h1> 
      </Container>
     </PodcastScreen>
     <Footer/>
    </>
  );
}

export default App;
