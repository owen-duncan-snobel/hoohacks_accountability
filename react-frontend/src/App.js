import React from 'react';

import Card from './components/card';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
{/*import SearchBar from 'material-ui-search-bar';*/}

function App() {
	return (
		<div className="App">
			<div className="searchbar">
				{/*< SearchBar
      placeholder="Search"
      autoFocus
      />*/}

      </div>
      

			</div>
			{/* 	<NavBar /> */}

			<div className="text-center font-bold">
				<h1 className="lg:text-9xl text-5xl sm:text-6xl text5xl mb-10 text-blue-600 hover:text-grey duration-300">
					Track their promises
				</h1>
			</div>

			<SearchBar />
		</div>
        
  
          <div className="bg-white flex items-center rounded-full shadow-xl ml-4">
            <input className="rounded-l-mid  m-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Enter a company name"/>
    
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              </button>
        </div>
        
    </div>
    <Card/>
  </div>

      </div>
  );

	);

}

export default App;
