import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Companies from './components/Companies';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';

function App() {
	const theme = {
		main: '#3da9fc',
		dark: '#094067',
		light: '#5f6c7b',
		white: '#fffffe',
		lightblue: '#d8eefe',
	};

	return (
		<ThemeProvider theme={theme}>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Features />
				<Stats />
				<Companies />
			</main>
			<footer>
				<Footer />
			</footer>
		</ThemeProvider>
	);
}

export default App;
