import React from "react";

const UniqueStats = ({ rec }) => {
	return (
		<>
			<div className="flex justify-center flex-wrap lg:flex-no-wrap">
				<div className="flex-grow p-4 mx-4 lg:mr-2 lg:ml-8 rounded-lg bg-purple-700 mb-8">
					<div className="py-2 w-full">
						<p className="font-medium text-xl text-gray-200 bold">
							India won <br />
							<span className="title-font font-bold italic font-serif text-5xl text-white">
								{((+rec.count / +rec.century) * 100).toFixed(2)}{" "}
								%
							</span>{" "}
							<br />
							matches, when Sachin scored a century.
						</p>
					</div>
				</div>
				<div className="flex-grow p-4 mx-4 lg:ml-2 lg:mr-8 rounded-lg bg-green-700 mb-8">
					<div className="py-2 w-full">
						<p className="font-medium text-xl text-gray-200 bold">
							In 2010, Sachin became the first cricketer to score{" "}
							<br />
							<span className="title-font font-bold italic font-serif text-5xl text-white">
								200 runs
								<br />
							</span>{" "}
							in an ODI.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UniqueStats;
