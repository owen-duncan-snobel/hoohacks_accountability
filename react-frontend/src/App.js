import React from 'react';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';

function App() {
	return (
		<div className="App">
			<div className="searchbar">
				{/*< SearchBar
      placeholder="Search"
      autoFocus
      />*/}
			</div>
			{/* 	<NavBar /> */}

			<div className="text-center font-bold">
				<h1 className="lg:text-9xl text-5xl sm:text-6xl text5xl mb-10 text-blue-600 hover:text-grey duration-300">
					Track their promises
				</h1>
			</div>

			<SearchBar />
		</div>
	);
}

export default App;
