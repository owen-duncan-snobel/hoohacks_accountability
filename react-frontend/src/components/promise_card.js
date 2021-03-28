import React from 'react';

const PromiseCard = ({ promise }) => {
	const promise_date = new Date(promise.Date_Of_Promise)
		.toISOString()
		.split('T')[0];

	const updated_date = new Date(promise.updated_at)
		.toISOString()
		.split('T')[0];

	return (
		<div className="px-6 py-4 border-t border-gray-200">
			<div className="border rounded-lg p-4 bg-gray-200">
				{promise.Promise}
				<p className="text-sm text-gray-700 mt-1">
					Date of Promise: {promise_date}
				</p>
				<p className="text-sm text-gray-700 mt-1">
					Date updated: {updated_date}
				</p>
				<p className="text-sm text-gray-700 mt-1">
					Source:{' '}
					<a target="_blank" href={promise.Source}>
						<i>{promise.Source}</i>
					</a>
				</p>
			</div>
		</div>
	);
};
export default PromiseCard;
