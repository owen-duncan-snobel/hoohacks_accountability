import React from 'react';

const Card = () => {
	return (
		<body class="flex justify-center items-center my-24">
			<div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
				<div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">
					Status of Promises
				</div>

				<div class="flex justify-between items-center px-6 py-4">
					{/* Stats buttons*/}

					<div class="flex justify-between items-center px-6 py-4">
						<div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
							2 Promises In Progess
						</div>
						<div class="bg-red-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							23 Promises Broken
						</div>
						<div class="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold hover:text-grey duration-300">
							10 Promises Fufilled
						</div>
					</div>

					<div class="text-sm"></div>
				</div>

				<div class="bg-gray-200 text-gray-700 text-lg px-8 py-4">
					About X Company
				</div>
				<div class="px-6 py-4 border-t border-gray-200">
					<div class="border rounded-lg p-4 bg-gray-200">
						BIO ABOUT PERSON/COMPANY
					</div>
				</div>

				<div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">
					Promises
				</div>
				<div class="px-6 py-4 border-t border-gray-200">
					<div class="border rounded-lg p-4 bg-gray-200">
						PROMISES
						<p class="text-sm text-gray-700 mt-1">
							Date of Promise:
						</p>
						<p class="text-sm text-gray-700 mt-1">Date updated: </p>
						<p class="text-sm text-gray-700 mt-1">Source: </p>
					</div>
				</div>

				<div class="bg-gray-200 px-6 py-4">
					<div class="uppercase text-xs text-gray-600 font-bold">
						Company
					</div>

					<div class="flex items-center pt-3">
						<div class="ml-4">
							<p class="font-bold">CEO of X Company</p>
							<p class="text-sm text-gray-700 mt-1">Country: </p>
							<p class="text-sm text-gray-700 mt-1">
								Date created:
							</p>
							<p class="text-sm text-gray-700 mt-1">
								Date updated:
							</p>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};
export default Card;
