import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PodcastScreen from './screens/PodcastScreen';
import LoginScreen from './screens/LoginScreen';
import EpisodeScreen from './screens/EpisodeScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/podcasts" component={PodcastScreen} exact />
				<Route path="/podcast/:id" component={EpisodeScreen} />
				<Route path="/login" component={LoginScreen} />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
