import React, { useReducer } from 'react';

const PromiseCard = ({ promise }) => {
	let categoryName = promise.Categories;
	let button = '';
	switch (categoryName) {
		case 'Education':
			button = (
				<button
					className={
						'bg-pink-700 hover:bg-pink-600 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Education
				</button>
			);
			break;
		case 'Gender_Equality':
			button = (
				<button
					className={
						'bg-red-500 hover:bg-red-400 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Gender Equality
				</button>
			);
			break;
		case 'Affordable_and_Clean_Energy':
			button = (
				<button
					className={
						'bg-indigo-500 hover:bg-indigo-400 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Affordable and Clean Energy
				</button>
			);
			break;
		case 'Sustainable_Cities_and_Communities':
			button = (
				<button
					className={
						'bg-red-700 hover:bg-red-600 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Sustainable Cities and Communities
				</button>
			);
			break;
		case 'Peace_and_Justice_Strong_Institutions':
			button = (
				<button
					className={
						'bg-yellow-900 hover:bg-yellow-900 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Peace and Justice Strong Institutions
				</button>
			);
			break;
		case 'Responsible_Consumption_and_Production':
			button = (
				<button
					className={
						'bg-yellow-600 hover:bg-yellow-500 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Responsible Consumption and Production
				</button>
			);
			break;
		case 'Economic_Growth':
			button = (
				<button
					className={
						'bg-blue-600 hover:bg-blue-500 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Economic Growth
				</button>
			);
			break;
		case 'Reduced_Inequality':
			button = (
				<button
					className={
						'bg-indigo-500 hover:bg-indigo-400 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Reduced Inequality
				</button>
			);
			break;
		case 'Innovation_and_Infrastructure':
			button = (
				<button
					className={
						'bg-purple-200 hover:bg-purple-100 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Innovation_and_Infrastructure
				</button>
			);
			break;
		case 'Clean_Water':
			button = (
				<button
					className={
						'bg-blue-500 hover:bg-blue-400 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Clean Water
				</button>
			);
			break;
		case 'Climate_Action':
			button = (
				<button
					className={
						'bg-purple-700 hover:bg-purple-600 opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
					Climate Action
				</button>
			);
			break;
		default:
			button = (
				<button
					className={
						' opacity-75 text-white font-bold py-1 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
					}
				>
					{' '}
				</button>
			);
			break;
	}

	const promise_date = new Date(promise.Date_Of_Promise)
		.toISOString()
		.split('T')[0];

	const updated_date = new Date(promise.updated_at)
		.toISOString()
		.split('T')[0];

	return (
		<div className="px-6 py-4 border-t border-gray-200">
			<div className="border rounded-lg p-4 bg-gray-200">
				<p className="text-gray-900 p-1">{promise.Promise}</p>
				<p className="text-sm text-gray-700 mt-1 leading-tight">
					Date of Promise: {promise_date}
				</p>
				<p className="text-sm text-gray-700 mt-1 leading-tight">
					Date updated: {updated_date}
				</p>
				<p className="text-sm text-gray-700 mt-1 leading-tight">
					Source:{' '}
					<a target="_blank" href={promise.Source}>
						<i>{promise.Source}</i>
					</a>
				</p>
			</div>

			<div className="px-6 py-4 border-t border-gray-200">
				<div className="border rounded-lg p-4 bg-gray-200">
					{button}
				</div>
			</div>
		</div>
	);
};
export default PromiseCard;
