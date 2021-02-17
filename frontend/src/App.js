import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PodcastScreen from './screens/PodcastScreen';
import LoginScreen from './screens/LoginScreen';
import EpisodeScreen from './screens/EpisodeScreen';
import PodcastListScreen from './screens/PodcastListScreen';
import PodcastEditScreen from './screens/PodcastEditScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/podcasts" component={PodcastScreen} exact />
				<Route path="/podcast/:id" component={EpisodeScreen} />
				<Route path="/admin/podcastlist" component={PodcastListScreen} exact />
				<Route path="/admin/podcast/:id/edit" component={PodcastEditScreen} exact />
				<Route path="/admin/podcast/create" component={PodcastEditScreen} />
				<Route path="/login" component={LoginScreen} />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
