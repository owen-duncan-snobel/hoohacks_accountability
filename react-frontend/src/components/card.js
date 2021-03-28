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
			<div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">
					Status of Promises
				</div>

				<div className="flex justify-between items-center px-6 py-4">
					{/* Stats buttons*/}

					<div className="flex justify-between items-center px-6 py-4">
						<div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
							2 Promises In Progess
						</div>
						<div className="bg-red-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							23 Promises Broken
						</div>
						<div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							10 Promises Fufilled
						</div>
					</div>

					<div className="text-sm"></div>
				</div>

				<div className="bg-gray-200 text-gray-700 text-lg px-8 py-4">
					About {Company_Name}
				</div>
				<div className="px-6 py-4 border-t border-gray-200">
					<div className="border rounded-lg p-4 bg-gray-200">
						{Company_Bio}
					</div>
				</div>

				<div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">
					Promises
				</div>

				{company_promises.map((promise) => {
					return (
						<PromiseCard
							key={promise.id + promise.created_at}
							promise={promise}
						/>
					);
				})}
				<div className="bg-gray-200 px-6 py-4">
					<div className="uppercase text-xs text-gray-600 font-bold">
						{Country}
					</div>

					<div className="flex items-center pt-3">
						<div className="ml-4">
							<p className="font-bold">CEO: {CEO}</p>
							<p className="text-sm text-gray-700 mt-1">
								Country:{' '}
							</p>
							<p className="text-sm text-gray-700 mt-1">
								Date created: {created_at}
							</p>
							<p className="text-sm text-gray-700 mt-1">
								Date updated: {updated_at}
							</p>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};
export default Card;
