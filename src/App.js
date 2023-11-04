import React from 'react'
import './App.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './containers/Main/Main';
import Media from './containers/Media/Media';
import Blog from './containers/Blog/Blog';
import Rate from './containers/Rate/Rate';

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main class="page">
				<Main />
				<Media />
				<Blog />
				<Rate />
			</main>
			<Footer />
		</div>
	)
}

export default App;