import React from 'react';
import SearchBar from './components/searchbar';

{
	/*import SearchBar from 'material-ui-search-bar';*/
}

/*
Axios:
Get and fetch json
check search state if match comapany name
then render
*/

const axios = require('axios');
function App() {
	return (
		<div className="App">
			<div className="searchbar">
				{/*< SearchBar
      placeholder="Search"
      autoFocus
      />*/}
			</div>

			<div>
				<div className="text-center font-bold">
					<h1 className="lg:text-9xl text-5xl sm:text-6xl text5xl mb-10 text-blue-600 hover:text-black duration-300">
						Track their promises
					</h1>
				</div>
				<SearchBar />
			</div>
		</div>
	);
}

export default App;
