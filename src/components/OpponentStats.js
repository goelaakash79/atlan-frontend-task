import React, { useState, Suspense, useEffect } from "react";
import { getTeamData } from "../data/data.functions";
// import OpponentRunChart from "./OpponentRunChart";

const OpponentRunChart = React.lazy(() => import("./OpponentRunChart"));
const OpponentStats = ({ teams }) => {
	const [stats, setStats] = useState({});

	useEffect(() => {
		(async (e) => {
			const data = await getTeamData("Austraila");
			setStats(data);
		})();
	}, []);

	const handleTeamChange = async (e) => {
		const data = await getTeamData(e.target.value);
		setStats(data);
	};

	const dis = stats.runs !== 0 ? "block" : "none";

	return (
		<div className="flex flex-col mx-8 justify-center">
			<div className="w-full md:w-1/2 mb-6 md:mb-0">
				<label
					className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					htmlFor="grid-state"
				>
					Select Opponent
				</label>
				<div className="relative">
					<select
						className="block appearance-none w-full bg-gray-400 border-2 border-gray-400 text-gray-700 font-bold py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={(e) => handleTeamChange(e)}
						defaultValue="Select"
					>
						<option disabled>Select</option>
						{teams.map((team) => (
							<option key={team}>{team}</option>
						))}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</div>
			<Suspense fallback={<div>Preparing stats</div>}>
				<OpponentRunChart stats={stats} />
			</Suspense>

			<div
				className="mt-8 mx-auto flex flex-wrap justify-center"
				style={{ display: dis }}
			>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.runs} runs
				</span>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.centuries} centuries
				</span>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.fifties} fifties
				</span>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.wickets} wickets
				</span>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.catches} catches
				</span>
				<span className="mr-2 mb-4 px-2 py-1 font-bold bold bg-blue-700 text-white rounded">
					{stats.matches} matches
				</span>
			</div>
		</div>
	);
};

export default OpponentStats;
