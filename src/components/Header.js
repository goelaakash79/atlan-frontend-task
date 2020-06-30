import React, { useEffect, useState } from "react";
import stHeader from "../media/st-header.jpg";
import { getTotalRuns, debut } from "../data/data.functions";

const Header = () => {
	const [totalRuns, setTotalRuns] = useState(null);

	useEffect(() => {
		const allRuns = getTotalRuns();
		setTotalRuns(allRuns);
	}, []);

	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
					<div className="w-full sm:p-4 px-4 mb-6">
						<h1 className="title-font font-serif text-blue-700 sm:text-5xl text-4xl mb-4 font-bold">
							Sachin Tendulkar
							<hr />
						</h1>
						<span className="sm:text-lg text-gray-700 title-font text-md font-medium mb-2">
							The ODI-Career Timline
						</span>
						<div className="leading-relaxed">
							Hop-in for a ride to get a gist of life-long career
							of Master Blaster. This is the implementation of a
							task given by <code>Atlan</code> to justify if
							Sachin is the great cricketer or not.
						</div>
					</div>
					<div className="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
						<h2 className="title-font font-serif font-bold text-4xl text-blue-700">
							{debut()}
						</h2>
						<p className="leading-relaxed">ODI Debut</p>
					</div>
					<div className="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
						<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
							{totalRuns}
						</h2>
						<p className="leading-relaxed">Runs Scored</p>
					</div>
				</div>
				<div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
					<img
						className="object-cover object-center w-full h-full"
						src={stHeader}
						alt="stats"
					/>
				</div>
			</div>
		</section>
	);
};

export default Header;
