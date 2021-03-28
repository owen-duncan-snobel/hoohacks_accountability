import React from 'react';
import PromiseCard from './promise_card';
const Card = ({
	id,
	Company_Name,
	CEO,
	Country,
	Company_Bio,
	created_at,
	updated_at,
	company_promises,
}) => {
	return (
		<body className="flex justify-center items-center my-24">
			<div className="w-full sm:w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-gray-200 text-2xl px-6 py-4 font-bold">
					{Company_Name}
				</div>
				<div className="flex items-center pt-3">
					<div className="ml-4">
						<p className="font-bold">{CEO}</p>
						<p className="text-sm text-gray-700 mt-1">
							Country: {Country}{' '}
						</p>
						<p className="text-sm text-gray-700 mt-1">
							Date created:{' '}
							{new Date(created_at).toISOString().split('T')[0]}
						</p>
						<p className="text-sm text-gray-700 mt-1">
							Date updated:{' '}
							{new Date(updated_at).toISOString().split('T')[0]}
						</p>
					</div>
				</div>

				<div className="flex justify-between items-center px-6 py-4">
					{/* Stats buttons */}

					<div className="text-sm"></div>
				</div>

				<div className="bg-gray-200 text-green-500 text-lg font-bold px-8 py-4">
					Bio
				</div>
				<div className="px-6 py-4 border-t border-gray-200">
					<div className="border rounded-lg p-4 bg-gray-200">
						{Company_Bio}
					</div>
				</div>

				<div className="bg-gray-200 text-gray-700 font-bold text-lg px-6 py-4">
					PROMISES:
					{company_promises.map((promise) => {
						return (
							<PromiseCard
								key={promise.id + promise.created_at}
								promise={promise}
							/>
						);
					})}
					<div className="flex justify-between items-center px-6 py-4">
						<div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
							{
								company_promises.filter((el) => {
									if (el.Promise_Status === 'In_the_works')
										return el;
								}).length
							}{' '}
							Promises In Progess
						</div>
						<div className="bg-red-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							{
								company_promises.filter((el) => {
									if (el.Promise_Status === 'Broken')
										return el;
								}).length
							}{' '}
							Promises Broken
						</div>
						<div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							{
								company_promises.filter((el) => {
									if (el.Promise_Status === 'Kept') return el;
								}).length
							}{' '}
							Promises Fufilled
						</div>
					</div>
				</div>

				<div className="bg-gray-400 px-6 py-1"></div>
			</div>
		</body>
	);
};
export default Card;
