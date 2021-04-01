import React, { useEffect, useState } from 'react';
import Card from './card';
const axios = require('axios');

const SearchBar = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	/**
	 * TODO NEED TO REPLACE AXIOS WITH FETCH FOR HEROKU DEPLOYMENT WITH EXPRESS
	 */
	useEffect(async () => {
		try {
			await axios({
				method: 'GET',
				url: '/companies',
			}).then((res) => {
				setData(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	try {
		if (data && data.length) {
			return (
				<div>
					<div className="bg-white flex rounded-full">
						<div className="flex justify-between w-1/2 mx-auto rounded-full shadow-xl pl-2 pr-2 h-14 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
							<input
								className="rounded-l-mid w-3/4  m-2 py-2 px-2 text-gray-700 text-center leading-tight focus:outline-none rounded-full"
								id="search"
								onChange={(e) => setSearchTerm(e.target.value)}
								type="text"
								placeholder="Enter a company name"
							/>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								width="50px"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					<div>
						{data &&
							data.length &&
							data
								.filter((val) => {
									if (
										val.Company_Name.toLowerCase().includes(
											searchTerm.toLowerCase()
										) ||
										val.CEO.toLowerCase().includes(
											searchTerm.toLowerCase()
										)
									) {
										return val;
									}
								})
								.map((el) => {
									return (
										<Card
											id={el.id}
											key={el.Company_Name}
											Company_Name={el.Company_Name}
											CEO={el.CEO}
											Country={el.Country}
											Company_Bio={el.Company_Bio}
											created_at={el.created_at}
											updated_at={el.updated_at}
											company_promises={
												el.company_promises
											}
										/>
									);
								})}
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="bg-white flex rounded-full">
						<div className="flex justify-between w-1/2 mx-auto rounded-full shadow-xl pl-2 pr-2 h-14 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
							<input
								className="rounded-l-mid w-3/4  m-2 py-2 px-2 text-gray-700 text-center leading-tight focus:outline-none rounded-full"
								id="search"
								onChange={(e) => setSearchTerm(e.target.value)}
								type="text"
								placeholder="Enter a company name"
							/>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								width="50px"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
			);
		}
	} catch (error) {
		console.log(error);
	}
};
export default SearchBar;
