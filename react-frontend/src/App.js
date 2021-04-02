import React from 'react';

import Card from './components/card';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<div className="searchbar">
				<NavBar />
			</div>

			<div>
				<div className="text-center font-bold">
					<h1 className="lg:text-9xl text-5xl sm:text-6xl text5xl mb-10 text-blue-600 hover:text-black duration-300">
						Track their promises
					</h1>
					<div className=" text-lg italic text-left mb-2 mx-auto w-2/5 text-gray-800 font-light">
						Companies state numerous goals to the public but have
						they ever fulfilled any of them?{' '}
						<span className=" font-semibold">Accountable</span>, our
						web app, well holds them accountable by detailing
						promises made.
					</div>
				</div>
				<SearchBar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
